// The rules a scene applies to lights and ACs. These are the semantics every surface
// shares: the panel's store applies them to the devices, the editor edits them, the AI's
// plan editor validates them. See docs/floor-plan.md § scenes.
import { describe, it, expect } from 'vitest';
import { own, rule, setRule, applyTo, capture, validate, SCENE_ICONS } from './scene-rules.js';

const light = (id) => ({ id, name: id, room: 'living', type: 'ceiling', pos: [1, 1], capabilities: [] });
const ac = (id) => ({ id, name: id, room: 'living', wall: 'north', pos: [1, 0], min: 16, max: 30 });
const config = {
  lights: [light('living.main'), light('living.floor')],
  acs: [ac('living.ac')],
};
const state = () => ({
  lights: {
    'living.main': { on: false, brightness: 0.8, temp: 3000, color: null },
    'living.floor': { on: false, brightness: 0.8, temp: 3000, color: null },
  },
  acs: { 'living.ac': { on: false, target: 24, mode: 'cool', fan: 'auto' } },
});

describe('own', () => {
  it('returns the device entry, and nothing when the scene says nothing about it', () => {
    const scene = { lights: { 'living.main': { on: true } }, acs: {} };
    expect(own(scene, 'light', 'living.main')).toEqual({ on: true });
    expect(own(scene, 'light', 'living.floor')).toBeUndefined();
    expect(own(scene, 'ac', 'living.main')).toBeUndefined();
  });

  it('can read the "*" entry', () => {
    expect(own({ lights: { '*': { on: false } } }, 'light', '*')).toEqual({ on: false });
  });
});

describe('rule', () => {
  it('merges the "*" default with the device entry, the device winning', () => {
    const scene = { lights: { '*': { on: false }, 'living.main': { on: true, brightness: 0.3 } } };
    expect(rule(scene, 'light', 'living.main')).toEqual({ on: true, brightness: 0.3 });
    // A light with no entry of its own still gets the default: that is what the scene does to it.
    expect(rule(scene, 'light', 'living.floor')).toEqual({ on: false });
  });

  it('returns an empty patch when the scene touches neither "*" nor the device', () => {
    expect(rule({ lights: { 'living.main': { on: true } } }, 'light', 'living.floor')).toEqual({});
  });

  it('reads AC rules too', () => {
    const scene = { acs: { '*': { on: true }, 'living.ac': { target: 21 } } };
    expect(rule(scene, 'ac', 'living.ac')).toEqual({ on: true, target: 21 });
  });
});

describe('setRule', () => {
  it('writes a device entry and keeps the others', () => {
    const scene = { lights: { 'living.floor': { on: true } } };
    setRule(scene, 'light', 'living.main', { on: true, brightness: 0.5 });
    expect(scene.lights).toEqual({ 'living.floor': { on: true }, 'living.main': { on: true, brightness: 0.5 } });
  });

  it('merges into what the entry already had', () => {
    const scene = { lights: { 'living.main': { on: true, brightness: 0.9 } } };
    setRule(scene, 'light', 'living.main', { brightness: 0.2 });
    expect(scene.lights['living.main']).toEqual({ on: true, brightness: 0.2 });
  });

  it('drops the entry when nothing is left to set', () => {
    const scene = { lights: { 'living.main': { on: true }, 'living.floor': { on: true } } };
    setRule(scene, 'light', 'living.main', { on: undefined });
    expect(scene.lights).toEqual({ 'living.floor': { on: true } });
  });

  it('keeps "*" like any other entry', () => {
    const scene = { lights: {} };
    setRule(scene, 'light', '*', { on: false });
    expect(scene.lights['*']).toEqual({ on: false });
  });
});

describe('applyTo', () => {
  it('one patch per device the scene mentions, the "*" default included', () => {
    const scene = { lights: { '*': { on: false }, 'living.main': { on: true } }, acs: {} };
    const s = state();
    expect(applyTo(s, scene)).toEqual([
      { kind: 'light', id: 'living.main', patch: { on: true } },
      { kind: 'light', id: 'living.floor', patch: { on: false } },
    ]);
  });

  it('leaves out a device the scene says nothing about', () => {
    const scene = { lights: { 'living.main': { on: true } }, acs: {} };
    const s = state();
    expect(applyTo(s, scene)).toEqual([{ kind: 'light', id: 'living.main', patch: { on: true } }]);
  });

  it('a scene setting a white temperature clears the colour, so no stale colour survives', () => {
    const scene = { lights: { 'living.main': { on: true, temp: 4000 } }, acs: {} };
    const s = state();
    s.lights['living.main'].color = '#7b5cff';
    s.lights['living.main'].on = false;
    expect(applyTo(s, scene)).toEqual([{ kind: 'light', id: 'living.main', patch: { on: true, temp: 4000, color: null } }]);
  });

  it('a scene setting a colour leaves the temperature alone', () => {
    const scene = { lights: { 'living.main': { color: '#7b5cff' } }, acs: {} };
    const s = state();
    expect(applyTo(s, scene)).toEqual([{ kind: 'light', id: 'living.main', patch: { color: '#7b5cff' } }]);
  });

  it('applies AC rules with the same "*" merge', () => {
    const scene = { lights: {}, acs: { '*': { on: true }, 'living.ac': { target: 21 } } };
    const s = state();
    s.acs['living.ac'].on = true;
    expect(applyTo(s, scene)).toEqual([{ kind: 'ac', id: 'living.ac', patch: { on: true, target: 21 } }]);
  });
});

describe('capture', () => {
  it('takes each device exactly as it stands, ready to be a scene', () => {
    const s = state();
    s.lights['living.main'] = { on: true, brightness: 0.42, temp: 3000, color: null };
    s.lights['living.floor'] = { on: false, brightness: 0.8, temp: 2600, color: null };
    s.acs['living.ac'] = { on: true, target: 23, mode: 'cool', fan: 'low' };
    expect(capture(s)).toEqual({
      lights: {
        'living.main': { on: true, brightness: 0.42, temp: 3000, color: null },
        'living.floor': { on: false, brightness: 0.8, temp: 2600, color: null },
      },
      acs: { 'living.ac': { on: true, target: 23, mode: 'cool', fan: 'low' } },
    });
  });

  it('captures the state so exactly that re-applying it moves no device', () => {
    const s = state();
    s.lights['living.main'] = { on: true, brightness: 0.42, temp: 3000, color: null };
    s.acs['living.ac'] = { on: true, target: 23, mode: 'cool', fan: 'low' };
    // applyTo says what the scene means; the store's writeLight keeps whatever already
    // matches. So the proof here is that no captured field differs from the state.
    for (const { kind, id, patch } of applyTo(s, capture(s))) {
      const current = kind === 'light' ? s.lights[id] : s.acs[id];
      for (const [key, value] of Object.entries(patch)) expect(current[key], `${id}.${key}`).toBe(value);
    }
  });
});

describe('validate', () => {
  const scene = { id: 'cozy', name: 'Cozy', icon: 'sun', lights: {}, acs: {} };
  const ok = (lights, acs) => validate({ ...scene, lights, acs }, config);

  it('accepts a well-formed scene', () => {
    expect(ok({ '*': { on: true }, 'living.main': { brightness: 0.6 } }, { '*': { on: false } })).toEqual([]);
  });

  it('rejects a light the plan does not have', () => {
    expect(ok({ 'living.gone': { on: true } }, {})).toHaveLength(1);
    expect(ok({ 'living.gone': { on: true } }, {})[0]).toMatch(/unknown light/);
  });

  it('rejects an AC the plan does not have', () => {
    expect(ok({}, { 'living.gone': { on: true } })[0]).toMatch(/unknown AC/);
  });

  it('rejects a brightness outside 0–1', () => {
    expect(ok({ 'living.main': { brightness: 60 } }, {})[0]).toMatch(/brightness/);
    // 0 is refused, as the AI's editor already did: store.js clamps to 0.05, so 0 is not a
    // brightness a scene can mean.
    expect(ok({ 'living.main': { brightness: 0 } }, {})[0]).toMatch(/brightness/);
    expect(ok({ 'living.main': { brightness: 0.6 } }, {})).toEqual([]);
  });

  it('rejects an unknown mode and an unknown fan speed', () => {
    expect(ok({}, { 'living.ac': { mode: 'freeze' } })[0]).toMatch(/mode/);
    expect(ok({}, { 'living.ac': { fan: 'loud' } })[0]).toMatch(/fan/);
  });

  it('rejects an unknown icon', () => {
    expect(validate({ ...scene, icon: 'rocket' }, config)[0]).toMatch(/icon/);
  });

  // The editor offers nine icons and docs/floor-plan.md documents nine; only the AI's own
  // list was shorter, so "table" was accepted in the editor and refused in a chat.
  it('accepts every icon the editor offers', () => {
    for (const icon of SCENE_ICONS) expect(validate({ ...scene, icon }, config), icon).toEqual([]);
  });
});

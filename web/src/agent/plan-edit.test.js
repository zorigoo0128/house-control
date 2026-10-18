// The AI's plan edits share the scene rules with the editor and the panel (scene-rules.js),
// so an icon or a value one of them offers is never refused by another.
import { describe, it, expect } from 'vitest';
import { applyOperations, replacePlan, PlanEditError } from './plan-edit.js';

const plan = () => ({
  name: 'Home',
  rooms: [
    { id: 'living', name: 'Living', rect: [0, 0, 4, 3], floor: 'oak' },
    { id: 'hall', name: 'Hall', rect: [4, 0, 2, 3], floor: 'oak' },
  ],
  lights: [{ id: 'living.main', name: 'Ceiling', room: 'living', type: 'ceiling', pos: [1, 1], capabilities: [] }],
  acs: [{ id: 'living.ac', name: 'AC', room: 'living', wall: 'north', pos: [1, 0] }],
  scenes: [],
});

const withGroup = (lights = ['living.main']) => ({ ...plan(), groups: [{ id: 'main', name: 'Main lights', lights }] });

describe('AI scene edits', () => {
  it('takes every icon the editor offers', () => {
    const { plan: out } = applyOperations(plan(), [
      { op: 'add_scene', id: 'cozy', name: 'Cozy', icon: 'table', lights: { 'living.main': { on: true } } },
    ]);
    expect(out.scenes[0].icon).toBe('table');
  });

  it('refuses a scene that names a light the plan does not have', () => {
    expect(() => applyOperations(plan(), [{ op: 'add_scene', id: 'x', lights: { ghost: { on: true } } }]))
      .toThrow(/unknown light/);
  });

  it('refuses a brightness outside 0–1', () => {
    expect(() => applyOperations(plan(), [{ op: 'add_scene', id: 'x', lights: { 'living.main': { brightness: 60 } } }]))
      .toThrow(/brightness/);
  });

  it('refuses an unknown AC mode', () => {
    expect(() => applyOperations(plan(), [{ op: 'add_scene', id: 'x', acs: { 'living.ac': { mode: 'freeze' } } }]))
      .toThrow(/mode/);
  });

  it('still refuses an unknown icon', () => {
    expect(() => applyOperations(plan(), [{ op: 'add_scene', id: 'x', icon: 'rocket' }])).toThrow(PlanEditError);
  });
});

describe('AI light group edits', () => {
  it('adds a group of lights, with the icon every surface offers', () => {
    const { plan: out } = applyOperations(plan(), [{ op: 'add_group', id: 'main', name: 'Main', icon: 'sofa', lights: ['living.main'] }]);
    expect(out.groups[0]).toEqual({ id: 'main', name: 'Main', icon: 'sofa', lights: ['living.main'] });
  });

  it('refuses a group that names a light the plan does not have', () => {
    expect(() => applyOperations(plan(), [{ op: 'add_group', id: 'main', lights: ['ghost'] }]))
      .toThrow(/no light "ghost"/);
  });

  it('refuses the same light twice', () => {
    expect(() => applyOperations(plan(), [{ op: 'add_group', id: 'main', lights: ['living.main', 'living.main'] }]))
      .toThrow(/twice/);
  });

  it('refuses an id that is taken', () => {
    expect(() => applyOperations(withGroup(), [{ op: 'add_group', id: 'main', lights: [] }])).toThrow(/already exists/);
  });

  it('changes a group through set', () => {
    const { plan: out } = applyOperations(withGroup(), [{ op: 'update_group', id: 'main', set: { name: 'Ceiling', lights: [] } }]);
    expect(out.groups[0]).toEqual({ id: 'main', name: 'Ceiling', icon: 'sparkles', lights: [] });
  });

  it('removes a group', () => {
    expect(applyOperations(withGroup(), [{ op: 'remove_group', id: 'main' }]).plan.groups).toEqual([]);
  });

  it('drops a lamp that is removed from every group it was in', () => {
    expect(applyOperations(withGroup(), [{ op: 'remove_light', id: 'living.main' }]).plan.groups[0].lights).toEqual([]);
  });

  it('drops the lamps of a removed room', () => {
    expect(applyOperations(withGroup(), [{ op: 'remove_room', id: 'living' }]).plan.groups[0].lights).toEqual([]);
  });

  it('keeps the groups of a plan written whole, and refuses one that names a missing light', () => {
    expect(replacePlan(plan(), withGroup()).plan.groups[0].lights).toEqual(['living.main']);
    expect(() => replacePlan(plan(), withGroup(['ghost']))).toThrow(/unknown light/);
  });
});

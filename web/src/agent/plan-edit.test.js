// The AI's plan edits share the scene rules with the editor and the panel (scene-rules.js),
// so an icon or a value one of them offers is never refused by another.
import { describe, it, expect } from 'vitest';
import { applyOperations, PlanEditError } from './plan-edit.js';

const plan = () => ({
  name: 'Home',
  rooms: [{ id: 'living', name: 'Living', rect: [0, 0, 4, 3], floor: 'oak' }],
  lights: [{ id: 'living.main', name: 'Ceiling', room: 'living', type: 'ceiling', pos: [1, 1], capabilities: [] }],
  acs: [{ id: 'living.ac', name: 'AC', room: 'living', wall: 'north', pos: [1, 0] }],
  scenes: [],
});

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

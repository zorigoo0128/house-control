// The floor plan loader. A light group is part of the plan, so the panel, the editor and the
// AI all refuse the same broken ones. See docs/floor-plan.md § groups.
import { describe, it, expect } from 'vitest';
import { normalize, ConfigError } from './config.js';

const plan = (extra) => ({
  rooms: [{ id: 'living', name: 'Living', rect: [0, 0, 4, 3] }],
  lights: [
    { id: 'living.main', room: 'living', type: 'ceiling', pos: [1, 1] },
    { id: 'living.floor', room: 'living', type: 'floor', pos: [3, 1] },
  ],
  ...extra,
});

const groups = (...gs) => normalize(plan({ groups: gs })).groups;

describe('light groups', () => {
  it('defaults to none', () => {
    expect(normalize(plan()).groups).toEqual([]);
  });

  it('keeps the id, the name and the icon, and fills in what is missing', () => {
    expect(groups({ id: 'main', name: 'Main lights', icon: 'sofa', lights: ['living.main'] })[0])
      .toEqual({ id: 'main', name: 'Main lights', icon: 'sofa', lights: ['living.main'] });
    expect(groups({ id: 'main', lights: ['living.main'] })[0])
      .toEqual({ id: 'main', name: 'main', icon: 'sparkles', lights: ['living.main'] });
  });

  it('allows the same light in two groups', () => {
    expect(groups({ id: 'a', lights: ['living.main'] }, { id: 'b', lights: ['living.main'] })).toHaveLength(2);
  });

  it('allows an empty group: the editor makes one before it is filled in', () => {
    expect(groups({ id: 'main', name: 'Later', lights: [] })[0].lights).toEqual([]);
  });

  it('refuses a light the plan does not have', () => {
    expect(() => groups({ id: 'main', lights: ['living.ghost'] })).toThrow(/unknown light "living.ghost"/);
  });

  it('refuses the same light twice', () => {
    expect(() => groups({ id: 'main', lights: ['living.main', 'living.main'] })).toThrow(/twice/);
  });

  it('refuses a lights list that is not a list', () => {
    expect(() => groups({ id: 'main', lights: { 'living.main': true } })).toThrow(/needs "lights"/);
  });

  it('refuses an id the rest of the plan already uses', () => {
    expect(() => groups({ id: 'living', lights: [] })).toThrow(/Duplicate id "living"/);
    expect(() => groups({ id: 'living.main', lights: [] })).toThrow(/Duplicate id/);
  });

  it('refuses a group with no id', () => {
    expect(() => groups({ name: 'Main' })).toThrow(ConfigError);
  });
});

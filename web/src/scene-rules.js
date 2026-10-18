// The rules a scene applies to the lights and ACs of a home, in one place. The panel's
// store applies them to the devices, the home editor edits them and the AI's plan editor
// validates them, so the three can never drift apart. See docs/floor-plan.md § scenes.
//
// Nothing here touches the DOM (unlike store.js, which imports bridge.js): the rules are
// pure, so they are the part of the app with tests.

/// A scene's map for a device kind: "lights" for a light, "acs" for an AC.
const KIND_MAP = { light: 'lights', ac: 'acs' };

export const SCENE_ICONS = ['sun', 'sofa', 'film', 'moon', 'door', 'table', 'bed', 'tv', 'sparkles'];
export const AC_MODES = ['cool', 'heat', 'dry', 'fan', 'auto'];
export const AC_FANS = ['auto', 'low', 'medium', 'high', 'turbo'];
export const AC_SWINGS = ['swing', 'l1', 'l2', 'l3', 'l4', 'l5', 'off'];

/** What a scene says about one device on its own; undefined when it says nothing. */
export function own(scene, kind, id) {
  return scene?.[KIND_MAP[kind]]?.[id];
}

/** The patch a scene applies to one device: the "*" entry it inherits, with its own on top. */
export function rule(scene, kind, id) {
  const map = scene?.[KIND_MAP[kind]] || {};
  return { ...(map['*'] || {}), ...(map[id] || {}) };
}

/** Sets what a scene says about one device. A field set to `undefined` is unset, and a
 *  device left with nothing to set drops out of the scene altogether. Returns the scene. */
export function setRule(scene, kind, id, patch) {
  const map = scene[KIND_MAP[kind]] || (scene[KIND_MAP[kind]] = {});
  const merged = { ...(map[id] || {}), ...patch };
  for (const key of Object.keys(merged)) if (merged[key] === undefined) delete merged[key];
  if (Object.keys(merged).length) map[id] = merged;
  else delete map[id];
  return scene;
}

/** The changes a scene means for the home as it stands now: one entry per device it
 *  actually moves, in the order the store sends them. */
export function applyTo(state, scene) {
  const out = [];
  for (const kind of ['light', 'ac']) {
    for (const id of Object.keys(state[KIND_MAP[kind]] || {})) {
      const patch = rule(scene, kind, id);
      // A scene that sets a white temperature should not be overridden by a stale colour.
      if (kind === 'light' && !('color' in patch) && 'temp' in patch) patch.color = null;
      if (Object.keys(patch).length) out.push({ kind, id, patch });
    }
  }
  return out;
}

/** A scene's rules as the devices stand right now: the basis of "capture what I see". */
export function capture(state) {
  const lights = {}, acs = {};
  for (const [id, s] of Object.entries(state.lights || {})) {
    lights[id] = { on: Boolean(s.on), brightness: s.brightness, temp: s.temp, color: s.color ?? null };
  }
  for (const [id, s] of Object.entries(state.acs || {})) {
    acs[id] = { on: Boolean(s.on), target: s.target, mode: s.mode, fan: s.fan };
  }
  return { lights, acs };
}

/** Everything wrong with a scene as `config` sees the home; empty when it is fine. */
export function validate(scene, config) {
  const errors = [];
  if (scene.icon != null && !SCENE_ICONS.includes(scene.icon)) {
    errors.push(`"icon" must be one of ${SCENE_ICONS.join(', ')}`);
  }
  const ids = {
    light: new Set((config.lights || []).map((l) => l.id)),
    ac: new Set((config.acs || []).map((a) => a.id)),
  };
  for (const kind of ['light', 'ac']) {
    for (const [id, patch] of Object.entries(scene[KIND_MAP[kind]] || {})) {
      if (id !== '*' && !ids[kind].has(id)) errors.push(`unknown ${kind === 'light' ? 'light' : 'AC'} "${id}"`);
      if (kind === 'light') {
        if (patch.brightness != null && !(patch.brightness > 0 && patch.brightness <= 1)) {
          errors.push('scene brightness is 0–1 (0.6 = 60%)');
        }
        if (patch.temp != null && !(patch.temp >= 2200 && patch.temp <= 6500)) {
          errors.push('scene colour temperature is 2200–6500 K');
        }
        if (patch.color != null && !/^#[0-9a-f]{6}$/i.test(patch.color)) errors.push('scene colour must be "#rrggbb"');
      } else {
        if (patch.mode != null && !AC_MODES.includes(patch.mode)) errors.push(`"mode" must be one of ${AC_MODES.join(', ')}`);
        if (patch.fan != null && !AC_FANS.includes(patch.fan)) errors.push(`"fan" must be one of ${AC_FANS.join(', ')}`);
      }
    }
  }
  return errors;
}

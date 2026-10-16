// A small re-implementation of Webflow IX2 "continuous" interactions:
// scroll-progress and mouse-position timelines that interpolate keyframed
// transform / opacity / filter values onto elements, with per-frame smoothing.

export type Prop =
  | 'x' | 'y' | 'z'
  | 'rx' | 'ry' | 'rz'
  | 's' | 'sx' | 'sy'
  | 'o'
  | 'gray' | 'bright'
  | 'w' | 'h'
  | 'bgA';

/** [selector ('&' = the root element itself), property, keyframes as [percent, value][], unit] */
export type Track = [selector: string, prop: Prop, frames: Array<[number, number]>, unit?: string];

export interface ScrollConfig {
  startsEntering?: boolean;
  startOffset?: number;
  startsExiting?: boolean;
  endOffset?: number;
  /** 0–100, higher is smoother (Webflow semantics) */
  smoothing?: number;
  /** only active while this media query matches */
  media?: string;
}

const DEFAULT_UNITS: Record<Prop, string> = {
  x: 'px', y: 'px', z: 'px',
  rx: 'deg', ry: 'deg', rz: 'deg',
  s: '', sx: '', sy: '',
  o: '',
  gray: '%', bright: '%',
  w: 'px', h: 'px',
  bgA: '',
};

type Values = Partial<Record<Prop, { v: number; u: string }>>;

/** Webflow's SCROLLING_IN_VIEW progress (0–1) for an element. */
export function scrollProgress(el: Element, cfg: ScrollConfig): number {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const sh = document.documentElement.scrollHeight;
  let w = (cfg.startOffset ?? 0) / 100;
  let d = (cfg.endOffset ?? 0) / 100;
  w = cfg.startsEntering ? w : 1 - w;
  d = cfg.startsExiting ? d : 1 - d;
  const m = r.top + Math.min(r.height * w, vh);
  const o = r.top + r.height * d - m;
  const k = Math.min(vh + o, sh);
  if (k <= 0) return 0;
  return Math.min(Math.max(0, vh - m), k) / k;
}

function sample(frames: Array<[number, number]>, p: number): number {
  if (p <= frames[0][0]) return frames[0][1];
  const last = frames[frames.length - 1];
  if (p >= last[0]) return last[1];
  for (let i = 1; i < frames.length; i++) {
    const [p1, v1] = frames[i];
    if (p <= p1) {
      const [p0, v0] = frames[i - 1];
      return p1 === p0 ? v1 : v0 + ((v1 - v0) * (p - p0)) / (p1 - p0);
    }
  }
  return last[1];
}

function apply(el: HTMLElement, vals: Values) {
  const g = (p: Prop, d: number) => vals[p]?.v ?? d;
  const u = (p: Prop) => vals[p]?.u ?? DEFAULT_UNITS[p];
  const has = (...ps: Prop[]) => ps.some((p) => vals[p] !== undefined);

  if (has('x', 'y', 'z', 'rx', 'ry', 'rz', 's', 'sx', 'sy')) {
    const s = vals.s?.v;
    const sx = s ?? g('sx', 1);
    const sy = s ?? g('sy', 1);
    el.style.transform =
      `translate3d(${g('x', 0)}${u('x')}, ${g('y', 0)}${u('y')}, ${g('z', 0)}${u('z')}) ` +
      `scale3d(${sx}, ${sy}, 1) rotateX(${g('rx', 0)}deg) rotateY(${g('ry', 0)}deg) rotateZ(${g('rz', 0)}deg)`;
  }
  if (vals.o) el.style.opacity = String(vals.o.v);
  if (has('gray', 'bright')) {
    el.style.filter = `grayscale(${g('gray', 0)}%) brightness(${g('bright', 100)}%)`;
  }
  if (vals.w) el.style.width = `${vals.w.v}${vals.w.u}`;
  if (vals.h) el.style.height = `${vals.h.v}${vals.h.u}`;
  if (vals.bgA) el.style.backgroundColor = `rgba(255, 255, 255, ${vals.bgA.v})`;
}

interface Bound {
  els: HTMLElement[];
  prop: Prop;
  unit: string;
  frames: Array<[number, number]>;
}

function bind(root: ParentNode, tracks: Track[]): Bound[] {
  return tracks.map(([sel, prop, frames, unit]) => ({
    els: sel === '&' ? [root as HTMLElement] : [...root.querySelectorAll<HTMLElement>(sel)],
    prop,
    unit: unit ?? DEFAULT_UNITS[prop],
    frames: [...frames].sort((a, b) => a[0] - b[0]),
  }));
}

/** Render a set of bound tracks at progress p (0–100), merging per element. */
function render(bound: Bound[], p: number) {
  const perEl = new Map<HTMLElement, Values>();
  for (const b of bound) {
    const v = sample(b.frames, p);
    for (const el of b.els) {
      let vals = perEl.get(el);
      if (!vals) perEl.set(el, (vals = {}));
      vals[b.prop] = { v, u: b.unit };
    }
  }
  perEl.forEach((vals, el) => apply(el, vals));
}

function clearStyles(bound: Bound[]) {
  for (const b of bound) for (const el of b.els) {
    el.style.transform = '';
    el.style.opacity = '';
    el.style.filter = '';
    el.style.width = '';
    el.style.height = '';
    el.style.backgroundColor = '';
  }
}

const lerpFactor = (smoothing = 0) => Math.max(0.03, 1 - smoothing / 100);

interface Timeline {
  tick(): void;
}
const timelines: Timeline[] = [];
let running = false;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function loop() {
  for (const t of timelines) t.tick();
  requestAnimationFrame(loop);
}
function start() {
  if (running) return;
  running = true;
  requestAnimationFrame(loop);
}

/**
 * Drive `tracks` (resolved inside `root`) from the scroll progress of `trigger`.
 * `onProgress` receives the smoothed progress (0–100) for custom effects.
 */
export function scrollTimeline(
  trigger: Element,
  cfg: ScrollConfig,
  tracks: Track[],
  root: ParentNode = trigger,
  onProgress?: (p: number) => void,
) {
  const bound = bind(root, tracks);
  const mq = cfg.media ? window.matchMedia(cfg.media) : null;
  let current = -1;
  let wasActive = false;
  timelines.push({
    tick() {
      const active = !mq || mq.matches;
      if (!active) {
        if (wasActive) clearStyles(bound);
        wasActive = false;
        current = -1;
        return;
      }
      wasActive = true;
      const target = scrollProgress(trigger, cfg) * 100;
      if (current < 0 || reduceMotion.matches) current = target;
      else current += (target - current) * lerpFactor(cfg.smoothing);
      if (Math.abs(target - current) < 0.01) current = target;
      render(bound, current);
      onProgress?.(current);
    },
  });
  start();
}

export interface MouseConfig {
  smoothing?: number;
  /** resting position (0–100) when the pointer leaves */
  resting?: number;
  media?: string;
  /** measure against the viewport instead of the trigger element */
  viewport?: boolean;
}

/** Drive tracks from the pointer position over `trigger` (X and Y axes). */
export function mouseTimeline(
  trigger: HTMLElement,
  cfg: MouseConfig,
  tracksX: Track[],
  tracksY: Track[],
  root: ParentNode = trigger,
) {
  const bx = bind(root, tracksX);
  const by = bind(root, tracksY);
  const rest = cfg.resting ?? 50;
  const mq = cfg.media ? window.matchMedia(cfg.media) : null;
  const target = { x: rest, y: rest };
  const cur = { x: rest, y: rest };
  trigger.addEventListener('pointermove', (e) => {
    const r = cfg.viewport
      ? { left: 0, top: 0, width: innerWidth, height: innerHeight }
      : trigger.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width) * 100;
    target.y = ((e.clientY - r.top) / r.height) * 100;
  });
  trigger.addEventListener('pointerleave', () => {
    target.x = rest;
    target.y = rest;
  });
  let first = true;
  timelines.push({
    tick() {
      if (mq && !mq.matches) return;
      const f = lerpFactor(cfg.smoothing);
      cur.x += (target.x - cur.x) * f;
      cur.y += (target.y - cur.y) * f;
      if (!first && Math.abs(target.x - cur.x) < 0.01 && Math.abs(target.y - cur.y) < 0.01) return;
      first = false;
      render(bx, cur.x);
      render(by, cur.y);
    },
  });
  start();
}

import fs from "fs";
import path from "path";
import svgpath from "svgpath";

export type NourChunk = {
  d: string;
  length: number;
  visible: boolean;
  easeSamples: number[];
};

// ---- read + normalize -----------------------------------------------

function readNourSvgRaw(): string {
  const svgFilePath = path.join(process.cwd(), "public", "nour.svg");
  return fs.readFileSync(svgFilePath, "utf-8");
}

function attr(tag: string, name: string): string | null {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`));
  return m ? m[1] : null;
}

const svgContent = readNourSvgRaw();
const pathTags = svgContent.match(/<path\b[^>]*>/g);

if (!pathTags || pathTags.length < 3) {
  throw new Error("nour.svg: expected at least 3 <path> elements.");
}

function processPath(tag: string): string {
  const rawD = attr(tag, "d");
  const rawTransform = attr(tag, "transform");
  if (!rawD) return "";

  let normalized = svgpath(rawD).abs();
  if (rawTransform) {
    const translateMatch = rawTransform.match(/translate\(\s*(-?[\d.]+)[ ,]+(-?[\d.]+)\s*\)/);
    if (translateMatch) {
      normalized = normalized.translate(parseFloat(translateMatch[1]), parseFloat(translateMatch[2]));
    }
  }
  return normalized.unshort().round(4).toString();
}

// Based on your SVG source order:
const oPathD = processPath(pathTags[0]);
const restPathD = processPath(pathTags[1]);
const nPathD = processPath(pathTags[2]);

// ---- split into individual strokes -------------------

function splitIntoStrokes(d: string): string[] {
  const tokens = d.match(/[MC][^MC]*/g) ?? [];
  const strokes: string[] = [];
  let current = "";
  for (const tok of tokens) {
    if (tok[0] === "M") {
      if (current) strokes.push(current.trim());
      current = tok;
    } else {
      current += " " + tok;
    }
  }
  if (current) strokes.push(current.trim());
  return strokes;
}

// ---- point-level parsing (M / C / L) -------------------------------------

type Point = { x: number; y: number };
type Segment =
  | { cmd: "L"; to: Point }
  | { cmd: "C"; cp1: Point; cp2: Point; to: Point };

function parseSegments(d: string): { start: Point; end: Point; segments: Segment[] } {
  // Z/z must be its own token boundary here. Without it, a stroke that
  // closes via "Z" (rather than an explicit curve back to the start point
  // - very common for closed bowls like the loop of an O/U/R) silently
  // drops its closing segment: `end` comes out wrong and `length` is
  // undercounted, which throws off gap detection AND the proportional
  // timing (getTimings) for every stroke that comes after it - producing
  // strokes that start revealing before the previous one has visually
  // finished.
  const tokens = d.match(/[MCLZz][^MCLZz]*/g) ?? [];
  const nums = (s: string) => (s.match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) ?? []).map(Number);
  let start: Point = { x: 0, y: 0 };
  let cursor: Point = { x: 0, y: 0 };
  const segments: Segment[] = [];

  for (const tok of tokens) {
    const cmd = tok[0];
    const n = nums(tok.slice(1));
    if (cmd === "M") {
      cursor = { x: n[0], y: n[1] };
      start = { ...cursor };
    } else if (cmd === "C") {
      for (let i = 0; i + 5 < n.length; i += 6) {
        const to = { x: n[i + 4], y: n[i + 5] };
        segments.push({ cmd: "C", cp1: { x: n[i], y: n[i + 1] }, cp2: { x: n[i + 2], y: n[i + 3] }, to });
        cursor = to;
      }
    } else if (cmd === "L") {
      for (let i = 0; i + 1 < n.length; i += 2) {
        const to = { x: n[i], y: n[i + 1] };
        segments.push({ cmd: "L", to });
        cursor = to;
      }
    } else if (cmd === "Z" || cmd === "z") {
      // Closepath draws a straight line back to the subpath's start.
      if (Math.hypot(cursor.x - start.x, cursor.y - start.y) > 1e-6) {
        segments.push({ cmd: "L", to: { ...start } });
      }
      cursor = { ...start };
    }
  }

  return { start, end: cursor, segments };
}

function cubicPoint(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const dd = t * t * t;
  return { x: a * p0.x + b * p1.x + c * p2.x + dd * p3.x, y: a * p0.y + b * p1.y + c * p2.y + dd * p3.y };
}

function strokeLength(d: string): number {
  const { start, segments } = parseSegments(d);
  let cursor = start;
  let len = 0;
  for (const seg of segments) {
    if (seg.cmd === "L") {
      len += Math.hypot(seg.to.x - cursor.x, seg.to.y - cursor.y);
      cursor = seg.to;
    } else {
      const p0 = cursor;
      const samples = 20;
      let prev = p0;
      for (let s = 1; s <= samples; s++) {
        const pt = cubicPoint(p0, seg.cp1, seg.cp2, seg.to, s / samples);
        len += Math.hypot(pt.x - prev.x, pt.y - prev.y);
        prev = pt;
      }
      cursor = seg.to;
    }
  }
  return len;
}

function fmt(n: number): string {
  return String(Math.round(n * 10000) / 10000);
}

function buildD(start: Point, segments: Segment[]): string {
  let d = `M${fmt(start.x)} ${fmt(start.y)}`;
  for (const seg of segments) {
    if (seg.cmd === "L") {
      d += ` L${fmt(seg.to.x)} ${fmt(seg.to.y)}`;
    } else {
      d += ` C${fmt(seg.cp1.x)} ${fmt(seg.cp1.y)} ${fmt(seg.cp2.x)} ${fmt(seg.cp2.y)} ${fmt(seg.to.x)} ${fmt(seg.to.y)}`;
    }
  }
  return d;
}

function dist(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// ---- variable-speed motion (curvature-based ease samples) ----------------
//
// Real handwriting (and a laser tracing it) doesn't move at constant speed:
// it moves faster along straight stretches and slows through curves and
// sharp corners. We bake this into a small lookup table per chunk — for
// uniform time-fractions t, "how far along the path (by arc length) should
// the tip be" — derived from the path's own curvature. boot.tsx turns this
// into a custom `ease` function for the stroke-drawing animation instead of
// linear/constant speed.

const EASE_TIME_SAMPLES = 24;     // resolution of the exported lookup table
const CURVATURE_FINE_SAMPLES = 160; // resolution used internally to measure curvature
// Widened from 0.45–1.8 (~4x range) to 0.25–2.6 (~10x range). At the old
// values the curve/corner slowdown was real but too subtle to actually read
// once the stroke also has color/spark/comet detail competing for attention
// — it just looked uniformly fast. This makes straight stretches snap
// through quickly and corners/loops genuinely settle, which is what "more
// human" handwriting rhythm actually looks like: fast connective strokes,
// a deliberate slow-down through anything curved.
const MIN_SPEED = 0.25; // relative speed in the tightest curves/corners
const MAX_SPEED = 2.6;  // relative speed on the straightest stretches

function tracePoints(start: Point, segments: Segment[], targetCount: number): Point[] {
  const pts: Point[] = [start];
  let cursor = start;
  for (const seg of segments) {
    if (seg.cmd === "L") {
      pts.push(seg.to);
      cursor = seg.to;
    } else {
      const samples = Math.max(4, Math.round(targetCount / Math.max(segments.length, 1)));
      for (let s = 1; s <= samples; s++) {
        pts.push(cubicPoint(cursor, seg.cp1, seg.cp2, seg.to, s / samples));
      }
      cursor = seg.to;
    }
  }
  return pts;
}

function computeEaseSamples(d: string): number[] {
  const identity = Array.from({ length: EASE_TIME_SAMPLES }, (_, i) => i / (EASE_TIME_SAMPLES - 1));
  const { start, segments } = parseSegments(d);
  const pts = tracePoints(start, segments, CURVATURE_FINE_SAMPLES);
  if (pts.length < 3) return identity;

  // Cumulative arc length at each fine point.
  const cum: number[] = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + dist(pts[i - 1], pts[i]));
  const totalLen = cum[cum.length - 1];
  if (!totalLen) return identity;

  // Turning angle (radians of direction change) at each interior point.
  const turn: number[] = [0];
  for (let i = 1; i < pts.length - 1; i++) {
    const a = { x: pts[i].x - pts[i - 1].x, y: pts[i].y - pts[i - 1].y };
    const b = { x: pts[i + 1].x - pts[i].x, y: pts[i + 1].y - pts[i].y };
    const la = Math.hypot(a.x, a.y) || 1e-6;
    const lb = Math.hypot(b.x, b.y) || 1e-6;
    const cos = Math.min(1, Math.max(-1, (a.x * b.x + a.y * b.y) / (la * lb)));
    turn.push(Math.acos(cos));
  }
  turn.push(0);

  // Smooth the turning-angle signal (simple moving average) so one noisy
  // vertex doesn't create a jarring, single-sample speed change.
  const smoothed = turn.map((_, i) => {
    const lo = Math.max(0, i - 3), hi = Math.min(turn.length - 1, i + 3);
    let sum = 0, n = 0;
    for (let k = lo; k <= hi; k++) { sum += turn[k]; n++; }
    return sum / n;
  });
  const maxTurn = Math.max(...smoothed, 1e-6);

  // "Time cost per unit length" at each fine point: high where curvature is
  // high (slow down), low where the path is nearly straight (speed up).
  const weight = smoothed.map((tAngle) => {
    const norm = tAngle / maxTurn; // 0 (straight) .. 1 (sharpest corner sampled)
    const speed = MAX_SPEED - norm * (MAX_SPEED - MIN_SPEED);
    return 1 / speed;
  });

  // Integrate weight over arc length -> cumulative "time cost" T(s), then
  // normalize both T and arc length to [0, 1].
  const T: number[] = [0];
  for (let i = 1; i < pts.length; i++) {
    const segLen = cum[i] - cum[i - 1];
    const avgW = (weight[i] + weight[i - 1]) / 2;
    T.push(T[i - 1] + avgW * segLen);
  }
  const totalT = T[T.length - 1] || 1;
  const tNorm = T.map((v) => v / totalT);      // monotonic 0..1 ("time" axis)
  const sNorm = cum.map((v) => v / totalLen);   // monotonic 0..1 ("progress" axis)

  // Invert: for uniform time-fractions t_j, find the progress s such that
  // tNorm(s) = t_j, via linear interpolation across the sampled table.
  const out: number[] = [];
  let idx = 0;
  for (let j = 0; j < EASE_TIME_SAMPLES; j++) {
    const tTarget = j / (EASE_TIME_SAMPLES - 1);
    while (idx < tNorm.length - 2 && tNorm[idx + 1] < tTarget) idx++;
    const t0 = tNorm[idx], t1 = tNorm[idx + 1] ?? 1;
    const s0 = sNorm[idx], s1 = sNorm[idx + 1] ?? 1;
    const span = t1 - t0;
    const frac = span > 1e-9 ? (tTarget - t0) / span : 0;
    out.push(s0 + (s1 - s0) * frac);
  }
  out[0] = 0;
  out[out.length - 1] = 1;
  return out;
}

// ---- strip the duplicate O out of the "rest" stroke ----------------------
//
// path[1] (restPathD) was assumed to be "u and r, one continuous stroke,
// no letter break" - true that there's no M break, but it ALSO traces a
// full closed O loop as its first 3 curves before continuing into u/r.
// That O duplicates the separate, purpose-built `oPath` (path[0]) that
// BurntLoop already spins 6 times over the same coordinates. Left alone,
// ChunkGroup draws restPathD's embedded O a second time the instant REST
// starts - a fresh hot-white reveal reigniting right on top of the O the
// spin flourish just finished cooling. Confirmed by isolating path[1] and
// rendering it alone: segments 0-2 trace a loop that closes back within
// ~5 units of its own start point (94.165,25.252 -> 98.9231,25.76788) -
// that's the O. Segment 3 onward is genuinely just u+r.
const REST_OVERLAP_SEGMENT_COUNT = 3;

function stripLeadingSegments(d: string, count: number): string {
  const { start, segments } = parseSegments(d);
  const kept = segments.slice(count);
  const newStart = count > 0 && segments.length >= count ? segments[count - 1].to : start;
  return buildD(newStart, kept);
}

const GAP_EPSILON = 0.01;

function buildChunks(strokeDs: string[]): NourChunk[] {
  const chunks: NourChunk[] = [];
  for (let i = 0; i < strokeDs.length; i++) {
    const d = strokeDs[i];
    const { end } = parseSegments(d);
    const len = strokeLength(d);

    chunks.push({ d, length: len, visible: true, easeSamples: computeEaseSamples(d) });
    if (i === strokeDs.length - 1) continue;

    const nextStart = parseSegments(strokeDs[i + 1]).start;
    const jumpDist = dist(end, nextStart);
    if (jumpDist > GAP_EPSILON) {
      const jumpD = buildD(end, [{ cmd: "L", to: nextStart }]);
      // Invisible pen-lift jump: no curvature to speak of, and it's never
      // drawn on screen, so a plain linear profile is fine here.
      chunks.push({
        d: jumpD,
        length: jumpDist,
        visible: false,
        easeSamples: Array.from({ length: EASE_TIME_SAMPLES }, (_, i) => i / (EASE_TIME_SAMPLES - 1)),
      });
    }
  }
  return chunks.filter((c) => c.length > GAP_EPSILON);
}

// ---- tight viewBox ----------------------

const PADDING = 6;

function computeTightViewBox(d: string, strokeWidth: number): string {
  const nums = (s: string) => (s.match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) ?? []).map(Number);
  const tokens = d.match(/[MCL][^MCL]*/g) ?? [];
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const tok of tokens) {
    const n = nums(tok.slice(1));
    for (let i = 0; i + 1 < n.length; i += 2) {
      minX = Math.min(minX, n[i]);
      maxX = Math.max(maxX, n[i]);
      minY = Math.min(minY, n[i + 1]);
      maxY = Math.max(maxY, n[i + 1]);
    }
  }
  const pad = PADDING + strokeWidth;
  minX -= pad; minY -= pad; maxX += pad; maxY += pad;
  return `${fmt(minX)} ${fmt(minY)} ${fmt(maxX - minX)} ${fmt(maxY - minY)}`;
}

// ---- Exports ----------------------

const rawStrokeWidth = attr(pathTags[0], "stroke-width");
export const NOUR_STROKE_WIDTH = rawStrokeWidth ? parseFloat(rawStrokeWidth) : 1.265;

const restOnlyD = stripLeadingSegments(restPathD, REST_OVERLAP_SEGMENT_COUNT);

export const N_CHUNKS: NourChunk[] = buildChunks(splitIntoStrokes(nPathD));
export const REST_CHUNKS: NourChunk[] = buildChunks(splitIntoStrokes(restOnlyD));
export const O_PATH_D = oPathD;
export const O_EASE_SAMPLES: number[] = computeEaseSamples(oPathD);

const combinedD = `${nPathD} ${oPathD} ${restPathD}`;
export const NOUR_VIEWBOX = computeTightViewBox(combinedD, NOUR_STROKE_WIDTH);
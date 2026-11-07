"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import type { SphereSkill } from "@/types";

interface SkillSphereProps {
  items: SphereSkill[];
  /** Category to highlight; every other label is dimmed. */
  activeCategory?: string | null;
  className?: string;
}

type Vec3 = [number, number, number];

/* ── Geometry ──────────────────────────────────────────────────────────── */

/** Icosahedron subdivided once and pushed onto the unit sphere (42 verts). */
function buildIcosphere(): { vertices: Vec3[]; edges: [number, number][] } {
  const t = (1 + Math.sqrt(5)) / 2;
  const vertices: Vec3[] = ([
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ] as Vec3[]).map(normalize);

  let faces: [number, number, number][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];

  const midCache = new Map<string, number>();
  const midpoint = (a: number, b: number) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    const hit = midCache.get(key);
    if (hit !== undefined) return hit;
    const [ax, ay, az] = vertices[a];
    const [bx, by, bz] = vertices[b];
    vertices.push(normalize([(ax + bx) / 2, (ay + by) / 2, (az + bz) / 2]));
    midCache.set(key, vertices.length - 1);
    return vertices.length - 1;
  };

  faces = faces.flatMap(([a, b, c]) => {
    const ab = midpoint(a, b);
    const bc = midpoint(b, c);
    const ca = midpoint(c, a);
    return [
      [a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca],
    ] as [number, number, number][];
  });

  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  for (const [a, b, c] of faces) {
    for (const [p, q] of [[a, b], [b, c], [c, a]]) {
      const key = p < q ? `${p}-${q}` : `${q}-${p}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([p, q]);
      }
    }
  }
  return { vertices, edges };
}

function normalize([x, y, z]: Vec3): Vec3 {
  const len = Math.hypot(x, y, z);
  return [x / len, y / len, z / len];
}

/** Evenly spread n points over a sphere (Fibonacci lattice). */
function fibonacciSphere(n: number): Vec3[] {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return [Math.cos(theta) * r, y, Math.sin(theta) * r] as Vec3;
  });
}

/** Rotate around Y (yaw) then X (pitch). Positive z faces the viewer. */
function rotate([x, y, z]: Vec3, yaw: number, pitch: number): Vec3 {
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const cp = Math.cos(pitch), sp = Math.sin(pitch);
  return [x1, y * cp - z1 * sp, y * sp + z1 * cp];
}

const ICOSPHERE = buildIcosphere();
const CAMERA = 3.2; // perspective distance in sphere radii
const AUTO_SPIN = 0.18; // rad / second
const LABEL_RADIUS = 1.08;

/* ── Component ─────────────────────────────────────────────────────────── */

export default function SkillSphere({ items, activeCategory = null, className }: SkillSphereProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const activeRef = useRef(activeCategory);
  activeRef.current = activeCategory;

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anchors = fibonacciSphere(items.length).map(
      ([x, y, z]) => [x * LABEL_RADIUS, y * LABEL_RADIUS, z * LABEL_RADIUS] as Vec3,
    );

    const state = {
      yaw: 0.6,
      pitch: -0.32,
      velYaw: reduceMotion ? 0 : AUTO_SPIN,
      velPitch: 0,
      dragging: false,
      hovering: false,
      lastX: 0,
      lastY: 0,
      lastT: 0,
      size: 0,
      dpr: 1,
      visible: true,
      dirty: true,
    };

    /* sizing */
    const resize = () => {
      state.size = wrap.clientWidth;
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = state.size * state.dpr;
      canvas.height = state.size * state.dpr;
      state.dirty = true;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    /* only animate while on screen */
    const io = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
    });
    io.observe(wrap);

    /* drag to rotate */
    const onDown = (e: PointerEvent) => {
      state.dragging = true;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      state.lastT = performance.now();
      wrap.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!state.dragging) return;
      const now = performance.now();
      const dt = Math.max(now - state.lastT, 1) / 1000;
      const k = 3.2 / state.size;
      const dYaw = (e.clientX - state.lastX) * k;
      const dPitch = (e.clientY - state.lastY) * k;
      state.yaw += dYaw;
      state.pitch = clamp(state.pitch + dPitch, -1.2, 1.2);
      state.velYaw = dYaw / dt;
      state.velPitch = dPitch / dt;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      state.lastT = now;
      state.dirty = true;
    };
    const onUp = (e: PointerEvent) => {
      state.dragging = false;
      if (wrap.hasPointerCapture(e.pointerId)) wrap.releasePointerCapture(e.pointerId);
    };
    const onEnter = () => (state.hovering = true);
    const onLeave = () => (state.hovering = false);
    wrap.addEventListener("pointerdown", onDown);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerup", onUp);
    wrap.addEventListener("pointercancel", onUp);
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);

    /* render loop */
    let raf = 0;
    let prev = performance.now();
    let lastActive = activeRef.current;

    const project = (v: Vec3) => {
      const [x, y, z] = rotate(v, state.yaw, state.pitch);
      const s = CAMERA / (CAMERA - z);
      return { x, y, z, s };
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (!state.visible) return;

      if (!state.dragging) {
        // ease velocity back toward a calm auto-spin
        const target = reduceMotion ? 0 : AUTO_SPIN * (state.hovering ? 0.35 : 1);
        const ease = 1 - Math.exp(-dt * 2.5);
        state.velYaw += (target - state.velYaw) * ease;
        state.velPitch += (0 - state.velPitch) * ease;
        state.yaw += state.velYaw * dt;
        state.pitch = clamp(state.pitch + state.velPitch * dt, -1.2, 1.2);
        if (Math.abs(state.velYaw) > 1e-4 || Math.abs(state.velPitch) > 1e-4) state.dirty = true;
      }
      if (activeRef.current !== lastActive) {
        lastActive = activeRef.current;
        state.dirty = true;
      }
      if (!state.dirty) return;
      state.dirty = false;

      const { size, dpr } = state;
      const half = size / 2;
      const radius = size * 0.37;

      /* wireframe */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      const pts = ICOSPHERE.vertices.map(project);

      // soft body so the sphere reads as a solid against the grid
      const body = ctx.createRadialGradient(half - radius * 0.3, half - radius * 0.35, 0, half, half, radius * 1.05);
      body.addColorStop(0, "rgba(255,255,255,0.045)");
      body.addColorStop(1, "rgba(255,255,255,0.005)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(half, half, radius * (CAMERA / Math.sqrt(CAMERA * CAMERA - 1)), 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 1;
      for (const [a, b] of ICOSPHERE.edges) {
        const p = pts[a], q = pts[b];
        const depth = (p.z + q.z) / 2; // -1 back … 1 front
        const alpha = depth < 0 ? 0.04 + (depth + 1) * 0.04 : 0.08 + depth * 0.14;
        ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(half + p.x * radius * p.s, half + p.y * radius * p.s);
        ctx.lineTo(half + q.x * radius * q.s, half + q.y * radius * q.s);
        ctx.stroke();
      }

      for (const p of pts) {
        if (p.z < 0) continue;
        ctx.fillStyle = `rgba(255,255,255,${(0.15 + p.z * 0.35).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(half + p.x * radius * p.s, half + p.y * radius * p.s, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      /* labels */
      const active = activeRef.current;
      anchors.forEach((anchor, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const p = project(anchor);
        const front = (p.z + 1) / 2; // 0 back … 1 front
        const inGroup = !active || items[i].category === active;
        const opacity = (0.12 + front * 0.88) * (inGroup ? 1 : 0.18);
        const scale = (0.7 + front * 0.4) * p.s * 0.82;
        el.style.transform = `translate3d(${half + p.x * radius * p.s}px, ${half + p.y * radius * p.s}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(Math.round(front * 100));
        el.style.filter = front < 0.35 ? `blur(${((0.35 - front) * 3).toFixed(2)}px)` : "none";
        el.dataset.active = active && inGroup ? "true" : "false";
      });
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointerdown", onDown);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointercancel", onUp);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [items]);

  return (
    <div
      ref={wrapRef}
      className={`relative aspect-square w-full select-none touch-pan-y cursor-grab active:cursor-grabbing ${className ?? ""}`}
      role="img"
      aria-label={`Rotating sphere of skills: ${items.map((i) => i.label).join(", ")}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        {items.map((item, i) => (
          <span
            key={item.label}
            ref={(el) => {
              labelRefs.current[i] = el;
            }}
            className="group absolute left-0 top-0 flex flex-col items-center gap-1.5 will-change-transform"
            style={{ opacity: 0, "--brand": brandColor(item) } as CSSProperties}
          >
            <SkillIcon item={item} />
            <span className="whitespace-nowrap font-mono text-[10px] tracking-wide text-zinc-500 transition-colors duration-200 group-hover:text-zinc-200 group-data-[active=true]:text-zinc-200">
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

/* ── Icons ─────────────────────────────────────────────────────────────── */

const ICON_TRANSITION =
  "transition-[color,border-color,filter] duration-300 text-zinc-300 group-hover:text-[var(--brand)] group-data-[active=true]:text-[var(--brand)] group-hover:[filter:drop-shadow(0_0_10px_var(--brand))]";

/** Monochrome logo that takes on its brand colour on hover / highlight. */
function SkillIcon({ item }: { item: SphereSkill }) {
  if (item.icon) {
    return (
      <svg viewBox="0 0 24 24" className={`h-6 w-6 fill-current ${ICON_TRANSITION}`} aria-hidden="true">
        <path d={item.icon.path} />
      </svg>
    );
  }
  return (
    <span
      className={`flex h-6 min-w-6 items-center justify-center rounded-md border border-current px-1 font-mono text-[9px] font-semibold leading-none ${ICON_TRANSITION}`}
    >
      {item.mono ?? item.label.slice(0, 2)}
    </span>
  );
}

/**
 * Brand colour used on hover. Very dark brand colours (e.g. pure black)
 * would vanish on the site's background, so they fall back to white.
 */
function brandColor(item: SphereSkill): string {
  const hex = (item.icon ? `#${item.icon.hex}` : item.color) ?? "#ffffff";
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.25 ? "#fafafa" : hex;
}

module.exports = [
"[project]/app/intro/IntroStage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$intro$2f$boot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/intro/boot.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Renders the intro animation truly full-screen via a portal straight onto
// <body>, instead of wherever this component happens to sit in the app's
// component tree. This matters because `position: fixed` is only relative
// to the *viewport* when every ancestor is "plain" — any ancestor with a
// transform, filter, perspective, or `will-change` (e.g. a page-transition
// wrapper) silently turns it into its own containing block instead, which
// is what made the animation render smaller and not actually cover the
// page. Portaling to document.body sidesteps that entirely.
//
// Sizing/positioning AND the background here are plain inline style rather
// than Tailwind classes/props on BootSequence, on purpose: this is the one
// element that has to be pixel-perfect full-bleed no matter what, so it
// shouldn't depend on a utility class having been generated correctly, or
// on some inner flex/height chain adding up to 100%. Keeping the backdrop
// permanently anchored here (rather than fading with the artwork inside
// BootSequence) is what closes the "still a gap" issue — there's no longer
// a moment where an inner box hasn't fully expanded yet.
const FADE_MS = 400;
function stageStyle(fading) {
    return {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        zIndex: 999,
        overflow: "hidden",
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease`,
        backgroundImage: `
      radial-gradient(circle at 50% 50%, rgba(42, 20, 54, 0.5) 0%, rgba(12, 12, 12, 0.82) 50%, rgba(0, 0, 0, 1) 100%),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.16'/%3E%3C/svg%3E"),
      linear-gradient(145deg, #1a1a1a 0%, #050505 100%)
    `,
        backgroundSize: "100% 100%, 90px 90px, 100% 100%"
    };
}
function IntroStage({ nChunks, restChunks, oPath, oEaseSamples, nourViewBox, nourStrokeWidth }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fading, setFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        // Lock page scroll for as long as the intro is on screen.
        const prevBody = document.body.style.overflow;
        const prevHtml = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = prevBody;
            document.documentElement.style.overflow = prevHtml;
        };
    }, []);
    if (!mounted) return null;
    // BootSequence's own artwork has already faded to invisible by the time
    // this fires. Fade the backdrop itself out too (briefly) before handing
    // off, instead of hard-cutting straight to the homepage.
    const handleComplete = ()=>{
        setFading(true);
        window.setTimeout(()=>{
            sessionStorage.setItem("introPlayed", "1");
            router.replace("/");
        }, FADE_MS);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: stageStyle(fading),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$intro$2f$boot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            nChunks: nChunks,
            restChunks: restChunks,
            oPath: oPath,
            oEaseSamples: oEaseSamples,
            nourViewBox: nourViewBox,
            nourStrokeWidth: nourStrokeWidth,
            onComplete: handleComplete
        }, void 0, false, {
            fileName: "[project]/app/intro/IntroStage.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/intro/IntroStage.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this), document.body);
}
}),
"[project]/app/intro/boot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BootSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
// ---------- easing helpers ----------
// Turns a chunk's curvature-derived progress samples into a variable-speed
// ease fn (slower through curves/corners, faster on straight stretches).
function makeEase(samples) {
    const n = samples.length - 1;
    return (t)=>{
        if (t <= 0) return samples[0];
        if (t >= 1) return samples[n];
        const x = t * n;
        const i = Math.floor(x);
        const frac = x - i;
        return samples[i] + (samples[Math.min(i + 1, n)] - samples[i]) * frac;
    };
}
// Inverse of makeEase: given a target arc-length progress (0-1), find the
// raw time fraction (0-1) at which the eased pen actually reaches it.
function invertEase(samples, targetProgress) {
    const n = samples.length - 1;
    if (targetProgress <= samples[0]) return 0;
    if (targetProgress >= samples[n]) return 1;
    for(let i = 0; i < n; i++){
        if (samples[i] <= targetProgress && samples[i + 1] >= targetProgress) {
            const span = samples[i + 1] - samples[i];
            const frac = span > 1e-9 ? (targetProgress - samples[i]) / span : 0;
            return (i + frac) / n;
        }
    }
    return 1;
}
// Stretches the tail of a stroke (progress past `holdFrom`) to take
// `slowFactor`x longer, without changing the chunk's total duration —
// used for the flourish at the end of the R's tail.
function applyEndingSlowdown(samples, holdFrom, slowFactor) {
    const n = samples.length - 1;
    const baseEase = makeEase(samples);
    const tSplit = invertEase(samples, holdFrom);
    const STEPS = 400;
    const cum = [
        0
    ];
    for(let i = 1; i <= STEPS; i++){
        const cost = i / STEPS < tSplit ? 1 : slowFactor;
        cum.push(cum[i - 1] + cost * (1 / STEPS));
    }
    const total = cum[STEPS];
    const out = [];
    let idx = 0;
    for(let j = 0; j <= n; j++){
        const target = j / n * total;
        while(idx < STEPS - 1 && cum[idx + 1] < target)idx++;
        const c0 = cum[idx], c1 = cum[idx + 1] ?? total;
        const span = c1 - c0;
        const frac = span > 1e-9 ? (target - c0) / span : 0;
        out.push(baseEase(Math.min(1, (idx + frac) / STEPS)));
    }
    out[0] = samples[0];
    out[n] = samples[n];
    return out;
}
function BootSequence({ onComplete, nChunks, restChunks, oPath, oEaseSamples, nourViewBox, nourStrokeWidth }) {
    // ---------- timeline ----------
    const DRAW_N_TIME = 0.25;
    const LOOP_O_TIME = 0.7;
    const HOLD = 1.4; // beat to see the finished word before fade-out
    const O_LOOPS = 6;
    // Cooldown-lag tuning: how soon a stroke starts cooling after it's drawn,
    // and how long the hot->ink handoff sweep takes.
    const LAG_DURATION_MULTIPLIER = 1.4;
    const LAG_MIN = 0.12;
    const LAG_MAX = 0.9;
    const LAG_JITTER = 0.08;
    const REST_COOL_START_LAG_BASIS = 0.2; // "u"/"r" is one combined chunk; use a letter-scale lag, not the whole-word one
    const COOLDOWN_SWEEP_MULTIPLIER = 1.6; // cooldown sweeps slower than the original hot reveal
    const N_TO_O_GAP = 0.08; // breathing room so one stroke reads as dark before the next ignites
    const O_TO_REST_GAP = 0.1;
    const N_START = 0;
    const O_START = N_START + DRAW_N_TIME + N_TO_O_GAP;
    const O_LOOP_DURATION = LOOP_O_TIME / O_LOOPS;
    const O_SPIN_HOLD_TIME = LOOP_O_TIME - O_LOOP_DURATION;
    const O_COOL_PACE = O_LOOP_DURATION;
    const REST_START = O_START + O_SPIN_HOLD_TIME + O_TO_REST_GAP;
    const DRAW_REST_TIME = 0.8;
    const DRAW_DONE = REST_START + DRAW_REST_TIME;
    const FADE_DELAY = DRAW_DONE + HOLD;
    // ---------- colors ----------
    const GLOW_COLOR = "#c042ff";
    const HOT_CORE = "#ffffff";
    const MOLTEN_EDGE = "#9b24ff";
    const INK_COLOR = "#2b1e33";
    const INK_HIGHLIGHT = "#b48fd6";
    const SCORCH_COLOR = "#241a2c";
    const HOT_METAL_COLOR = "#ffddb0";
    const WARM_COOL_COLOR = "#ff5a1f";
    const SPARK_CORE_COLOR = "#fff6df";
    const SPARK_EDGE_COLOR = "#ffb347";
    // u/r's cooldown leans magenta/violet instead of the default orange-red.
    const REST_MOLTEN_COLOR = "#d431c9";
    const REST_MOLTEN_OPACITY = 0.5;
    const REST_GLOW_OPACITY_PEAK = 1;
    const getTimings = (chunks, totalTime, startTime)=>{
        const totalLength = chunks.reduce((sum, c)=>sum + c.length, 0);
        let cumulative = 0;
        return chunks.map((chunk)=>{
            const delay = startTime + cumulative / totalLength * totalTime;
            const duration = Math.max(chunk.length / totalLength * totalTime, 0.001);
            cumulative += chunk.length;
            return {
                delay,
                duration
            };
        });
    };
    const nTimings = getTimings(nChunks, DRAW_N_TIME, N_START);
    const restTimings = getTimings(restChunks, DRAW_REST_TIME, REST_START);
    // "u"+"r" is one continuous stroke (no chunk boundary) — these fractions
    // mark where sparks should stop and where the tail flourish begins,
    // measured against the stroke's own arc length.
    const REST_SPARK_CUTOFF = 0.466;
    const REST_TAIL_SLOW_FROM = 0.87;
    const REST_TAIL_SLOW_FACTOR = 2.4;
    const restChunksSlowed = restChunks.map((c, i)=>i === restChunks.length - 1 ? {
            ...c,
            easeSamples: applyEndingSlowdown(c.easeSamples, REST_TAIL_SLOW_FROM, REST_TAIL_SLOW_FACTOR)
        } : c);
    // ---------- CometTrail: the glowing streak trailing the pen tip ----------
    const CometTrail = ({ d, delay, duration, repeat = 0, opacityDuration, visible = true, trailScale = 1, easeSamples, fadeOutStart = 0.85 })=>{
        if (!visible) return null;
        const ease = makeEase(easeSamples);
        const baseActiveTime = opacityDuration || duration;
        // fadeOutStart is a path-progress fraction; invert through the ease
        // table to find the real raw-time point the pen reaches it.
        const fadeOutStartTime = Math.max(invertEase(easeSamples, fadeOutStart), 0.06) * baseActiveTime;
        const COMET_FADE_SECONDS = 0.22; // guarantee a real window for the glow to settle, even on a short tail
        const activeTime = Math.max(baseActiveTime, fadeOutStartTime + COMET_FADE_SECONDS);
        const fadeInEndFrac = Math.min(0.05 * baseActiveTime, fadeOutStartTime * 0.6) / activeTime;
        const fadeOutStartFrac = fadeOutStartTime / activeTime;
        // Wide violet halo, magenta mid-glow, tight white hot core.
        const layers = [
            {
                frac: 0.22 * trailScale,
                widthMul: 3.4,
                opacity: 0.3,
                color: GLOW_COLOR,
                glow: true
            },
            {
                frac: 0.16 * trailScale,
                widthMul: 2.1,
                opacity: 0.85,
                color: MOLTEN_EDGE,
                glow: true
            },
            {
                frac: 0.028 * trailScale,
                widthMul: 1.0,
                opacity: 0.95,
                color: HOT_CORE,
                glow: false
            }
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: [
                    0,
                    1,
                    1,
                    0
                ]
            },
            transition: {
                delay,
                duration: activeTime,
                times: [
                    0,
                    fadeInEndFrac,
                    fadeOutStartFrac,
                    1
                ]
            },
            children: layers.map((layer, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    fill: "none",
                    stroke: layer.color,
                    strokeOpacity: layer.opacity,
                    strokeWidth: Math.max(nourStrokeWidth * layer.widthMul, 2),
                    strokeLinecap: "round",
                    filter: layer.glow ? "url(#pen-glow)" : undefined,
                    strokeDasharray: `${layer.frac} 2`,
                    style: {
                        mixBlendMode: "screen"
                    },
                    initial: {
                        strokeDashoffset: layer.frac
                    },
                    animate: {
                        strokeDashoffset: layer.frac - 1
                    },
                    transition: {
                        delay,
                        duration,
                        ease,
                        repeat,
                        repeatType: "loop"
                    }
                }, idx, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/intro/boot.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this);
    };
    // ---------- LaserTip: a real point riding the path (position + tangent) ----------
    const LaserTip = ({ d, delay, duration, easeSamples, visible = true, repeat = 0, size = 1 })=>{
        const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (!visible || duration <= 0) return;
            const pathEl = pathRef.current;
            const groupEl = groupRef.current;
            if (!pathEl || !groupEl) return;
            const totalLength = pathEl.getTotalLength();
            if (!totalLength) return;
            const EPS = Math.max(totalLength * 0.004, 0.02);
            const ease = makeEase(easeSamples);
            const unsub = progress.on("change", (t)=>{
                const clamped = Math.min(1, Math.max(0, t));
                const len = clamped * totalLength;
                const pt = pathEl.getPointAtLength(len);
                const aheadLen = Math.min(totalLength, len + EPS);
                const refPt = aheadLen > len ? pathEl.getPointAtLength(aheadLen) : pathEl.getPointAtLength(Math.max(0, len - EPS));
                const dx = aheadLen > len ? refPt.x - pt.x : pt.x - refPt.x;
                const dy = aheadLen > len ? refPt.y - pt.y : pt.y - refPt.y;
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                const withinPass = clamped > 0 && clamped < 1;
                groupEl.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${angle})`);
                groupEl.setAttribute("opacity", withinPass ? "1" : "0");
            });
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(progress, 1, {
                delay,
                duration,
                ease,
                repeat,
                repeatType: "loop"
            });
            return ()=>{
                unsub();
                controls.stop();
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            d,
            delay,
            duration,
            visible,
            repeat
        ]);
        if (!visible) return null;
        const coreLen = Math.max(nourStrokeWidth * 1.8, 1.6) * size;
        const coreWidth = Math.max(nourStrokeWidth * 0.55, 0.5) * size;
        // Small dot-sparks glued to the tip (distinct from ParticleEmitter's
        // flung embers) — computed once per mount so they don't jitter.
        const [tipDots, setTipDots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            setTipDots(Array.from({
                length: 7
            }, ()=>{
                const angle = Math.random() * Math.PI * 2;
                const dist = coreLen * (0.9 + Math.random() * 2.4);
                return {
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist * (coreWidth / coreLen) * 1.6,
                    r: coreWidth * (0.22 + Math.random() * 0.3),
                    color: Math.random() < 0.5 ? SPARK_CORE_COLOR : SPARK_EDGE_COLOR,
                    duration: 0.15 + Math.random() * 0.25,
                    delay: Math.random() * 0.3
                };
            }));
        }, [
            coreLen,
            coreWidth
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    ref: pathRef,
                    d: d,
                    fill: "none",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    ref: groupRef,
                    opacity: 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            rx: coreLen * 2.2,
                            ry: coreWidth * 2.6,
                            fill: GLOW_COLOR,
                            opacity: 0.4,
                            filter: "url(#pen-glow)",
                            style: {
                                mixBlendMode: "screen"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            rx: coreLen * 1.3,
                            ry: coreWidth * 1.6,
                            fill: MOLTEN_EDGE,
                            opacity: 0.95,
                            filter: "url(#pen-glow)",
                            style: {
                                mixBlendMode: "screen"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            rx: coreLen,
                            ry: coreWidth,
                            fill: HOT_CORE,
                            style: {
                                mixBlendMode: "screen"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        tipDots.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: s.x,
                                cy: s.y,
                                r: s.r,
                                fill: s.color,
                                filter: "url(#spark-glow)",
                                style: {
                                    mixBlendMode: "screen"
                                },
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.2,
                                        1,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: s.duration,
                                    delay: s.delay,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: Math.random() * 0.15
                                }
                            }, i, false, {
                                fileName: "[project]/app/intro/boot.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/intro/boot.tsx",
            lineNumber: 271,
            columnNumber: 7
        }, this);
    };
    const ParticleEmitter = ({ d, delay, duration, easeSamples, visible = true, microSparkCount = 14, loops = 1, sparkCutoffFraction = 1 })=>{
        const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (!visible || !pathRef.current || duration <= 0) return;
            const pathEl = pathRef.current;
            const totalLength = pathEl.getTotalLength();
            if (!totalLength) return;
            let cancelled = false;
            const timers = [];
            const ease = makeEase(easeSamples);
            for(let i = 0; i < microSparkCount; i++){
                const timeFraction = Math.random() * sparkCutoffFraction;
                const spawnAt = Math.max((delay + duration * timeFraction) * 1000, 0);
                const t = window.setTimeout(()=>{
                    if (cancelled) return;
                    const progress = ease(timeFraction * loops % 1);
                    const len = progress * totalLength;
                    const pt = pathEl.getPointAtLength(len);
                    const EPS = Math.max(totalLength * 0.01, 0.05);
                    const refPt = pathEl.getPointAtLength(Math.min(totalLength, len + EPS));
                    const tangent = Math.atan2(refPt.y - pt.y, refPt.x - pt.x);
                    // Offset perpendicular to the line, then drift backward relative to travel.
                    const offsetDist = (Math.random() < 0.5 ? 1 : -1) * (nourStrokeWidth * (1.5 + Math.random() * 3));
                    const driftAngle = tangent + Math.PI + (Math.random() - 0.5) * 0.8;
                    const driftDist = nourStrokeWidth * (1.5 + Math.random() * 2.5);
                    const id = Math.random();
                    setParticles((prev)=>[
                            ...prev,
                            {
                                kind: "microSpark",
                                id,
                                x: pt.x + Math.cos(tangent + Math.PI / 2) * offsetDist,
                                y: pt.y + Math.sin(tangent + Math.PI / 2) * offsetDist,
                                driftX: Math.cos(driftAngle) * driftDist,
                                driftY: Math.sin(driftAngle) * driftDist,
                                size: nourStrokeWidth * (0.3 + Math.random() * 0.3),
                                color: Math.random() < 0.6 ? SPARK_CORE_COLOR : GLOW_COLOR
                            }
                        ]);
                    const cleanup = window.setTimeout(()=>setParticles((prev)=>prev.filter((p)=>p.id !== id)), 450);
                    timers.push(cleanup);
                }, spawnAt);
                timers.push(t);
            }
            return ()=>{
                cancelled = true;
                timers.forEach(clearTimeout);
            };
        }, [
            d,
            delay,
            duration,
            easeSamples,
            visible,
            microSparkCount,
            loops,
            sparkCutoffFraction
        ]);
        if (!visible) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    ref: pathRef,
                    d: d,
                    fill: "none",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this),
                particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(${p.x} ${p.y})`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                            initial: {
                                opacity: 0,
                                x: 0,
                                y: 0
                            },
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ],
                                x: p.driftX,
                                y: p.driftY
                            },
                            transition: {
                                duration: 0.25 + Math.random() * 0.2,
                                ease: "easeOut"
                            },
                            r: p.size,
                            fill: p.color,
                            filter: "url(#spark-glow)",
                            style: {
                                mixBlendMode: "screen"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/app/intro/boot.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/intro/boot.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, this);
    };
    // ---------- BurntPath: the layered laser-cut reveal + cooldown ----------
    const BurntPath = ({ d, delay, duration, visible = true, easeSamples, spinHoldTime = 0, coolPaceDuration, coolStartLagBasis, warmRatio = 0.15, uniformCool = false, hotColor, forceFadeOutBy, moltenColor, moltenOpacity = 0.85, glowOpacityPeak = 0.85 })=>{
        if (!visible) return null;
        const ease = makeEase(easeSamples);
        // Cooldown wave chases the hot tip along the same path; keep its speed
        // close to the tip's own curvature ease (light 15% linear blend) so the
        // gap between them doesn't collapse through slow, curvy stretches.
        const coolEase = (t)=>ease(t) * 0.85 + t * 0.15;
        const lagBasis = coolPaceDuration ?? duration;
        const coolSweepDuration = lagBasis * COOLDOWN_SWEEP_MULTIPLIER;
        // NOTE: `hotColor` is accepted for API compatibility but currently has
        // no visual effect — stage 1 below always renders HOT_METAL_COLOR,
        // matching the prior implementation's actual (if not fully intentional)
        // behavior. Wire it into stage 1's stroke if you want callers like the
        // O's `hotColor={HOT_CORE}` to actually take effect.
        void hotColor;
        const startLagBasis = coolStartLagBasis ?? lagBasis;
        let baseLag = Math.min(Math.max(startLagBasis * LAG_DURATION_MULTIPLIER, LAG_MIN), LAG_MAX) + delay * 176.3 % 1 * LAG_JITTER;
        let effectiveCoolSweepDuration = coolSweepDuration;
        if (forceFadeOutBy !== undefined) {
            const budget = Math.max(forceFadeOutBy - (delay + spinHoldTime), 0.05);
            const minBaseLag = 0.02;
            // Floor the sweep at `duration` so it can never overtake the tip's
            // own reveal (which would paint cooled color in ahead of the pen).
            effectiveCoolSweepDuration = Math.max(duration, Math.min(effectiveCoolSweepDuration, budget - minBaseLag));
            baseLag = Math.max(minBaseLag, Math.min(baseLag, budget - effectiveCoolSweepDuration));
        }
        const warmDelay = delay + spinHoldTime + baseLag * warmRatio;
        const inkDelay = delay + spinHoldTime + baseLag;
        // uniformCool: every cooling layer is fully revealed the instant it
        // mounts (no travelling wipe) and transitions instantly.
        const coolDashTransition = (stageDelay)=>uniformCool ? {
                delay: stageDelay,
                duration: 0
            } : {
                delay: stageDelay,
                duration: effectiveCoolSweepDuration,
                ease: coolEase
            };
        const coolInitialOffset = uniformCool ? 0 : 1;
        const inkFade = {
            delay: inkDelay,
            duration: uniformCool ? effectiveCoolSweepDuration : 0.01,
            ease: "easeInOut"
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: SCORCH_COLOR,
                    strokeWidth: nourStrokeWidth * 4.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    filter: "url(#scorch-smudge)",
                    strokeDasharray: "1 2",
                    initial: {
                        strokeDashoffset: 1,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: 0.85
                    },
                    transition: {
                        strokeDashoffset: {
                            delay,
                            duration,
                            ease
                        },
                        opacity: {
                            delay,
                            duration: 0.01
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: GLOW_COLOR,
                    strokeWidth: nourStrokeWidth * 1.8,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    filter: "url(#pen-glow)",
                    strokeDasharray: "1 2",
                    style: {
                        mixBlendMode: "screen"
                    },
                    initial: {
                        strokeDashoffset: 1,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: [
                            0,
                            glowOpacityPeak,
                            glowOpacityPeak,
                            0
                        ]
                    },
                    transition: {
                        strokeDashoffset: {
                            delay,
                            duration,
                            ease
                        },
                        opacity: {
                            delay,
                            duration: lagBasis + spinHoldTime + baseLag + 0.15,
                            times: [
                                0,
                                0.12,
                                0.7,
                                1
                            ],
                            ease: "easeOut"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: HOT_METAL_COLOR,
                    strokeWidth: nourStrokeWidth * 1.6,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    filter: "url(#pen-glow)",
                    strokeDasharray: "1 2",
                    style: {
                        mixBlendMode: "screen"
                    },
                    initial: {
                        strokeDashoffset: 1,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: [
                            0,
                            1,
                            1,
                            0
                        ]
                    },
                    transition: {
                        strokeDashoffset: {
                            delay,
                            duration,
                            ease
                        },
                        opacity: {
                            delay,
                            duration: warmDelay - delay + effectiveCoolSweepDuration + 0.15,
                            times: [
                                0,
                                0.1,
                                0.55,
                                1
                            ],
                            ease: "easeOut"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: moltenColor ?? WARM_COOL_COLOR,
                    strokeWidth: nourStrokeWidth * 1.25,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    filter: "url(#pen-glow)",
                    strokeOpacity: moltenOpacity,
                    strokeDasharray: "1 2",
                    style: {
                        mixBlendMode: "screen"
                    },
                    initial: {
                        strokeDashoffset: coolInitialOffset,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: [
                            0,
                            1,
                            1,
                            0
                        ]
                    },
                    transition: {
                        strokeDashoffset: coolDashTransition(warmDelay),
                        opacity: {
                            delay: warmDelay,
                            duration: inkDelay - warmDelay + effectiveCoolSweepDuration + 0.2,
                            times: [
                                0,
                                0.1,
                                0.85,
                                1
                            ],
                            ease: "easeOut"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: INK_COLOR,
                    strokeWidth: nourStrokeWidth,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    filter: "url(#inset-groove)",
                    strokeDasharray: "1 2",
                    initial: {
                        strokeDashoffset: coolInitialOffset,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: 1
                    },
                    transition: {
                        strokeDashoffset: coolDashTransition(inkDelay),
                        opacity: inkFade
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: INK_COLOR,
                    strokeWidth: nourStrokeWidth,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    filter: "url(#char-texture)",
                    strokeDasharray: "1 2",
                    initial: {
                        strokeDashoffset: coolInitialOffset,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: 1
                    },
                    transition: {
                        strokeDashoffset: coolDashTransition(inkDelay),
                        opacity: inkFade
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: d,
                    pathLength: 1,
                    stroke: INK_HIGHLIGHT,
                    strokeWidth: Math.max(nourStrokeWidth * 0.45, 0.55),
                    strokeOpacity: 0.55,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    strokeDasharray: "1 2",
                    initial: {
                        strokeDashoffset: coolInitialOffset,
                        opacity: 0
                    },
                    animate: {
                        strokeDashoffset: 0,
                        opacity: 1
                    },
                    transition: {
                        strokeDashoffset: coolDashTransition(inkDelay),
                        opacity: inkFade
                    }
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/intro/boot.tsx",
            lineNumber: 445,
            columnNumber: 7
        }, this);
    };
    const ChunkGroup = ({ chunks, timings, overrides = ()=>({}) })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                chunks.map((chunk, i)=>{
                    const o = overrides(i);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BurntPath, {
                        d: chunk.d,
                        delay: timings[i].delay,
                        duration: timings[i].duration,
                        visible: chunk.visible,
                        easeSamples: chunk.easeSamples,
                        coolPaceDuration: o.coolPaceDuration,
                        coolStartLagBasis: o.coolStartLagBasis,
                        forceFadeOutBy: o.forceFadeOutBy,
                        moltenColor: o.moltenColor,
                        moltenOpacity: o.moltenOpacity ?? 0.85,
                        glowOpacityPeak: o.glowOpacityPeak ?? 0.85
                    }, `burnt-${i}`, false, {
                        fileName: "[project]/app/intro/boot.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 0
                    },
                    transition: {
                        delay: DRAW_DONE,
                        duration: LAG_MAX + DRAW_REST_TIME * (COOLDOWN_SWEEP_MULTIPLIER - 1) + 0.1,
                        ease: "easeInOut"
                    },
                    children: [
                        chunks.map((chunk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CometTrail, {
                                d: chunk.d,
                                delay: timings[i].delay,
                                duration: timings[i].duration,
                                visible: chunk.visible,
                                easeSamples: chunk.easeSamples,
                                fadeOutStart: overrides(i).cometFadeOutStart ?? 0.85,
                                opacityDuration: overrides(i).cometOpacityDuration
                            }, `comet-${i}`, false, {
                                fileName: "[project]/app/intro/boot.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)),
                        chunks.map((chunk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LaserTip, {
                                d: chunk.d,
                                delay: timings[i].delay,
                                duration: timings[i].duration,
                                visible: chunk.visible,
                                easeSamples: chunk.easeSamples
                            }, `tip-${i}`, false, {
                                fileName: "[project]/app/intro/boot.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 540,
                    columnNumber: 7
                }, this),
                chunks.map((chunk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleEmitter, {
                        d: chunk.d,
                        delay: timings[i].delay,
                        duration: timings[i].duration,
                        easeSamples: chunk.easeSamples,
                        visible: chunk.visible,
                        sparkCutoffFraction: overrides(i).sparkCutoffFraction ?? 1
                    }, `particles-${i}`, false, {
                        fileName: "[project]/app/intro/boot.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/intro/boot.tsx",
            lineNumber: 519,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 0
        },
        transition: {
            delay: FADE_DELAY,
            duration: 0.8,
            ease: "easeInOut"
        },
        onAnimationComplete: onComplete,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "p-6",
            style: {
                width: "100%",
                height: "100%",
                maxWidth: "39.2vw",
                maxHeight: "39.2vh",
                transform: "translateY(-90px)"
            },
            viewBox: nourViewBox,
            fill: "none",
            preserveAspectRatio: "xMidYMid meet",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "pen-glow",
                            x: "-200%",
                            y: "-200%",
                            width: "500%",
                            height: "500%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: Math.max(nourStrokeWidth * 3.5, 4),
                                    result: "wideBlur"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 597,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: Math.max(nourStrokeWidth * 1.2, 1.5),
                                    result: "tightBlur"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "wideBlur"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "tightBlur"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "SourceGraphic"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 602,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "spark-glow",
                            x: "-500%",
                            y: "-500%",
                            width: "1100%",
                            height: "1100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: Math.max(nourStrokeWidth * 1.3, 1.2),
                                    result: "sparkHalo"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: Math.max(nourStrokeWidth * 0.4, 0.4),
                                    result: "sparkCore"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "sparkHalo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 610,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "sparkCore"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "SourceGraphic"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "inset-groove",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dx: "1",
                                    dy: "1"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 617,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: "0.5",
                                    result: "offset-blur"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "out",
                                    in: "SourceGraphic",
                                    in2: "offset-blur",
                                    result: "inverse"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#000000",
                                    floodOpacity: "0.9",
                                    result: "color"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "in",
                                    in: "color",
                                    in2: "inverse",
                                    result: "shadow"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                    in: "SourceGraphic",
                                    dx: "0",
                                    dy: "1",
                                    stdDeviation: "0",
                                    floodColor: "#ffffff",
                                    floodOpacity: "0.1",
                                    result: "drop"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "over",
                                    in: "shadow",
                                    in2: "drop"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 623,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "scorch-smudge",
                            x: "-100%",
                            y: "-100%",
                            width: "300%",
                            height: "300%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: Math.max(nourStrokeWidth * 1.6, 1.8)
                            }, void 0, false, {
                                fileName: "[project]/app/intro/boot.tsx",
                                lineNumber: 627,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "char-texture",
                            x: "-30%",
                            y: "-30%",
                            width: "160%",
                            height: "160%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                    type: "fractalNoise",
                                    baseFrequency: "0.9",
                                    numOctaves: "3",
                                    seed: "6",
                                    result: "noise"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 631,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                                    in: "noise",
                                    result: "darkPatchy",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncA", {
                                        type: "discrete",
                                        tableValues: "0 0.08 0.14 0.05 0.18 0.05 0.1 0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/intro/boot.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in: "darkPatchy",
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "darkMask"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#000000",
                                    floodOpacity: "0.55",
                                    result: "dark"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 636,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in: "dark",
                                    in2: "darkMask",
                                    operator: "in",
                                    result: "darkMottle"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 637,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMorphology", {
                                    operator: "dilate",
                                    radius: "0.35",
                                    in: "SourceAlpha",
                                    result: "dilated"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 638,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "out",
                                    in: "dilated",
                                    in2: "SourceAlpha",
                                    result: "rimShape"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 639,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#3d2b47",
                                    floodOpacity: "0.85",
                                    result: "rimColor"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 640,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    in: "rimColor",
                                    in2: "rimShape",
                                    operator: "in",
                                    result: "rim"
                                }, void 0, false, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "rim"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 643,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "SourceGraphic"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "darkMottle"
                                        }, void 0, false, {
                                            fileName: "[project]/app/intro/boot.tsx",
                                            lineNumber: 645,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/intro/boot.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 595,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChunkGroup, {
                    chunks: nChunks,
                    timings: nTimings,
                    overrides: (i)=>i === nChunks.length - 1 ? {
                            forceFadeOutBy: O_START
                        } : {}
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChunkGroup, {
                    chunks: restChunksSlowed,
                    timings: restTimings,
                    overrides: (i)=>({
                            sparkCutoffFraction: REST_SPARK_CUTOFF,
                            cometFadeOutStart: 0.98,
                            coolStartLagBasis: REST_COOL_START_LAG_BASIS,
                            coolPaceDuration: restTimings[i].duration / COOLDOWN_SWEEP_MULTIPLIER,
                            moltenColor: REST_MOLTEN_COLOR,
                            moltenOpacity: REST_MOLTEN_OPACITY,
                            glowOpacityPeak: REST_GLOW_OPACITY_PEAK
                        })
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 658,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BurntPath, {
                    d: oPath,
                    delay: O_START,
                    duration: O_LOOP_DURATION,
                    spinHoldTime: O_SPIN_HOLD_TIME,
                    coolPaceDuration: O_COOL_PACE,
                    hotColor: HOT_CORE,
                    easeSamples: oEaseSamples,
                    uniformCool: true,
                    forceFadeOutBy: REST_START
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 673,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleEmitter, {
                    d: oPath,
                    delay: O_START,
                    duration: LOOP_O_TIME,
                    easeSamples: oEaseSamples,
                    loops: O_LOOPS
                }, void 0, false, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 684,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 0
                    },
                    transition: {
                        delay: REST_START,
                        duration: 0.3,
                        ease: "easeInOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CometTrail, {
                            d: oPath,
                            delay: O_START,
                            duration: LOOP_O_TIME / O_LOOPS,
                            repeat: O_LOOPS - 1,
                            opacityDuration: LOOP_O_TIME,
                            easeSamples: oEaseSamples,
                            fadeOutStart: 0.98
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 687,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LaserTip, {
                            d: oPath,
                            delay: O_START,
                            duration: LOOP_O_TIME / O_LOOPS,
                            repeat: O_LOOPS - 1,
                            easeSamples: oEaseSamples,
                            size: 1.3
                        }, void 0, false, {
                            fileName: "[project]/app/intro/boot.tsx",
                            lineNumber: 696,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/intro/boot.tsx",
                    lineNumber: 686,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/intro/boot.tsx",
            lineNumber: 588,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/intro/boot.tsx",
        lineNumber: 573,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_intro_1vx1znp._.js.map
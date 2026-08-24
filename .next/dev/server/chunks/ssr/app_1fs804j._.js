module.exports = [
"[project]/app/HomeClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$boot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/boot.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './data'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
function HomeClient({ nourChunks, nourViewBox, nourStrokeWidth }) {
    const [booted, setBooted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !booted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$boot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                nourChunks: nourChunks,
                nourViewBox: nourViewBox,
                nourStrokeWidth: nourStrokeWidth,
                onComplete: ()=>setBooted(true)
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-6 px-6 py-24",
                style: {
                    opacity: booted ? 1 : 0,
                    transition: "opacity 0.6s ease"
                },
                "aria-hidden": !booted,
                children: Object.values(projects).map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${project.id}`,
                        className: "group flex items-center gap-5 rounded-2xl p-6 transition-colors",
                        style: {
                            backgroundColor: project.color
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                                style: {
                                    color: project.accent
                                },
                                children: ICONS[project.id]
                            }, void 0, false, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs uppercase tracking-widest",
                                        style: {
                                            color: project.accent
                                        },
                                        children: project.tag
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-semibold text-white",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-white/70",
                                        children: project.short
                                    }, void 0, false, {
                                        fileName: "[project]/app/HomeClient.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/HomeClient.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/HomeClient.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/boot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BootSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function BootSequence({ onComplete, nourChunks, nourViewBox, nourStrokeWidth }) {
    // nour.svg is a single hand-drawn signature made of 9 separate pen
    // strokes with small real gaps between some of them. nour-path.ts
    // turns that into an ordered list of drawing "chunks": each stroke's
    // forward draw, and — only where a real gap follows — a "retrace"
    // chunk (the same stroke, walked backward over ink already on screen)
    // and an "invisible jump" chunk straight to the next stroke's start.
    //
    // Each chunk is its own <motion.path>, sequenced end-to-end by delay/
    // duration exactly proportional to its share of the total drawn
    // length — same mechanism as before. What makes this driftproof,
    // unlike an earlier version of this file that also used N separate
    // paths: every VISIBLE chunk boundary sits at a coordinate that's
    // literally identical to the end of the chunk before it (a stroke and
    // its own retrace share an endpoint by construction), so even if one
    // chunk's delay is a frame early or late relative to the next, there's
    // no gap in space for that to expose — nothing needs to "catch up" to
    // anything else, because both chunks pass through the exact same
    // point. The only chunks where timing precision would matter (the
    // jumps across real gaps) are rendered at opacity 0 permanently, so
    // their timing is simply never visible at all.
    //
    // CRITICAL (same fix as before): Framer Motion applies
    // `initial={{ pathLength: 0 }}` immediately on mount, before a path's
    // own `delay` runs. With a round line cap, a zero-length path still
    // renders as a visible dot — so every chunk's opacity stays 0 until
    // the instant its own delay ends, rather than defaulting to visible.
    const DRAW_DURATION = 2.4; // total pen-drawing time, across all chunks
    const HOLD = 2.5; // pause on the finished logo before it fades away
    const totalLength = nourChunks.reduce((sum, c)=>sum + c.length, 0);
    const MIN_DURATION = 0.001; // defense in depth: framer-motion's pathLength
    // math can misbehave on a duration of exactly 0, so every chunk gets a
    // non-zero floor regardless of how small its share of totalLength is.
    let cumulative = 0;
    const timings = nourChunks.map((chunk)=>{
        const delay = cumulative / totalLength * DRAW_DURATION;
        const duration = Math.max(chunk.length / totalLength * DRAW_DURATION, MIN_DURATION);
        cumulative += chunk.length;
        return {
            delay,
            duration
        };
    });
    const DRAW_DONE = DRAW_DURATION;
    const FADE_DELAY = DRAW_DONE + HOLD;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-[#050505] p-8",
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
            className: "w-full max-w-3xl overflow-visible",
            viewBox: nourViewBox,
            fill: "none",
            children: [
                nourChunks.map((chunk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: chunk.d,
                        stroke: "#ffffff",
                        strokeWidth: nourStrokeWidth,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: chunk.visible ? 1 : 0
                        },
                        transition: {
                            pathLength: {
                                delay: timings[i].delay,
                                duration: timings[i].duration,
                                ease: "easeInOut"
                            },
                            // For visible chunks this is a near-instant flip on at the
                            // start of the chunk's own turn. For invisible (jump)
                            // chunks, opacity's target is 0 anyway, so this is a no-op
                            // — they're simply never drawn.
                            opacity: {
                                delay: timings[i].delay,
                                duration: 0.01
                            }
                        }
                    }, `main-${i}`, false, {
                        fileName: "[project]/app/boot.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 0
                    },
                    transition: {
                        delay: DRAW_DONE,
                        duration: 0.3,
                        ease: "easeInOut"
                    },
                    children: nourChunks.map((chunk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: chunk.d,
                            stroke: "#ffffff",
                            strokeWidth: Math.max(nourStrokeWidth * 0.6, 1),
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            fill: "none",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: {
                                pathLength: 1,
                                opacity: chunk.visible ? 1 : 0
                            },
                            transition: {
                                pathLength: {
                                    delay: timings[i].delay,
                                    duration: timings[i].duration,
                                    ease: "easeInOut"
                                },
                                opacity: {
                                    delay: timings[i].delay,
                                    duration: 0.01
                                }
                            }
                        }, `tracer-${i}`, false, {
                            fileName: "[project]/app/boot.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/boot.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/boot.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/boot.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_1fs804j._.js.map
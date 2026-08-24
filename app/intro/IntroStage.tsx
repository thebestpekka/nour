"use client";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import BootSequence from "./boot";
import type { NourChunk } from "@/lib/nour-path";

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

function stageStyle(fading: boolean): CSSProperties {
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
    backgroundSize: "100% 100%, 90px 90px, 100% 100%",
  };
}

export default function IntroStage({
  nChunks,
  restChunks,
  oPath,
  oEaseSamples,
  nourViewBox,
  nourStrokeWidth,
}: {
  nChunks: NourChunk[];
  restChunks: NourChunk[];
  oPath: string;
  oEaseSamples: number[];
  nourViewBox: string;
  nourStrokeWidth: number;
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Lock page scroll for as long as the intro is on screen.
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, []);

  if (!mounted) return null;

  // BootSequence's own artwork has already faded to invisible by the time
  // this fires. Fade the backdrop itself out too (briefly) before handing
  // off, instead of hard-cutting straight to the homepage.
  const handleComplete = () => {
    setFading(true);
    window.setTimeout(() => {
      sessionStorage.setItem("introPlayed", "1");
      router.replace("/");
    }, FADE_MS);
  };

  return createPortal(
    <div style={stageStyle(fading)}>
      <BootSequence
        nChunks={nChunks}
        restChunks={restChunks}
        oPath={oPath}
        oEaseSamples={oEaseSamples}
        nourViewBox={nourViewBox}
        nourStrokeWidth={nourStrokeWidth}
        onComplete={handleComplete}
      />
    </div>,
    document.body
  );
}
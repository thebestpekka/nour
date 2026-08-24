import React from 'react';

export const ICONS: Record<string, React.ReactNode> = {
  athan: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L4 8 V22 H20 V8 Z" />
      <path d="M12 2 L12 8" opacity="0.5" />
      <circle cx="12" cy="14" r="3" />
    </svg>
  ),
  studio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9 H21" opacity="0.5" />
      <path d="M7 6.5 h.01 M10 6.5 h.01" />
    </svg>
  ),
};

export type Project = {
  id: string;
  tag: string;
  color: string;
  accent: string;
  title: string;
  short: string;
  heroDesc: string;
  body: { h: string; p: string }[];
  cta: string;
};

export const projects: Record<string, Project> = {
  athan: {
    id: "athan",
    tag: "Mobile app",
    color: "#20363B",
    accent: "#7FC9BE",
    title: "Athan",
    short: "Prayer times, done quietly.",
    heroDesc: "A prayer-time app built around accuracy and calm — no clutter, no ads, just the five calls to prayer, on time, wherever you are.",
    body: [
      { h: "What it does", p: "Calculates accurate prayer times based on your location and preferred calculation method, then sends a clean notification when it's time." },
      { h: "Why it exists", p: "Most athan apps are bloated with ads and unrelated features. This one does one job and does it quietly well." }
    ],
    cta: "Open the app"
  },
  studio: {
    id: "studio",
    tag: "Business",
    color: "#3B2E14",
    accent: "#E0B85C",
    title: "Studio",
    short: "Websites, built and shipped.",
    heroDesc: "A website design and build service — from first sketch to a live, working site. This is where the business side of things lives.",
    body: [
      { h: "What it does", p: "Designs and builds custom websites for clients, end to end — planning, design, build, and launch." },
      { h: "Who it's for", p: "Small businesses and individuals who want a real website without managing the whole process themselves." }
    ],
    cta: "See the work"
  }
};
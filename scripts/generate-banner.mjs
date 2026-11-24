/**
 * Generate a light + dark apple-style profile banner (PNG, 2x) for the
 * GitHub profile README. GitHub strips CSS/JS but honours <picture> +
 * prefers-color-scheme, so two PNGs give a theme-aware hero.
 *
 * Run from a checkout that has sharp installed:
 *   node <path>/generate-banner.mjs <outDir>
 */
import sharp from "sharp";
import { join } from "node:path";

const OUT = process.argv[2] ?? process.cwd();
const W = 1280;
const H = 380;
const SCALE = 2;

const themes = {
  light: {
    bg0: "#fbfbfd",
    bg1: "#eef2f9",
    bg2: "#e3ebf7",
    glowA: "#7aa8ff",
    glowAO: 0.22,
    glowB: "#9b8bff",
    glowBO: 0.16,
    name: "#1d1d1f",
    role: "#6e6e73",
    chipFill: "#ffffff",
    chipText: "#424245",
    chipStroke: "#d2d2d7",
    rule: "#d2d2d7",
  },
  dark: {
    bg0: "#0a0b10",
    bg1: "#0c1020",
    bg2: "#0f1733",
    glowA: "#3d7dff",
    glowAO: 0.4,
    glowB: "#8f6bff",
    glowBO: 0.32,
    name: "#f5f5f7",
    role: "#a1a1a6",
    chipFill: "#1c1c1e",
    chipText: "#e8e8ed",
    chipStroke: "#2c2c2e",
    rule: "#2a2a2e",
  },
};

const chips = ["QA Engineer", "SDET", "AI Testing", "Automation"];

function chipRow(t) {
  const cx = W / 2;
  const gap = 14;
  const padX = 20;
  const charW = 9.2;
  const h = 40;
  const widths = chips.map((c) => Math.round(c.length * charW + padX * 2));
  const total = widths.reduce((a, b) => a + b, 0) + gap * (chips.length - 1);
  let x = cx - total / 2;
  const y = 270;
  let out = "";
  chips.forEach((c, i) => {
    const w = widths[i];
    out += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${t.chipFill}" stroke="${t.chipStroke}" stroke-width="1"/>
      <text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="${t.chipText}">${c}</text>`;
    x += w + gap;
  });
  return out;
}

function bannerSvg(theme) {
  const t = themes[theme];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W * SCALE}" height="${H * SCALE}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${t.bg0}"/>
      <stop offset="55%" stop-color="${t.bg1}"/>
      <stop offset="100%" stop-color="${t.bg2}"/>
    </linearGradient>
    <radialGradient id="ga" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${t.glowA}" stop-opacity="${t.glowAO}"/>
      <stop offset="100%" stop-color="${t.glowA}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${t.glowB}" stop-opacity="${t.glowBO}"/>
      <stop offset="100%" stop-color="${t.glowB}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="${W - 180}" cy="60" r="320" fill="url(#ga)"/>
  <circle cx="160" cy="${H - 40}" r="280" fill="url(#gb)"/>
  <text x="${W / 2}" y="150" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-3" fill="${t.name}">XuXuClassMate</text>
  <text x="${W / 2}" y="210" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="500" letter-spacing="-0.4" fill="${t.role}">Building AI testing tools &amp; quality engineering systems</text>
  ${chipRow(t)}
  <rect x="${W / 2 - 40}" y="340" width="80" height="4" rx="2" fill="${t.rule}"/>
</svg>`;
}

for (const theme of Object.keys(themes)) {
  const file = join(OUT, `banner-${theme}.png`);
  await sharp(Buffer.from(bannerSvg(theme))).png().toFile(file);
  console.log("wrote", file);
}

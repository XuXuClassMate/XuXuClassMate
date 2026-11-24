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
const H = 400;
const SCALE = 2;

const themes = {
  light: {
    bg0: "#eef3fc",
    bg1: "#e4ecf8",
    bg2: "#dce7fb",
    glows: [
      { x: W - 150, y: 70, r: 360, color: "#5b8cff", o: 0.3 },
      { x: 150, y: H - 30, r: 320, color: "#8f7bff", o: 0.22 },
      { x: W * 0.5, y: H * 0.5, r: 300, color: "#5ce1ff", o: 0.14 },
    ],
    name: "#1d1d1f",
    role: "#515a6b",
    chipFill: "#ffffff",
    chipText: "#3a3a3d",
    chipStroke: "#ffffff",
    chipShadow: 0.1,
  },
  dark: {
    bg0: "#080a12",
    bg1: "#0b1022",
    bg2: "#0f1b3c",
    glows: [
      { x: W - 150, y: 70, r: 380, color: "#3d7dff", o: 0.5 },
      { x: 150, y: H - 30, r: 340, color: "#8f6bff", o: 0.42 },
      { x: W * 0.5, y: H * 0.55, r: 320, color: "#5ce1ff", o: 0.2 },
    ],
    name: "#f5f5f7",
    role: "#aab2c2",
    chipFill: "#1b1d24",
    chipText: "#e8ebf2",
    chipStroke: "#2a2d38",
    chipShadow: 0.4,
  },
};

const chips = ["QA Engineer", "SDET", "AI Testing", "Automation"];

function chipRow(t) {
  const cx = W / 2;
  const gap = 14;
  const padX = 20;
  const charW = 9.2;
  const h = 42;
  const widths = chips.map((c) => Math.round(c.length * charW + padX * 2));
  const total = widths.reduce((a, b) => a + b, 0) + gap * (chips.length - 1);
  let x = cx - total / 2;
  const y = 288;
  let out = "";
  chips.forEach((c, i) => {
    const w = widths[i];
    out += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${t.chipFill}" stroke="${t.chipStroke}" stroke-width="1" fill-opacity="0.92"/>
      <text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="${t.chipText}">${c}</text>`;
    x += w + gap;
  });
  return out;
}

function bannerSvg(theme) {
  const t = themes[theme];
  const glowDefs = t.glows
    .map(
      (g, i) => `<radialGradient id="g${i}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${g.color}" stop-opacity="${g.o}"/>
      <stop offset="100%" stop-color="${g.color}" stop-opacity="0"/>
    </radialGradient>`,
    )
    .join("\n");
  const glowCircles = t.glows
    .map((g, i) => `<circle cx="${g.x}" cy="${g.y}" r="${g.r}" fill="url(#g${i})"/>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W * SCALE}" height="${H * SCALE}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${t.bg0}"/>
      <stop offset="55%" stop-color="${t.bg1}"/>
      <stop offset="100%" stop-color="${t.bg2}"/>
    </linearGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0071e3"/>
      <stop offset="100%" stop-color="#8f6bff"/>
    </linearGradient>
    ${glowDefs}
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${glowCircles}
  <text x="${W / 2}" y="158" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="104" font-weight="700" letter-spacing="-3.5" fill="${t.name}">XuXuClassMate</text>
  <text x="${W / 2}" y="222" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="500" letter-spacing="-0.4" fill="${t.role}">Building AI testing tools &amp; quality engineering systems</text>
  ${chipRow(t)}
  <rect x="${W / 2 - 44}" y="360" width="88" height="4" rx="2" fill="url(#rule)"/>
</svg>`;
}

for (const theme of Object.keys(themes)) {
  const file = join(OUT, `banner-${theme}.png`);
  await sharp(Buffer.from(bannerSvg(theme))).png().toFile(file);
  console.log("wrote", file);
}

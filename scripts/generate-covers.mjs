/**
 * Generate light + dark branded project covers.
 * Run: node scripts/generate-covers.mjs
 */
import sharp from "sharp";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "images");
const W = 960;
const H = 540;

const themes = {
  light: {
    bg0: "#dbe7ff",
    bg1: "#eef3fb",
    bg2: "#cfe0ff",
    blobA: "#5ce1ff",
    blobAOpacity: 0.18,
    blobB: "#3d7dff",
    blobBOpacity: 0.14,
    title: "#0b1020",
    subtitle: "#4a5d7a",
    accent0: "#2f6bff",
    accent1: "#1aa7d4",
  },
  dark: {
    bg0: "#070b14",
    bg1: "#0c1322",
    bg2: "#0f1c36",
    blobA: "#5ce1ff",
    blobAOpacity: 0.12,
    blobB: "#3d7dff",
    blobBOpacity: 0.18,
    title: "#e7eefc",
    subtitle: "#8fa0bd",
    accent0: "#3d7dff",
    accent1: "#5ce1ff",
  },
};

const covers = [
  {
    file: "cover-testcase",
    title: "AI Test Case Generator",
    subtitle: "Multimodal QA → structured cases",
  },
  {
    file: "cover-trading",
    title: "Trading Assistant Core",
    subtitle: "OpenClaw skill · ClawHub · CLI",
  },
  {
    file: "cover-globalpulse",
    title: "GlobalPulse",
    subtitle: "Market intelligence · scheduled briefings",
  },
  {
    file: "cover-docker-gateway",
    title: "Docker Hub API Gateway",
    subtitle: "Stats · SVG cards · OpenAPI",
  },
  {
    file: "cover-docker",
    title: "Test DB Docker Suite",
    subtitle: "Dameng · Highgo · Kingbase · TiDB",
  },
  {
    file: "cover-automation",
    title: "Automation Framework Craft",
    subtitle: "API · UI · Playwright practice",
  },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function coverSvg(title, subtitle, theme) {
  const t = themes[theme];
  const titleSize = title.length > 22 ? 42 : 48;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${t.bg0}"/>
      <stop offset="55%" stop-color="${t.bg1}"/>
      <stop offset="100%" stop-color="${t.bg2}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${t.accent0}"/>
      <stop offset="100%" stop-color="${t.accent1}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="${W - 160}" cy="90" r="210" fill="${t.blobA}" opacity="${t.blobAOpacity}"/>
  <circle cx="110" cy="${H - 70}" r="180" fill="${t.blobB}" opacity="${t.blobBOpacity}"/>
  <text x="64" y="220" font-family="Helvetica, Arial, sans-serif" font-size="${titleSize}" font-weight="700" fill="${t.title}">${escapeXml(title)}</text>
  <text x="64" y="278" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="500" fill="${t.subtitle}">${escapeXml(subtitle)}</text>
  <rect x="64" y="312" width="96" height="8" rx="4" fill="url(#accent)"/>
</svg>`;
}

async function writeCover(file, title, subtitle, theme) {
  const suffix = theme === "light" ? ".jpg" : "-dark.jpg";
  const outfile = join(OUT, `${file}${suffix}`);
  await sharp(Buffer.from(coverSvg(title, subtitle, theme)))
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(outfile);
  console.log("wrote", outfile);
}

for (const cover of covers) {
  await writeCover(cover.file, cover.title, cover.subtitle, "light");
  await writeCover(cover.file, cover.title, cover.subtitle, "dark");
}

await sharp(
  Buffer.from(coverSvg("XuXuClassMate", "AI testing tools · quality engineering", "light")),
)
  .resize(1200, 630)
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(join(OUT, "og-default.jpg"));
console.log("wrote og-default.jpg");

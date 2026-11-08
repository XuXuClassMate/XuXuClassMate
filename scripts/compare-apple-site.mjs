#!/usr/bin/env node
/**
 * Structural apple.com parity across the whole static site (sitemap-driven).
 * Usage: node scripts/compare-apple-site.mjs [origin]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const origin = (process.argv[2] ?? "https://www.xuxuclassmate.com").replace(
  /\/$/,
  "",
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const universal = [
  "site-apple",
  "globalnav",
  "footer--apple",
  "footer-apple-legal-line",
  "footer-apple-locale",
];

function pageMarkers(html, urlPath) {
  const isHome = urlPath === "/" || urlPath === "/zh" || urlPath === "/zh/";
  if (isHome) {
    return ["apple-homepage", "tile-headline"];
  }
  return ["apple-page"];
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "apple-site-parity" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.text();
}

function hasAll(html, tokens) {
  return tokens.every((t) => html.includes(t));
}

const failures = [];
let passed = 0;

for (const loc of locs) {
  const url = loc.startsWith("http") ? loc : `${origin}${loc}`;
  const urlPath = new URL(url).pathname.replace(/\/$/, "") || "/";
  let html;
  try {
    html = await fetchHtml(url);
  } catch (e) {
    failures.push({ url: urlPath, error: String(e.message ?? e) });
    continue;
  }

  const must = [...universal, ...pageMarkers(html, urlPath)];
  const ok = hasAll(html, must);
  if (ok) passed += 1;
  else {
    failures.push({
      url: urlPath,
      missing: must.filter((t) => !html.includes(t)),
    });
  }
}

const total = locs.length;
const percent = Math.round((passed / total) * 100);

console.log(
  JSON.stringify(
    {
      origin,
      passed,
      total,
      siteParityPercent: percent,
      failures: failures.slice(0, 20),
      failuresTruncated: failures.length > 20,
    },
    null,
    2,
  ),
);

if (percent < 100) process.exit(1);

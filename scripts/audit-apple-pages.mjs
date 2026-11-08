#!/usr/bin/env node
/**
 * Anti-pattern audit across sitemap (excludes footer checks in compare-apple-site).
 * Usage: node scripts/audit-apple-pages.mjs [origin]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const origin = (process.argv[2] ?? "https://www.xuxuclassmate.com").replace(
  /\/$/,
  "",
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemap = fs.readFileSync(
  path.join(__dirname, "..", "public", "sitemap.xml"),
  "utf8",
);
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const globalMust = ["site-apple", "globalnav"];
const globalMustNot = [
  "ac-bento",
  "data-highlights-carousel",
  "ac-highlights-track",
  "hero-blob",
  "hero-atmosphere",
  "glass-tint-toggle",
  "footer-desc",
];

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "apple-page-audit" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.text();
}

const failures = [];
let passed = 0;

for (const loc of locs) {
  const url = loc.startsWith("http") ? loc : `${origin}${loc}`;
  const urlPath = new URL(url).pathname;
  const isHome =
    urlPath === "/" || urlPath === "/zh" || urlPath === "/zh/";
  const isDesignLab = urlPath.includes("design-lab");
  let html;
  try {
    html = await fetchHtml(url);
  } catch (e) {
    failures.push({ url: urlPath, error: String(e.message ?? e) });
    continue;
  }

  const must = [
    ...globalMust,
    isHome ? "apple-homepage" : "apple-page",
  ];
  const mustNot = globalMustNot.filter((token) => {
    if (isDesignLab && token === "glass-tint-toggle") return false;
    return true;
  });

  const missing = must.filter((t) => !html.includes(t));
  const banned = mustNot.filter((t) => html.includes(t));

  if (missing.length === 0 && banned.length === 0) {
    passed += 1;
  } else {
    failures.push({ url: urlPath, missing, banned });
  }
}

const total = locs.length;
const percent = Math.round((passed / total) * 100);

console.log(
  JSON.stringify(
    { origin, passed, total, appleUiAuditPercent: percent, failures },
    null,
    2,
  ),
);

if (percent < 100) process.exit(1);

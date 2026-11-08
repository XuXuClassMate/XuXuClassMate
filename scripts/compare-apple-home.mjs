#!/usr/bin/env node
/**
 * Quick structural parity check vs apple.com homepage patterns.
 * Usage: node scripts/compare-apple-home.mjs [origin]
 */
const origin = process.argv[2] ?? "https://www.xuxuclassmate.com";

const checks = [
  { id: "tile-headline", selector: ".tile-headline" },
  { id: "section-promo", selector: ".section-promo, .section-hero" },
  { id: "apple-button", selector: ".apple-button" },
  { id: "tile-image", selector: ".tile-image-wrapper img" },
  { id: "no-tabbar-mobile", selector: ".tabbar", expectHidden: true, mobile: true },
];

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { "User-Agent": "parity-check" } });
  return await res.text();
}

function count(html, re) {
  return (html.match(re) || []).length;
}

const html = await fetchHtml(origin.endsWith("/") ? origin : `${origin}/`);

const report = {
  origin,
  tileHeadline: count(html, /tile-headline/g),
  sectionPromo: count(html, /section-promo|section-hero/g),
  appleButton: count(html, /apple-button/g),
  tileImageWrapper: count(html, /tile-image-wrapper/g),
  highlightsCarousel: count(html, /data-highlights-carousel/g),
  acBento: count(html, /ac-bento/g),
};

const score =
  (report.tileHeadline >= 3 ? 25 : 0) +
  (report.sectionPromo >= 3 ? 25 : 0) +
  (report.appleButton >= 4 ? 25 : 0) +
  (report.tileImageWrapper >= 3 ? 15 : 0) +
  (report.highlightsCarousel === 0 ? 5 : 0) +
  (report.acBento === 0 ? 5 : 0);

console.log(JSON.stringify({ ...report, structuralParityPercent: score }, null, 2));

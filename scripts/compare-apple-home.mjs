#!/usr/bin/env node
/**
 * Quick structural parity check vs apple.com homepage patterns.
 * Usage: node scripts/compare-apple-home.mjs [origin]
 */
const origin = process.argv[2] ?? "https://www.xuxuclassmate.com";

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
  sectionRibbon: count(html, /section-ribbon/g),
  entertainmentGallery: count(html, /data-entertainment-gallery/g),
  promoDuo: count(html, /section-promo-duo/g),
  globalnav: count(html, /globalnav/g),
  highlightsCarousel: count(html, /data-highlights-carousel/g),
  acBento: count(html, /ac-bento/g),
};

const score =
  (report.tileHeadline >= 3 ? 18 : 0) +
  (report.sectionPromo >= 3 ? 18 : 0) +
  (report.appleButton >= 4 ? 18 : 0) +
  (report.tileImageWrapper >= 3 ? 12 : 0) +
  (report.sectionRibbon >= 1 ? 10 : 0) +
  (report.entertainmentGallery >= 1 ? 10 : 0) +
  (report.promoDuo >= 1 ? 6 : 0) +
  (report.globalnav >= 1 ? 3 : 0) +
  (report.highlightsCarousel === 0 ? 3 : 0) +
  (report.acBento === 0 ? 2 : 0);

console.log(JSON.stringify({ ...report, structuralParityPercent: score }, null, 2));

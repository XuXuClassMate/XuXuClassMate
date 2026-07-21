#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ORIGIN = "https://www.xuxuclassmate.com";
const lastmod = new Date().toISOString().slice(0, 10);

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.00" },
  { path: "/en/", changefreq: "weekly", priority: "0.90" },
  { path: "/en/life", changefreq: "monthly", priority: "0.80" },
  { path: "/en/learn", changefreq: "monthly", priority: "0.80" },
  { path: "/en/work", changefreq: "monthly", priority: "0.80" },
  { path: "/zh/", changefreq: "weekly", priority: "0.90" },
  { path: "/zh/life", changefreq: "monthly", priority: "0.80" },
  { path: "/zh/learn", changefreq: "monthly", priority: "0.80" },
  { path: "/zh/work", changefreq: "monthly", priority: "0.80" },
];

const cases = [
  "testcase-generator",
  "trading-assistant",
  "docker-suite",
  "automation-framework",
];

for (const slug of cases) {
  pages.push({
    path: `/en/work/${slug}`,
    changefreq: "monthly",
    priority: "0.70",
  });
  pages.push({
    path: `/zh/work/${slug}`,
    changefreq: "monthly",
    priority: "0.70",
  });
}

const body = pages
  .map(
    (page) => `  <url>
    <loc>${ORIGIN}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const out = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(out, xml);
console.log(`Wrote ${out} (${pages.length} urls)`);

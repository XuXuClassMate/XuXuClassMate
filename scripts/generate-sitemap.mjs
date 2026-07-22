#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ORIGIN = "https://www.xuxuclassmate.com";
const lastmod = new Date().toISOString().slice(0, 10);

const staticPages = [
  "/",
  "/en/",
  "/en/about",
  "/en/learn",
  "/en/work",
  "/en/blog",
  "/en/ai-testing",
  "/en/playwright",
  "/en/infrastructure",
  "/en/life",
  "/en/innonestx",
  "/zh/",
  "/zh/about",
  "/zh/learn",
  "/zh/work",
  "/zh/blog",
  "/zh/ai-testing",
  "/zh/playwright",
  "/zh/infrastructure",
  "/zh/life",
  "/zh/innonestx",
];

const pages = staticPages.map((path, index) => ({
  path,
  changefreq: path === "/" || path.endsWith("/") ? "weekly" : "monthly",
  priority: index === 0 ? "1.00" : path.includes("/en/") ? "0.90" : "0.80",
}));

const cases = [
  "fullstack-e2e",
  "automation-framework",
  "testcase-generator",
  "trading-assistant",
  "globalpulse",
  "docker-hub-api-gateway",
  "docker-suite",
];

const posts = ["domestic-db-docker-qa", "clawhub-skill-shipping"];

for (const slug of cases) {
  pages.push({
    path: `/en/work/${slug}`,
    changefreq: "monthly",
    priority: "0.70",
  });
  pages.push({
    path: `/zh/work/${slug}`,
    changefreq: "monthly",
    priority: "0.65",
  });
}

for (const slug of posts) {
  pages.push({
    path: `/en/blog/${slug}`,
    changefreq: "monthly",
    priority: "0.70",
  });
  pages.push({
    path: `/zh/blog/${slug}`,
    changefreq: "monthly",
    priority: "0.65",
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

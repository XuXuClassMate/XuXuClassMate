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
  "/en/open-source",
  "/en/now",
  "/en/playground",
  "/en/demo/ai-testcase-generator",
  "/zh/",
  "/zh/about",
  "/zh/learn",
  "/zh/work",
  "/zh/blog",
  "/zh/ai-testing",
  "/zh/playwright",
  "/zh/infrastructure",
  "/zh/life",
  "/zh/open-source",
  "/zh/now",
  "/zh/playground",
  "/zh/demo/ai-testcase-generator",
];

/** Higher priority for flagship / conversion surfaces. */
const priorityOverrides = {
  "/en/work/testcase-generator": "0.95",
  "/zh/work/testcase-generator": "0.90",
  "/en/demo/ai-testcase-generator": "0.92",
  "/zh/demo/ai-testcase-generator": "0.88",
  "/en/blog/ai-testcase-generator-multimodal": "0.80",
  "/zh/blog/ai-testcase-generator-multimodal": "0.75",
  "/en/blog/ai-assisted-test-case-generation": "0.80",
  "/zh/blog/ai-assisted-test-case-generation": "0.75",
  "/en/learn": "0.90",
  "/zh/learn": "0.85",
};

const pages = staticPages.map((path, index) => ({
  path,
  changefreq: path === "/" || path.endsWith("/") ? "weekly" : "monthly",
  priority:
    priorityOverrides[path] ??
    (index === 0 ? "1.00" : path.includes("/en/") ? "0.90" : "0.80"),
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

const posts = [
  "ai-testcase-generator-multimodal",
  "playwright-e2e-framework",
  "locust-api-performance-testing",
  "dockerized-test-environment",
  "ai-assisted-test-case-generation",
  "ai-agent-software-testing",
  "domestic-db-docker-qa",
  "clawhub-skill-shipping",
];

for (const slug of cases) {
  const enPath = `/en/work/${slug}`;
  const zhPath = `/zh/work/${slug}`;
  pages.push({
    path: enPath,
    changefreq: "monthly",
    priority: priorityOverrides[enPath] ?? "0.70",
  });
  pages.push({
    path: zhPath,
    changefreq: "monthly",
    priority: priorityOverrides[zhPath] ?? "0.65",
  });
}

for (const slug of posts) {
  const enPath = `/en/blog/${slug}`;
  const zhPath = `/zh/blog/${slug}`;
  pages.push({
    path: enPath,
    changefreq: "monthly",
    priority: priorityOverrides[enPath] ?? "0.70",
  });
  pages.push({
    path: zhPath,
    changefreq: "monthly",
    priority: priorityOverrides[zhPath] ?? "0.65",
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

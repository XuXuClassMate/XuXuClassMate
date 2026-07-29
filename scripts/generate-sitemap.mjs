#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ORIGIN = "https://www.xuxuclassmate.com";
const lastmod = new Date().toISOString().slice(0, 10);

const staticPages = [
  "/",
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

/** Higher priority for flagship / conversion surfaces (EN + ZH). */
const priorityOverrides = {
  "/en/work/testcase-generator": "0.95",
  "/zh/work/testcase-generator": "0.95",
  "/en/demo/ai-testcase-generator": "0.92",
  "/zh/demo/ai-testcase-generator": "0.92",
  "/en/blog/ai-testcase-generator-multimodal": "0.85",
  "/zh/blog/ai-testcase-generator-multimodal": "0.85",
  "/en/blog/ai-assisted-test-case-generation": "0.85",
  "/zh/blog/ai-assisted-test-case-generation": "0.85",
  "/en/learn": "0.90",
  "/zh/learn": "0.90",
  "/en/ai-testing": "0.90",
  "/zh/ai-testing": "0.90",
  "/en/playground": "0.85",
  "/zh/playground": "0.85",
};

const weeklyPaths = new Set([
  "/",
  "/zh/",
  "/en/work/testcase-generator",
  "/zh/work/testcase-generator",
  "/en/demo/ai-testcase-generator",
  "/zh/demo/ai-testcase-generator",
  "/en/learn",
  "/zh/learn",
  "/en/ai-testing",
  "/zh/ai-testing",
]);

/** GSC URL Inspection priority list (EN + ZH). */
const indexPriorityPaths = [
  "/en/work/testcase-generator",
  "/zh/work/testcase-generator",
  "/en/demo/ai-testcase-generator",
  "/zh/demo/ai-testcase-generator",
  "/en/learn",
  "/zh/learn",
  "/en/ai-testing",
  "/zh/ai-testing",
  "/en/blog/ai-testcase-generator-multimodal",
  "/zh/blog/ai-testcase-generator-multimodal",
  "/en/blog/ai-assisted-test-case-generation",
  "/zh/blog/ai-assisted-test-case-generation",
  "/en/playground",
  "/zh/playground",
];

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

function defaultPriority(path) {
  if (path === "/") return "1.00";
  if (path.startsWith("/en/")) return "0.90";
  if (path.startsWith("/zh/")) return "0.80";
  return "0.80";
}

function alternatePath(path) {
  if (path === "/") return "/zh/";
  if (path === "/zh/") return "/";
  if (path.startsWith("/en/")) return `/zh/${path.slice(4)}`;
  if (path.startsWith("/zh/")) return `/en/${path.slice(4)}`;
  return null;
}

function xDefaultPath(path) {
  if (path === "/" || path === "/zh/") return "/";
  if (path.startsWith("/zh/")) return `/en/${path.slice(4)}`;
  return path;
}

const pages = staticPages.map((path) => ({
  path,
  changefreq: weeklyPaths.has(path) ? "weekly" : "monthly",
  priority: priorityOverrides[path] ?? defaultPriority(path),
}));

for (const slug of cases) {
  for (const locale of ["en", "zh"]) {
    const path = `/${locale}/work/${slug}`;
    pages.push({
      path,
      changefreq: weeklyPaths.has(path) ? "weekly" : "monthly",
      priority: priorityOverrides[path] ?? (locale === "en" ? "0.70" : "0.65"),
    });
  }
}

for (const slug of posts) {
  for (const locale of ["en", "zh"]) {
    const path = `/${locale}/blog/${slug}`;
    pages.push({
      path,
      changefreq: "monthly",
      priority: priorityOverrides[path] ?? (locale === "en" ? "0.70" : "0.65"),
    });
  }
}

pages.sort((a, b) => Number(b.priority) - Number(a.priority));

const body = pages
  .map((page) => {
    const alt = alternatePath(page.path);
    const xDefault = xDefaultPath(page.path);
    const enHref =
      page.path === "/" || page.path.startsWith("/en/")
        ? page.path
        : page.path === "/zh/"
          ? "/"
          : alt;
    const zhHref =
      page.path === "/" || page.path.startsWith("/en/")
        ? alt
        : page.path;
    const hreflang =
      enHref && zhHref
        ? `    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${enHref}" />
    <xhtml:link rel="alternate" hreflang="zh" href="${ORIGIN}${zhHref}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${xDefault}" />`
        : "";

    return `  <url>
    <loc>${ORIGIN}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${hreflang}
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;

const out = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(out, xml);

const priorityOut = join(process.cwd(), "scripts", "seo-priority-urls.txt");
writeFileSync(
  priorityOut,
  [
    "# Priority URLs for Google Search Console → URL Inspection → Request indexing",
    "# Resubmit sitemap: https://www.xuxuclassmate.com/sitemap.xml",
    "",
    ...indexPriorityPaths.map((path) => `${ORIGIN}${path}`),
    "",
  ].join("\n"),
);

console.log(`Wrote ${out} (${pages.length} urls)`);
console.log(`Wrote ${priorityOut} (${indexPriorityPaths.length} priority urls)`);

#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ORIGIN = "https://www.xuxuclassmate.com";
const lastmod = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Dubai",
}).format(new Date());

const staticPages = [
  "/",
  "/en/about",
  "/en/learn",
  "/en/work",
  "/en/blog",
  "/en/ai-testing",
  "/en/playwright",
  "/en/infrastructure",
  "/en/open-source",
  "/en/now",
  "/en/playground",
  "/en/demo/ai-testcase-generator",
];

const priorityOverrides = {
  "/en/work/testcase-generator": "0.95",
  "/en/demo/ai-testcase-generator": "0.92",
  "/en/blog/ai-testcase-generator-multimodal": "0.85",
  "/en/blog/ai-assisted-test-case-generation": "0.85",
  "/en/learn": "0.90",
  "/en/ai-testing": "0.90",
  "/en/playground": "0.85",
};

const weeklyPaths = new Set([
  "/",
  "/en/work/testcase-generator",
  "/en/demo/ai-testcase-generator",
  "/en/learn",
  "/en/ai-testing",
]);

const indexPriorityPaths = [
  "/en/work/testcase-generator",
  "/en/demo/ai-testcase-generator",
  "/en/learn",
  "/en/ai-testing",
  "/en/blog/ai-testcase-generator-multimodal",
  "/en/blog/ai-assisted-test-case-generation",
  "/en/playground",
];

const cases = [
  "fullstack-e2e",
  "automation-framework",
  "testcase-generator",
  "trading-assistant",
  "custom-mail",
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
  "enterprise-db-docker-qa",
  "clawhub-skill-shipping",
];

function defaultPriority(path) {
  if (path === "/") return "1.00";
  return "0.90";
}

const pages = staticPages.map((path) => ({
  path,
  changefreq: weeklyPaths.has(path) ? "weekly" : "monthly",
  priority: priorityOverrides[path] ?? defaultPriority(path),
}));

for (const slug of cases) {
  const path = `/en/work/${slug}`;
  pages.push({
    path,
    changefreq: weeklyPaths.has(path) ? "weekly" : "monthly",
    priority: priorityOverrides[path] ?? "0.70",
  });
}

for (const slug of posts) {
  const path = `/en/blog/${slug}`;
  pages.push({
    path,
    changefreq: "monthly",
    priority: priorityOverrides[path] ?? "0.70",
  });
}

pages.sort((a, b) => Number(b.priority) - Number(a.priority));

const body = pages
  .map((page) => {
    const enHref = page.path.startsWith("/zh")
      ? page.path === "/zh/" || page.path === "/zh"
        ? "/"
        : `/en${page.path.slice(3)}`
      : page.path;
    const codes = ["en", "zh", "es", "hi", "ar", "pt", "fr", "ru", "ja", "de"];
    const hreflang = [
      ...codes.map((code) => {
        const href = code === "en" ? enHref : enHref === "/" ? `/${code}/` : enHref.replace(/^\/en\//, `/${code}/`);
        return `    <xhtml:link rel="alternate" hreflang="${code}" href="${ORIGIN}${href}" />`;
      }),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${enHref === "/" ? "/" : enHref}" />`,
    ].join("\n");

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

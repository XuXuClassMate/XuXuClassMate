#!/usr/bin/env node
/**
 * Smoke-check critical external links referenced by the site.
 * Run: node scripts/check-links.mjs
 */
const URLS = [
  "https://www.xuxuclassmate.com/",
  "https://pulse.xuxuclassmate.com/",
  "https://github.com/XuXuClassMate",
  "https://github.com/InnoNestX/testcase-generator",
  "https://github.com/InnoNestX/trading-assistant",
  "https://github.com/XuXuClassMate/My_Test_JAProject",
  "https://github.com/XuXuClassMate/My_Test_PyProject",
  "https://github.com/InnoNestX/GlobalPulse",
  "https://hub.docker.com/u/xuxuclassmate",
  "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
  "https://clawhub.ai/xuxuclassmate",
  "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
  "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
  "https://docker-hub-pull-counter.vercel.app",
  "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
  "https://docker-hub-pull-counter.vercel.app/api/stats",
  "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
];

async function checkOnce(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (compatible; XuXuClassMate-link-check/1.0; +https://www.xuxuclassmate.com)",
    Accept: "text/html,application/json,*/*",
  };
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers,
    });
    const ok =
      response.ok ||
      (response.status >= 300 && response.status < 400) ||
      response.status === 401 ||
      response.status === 403;
    return { url, ok, status: response.status };
  } catch (error) {
    return {
      url,
      ok: false,
      status: 0,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function check(url) {
  let result = await checkOnce(url);
  if (!result.ok) {
    await new Promise((resolve) => setTimeout(resolve, 750));
    result = await checkOnce(url);
  }
  return result;
}

const results = await Promise.all(URLS.map(check));
const failed = results.filter((result) => !result.ok);

for (const result of results) {
  const mark = result.ok ? "OK" : "FAIL";
  const detail = result.error ?? result.status;
  console.log(`${mark.padEnd(4)} ${detail}\t${result.url}`);
}

if (failed.length) {
  console.error(`\n${failed.length} link(s) failed`);
  process.exit(1);
}

console.log(`\nChecked ${results.length} links`);

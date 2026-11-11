import { expect, test } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

test("home renders and language switch works", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
  );
  await expect(page.locator(".hero-role-line")).toHaveText(
    "AI-powered Quality Engineering",
  );
  await expect(page.locator(".hero-desc")).toContainText("AI testing tools");
  await expect(page.locator(".hero-desc")).toContainText(
    "reusable engineering infrastructure",
  );
  await expect(
    page.getByRole("link", { name: "Learn more" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Try AI Test Case Generator" }),
  ).toHaveAttribute("href", "/en/demo/ai-testcase-generator");
  await expect(page.locator(".hero-actions .btn-ghost")).toHaveText("Try");
  await expect(page.locator(".section-promo, .section-hero").first()).toBeVisible();
  await expect(page.locator(".tile-headline").first()).toBeVisible();
  await expect(
    page.getByText("From requirements to reviewable test cases.").first(),
  ).toBeVisible();
  await expect(page.getByText("Built with Astro")).toHaveCount(0);
  await expect(page.getByText("These sites are running under this name.")).toHaveCount(0);
  await expect(page.getByText("Cloudflare Pages")).toHaveCount(0);
});

test("footer exposes professional profiles only", async ({ page }) => {
  await page.goto("/");
  const footer = page.getByRole("contentinfo");
  const social = footer.locator(".footer-apple-social");
  await expect(social.getByRole("link", { name: "GitHub" })).toBeVisible();
  await expect(social.getByRole("link", { name: "Medium" })).toBeVisible();
  await expect(social.getByRole("link", { name: "Docker Hub" })).toBeVisible();
});

test("projects page shows categorized sections", async ({ page }) => {
  await page.goto("/en/work");
  await expect(
    page.getByRole("heading", { name: "Quality Engineering" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Developer Infrastructure" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "AI / Agent Projects" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "AI Test Case Generator" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Test DB Docker Suite" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Docker Hub API Gateway" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "GlobalPulse" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Trading Assistant Core" }),
  ).toBeVisible();
});

test("unified case study template renders", async ({ page }) => {
  await page.goto("/en/work/testcase-generator");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
  );
  await expect(page.locator(".subtitle")).toContainText("FLAGSHIP");
  await expect(page.getByRole("heading", { name: "Workflow" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Product Features" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Engineering Architecture", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Proof" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Get Started" })).toBeVisible();
  await expect(page.getByText("AI tools you can install — quality you can trust.")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open interactive demo" }),
  ).toHaveAttribute("href", "/en/demo/ai-testcase-generator");
  await expect(
    page.getByRole("link", { name: "Official docs" }).first(),
  ).toHaveAttribute("href", "https://innonestx.github.io/testcase-generator/");
  await expect(page.locator(".story-flow")).toContainText(
    "Three-persona review loop",
  );
  await expect(
    page.getByRole("link", { name: "Engineering note: multimodal build" }),
  ).toHaveAttribute("href", "/en/blog/ai-testcase-generator-multimodal");
  await expect(
    page.locator('[data-metric="docker:testcase-generator"]'),
  ).toBeVisible();
  await expect(
    page.locator('[data-metric="npm:testcase-generator"]'),
  ).toBeVisible();
  await expect(
    page.locator('[data-metric="clawhub:ai-testcase-generator"]'),
  ).toBeVisible();
  await expect(
    page.locator(
      'img[src*="docker-hub-pull-counter.vercel.app/api/docker-stats"][src*="testcase-generator"]',
    ),
  ).toBeVisible();
  const back = page.getByRole("link", { name: /All projects/i });
  await expect(back.first()).toBeVisible();
});

test("generator interactive demo runs sample flow", async ({ page }) => {
  await page.goto("/en/demo/ai-testcase-generator");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
  );
  await page.locator("summary.language-switch").click();
  await expect(page.getByRole("link", { name: "中文", exact: true })).toHaveAttribute(
    "href",
    "/zh/demo/ai-testcase-generator",
  );
  await expect(page.locator(".footer-apple-lead")).not.toHaveText(
    /Shift testing left with multi-modal AI — a browser demo/,
  );
  await expect(page.locator(".hero-desc")).toContainText(
    "Shift testing left with multi-modal AI",
  );
  await expect(
    page.getByText("Multimodal AI", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Load sample PRD" }).click();
  await page.getByRole("button", { name: "Generate cases" }).click();
  await expect(page.getByText("TC-01")).toBeVisible({ timeout: 15000 });
  await expect(
    page.getByRole("heading", { name: "Request OTP with a valid email" }),
  ).toBeVisible();
  await expect(page.locator("#demo-results")).toBeVisible();
  await expect(page.getByText("Pipeline complete")).toBeVisible({
    timeout: 15000,
  });
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Markdown" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("demo-test-cases.md");
});

test("non-flagship case study uses same template", async ({ page }) => {
  await page.goto("/en/work/globalpulse");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("GlobalPulse");
  await expect(
    page.getByRole("heading", { name: "01. Project Overview" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "06. My Role" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "11. Live Demo" }),
  ).toBeVisible();
});

test("engineering notes index and article render", async ({ page }) => {
  await page.goto("/en/blog");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Engineering Notes",
  );
  await expect(page.getByRole("button", { name: "AI Testing" })).toBeVisible();
  await expect(page.locator(".note-card-proof").first()).toBeVisible();
  await expect(page.locator(".note-byline")).toHaveCount(0);
  await expect(page.locator(".note-meta")).toHaveCount(0);
  await expect(
    page.getByRole("heading", {
      name: /How I Built an AI Test Case Generator/i,
    }),
  ).toBeVisible();
  await page
    .getByRole("link", {
      name: /How I Built an AI Test Case Generator/i,
    })
    .first()
    .click();
  await expect(page).toHaveURL(
    /\/en\/blog\/ai-testcase-generator-multimodal\/?$/,
  );
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "AI Test Case Generator",
  );
  await expect(page.locator(".detail-topbar .back-nav")).toBeVisible();
  await expect(
    page.getByRole("link", { name: /^All Engineering Notes$/i }).first(),
  ).toBeVisible();

  await page.goto("/en/blog/enterprise-db-docker-qa");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Dameng");
  await expect(page.locator(".note-toc")).toBeVisible();
  await expect(page.locator(".note-stats").first()).toBeVisible();
  await expect(page.locator('[data-metric="docker:total-pulls"]')).toBeVisible();

  await page.goto("/en/blog/clawhub-skill-shipping");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("ClawHub");
  await expect(
    page.locator('[data-metric="clawhub:total-downloads"]'),
  ).toBeVisible();
  await expect(
    page.locator('[data-metric="clawhub:trading-assistant-core"]'),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Release gate/i }),
  ).toBeVisible();
  await expect(page.locator(".back-nav-footer .back-nav")).toBeVisible();
});

test("now page shows building learning exploring", async ({ page }) => {
  await page.goto("/en/now");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Now");
  await expect(page.getByRole("heading", { name: "Building" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Learning" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Exploring" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "AI Test Case Generator" }),
  ).toBeVisible();
  await expect(page.getByText("MCP")).toBeVisible();
  await expect(page.getByText("Autonomous Testing")).toBeVisible();
  await expect(page.locator(".now-updated time")).toHaveAttribute(
    "datetime",
    "2026-07",
  );
});

test("open source page introduces InnoNestX", async ({ page }) => {
  await page.goto("/en/open-source");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Open Source",
  );
  await expect(page.getByRole("heading", { name: "What InnoNestX is" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "AI", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Testing", exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Developer Tools", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Infrastructure", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Automation", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "GlobalPulse", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Join & contact" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "GitHub organization" }).first(),
  ).toHaveAttribute("href", "https://github.com/InnoNestX");
  await expect(
    page.getByRole("link", { name: "Try on Playground" }),
  ).toHaveAttribute("href", "/en/playground");
  await expect(
    page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Open Source", exact: true }),
  ).toBeVisible();
});

test("desktop nav keeps products, engineering, open source, and about", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  await expect(nav.getByRole("link", { name: "Products", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Engineering", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Open Source", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "About", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Projects", exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /Work/ })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /More/ })).toHaveCount(0);
  await expect(page.locator("#glassTintToggle")).toHaveCount(0);
  await page.locator("summary.language-switch").click();
  await expect(page.getByRole("link", { name: "中文", exact: true })).toHaveAttribute(
    "href",
    "/zh/",
  );
  await expect(page.locator("#themeToggle")).toBeVisible();

  await page.goto("/en/design-lab");
  await page.locator("#glassTintToggle").click();
  const tintPanel = page.locator("#glassTintPanel");
  await expect(tintPanel).toBeVisible();
  await expect(page.locator("#glassTintSlider")).toBeVisible();
  await page.locator("#glassTintSlider").fill("80");
  await expect(page.locator("html")).toHaveAttribute("style", /--liquid-tint:\s*0\.8/);
});

test("playground page lists tryable experiences", async ({ page }) => {
  await page.goto("/en/playground");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Playground");
  await expect(
    page.getByRole("heading", { name: "AI Test Case Generator" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Docker Hub API Gateway" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Watch", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Test DB Docker Suite" }),
  ).toBeVisible();
  const dockerCard = page.locator("article").filter({
    has: page.getByRole("heading", { name: "Test DB Docker Suite" }),
  });
  await expect(dockerCard.getByRole("link", { name: "GitHub" })).toHaveCount(0);
  await expect(
    dockerCard.getByRole("link", { name: "Open Docker Hub" }),
  ).toHaveAttribute("href", "https://hub.docker.com/u/xuxuclassmate");
  await expect(
    page.getByRole("link", { name: "Open interactive demo" }),
  ).toHaveAttribute("href", "/en/demo/ai-testcase-generator");
  await expect(page.locator("#try-docker-hub-api")).toBeVisible();

  await page.goto("/en/about");
  const services = page.locator("#services");
  await expect(services.getByRole("heading", { name: "Services" })).toBeVisible();
  for (const host of [
    "www.xuxuclassmate.com",
    "nas.xuxuclassmate.com",
    "pulse.xuxuclassmate.com",
    "mail.xuxuclassmate.com",
    "watch.xuxuclassmate.com",
  ]) {
    await expect(services.getByRole("link", { name: new RegExp(host) })).toHaveAttribute(
      "href",
      new RegExp(host.replace(/\./g, "\\.")),
    );
  }
  await expect(page.locator(".footer-sites")).toHaveCount(0);
});

test("mobile nav is a full-screen apple menu with theme and language", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en/work");
  await expect(page.locator(".nav-links")).not.toHaveClass(/show/);
  await expect(page.locator(".tabbar")).toBeHidden();
  await expect(page.locator("#mobileNavToggle")).toBeVisible();
  await expect(page.locator("#themeToggle")).toBeHidden();
  await page.locator("#mobileNavToggle").click();
  await expect(page.locator(".nav-links")).toHaveClass(/show/);
  const drawer = await page.locator(".nav-links").boundingBox();
  expect(drawer).not.toBeNull();
  expect(drawer!.height).toBeGreaterThan(500);
  for (const label of ["Products", "Engineering", "About"]) {
    await expect(
      page.locator(".nav-links").getByRole("link", { name: label }),
    ).toBeVisible();
  }
  await expect(page.getByRole("button", { name: /Work/ })).toHaveCount(0);
  await expect(page.locator("#glassTintToggle")).toHaveCount(0);
  await expect(page.locator("summary.language-switch")).toBeVisible();
  await expect(page.locator("#themeToggle")).toBeVisible();
  await expect(page.locator(".theme-toggle-label")).toHaveText("Theme");
});

test("contact offers list is visible", async ({ page }) => {
  await page.goto("/en/about");
  await expect(page.locator(".contact-offers li").first()).toBeVisible();
});

test("new case studies render with project OG covers", async ({ page }) => {
  await page.goto("/en/work/globalpulse");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("GlobalPulse");
  const og = page.locator('meta[property="og:image"]');
  await expect(og).toHaveAttribute(
    "content",
    "https://www.xuxuclassmate.com/images/cover-globalpulse.jpg",
  );

  await page.goto("/en/work/docker-hub-api-gateway");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Docker Hub API Gateway",
  );
});

test("docker suite proof shows top pull metrics", async ({ page }) => {
  await page.goto("/en/work/docker-suite");
  await expect(page.getByRole("heading", { name: "Usage Statistics" })).toBeVisible();
  await expect(page.getByText("Dameng", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Quick Start" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Documentation" })).toBeVisible();
  await expect(page.getByText("docker pull xuxuclassmate/dameng")).toBeVisible();
  await expect(page.locator('[data-metric="docker:dameng"]')).toBeVisible();
  await expect(page.locator('[data-metric="docker:highgo"]')).toBeVisible();
  await expect(page.locator('[data-metric="docker:kingbase"]')).toBeVisible();
  await expect(page.locator('[data-metric="docker:tidb"]')).toBeVisible();
});

test("home live metrics hydrate from api payload", async ({ page }) => {
  await page.route("**/api/metrics", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        "clawhub:ai-testcase-generator": 1200,
        "clawhub:trading-assistant-core": 1500,
        "clawhub:total-downloads": 2700,
        "docker:dameng": 30000,
        "docker:highgo": 17000,
        "docker:kingbase": 2000,
        "docker:tidb": 1000,
        "docker:testcase-generator": 950,
        "docker:total-pulls": 60000,
        "docker:repo-count": 12,
        "npm:testcase-generator": 160,
        "api:gateway-calls": 800,
        updatedAt: new Date().toISOString(),
      }),
    });
  });
  await page.goto("/en/blog/enterprise-db-docker-qa");
  const dockerTotal = page.locator('[data-metric="docker:total-pulls"]');
  await dockerTotal.scrollIntoViewIfNeeded();
  await expect(dockerTotal).toHaveText("60k+", { timeout: 5000 });
  await page.goto("/en/blog/clawhub-skill-shipping");
  const clawhubTotal = page.locator('[data-metric="clawhub:total-downloads"]');
  await clawhubTotal.scrollIntoViewIfNeeded();
  await expect(clawhubTotal).toHaveText("2.7k+", { timeout: 5000 });
  await expect(page.locator('[data-metric="api:gateway-calls"]')).toHaveCount(0);
});

test("learn page covers management and Locust", async ({ page }) => {
  await page.goto("/en/learn");
  await expect(page.getByRole("heading", { name: "Engineering Journey" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Selected Engineering Challenges" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technical Decisions" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Measurable Outcomes" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Current Focus" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Keep going" })).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Database bottlenecks under concurrency" }),
  ).toBeVisible();
  await expect(page.getByText("Locust / Go load profiles").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Learning Resources" })).toHaveCount(0);
});

test("copy email button updates label", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/en/about");
  const button = page.locator("#copyEmailBtn");
  await button.click();
  await expect(button).toHaveText("Copied");
});

test("theme toggles between dark and light", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.locator("#themeToggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.locator("#themeToggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("mobile nav toggles", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en/learn");
  const toggle = page.locator("#mobileNavToggle");
  const links = page.locator("#navLinks");
  await expect(links).not.toHaveClass(/show/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(links).toHaveClass(/show/);
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await toggle.click();
  await expect(links).not.toHaveClass(/show/);
});

test("H5 layout fits common phone widths without horizontal overflow", async ({
  page,
}) => {
  const phones = [
    { width: 320, height: 568 }, // iPhone SE
    { width: 360, height: 800 }, // common Android
    { width: 390, height: 844 }, // iPhone 12/13/14
    { width: 414, height: 896 }, // iPhone 11 / XR
    { width: 430, height: 932 }, // iPhone 15 Pro Max
  ];
  const paths = ["/", "/en/demo/ai-testcase-generator", "/en/work"];

  for (const phone of phones) {
    await page.setViewportSize(phone);
    for (const path of paths) {
      await page.goto(path);
      await expect(page.locator(".tabbar")).toBeHidden();
      await expect(page.locator("#mobileNavToggle")).toBeVisible();
      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        return {
          overflow: Math.max(doc.scrollWidth, document.body.scrollWidth) - doc.clientWidth,
        };
      });
      expect(metrics.overflow, `${path} @ ${phone.width}`).toBeLessThanOrEqual(1);
      if (path === "/") {
        await expect(page.getByRole("link", { name: /GitHub/ }).first()).toBeVisible();
      }
    }
  }
});

test("build ships redirects and headers", async () => {
  const dist = join(process.cwd(), "dist");
  const redirects = join(dist, "_redirects");
  const headers = join(dist, "_headers");
  expect(existsSync(redirects)).toBe(true);
  expect(existsSync(headers)).toBe(true);
  const redirectBody = readFileSync(redirects, "utf8");
  expect(redirectBody).toContain("/*.html /:splat 200");
  expect(redirectBody).toContain(
    "/en/blog/domestic-db-docker-qa /en/blog/enterprise-db-docker-qa 200",
  );
  expect(redirectBody.indexOf("/en/blog/domestic-db-docker-qa.html")).toBeLessThan(
    redirectBody.indexOf("/*.html /:splat 200"),
  );
  expect(redirectBody).toContain("/en /en/ 301");
  expect(readFileSync(headers, "utf8")).toContain("Content-Security-Policy");
});

test("english locale home aliases serve content with root canonical", async ({
  page,
}) => {
  for (const path of ["/en/", "/en/index.html"]) {
    const response = await page.goto(path, { waitUntil: "domcontentloaded" });
    expect(response?.status(), path).toBe(200);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.xuxuclassmate.com/",
    );
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "AI Test Case Generator",
    );
  }
});

test("legacy work html path serves content with pretty canonical", async ({
  page,
}) => {
  const response = await page.goto("/en/work.html", {
    waitUntil: "domcontentloaded",
  });
  expect(response?.status()).toBe(200);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.xuxuclassmate.com/en/work",
  );
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tools");
});

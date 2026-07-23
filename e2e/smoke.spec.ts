import { expect, test } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

test("home renders and language switch works", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Hi, I'm XuXu.",
  );
  await expect(page.locator(".hero-role-line")).toHaveText(
    "QA Engineer · SDET · AI Testing",
  );
  await expect(page.locator(".hero-tagline")).toHaveText(
    "Installable Quality Engineering",
  );
  await expect(page.locator(".hero-desc")).toContainText("QA Engineer");
  await expect(page.locator(".hero-desc")).toContainText("test automation");
  await expect(page.locator(".hero-desc")).toContainText("AI testing");
  await expect(page.getByRole("heading", { name: "By the Numbers" })).toBeVisible();
  await expect(page.getByText("Live Public Metrics · Updated Automatically")).toBeVisible();
  await expect(page.getByRole("link", { name: /View Docker Hub/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /View ClawHub/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Quality Engineering" })).toBeVisible();
  await page.getByRole("link", { name: "Switch to Chinese" }).click();
  await expect(page).toHaveURL(/\/zh\/index\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "你好，我是旭旭。",
  );
  await expect(page.locator(".hero-tagline")).toHaveText("可安装的质量工程");
});

test("wechat modal opens and closes", async ({ page }) => {
  await page.goto("/");
  await page.locator("#footerWechatBtn").click();
  await expect(page.locator("#wechatModal")).toHaveClass(/show/);
  await page.locator("#closeModal").click();
  await expect(page.locator("#wechatModal")).not.toHaveClass(/show/);
});

test("projects page shows categorized sections", async ({ page }) => {
  await page.goto("/en/work.html");
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
  await page.goto("/en/work/testcase-generator.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
  );
  await expect(page.locator(".subtitle")).toContainText("FLAGSHIP");
  await expect(
    page.getByRole("heading", { name: "01. Project Overview" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "02. Problem" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "03. Solution" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "06. My Role" }),
  ).toBeVisible();
  await expect(page.getByText("What did I specifically do?")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Try it now" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open interactive demo" }),
  ).toHaveAttribute("href", "/en/demo/ai-testcase-generator.html");
  await expect(page.locator(".pipeline-inputs")).toContainText("PDF");
  const back = page.getByRole("link", { name: /All projects/i });
  await expect(back.first()).toBeVisible();
});

test("generator interactive demo runs sample flow", async ({ page }) => {
  await page.goto("/en/demo/ai-testcase-generator.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
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
  await expect(page.getByText("Pipeline complete")).toBeVisible({
    timeout: 15000,
  });
});

test("non-flagship case study uses same template", async ({ page }) => {
  await page.goto("/en/work/globalpulse.html");
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
  await page.goto("/en/blog.html");
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
    /\/en\/blog\/ai-testcase-generator-multimodal\.html$/,
  );
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "AI Test Case Generator",
  );
  await expect(page.locator(".detail-topbar .back-nav")).toBeVisible();
  await expect(
    page.getByRole("link", { name: /^All Engineering Notes$/i }).first(),
  ).toBeVisible();

  await page.goto("/en/blog/domestic-db-docker-qa.html");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Dameng");
  await expect(page.locator(".note-toc")).toBeVisible();
  await expect(page.locator(".note-stats").first()).toBeVisible();
  await expect(page.locator('[data-metric="docker:total-pulls"]')).toBeVisible();

  await page.goto("/en/blog/clawhub-skill-shipping.html");
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
  await page.goto("/en/now.html");
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
  await page.goto("/en/open-source.html");
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
  ).toHaveAttribute("href", "/en/playground.html");
  await expect(page.locator(".nav-more-toggle")).toHaveClass(/active/);
  await expect(
    page.locator(".nav-more-menu .nav-item.active"),
  ).toHaveText("Open Source");
});

test("desktop nav keeps primary links and a compact More menu", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  await expect(nav.getByRole("link", { name: "About", exact: true })).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "Experience", exact: true }),
  ).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "Projects", exact: true }),
  ).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "AI Testing", exact: true }),
  ).toBeVisible();
  await expect(nav.getByRole("link", { name: "Notes", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /More/ })).toBeVisible();
  await expect(nav.getByRole("link", { name: "EN" })).toBeVisible();
  await expect(page.locator("#themeToggle")).toBeVisible();
  await page.getByRole("button", { name: /More/ }).click();
  await expect(
    page.getByRole("menuitem", { name: "Open Source" }),
  ).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Playground" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Life" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Contact" })).toBeVisible();
  const moreItems = page.locator(".nav-more-menu .nav-item");
  await expect(moreItems).toHaveText([
    "Open Source",
    "Playground",
    "Life",
    "Contact",
  ]);
});

test("playground page lists tryable experiences", async ({ page }) => {
  await page.goto("/en/playground.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Playground");
  await expect(
    page.getByRole("heading", { name: "AI Test Case Generator" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Docker Hub API Gateway" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "GlobalPulse" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Test DB Docker Suite" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open interactive demo" }),
  ).toHaveAttribute("href", "/en/demo/ai-testcase-generator.html");
  await expect(page.locator("#try-docker-hub-api")).toBeVisible();
  await expect(page.locator(".nav-more-toggle")).toHaveClass(/active/);
  await expect(
    page.locator(".nav-more-menu .nav-item.active"),
  ).toHaveText("Playground");
});

test("mobile nav is hamburger-only with a compact drawer", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".nav-links")).not.toHaveClass(/show/);
  await expect(page.locator("#mobileNavToggle")).toBeVisible();
  await expect(page.locator("#themeToggle")).toBeHidden();
  await page.locator("#mobileNavToggle").click();
  await expect(page.locator(".nav-links")).toHaveClass(/show/);
  for (const label of [
    "About",
    "Experience",
    "Projects",
    "AI Testing",
    "Notes",
  ]) {
    await expect(
      page.locator(".nav-links").getByRole("link", { name: label }),
    ).toBeVisible();
  }
  await expect(page.getByRole("button", { name: /More/ })).toBeVisible();
  await expect(
    page.getByRole("menuitem", { name: "Open Source" }),
  ).toBeHidden();
  await page.getByRole("button", { name: /More/ }).click();
  await expect(
    page.getByRole("menuitem", { name: "Open Source" }),
  ).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Playground" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Life" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Contact" })).toBeVisible();
  await expect(page.locator(".nav-links .language-switch")).toBeVisible();
  await expect(page.locator("#themeToggle")).toBeVisible();
  await expect(page.locator(".theme-toggle-label")).toHaveText("Theme");
  await expect(page.getByRole("link", { name: /^Home$/i })).toHaveCount(0);
});

test("contact offers list is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".contact-offers li").first()).toBeVisible();
});

test("new case studies render with project OG covers", async ({ page }) => {
  await page.goto("/en/work/globalpulse.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("GlobalPulse");
  const og = page.locator('meta[property="og:image"]');
  await expect(og).toHaveAttribute(
    "content",
    "https://www.xuxuclassmate.com/images/cover-globalpulse.jpg",
  );

  await page.goto("/zh/work/docker-hub-api-gateway.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Docker Hub API Gateway",
  );
});

test("docker suite proof shows top pull metrics", async ({ page }) => {
  await page.goto("/zh/work/docker-suite.html");
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
        "docker:total-pulls": 60000,
        "docker:repo-count": 12,
        "api:gateway-calls": 800,
        updatedAt: new Date().toISOString(),
      }),
    });
  });
  await page.goto("/");
  const dockerTotal = page.locator('[data-metric="docker:total-pulls"]');
  const clawhubTotal = page.locator('[data-metric="clawhub:total-downloads"]');
  const apiCalls = page.locator('[data-metric="api:gateway-calls"]');
  await dockerTotal.scrollIntoViewIfNeeded();
  await expect(dockerTotal).toHaveText("60k+", { timeout: 5000 });
  await expect(clawhubTotal).toHaveText("2.7k+", { timeout: 5000 });
  await expect(apiCalls).toHaveText("800", { timeout: 5000 });
});

test("life page shows four hobbies and blog in both locales", async ({ page }) => {
  await page.goto("/en/life.html");
  const enHobbies = page.locator(".hobby-card h3");
  await expect(enHobbies).toHaveText(["Reading", "Gaming", "Music", "Sports"]);
  await expect(page.locator(".blog .section-title")).toHaveText("Life Notes");

  await page.goto("/zh/life.html");
  const zhHobbies = page.locator(".hobby-card h3");
  await expect(zhHobbies).toHaveText(["阅读", "游戏", "音乐", "运动"]);
  await expect(page.locator(".blog .section-title")).toHaveText("生活博客");
});

test("learn page covers management and Locust", async ({ page }) => {
  await page.goto("/en/learn.html");
  await expect(page.getByRole("heading", { name: "Test Management" })).toBeVisible();
  await expect(page.getByText("Locust performance & load testing")).toBeVisible();
  await expect(page.getByRole("heading", { name: "GlobalPulse (InnoNestX)" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open live site" }),
  ).toHaveAttribute("href", "https://pulse.xuxuclassmate.com/");
});

test("copy email button updates label", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  const button = page.locator("#copyEmailBtn");
  await button.click();
  await expect(button).toHaveText("Copied");
});

test("theme toggles between dark and light", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.locator("#themeToggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.locator("#themeToggle").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("mobile nav toggles", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en/learn.html");
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

test("build ships redirects and headers", async () => {
  const dist = join(process.cwd(), "dist");
  const redirects = join(dist, "_redirects");
  const headers = join(dist, "_headers");
  expect(existsSync(redirects)).toBe(true);
  expect(existsSync(headers)).toBe(true);
  const redirectBody = readFileSync(redirects, "utf8");
  expect(redirectBody).toContain("/en/work.html /en/work 301");
  expect(readFileSync(headers, "utf8")).toContain("Content-Security-Policy");
});

test("legacy work html path still serves content", async ({ page }) => {
  await page.goto("/en/work.html");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Tools");
});

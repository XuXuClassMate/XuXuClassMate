import { expect, test } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

test("home renders and language switch works", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Turn quality work into products teams can run.",
  );
  await expect(page.locator(".hero-positioning")).toContainText("InnoNestX");
  await page.getByRole("link", { name: "中文" }).click();
  await expect(page).toHaveURL(/\/zh\/index\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "把质量工作做成团队真能跑起来的产品",
  );
});

test("wechat modal opens and closes", async ({ page }) => {
  await page.goto("/");
  await page.locator("#footerWechatBtn").click();
  await expect(page.locator("#wechatModal")).toHaveClass(/show/);
  await page.locator("#closeModal").click();
  await expect(page.locator("#wechatModal")).not.toHaveClass(/show/);
});

test("work project filters toggle", async ({ page }) => {
  await page.goto("/en/work.html");
  const aiCards = page.locator('.project-card[data-category="AI"]');
  const infraCards = page.locator('.project-card[data-category="Infra"]');
  const productCards = page.locator('.project-card[data-category="Product"]');
  await expect(aiCards.first()).toBeVisible();
  await expect(infraCards.first()).toBeVisible();
  await expect(productCards.first()).toBeVisible();
  await page.getByRole("button", { name: "AI", exact: true }).click();
  await expect(aiCards.first()).toBeVisible();
  await expect(infraCards.first()).toBeHidden();
  await expect(productCards.first()).toBeHidden();
  await page.getByRole("button", { name: "Product", exact: true }).click();
  await expect(productCards.first()).toBeVisible();
  await expect(aiCards.first()).toBeHidden();
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(infraCards.first()).toBeVisible();
  await expect(productCards.first()).toBeVisible();
});

test("case study page renders", async ({ page }) => {
  await page.goto("/en/work/testcase-generator.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
  );
  await expect(page.getByRole("heading", { name: "Problem" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Tradeoffs" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Inspectable proof" }),
  ).toBeVisible();
});

test("notes index and article render", async ({ page }) => {
  await page.goto("/en/notes.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Practical Notes",
  );
  await page
    .getByRole("link", {
      name: "Stand up Dameng / Highgo for QA in minutes with Docker",
    })
    .click();
  await expect(page).toHaveURL(/\/en\/notes\/domestic-db-docker-qa\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Dameng");
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

import { expect, test } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

test("home renders and language switch works", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Build with AI. Ship with Quality.",
  );
  await page.getByRole("link", { name: "中文" }).click();
  await expect(page).toHaveURL(/\/zh\/index\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "用 AI 建造工具，用质量守住交付",
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
  await expect(aiCards.first()).toBeVisible();
  await expect(infraCards.first()).toBeVisible();
  await page.getByRole("button", { name: "AI", exact: true }).click();
  await expect(aiCards.first()).toBeVisible();
  await expect(infraCards.first()).toBeHidden();
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(infraCards.first()).toBeVisible();
});

test("case study page renders", async ({ page }) => {
  await page.goto("/en/work/testcase-generator.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Test Case Generator",
  );
  await expect(page.getByRole("heading", { name: "Problem" })).toBeVisible();
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

import { expect, test } from "@playwright/test";

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
  await page.getByRole("tab", { name: "AI" }).click();
  await expect(aiCards.first()).toBeVisible();
  await expect(infraCards.first()).toBeHidden();
  await page.getByRole("tab", { name: "All" }).click();
  await expect(infraCards.first()).toBeVisible();
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
  await toggle.click();
  await expect(links).toHaveClass(/show/);
  await toggle.click();
  await expect(links).not.toHaveClass(/show/);
});

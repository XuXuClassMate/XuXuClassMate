import { test, expect } from "@playwright/test";

const ROUTES = [
  { path: "/", heading: "Test cases your team can actually review." },
  { path: "/products", heading: "Tools that install and run." },
  { path: "/products/testcase-generator", heading: "AI Test Case Generator" },
  { path: "/products/docker-suite", heading: "Test DB Docker Suite" },
  { path: "/about", heading: "Quality engineering, shipped." },
  { path: "/ai-workflow", heading: "A one-person test team, run with AI." },
  { path: "/notes", heading: "Field notes from shipping quality." },
  { path: "/notes/playwright-at-scale", heading: "Keeping Playwright fast when the suite grows" },
  { path: "/open-source", heading: "Built in the open, shipped to run." },
];

for (const route of ROUTES) {
  test(`renders ${route.path}`, async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];
    page.on("console", (m) => {
      if (m.type() === "error") consoleErrors.push(m.text());
    });

    const res = await page.goto(route.path, { waitUntil: "networkidle" });
    expect(res?.ok(), `HTTP ok for ${route.path}`).toBeTruthy();

    // Key heading present
    await expect(
      page.getByRole("heading", { name: route.heading, exact: false }).first(),
    ).toBeVisible();

    // Nav + footer present
    await expect(page.getByRole("link", { name: "XuXuClassMate" }).first()).toBeVisible();

    // Let entrance animations settle, then full-page screenshot
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: testInfo.outputPath(`shot.png`),
      fullPage: true,
    });
    await testInfo.attach("screenshot", {
      path: testInfo.outputPath("shot.png"),
      contentType: "image/png",
    });

    // No hard console errors (ignore HMR/websocket dev noise, absent in prod)
    const hard = consoleErrors.filter(
      (e) => !/hmr|websocket|hydrat/i.test(e),
    );
    expect(hard, `console errors on ${route.path}:\n${hard.join("\n")}`).toEqual([]);
  });
}

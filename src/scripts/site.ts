function setMobileNavOpen(
  toggle: HTMLElement,
  links: HTMLElement,
  open: boolean,
): void {
  toggle.classList.toggle("active", open);
  links.classList.toggle("show", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.getElementById("tabMore")?.setAttribute("aria-expanded", open ? "true" : "false");
  document.getElementById("navScrim")?.classList.toggle("is-visible", open);
  document.body.classList.toggle("nav-sheet-open", open);
  if (open) {
    const firstLink = links.querySelector<HTMLElement>("a");
    firstLink?.focus();
  }
}

function initMobileNav(): void {
  const toggle = document.getElementById("mobileNavToggle");
  const links = document.getElementById("navLinks");
  if (!(toggle instanceof HTMLElement) || !(links instanceof HTMLElement)) {
    return;
  }

  const openSheet = (): void => {
    setMobileNavOpen(toggle, links, !links.classList.contains("show"));
  };

  toggle.addEventListener("click", openSheet);
  document.getElementById("tabMore")?.addEventListener("click", openSheet);

  for (const link of links.querySelectorAll("a")) {
    link.addEventListener("click", () => {
      setMobileNavOpen(toggle, links, false);
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn?.contains(target)) return;
    if (document.querySelector(".tabbar")?.contains(target)) return;
    if (!toggle.contains(target) && !links.contains(target)) {
      setMobileNavOpen(toggle, links, false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("show")) {
      setMobileNavOpen(toggle, links, false);
      toggle.focus();
    }
  });
}

function setNavMoreOpen(root: HTMLElement, open: boolean): void {
  const toggle = root.querySelector<HTMLButtonElement>("[data-nav-more-toggle]");
  root.classList.toggle("is-open", open);
  toggle?.setAttribute("aria-expanded", open ? "true" : "false");
}

function initNavMore(): void {
  const roots = [
    ...document.querySelectorAll<HTMLElement>("[data-nav-more]"),
  ];
  if (roots.length === 0) return;

  for (const root of roots) {
    const toggle = root.querySelector<HTMLButtonElement>(
      "[data-nav-more-toggle]",
    );
    if (!toggle) continue;

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const willOpen = !root.classList.contains("is-open");
      for (const other of roots) {
        setNavMoreOpen(other, other === root ? willOpen : false);
      }
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    for (const root of roots) {
      if (!root.contains(target)) {
        setNavMoreOpen(root, false);
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    for (const root of roots) {
      setNavMoreOpen(root, false);
    }
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById("siteHeader");
  if (!(header instanceof HTMLElement)) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initScrollReveal(): void {
  const nodes = document.querySelectorAll(".reveal-on-scroll");
  if (nodes.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    for (const node of nodes) {
      node.classList.add("is-visible");
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  for (const node of nodes) {
    observer.observe(node);
  }
}

function initProjectFilters(): void {
  const filters = document.querySelector(".project-filters");
  if (!(filters instanceof HTMLElement)) return;

  const buttons = [...filters.querySelectorAll<HTMLButtonElement>(".filter-btn")];
  const cards = [
    ...document.querySelectorAll<HTMLElement>(
      ".featured-projects .project-card[data-category], .notes-index .note-card[data-category]",
    ),
  ];
  if (buttons.length === 0 || cards.length === 0) return;

  const applyFilter = (value: string) => {
    for (const button of buttons) {
      const active = button.dataset.filter === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    }

    for (const card of cards) {
      const match = value === "all" || card.dataset.category === value;
      card.classList.toggle("is-filtered-out", match ? false : true);
      card.toggleAttribute("hidden", !match);
      card.setAttribute("aria-hidden", match ? "false" : "true");
    }
  };

  filters.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest<HTMLButtonElement>(".filter-btn");
    if (!button || !filters.contains(button)) return;
    applyFilter(button.dataset.filter ?? "all");
  });
}

async function copyText(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // fall through to legacy path
  }

  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  const ok = document.execCommand("copy");
  input.remove();
  return ok;
}

function initCopyEmail(): void {
  const button = document.getElementById("copyEmailBtn");
  if (!(button instanceof HTMLButtonElement)) return;

  const email = button.dataset.email ?? "";
  const copyLabel = button.dataset.copyLabel ?? "Copy email";
  const copiedLabel = button.dataset.copiedLabel ?? "Copied";

  button.addEventListener("click", async () => {
    if (!email) return;
    const ok = await copyText(email);
    if (!ok) return;

    button.classList.add("is-copied");
    button.textContent = copiedLabel;
    window.setTimeout(() => {
      button.classList.remove("is-copied");
      button.textContent = copyLabel;
    }, 1600);
  });
}

function parseCountTarget(raw: string): { end: number; suffix: string } | null {
  const match = raw.trim().match(/^(\d+(?:\.\d+)?)(k\+?|\+|)$/i);
  if (!match) return null;
  const end = Number(match[1]);
  if (Number.isNaN(end)) return null;
  return { end, suffix: match[2] ?? "" };
}

function animateCount(node: HTMLElement, display: string): void {
  if (node.dataset.countPlayed === "1") {
    node.textContent = display;
    return;
  }
  node.dataset.countPlayed = "1";

  const target = parseCountTarget(display);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!target || reduceMotion) {
    node.textContent = display;
    return;
  }

  const duration = 900;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current =
      target.suffix.toLowerCase().includes("k")
        ? Math.round(target.end * eased * 10) / 10
        : Math.round(target.end * eased);
    node.textContent = `${current}${target.suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      node.textContent = display;
    }
  };

  requestAnimationFrame(tick);
}

/** Play count-up once when the node enters the viewport. */
function observeCountUp(nodes: HTMLElement[]): void {
  if (nodes.length === 0) return;

  const run = (node: HTMLElement) => {
    animateCount(node, node.dataset.countTo ?? node.textContent ?? "");
  };

  if (!("IntersectionObserver" in window)) {
    for (const node of nodes) run(node);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
        run(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.4 },
  );

  for (const node of nodes) {
    observer.observe(node);
  }
}

function initHighlightCountUp(): void {
  // Metric-backed highlights wait for live fetch so the count plays once to the final value.
  const nodes = [
    ...document.querySelectorAll<HTMLElement>("[data-count-to]"),
  ].filter((node) => !node.dataset.metric);
  observeCountUp(nodes);
}

type MetricId =
  | "clawhub:ai-testcase-generator"
  | "clawhub:trading-assistant-core"
  | "clawhub:custom-mail"
  | "clawhub:total-downloads"
  | "docker:dameng"
  | "docker:highgo"
  | "docker:kingbase"
  | "docker:tidb"
  | "docker:testcase-generator"
  | "docker:total-pulls"
  | "docker:repo-count"
  | "npm:testcase-generator"
  | "api:gateway-calls";

function formatMetric(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "0";
  if (value >= 1000) {
    const thousands = value / 1000;
    const rounded =
      value >= 100_000 ? Math.round(thousands) : Math.round(thousands * 10) / 10;
    return `${String(rounded).replace(/\.0$/, "")}k+`;
  }
  return String(Math.round(value));
}

async function fetchMetricsBundle(): Promise<Partial<Record<MetricId, number>>> {
  try {
    const response = await fetch("/api/metrics", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return {};
    const data = (await response.json()) as Partial<Record<MetricId, number>>;
    const live: Partial<Record<MetricId, number>> = {};
    for (const key of [
      "clawhub:ai-testcase-generator",
      "clawhub:trading-assistant-core",
      "clawhub:custom-mail",
      "clawhub:total-downloads",
      "docker:dameng",
      "docker:highgo",
      "docker:kingbase",
      "docker:tidb",
      "docker:testcase-generator",
      "docker:total-pulls",
      "docker:repo-count",
      "npm:testcase-generator",
      "api:gateway-calls",
    ] as const) {
      const value = data[key];
      if (typeof value === "number" && Number.isFinite(value)) {
        live[key] = value;
      }
    }
    return live;
  } catch {
    return {};
  }
}

function initLiveMetrics(): void {
  const nodes = [
    ...document.querySelectorAll<HTMLElement>("[data-metric]"),
  ].filter((node) => Boolean(node.dataset.metric));
  if (nodes.length === 0) return;

  const highlightNodes = nodes.filter((node) =>
    node.classList.contains("highlight-value"),
  );

  void fetchMetricsBundle()
    .then((live) => {
      for (const node of nodes) {
        const id = node.dataset.metric as MetricId;
        const raw = live[id];
        if (raw == null) continue;
        const display = formatMetric(raw);
        node.dataset.countTo = display;
        if (!node.classList.contains("highlight-value")) {
          node.textContent = display;
        }
      }
    })
    .finally(() => {
      // One count-up to whatever value we have (live or build-time fallback).
      observeCountUp(highlightNodes);
    });
}

function initBackToTop(): void {
  const button = document.getElementById("backToTop");
  if (!(button instanceof HTMLButtonElement)) return;

  const update = () => {
    button.classList.toggle("is-visible", window.scrollY > 480);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initTypewriter(): void {
  const node = document.querySelector<HTMLElement>("[data-typewriter]");
  if (!node) return;

  const full = (node.textContent ?? "").trim();
  if (!full) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    node.classList.add("is-typed");
    return;
  }

  node.textContent = "";
  node.classList.add("is-typing");
  let index = 0;

  const tick = () => {
    index += 1;
    node.textContent = full.slice(0, index);
    if (index < full.length) {
      window.setTimeout(tick, 28 + Math.floor(Math.random() * 22));
      return;
    }
    node.classList.remove("is-typing");
    node.classList.add("is-typed");
  };

  window.setTimeout(tick, 280);
}

type Theme = "dark" | "light";

const THEME_KEY = "xuxu-theme";
const LIQUID_TINT_KEY = "xuxu-liquid-tint";

function readTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // ignore
  }

  const button = document.getElementById("themeToggle");
  if (!(button instanceof HTMLButtonElement)) return;

  const moon = button.querySelector('[data-theme-icon="moon"]');
  const sun = button.querySelector('[data-theme-icon="sun"]');
  const nextLabel =
    theme === "dark"
      ? (button.dataset.labelLight ?? "Switch to light theme")
      : (button.dataset.labelDark ?? "Switch to dark theme");

  moon?.classList.toggle("is-hidden", theme !== "dark");
  sun?.classList.toggle("is-hidden", theme !== "light");
  button.setAttribute("aria-label", nextLabel);
  button.setAttribute("title", nextLabel);

  const meta = document.querySelector('meta[name="theme-color"]:not([media])');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#000000" : "#f5f5f7");
  }
}

function initThemeToggle(): void {
  applyTheme(readTheme());

  const button = document.getElementById("themeToggle");
  if (!(button instanceof HTMLButtonElement)) return;

  button.addEventListener("click", () => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

function clampTint(value: number): number {
  if (!Number.isFinite(value)) return 0.45;
  return Math.min(1, Math.max(0, value));
}

function applyLiquidTint(value: number): void {
  const tint = clampTint(value);
  document.documentElement.style.setProperty("--liquid-tint", String(tint));
  try {
    localStorage.setItem(LIQUID_TINT_KEY, String(tint));
  } catch {
    // ignore
  }

  const slider = document.querySelector<HTMLInputElement>("[data-glass-tint-slider]");
  if (slider) {
    slider.value = String(Math.round(tint * 100));
    slider.setAttribute("aria-valuenow", slider.value);
  }
}

function readLiquidTint(): number {
  try {
    const stored = localStorage.getItem(LIQUID_TINT_KEY);
    if (stored != null) return clampTint(Number(stored));
  } catch {
    // ignore
  }
  const css = getComputedStyle(document.documentElement)
    .getPropertyValue("--liquid-tint")
    .trim();
  return clampTint(css ? Number(css) : 0.45);
}

function initGlassTint(): void {
  applyLiquidTint(readLiquidTint());

  const root = document.querySelector<HTMLElement>("[data-glass-tint]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-glass-tint-toggle]");
  const slider = document.querySelector<HTMLInputElement>("[data-glass-tint-slider]");
  if (!root || !toggle || !slider) return;

  const setOpen = (open: boolean) => {
    root.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!root.classList.contains("is-open"));
  });

  slider.addEventListener("input", () => {
    applyLiquidTint(Number(slider.value) / 100);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!root.contains(target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

/** iOS-style interactive glass: press scale + specular follow. */
function initLiquidInteractions(): void {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = [
    ...document.querySelectorAll<HTMLElement>(
      ".btn-ghost, .btn-primary, .theme-toggle, .filter-btn, .copy-email-btn, .back-to-top, .glass-tint-toggle, .language-switch",
    ),
  ];

  for (const node of targets) {
    const press = () => node.classList.add("is-pressed");
    const release = () => {
      window.setTimeout(() => node.classList.remove("is-pressed"), 180);
    };
    node.addEventListener("pointerdown", press);
    node.addEventListener("pointerup", release);
    node.addEventListener("pointerleave", release);
    node.addEventListener("pointercancel", release);
  }

  if (reduceMotion) return;

  const specularHosts = [
    ...document.querySelectorAll<HTMLElement>(
      ".header, .btn-ghost, .theme-toggle, .nav-more-menu, .back-to-top, .filter-btn, .glass-tint-panel",
    ),
  ];

  const onMove = (event: PointerEvent) => {
    for (const host of specularHosts) {
      const rect = host.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      host.style.setProperty("--liquid-spot-x", `${String(Math.min(100, Math.max(0, x)))}%`);
      host.style.setProperty("--liquid-spot-y", `${String(Math.min(100, Math.max(0, y)))}%`);
    }
  };

  window.addEventListener("pointermove", onMove, { passive: true });
}

/** Rounded-rect rim displacement. Neutral gray (128) is no bend. */
function buildLensMap(): string {
  const w = 256;
  const h = 160;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  const image = ctx.createImageData(w, h);
  const data = image.data;
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const u = (x + 0.5) / w;
      const v = (y + 0.5) / h;
      const ex = Math.min(u, 1 - u);
      const ey = Math.min(v, 1 - v);
      const edge = Math.min(ex, ey);
      const band = Math.max(0, 1 - edge / 0.16);
      const mag = band ** 1.35 * 78;
      const sx = u < 0.5 ? -1 : 1;
      const sy = v < 0.5 ? -1 : 1;
      const rx = 128 + sx * mag * (ex <= ey ? 1 : 0.25);
      const ry = 128 + sy * mag * (ey < ex ? 1 : 0.25);
      const i = (y * w + x) * 4;
      data[i] = Math.max(0, Math.min(255, rx));
      data[i + 1] = Math.max(0, Math.min(255, ry));
      data[i + 2] = 128;
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL("image/png");
}

function initLiquidOptics(): void {
  const reduce = window.matchMedia("(prefers-reduced-transparency: reduce)").matches;
  const ua = navigator.userAgent;
  const iOS =
    /iP(hone|ad|od)/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const chromium = !iOS && /Chrome|Chromium|Edg\//.test(ua);
  const map = document.getElementById("lg-lens-map");
  if (reduce || !chromium || !(map instanceof SVGElement)) return;
  const href = buildLensMap();
  if (!href) return;
  map.setAttribute("href", href);
  map.setAttribute("xlink:href", href);
  document.documentElement.classList.add("lg-svg");
}

document.addEventListener("DOMContentLoaded", () => {
  initLiquidOptics();
  initMobileNav();
  initNavMore();
  initHeaderScroll();
  initScrollReveal();
  initProjectFilters();
  initCopyEmail();
  initHighlightCountUp();
  initLiveMetrics();
  initBackToTop();
  initTypewriter();
  initThemeToggle();
  initGlassTint();
  initLiquidInteractions();
});

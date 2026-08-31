function setMobileNavOpen(
  toggle: HTMLElement,
  links: HTMLElement,
  open: boolean,
): void {
  toggle.classList.toggle("active", open);
  links.classList.toggle("show", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
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

  toggle.addEventListener("click", () => {
    const open = !links.classList.contains("show");
    setMobileNavOpen(toggle, links, open);
  });

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

function readTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return "dark";
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

document.addEventListener("DOMContentLoaded", () => {
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
});

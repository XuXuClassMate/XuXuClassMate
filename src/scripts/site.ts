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

function initWechatModal(): void {
  const modal = document.getElementById("wechatModal");
  const openBtn = document.getElementById("footerWechatBtn");
  const closeBtn = document.getElementById("closeModal");
  if (
    !(modal instanceof HTMLElement) ||
    !(openBtn instanceof HTMLElement) ||
    !(closeBtn instanceof HTMLElement)
  ) {
    return;
  }

  const panel = modal.querySelector<HTMLElement>(".modal-content");
  let lastFocus: HTMLElement | null = null;

  const getFocusable = () =>
    [
      ...modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ].filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

  const open = () => {
    lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.classList.add("show");
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    (panel ?? closeBtn).focus();
  };

  const close = () => {
    modal.classList.remove("show");
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    lastFocus?.focus();
  };

  openBtn.addEventListener("click", (event) => {
    event.preventDefault();
    open();
  });

  closeBtn.addEventListener("click", () => {
    close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("show")) return;
    if (event.key === "Escape") {
      close();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = getFocusable();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
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
    ...document.querySelectorAll<HTMLElement>(".featured-projects .project-card[data-category]"),
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
      card.classList.toggle("is-filtered-out", !match);
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

function initHighlightCountUp(): void {
  const nodes = document.querySelectorAll<HTMLElement>("[data-count-to]");
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

type MetricId =
  | "clawhub:ai-testcase-generator"
  | "clawhub:trading-assistant-core"
  | "docker:dameng"
  | "docker:highgo";

function formatMetric(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "0";
  if (value >= 10_000) {
    const thousands = value / 1000;
    const rounded =
      value >= 100_000 ? Math.round(thousands) : Math.round(thousands * 10) / 10;
    return `${String(rounded).replace(/\.0$/, "")}k+`;
  }
  return String(Math.round(value));
}

async function fetchMetricValue(id: MetricId): Promise<number | null> {
  try {
    if (id.startsWith("clawhub:")) {
      const slug = id.slice("clawhub:".length);
      const response = await fetch(`https://clawhub.ai/api/v1/skills/${slug}`, {
        headers: { Accept: "application/json" },
      });
      if (!response.ok) return null;
      const data = (await response.json()) as {
        skill?: { stats?: { downloads?: number } };
      };
      const downloads = data.skill?.stats?.downloads;
      return typeof downloads === "number" ? downloads : null;
    }

    const repo = id.slice("docker:".length);
    const response = await fetch(
      `https://hub.docker.com/v2/repositories/xuxuclassmate/${repo}/`,
      { headers: { Accept: "application/json" } },
    );
    if (!response.ok) return null;
    const data = (await response.json()) as { pull_count?: number };
    return typeof data.pull_count === "number" ? data.pull_count : null;
  } catch {
    return null;
  }
}

function initLiveMetrics(): void {
  const nodes = [
    ...document.querySelectorAll<HTMLElement>("[data-metric]"),
  ].filter((node) => Boolean(node.dataset.metric));
  if (nodes.length === 0) return;

  const ids = [
    ...new Set(nodes.map((node) => node.dataset.metric as MetricId)),
  ];

  void Promise.all(
    ids.map(async (id) => {
      const value = await fetchMetricValue(id);
      return [id, value] as const;
    }),
  ).then((results) => {
    const live = new Map<MetricId, number>();
    for (const [id, value] of results) {
      if (value != null) live.set(id, value);
    }
    if (live.size === 0) return;

    for (const node of nodes) {
      const id = node.dataset.metric as MetricId;
      const raw = live.get(id);
      if (raw == null) continue;
      const display = formatMetric(raw);
      node.dataset.countTo = display;
      if (node.classList.contains("highlight-value")) {
        animateCount(node, display);
      } else {
        node.textContent = display;
      }
    }
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

  const label = button.querySelector(".theme-toggle-label");
  const moon = button.querySelector('[data-theme-icon="moon"]');
  const sun = button.querySelector('[data-theme-icon="sun"]');
  const nextLabel =
    theme === "dark"
      ? (button.dataset.labelLight ?? "Light")
      : (button.dataset.labelDark ?? "Dark");

  if (label) label.textContent = nextLabel;
  moon?.classList.toggle("is-hidden", theme !== "dark");
  sun?.classList.toggle("is-hidden", theme !== "light");
  button.setAttribute(
    "aria-label",
    theme === "dark" ? (button.dataset.labelLight ?? "Light") : (button.dataset.labelDark ?? "Dark"),
  );
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
  initWechatModal();
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

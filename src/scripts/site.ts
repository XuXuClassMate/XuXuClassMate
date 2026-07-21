function initMobileNav(): void {
  const toggle = document.getElementById("mobileNavToggle");
  const links = document.getElementById("navLinks");
  if (!(toggle instanceof HTMLElement) || !(links instanceof HTMLElement)) {
    return;
  }

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("show");
  });

  for (const link of links.querySelectorAll("a")) {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      links.classList.remove("show");
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn?.contains(target)) return;
    if (!toggle.contains(target) && !links.contains(target)) {
      toggle.classList.remove("active");
      links.classList.remove("show");
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

  openBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
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

function initSkillBars(): void {
  const bars = document.querySelectorAll<HTMLElement>(".progress-bar[data-progress]");
  if (bars.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    for (const bar of bars) {
      bar.style.width = `${bar.dataset.progress ?? 0}%`;
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
        entry.target.style.width = `${entry.target.dataset.progress ?? 0}%`;
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.35 },
  );

  for (const bar of bars) {
    observer.observe(bar);
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
      button.setAttribute("aria-selected", active ? "true" : "false");
    }

    for (const card of cards) {
      const match = value === "all" || card.dataset.category === value;
      card.classList.toggle("is-filtered-out", !match);
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

function initHighlightCountUp(): void {
  const nodes = document.querySelectorAll<HTMLElement>("[data-count-to]");
  if (nodes.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animate = (node: HTMLElement) => {
    const target = parseCountTarget(node.dataset.countTo ?? node.textContent ?? "");
    if (!target || reduceMotion) {
      node.textContent = node.dataset.countTo ?? node.textContent;
      return;
    }

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target.end * eased);
      node.textContent = `${current}${target.suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    for (const node of nodes) animate(node);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.4 },
  );

  for (const node of nodes) {
    observer.observe(node);
  }
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
  const icon = button.querySelector("i");
  const nextLabel =
    theme === "dark"
      ? (button.dataset.labelLight ?? "Light")
      : (button.dataset.labelDark ?? "Dark");

  if (label) label.textContent = nextLabel;
  if (icon) {
    icon.classList.toggle("fa-moon", theme === "dark");
    icon.classList.toggle("fa-sun", theme === "light");
  }
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
  initSkillBars();
  initProjectFilters();
  initCopyEmail();
  initHighlightCountUp();
  initBackToTop();
  initTypewriter();
  initThemeToggle();
});

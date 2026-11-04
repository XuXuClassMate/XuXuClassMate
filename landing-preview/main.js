(() => {
  const burger = document.querySelector("[data-burger]");
  const overlay = document.querySelector("[data-overlay]");
  const menu = document.querySelector("[data-menu]");
  const menuLinks = menu ? menu.querySelectorAll("a") : [];

  function setMenuOpen(open) {
    if (!burger || !overlay || !menu) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    overlay.hidden = !open;
    menu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  burger?.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    setMenuOpen(open);
  });

  overlay?.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeMenu();
  });

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function animateValue(el, index) {
    const target = Number(el.dataset.target);
    const decimals = Number(el.dataset.decimals || 0);
    const suffix = el.dataset.suffix || "";
    const duration = 1500 + index * 80;
    const startOffset = 480 + index * 90;
    const start = performance.now() + startOffset;

    function frame(now) {
      if (now < start) {
        requestAnimationFrame(frame);
        return;
      }
      const t = Math.min(1, (now - start) / duration);
      const value = target * easeOutCubic(t);
      el.textContent = `${value.toFixed(decimals)}${suffix}`;
      if (t < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  const statsRoot = document.querySelector("[data-stats]");
  const values = statsRoot
    ? Array.from(statsRoot.querySelectorAll(".stat-value"))
    : [];
  let counted = false;

  function startCount() {
    if (counted) return;
    counted = true;
    values.forEach((el, i) => animateValue(el, i));
  }

  if (statsRoot && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startCount();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(statsRoot);
  } else {
    startCount();
  }
})();

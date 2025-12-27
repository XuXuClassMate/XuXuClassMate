/**
 * main.js
 * Final SEO-safe version
 * - No language switching
 * - UI behavior only
 * - Compatible with static HTML + hreflang + canonical
 */

/* =====================================
   Header auto-hide on scroll (mobile & desktop)
===================================== */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // At top
    if (currentScroll <= 0) {
      header.classList.remove("scroll-up");
      header.classList.remove("scroll-down");
      return;
    }

    // Scroll down → hide header
    if (currentScroll > lastScroll) {
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
    }
    // Scroll up → show header
    else {
      header.classList.remove("scroll-down");
      header.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });
});

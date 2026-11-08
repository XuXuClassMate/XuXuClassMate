/** Apple-style site footer for *.xuxuclassmate.com — keep in sync with src/components/Footer.astro */

export const SITE_FOOTER_CSS = `
.xuxu-site-footer {
  --xuxu-footer-bg: #f5f5f7;
  --xuxu-footer-ink: #1d1d1f;
  --xuxu-footer-muted: #6e6e73;
  --xuxu-footer-line: rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 18px max(22px, env(safe-area-inset-right)) 24px max(22px, env(safe-area-inset-left));
  background: var(--xuxu-footer-bg);
  color: var(--xuxu-footer-muted);
  font: 400 12px/1.33337 -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", sans-serif;
  -webkit-font-smoothing: antialiased;
}

@media (prefers-color-scheme: dark) {
  .xuxu-site-footer {
    --xuxu-footer-bg: #1c1c1e;
    --xuxu-footer-ink: #f5f5f7;
    --xuxu-footer-muted: #a1a1a6;
    --xuxu-footer-line: rgba(255, 255, 255, 0.12);
  }
}

:root[data-theme="dark"] .xuxu-site-footer {
  --xuxu-footer-bg: #1c1c1e;
  --xuxu-footer-ink: #f5f5f7;
  --xuxu-footer-muted: #a1a1a6;
  --xuxu-footer-line: rgba(255, 255, 255, 0.12);
}

.xuxu-site-footer-inner {
  max-width: 980px;
  margin: 0 auto;
}

.xuxu-site-footer-lead {
  margin: 0 0 20px;
  padding-bottom: 16px;
  border-bottom: 0.5px solid var(--xuxu-footer-line);
  color: var(--xuxu-footer-muted);
}

.xuxu-site-footer-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px 16px;
}

.xuxu-site-footer-heading {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--xuxu-footer-ink);
}

.xuxu-site-footer-col ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.xuxu-site-footer-col a {
  display: inline-block;
  padding: 4px 0;
  color: var(--xuxu-footer-muted);
  font-size: 12px;
  line-height: 1.33337;
  text-decoration: none;
}

.xuxu-site-footer-col a:hover {
  color: var(--xuxu-footer-ink);
  text-decoration: underline;
}

.xuxu-site-footer-col--connect a {
  word-break: break-all;
}

.xuxu-site-footer-legal {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 0.5px solid var(--xuxu-footer-line);
  text-align: left;
}

.xuxu-site-footer-region {
  margin: 0 0 6px;
}

.xuxu-site-footer-legal-line {
  margin: 0;
  max-width: 880px;
}

.xuxu-site-footer [data-footer-lang] {
  display: none;
}

.xuxu-site-footer[data-active-lang="en"] [data-footer-lang="en"],
.xuxu-site-footer[data-active-lang="zh"] [data-footer-lang="zh"] {
  display: block;
}

.xuxu-copyright {
  display: none !important;
}

.xuxu-site-footer .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 734px) {
  .xuxu-site-footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
`;

const SERVICES = [
  { title: "www", href: "https://www.xuxuclassmate.com/" },
  { title: "NAS", href: "https://nas.xuxuclassmate.com" },
  { title: "GlobalPulse", href: "https://pulse.xuxuclassmate.com/" },
  { title: "Mail", href: "https://mail.xuxuclassmate.com" },
  { title: "Watch", href: "https://watch.xuxuclassmate.com/" },
  { title: "SSH", href: "https://ssh.xuxuclassmate.com/" },
];

function serviceList() {
  return SERVICES.map(
    (s) =>
      `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.title}</a></li>`,
  ).join("");
}

const BLOCK_EN = `
<p class="xuxu-site-footer-lead">QA Engineer · SDET · AI Testing.</p>
<div class="xuxu-site-footer-grid">
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">Shop</h2>
    <ul>
      <li><a href="https://www.xuxuclassmate.com/en/work">Products</a></li>
      <li><a href="https://www.xuxuclassmate.com/en/demo/ai-testcase-generator">Live demo</a></li>
      <li><a href="https://www.xuxuclassmate.com/en/open-source">Open Source</a></li>
    </ul>
  </div>
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">Learn</h2>
    <ul>
      <li><a href="https://www.xuxuclassmate.com/en/learn">Engineering</a></li>
      <li><a href="https://www.xuxuclassmate.com/en/blog">Notes</a></li>
      <li><a href="https://www.xuxuclassmate.com/en/ai-testing">AI Testing</a></li>
    </ul>
  </div>
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">About</h2>
    <ul>
      <li><a href="https://www.xuxuclassmate.com/en/about">About</a></li>
      <li><a href="https://www.xuxuclassmate.com/en/now">Now</a></li>
      <li><a href="https://github.com/XuXuClassMate" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    </ul>
  </div>
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">Services</h2>
    <ul>${serviceList()}</ul>
  </div>
  <div class="xuxu-site-footer-col xuxu-site-footer-col--connect">
    <h2 class="xuxu-site-footer-heading">Connect</h2>
    <ul>
      <li><a href="mailto:mail@xuxuclassmate.com">mail@xuxuclassmate.com</a></li>
      <li><a href="https://github.com/XuXuClassMate" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://medium.com/@xuxuclassmate" target="_blank" rel="noopener noreferrer">Medium</a></li>
      <li><a href="https://hub.docker.com/u/xuxuclassmate" target="_blank" rel="noopener noreferrer">Docker Hub</a></li>
    </ul>
  </div>
</div>
<div class="xuxu-site-footer-legal">
  <p class="xuxu-site-footer-region" data-footer-region hidden>
    <span class="sr-only">Your location</span>
    <span data-footer-region-name></span>
  </p>
  <p class="xuxu-site-footer-legal-line">Copyright © 2020-2026 XuXuClassMate. All rights reserved.</p>
</div>`;

const BLOCK_ZH = `
<p class="xuxu-site-footer-lead">QA Engineer · SDET · AI Testing.</p>
<div class="xuxu-site-footer-grid">
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">产品</h2>
    <ul>
      <li><a href="https://www.xuxuclassmate.com/zh/work">作品</a></li>
      <li><a href="https://www.xuxuclassmate.com/zh/demo/ai-testcase-generator">交互 Demo</a></li>
      <li><a href="https://www.xuxuclassmate.com/zh/open-source">开源</a></li>
    </ul>
  </div>
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">工程</h2>
    <ul>
      <li><a href="https://www.xuxuclassmate.com/zh/learn">学习路径</a></li>
      <li><a href="https://www.xuxuclassmate.com/zh/blog">笔记</a></li>
      <li><a href="https://www.xuxuclassmate.com/zh/ai-testing">AI Testing</a></li>
    </ul>
  </div>
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">关于</h2>
    <ul>
      <li><a href="https://www.xuxuclassmate.com/zh/about">关于</a></li>
      <li><a href="https://www.xuxuclassmate.com/zh/now">Now</a></li>
      <li><a href="https://github.com/XuXuClassMate" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    </ul>
  </div>
  <div class="xuxu-site-footer-col">
    <h2 class="xuxu-site-footer-heading">在线服务</h2>
    <ul>${serviceList()}</ul>
  </div>
  <div class="xuxu-site-footer-col xuxu-site-footer-col--connect">
    <h2 class="xuxu-site-footer-heading">连接</h2>
    <ul>
      <li><a href="mailto:mail@xuxuclassmate.com">mail@xuxuclassmate.com</a></li>
      <li><a href="https://github.com/XuXuClassMate" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://medium.com/@xuxuclassmate" target="_blank" rel="noopener noreferrer">Medium</a></li>
      <li><a href="https://hub.docker.com/u/xuxuclassmate" target="_blank" rel="noopener noreferrer">Docker Hub</a></li>
    </ul>
  </div>
</div>
<div class="xuxu-site-footer-legal">
  <p class="xuxu-site-footer-region" data-footer-region hidden>
    <span class="sr-only">所在地区</span>
    <span data-footer-region-name></span>
  </p>
  <p class="xuxu-site-footer-legal-line">Copyright © 2020-2026 XuXuClassMate。保留所有权利。</p>
</div>`;

export const SITE_FOOTER_DUAL_HTML = `<footer class="xuxu-site-footer" data-active-lang="zh" id="xuxu-site-footer">
  <div class="xuxu-site-footer-inner">
    <div data-footer-lang="en">${BLOCK_EN}</div>
    <div data-footer-lang="zh">${BLOCK_ZH}</div>
  </div>
</footer>`;

export const SITE_FOOTER_GEO_SCRIPT = `
(function () {
  var footers = document.querySelectorAll(".xuxu-site-footer");
  if (!footers.length) return;
  fetch("https://www.xuxuclassmate.com/api/geo", { credentials: "omit" })
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.name) return;
      footers.forEach(function (footer) {
        var row = footer.querySelector("[data-footer-region]");
        var nameEl = footer.querySelector("[data-footer-region-name]");
        if (row && nameEl) {
          nameEl.textContent = data.name;
          row.hidden = false;
        }
      });
    })
    .catch(function () {});
})();
`;

export function siteFooterSetLang(lang) {
  const footer = document.getElementById("xuxu-site-footer");
  if (footer) footer.dataset.activeLang = lang === "en" ? "en" : "zh";
}

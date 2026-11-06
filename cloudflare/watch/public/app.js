const titles = { overview: "总览", domains: "域名", scans: "扫描", visitors: "访问", logs: "日志" };
const levels = { danger: "危险", watch: "留意", clear: "平静" };
const countries = {
  CN: "中国", US: "美国", HK: "香港", TW: "台湾", SG: "新加坡", JP: "日本", KR: "韩国",
  DE: "德国", GB: "英国", FR: "法国", NL: "荷兰", IE: "爱尔兰", CA: "加拿大", AU: "澳大利亚",
  IN: "印度", RU: "俄罗斯", BR: "巴西", VN: "越南", TH: "泰国", MY: "马来西亚", ID: "印度尼西亚",
  AE: "阿联酋", IL: "以色列", TR: "土耳其", IT: "意大利", ES: "西班牙", SE: "瑞典", FI: "芬兰", PL: "波兰",
  UA: "乌克兰", MX: "墨西哥", ZA: "南非", PH: "菲律宾", XX: "未知", T1: "Tor", BE: "比利时",
};
const actions = {
  block: "拦截", challenge: "质询", jschallenge: "JS 质询", managed_challenge: "托管质询",
  allow: "放行", log: "记录", bypass: "绕过", skip: "跳过", unknown: "未知",
};
const devices = { desktop: "桌面", mobile: "手机", tablet: "平板", unknown: "未知" };

const PAGE_SIZE = 8;
const state = { view: "overview", range: "24h", host: "", logHost: "", logId: null, data: null, http: [], pages: { recent: 0, sources: 0, logs: 0 } };
const app = document.querySelector("#app");
const statusEl = document.querySelector("#status");
const titleEl = document.querySelector("#title");
const scanCount = document.querySelector("#scan-count");

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    state.host = "";
    state.logHost = "";
    state.logId = null;
    state.pages.logs = 0;
    setView(button.dataset.view);
  });
});

document.querySelectorAll("[data-range]").forEach((button) => {
  button.addEventListener("click", () => {
    state.range = button.dataset.range;
    state.host = "";
    state.pages = { recent: 0, sources: 0, logs: 0 };
    state.logHost = "";
    state.logId = null;
    document.querySelectorAll("[data-range]").forEach((item) => {
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    load();
  });
});

const themeButton = document.querySelector("#theme");
const storedTheme = localStorage.getItem("watch-theme");
if (storedTheme === "light" || storedTheme === "dark") {
  document.documentElement.dataset.theme = storedTheme;
}
syncThemeButton();
themeButton.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme
    || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("watch-theme", next);
  syncThemeButton();
});

function syncThemeButton() {
  const theme = document.documentElement.dataset.theme
    || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  themeButton.setAttribute("aria-label", theme === "dark" ? "切换到浅色" : "切换到深色");
}

load();

function setView(view) {
  state.view = view;
  document.querySelectorAll("[data-view]").forEach((item) => {
    if (item.dataset.view === view) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  titleEl.textContent = titles[view] || "总览";
  document.body.dataset.view = view;
  render();
}

async function load() {
  statusEl.dataset.kind = "";
  statusEl.textContent = "正在读取 Cloudflare…";
  app.replaceChildren();
  try {
    const [response, httpResponse] = await Promise.all([
      fetch(`/api/dashboard?range=${state.range}`, { headers: { Accept: "application/json" } }),
      fetch("/api/http", { headers: { Accept: "application/json" } }),
    ]);
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "读取失败");
    state.data = body;
    state.http = httpResponse.ok ? (await httpResponse.json()).entries || [] : [];
    const when = new Date(body.generatedAt).toLocaleString();
    statusEl.textContent = body.sampled ? `更新于 ${when} · 部分数字为采样估计` : `更新于 ${when}`;
    const scans = body.kpis?.scans || 0;
    scanCount.hidden = scans <= 0;
    scanCount.textContent = "";
    scanCount.setAttribute("aria-label", scans > 0 ? `${formatNumber(scans)} 次扫描` : "");
    render();
  } catch (error) {
    statusEl.dataset.kind = "error";
    statusEl.textContent = error instanceof Error ? error.message : "读取失败";
  }
}

function render() {
  const data = state.data;
  if (!data) return;
  const view = {
    overview: renderOverview,
    domains: renderDomains,
    scans: renderScans,
    visitors: renderVisitors,
    logs: renderLogs,
  }[state.view] || renderOverview;
  app.innerHTML = `${view(data)}<div class="notes">${(data.notes || []).map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</div>`;
  app.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.dataset.copied = "1";
      } catch {
        button.dataset.copied = "0";
      }
    });
  });
  app.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      state.host = button.dataset.host || "";
      setView(button.dataset.open);
    });
  });
  app.querySelectorAll("[data-log-host]").forEach((button) => {
    button.addEventListener("click", () => {
      state.logHost = button.dataset.logHost || "";
      state.logId = null;
      state.pages.logs = 0;
      render();
    });
  });
  const logSelect = app.querySelector("[data-log-host-select]");
  if (logSelect) {
    logSelect.addEventListener("change", () => {
      state.logHost = logSelect.value;
      state.logId = null;
      state.pages.logs = 0;
      render();
    });
  }
  app.querySelectorAll("[data-log-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.logId || "";
      state.logId = state.logId === id ? null : id;
      render();
      if (state.logId) app.querySelector(".http-exchange")?.scrollIntoView({ block: "nearest" });
    });
  });
  app.querySelectorAll("[data-log-close]").forEach((button) => {
    button.addEventListener("click", () => {
      state.logId = null;
      render();
    });
  });
  app.querySelectorAll("[data-host-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.host = button.dataset.hostFilter || "";
      render();
    });
  });
  app.querySelectorAll("[data-page-to]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pages[button.dataset.pageKey] = Number(button.dataset.pageTo);
      render();
    });
  });
}

function renderOverview(data) {
  return `${alertBanner(data)}
    ${trafficKpis(data)}
    <section class="card chart-card"><h2>请求</h2>${chart(data.series)}</section>
    <div class="grid pair-even">
      ${bars("状态码", data.statuses.map((row) => ({ label: String(row.status), value: row.requests })))}
      ${bars("国家 / 地区", data.countries.map((row) => ({ label: countryName(row.code), value: row.requests })))}
    </div>`;
}

function renderDomains(data) {
  return `${hostFilters(data.domains || [])}${trafficBlocks(data)}`;
}

function renderScans(data) {
  const risky = (data.domains || []).filter((domain) => domain.scans || domain.blocked || domain.challenged);
  const scoped = state.host ? risky.filter((domain) => domain.host === state.host) : risky;
  const focus = state.host ? scoped[0] || null : null;
  const totals = {
    scans: scoped.reduce((sum, domain) => sum + domain.scans, 0),
    blocked: scoped.reduce((sum, domain) => sum + domain.blocked, 0),
    challenged: scoped.reduce((sum, domain) => sum + domain.challenged, 0),
  };
  const threats = (data.threats || []).filter((row) => !state.host || sameHost(row.host));
  return `<div class="scan">
    ${scanHero(totals, focus)}
    <div class="scan-columns">
      ${focus ? scanFocus(focus) : scanOverview(risky)}
    </div>
    <section>
      <h2 class="group-label">最近</h2>
      <div class="inset">${threats.length ? threatTimeline(threats) : `<p class="empty pad">这个范围没有拦截或质询。</p>`}</div>
    </section>
  </div>`;
}

function renderLogs(data) {
  const rows = httpRows(data);
  const hosts = [...new Set(rows.map((row) => row.host).filter(Boolean))].sort();
  const visible = state.logHost ? rows.filter((row) => row.host === state.logHost) : rows;
  if (!visible.some((row) => row.id === state.logId)) state.logId = null;
  const options = [`<option value="">全部</option>`]
    .concat(hosts.map((host) => `<option value="${escapeHtml(host)}"${state.logHost === host ? " selected" : ""}>${escapeHtml(host)}</option>`))
    .join("");
  return `<div class="http-log">
    <div class="http-toolbar">
      <label>域名 <select data-log-host-select>${options}</select></label>
      <span>${visible.length} 条</span>
    </div>
    ${visible.length ? pagedRows(visible) : `<p class="empty">这个时间段没有请求。</p>`}
  </div>`;
}

function httpRows(data) {
  const captured = (state.http || []).map((row, index) => ({ ...row, id: `live-${index}`, sampled: false }));
  const sampled = (data.logs || []).map((row, index) => ({
    id: `sample-${index}`,
    time: row.time,
    host: row.host,
    method: row.method || "GET",
    path: row.path || "/",
    status: row.status,
    protocol: row.protocol || "HTTP/1.1",
    request: [["host", row.host], ["user-agent", row.userAgent]].filter(([, value]) => value),
    edge: [["cf-ipcountry", row.country], ["cf-asn", row.asn]].filter(([, value]) => value),
    response: [
      ["cf-cache-status", row.cache],
      ["x-origin-status", row.originStatus ? String(row.originStatus) : ""],
    ].filter(([, value]) => value),
    sampled: true,
  }));
  return captured.concat(sampled).sort((a, b) => String(b.time).localeCompare(String(a.time)));
}

function pagedRows(rows) {
  const size = 20;
  const pages = Math.max(1, Math.ceil(rows.length / size));
  const page = Math.max(0, Math.min(state.pages.logs || 0, pages - 1));
  state.pages.logs = page;
  const slice = rows.slice(page * size, page * size + size);
  return `${slice.map((row) => httpEntry(row)).join("")}${pager("logs", page, pages)}`;
}

function httpEntry(row) {
  const open = state.logId === row.id;
  const version = row.protocol || "HTTP/1.1";
  return `<article class="http-entry">
    <button type="button" class="http-row" data-log-id="${escapeHtml(row.id)}" aria-expanded="${open ? "true" : "false"}">
      <time>${escapeHtml(logStamp(row.time))}</time>
      <span>${escapeHtml(row.method)}</span>
      <span class="http-target">${escapeHtml(row.host)}${escapeHtml(row.path)}</span>
      <span>${escapeHtml(row.status || "—")}</span>
      <span>${row.sampled ? "采样" : ""}</span>
    </button>
    ${open ? `<pre class="http-exchange">${escapeHtml(httpMessage(row, version))}</pre>` : ""}
  </article>`;
}

function httpMessage(row, version) {
  const request = headerBlock(row.request);
  const edge = headerBlock(row.edge);
  const response = headerBlock(row.response);
  const lines = ["请求", `${row.method} ${row.path} ${version}`];
  if (request) lines.push(request);
  if (edge) lines.push("", edge);
  lines.push("", "响应", `${version} ${row.status || "—"}`);
  if (response) lines.push(response);
  return lines.join("\n");
}

function headerBlock(rows) {
  return (rows || []).map(([name, value]) => `${name}: ${value}`).join("\n");
}

function logStamp(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 19);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function renderVisitors(data) {
  const recent = data.recent || [];
  const sources = data.visitors || [];
  return `${pagedCard("recent", "最近的页面访问", recent, recentTable)}
    ${pagedCard("sources", "来源最多的地址", sources, visitorTable)}`;
}

function pagedCard(key, title, rows, renderRows, size = PAGE_SIZE) {
  const pages = Math.max(1, Math.ceil(rows.length / size));
  const page = Math.max(0, Math.min(state.pages[key] || 0, pages - 1));
  state.pages[key] = page;
  const slice = rows.slice(page * size, page * size + size);
  const count = rows.length ? `${page * size + 1}–${page * size + slice.length} / ${rows.length}` : "";
  return `<section class="card${key === "sources" ? " split" : ""}">
    <div class="card-head">
      <h2>${escapeHtml(title)}</h2>
      ${count ? `<p class="page-count">${count}</p>` : ""}
    </div>
    ${renderRows(slice)}
    ${pager(key, page, pages)}
  </section>`;
}

function pager(key, page, pages) {
  if (pages <= 1) return "";
  return `<nav class="pager" aria-label="分页">
    <button type="button" data-page-key="${key}" data-page-to="${page - 1}" ${page === 0 ? "disabled" : ""}>上一页</button>
    <span>${page + 1} / ${pages}</span>
    <button type="button" data-page-key="${key}" data-page-to="${page + 1}" ${page >= pages - 1 ? "disabled" : ""}>下一页</button>
  </nav>`;
}

function alertBanner(data) {
  const scans = data.kpis?.scans || 0;
  const blocked = data.kpis?.blocked || 0;
  const challenged = data.kpis?.challenged || 0;
  if (!scans && !blocked && !challenged) {
    return `<section class="alert" data-level="clear">
      <p class="alert-kicker">平静</p>
      <h2>没有发现恶意扫描</h2>
      <p class="alert-copy">这段时间没有敏感路径探测，也没有拦截或质询。</p>
    </section>`;
  }
  const hosts = (data.domains || []).filter((domain) => domain.scans).slice(0, 3).map((domain) => domain.host);
  const detail = scans
    ? `${hosts.join("、")} 上有探测。路径明细在「扫描」。`
    : "没有对上扫描特征的路径。拦截和质询记录在「扫描」。";
  const level = scans || blocked ? "danger" : "watch";
  const title = scans ? `发现恶意扫描，约 ${formatNumber(scans)} 次` : `有约 ${formatNumber(blocked || challenged)} 次${blocked ? "拦截" : "质询"}`;
  return `<section class="alert" data-level="${level}">
    <p class="alert-kicker">${escapeHtml(levels[level])}</p>
    <h2>${escapeHtml(title)}</h2>
    <p class="alert-copy">${escapeHtml(detail)}</p>
    <button type="button" class="linkish" data-open="scans">打开扫描</button>
  </section>`;
}

function hostFilters(domains) {
  if (!domains.length) return "";
  return `<div class="filters" role="tablist" aria-label="域名">
    <button type="button" data-host-filter="" aria-pressed="${state.host ? "false" : "true"}">全部</button>
    ${domains.map((domain) => `<button type="button" data-host-filter="${escapeHtml(domain.host)}" data-level="${domain.level}" aria-pressed="${state.host === domain.host ? "true" : "false"}">${escapeHtml(shortHost(domain.host))}</button>`).join("")}
  </div>`;
}

function trafficBlocks(data) {
  let domains = data.domains || [];
  if (state.host) domains = domains.filter((domain) => domain.host === state.host);
  if (!domains.length) return `<section class="card"><p class="empty">这个时间段没有域名流量。</p></section>`;
  return `<div class="domain-board">${domains.map((domain) => `
    <section class="card domain-block">
      <div class="block-head">
        <div>
          <h2>${escapeHtml(domain.host)}</h2>
          <p>${formatNumber(domain.requests)} 请求 · ${formatBytes(domain.bytes)} · 浏览 ${formatNumber(domain.visits)}</p>
        </div>
        ${domain.scans ? `<button type="button" class="linkish" data-open="scans" data-host="${escapeHtml(domain.host)}">${formatNumber(domain.scans)} 次扫描</button>` : `<span class="pill ok">没有扫描</span>`}
      </div>
      ${domainPaths(domain.pages)}
    </section>`).join("")}</div>`;
}

function scanHero(totals, focus) {
  return `<section class="scan-hero">
    <p class="hero-kicker">${escapeHtml(focus ? focus.host : "全部域名")}</p>
    <div class="figure">
      <strong>${formatNumber(totals.scans)}</strong>
      <span>次</span>
    </div>
    <p class="figure-label">${focus ? "这个域名上的扫描" : "恶意扫描"}</p>
    <div class="quiet-stats">
      <div><b>${formatNumber(totals.blocked)}</b><span>拦截</span></div>
      <div><b>${formatNumber(totals.challenged)}</b><span>质询</span></div>
    </div>
    ${focus ? `<div class="hero-links">
      <button type="button" class="linkish" data-host-filter="">全部域名</button>
      <button type="button" class="linkish" data-open="domains" data-host="${escapeHtml(focus.host)}">查看流量</button>
    </div>` : ""}
  </section>`;
}

function scanOverview(domains) {
  if (!domains.length) {
    return `<section><h2 class="group-label">域名</h2><div class="inset"><p class="empty pad">这段时间没有扫描。</p></div></section>`;
  }
  const max = Math.max(1, ...domains.map((domain) => domainMeasure(domain)));
  return `<section>
      <h2 class="group-label">域名</h2>
      <div class="inset">${domains.map((domain) => domainRow(domain, max)).join("")}</div>
    </section>
    ${kindGroup(sumKinds(domains))}`;
}

function scanFocus(domain) {
  return `${kindGroup(domain.kinds || [])}
    ${pathGroup(domain.probes)}`;
}

function domainMeasure(domain) {
  return domain.scans || domain.blocked + domain.challenged;
}

function domainRow(domain, max) {
  const kinds = [...(domain.kinds || [])].sort((a, b) => b.requests - a.requests);
  const caption = kinds.slice(0, 2).map((kind) => `${kind.label} ${formatNumber(kind.requests)}`).join(" · ")
    || (domain.blocked ? "只有拦截" : "只有质询");
  const value = domainMeasure(domain);
  return `<button type="button" class="inset-row" data-host-filter="${escapeHtml(domain.host)}">
    <span class="row-title">${escapeHtml(shortHost(domain.host))}</span>
    <span class="row-value">${formatNumber(value)}</span>
    <span class="caption">${escapeHtml(caption)}</span>
    <progress class="${domain.scans ? "bad" : "warn"}" max="${max}" value="${value}"></progress>
  </button>`;
}

function kindGroup(kinds) {
  if (!kinds.length) return "";
  const top = Math.max(1, ...kinds.map((kind) => kind.requests));
  return `<section>
    <h2 class="group-label">类型</h2>
    <div class="inset">${kinds.map((kind) => `
      <div class="inset-row">
        <span class="row-title">${escapeHtml(kind.label)}</span>
        <span class="row-value">${formatNumber(kind.requests)}</span>
        <progress class="${kind.severity === "danger" ? "bad" : "warn"}" max="${top}" value="${kind.requests}"></progress>
      </div>`).join("")}</div>
  </section>`;
}

function pathGroup(rows) {
  if (!rows?.length) {
    return `<section><h2 class="group-label">路径</h2><div class="inset"><p class="empty pad">没有对上扫描特征的路径。</p></div></section>`;
  }
  const max = Math.max(1, ...rows.map((row) => row.requests));
  return `<section>
    <h2 class="group-label">路径</h2>
    <div class="inset">${rows.map((row) => `
      <div class="inset-row">
        <span class="row-title mono">${escapeHtml(row.path)}</span>
        <span class="row-value">${formatNumber(row.requests)}</span>
        <span class="caption">${escapeHtml(row.label)}</span>
        <progress class="${row.severity === "danger" ? "bad" : "warn"}" max="${max}" value="${row.requests}"></progress>
      </div>`).join("")}</div>
  </section>`;
}

function sumKinds(domains) {
  const map = new Map();
  for (const domain of domains) {
    for (const kind of domain.kinds || []) {
      const current = map.get(kind.kind) || { kind: kind.kind, label: kind.label, severity: kind.severity, requests: 0 };
      current.requests += kind.requests;
      if (kind.severity === "danger") current.severity = "danger";
      map.set(kind.kind, current);
    }
  }
  return [...map.values()].sort((a, b) => kindRank(a.kind) - kindRank(b.kind) || b.requests - a.requests);
}

function kindRank(kind) {
  const order = ["secret", "traversal", "repo", "shell", "cms", "admin"];
  const index = order.indexOf(kind);
  return index === -1 ? order.length : index;
}

function threatTimeline(rows) {
  const shown = rows.slice(0, 8);
  const more = rows.length - shown.length;
  return `${shown.map((row) => `
    <div class="inset-row">
      <span class="row-title mono">${escapeHtml(row.path || "—")}</span>
      <time>${escapeHtml(labelTime(row.time))}</time>
      <span class="caption">${escapeHtml(shortHost(row.host || ""))} · ${escapeHtml(actions[row.action] || row.action || "—")}</span>
    </div>`).join("")}${more ? `<p class="more">还有 ${formatNumber(more)} 条</p>` : ""}`;
}

function trafficKpis(data) {
  const items = [
    ["请求", formatNumber(data.kpis.requests)],
    ["带宽", formatBytes(data.kpis.bytes)],
    ["浏览", formatNumber(data.kpis.visits)],
    [data.kpis.uniquesLabel, formatNumber(data.kpis.uniques)],
  ];
  return `<section class="grid kpis">${items.map(([label, value]) =>
    `<article class="card kpi"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`).join("")}</section>`;
}

function chart(series) {
  if (!series?.length) return `<p class="empty">这个时间段还没有曲线。</p>`;
  const width = 720;
  const height = 240;
  const top = 16;
  const bottom = height - 8;
  const max = Math.max(1, ...series.map((point) => point.requests));
  const coords = series.map((point, index) => {
    const x = series.length === 1 ? width / 2 : (index * width) / (series.length - 1);
    const y = bottom - (point.requests / max) * (bottom - top);
    return [x, y];
  });
  const line = smoothLine(coords, top, bottom);
  const last = coords.at(-1);
  const area = `${line} L${last[0].toFixed(1)},${height} L${coords[0][0].toFixed(1)},${height} Z`;
  const mid = series[Math.floor((series.length - 1) / 2)];
  return `<svg class="chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="请求曲线">
    <defs>
      <linearGradient id="request-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--blue)" stop-opacity="0.42"></stop>
        <stop offset="100%" stop-color="var(--blue)" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
    <path class="area" d="${area}"></path>
    <path class="line" d="${line}"></path>
  </svg>
  <div class="axis"><span>${escapeHtml(labelTime(series[0].t))}</span><span>${escapeHtml(labelTime(mid.t))}</span><span>${escapeHtml(labelTime(series.at(-1).t))}</span></div>`;
}

function smoothLine(points, minY, maxY) {
  const clamp = (value) => Math.max(minY, Math.min(maxY, value));
  if (points.length === 1) return `M0,${points[0][1].toFixed(1)} L${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
  let path = `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[index - 1] || points[index];
    const current = points[index];
    const next = points[index + 1];
    const after = points[index + 2] || next;
    const c1x = current[0] + (next[0] - previous[0]) / 6;
    const c1y = clamp(current[1] + (next[1] - previous[1]) / 6);
    const c2x = next[0] - (after[0] - current[0]) / 6;
    const c2y = clamp(next[1] - (after[1] - current[1]) / 6);
    path += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${next[0].toFixed(1)},${next[1].toFixed(1)}`;
  }
  return path;
}

function bars(title, rows) {
  const list = rows.filter((row) => row.value > 0).slice(0, 8);
  const max = Math.max(1, ...list.map((row) => row.value));
  const body = list.length
    ? list.map((row) => `<div class="bar-row"><b>${escapeHtml(row.label)}</b><progress max="${max}" value="${row.value}"></progress><em>${formatNumber(row.value)}</em></div>`).join("")
    : `<p class="empty">没有数据。</p>`;
  return `<section class="card"><h2>${escapeHtml(title)}</h2>${body}</section>`;
}

function domainPaths(rows) {
  if (!rows?.length) return `<p class="empty">没有单独列出的正常页面。</p>`;
  return `<p class="path-kicker"><span>页面</span><span>请求</span></p>
    <div class="path-list">${rows.map((row) => `
      <div class="path-row"><span>${escapeHtml(row.path)}</span><b>${formatNumber(row.requests)}</b></div>`).join("")}
    </div>`;
}

function recentTable(rows) {
  if (!rows.length) return `<p class="empty">没有页面访问记录。静态资源已从这张表里拿掉。</p>`;
  const cards = rows.map((row) => {
    const client = [row.browser, row.os, devices[row.device] || row.device].filter(Boolean).join(" · ");
    return `<article class="record">
      <div class="record-top"><b>${escapeHtml(labelTime(row.time))}</b>${statusPill(row.status)}</div>
      <p class="record-path">${escapeHtml(row.method)} ${escapeHtml(row.path)}</p>
      <p class="record-meta">${copyButton(row.ip)} · ${escapeHtml(countryName(row.country))} · ${escapeHtml(shortHost(row.host))}${client ? ` · ${escapeHtml(client)}` : ""}</p>
    </article>`;
  }).join("");
  return `<div class="record-list">${cards}</div><div class="table-wrap wide-only"><table><thead><tr><th>时间</th><th>IP</th><th>地区</th><th>主机</th><th>路径</th><th>状态</th><th>客户端</th></tr></thead><tbody>
    ${rows.map((row) => `<tr>
      <td>${escapeHtml(labelTime(row.time))}</td>
      <td>${copyButton(row.ip)}</td>
      <td>${escapeHtml(countryName(row.country))}</td>
      <td>${escapeHtml(row.host)}</td>
      <td class="path">${escapeHtml(row.method)} ${escapeHtml(row.path)}</td>
      <td>${statusPill(row.status)}</td>
      <td>${escapeHtml([row.browser, row.os, devices[row.device] || row.device].filter(Boolean).join(" · "))}</td>
    </tr>`).join("")}
  </tbody></table></div>`;
}

function visitorTable(rows) {
  if (!rows.length) return `<p class="empty">没有来源地址。</p>`;
  const cards = rows.map((row) => {
    const client = [row.browser, row.os, devices[row.device] || row.device].filter(Boolean).join(" · ");
    return `<article class="record">
      <div class="record-top">${copyButton(row.ip)}<b>${formatNumber(row.requests)}</b></div>
      <p class="record-meta">${escapeHtml(countryName(row.country))}${client ? ` · ${escapeHtml(client)}` : ""} · 浏览 ${formatNumber(row.visits)}</p>
    </article>`;
  }).join("");
  return `<div class="record-list">${cards}</div><div class="table-wrap wide-only"><table><thead><tr><th>IP</th><th>地区</th><th>客户端</th><th>请求</th><th>浏览</th></tr></thead><tbody>
    ${rows.map((row) => `<tr>
      <td>${copyButton(row.ip)}</td>
      <td>${escapeHtml(countryName(row.country))}</td>
      <td>${escapeHtml([row.browser, row.os, devices[row.device] || row.device].filter(Boolean).join(" · "))}</td>
      <td>${formatNumber(row.requests)}</td>
      <td>${formatNumber(row.visits)}</td>
    </tr>`).join("")}
  </tbody></table></div>`;
}

function sameHost(host) {
  return String(host || "").toLowerCase().replace(/:\d+$/, "") === state.host;
}

function shortHost(host) {
  const bare = String(host || "").trim().toLowerCase().replace(/:\d+$/, "");
  if (!bare) return "—";
  if (bare === "xuxuclassmate.com") return "apex";
  return bare.replace(".xuxuclassmate.com", "") || bare;
}

function copyButton(ip) {
  if (!ip) return "—";
  return `<button type="button" class="copy" data-copy="${escapeHtml(ip)}">${escapeHtml(ip)}</button>`;
}

function statusPill(status) {
  if (!status) return "—";
  const kind = status >= 500 ? "bad" : status >= 400 ? "warn" : status >= 200 && status < 300 ? "ok" : "";
  return `<span class="pill ${kind}">${status}</span>`;
}

function countryName(code) {
  if (!code) return "—";
  return countries[code] || code;
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-Hans").format(value || 0);
}

function formatBytes(value) {
  const size = value || 0;
  if (size < 1024) return `${size} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let next = size / 1024;
  let unit = units[0];
  for (let i = 0; i < units.length; i += 1) {
    unit = units[i];
    if (next < 1024 || i === units.length - 1) break;
    next /= 1024;
  }
  return `${next >= 10 ? next.toFixed(0) : next.toFixed(1)} ${unit}`;
}

function labelTime(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).slice(0, 16);
  return date.toLocaleString(undefined, { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
}

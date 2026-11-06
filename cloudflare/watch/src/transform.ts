export type RangeKey = "24h" | "7d" | "30d";

export type GroupRow = {
  count?: number;
  avg?: { sampleInterval?: number | null };
  sum?: {
    edgeResponseBytes?: number | null;
    visits?: number | null;
    requests?: number | null;
    bytes?: number | null;
    cachedRequests?: number | null;
    cachedBytes?: number | null;
    threats?: number | null;
    pageViews?: number | null;
  };
  uniq?: { uniques?: number | null };
  dimensions?: Record<string, string | number | null>;
};

export type RecentRow = {
  datetime?: string | null;
  clientIP?: string | null;
  clientCountryName?: string | null;
  clientAsn?: number | string | null;
  clientRequestHTTPHost?: string | null;
  clientRequestPath?: string | null;
  clientRequestHTTPMethodName?: string | null;
  edgeResponseStatus?: number | null;
  cacheStatus?: string | null;
  userAgentBrowser?: string | null;
  userAgentOS?: string | null;
  userAgent?: string | null;
  coloCode?: string | null;
  sampleInterval?: number | null;
  securityAction?: string | null;
  securitySource?: string | null;
  clientDeviceType?: string | null;
  clientASNDescription?: string | null;
  clientRequestScheme?: string | null;
  clientRequestHTTPProtocol?: string | null;
  clientSSLProtocol?: string | null;
  clientRequestReferer?: string | null;
  edgeResponseContentTypeName?: string | null;
  edgeResponseBytes?: number | null;
  originResponseStatus?: number | null;
  edgeTimeToFirstByteMs?: number | null;
};

export type SecurityLevel = "clear" | "watch" | "danger";

export type ProbeHit = {
  kind: string;
  severity: Exclude<SecurityLevel, "clear">;
  label: string;
};

export type ThreatRow = {
  datetime?: string | null;
  action?: string | null;
  source?: string | null;
  clientIP?: string | null;
  clientCountryName?: string | null;
  clientAsn?: number | string | null;
  clientRequestHTTPHost?: string | null;
  clientRequestPath?: string | null;
  clientRequestHTTPMethodName?: string | null;
  description?: string | null;
  userAgent?: string | null;
  edgeResponseStatus?: number | null;
};

export type DashboardPayload = {
  range: RangeKey;
  from: string;
  to: string;
  generatedAt: string;
  sampled: boolean;
  kpis: {
    requests: number;
    bytes: number;
    visits: number;
    uniques: number;
    uniquesLabel: "今日独立访客" | "最近自然日独立访客";
    cacheHitRate: number | null;
    scans: number;
    blocked: number;
    challenged: number;
  };
  series: { t: string; requests: number; bytes: number }[];
  hosts: { host: string; requests: number; bytes: number; visits: number }[];
  countries: { code: string; requests: number }[];
  statuses: { status: number; requests: number }[];
  browsers: { name: string; requests: number }[];
  paths: { host: string; path: string; requests: number }[];
  domains: {
    host: string;
    requests: number;
    bytes: number;
    visits: number;
    scans: number;
    blocked: number;
    challenged: number;
    level: SecurityLevel;
    kinds: { kind: string; label: string; severity: SecurityLevel; requests: number }[];
    pages: { path: string; requests: number }[];
    probes: { path: string; kind: string; label: string; severity: SecurityLevel; requests: number }[];
  }[];
  alerts: { level: SecurityLevel; title: string; detail: string }[];
  actions: { host: string; action: string; requests: number }[];
  visitors: {
    ip: string;
    country: string;
    asn: string;
    browser: string;
    os: string;
    device: string;
    requests: number;
    visits: number;
  }[];
  recent: {
    time: string;
    ip: string;
    country: string;
    asn: string;
    host: string;
    method: string;
    path: string;
    status: number | null;
    browser: string;
    os: string;
    colo: string;
    cache: string;
    securityAction: string;
    device: string;
    sampled: boolean;
  }[];
  logs: {
    time: string;
    ip: string;
    country: string;
    asn: string;
    asnName: string;
    host: string;
    method: string;
    path: string;
    scheme: string;
    protocol: string;
    ssl: string;
    referer: string;
    status: number | null;
    originStatus: number | null;
    contentType: string;
    bytes: number | null;
    ttfb: number | null;
    cache: string;
    securityAction: string;
    securitySource: string;
    browser: string;
    os: string;
    device: string;
    userAgent: string;
    sampled: boolean;
    sampleInterval: number;
  }[];
  threats: {
    time: string;
    action: string;
    source: string;
    ip: string;
    country: string;
    asn: string;
    host: string;
    path: string;
    method: string;
    description: string;
    status: number | null;
  }[];
  notes: string[];
};

const RANGES: Record<RangeKey, number> = {
  "24h": 24,
  "7d": 24 * 7,
  "30d": 24 * 30,
};

export function parseRange(value: string | null): RangeKey {
  if (value === "7d" || value === "30d" || value === "24h") return value;
  return "24h";
}

export function windowFor(range: RangeKey, now = new Date()): {
  start: string;
  end: string;
  startDate: string;
  endDate: string;
} {
  const end = new Date(now);
  end.setMilliseconds(0);
  const start = new Date(end.getTime() - RANGES[range] * 60 * 60 * 1000);
  return {
    start: start.toISOString(),
    end: end.toISOString(),
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10),
  };
}

export function scale(count: number, sampleInterval: number | null | undefined): number {
  const interval = sampleInterval && sampleInterval > 0 ? sampleInterval : 1;
  return Math.round(count * interval);
}

function num(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function text(value: unknown, fallback = ""): string {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

export function formatAsn(value: unknown): string {
  const n = typeof value === "string" ? Number(value) : value;
  if (typeof n !== "number" || !Number.isFinite(n) || n <= 0) return "";
  return `AS${n}`;
}

function estimated(row: GroupRow): { requests: number; bytes: number; visits: number; sampled: boolean } {
  const interval = row.avg?.sampleInterval;
  const sampled = typeof interval === "number" && interval > 1.05;
  return {
    requests: scale(num(row.count), interval),
    bytes: scale(num(row.sum?.edgeResponseBytes), interval),
    visits: scale(num(row.sum?.visits), interval),
    sampled,
  };
}

function dim(row: GroupRow, key: string): string {
  return text(row.dimensions?.[key]);
}

export function buildDashboard(input: {
  range: RangeKey;
  from: string;
  to: string;
  generatedAt: string;
  series: GroupRow[];
  hosts: GroupRow[];
  countries: GroupRow[];
  statuses: GroupRow[];
  browsers: GroupRow[];
  cache: GroupRow[];
  paths: GroupRow[];
  daily: GroupRow[];
  probes?: GroupRow[];
  actions?: GroupRow[];
  visitors: GroupRow[];
  recent: RecentRow[];
  logs?: RecentRow[];
  threats: ThreatRow[];
  activityError?: string;
  securityError?: string;
}): DashboardPayload {
  const series = [...input.series]
    .map((row) => {
      const est = estimated(row);
      return {
        t: dim(row, "datetimeHour") || dim(row, "date"),
        requests: est.requests,
        bytes: est.bytes,
        visits: est.visits,
        sampled: est.sampled,
      };
    })
    .filter((row) => row.t)
    .sort((a, b) => a.t.localeCompare(b.t));

  const daily = [...input.daily].sort((a, b) => dim(a, "date").localeCompare(dim(b, "date")));
  const useDaily = input.range !== "24h" && daily.length > 0;
  const chart = useDaily
    ? daily.map((row) => ({
        t: dim(row, "date"),
        requests: num(row.sum?.requests),
        bytes: num(row.sum?.bytes),
      }))
    : series.map(({ t, requests, bytes }) => ({ t, requests, bytes }));

  const requests = useDaily
    ? daily.reduce((sum, row) => sum + num(row.sum?.requests), 0)
    : series.reduce((sum, row) => sum + row.requests, 0);
  const bytes = useDaily
    ? daily.reduce((sum, row) => sum + num(row.sum?.bytes), 0)
    : series.reduce((sum, row) => sum + row.bytes, 0);
  const visits = useDaily
    ? daily.reduce((sum, row) => sum + num(row.sum?.pageViews), 0)
    : series.reduce((sum, row) => sum + row.visits, 0);

  const latestDaily = daily.at(-1);
  const hosts = mergeHosts(input.hosts);
  const domains = buildDomains(hosts, input.paths, input.probes ?? [], input.actions ?? []);
  const alerts = buildAlerts(domains);
  const countries = rank(input.countries, (row) => dim(row, "clientCountryName") || "—").map((row) => ({
    code: dim(row, "clientCountryName") || "—",
    requests: estimated(row).requests,
  }));
  const statuses = rank(input.statuses, (row) => String(row.dimensions?.edgeResponseStatus ?? ""))
    .map((row) => ({
      status: num(row.dimensions?.edgeResponseStatus),
      requests: estimated(row).requests,
    }))
    .filter((row) => row.status > 0);
  const browsers = rank(input.browsers, (row) => dim(row, "userAgentBrowser") || "未知").map((row) => ({
    name: dim(row, "userAgentBrowser") || "未知",
    requests: estimated(row).requests,
  }));
  const paths = rank(input.paths, (row) => `${normalizeHost(dim(row, "clientRequestHTTPHost"))}${decodePath(dim(row, "clientRequestPath"))}`)
    .map((row) => ({
      host: normalizeHost(dim(row, "clientRequestHTTPHost")),
      path: decodePath(dim(row, "clientRequestPath")) || "/",
      requests: estimated(row).requests,
    }))
    .filter((row) => !isStaticAsset(row.path) && !classifyProbe(row.path));

  const cacheTotal = input.cache.reduce((sum, row) => sum + estimated(row).requests, 0);
  const cacheHits = input.cache
    .filter((row) => dim(row, "cacheStatus") === "hit")
    .reduce((sum, row) => sum + estimated(row).requests, 0);

  const sampled =
    series.some((row) => row.sampled) ||
    input.hosts.some((row) => estimated(row).sampled) ||
    input.recent.some((row) => num(row.sampleInterval) > 1.05);

  const notes = [
    "数字来自 Cloudflare 区域分析。采样间隔大于 1 时，请求量为估计值。",
    "扫描按路径特征归类，同一路径只计一次。查询串已去掉。独立访客按 UTC 自然日计算，多日不会相加。",
  ];
  if (input.activityError) notes.push(input.activityError);
  if (input.securityError) notes.push(input.securityError);

  return {
    range: input.range,
    from: input.from,
    to: input.to,
    generatedAt: input.generatedAt,
    sampled,
    kpis: {
      requests,
      bytes,
      visits,
      uniques: num(latestDaily?.uniq?.uniques),
      uniquesLabel: input.range === "24h" ? "今日独立访客" : "最近自然日独立访客",
      cacheHitRate: cacheTotal > 0 ? cacheHits / cacheTotal : null,
      scans: domains.reduce((sum, domain) => sum + domain.scans, 0),
      blocked: domains.reduce((sum, domain) => sum + domain.blocked, 0),
      challenged: domains.reduce((sum, domain) => sum + domain.challenged, 0),
    },
    series: chart,
    hosts,
    countries,
    statuses,
    browsers,
    paths: paths.slice(0, 12),
    domains,
    alerts,
    actions: domains.flatMap((domain) => {
      const rows: DashboardPayload["actions"] = [];
      if (domain.blocked) rows.push({ host: domain.host, action: "block", requests: domain.blocked });
      if (domain.challenged) rows.push({ host: domain.host, action: "managed_challenge", requests: domain.challenged });
      return rows;
    }),
    visitors: rank(input.visitors, (row) => dim(row, "clientIP"))
      .filter((row) => dim(row, "clientIP"))
      .slice(0, 30)
      .map((row) => ({
        ip: dim(row, "clientIP"),
        country: dim(row, "clientCountryName"),
        asn: formatAsn(row.dimensions?.clientAsn),
        browser: dim(row, "userAgentBrowser"),
        os: dim(row, "userAgentOS"),
        device: dim(row, "clientDeviceType"),
        requests: estimated(row).requests,
        visits: estimated(row).visits,
      })),
    recent: input.recent
      .filter((row) => !isStaticAsset(stripPath(text(row.clientRequestPath))))
      .slice(0, 40)
      .map((row) => ({
      time: text(row.datetime),
      ip: text(row.clientIP),
      country: text(row.clientCountryName),
      asn: formatAsn(row.clientAsn),
      host: text(row.clientRequestHTTPHost),
      method: text(row.clientRequestHTTPMethodName),
      path: stripPath(text(row.clientRequestPath)) || "/",
      status: row.edgeResponseStatus ?? null,
      browser: text(row.userAgentBrowser),
      os: text(row.userAgentOS),
      colo: text(row.coloCode),
      cache: text(row.cacheStatus),
      securityAction: text(row.securityAction),
      device: text(row.clientDeviceType),
      sampled: num(row.sampleInterval) > 1.05,
    })),
    logs: (input.logs ?? [])
      .slice(0, 100)
      .map((row) => ({
        time: text(row.datetime),
        ip: text(row.clientIP),
        country: text(row.clientCountryName),
        asn: formatAsn(row.clientAsn),
        asnName: text(row.clientASNDescription),
        host: normalizeHost(text(row.clientRequestHTTPHost)),
        method: text(row.clientRequestHTTPMethodName) || "GET",
        path: stripPath(text(row.clientRequestPath)) || "/",
        scheme: text(row.clientRequestScheme),
        protocol: text(row.clientRequestHTTPProtocol),
        ssl: text(row.clientSSLProtocol),
        referer: stripReferer(text(row.clientRequestReferer)),
        status: row.edgeResponseStatus ?? null,
        originStatus: row.originResponseStatus ?? null,
        contentType: text(row.edgeResponseContentTypeName),
        bytes: row.edgeResponseBytes ?? null,
        ttfb: row.edgeTimeToFirstByteMs ?? null,
        cache: text(row.cacheStatus),
        securityAction: text(row.securityAction),
        securitySource: text(row.securitySource),
        browser: text(row.userAgentBrowser),
        os: text(row.userAgentOS),
        device: text(row.clientDeviceType),
        userAgent: text(row.userAgent),
        sampled: num(row.sampleInterval) > 1.05,
        sampleInterval: num(row.sampleInterval),
      })),
    threats: input.threats.filter((row) => text(row.action) !== "link_maze_injected").slice(0, 40).map((row) => ({
      time: text(row.datetime),
      action: text(row.action),
      source: text(row.source),
      ip: text(row.clientIP),
      country: text(row.clientCountryName),
      asn: formatAsn(row.clientAsn),
      host: text(row.clientRequestHTTPHost),
      path: stripPath(text(row.clientRequestPath)) || "/",
      method: text(row.clientRequestHTTPMethodName),
      description: text(row.description),
      status: row.edgeResponseStatus ?? null,
    })),
    notes,
  };
}

function pick(row: GroupRow): { requests: number; bytes: number; visits: number } {
  const est = estimated(row);
  return { requests: est.requests, bytes: est.bytes, visits: est.visits };
}

function rank(rows: GroupRow[], key: (row: GroupRow) => string): GroupRow[] {
  const merged = new Map<string, GroupRow>();
  for (const row of rows) {
    const id = key(row);
    const prev = merged.get(id);
    if (!prev) {
      merged.set(id, {
        count: num(row.count),
        avg: row.avg,
        sum: { ...row.sum },
        dimensions: row.dimensions,
      });
      continue;
    }
    prev.count = num(prev.count) + num(row.count);
    prev.sum = {
      edgeResponseBytes: num(prev.sum?.edgeResponseBytes) + num(row.sum?.edgeResponseBytes),
      visits: num(prev.sum?.visits) + num(row.sum?.visits),
    };
  }
  return [...merged.values()].sort((a, b) => estimated(b).requests - estimated(a).requests);
}

export function stripReferer(value: string): string {
  const raw = value.trim();
  if (!raw || raw === "-") return "";
  try {
    const url = new URL(raw);
    return `${url.origin}${url.pathname}`;
  } catch {
    return raw.split("?")[0]?.split("#")[0] ?? "";
  }
}

export function stripPath(path: string): string {
  const clean = path.split("?")[0]?.split("#")[0] ?? "";
  if (!clean) return "/";
  return clean.startsWith("/") ? clean : `/${clean}`;
}

export function isStaticAsset(path: string): boolean {
  return /\.(?:css|js|mjs|map|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|otf|mp4|webm|txt|xml)$/i.test(path);
}

export function seriesDimension(range: RangeKey): "datetimeHour" | "date" {
  return range === "24h" ? "datetimeHour" : "date";
}

export function normalizeHost(host: string): string {
  const trimmed = host.trim().toLowerCase();
  if (!trimmed || trimmed === "—") return trimmed || "—";
  return trimmed.replace(/:\d+$/, "") || "—";
}

export function decodePath(path: string): string {
  const clean = stripPath(path);
  try {
    return stripPath(decodeURIComponent(clean.replace(/\+/g, " ")));
  } catch {
    return clean;
  }
}

const PROBE_RULES: { kind: string; severity: Exclude<SecurityLevel, "clear">; label: string; pattern: RegExp }[] = [
  { kind: "secret", severity: "danger", label: "敏感文件", pattern: /(?:^|\/)\.env(?:[./_-]|$)|wp-config|(?:^|\/)\.aws(?:\/|$)|id_rsa|(?:credentials|secrets?)\.(?:json|ya?ml|php|txt)|(?:^|\/)\.npmrc/i },
  { kind: "traversal", severity: "danger", label: "路径穿越", pattern: /\.\.(?:\/|\\)|%2e%2e|%252e/i },
  { kind: "repo", severity: "danger", label: "仓库探测", pattern: /(?:^|\/)\.git(?:\/|$)|(?:^|\/)\.svn(?:\/|$)|(?:^|\/)\.hg(?:\/|$)|gitlab-ci|(?:^|\/)\.github(?:\/|$)/i },
  { kind: "shell", severity: "danger", label: "脚本探测", pattern: /phpinfo|info\.php|shell\.php|xmlrpc|phpmyadmin|vendor\/phpunit|cgi-bin|boaform|hnap1|actuator|(?:^|\/)(?:config|setup|install|test)\.php/i },
  { kind: "cms", severity: "watch", label: "后台探测", pattern: /wp-(?:admin|login|json|content|includes)|wordpress/i },
  { kind: "admin", severity: "watch", label: "管理入口", pattern: /(?:^|\/)admin(?:\/|$)|\/manager\/html|(?:^|\/)console(?:\/|$)/i },
  { kind: "shell", severity: "watch", label: "脚本探测", pattern: /\.php(?:\/|$)/i },
];

export function classifyProbe(path: string): ProbeHit | null {
  const value = decodePath(path);
  if (!value || value === "/") return null;
  for (const rule of PROBE_RULES) {
    if (rule.pattern.test(value)) {
      return { kind: rule.kind, severity: rule.severity, label: rule.label };
    }
  }
  return null;
}

function severityRank(level: SecurityLevel): number {
  if (level === "danger") return 2;
  if (level === "watch") return 1;
  return 0;
}

function mergeHosts(rows: GroupRow[]): { host: string; requests: number; bytes: number; visits: number }[] {
  return rank(rows, (row) => normalizeHost(dim(row, "clientRequestHTTPHost")) || "—")
    .map((row) => ({
      host: normalizeHost(dim(row, "clientRequestHTTPHost")) || "—",
      ...pick(row),
    }))
    .sort((a, b) => b.requests - a.requests);
}

function buildDomains(
  hosts: { host: string; requests: number; bytes: number; visits: number }[],
  paths: GroupRow[],
  probes: GroupRow[],
  actions: GroupRow[],
): DashboardPayload["domains"] {
  const map = new Map<string, {
    host: string;
    requests: number;
    bytes: number;
    visits: number;
    blocked: number;
    challenged: number;
    pages: { path: string; requests: number }[];
    probeMap: Map<string, DashboardPayload["domains"][number]["probes"][number]>;
  }>();

  const ensure = (host: string) => {
    const key = normalizeHost(host) || "—";
    const found = map.get(key);
    if (found) return found;
    const created = {
      host: key,
      requests: 0,
      bytes: 0,
      visits: 0,
      blocked: 0,
      challenged: 0,
      pages: [],
      probeMap: new Map<string, DashboardPayload["domains"][number]["probes"][number]>(),
    };
    map.set(key, created);
    return created;
  };

  for (const host of hosts) {
    const domain = ensure(host.host);
    domain.requests += host.requests;
    domain.bytes += host.bytes;
    domain.visits += host.visits;
  }

  for (const row of paths) {
    const path = decodePath(dim(row, "clientRequestPath")) || "/";
    if (isStaticAsset(path) || classifyProbe(path)) continue;
    const domain = ensure(dim(row, "clientRequestHTTPHost"));
    const requests = estimated(row).requests;
    const existing = domain.pages.find((item) => item.path === path);
    if (existing) existing.requests += requests;
    else domain.pages.push({ path, requests });
  }

  for (const row of probes) {
    const path = decodePath(dim(row, "clientRequestPath")) || "/";
    const hit = classifyProbe(path);
    if (!hit) continue;
    const domain = ensure(dim(row, "clientRequestHTTPHost"));
    const requests = estimated(row).requests;
    const prev = domain.probeMap.get(path);
    if (!prev) {
      domain.probeMap.set(path, { path, ...hit, requests });
      continue;
    }
    prev.requests = Math.max(prev.requests, requests);
    if (severityRank(hit.severity) > severityRank(prev.severity)) {
      prev.kind = hit.kind;
      prev.severity = hit.severity;
      prev.label = hit.label;
    }
  }

  for (const row of actions) {
    const action = dim(row, "securityAction");
    const requests = estimated(row).requests;
    const domain = ensure(dim(row, "clientRequestHTTPHost"));
    if (action === "block") domain.blocked += requests;
    else if (action === "challenge" || action === "jschallenge" || action === "managed_challenge") domain.challenged += requests;
  }

  return [...map.values()].map((domain) => {
    const probesForHost = [...domain.probeMap.values()].sort(
      (a, b) => severityRank(b.severity) - severityRank(a.severity) || b.requests - a.requests,
    );
    const kinds = new Map<string, DashboardPayload["domains"][number]["kinds"][number]>();
    for (const probe of probesForHost) {
      const current = kinds.get(probe.kind) ?? { kind: probe.kind, label: probe.label, severity: probe.severity, requests: 0 };
      current.requests += probe.requests;
      if (severityRank(probe.severity) > severityRank(current.severity)) current.severity = probe.severity;
      kinds.set(probe.kind, current);
    }
    const scans = probesForHost.reduce((sum, probe) => sum + probe.requests, 0);
    const level: SecurityLevel = probesForHost.some((probe) => probe.severity === "danger") || domain.blocked > 0
      ? "danger"
      : probesForHost.length > 0 || domain.challenged > 0
        ? "watch"
        : "clear";
    return {
      host: domain.host,
      requests: domain.requests,
      bytes: domain.bytes,
      visits: domain.visits,
      scans,
      blocked: domain.blocked,
      challenged: domain.challenged,
      level,
      kinds: [...kinds.values()].sort((a, b) => b.requests - a.requests),
      pages: domain.pages.sort((a, b) => b.requests - a.requests).slice(0, 8),
      probes: probesForHost.slice(0, 12),
    };
  }).sort((a, b) => severityRank(b.level) - severityRank(a.level) || b.scans - a.scans || b.requests - a.requests);
}

function buildAlerts(domains: DashboardPayload["domains"]): DashboardPayload["alerts"] {
  const scanTotal = domains.reduce((sum, domain) => sum + domain.scans, 0);
  const blocked = domains.reduce((sum, domain) => sum + domain.blocked, 0);
  const challenged = domains.reduce((sum, domain) => sum + domain.challenged, 0);
  const alerts: DashboardPayload["alerts"] = [];
  const scanned = domains.filter((domain) => domain.scans > 0);
  if (scanTotal > 0) {
    const worst: SecurityLevel = scanned.some((domain) => domain.probes.some((probe) => probe.severity === "danger")) ? "danger" : "watch";
    const hosts = scanned.slice(0, 3).map((domain) => domain.host).join("、");
    const kinds = new Map<string, number>();
    for (const domain of scanned) {
      for (const kind of domain.kinds) kinds.set(kind.label, (kinds.get(kind.label) ?? 0) + kind.requests);
    }
    const kindText = [...kinds.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([label, count]) => `${label} ${count}`)
      .join("，");
    alerts.push({
      level: worst,
      title: worst === "danger" ? `发现恶意扫描，约 ${scanTotal.toLocaleString("zh-Hans")} 次` : `发现探测请求，约 ${scanTotal.toLocaleString("zh-Hans")} 次`,
      detail: `${hosts} 上有人在试探不存在的路径。${kindText}。`,
    });
  }
  if (blocked > 0) {
    const hosts = domains
      .filter((domain) => domain.blocked > 0)
      .slice(0, 3)
      .map((domain) => `${domain.host} ${domain.blocked.toLocaleString("zh-Hans")}`)
      .join("，");
    alerts.push({
      level: "danger",
      title: `防火墙拦截了约 ${blocked.toLocaleString("zh-Hans")} 次请求`,
      detail: hosts,
    });
  }
  if (challenged > 0) {
    const hosts = domains
      .filter((domain) => domain.challenged > 0)
      .slice(0, 3)
      .map((domain) => `${domain.host} ${domain.challenged.toLocaleString("zh-Hans")}`)
      .join("，");
    alerts.push({
      level: "watch",
      title: `有约 ${challenged.toLocaleString("zh-Hans")} 次机器人质询`,
      detail: `${hosts}。质询多半来自 Bot Fight，和路径扫描分开看。`,
    });
  }
  if (!alerts.length) {
    alerts.push({
      level: "clear",
      title: "没有发现恶意扫描",
      detail: "这段时间没有敏感路径探测，也没有拦截或质询。",
    });
  }
  return alerts;
}

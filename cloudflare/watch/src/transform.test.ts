import assert from "node:assert/strict";
import test from "node:test";
import { buildDashboard, classifyProbe, formatAsn, isStaticAsset, normalizeHost, scale, stripPath, windowFor } from "./transform.ts";

test("scales sampled counts by the sample interval", () => {
  assert.equal(scale(4, 1), 4);
  assert.equal(scale(4, 2.2), 9);
  assert.equal(scale(4, 0), 4);
});

test("drops query strings from paths", () => {
  assert.equal(stripPath("/zh/work?token=secret"), "/zh/work");
  assert.equal(isStaticAsset("/fonts/outfit.woff2"), true);
  assert.equal(isStaticAsset("/zh/work"), false);
});

test("formats asn numbers and ignores empty values", () => {
  assert.equal(formatAsn(13335), "AS13335");
  assert.equal(formatAsn(0), "");
  assert.equal(formatAsn("nope"), "");
});

test("uses daily totals for multi-day ranges and keeps uniques unsummed", () => {
  const payload = buildDashboard({
    range: "7d",
    from: "2026-10-29T00:00:00.000Z",
    to: "2026-11-05T00:00:00.000Z",
    generatedAt: "2026-11-05T00:00:00.000Z",
    series: [],
    hosts: [],
    countries: [],
    statuses: [],
    browsers: [],
    cache: [
      { count: 3, avg: { sampleInterval: 1 }, dimensions: { cacheStatus: "hit" } },
      { count: 1, avg: { sampleInterval: 1 }, dimensions: { cacheStatus: "miss" } },
    ],
    paths: [
      { count: 2, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "www.xuxuclassmate.com", clientRequestPath: "/zh?x=1" } },
      { count: 9, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "www.xuxuclassmate.com", clientRequestPath: "/app.css" } },
    ],
    daily: [
      { dimensions: { date: "2026-11-04" }, sum: { requests: 10, bytes: 100, pageViews: 4, threats: 1 }, uniq: { uniques: 3 } },
      { dimensions: { date: "2026-11-05" }, sum: { requests: 7, bytes: 70, pageViews: 2, threats: 0 }, uniq: { uniques: 5 } },
    ],
    visitors: [],
    recent: [
      { datetime: "2026-11-05T01:00:00Z", clientIP: "203.0.113.10", clientRequestPath: "/app.css", clientAsn: 1 },
      { datetime: "2026-11-05T02:00:00Z", clientIP: "203.0.113.11", clientRequestPath: "/zh/work", clientAsn: 64500, edgeResponseStatus: 200 },
    ],
    logs: [
      { datetime: "2026-11-05T03:00:00Z", clientIP: "203.0.113.20", clientAsn: 13335, clientASNDescription: "Cloudflare", clientRequestHTTPHost: "nas.xuxuclassmate.com:443", clientRequestHTTPMethodName: "GET", clientRequestPath: "/home/login?from=/home", clientRequestScheme: "https", clientRequestHTTPProtocol: "HTTP/2", clientRequestReferer: "https://www.xuxuclassmate.com/zh?from=home", edgeResponseStatus: 200, edgeResponseContentTypeName: "html", edgeResponseBytes: 1200, cacheStatus: "miss" },
      { datetime: "2026-11-05T03:01:00Z", clientRequestHTTPHost: "watch.xuxuclassmate.com", clientRequestHTTPMethodName: "GET", clientRequestPath: "/app.css", edgeResponseStatus: 200 },
    ],
    threats: [],
  });

  assert.equal(payload.kpis.requests, 17);
  assert.equal(payload.kpis.bytes, 170);
  assert.equal(payload.kpis.visits, 6);
  assert.equal(payload.kpis.uniques, 5);
  assert.equal(payload.kpis.cacheHitRate, 0.75);
  assert.equal(payload.kpis.scans, 0);
  assert.equal(payload.paths.length, 1);
  assert.equal(payload.paths[0]?.path, "/zh");
  assert.equal(payload.recent.length, 1);
  assert.equal(payload.recent[0]?.asn, "AS64500");
  assert.equal(payload.logs.length, 2);
  assert.equal(payload.logs[0]?.host, "nas.xuxuclassmate.com");
  assert.equal(payload.logs[0]?.path, "/home/login");
  assert.equal(payload.logs[0]?.referer, "https://www.xuxuclassmate.com/zh");
  assert.equal(payload.logs[0]?.bytes, 1200);
  assert.equal(payload.logs[0]?.protocol, "HTTP/2");
  assert.ok(payload.logs[0]?.ip);
  assert.equal(payload.logs[1]?.path, "/app.css");
  assert.equal(windowFor("24h", new Date("2026-11-05T12:00:00.000Z")).start, "2026-11-04T12:00:00.000Z");
});

test("classifies malicious probes and groups them by domain", () => {
  assert.equal(normalizeHost("Mail.xuxuclassmate.com:443"), "mail.xuxuclassmate.com");
  assert.equal(classifyProbe("/zh/work")?.kind, undefined);
  assert.equal(classifyProbe("/.env")?.severity, "danger");
  assert.equal(classifyProbe("/admin%2F.env")?.label, "敏感文件");
  assert.equal(classifyProbe("/wp-login.php")?.label, "后台探测");

  const payload = buildDashboard({
    range: "24h",
    from: "2026-11-04T00:00:00.000Z",
    to: "2026-11-05T00:00:00.000Z",
    generatedAt: "2026-11-05T00:00:00.000Z",
    series: [],
    hosts: [
      { count: 10, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "xuxuclassmate.com" } },
      { count: 2, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "xuxuclassmate.com:443" } },
      { count: 4, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "www.xuxuclassmate.com" } },
    ],
    countries: [],
    statuses: [],
    browsers: [],
    cache: [],
    paths: [
      { count: 8, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "www.xuxuclassmate.com", clientRequestPath: "/" } },
      { count: 3, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "xuxuclassmate.com", clientRequestPath: "/.env" } },
    ],
    daily: [],
    probes: [
      { count: 5, avg: { sampleInterval: 2 }, dimensions: { clientRequestHTTPHost: "xuxuclassmate.com", clientRequestPath: "/.env" } },
      { count: 9, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "xuxuclassmate.com:80", clientRequestPath: "/.env" } },
      { count: 4, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "mail.xuxuclassmate.com", clientRequestPath: "/.git/config" } },
    ],
    actions: [
      { count: 3, avg: { sampleInterval: 1 }, dimensions: { clientRequestHTTPHost: "pulse.xuxuclassmate.com", securityAction: "block" } },
    ],
    visitors: [],
    recent: [],
    threats: [{ action: "link_maze_injected", clientRequestPath: "/", clientRequestHTTPHost: "www.xuxuclassmate.com" }],
  });

  const apex = payload.domains.find((domain) => domain.host === "xuxuclassmate.com");
  assert.equal(apex?.requests, 12);
  assert.equal(apex?.scans, 10);
  assert.equal(apex?.level, "danger");
  assert.equal(apex?.probes.length, 1);
  assert.equal(payload.paths.some((row) => row.path === "/.env"), false);
  assert.equal(payload.kpis.blocked, 3);
  assert.equal(payload.alerts[0]?.level, "danger");
  assert.equal(payload.threats.length, 0);
  assert.equal(payload.domains.find((domain) => domain.host === "www.xuxuclassmate.com")?.pages[0]?.path, "/");
});

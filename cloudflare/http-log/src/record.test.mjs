import assert from "node:assert/strict";
import test from "node:test";
import { headerValue, requestPath, responseHeaders, splitHeaders } from "./record.mjs";

test("keeps the path and drops the query", () => {
  assert.equal(requestPath(new URL("https://www.xuxuclassmate.com/zh/about?from=home")), "/zh/about");
});

test("redacts secrets and strips referer queries", () => {
  assert.equal(headerValue("cookie", "session=secret"), "[redacted]");
  assert.equal(headerValue("authorization", "Bearer secret"), "[redacted]");
  assert.equal(headerValue("referer", "https://www.xuxuclassmate.com/zh?x=1"), "https://www.xuxuclassmate.com/zh");
});

test("splits client headers from edge headers", () => {
  const headers = new Headers({
    Accept: "text/html",
    Cookie: "a=b",
    "CF-IPCountry": "US",
  });
  const split = splitHeaders(headers);
  assert.deepEqual(split.client.find(([name]) => name === "accept"), ["accept", "text/html"]);
  assert.equal(split.client.find(([name]) => name === "cookie")?.[1], "[redacted]");
  assert.equal(split.edge.find(([name]) => name === "cf-ipcountry")?.[1], "US");
});

test("keeps response header names", () => {
  const headers = new Headers({ "Content-Type": "text/html; charset=utf-8", "Set-Cookie": "sid=secret" });
  const rows = responseHeaders(headers);
  assert.equal(rows.find(([name]) => name === "content-type")?.[1], "text/html; charset=utf-8");
  assert.equal(rows.find(([name]) => name === "set-cookie")?.[1], "[redacted]");
});

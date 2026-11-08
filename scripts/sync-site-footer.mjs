import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SITE_FOOTER_CSS,
  SITE_FOOTER_DUAL_HTML,
  SITE_FOOTER_GEO_SCRIPT,
} from "../cloudflare/shared/site-footer.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const watchPublic = path.join(root, "cloudflare/watch/public");
const indexPath = path.join(watchPublic, "index.html");
const marker =
  "    <!-- synced from cloudflare/shared/site-footer.mjs — npm run sync:site-footer -->";

fs.writeFileSync(path.join(watchPublic, "site-footer.css"), SITE_FOOTER_CSS.trimStart());
fs.writeFileSync(path.join(watchPublic, "site-footer.html"), SITE_FOOTER_DUAL_HTML);
fs.writeFileSync(path.join(watchPublic, "site-footer-geo.js"), SITE_FOOTER_GEO_SCRIPT.trim());

const idx = fs.readFileSync(indexPath, "utf8");
const footerStart = idx.indexOf(marker);
if (footerStart === -1) {
  throw new Error(`Marker not found in ${indexPath}`);
}
const afterMarker = idx.indexOf("\n", footerStart) + 1;
const scriptStart = idx.indexOf('    <script src="/site-footer-geo.js"', afterMarker);
if (scriptStart === -1) {
  throw new Error("site-footer-geo.js script tag not found");
}
const next =
  idx.slice(0, afterMarker) + SITE_FOOTER_DUAL_HTML + "\n" + idx.slice(scriptStart);
fs.writeFileSync(indexPath, next);
console.log("Synced site footer to cloudflare/watch/public");

import { rename } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

/** Astro file format emits en.html / zh.html; legacy URLs need locale/index.html. */
function localeIndexPages() {
  return {
    name: "locale-index-pages",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const root = fileURLToPath(dir);
        for (const locale of ["en", "zh"]) {
          await rename(
            join(root, `${locale}.html`),
            join(root, locale, "index.html"),
          );
        }
      },
    },
  };
}

export default defineConfig({
  site: "https://www.xuxuclassmate.com",
  build: {
    format: "file",
  },
  integrations: [localeIndexPages()],
});

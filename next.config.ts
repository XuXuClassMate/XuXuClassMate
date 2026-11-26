import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is fully prerendered content, so it ships as
  // static HTML to Cloudflare Pages. (cacheComponents / PPR are dynamic
  // features and are incompatible with output: "export".)
  // JS 目标见 package.json browserslist:默认 safari 16.4 会让 iOS 15/16.0–16.3
  //（含 iPhone 11 上的 Chrome,内核仍是 WebKit）解析失败,页面能看但不能点。
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

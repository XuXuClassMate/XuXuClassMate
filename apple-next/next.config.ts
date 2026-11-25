import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is fully prerendered content, so it ships as
  // static HTML to Cloudflare Pages. (cacheComponents / PPR are dynamic
  // features and are incompatible with output: "export".)
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

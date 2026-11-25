import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { NOTES } from "@/lib/notes";

const BASE = "https://www.xuxuclassmate.com";

// Static export friendly: emitted as /sitemap.xml at build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/ai-workflow",
    "/notes",
    "/open-source",
  ].map(
    (path) => ({
      url: `${BASE}${path || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const noteRoutes = NOTES.map((n) => ({
    url: `${BASE}/notes/${n.slug}`,
    lastModified: new Date(n.date + "T00:00:00Z"),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...noteRoutes];
}

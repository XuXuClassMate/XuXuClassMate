import type { MetadataRoute } from "next";

// Static export friendly: emitted as /robots.txt at build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.xuxuclassmate.com/sitemap.xml",
    host: "https://www.xuxuclassmate.com",
  };
}

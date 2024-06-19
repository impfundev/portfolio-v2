import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://ilhammaulana.me/sitemap.xml",
      "https://ilhammaulana.me/projects/sitemap.xml",
      "https://ilhammaulana.me/blog/sitemap.xml",
    ],
  };
}

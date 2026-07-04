import type { MetadataRoute } from "next";
import { capabilities } from "@/data/capabilities";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/capabilities", "/industries", "/approach", "/about", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const capabilityRoutes = capabilities.map((c) => ({
    url: `${site.url}/capabilities/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...capabilityRoutes];
}

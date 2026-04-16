import type { MetadataRoute } from "next";
import { toolConfigs } from "@/data/tools";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tools.rankflowhq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/tools`,
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = toolConfigs.map((tool) => ({
    url: `${siteUrl}/tools/${tool.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...baseRoutes, ...toolRoutes];
}

import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://martial-oyaga.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

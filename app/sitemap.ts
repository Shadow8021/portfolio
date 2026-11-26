import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

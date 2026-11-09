import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.href,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

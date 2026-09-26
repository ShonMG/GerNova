import type { MetadataRoute } from "next";

const BASE_URL = "https://gernova.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      url: BASE_URL,
      priority: 1,
      changeFrequency: "weekly" as const,
    },

    {
      url: `${BASE_URL}/about-us`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },

    {
      url: `${BASE_URL}/services`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    {
      url: `${BASE_URL}/portfolio`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    {
      url: `${BASE_URL}/pricing`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${BASE_URL}/contact`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  return pages.map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
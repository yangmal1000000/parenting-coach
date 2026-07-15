import type { MetadataRoute } from "next";
import { LEARN_TOPICS } from "@/lib/learn-topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://parentkin.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ko`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/learn`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const learnRoutes: MetadataRoute.Sitemap = LEARN_TOPICS.map((topic) => ({
    url: `${base}/learn/${topic.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...learnRoutes];
}

import { MetadataRoute } from "next";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;
  const now = new Date();

  const staticPages = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/locations`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...locationPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}

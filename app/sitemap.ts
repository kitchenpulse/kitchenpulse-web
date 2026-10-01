import type { MetadataRoute } from "next";
import { EQUIPMENT_PATHS } from "@/lib/equipment/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kitchenpulse.in";
  const lastModified = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/MainSection`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    {
      url: `${base}/services/fnb-launch-consulting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/commercial-kitchen-fit-out`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/commercial-kitchen-equipment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/kitchen-hvac`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${base}/testimonials`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const equipment: MetadataRoute.Sitemap = EQUIPMENT_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/equipment" ? 0.85 : 0.75,
  }));

  return [...core, ...equipment];
}

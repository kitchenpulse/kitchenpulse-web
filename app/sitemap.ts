import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kitchenpulse.in";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/MainSection`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, lastModified, changeFrequency: "weekly", priority: 0.85 },
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
}

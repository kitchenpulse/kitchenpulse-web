import type { Metadata } from "next";
import type { EquipmentPageData } from "./types";

const SITE = "https://kitchenpulse.in";

export function equipmentPath(slug: string) {
  return slug === "" ? "/equipment" : `/equipment/${slug}`;
}

export function buildEquipmentMetadata(page: EquipmentPageData): Metadata {
  const path = equipmentPath(page.slug);
  const ogTitle = page.title.includes("Kitchen Pulse")
    ? page.title
    : `${page.title} | Kitchen Pulse`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: page.metaDescription,
      url: `${SITE}${path}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.metaDescription,
      images: ["/og-image.jpg"],
    },
  };
}

import type { Metadata } from "next";
import { SITE } from "./constants";

export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const ogTitle = title.includes("Kitchen Pulse")
    ? title
    : `${title} | Kitchen Pulse`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE}${path}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationHubView from "@/components/locations/LocationHubView";
import { getCity, getCitySlugs } from "@/lib/locations";
import { cityPath } from "@/lib/locations/constants";
import { buildPageMetadata } from "@/lib/locations/metadata";

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return getCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const page = getCity(city);
  if (!page) return {};
  return buildPageMetadata(page.title, page.metaDescription, cityPath(page.slug));
}

export default async function CityHubPage({ params }: Props) {
  const { city } = await params;
  const page = getCity(city);
  if (!page) notFound();
  return <LocationHubView city={page} />;
}

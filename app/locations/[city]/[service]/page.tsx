import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationServiceView from "@/components/locations/LocationServiceView";
import { getCity, getCitySlugs, isServiceSlug } from "@/lib/locations";
import { SERVICE_SLUGS } from "@/lib/locations/types";
import { cityServicePath } from "@/lib/locations/constants";
import { buildPageMetadata } from "@/lib/locations/metadata";

type Props = {
  params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
  return getCitySlugs().flatMap((city) =>
    SERVICE_SLUGS.map((service) => ({ city, service })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  if (!isServiceSlug(service)) return {};
  const page = getCity(city);
  if (!page) return {};
  const data = page.services[service];
  return buildPageMetadata(
    data.title,
    data.metaDescription,
    cityServicePath(page.slug, service),
  );
}

export default async function CityServicePage({ params }: Props) {
  const { city, service } = await params;
  if (!isServiceSlug(service)) notFound();
  const page = getCity(city);
  if (!page) notFound();
  return <LocationServiceView city={page} service={service} />;
}

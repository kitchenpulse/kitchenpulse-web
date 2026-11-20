import type { CityPage, LocationRegion, ServiceSlug } from "./types";
import { SERVICE_SLUGS } from "./types";
import { REGION_ORDER, cityPath, cityServicePath } from "./constants";
import { CITIES } from "./cities";

export { CITIES };
export { SERVICE_SLUGS } from "./types";
export type { CityPage, ServiceSlug } from "./types";

export function getCity(slug: string): CityPage | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export function getCitySlugs(): string[] {
  return CITIES.map((city) => city.slug);
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function citiesByRegion(): Record<LocationRegion, CityPage[]> {
  return Object.fromEntries(
    REGION_ORDER.map((region) => [
      region,
      CITIES.filter((city) => city.region === region),
    ]),
  ) as Record<LocationRegion, CityPage[]>;
}

export function listLocationPaths(): string[] {
  const paths = ["/locations"];
  for (const city of CITIES) {
    paths.push(cityPath(city.slug));
    for (const service of SERVICE_SLUGS) {
      paths.push(cityServicePath(city.slug, service));
    }
  }
  return paths;
}

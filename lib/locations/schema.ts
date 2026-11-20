import type { CityPage, CityServicePage, FaqItem, ServiceSlug } from "./types";
import { SERVICE_LABELS, SITE, cityPath, cityServicePath } from "./constants";

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function cityServiceJsonLd(
  city: CityPage,
  service: ServiceSlug,
  page: CityServicePage,
) {
  const path = cityServicePath(city.slug, service);
  const labels = SERVICE_LABELS[service];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${labels.schemaName} in ${city.name}`,
    url: `${SITE}${path}`,
    serviceType: labels.label,
    description: page.metaDescription,
    provider: { "@id": `${SITE}/#organization` },
    brand: { "@id": `${SITE}/#organization` },
    areaServed: {
      "@type": city.slug === "goa" ? "State" : "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
        containedInPlace: { "@type": "Country", name: "India" },
      },
    },
  };
}

export function cityHubJsonLd(city: CityPage) {
  const path = cityPath(city.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Commercial kitchen fit-out, equipment, and HVAC in ${city.name}`,
    url: `${SITE}${path}`,
    serviceType: "Commercial kitchen contractor",
    description: city.metaDescription,
    provider: { "@id": `${SITE}/#organization` },
    brand: { "@id": `${SITE}/#organization` },
    areaServed: {
      "@type": city.slug === "goa" ? "State" : "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
        containedInPlace: { "@type": "Country", name: "India" },
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Kitchen Pulse services in ${city.name}`,
      itemListElement: (Object.keys(SERVICE_LABELS) as ServiceSlug[]).map(
        (slug) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${SERVICE_LABELS[slug].schemaName} in ${city.name}`,
            url: `${SITE}${cityServicePath(city.slug, slug)}`,
          },
        }),
      ),
    },
  };
}

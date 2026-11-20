export const SERVICE_SLUGS = [
  "kitchen-hvac",
  "commercial-kitchen-equipment",
  "commercial-kitchen-fit-out",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type LocationRegion = "west" | "north" | "south" | "east" | "central";

export type FaqItem = {
  q: string;
  a: string;
};

export type NamedNote = {
  title: string;
  body: string;
};

export type CityServicePage = {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  contextHeading: string;
  contextBody: string;
  areasIntro: string;
  scopeHeading: string;
  scope: NamedNote[];
  processHeading: string;
  process: NamedNote[];
  moreHeading: string;
  moreBody: string;
  faqs: FaqItem[];
  ctaHeading: string;
  ctaBody: string;
  snapshots: NamedNote[];
};

export type CityPage = {
  slug: string;
  name: string;
  state: string;
  region: LocationRegion;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  indexBlurb: string;
  contextHeading: string;
  contextBody: string;
  areasHeading: string;
  areas: NamedNote[];
  howWeWorkHeading: string;
  howWeWorkBody: string;
  serviceHooks: Record<ServiceSlug, string>;
  faqs: FaqItem[];
  ctaHeading: string;
  ctaBody: string;
  nearby: string[];
  services: Record<ServiceSlug, CityServicePage>;
};

import type { LocationRegion, ServiceSlug } from "./types";

export const SITE = "https://kitchenpulse.in";

export const CONTACT_EMAIL = "info@kitchenpulse.in";
export const CONTACT_PHONE_DISPLAY = "+91 91676 36653";

export const NAP_LOCALITY = "Navi Mumbai";
export const NAP_REGION = "Maharashtra";
export const NAP_COUNTRY = "IN";
export const NAP_POSTAL = "410209";
export const NAP_STREET =
  "Shop No-01, Sai Charan CO HSG, Plot No-106 & 107, Sec-21, Kamothe";

export const SERVICE_LABELS: Record<
  ServiceSlug,
  { label: string; shortLabel: string; nationalPath: string; schemaName: string }
> = {
  "kitchen-hvac": {
    label: "Kitchen HVAC & exhaust",
    shortLabel: "HVAC",
    nationalPath: "/services/kitchen-hvac",
    schemaName: "Commercial Kitchen HVAC and Exhaust",
  },
  "commercial-kitchen-equipment": {
    label: "Commercial kitchen equipment",
    shortLabel: "Equipment",
    nationalPath: "/services/commercial-kitchen-equipment",
    schemaName: "Commercial Kitchen Equipment Supply",
  },
  "commercial-kitchen-fit-out": {
    label: "Commercial kitchen fit-out",
    shortLabel: "Fit-out",
    nationalPath: "/services/commercial-kitchen-fit-out",
    schemaName: "Commercial Kitchen Fit-Out",
  },
};

export const EQUIPMENT_LINKS = [
  { href: "/equipment", label: "Equipment guides" },
  { href: "/equipment/cooking", label: "Cooking line" },
  { href: "/equipment/refrigeration", label: "Refrigeration" },
  { href: "/equipment/prep", label: "Prep equipment" },
  { href: "/equipment/warewash", label: "Warewash" },
] as const;

export const REGION_LABELS: Record<LocationRegion, string> = {
  west: "West",
  north: "North",
  south: "South",
  east: "East",
  central: "Central",
};

export const REGION_ORDER: LocationRegion[] = [
  "west",
  "north",
  "south",
  "east",
  "central",
];

export function cityPath(slug: string) {
  return `/locations/${slug}`;
}

export function cityServicePath(slug: string, service: ServiceSlug) {
  return `/locations/${slug}/${service}`;
}

export function whatsappForCity(cityName: string, service?: string) {
  if (service) {
    return `Hi! I'd like to discuss ${service} in ${cityName} with Kitchen Pulse.`;
  }
  return `Hi! I'd like to discuss a commercial kitchen project in ${cityName} with Kitchen Pulse.`;
}

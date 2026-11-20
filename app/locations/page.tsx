import type { Metadata } from "next";
import LocationsIndexView from "@/components/locations/LocationsIndexView";
import { buildPageMetadata } from "@/lib/locations/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Cities We Serve — Kitchen Fit-Out, Equipment & HVAC",
  "Commercial kitchen fit-out, equipment supply, and kitchen HVAC for restaurants and cloud kitchens in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and other major Indian cities.",
  "/locations",
);

export default function LocationsPage() {
  return <LocationsIndexView />;
}

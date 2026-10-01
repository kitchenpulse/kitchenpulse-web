import type { Metadata } from "next";
import HeroSection from "@/components/HeroPage/HeroSection";
import ServicesSection from "@/components/HeroPage/ServicesSection";
import WhyChooseSection from "@/components/HeroPage/WhyChooseSection";

export const metadata: Metadata = {
  title: {
    absolute: "Kitchen Pulse | Turnkey F&B Kitchen Setup & Scale Across India",
  },
  description:
    "One partner for restaurant & cloud kitchen setup — real estate, civil, HVAC, equipment, staffing & aggregator growth. Mumbai-based, pan-India. 25–30% cost savings.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kitchen Pulse | Turnkey F&B Kitchen Setup & Scale Across India",
    description:
      "One partner for restaurant & cloud kitchen setup — real estate, civil, HVAC, equipment, staffing & aggregator growth across India.",
    url: "https://kitchenpulse.in/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Pulse — turnkey F&B kitchen setup across India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Pulse | Turnkey F&B Kitchen Setup & Scale Across India",
    description:
      "One partner for restaurant & cloud kitchen setup across India.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
    </main>
  );
}

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

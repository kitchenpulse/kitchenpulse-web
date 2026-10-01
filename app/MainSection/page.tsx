import type { Metadata } from "next";
import StrategicLocationIntelligenceSection from "@/components/InfrastructureAndSetup/StrategicLocationIntelligenceSection";
import CulinarySection from "@/components/InfrastructureAndSetup/CulinaryAndOperations";
import TalentSection from "@/components/InfrastructureAndSetup/TalentAndTrainingSection";
import DigitalSection from "@/components/InfrastructureAndSetup/DigitalAndGrowthSection";
import InfrastructureSetupSection from "@/components/InfrastructureAndSetup/LocationIntelligence";
import { ServiceCtaBand } from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "F&B Services | Real Estate, Kitchen Fit-Out, Staffing & Digital",
  description:
    "Modular F&B services: restaurant real estate, civil & HVAC, commercial kitchen equipment, talent, and Zomato/Swiggy/Blinkit growth — coordinated under one team.",
  alternates: { canonical: "/MainSection" },
  openGraph: {
    title: "F&B Modular Services | Real Estate, Fit-Out, Staffing & Digital",
    description:
      "Restaurant real estate, kitchen infrastructure, talent, and aggregator growth — coordinated under one Kitchen Pulse team across India.",
    url: "https://kitchenpulse.in/MainSection",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Pulse modular F&B services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "F&B Modular Services | Real Estate, Fit-Out, Staffing & Digital",
    description:
      "Real estate, kitchen infrastructure, talent, and digital growth under one team.",
    images: ["/og-image.jpg"],
  },
};

export default function MainSection() {
  return (
    <main className="w-full">
      <section id="location">
        <StrategicLocationIntelligenceSection />
      </section>

      <section id="culinary">
        <CulinarySection />
      </section>

      <section id="talent">
        <TalentSection />
      </section>

      <section id="digital">
        <DigitalSection />
      </section>

      <section id="infrastructure">
        <InfrastructureSetupSection />
      </section>

      <ServiceCtaBand
        heading="Ready to scope your next kitchen?"
        body="Share your city, format, and timeline — we'll map real estate, fit-out, staffing, or digital support to match."
        whatsappMessage="Hi! I'd like to discuss Kitchen Pulse modular F&B services."
      />
    </main>
  );
}

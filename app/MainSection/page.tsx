import type { Metadata } from "next";
import StrategicLocationIntelligenceSection from "@/components/InfrastructureAndSetup/StrategicLocationIntelligenceSection";
import CulinarySection from "@/components/InfrastructureAndSetup/CulinaryAndOperations";
import TalentSection from "@/components/InfrastructureAndSetup/TalentAndTrainingSection";
import DigitalSection from "@/components/InfrastructureAndSetup/DigitalAndGrowthSection";
import InfrastructureSetupSection from "@/components/InfrastructureAndSetup/LocationIntelligence";

export const metadata: Metadata = {
  title: "F&B Services | Real Estate, Kitchen Fit-Out, Staffing & Digital",
  description:
    "Modular F&B services: restaurant real estate, civil & HVAC, commercial kitchen equipment, talent, and Zomato/Swiggy/Blinkit growth — coordinated under one team.",
  alternates: { canonical: "/MainSection" },
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
    </main>
  );
}

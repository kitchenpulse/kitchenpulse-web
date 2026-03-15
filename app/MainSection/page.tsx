// app/MainSection/page.tsx

import StrategicLocationIntelligenceSection from "@/components/InfrastructureAndSetup/StrategicLocationIntelligenceSection";

import CulinarySection from "@/components/InfrastructureAndSetup/CulinaryAndOperations";
import TalentSection from "@/components/InfrastructureAndSetup/DigitalAndGrowthSection";
import DigitalSection from "@/components/InfrastructureAndSetup/TalentAndTrainingSection";

export default function MainSection() {
  return (
    <main className="w-full">
      {/* Infrastructure & Setup */}
      <section id="infrastructure">
        <StrategicLocationIntelligenceSection/>
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
    </main>
  );
}

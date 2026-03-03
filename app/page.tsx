import HeroSection from "@/components/HeroPage/HeroSection";
import ProcessSection from "@/components/HeroPage/ProcessSection";
import ServicesSection from "@/components/HeroPage/ServicesSection";
import WhyChooseSection from "@/components/HeroPage/WhyChooseSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">

   <HeroSection />
   <ServicesSection />
   <WhyChooseSection/>
   <ProcessSection/>
      
    </main>
  );
}
// app/about/page.tsx

import OurApproachSection from "@/components/AboutPage/OurApproachSection";
import OurValuesSection from "@/components/AboutPage/OurValues";
import WhoWeAre from "@/components/AboutPage/WhoWeAre";


export default function AboutPage() {
  return (
    <main className="w-full">
      <WhoWeAre />
      {/* <OurValuesSection/>
      <OurApproachSection/> */}
    </main>
  );
}

// app/about/page.tsx

import OurApproachSection from "@/components/AboutPage/OurApproachSection";
import LogoStrip from "@/components/Testimonials/logoStrip";

import Testimonials from "@/components/Testimonials/Testimonials";


export default function TestimonialsPage() {
  return (
    <main className="w-full">
      <LogoStrip />
      <Testimonials/>
    </main>
  );
}

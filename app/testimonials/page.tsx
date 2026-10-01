import type { Metadata } from "next";
import LogoStrip from "@/components/Testimonials/logoStrip";
import Testimonials from "@/components/Testimonials/Testimonials";

export const metadata: Metadata = {
  title: "Client Stories | Kitchen Pulse F&B Brand Partners",
  description:
    "See how F&B brands work with Kitchen Pulse on real estate, kitchen fit-out, equipment and growth — from first outlet to multi-city scale.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main className="w-full">
      <LogoStrip />
      <Testimonials />
    </main>
  );
}

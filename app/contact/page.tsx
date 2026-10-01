import type { Metadata } from "next";
import ContactSection from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Kitchen Pulse | Book a Demo — Navi Mumbai",
  description:
    "Talk to Kitchen Pulse about restaurant or cloud kitchen setup. Email info@kitchenpulse.in or call +91 91676 36653. Kamothe, Navi Mumbai — pan-India delivery.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactSection />
    </main>
  );
}

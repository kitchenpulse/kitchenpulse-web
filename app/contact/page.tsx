import type { Metadata } from "next";
import ContactSection from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Kitchen Pulse | Book a Demo — Navi Mumbai",
  description:
    "Talk to Kitchen Pulse about restaurant or cloud kitchen setup. Email info@kitchenpulse.in or call +91 91676 36653. Kamothe, Navi Mumbai — pan-India delivery.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Kitchen Pulse | Book a Consult — Navi Mumbai",
    description:
      "Email info@kitchenpulse.in or call +91 91676 36653. Kamothe, Navi Mumbai — pan-India kitchen setup support.",
    url: "https://kitchenpulse.in/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kitchen Pulse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kitchen Pulse | Book a Consult — Navi Mumbai",
    description:
      "Talk to Kitchen Pulse about restaurant or cloud kitchen setup across India.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactSection />
    </main>
  );
}

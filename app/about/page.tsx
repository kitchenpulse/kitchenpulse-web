import type { Metadata } from "next";
import WhoWeAre from "@/components/AboutPage/WhoWeAre";

export const metadata: Metadata = {
  title: "About Kitchen Pulse | F&B & Cloud Kitchen Growth Partner",
  description:
    "Kitchen Pulse helps F&B and D2C brands go from bare shell to multi-city scale. Meet the team behind turnkey kitchen fit-outs, sourcing, talent and digital growth.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kitchen Pulse | F&B & Cloud Kitchen Growth Partner",
    description:
      "Meet the Navi Mumbai team behind turnkey kitchen fit-outs, equipment, HVAC, talent and digital growth for F&B brands across India.",
    url: "https://kitchenpulse.in/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Kitchen Pulse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kitchen Pulse | F&B & Cloud Kitchen Growth Partner",
    description:
      "From bare shell to multi-city scale — the team behind Kitchen Pulse.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <WhoWeAre />
    </main>
  );
}

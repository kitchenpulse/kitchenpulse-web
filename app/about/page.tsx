import type { Metadata } from "next";
import WhoWeAre from "@/components/AboutPage/WhoWeAre";

export const metadata: Metadata = {
  title: "About Kitchen Pulse | F&B & Cloud Kitchen Growth Partner",
  description:
    "Kitchen Pulse helps F&B and D2C brands go from bare shell to multi-city scale. Meet the team behind turnkey kitchen fit-outs, sourcing, talent and digital growth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <WhoWeAre />
    </main>
  );
}

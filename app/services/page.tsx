import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "F&B Services | Kitchen Fit-Out, Real Estate & Growth",
  description:
    "Kitchen Pulse F&B services — commercial kitchen fit-out, real estate, HVAC, equipment, staffing, and aggregator growth across India.",
  alternates: { canonical: "/services" },
};

const LINKS = [
  {
    href: "/services/commercial-kitchen-fit-out",
    title: "Commercial kitchen fit-out",
    body: "Turnkey civil, HVAC, equipment, and handover for restaurants and cloud kitchens.",
  },
  {
    href: "/MainSection#location",
    title: "Real estate sourcing",
    body: "F&B location intelligence across tier 2 & 3 cities.",
  },
  {
    href: "/MainSection#infrastructure",
    title: "Infrastructure & HVAC",
    body: "Civil works and kitchen exhaust systems nationwide.",
  },
  {
    href: "/MainSection#talent",
    title: "Talent & training",
    body: "Kitchen and FOH hiring support for multi-city brands.",
  },
  {
    href: "/MainSection#digital",
    title: "Digital & aggregator growth",
    body: "Zomato, Swiggy, Blinkit and broader digital marketing.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-28 md:pt-32">
      <h1
        className="text-4xl font-black tracking-tight md:text-5xl"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        F&B services built to scale
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-[#6b6560]">
        Modular support from first outlet to multi-city rollout — start with the
        service you need, or run the full Kitchen Pulse stack.
      </p>
      <ul className="mt-12 space-y-4">
        {LINKS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-md border border-black/10 bg-white p-5 transition hover:border-orange-500/40"
            >
              <h2 className="text-lg font-semibold text-[#1a1714]">{item.title}</h2>
              <p className="mt-1 text-sm text-[#6b6560]">{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

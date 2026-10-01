import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "F&B Services | Fit-Out, Equipment, HVAC & Launch Consulting",
  description:
    "Kitchen Pulse F&B services — cloud kitchen consulting for new founders, commercial kitchen fit-out, equipment, and HVAC across India. Staffing and aggregator growth available as add-ons.",
  alternates: { canonical: "/services" },
};

const PRIMARY = [
  {
    href: "/services/cloud-kitchen-consulting",
    title: "Cloud kitchen consulting",
    body: "For new founders — idea to first order: concept, menu, kitchen flow, SOPs, tech, aggregator onboarding, and go-live. Pan-India.",
    badge: "For new founders",
  },
  {
    href: "/services/commercial-kitchen-fit-out",
    title: "Commercial kitchen fit-out",
    body: "Turnkey civil, HVAC, equipment, and handover for restaurants and cloud kitchens — bare shell to service-ready.",
  },
  {
    href: "/services/commercial-kitchen-equipment",
    title: "Commercial kitchen equipment",
    body: "Layout-first cooking, cold, prep, and custom stainless supply — sized to menu volume and utilities.",
  },
  {
    href: "/services/kitchen-hvac",
    title: "Kitchen HVAC & exhaust",
    body: "Exhaust, fresh air, and comfort cooling designed as one system for high-heat F&B kitchens.",
  },
];

const SECONDARY = [
  {
    href: "/MainSection#location",
    title: "Real estate sourcing",
    body: "F&B location intelligence across tier 2 & 3 cities.",
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
      <p className="mt-5 max-w-2xl text-lg text-[#a8a29a]">
        Launch consulting for new founders, plus commercial kitchen fit-out,
        equipment, and HVAC — pan-India from our Navi Mumbai base. Staffing and
        aggregator support remain available as secondary add-ons.
      </p>

      <h2 className="mt-14 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
        Primary services
      </h2>
      <ul className="mt-4 space-y-4">
        {PRIMARY.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-md border border-white/10 bg-[#171614] p-5 transition hover:border-orange-500/40"
            >
              {"badge" in item && item.badge ? (
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-orange-500">
                  {item.badge}
                </p>
              ) : null}
              <h3 className="text-lg font-semibold text-[#f2efe9]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#a8a29a]">{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-xs font-medium uppercase tracking-[0.18em] text-[#7a746e]">
        Additional support
      </h2>
      <ul className="mt-4 space-y-3">
        {SECONDARY.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-md border border-white/[0.06] bg-[#0f0e0d] p-4 transition hover:border-white/15"
            >
              <h3 className="text-base font-medium text-[#f2efe9]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#7a746e]">{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

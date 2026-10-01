import type { Metadata } from "next";
import Link from "next/link";
import { CtaGroup } from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "F&B Services | Fit-Out, Equipment, HVAC & Launch Consulting",
  description:
    "Kitchen Pulse F&B services — launch consulting for new founders across QSR, restaurants, and cloud kitchens, plus commercial kitchen fit-out, equipment, and HVAC across India. Staffing and aggregator growth available as add-ons.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "F&B Services | Fit-Out, Equipment, HVAC & Launch Consulting",
    description:
      "Launch consulting, commercial kitchen fit-out, equipment, and HVAC — plus staffing and aggregator growth add-ons across India.",
    url: "https://kitchenpulse.in/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Pulse F&B services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "F&B Services | Fit-Out, Equipment, HVAC & Launch Consulting",
    description:
      "Launch consulting, fit-out, equipment, and HVAC for F&B brands across India.",
    images: ["/og-image.jpg"],
  },
};

const PRIMARY = [
  {
    href: "/services/fnb-launch-consulting",
    title: "F&B launch consulting",
    body: "For new founders — idea to first order across QSR, restaurants, dine-in, cloud kitchens, and delivery-first brands. Concept, menu, kitchen flow, SOPs, tech, and go-live. Pan-India.",
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
    <main className="w-full bg-[#0f0e0d] text-[#f2efe9]">
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-28 md:pt-32 md:pb-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          Services
        </p>
        <h1
          className="text-4xl font-black tracking-tight md:text-5xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          F&B services built to scale
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          Launch consulting for new founders across formats, plus commercial
          kitchen fit-out, equipment, and HVAC — pan-India from our Navi Mumbai
          base. Staffing and aggregator support remain available as secondary
          add-ons.
        </p>
        <CtaGroup
          className="mt-8"
          whatsappMessage="Hi! I'd like to discuss Kitchen Pulse services."
          primaryLabel="Book a consultation"
          showServices={false}
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 md:pb-16">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          Primary services
        </h2>
        <ul className="mt-6 space-y-4">
          {PRIMARY.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md border border-white/[0.12] bg-[#171614] p-6 transition hover:border-orange-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                {"badge" in item && item.badge ? (
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-orange-500">
                    {item.badge}
                  </p>
                ) : null}
                <h3
                  className="text-lg font-semibold text-[#f2efe9]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                  {item.body}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#8c8680]">
          Additional support
        </h2>
        <ul className="mt-6 space-y-3">
          {SECONDARY.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md border border-white/[0.10] bg-[#0f0e0d] p-5 transition hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                <h3 className="text-base font-medium text-[#f2efe9]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[#8c8680]">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/[0.10] bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2
            className="text-2xl font-bold md:text-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Not sure which service you need?
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#b0aaa2]">
            Share your city, concept, and timeline — we&apos;ll point you to
            launch consulting, fit-out, equipment, or HVAC.
          </p>
          <CtaGroup
            className="mt-8"
            whatsappMessage="Hi! I'd like help choosing the right Kitchen Pulse service."
            primaryLabel="Book a consultation"
          />
        </div>
      </section>
    </main>
  );
}

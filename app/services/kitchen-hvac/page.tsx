import type { Metadata } from "next";
import Link from "next/link";
import { CtaGroup, ServiceCtaBand } from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "Commercial Kitchen HVAC & Exhaust Across India",
  description:
    "Kitchen HVAC for restaurants and cloud kitchens — exhaust, fresh air, and AC designed as one system. Pan-India delivery from Navi Mumbai.",
  alternates: { canonical: "/services/kitchen-hvac" },
  openGraph: {
    title: "Commercial Kitchen HVAC & Exhaust Across India | Kitchen Pulse",
    description:
      "Exhaust, fresh air, and climate control for high-heat F&B kitchens — sized together so staff comfort and grease capture both work.",
    url: "https://kitchenpulse.in/services/kitchen-hvac",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Commercial Kitchen HVAC & Exhaust Across India | Kitchen Pulse',
    description:
      'Exhaust, fresh air, and climate control for high-heat F&B kitchens — sized together so staff comfort and grease capture both work.',
    images: ["/og-image.jpg"],
  },
};


const PILLARS = [
  {
    title: "Kitchen exhaust",
    body: "Hood capture, duct routing, and grease management sized to cooking load — not a generic CFM guess from another site.",
  },
  {
    title: "Fresh air / make-up",
    body: "Balanced replacement air so exhaust does not starve the room, slam doors, or pull smoke into the dining area.",
  },
  {
    title: "Comfort cooling",
    body: "AC and climate zones planned around heat gain from ranges, ovens, and lighting so the pass stays workable at peak.",
  },
  {
    title: "Service access",
    body: "Filters, fans, and panels placed for maintenance — kitchens that cannot be serviced quietly become kitchens that shut down.",
  },
];

const STEPS = [
  {
    title: "Heat & cooking load review",
    body: "We map equipment heat output, fuel type, and peak concurrent use so exhaust and cooling are sized to reality, not brochure averages.",
  },
  {
    title: "Integrated MEP design",
    body: "Exhaust, make-up air, and AC are drawn with civil and equipment layouts so duct paths, shafts, and outdoor units clear structure and neighbours.",
  },
  {
    title: "Install & balance",
    body: "Hoods, ducts, fans, and climate units go in with commissioning checks for capture, pressure balance, and noise at the pass.",
  },
  {
    title: "Live-kitchen upgrades",
    body: "When outlets already trade, we phase work around service hours — temporary capture, night installs, and sequenced cutovers where the brief allows.",
  },
];

const FAQ = [
  {
    q: "Why does commercial kitchen HVAC matter so much?",
    a: "Kitchen HVAC protects food safety, staff endurance, and guest comfort. Undersized exhaust leaves grease and heat in the room; poor make-up air causes smoke drift and negative pressure; weak cooling burns out teams during peak service.",
  },
  {
    q: "Should exhaust, fresh air, and AC be designed together?",
    a: "Yes. Exhaust, make-up (fresh) air, and comfort cooling work as one pressure and heat system. Specifying them separately often creates smoke pull into dining, door slam, or hot passes even when each unit looks adequate on paper.",
  },
  {
    q: "Can you upgrade HVAC in a live kitchen?",
    a: "Often yes. Live upgrades are phased around trading hours — night work, temporary capture, and sequenced cutovers — so disruption is planned rather than improvised. Feasibility depends on site access, shaft capacity, and neighbour constraints.",
  },
  {
    q: "Do you deliver kitchen HVAC across India?",
    a: "Yes. Kitchen Pulse is based in Navi Mumbai and delivers commercial kitchen HVAC and exhaust for restaurants and cloud kitchens pan-India, alone or as part of a turnkey fit-out.",
  },
];

export default function KitchenHvacPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Kitchen HVAC",
    provider: {
      "@type": "Organization",
      name: "Kitchen Pulse",
      url: "https://kitchenpulse.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: "India",
    description:
      "Commercial kitchen HVAC, exhaust, and fresh-air systems for restaurants and cloud kitchens across India.",
    url: "https://kitchenpulse.in/services/kitchen-hvac",
  };

  return (
    <main className="w-full bg-[#0f0e0d] text-[#f2efe9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-28 md:pt-32 md:pb-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          Services
        </p>
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Commercial kitchen HVAC &amp; exhaust across India
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          Exhaust, fresh air, and comfort cooling designed as one system — so
          high-heat kitchens stay workable, capture grease properly, and open
          without smoke drifting into the dining room.
        </p>
        <CtaGroup
          whatsappMessage="Hi! I'd like to discuss kitchen HVAC with Kitchen Pulse."
          primaryLabel="Book a consultation"
          showServices
        />

      </section>

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:py-16 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-orange-500">One system</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Exhaust, make-up air, and AC sized together — not as separate bids
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">High-heat ready</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Designed for ranges, tandoors, fryers, and cloud-kitchen batteries
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">Pan India</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              New builds and live-kitchen upgrades beyond Mumbai
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          What kitchen HVAC includes
        </h2>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          A commercial kitchen is a heat and grease factory. Treating HVAC as
          a late add-on is how brands end up with fogged passes, tripped staff,
          and complaints from neighbouring shops. Kitchen Pulse designs kitchen
          exhaust, fresh-air make-up, and comfort cooling against the actual
          cooking line — then installs with service access so filters and fans
          can be maintained without shutting the outlet for a week.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PILLARS.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-white/[0.12] bg-[#171614] p-5"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>How a Kitchen Pulse HVAC project runs</h2>
          <ol className="mt-10 space-y-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[#b0aaa2] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Built for new kitchens and live upgrades
        </h2>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          New outlets benefit most when HVAC is locked with{" "}
          <Link
            href="/services/commercial-kitchen-fit-out"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            turnkey fit-out
          </Link>{" "}
          and{" "}
          <Link
            href="/services/commercial-kitchen-equipment"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            equipment layout
          </Link>{" "}
          — duct shafts, outdoor units, and hood capture planned before civil
          closes. Existing restaurants and cloud kitchens can still upgrade:
          we assess capture gaps, heat complaints, and shaft capacity, then
          phase work so service continues where the site allows.
        </p>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          From our Navi Mumbai base we deliver pan-India for QSRs, fine dining
          backing kitchens, and multi-city cloud brands. Share your city,
          cooking load, and whether the kitchen is live — we will outline the
          HVAC path and what it takes to balance the room properly.
        </p>
      </section>

      <ServiceCtaBand
        heading="Planning kitchen exhaust or a live HVAC upgrade?"
        body="Tell us your city, cooking load, and timeline — we will map exhaust, fresh air, and cooling as one system."
        whatsappMessage="Hi! I'd like to discuss kitchen HVAC with Kitchen Pulse."
      />
    </main>
  );
}

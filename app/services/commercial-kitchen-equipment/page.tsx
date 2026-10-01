import type { Metadata } from "next";
import Link from "next/link";
import { CtaGroup, ServiceCtaBand } from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "Commercial Kitchen Equipment Supply Across India",
  description:
    "Commercial kitchen equipment for restaurants and cloud kitchens — cooking, cold, prep, and custom stainless fabrication. Layout-first sourcing across India.",
  alternates: { canonical: "/services/commercial-kitchen-equipment" },
  openGraph: {
    title: "Commercial Kitchen Equipment Supply Across India | Kitchen Pulse",
    description:
      "Layout-led equipment supply and custom stainless fabrication for F&B brands — cooking, cold, prep, and warewash lines across India.",
    url: "https://kitchenpulse.in/services/commercial-kitchen-equipment",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};


const CATEGORIES = [
  {
    title: "Cooking line",
    body: "Ranges, combi ovens, tandoors, deep fryers, and induction suites sized to your menu volume and power availability.",
  },
  {
    title: "Cold storage",
    body: "Reach-ins, undercounters, blast chillers, and walk-in coordination so food safety and holding capacity match peak demand.",
  },
  {
    title: "Prep & warewash",
    body: "Work tables, sinks, mixers, slicers, dishwashers, and storage that keep prep flow clear during rush hours.",
  },
  {
    title: "Custom stainless",
    body: "Fabrication from our Saki Naka facility for hoods, counters, shelving, and space-specific modules that off-the-shelf SKUs cannot cover.",
  },
];

const STEPS = [
  {
    title: "Menu & volume brief",
    body: "We start from covers, dayparts, and menu complexity — not a catalogue wishlist — so every asset earns its footprint and power draw.",
  },
  {
    title: "Layout before buy",
    body: "Equipment choices follow workflow drawings: receiving, prep, cook, pass, and wash. Buying before layout is the fastest path to rework.",
  },
  {
    title: "Spec & source",
    body: "We specify capacity, utilities, and service access, then source new or carefully vetted refurbished units where they fit the brief and budget.",
  },
  {
    title: "Install & commission",
    body: "Delivery, placement, utility hook-ups, and commissioning are coordinated with civil and HVAC so the line is service-ready at handover.",
  },
];

const FAQ = [
  {
    q: "What commercial kitchen equipment does Kitchen Pulse supply?",
    a: "We supply cooking, cold storage, prep, warewash, and holding equipment for restaurants and cloud kitchens, plus custom stainless fabrication for counters, hoods, and space-specific modules. Sourcing covers premium partner lines and fabrication from our Saki Naka facility.",
  },
  {
    q: "Should kitchen layout be finalised before buying equipment?",
    a: "Yes. Layout should lead equipment selection. Workflow drawings define footprint, utilities, exhaust capture, and service clearances — buying first often forces expensive moves or undersized lines.",
  },
  {
    q: "Do you offer new and refurbished commercial kitchen equipment?",
    a: "We primarily specify new equipment matched to duty cycle and warranty needs. Where budget and condition allow, we can evaluate refurbished options carefully so food safety, capacity, and serviceability are not compromised.",
  },
  {
    q: "Do you deliver commercial kitchen equipment across India?",
    a: "Yes. Kitchen Pulse is based in Navi Mumbai and supplies and installs equipment for F&B projects pan-India, coordinated with fit-out and HVAC when those scopes are included.",
  },
];

export default function CommercialKitchenEquipmentPage() {
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
    name: "Commercial Kitchen Equipment",
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
      "Commercial kitchen equipment supply and custom stainless fabrication for restaurants and cloud kitchens across India.",
    url: "https://kitchenpulse.in/services/commercial-kitchen-equipment",
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
          Commercial kitchen equipment across India
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          Layout-first equipment supply for restaurants and cloud kitchens —
          cooking, cold, prep, warewash, and custom stainless — so every unit
          fits the workflow, utilities, and opening date.
        </p>
        <CtaGroup
          whatsappMessage="Hi! I'd like to discuss commercial kitchen equipment with Kitchen Pulse."
          primaryLabel="Book a consult"
          showServices
        />

      </section>

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:py-16 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-orange-500">Layout-first</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Specs follow workflow drawings, not catalogue impulse buys
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">Custom SS</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Fabrication from our Saki Naka facility when stock SKUs fall short
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">Pan India</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Supply and install coordinated with fit-out and HVAC scopes
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What we supply</h2>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          Commercial kitchens fail when equipment is treated as a shopping list.
          Kitchen Pulse treats it as a production system: capacity matched to
          peak demand, clearances for service, and utility loads that the site
          can actually support. Whether you are building a QSR line, a cloud
          kitchen battery, or a multi-outlet brand standard, we size cooking,
          cold, prep, and wash to the menu — then fill gaps with custom
          stainless where the room geometry demands it.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((item) => (
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
          <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            How equipment selection works
          </h2>
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
          New versus refurbished — chosen for duty cycle
        </h2>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          High-heat, high-cycle stations usually belong on new equipment with
          clear warranty and parts support. Lower-intensity holding or backup
          pieces can sometimes use refurbished units when condition, prior
          duty, and service access check out. We do not push refurbished as a
          default discount — we recommend it only when it protects food safety
          and uptime. Pair equipment with our{" "}
          <Link
            href="/services/commercial-kitchen-fit-out"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            turnkey fit-out
          </Link>{" "}
          and{" "}
          <Link
            href="/services/kitchen-hvac"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            kitchen HVAC
          </Link>{" "}
          when you want one accountable team from layout through commissioning.
        </p>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          Based in Navi Mumbai with pan-India delivery, Kitchen Pulse helps
          restaurants and cloud kitchens avoid overbuying, under-venting, and
          last-minute SKU swaps that delay openings. Share your city, concept,
          and target go-live — we will map the equipment list that fits the
          room and the menu.
        </p>
      </section>

      <ServiceCtaBand
        heading="Need an equipment list that fits your kitchen?"
        body="Tell us your city, concept, and timeline — we will map cooking, cold, and prep to layout before you buy."
        whatsappMessage="Hi! I'd like to discuss commercial kitchen equipment with Kitchen Pulse."
      />
    </main>
  );
}

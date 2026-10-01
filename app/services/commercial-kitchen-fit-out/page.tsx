import type { Metadata } from "next";
import Link from "next/link";
import { CtaGroup, ServiceCtaBand } from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "Turnkey Commercial Kitchen Fit-Out Across India",
  description:
    "End-to-end commercial kitchen fit-out for restaurants and cloud kitchens — civil, HVAC, exhaust, equipment fabrication, and handover. Mumbai-based, pan-India delivery.",
  alternates: { canonical: "/services/commercial-kitchen-fit-out" },
  openGraph: {
    title: "Turnkey Commercial Kitchen Fit-Out Across India | Kitchen Pulse",
    description:
      "Civil, HVAC, custom equipment, and operational handover for F&B brands — from bare shell to service-ready kitchen.",
    url: "https://kitchenpulse.in/services/commercial-kitchen-fit-out",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};


const STEPS = [
  {
    title: "Site feasibility",
    body: "We audit structural load, exhaust paths, utility capacity, and compliance constraints before you commit to a lease or layout.",
  },
  {
    title: "Kitchen design & MEP",
    body: "Workflow-led layouts with concurrent MEP planning so equipment, drainage, gas, and power land correctly on day one.",
  },
  {
    title: "Civil & HVAC execution",
    body: "Standardised civil works plus kitchen exhaust and climate systems built for high-heat F&B operations.",
  },
  {
    title: "Equipment & fabrication",
    body: "Custom stainless fabrication from our Saki Naka facility plus premium partners for cold, cooking, and prep lines.",
  },
  {
    title: "Handover & scale",
    body: "Audit-ready handover with documentation, then repeatable playbooks when you open the next city or cloud kitchen.",
  },
];

const FAQ = [
  {
    q: "How long does a commercial kitchen fit-out take in India?",
    a: "Kitchen Pulse targets kitchen build and handover timelines as tight as about 21 days for scoped projects, depending on site readiness, approvals, and equipment lead times. Complex sites or long-lead equipment can extend that window.",
  },
  {
    q: "What is included in a turnkey commercial kitchen fit-out?",
    a: "Typically civil works, kitchen HVAC and exhaust, equipment sourcing or custom fabrication, coordination of utilities, and operational handover. Real estate, staffing, and aggregator support can be added when needed but are optional.",
  },
  {
    q: "Do you deliver commercial kitchen fit-outs pan-India?",
    a: "Yes. We are based in Navi Mumbai and deliver pan-India for restaurants, cloud kitchens, and multi-outlet F&B brands using repeatable design and execution playbooks.",
  },
  {
    q: "Do you fit out cloud kitchens differently from restaurants?",
    a: "The core process is the same — feasibility, layout, MEP, civil, HVAC, equipment, handover — but cloud kitchens emphasise throughput, delivery packing flow, and compact footprints, while restaurants balance kitchen performance with front-of-house adjacency and guest experience.",
  },
];

export default function CommercialKitchenFitOutPage() {
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
    name: "Commercial Kitchen Fit-Out",
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
      "Turnkey commercial kitchen fit-out for restaurants and cloud kitchens across India.",
    url: "https://kitchenpulse.in/services/commercial-kitchen-fit-out",
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
          Turnkey commercial kitchen fit-out across India
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          From bare shell to service-ready kitchen — Kitchen Pulse coordinates
          civil, HVAC, equipment, and handover so restaurants and cloud kitchens
          open on schedule without juggling a dozen vendors.
        </p>
        <CtaGroup
          whatsappMessage="Hi! I'd like to discuss a commercial kitchen fit-out with Kitchen Pulse."
          primaryLabel="Book a consult"
          showServices
        />

      </section>

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:py-16 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-orange-500">21 days</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Target kitchen handover window for scoped projects
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">25–30%</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Typical savings via bulk buying and coordinated execution
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">Pan India</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Repeatable fit-out playbooks beyond Mumbai
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>How a Kitchen Pulse fit-out works</h2>
        <ol className="mt-10 space-y-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[#b0aaa2] leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Built for restaurants and cloud kitchens
          </h2>
          <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
            Whether you are opening a QSR, cloud kitchen, or multi-city brand,
            we design for throughput, compliance, and maintenance — then execute
            under one accountable team. Pair fit-out with{" "}
            <Link
              href="/services/commercial-kitchen-equipment"
              className="text-orange-500 underline-offset-2 hover:underline"
            >
              commercial kitchen equipment
            </Link>{" "}
            and{" "}
            <Link
              href="/services/kitchen-hvac"
              className="text-orange-500 underline-offset-2 hover:underline"
            >
              kitchen HVAC
            </Link>{" "}
            for a single partner from layout through commissioning. Staffing and
            aggregator growth remain available as add-ons when you want support
            beyond the build.
          </p>
        </div>
      </section>

      <ServiceCtaBand
        heading="Planning a kitchen this quarter?"
        body="Tell us your city, concept, and timeline — we will map the fit-out path and what it takes to go live."
        whatsappMessage="Hi! I'd like to discuss a commercial kitchen fit-out with Kitchen Pulse."
      />
    </main>
  );
}

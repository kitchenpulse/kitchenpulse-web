import type { Metadata } from "next";
import Link from "next/link";
import { CtaGroup, ServiceCtaBand } from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "F&B Launch Consulting — Idea to First Order | India",
  description:
    "End-to-end F&B launch consulting for new entrepreneurs — QSR, restaurants, dine-in, cloud kitchens, and delivery-first brands. Concept, menu, kitchen layout, SOPs, tech, aggregator onboarding, and go-live through first order. Pan-India.",
  alternates: { canonical: "/services/fnb-launch-consulting" },
  openGraph: {
    title: "F&B Launch Consulting — Idea to First Order | Kitchen Pulse",
    description:
      "Turnkey kitchen brand launch consulting for new founders — QSR, restaurant, cloud kitchen, and delivery-first concepts across India.",
    url: "https://kitchenpulse.in/services/fnb-launch-consulting",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};


const PHASES = [
  {
    title: "Strategy, concept & unit economics",
    body: "We help you sharpen the concept, cuisine positioning, and menu architecture — whether you are opening a QSR, dine-in restaurant, cloud kitchen, or delivery-first brand — so the offer is clear before you spend on space or equipment.",
  },
  {
    title: "Kitchen layout, packaging & supply chain",
    body: "Workflow-led kitchen and interiors planning, packaging where delivery matters, and vendor introductions so prep, cook, service or pack, and dispatch stay coherent when volume starts.",
  },
  {
    title: "SOPs, training & tech stack",
    body: "Operating procedures, team training, and technology setup — POS, kitchen display (KDS), and related tools — so the kitchen can run without you improvising every shift.",
  },
  {
    title: "Go-to-market & first order",
    body: "Launch support through live trading and first-order dispatch — including Swiggy, Zomato, and ONDC-style platform onboarding where relevant — not just a handover deck.",
  },
];

const INCLUDES = [
  {
    title: "Concept & menu engineering",
    body: "Positioning, recipe and menu design tuned for consistency, margin, and your channel mix — dine-in, takeaway, delivery, or a blend.",
  },
  {
    title: "Interiors & kitchen flow",
    body: "Layout and flow that match your menu and footprint — with a clear path into full commercial kitchen fit-out when you are ready to build.",
  },
  {
    title: "Packaging, SOPs & vendors",
    body: "Packaging choices where needed, standard operating procedures, and vendor shortlists so day-one operations are not a scramble.",
  },
  {
    title: "Tech, platforms & go-live",
    body: "POS/KDS setup, aggregator listings when you sell on platforms, and launch support through first order — so founders are not left alone on opening day.",
  },
];

const FAQ = [
  {
    q: "What is F&B launch consulting from Kitchen Pulse?",
    a: "It is turnkey launch consulting for new F&B entrepreneurs — from concept and menu through kitchen layout, packaging, SOPs, vendors, training, tech (POS/KDS), go-to-market, and first order. We work across formats: QSR, restaurants, dine-in, cloud kitchens, healthy-food concepts, and delivery-first brands, pan-India.",
  },
  {
    q: "Who is this consulting for?",
    a: "New founders and first-time operators launching a kitchen brand — QSR, restaurant, cloud kitchen, or delivery-first — who want one accountable partner from idea to first order instead of stitching together designers, vendors, and platforms alone.",
  },
  {
    q: "Do you only work on cloud kitchens?",
    a: "No. Cloud kitchens are one format we support. The same idea-to-first-order engagement covers QSR, dine-in restaurants, healthy-food brands, and other F&B concepts — scoped to how you actually serve guests.",
  },
  {
    q: "How long does an idea-to-first-order engagement take?",
    a: "Timelines vary with concept readiness, site, and approvals. Typical launch engagements run over several weeks through first order rather than a single workshop — we pace work to your go-live target.",
  },
  {
    q: "Do you also handle fit-out, equipment, and HVAC?",
    a: "Yes. Consulting often pairs with commercial kitchen fit-out, equipment supply, and kitchen HVAC when you need the physical kitchen built — one team from concept through commissioning and launch.",
  },
  {
    q: "Is brand identity included?",
    a: "Brand identity and creative can be added as an optional add-on when you want naming, visual identity, or launch creatives alongside the operating launch. Core consulting focuses on concept-to-first-order operations.",
  },
  {
    q: "Do you work outside Mumbai?",
    a: "Yes. Kitchen Pulse is based in Navi Mumbai and delivers F&B launch consulting pan-India.",
  },
];

export default function FnbLaunchConsultingPage() {
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
    name: "F&B Launch Consulting",
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
      "End-to-end F&B and kitchen brand launch consulting for new entrepreneurs — QSR, restaurants, cloud kitchens, and delivery-first brands — concept to first order across India.",
    url: "https://kitchenpulse.in/services/fnb-launch-consulting",
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
          For new founders
        </p>
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          F&B launch consulting — idea to first order
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          Turnkey kitchen brand launch consulting for new entrepreneurs —
          whether you are building a QSR, dine-in restaurant, cloud kitchen, or
          delivery-first brand. Kitchen Pulse takes you from concept through
          menu, kitchen flow, SOPs, tech, and go-to-market — all the way to
          first-order dispatch, pan-India.
        </p>
        <CtaGroup
          whatsappMessage="Hi! I'd like to discuss F&B launch consulting with Kitchen Pulse."
          primaryLabel="Book a consult"
          showServices
        />

      </section>

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:py-16 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-orange-500">Idea → 1st order</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              One partner from concept through live dispatch
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">All formats</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              QSR, restaurant, dine-in, cloud kitchen, delivery-first
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-500">Pan India</p>
            <p className="mt-2 text-sm text-[#b0aaa2]">
              Navi Mumbai-based consulting for founders nationwide
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What the engagement covers</h2>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          Built for founders who need more than a deck — operating help from
          concept to first order across F&B formats, with optional brand
          identity when you want creative alongside the launch.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {INCLUDES.map((item) => (
            <li
              key={item.title}
              className="rounded-md border border-white/[0.12] bg-[#171614] p-5"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>How a launch engagement runs</h2>
          <ol className="mt-10 space-y-8">
            {PHASES.map((phase, i) => (
              <li key={phase.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{phase.title}</h3>
                  <p className="mt-2 text-[#b0aaa2] leading-relaxed">{phase.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          From consulting to a service-ready kitchen
        </h2>
        <p className="mt-4 max-w-3xl text-[#b0aaa2] leading-relaxed">
          When your concept is ready to build, the same team can take you into{" "}
          <Link
            href="/services/commercial-kitchen-fit-out"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            commercial kitchen fit-out
          </Link>
          ,{" "}
          <Link
            href="/services/commercial-kitchen-equipment"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            commercial kitchen equipment
          </Link>
          , and{" "}
          <Link
            href="/services/kitchen-hvac"
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            kitchen HVAC
          </Link>{" "}
          — so layout decisions made in consulting carry through civil, exhaust,
          and commissioning without starting over with a new vendor set.
        </p>
      </section>

      <ServiceCtaBand
        heading="Launching a kitchen this year?"
        body="Tell us your city, concept, and target go-live — we will map what an idea-to-first-order engagement looks like for your format."
        whatsappMessage="Hi! I'd like to discuss F&B launch consulting with Kitchen Pulse."
      />
    </main>
  );
}

import Link from "next/link";
import {
  ServiceCtaBand,
  ctaPrimaryClass,
  ctaGhostClass,
  ctaSecondaryClass,
  whatsappUrl,
} from "@/components/ui/CtaButtons";
import type { EquipmentPageData } from "@/lib/equipment/types";
import { getRelatedPages } from "@/lib/equipment/data";

const SITE = "https://kitchenpulse.in";
const playfair = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

function pathFor(slug: string) {
  return slug === "" ? "/equipment" : `/equipment/${slug}`;
}

type Props = {
  page: EquipmentPageData;
};

export default function EquipmentPageView({ page }: Props) {
  const path = pathFor(page.slug);
  const related = getRelatedPages(page.relatedSlugs);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: `${page.h1} supply & install sourcing`,
    provider: {
      "@type": "Organization",
      name: "Kitchen Pulse",
      url: SITE,
      email: "info@kitchenpulse.in",
      telephone: "+91-91676-36653",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: "India",
    description: page.metaDescription,
    url: `${SITE}${path}`,
  };

  const itemListLd =
    page.kind === "hub" || page.kind === "cluster"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: page.h1,
          itemListElement: related.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.cardTitle || item.h1,
            url: `${SITE}${pathFor(item.slug)}`,
          })),
        }
      : null;

  const clusterRelated =
    page.kind === "leaf" && page.clusterSlug
      ? getRelatedPages([page.clusterSlug])[0]
      : undefined;

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
      {itemListLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      ) : null}

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-28 md:pt-32 md:pb-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          {page.eyebrow || "Equipment"}
        </p>
        {page.kind !== "hub" ? (
          <p className="mb-3 text-sm text-[#a8a29a]">
            <Link
              href="/equipment"
              className="text-orange-500 underline-offset-2 hover:underline"
            >
              Equipment guides
            </Link>
            {clusterRelated ? (
              <>
                <span className="mx-2 text-[#5c574f]">/</span>
                <Link
                  href={pathFor(clusterRelated.slug)}
                  className="text-orange-500 underline-offset-2 hover:underline"
                >
                  {clusterRelated.h1}
                </Link>
              </>
            ) : null}
            <span className="mx-2 text-[#5c574f]">/</span>
            <span>{page.h1}</span>
          </p>
        ) : null}
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={playfair}
        >
          {page.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          {page.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className={ctaPrimaryClass}>
            Book a consultation
          </Link>
          <Link href="/contact" className={ctaSecondaryClass}>
            Get a quote
          </Link>
          <a
            href={whatsappUrl(page.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaSecondaryClass}
          >
            WhatsApp
          </a>
          <a href="mailto:info@kitchenpulse.in" className={ctaGhostClass}>
            info@kitchenpulse.in
          </a>
        </div>
      </section>

      {page.highlights && page.highlights.length > 0 ? (
        <section className="border-y border-white/[0.10] bg-[#171614]">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-3 md:py-16">
            {page.highlights.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-bold text-orange-500">{item.label}</p>
                <p className="mt-2 text-sm text-[#b0aaa2]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {page.sections.map((section, idx) => (
        <section
          key={section.heading}
          className={
            idx % 2 === 1
              ? "bg-[#171614]"
              : "mx-auto max-w-5xl px-6 py-16 md:py-20"
          }
        >
          <div
            className={
              idx % 2 === 1
                ? "mx-auto max-w-5xl px-6 py-16 md:py-20"
                : undefined
            }
          >
            <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
              {section.heading}
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
              {section.body}
            </p>
          </div>
        </section>
      ))}

      {related.length > 0 ? (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            {page.kind === "hub"
              ? "Browse equipment clusters"
              : page.kind === "cluster"
                ? "Equipment in this cluster"
                : "Related equipment guides"}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={pathFor(item.slug)}
                className="rounded-md border border-white/[0.12] bg-[#171614] p-5 no-underline transition-colors hover:border-orange-500/40"
              >
                <h3 className="text-lg font-semibold text-[#f2efe9]">
                  {item.cardTitle || item.h1}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                  {item.cardBody || item.intro}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            Related services
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
            These guides capture product-intent searches. For the full
            layout-first supply story — partners, Saki Naka fabrication, and
            install — see our{" "}
            <Link
              href="/services/commercial-kitchen-equipment"
              className="text-orange-500 underline-offset-2 hover:underline"
            >
              commercial kitchen equipment
            </Link>{" "}
            service page.
            {page.linkFitOut ? (
              <>
                {" "}
                Building the room around the line? Explore{" "}
                <Link
                  href="/services/commercial-kitchen-fit-out"
                  className="text-orange-500 underline-offset-2 hover:underline"
                >
                  commercial kitchen fit-out
                </Link>
                .
              </>
            ) : null}
            {page.linkHvac ? (
              <>
                {" "}
                Need exhaust for this station? See{" "}
                <Link
                  href="/services/kitchen-hvac"
                  className="text-orange-500 underline-offset-2 hover:underline"
                >
                  kitchen HVAC &amp; exhaust
                </Link>
                .
              </>
            ) : null}
          </p>
          {page.kind !== "hub" ? (
            <p className="mt-4 text-sm text-[#a8a29a]">
              <Link
                href="/equipment"
                className="text-orange-500 underline-offset-2 hover:underline"
              >
                ← All equipment guides
              </Link>
            </p>
          ) : null}
        </div>
      </section>

      <ServiceCtaBand
        heading={page.ctaHeading}
        body={page.ctaBody}
        whatsappMessage={page.whatsappMessage}
      />
    </main>
  );
}

import Link from "next/link";
import { CtaGroup, ServiceCtaBand } from "@/components/ui/CtaButtons";
import type { CityPage, ServiceSlug } from "@/lib/locations/types";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  EQUIPMENT_LINKS,
  SERVICE_LABELS,
  cityPath,
  cityServicePath,
  whatsappForCity,
} from "@/lib/locations/constants";
import { getCity } from "@/lib/locations";
import { cityServiceJsonLd, faqJsonLd } from "@/lib/locations/schema";
import FaqSection from "./FaqSection";
import JsonLdScript from "./JsonLdScript";
import { linkClass, playfair } from "./LocationStyles";

export default function LocationServiceView({
  city,
  service,
}: {
  city: CityPage;
  service: ServiceSlug;
}) {
  const page = city.services[service];
  const labels = SERVICE_LABELS[service];
  const otherServices = (
    Object.keys(SERVICE_LABELS) as ServiceSlug[]
  ).filter((slug) => slug !== service);
  const nearby = city.nearby
    .map((slug) => getCity(slug))
    .filter((item): item is CityPage => Boolean(item));

  return (
    <main className="w-full bg-[#0f0e0d] text-[#f2efe9]">
      <JsonLdScript data={faqJsonLd(page.faqs)} />
      <JsonLdScript data={cityServiceJsonLd(city, service, page)} />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-28 md:pt-32 md:pb-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          <Link href="/locations" className="text-orange-500 no-underline hover:underline">
            Locations
          </Link>
          {" / "}
          <Link
            href={cityPath(city.slug)}
            className="text-orange-500 no-underline hover:underline"
          >
            {city.name}
          </Link>
          {" / "}
          {labels.shortLabel}
        </p>
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={playfair}
        >
          {page.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          {page.intro}
        </p>
        <CtaGroup
          className="mt-8"
          whatsappMessage={whatsappForCity(city.name, labels.label)}
          primaryLabel="Book a consultation"
          showServices
        />
      </section>

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 md:grid-cols-3 md:py-16">
          {page.snapshots.map((item) => (
            <div key={item.title}>
              <p className="text-3xl font-bold text-orange-500">{item.title}</p>
              <p className="mt-2 text-sm text-[#b0aaa2]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
          {page.contextHeading}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
          {page.contextBody}
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
          {page.areasIntro} For the national offer, see{" "}
          <Link href={labels.nationalPath} className={linkClass}>
            {labels.label} across India
          </Link>
          .
        </p>
      </section>

      <section className="bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            {page.scopeHeading}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {page.scope.map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-white/[0.12] bg-[#0f0e0d] p-5"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
          {page.processHeading}
        </h2>
        <ol className="mt-10 space-y-8">
          {page.process.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-[#b0aaa2]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            {page.moreHeading}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
            {page.moreBody}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
            Related {city.name} pages:{" "}
            <Link href={cityPath(city.slug)} className={linkClass}>
              {city.name} overview
            </Link>
            {otherServices.map((slug) => (
              <span key={slug}>
                {", "}
                <Link href={cityServicePath(city.slug, slug)} className={linkClass}>
                  {SERVICE_LABELS[slug].label.toLowerCase()}
                </Link>
              </span>
            ))}
            .
          </p>
          {service === "commercial-kitchen-equipment" ||
          service === "commercial-kitchen-fit-out" ? (
            <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
              Equipment guides:{" "}
              {EQUIPMENT_LINKS.map((item, index) => (
                <span key={item.href}>
                  {index ? ", " : ""}
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </span>
              ))}
              .
            </p>
          ) : (
            <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
              When hoods and the cooking line have to land together, see{" "}
              <Link
                href={cityServicePath(city.slug, "commercial-kitchen-equipment")}
                className={linkClass}
              >
                equipment in {city.name}
              </Link>{" "}
              and the{" "}
              <Link href="/equipment/cooking" className={linkClass}>
                cooking line guides
              </Link>
              .
            </p>
          )}
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#b0aaa2]">
            Contact:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
            {" · "}
            <a href="tel:+919167636653" className={linkClass}>
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      <FaqSection
        heading={`Questions about ${labels.label.toLowerCase()} in ${city.name}`}
        faqs={page.faqs}
      />

      {nearby.length ? (
        <section className="border-t border-white/[0.10]">
          <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
              {labels.shortLabel} in nearby cities
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {nearby.map((item) => (
                <Link
                  key={item.slug}
                  href={cityServicePath(item.slug, service)}
                  className="rounded-sm border border-white/20 px-4 py-2 text-sm text-[#f2efe9] no-underline hover:border-orange-500/50 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ServiceCtaBand
        heading={page.ctaHeading}
        body={page.ctaBody}
        whatsappMessage={whatsappForCity(city.name, labels.label)}
      />
    </main>
  );
}

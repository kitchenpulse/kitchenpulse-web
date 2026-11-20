import Link from "next/link";
import { CtaGroup, ServiceCtaBand } from "@/components/ui/CtaButtons";
import type { CityPage } from "@/lib/locations/types";
import { SERVICE_SLUGS, type ServiceSlug } from "@/lib/locations/types";
import {
  SERVICE_LABELS,
  cityPath,
  cityServicePath,
  whatsappForCity,
} from "@/lib/locations/constants";
import { getCity } from "@/lib/locations";
import { cityHubJsonLd, faqJsonLd } from "@/lib/locations/schema";
import FaqSection from "./FaqSection";
import JsonLdScript from "./JsonLdScript";
import NapContact from "./NapContact";
import { linkClass, playfair } from "./LocationStyles";

export default function LocationHubView({ city }: { city: CityPage }) {
  const nearby = city.nearby
    .map((slug) => getCity(slug))
    .filter((item): item is CityPage => Boolean(item));

  return (
    <main className="w-full bg-[#0f0e0d] text-[#f2efe9]">
      <JsonLdScript data={faqJsonLd(city.faqs)} />
      <JsonLdScript data={cityHubJsonLd(city)} />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-28 md:pt-32 md:pb-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          <Link href="/locations" className="text-orange-500 no-underline hover:underline">
            Locations
          </Link>
          {" / "}
          {city.name}
        </p>
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={playfair}
        >
          {city.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          {city.intro}
        </p>
        <CtaGroup
          className="mt-8"
          whatsappMessage={whatsappForCity(city.name)}
          primaryLabel="Book a consultation"
          showServices
        />
      </section>

      <section className="border-y border-white/[0.10] bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            Primary services in {city.name}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICE_SLUGS.map((slug: ServiceSlug) => (
              <Link
                key={slug}
                href={cityServicePath(city.slug, slug)}
                className="rounded-md border border-white/[0.12] bg-[#0f0e0d] p-5 no-underline transition-colors hover:border-orange-500/40"
              >
                <h3 className="text-lg font-semibold text-[#f2efe9]">
                  {SERVICE_LABELS[slug].label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                  {city.serviceHooks[slug]}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-orange-500">
                  {city.name} {SERVICE_LABELS[slug].shortLabel.toLowerCase()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
          {city.contextHeading}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
          {city.contextBody}
        </p>
      </section>

      <section className="bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            {city.areasHeading}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {city.areas.map((area) => (
              <div
                key={area.title}
                className="rounded-md border border-white/[0.12] bg-[#0f0e0d] p-5"
              >
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
          {city.howWeWorkHeading}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
          {city.howWeWorkBody}
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
          Launch consulting, layout planning, and staffing can sit alongside a
          fit-out when you need them. For a new outlet, we help you find the
          ideal spot for your outlet — see{" "}
          <Link href="/MainSection#location" className={linkClass}>
            location support
          </Link>{" "}
          and{" "}
          <Link href="/services/fnb-launch-consulting" className={linkClass}>
            F&amp;B launch consulting
          </Link>
          .
        </p>
        <NapContact />
      </section>

      <FaqSection heading={`Questions about kitchens in ${city.name}`} faqs={city.faqs} />

      {nearby.length ? (
        <section className="border-t border-white/[0.10] bg-[#171614]">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
              Nearby cities
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {nearby.map((item) => (
                <Link
                  key={item.slug}
                  href={cityPath(item.slug)}
                  className="rounded-sm border border-white/20 px-4 py-2 text-sm text-[#f2efe9] no-underline hover:border-orange-500/50 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/locations"
                className="rounded-sm border border-transparent px-4 py-2 text-sm text-[#a8a29a] no-underline hover:text-orange-500"
              >
                All cities
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <ServiceCtaBand
        heading={city.ctaHeading}
        body={city.ctaBody}
        whatsappMessage={whatsappForCity(city.name)}
      />
    </main>
  );
}

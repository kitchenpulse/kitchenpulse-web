import Link from "next/link";
import { CtaGroup } from "@/components/ui/CtaButtons";
import {
  REGION_LABELS,
  REGION_ORDER,
  cityPath,
} from "@/lib/locations/constants";
import { citiesByRegion } from "@/lib/locations";
import { linkClass, playfair } from "./LocationStyles";

export default function LocationsIndexView() {
  const grouped = citiesByRegion();

  return (
    <main className="w-full bg-[#0f0e0d] text-[#f2efe9]">
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-28 md:pt-32 md:pb-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          Locations
        </p>
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={playfair}
        >
          Cities we serve across India
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          Kitchen Pulse is based in Kamothe, Navi Mumbai and delivers commercial
          kitchen fit-out, equipment supply, and kitchen HVAC for restaurants
          and cloud kitchens in major cities across India. Pick a city to see
          how we work there — including neighbourhoods, local kitchen
          constraints, and the three primary services.
        </p>
        <CtaGroup
          className="mt-8"
          whatsappMessage="Hi! I'd like to discuss a commercial kitchen project with Kitchen Pulse."
          primaryLabel="Book a consultation"
          showServices
        />
      </section>

      {REGION_ORDER.map((region) => {
        const cities = grouped[region];
        if (!cities.length) return null;
        return (
          <section
            key={region}
            className="border-t border-white/[0.10]"
          >
            <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
              <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
                {REGION_LABELS[region]}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={cityPath(city.slug)}
                    className="rounded-md border border-white/[0.12] bg-[#171614] p-5 no-underline transition-colors hover:border-orange-500/40"
                  >
                    <h3 className="text-lg font-semibold text-[#f2efe9]">
                      {city.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#b0aaa2]">
                      {city.indexBlurb}
                    </p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-orange-500">
                      View {city.name} services
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-white/[0.10] bg-[#171614]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl" style={playfair}>
            How we work outside our Navi Mumbai base
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
            Every city page describes a market we actually serve from Kamothe,
            Navi Mumbai — not a invented branch office. Surveys, design, HVAC,
            equipment, and fit-out are coordinated from that base, with
            stainless and hood fabrication in Saki Naka when the job needs it.
            If your city is not listed,{" "}
            <Link href="/contact" className={linkClass}>
              get in touch
            </Link>{" "}
            and we will tell you whether we can take the project.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#b0aaa2]">
            For the national scope, start with{" "}
            <Link href="/services" className={linkClass}>
              our services
            </Link>
            ,{" "}
            <Link href="/services/commercial-kitchen-fit-out" className={linkClass}>
              turnkey fit-out
            </Link>
            ,{" "}
            <Link href="/services/commercial-kitchen-equipment" className={linkClass}>
              equipment supply
            </Link>
            , or{" "}
            <Link href="/services/kitchen-hvac" className={linkClass}>
              kitchen HVAC
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ctaPrimaryClass,
  ctaSecondaryClass,
  ctaGhostClass,
} from "@/components/ui/CtaButtons";

const PDF_HREF = "/catalogue/Kitchen-Pulse-Product-Catalogue.pdf";
const playfair = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Download the Kitchen Pulse product catalogue — SS fabrication, cooking, prep, bakery, Celfrost refrigeration, dishwashing and beverage equipment. No prices; request a quote.",
  alternates: { canonical: "/catalogue" },
  openGraph: {
    title: "Kitchen Pulse Product Catalogue",
    description:
      "SS fabrication and commercial kitchen equipment, including the Celfrost refrigeration range. Download the catalogue or request a quote.",
    url: "https://kitchenpulse.in/catalogue",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Pulse Product Catalogue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Pulse Product Catalogue",
    description:
      "SS fabrication and commercial kitchen equipment, including the Celfrost range.",
    images: ["/og-image.jpg"],
  },
};

export default function CataloguePage() {
  return (
    <main className="w-full bg-[#0f0e0d] text-[#f2efe9]">
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-28 md:pt-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
          Product Catalogue
        </p>
        <h1
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl"
          style={playfair}
        >
          Kitchen Pulse Product Catalogue
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#b0aaa2]">
          A 33-page look at Kitchen Pulse Fabrication, cooking, food prep and
          bakery, the Celfrost refrigeration range, plus dishwashing and
          beverage equipment. No prices — get in touch for a quote.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={PDF_HREF}
            download="Kitchen-Pulse-Product-Catalogue.pdf"
            className={ctaPrimaryClass}
          >
            Download Catalogue
          </a>
          <Link href="/equipment" className={ctaSecondaryClass}>
            Equipment guides
          </Link>
          <Link href="/contact" className={ctaGhostClass}>
            Book a consultation
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
        <div className="overflow-hidden rounded-md border border-white/[0.12] bg-[#171614]">
          <iframe
            title="Kitchen Pulse Product Catalogue"
            src={`${PDF_HREF}#view=FitH`}
            className="h-[80vh] min-h-[640px] w-full border-0 bg-[#171614]"
          />
        </div>
        <p className="mt-4 text-sm text-[#8c8680]">
          If the preview does not load,{" "}
          <a
            href={PDF_HREF}
            className="text-orange-500 underline-offset-2 hover:underline"
          >
            download the PDF
          </a>
          .
        </p>
      </section>
    </main>
  );
}

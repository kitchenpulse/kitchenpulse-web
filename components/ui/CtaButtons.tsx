import Link from "next/link";

const WHATSAPP_NUMBER = "919167636653";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Solid orange primary CTA */
export const ctaPrimaryClass =
  "inline-flex items-center justify-center gap-2 min-h-[44px] rounded-sm bg-orange-500 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-white no-underline transition-colors duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

/** Outline / ghost secondary CTA */
export const ctaSecondaryClass =
  "inline-flex items-center justify-center gap-2 min-h-[44px] rounded-sm border border-white/20 bg-transparent px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#f2efe9] no-underline transition-colors duration-200 hover:border-orange-500/50 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

/** Quiet tertiary / ghost link-button */
export const ctaGhostClass =
  "inline-flex items-center justify-center gap-2 min-h-[44px] rounded-sm border border-transparent px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#a8a29a] no-underline transition-colors duration-200 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

type CtaGroupProps = {
  whatsappMessage?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showWhatsApp?: boolean;
  showServices?: boolean;
  className?: string;
};

/**
 * Consistent CTA hierarchy: one strong orange primary + outline WhatsApp + optional ghost.
 */
export function CtaGroup({
  whatsappMessage = "Hi! I'd like to book a consultation with Kitchen Pulse.",
  primaryHref = "/contact",
  primaryLabel = "Book a consultation",
  showWhatsApp = true,
  showServices = false,
  className = "",
}: CtaGroupProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link href={primaryHref} className={ctaPrimaryClass}>
        {primaryLabel}
      </Link>
      {showWhatsApp ? (
        <a
          href={whatsappUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaSecondaryClass}
        >
          WhatsApp
        </a>
      ) : null}
      {showServices ? (
        <Link href="/services" className={ctaGhostClass}>
          All services
        </Link>
      ) : null}
    </div>
  );
}

type ServiceCtaBandProps = {
  heading: string;
  body: string;
  whatsappMessage: string;
};

/** Bottom CTA band used on service pages */
export function ServiceCtaBand({
  heading,
  body,
  whatsappMessage,
}: ServiceCtaBandProps) {
  return (
    <section className="border-t border-white/[0.10] bg-[#171614]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2
          className="text-2xl font-bold md:text-3xl text-[#f2efe9]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#a8a29a]">
          {body}
        </p>
        <CtaGroup
          className="mt-8"
          whatsappMessage={whatsappMessage}
          primaryLabel="Book a consultation"
          showServices={false}
        />
      </div>
    </section>
  );
}

import type { FaqItem } from "@/lib/locations/types";
import { playfair } from "./LocationStyles";

export default function FaqSection({
  heading,
  faqs,
}: {
  heading: string;
  faqs: FaqItem[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2
        className="text-2xl font-bold md:text-3xl"
        style={playfair}
      >
        {heading}
      </h2>
      <dl className="mt-10 space-y-8">
        {faqs.map((item) => (
          <div key={item.q}>
            <dt className="text-lg font-semibold">{item.q}</dt>
            <dd className="mt-2 leading-relaxed text-[#b0aaa2]">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

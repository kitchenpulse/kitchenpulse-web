"use client";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    client: "Glenn",
    role: "CEO",
    company: "Cluckin",
    logo: "/assets/clucin.png",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    quote:
      "Kitchen Pulse understood our QSR throughput challenges better than anyone we had worked with before. They supported us closely through equipment planning, installation, and commissioning, ensuring we went live on schedule with zero disruption to operations. I see them as a long-term partner for every new Cluckin outlet — our one-stop kitchen solutions partner.",
  },
  {
    client: "Venkatesh",
    role: "Chief of Staff",
    company: "Maiz Mexican",
    logo: "/assets/maizmexican.png",
    featured: false,
    quote:
      "With Maiz Mexican scaling across multiple locations, we needed a partner who could standardise our kitchens without compromising on menu authenticity. Kitchen Pulse helped us build a setup that makes expansion easy — a true one-stop solution from design and equipment to on-ground coordination.",
  },
  {
    client: "Prashant Paradkar,",
    role: "Head of Projects",
    company: "charcoal eats",
    logo: "/assets/charcoaleats.jpg",
    featured: false,
    quote:
      "The pace at which they execute projects and the price at which they deliver complete kitchens is amazing, especially given the quality of equipment and workmanship. They make the entire process far more predictable — from finalising BOQs to handover.",
  },
  {
    client: "Justin",
    role: "Co-Founder",
    company: "Kerala Café",
    logo: "/assets/keralacafe.png",
    featured: false,
    quote:
      "Kitchen Pulse delivered a cohesive concept — aligning front-of-house interiors with our coastal, homely vibe while designing a back-of-house that handles heavy volumes comfortably. From ventilation to lighting, the way they tied interiors and kitchen together has elevated our guest experience.",
  },
  {
    client: "Rishabh",
    role: "Franchise Owner",
    company: "Rebel Foods",
    logo: null,
    initials: "RF",
    featured: false,
    quote:
      "What stood out most was their coordination across all stakeholders. They took charge of aligning vendors, contractors, and timelines so our kitchen was ready to operate without us chasing multiple parties. Their structured project management helped us start operations earlier than expected.",
  },
];

const stats = [
  { value: "120+", label: "Kitchens Built" },
  { value: "40+", label: "F&B Brands" },
  { value: "98%", label: "On-time Delivery" },
];

const featuredTestimonial = testimonials.find((t) => t.featured)!;
const smallTestimonials = testimonials.filter((t) => !t.featured);

const LogoBadge = ({
  logo,
  initials,
  size,
}: {
  logo: string | null;
  initials?: string;
  size: "lg" | "sm";
}) => {
  const dimension = size === "lg" ? 40 : 32;
  const baseClass = `flex-shrink-0 flex items-center justify-center border border-black/[0.07] overflow-hidden bg-[#f0ede8]`;
  const sizeClass = size === "lg" ? "w-10 h-10 rounded-[4px]" : "w-8 h-8 rounded-[3px]";
  const textClass = size === "lg"
    ? "text-[14px] font-bold text-orange-500"
    : "text-[11px] font-bold text-orange-500";

  if (logo) {
    return (
      <div className={`${baseClass} ${sizeClass}`} style={{ padding: 0 }}>
        <img
          src={logo}
          alt=""
          style={{ width: dimension, height: dimension, objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }

  return (
    <div
      className={`${baseClass} ${sizeClass} ${textClass}`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {initials}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              smallTestimonials.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 130);
              });
            }, 500);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fade = (visible: boolean, delay = "") =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        className="relative bg-[#faf9f7] text-[#1a1714] overflow-hidden"
        ref={sectionRef}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grain overlay */}
        <div
          className="fixed inset-0 opacity-[0.025] pointer-events-none z-[1]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── HERO ── */}
        <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-end px-5 sm:px-[50px] lg:px-20 pt-20 pb-0">
          <div>
            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Client Testimonials
              </span>
            </div>
            <h2
              className={`text-[clamp(36px,4.5vw,60px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Partners Who<br />
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Trust the Pulse.</em>
            </h2>
          </div>

          <div>
            <p className={`text-[clamp(13px,1.3vw,15px)] font-light leading-[1.85] text-[#6b6560] max-w-[400px] ${fade(heroVisible, "delay-200")}`}>
              From single-outlet QSRs to multi-city cloud kitchen chains, our clients count on
              Kitchen Pulse to deliver complete kitchen solutions — on time, on budget, and built to scale.
            </p>
           
          </div>
        </div>

        {/* ── CARDS AREA ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 pt-14 pb-0">

          {/* Featured Card */}
          <div
            className={`group grid grid-cols-1 md:grid-cols-[1.4fr_1fr] bg-white border border-black/[0.07] overflow-hidden mb-0.5 transition-colors duration-300 hover:border-orange-500 ${fade(heroVisible, "delay-[450ms]")}`}
          >
            {/* Image side */}
            <div className="relative h-[220px] md:h-auto overflow-hidden">
              <img
                src={featuredTestimonial.image}
                alt="Commercial kitchen"
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-[1.05]"
                style={{ filter: "brightness(0.72) saturate(0.85)" }}
              />
              {/* Fade into card body on desktop */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none hidden md:block"
                style={{ background: "linear-gradient(to top, #fff, transparent)" }}
              />
              {/* Warm tint */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)" }}
              />
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-between px-8 py-9 sm:px-10">
              <div>
                <div
                  className="text-[64px] font-black leading-[0.8] text-orange-500 opacity-30 mb-3.5 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </div>
                <p className="text-[14px] font-light leading-[1.85] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                  {featuredTestimonial.quote}
                </p>
              </div>
              <div className="mt-7 pt-5 border-t border-black/[0.07] flex items-center gap-3.5">
                <LogoBadge logo={featuredTestimonial.logo} initials={(featuredTestimonial as any).initials} size="lg" />
                <div>
                  <div className="text-[13px] font-medium text-[#1a1714] mb-0.5">{featuredTestimonial.client}</div>
                  <div className="text-[11px] text-[#a09890] tracking-[0.04em]">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left mt-5" />
            </div>
          </div>

          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {smallTestimonials.map((t, index) => (
              <div
                key={t.company}
                className={`group bg-white border border-black/[0.07] px-6 py-7 flex flex-col justify-between cursor-default transition-colors duration-300 hover:border-orange-500 hover:bg-[#fffcfa] ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0 transition-[opacity,transform,border-color,background] duration-[550ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visibleCards[index] ? `${index * 0.1}s` : "0s" }}
              >
                <div>
                  <div
                    className="text-[36px] font-black leading-none text-orange-500 opacity-30 mb-2.5 select-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    "
                  </div>
                  <p className="text-[12.5px] font-light leading-[1.8] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-black/[0.07] flex items-center gap-2.5">
                  <LogoBadge logo={t.logo} initials={(t as any).initials} size="sm" />
                  <div>
                    <div className="text-[12px] font-medium text-[#1a1714] mb-0.5">{t.client}</div>
                    <div className="text-[10.5px] text-[#a09890] tracking-[0.04em]">{t.role}, {t.company}</div>
                  </div>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left mt-3" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-[2] h-20" />
      </section>
    </>
  );
};

export default Testimonials;
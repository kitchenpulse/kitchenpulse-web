"use client";
import React, { useEffect, useRef, useState } from "react";

const digitalItems = [
  {
    title: "Aggregator & Channel Management",
    description:
      "End-to-end management of Zomato, Swiggy, Blinkit and other platforms to optimize visibility, ratings, and order volumes.",
    icon: "📡",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Performance Marketing",
    description:
      "Digital campaigns focused on ROAS and customer acquisition across search, social, and local discovery channels.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Brand & Customer Experience",
    description:
      "Cohesive brand storytelling, creatives, and CRM journeys that build loyalty across dine-in, delivery, and D2C.",
    icon: "✦",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80&auto=format&fit=crop",
  },
];

const metrics = [
  { value: "3.2×", label: "Avg. ROAS", sub: "across campaigns" },
  { value: "40%", label: "Order Growth", sub: "in 90 days" },
  { value: "60+", label: "Brands Scaled", sub: "across India" },
];

const growthPoints = [
  "Menu and pricing optimization for online channels",
  "Campaigns tailored to local catchment and occasions",
  "Reporting that connects digital data to store P&L",
];

const stats = [
  { value: "3.2×", label: "Avg. ROAS" },
  { value: "40%", label: "Order Growth" },
  { value: "60+", label: "Brands Scaled" },
];

const DigitalAndGrowthSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              digitalItems.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 150);
              });
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
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
        id="digital"
        ref={sectionRef}
        className="relative bg-[#faf9f7] text-[#1a1714] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grain overlay — matches culinary */}
        <div
          className="fixed inset-0 opacity-[0.025] pointer-events-none z-[1]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* ── HERO SPLIT ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">

          {/* Left: Image panel — flipped vs culinary (image left, text right) */}
          <div className={`group relative overflow-hidden min-h-[350px] md:min-h-0 order-2 md:order-1 ${fade(heroVisible, "delay-200")}`}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85&auto=format&fit=crop"
              alt="Digital growth analytics"
              className="w-full h-full object-cover block transition-transform duration-[8000ms] ease-linear group-hover:scale-[1.04]"
              style={{ filter: "brightness(0.78) saturate(0.9)" }}
            />
            {/* Diagonal cutout on right edge (desktop only) */}
            <div
              className="absolute top-0 right-[-1px] w-20 h-full bg-[#faf9f7] z-[2] hidden md:block"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
            />
            {/* Blue-to-orange tint consistent with orange brand */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.10) 0%, transparent 60%)",
              }}
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 z-[3] bg-white/90 border border-black/[0.09] backdrop-blur-md px-5 py-4 max-w-[200px]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-orange-500 font-medium mb-2">
                Data-Driven
              </div>
              <div
                className="text-[18px] font-bold leading-[1.2] text-[#1a1714]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Growth That's Measurable
              </div>
            </div>
          </div>

          {/* Right: Text panel */}
          <div className="relative z-[2] flex flex-col justify-center bg-[#faf9f7] px-5 py-12 sm:px-[40px] sm:py-16 lg:px-[60px] lg:pr-20 lg:py-20 order-1 md:order-2">

            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Digital &amp; Growth
              </span>
            </div>

            <h2
              className={`text-[clamp(42px,5.5vw,76px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] mb-7 ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Driving Orders,<br />Reach &amp;{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Visibility.</em>
            </h2>

            <p
              className={`text-[clamp(14px,1.5vw,16px)] font-light leading-[1.75] text-[#6b6560] max-w-[420px] mb-10 ${fade(heroVisible, "delay-200")}`}
            >
              We manage your digital presence across aggregators, social, and D2C
              channels to create predictable, scalable growth for your F&amp;B brand
              — every decision tied to metrics that matter.
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap items-center gap-6 ${fade(heroVisible, "delay-300")}`}>
              <button
                className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium tracking-[0.05em] uppercase px-7 py-4 border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Explore Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="flex items-center gap-2 text-[13px] font-normal tracking-[0.02em] text-[#8a8480] hover:text-[#1a1714] bg-transparent border-none cursor-pointer transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Case Studies
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 7h4M7 5l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Stats strip */}
            <div className={`flex mt-14 border-t border-black/[0.07] pt-8 ${fade(heroVisible, "delay-[450ms]")}`}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 pr-6 ${i > 0 ? "pl-6 border-l border-black/[0.07]" : ""}`}
                >
                  <div
                    className="text-[clamp(28px,3vw,40px)] font-bold leading-none text-orange-500 mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#a09890]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 py-16 sm:py-20 lg:py-[100px]">

          {/* Section label */}
          <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a09890] mb-12 after:flex-1 after:max-w-16 after:h-px after:bg-black/[0.1]">
            Our Services
          </div>

          {/* 3-col grid with images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
            {digitalItems.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white border border-black/[0.07] overflow-hidden cursor-default transition-all duration-300 hover:border-orange-500 ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0 transition-[opacity,transform,border-color,background] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visibleCards[index] ? `${index * 0.12}s` : "0s" }}
              >
                {/* Card image */}
                <div className="relative h-[180px] overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-[1.06]"
                    style={{ filter: "brightness(0.72) saturate(0.85)" }}
                  />
                  {/* Fade image into card body */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to top, #fff, transparent)" }}
                  />
                  {/* Icon pill */}
                  <span className="absolute top-3.5 left-3.5 z-[2] w-9 h-9 bg-black/70 border border-white/10 backdrop-blur-md flex items-center justify-center text-[16px]">
                    {item.icon}
                  </span>
                  {/* Ghost number on image */}
                  <span
                    className="absolute top-2 right-4 text-[56px] font-black leading-none text-white/10 select-none group-hover:text-orange-500/20 transition-colors duration-300 z-[2]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Animated bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />

                {/* Text body */}
                <div className="px-7 pt-5 pb-8">
                  <h3
                    className="text-[20px] font-bold leading-[1.25] text-[#1a1714] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-light leading-[1.75] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── GROWTH PANEL ── */}
        <div className="relative z-[2] mx-5 sm:mx-[50px] lg:mx-20 mb-16 sm:mb-20 lg:mb-[100px] bg-white border border-black/[0.07] grid grid-cols-1 md:grid-cols-[1fr_1.6fr] overflow-hidden">

          {/* Metrics side — mirrors culinary's image side position */}
          <div className="flex flex-col justify-center px-9 py-11 sm:px-11 sm:py-[52px] border-b md:border-b-0 md:border-r border-black/[0.07]">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#a09890] mb-8 flex items-center gap-3 after:flex-1 after:max-w-10 after:h-px after:bg-black/[0.1]">
              Key Metrics
            </p>
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`flex items-baseline gap-4 py-5 ${
                  i < metrics.length - 1 ? "border-b border-black/[0.06]" : ""
                } ${i === 0 ? "pt-0" : ""}`}
              >
                <span
                  className="text-[clamp(32px,3.5vw,48px)] font-bold leading-none text-orange-500 flex-shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.value}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-medium text-[#1a1714] leading-[1.2]">
                    {m.label}
                  </span>
                  <span className="text-[11px] font-light text-[#a09890] tracking-[0.04em]">
                    {m.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center px-7 py-11 sm:px-14 sm:py-[52px]">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-5">
              Growth Mindset
            </p>
            <h3
              className="text-[clamp(24px,2.5vw,34px)] font-bold leading-[1.2] text-[#1a1714] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every Initiative,{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Measurably Tied</em>{" "}
              to Revenue
            </h3>
            <p className="text-[14px] font-light leading-[1.8] text-[#6b6560] mb-8 max-w-[440px]">
              We connect order volume, AOV, repeat rate, and store-level
              profitability so you see exactly what's working — and scale it fast.
            </p>
            <ul className="flex flex-col gap-3.5">
              {growthPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[13px] font-normal leading-[1.6] text-[#8a8480]">
                  <span className="w-5 h-5 bg-[#f0ede8] border border-black/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#f97316" strokeWidth="1.5" width="10" height="10">
                      <path d="M2 5l2.5 2.5L8 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </>
  );
};

export default DigitalAndGrowthSection;
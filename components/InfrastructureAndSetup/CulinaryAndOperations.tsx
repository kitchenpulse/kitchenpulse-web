"use client";
import React, { useEffect, useRef, useState } from "react";

const culinaryItems = [
  {
    title: "Recipe Development",
    description:
      "Expert chefs create standardized recipes that balance food cost control with consistent taste and quality across all outlets.",
    icon: "🍳",
  },
  {
    title: "Menu Engineering",
    description:
      "Data-driven menu design focused on profitability, guest preference, and operational efficiency with smart pricing strategies.",
    icon: "📋",
  },
  {
    title: "Nutrition Consulting",
    description:
      "Specialized support for wellness menus, dietary programs, and health-focused product development for modern consumers.",
    icon: "🌿",
  },
];

const stats = [
  { value: "200+", label: "Recipes Crafted" },
  { value: "95%", label: "Client Retention" },
  { value: "40+", label: "Kitchens Optimized" },
];

const opsBullets = [
  "Standardized SOPs for prep, cooking, and service",
  "Optimized station layouts to reduce waste and delays",
  "Clear documentation for faster onboarding and training",
];

const CulinaryAndOperationsSection = () => {
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
              culinaryItems.forEach((_, i) => {
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
      {/* Google Fonts only — cannot be expressed in Tailwind */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        id="culinary"
        ref={sectionRef}
        className="relative bg-[#faf9f7] text-[#1a1714] overflow-hidden"
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

        {/* ── HERO SPLIT ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh] md:min-h-[90vh]">

          {/* Left: Text panel */}
          <div className="relative z-[2] flex flex-col justify-center bg-[#faf9f7] px-5 py-12 sm:px-[40px] sm:py-16 lg:px-[60px] lg:pl-20 lg:py-20">

            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Culinary &amp; Operations
              </span>
            </div>

            <h2
              className={`text-[clamp(42px,5.5vw,76px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] mb-7 ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Craft</em>
              <br />Meets
              <br />Precision.
            </h2>

            <p
              className={`text-[clamp(14px,1.5vw,16px)] font-light leading-[1.75] text-[#6b6560] max-w-[420px] mb-10 ${fade(heroVisible, "delay-200")}`}
            >
              We bring together chef-driven innovation and operational discipline
              to design menus, kitchens, and processes that perform in real-world
              F&amp;B and D2C environments.
            </p>

           

           
          </div>

          {/* Right: Image panel */}
          <div className={`group relative overflow-hidden min-h-[350px] md:min-h-0 ${fade(heroVisible, "delay-200")}`}>
            {/* Diagonal cutout (desktop only) */}
            <div
              className="absolute top-0 left-[-1px] w-20 h-full bg-[#faf9f7] z-[2] hidden md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=85&auto=format&fit=crop"
              alt="Professional chef at work"
              className="w-full h-full object-cover block transition-transform duration-[8000ms] ease-linear group-hover:scale-[1.04]"
              style={{ filter: "brightness(0.78) saturate(0.9)" }}
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 right-8 z-[3] bg-white/90 border border-black/[0.09] backdrop-blur-md px-5 py-4 max-w-[200px]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-orange-500 font-medium mb-2">
                Est. Excellence
              </div>
              <div
                className="text-[18px] font-bold leading-[1.2] text-[#1a1714]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Farm to Table Innovation
              </div>
            </div>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 py-16 sm:py-20 lg:py-[100px]">

          {/* Section label */}
          <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a09890] mb-12 after:flex-1 after:max-w-16 after:h-px after:bg-black/[0.1]">
            Our Services
          </div>

          {/* 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
            {culinaryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white border border-black/[0.07] px-9 py-10 overflow-hidden cursor-default transition-all duration-300 hover:border-orange-500 hover:bg-[#fffcfa] ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0 transition-[opacity,transform,border-color,background] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visibleCards[index] ? `${index * 0.12}s` : "0s" }}
              >
                {/* Animated bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />

                {/* Ghost number */}
                <span
                  className="absolute top-4 right-6 text-[72px] font-black leading-none text-black/[0.04] select-none group-hover:text-orange-500/[0.07] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  0{index + 1}
                </span>

                <span className="text-[28px] mb-5 block">{item.icon}</span>
                <h3
                  className="text-[22px] font-bold leading-[1.2] text-[#1a1714] mb-3.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] font-light leading-[1.75] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── OPERATIONS PANEL ── */}
        <div className="relative z-[2] mx-5 sm:mx-[50px] lg:mx-20 mb-16 sm:mb-20 lg:mb-[100px] bg-white border border-black/[0.07] grid grid-cols-1 md:grid-cols-[1fr_1.4fr] overflow-hidden">

          {/* Image side */}
          <div className="group relative min-h-[320px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&q=85&auto=format&fit=crop"
              alt="Kitchen operations"
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-[1.05]"
              style={{ filter: "brightness(0.75) saturate(0.8)" }}
            />
            {/* Warm tint */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center px-7 py-11 sm:px-14 sm:py-[52px]">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-5">
              How We Support Your Kitchens
            </p>
            <h3
              className="text-[clamp(24px,2.5vw,34px)] font-bold leading-[1.2] text-[#1a1714] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Scalable Systems Built for the Real World
            </h3>
            <p className="text-[14px] font-light leading-[1.8] text-[#6b6560] mb-8 max-w-[440px]">
              From back-of-house workflows to brand-consistent recipes, we help
              you design culinary systems that are scalable, repeatable, and
              easy to train across locations.
            </p>
            <ul className="flex flex-col gap-3.5">
              {opsBullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[13px] font-normal leading-[1.6] text-[#8a8480]">
                  <span className="w-5 h-5 bg-[#f0ede8] border border-black/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#f97316" strokeWidth="1.5" width="10" height="10">
                      <path d="M2 5l2.5 2.5L8 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </>
  );
};

export default CulinaryAndOperationsSection;
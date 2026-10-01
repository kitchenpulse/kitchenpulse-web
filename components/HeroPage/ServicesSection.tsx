"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ctaPrimaryClass, ctaSecondaryClass } from "@/components/ui/CtaButtons";

const Icons = {
  RealEstate: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  Civil: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="2" y="6" width="20" height="14" rx="1"/>
      <path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/>
      <line x1="12" y1="10" x2="12" y2="16"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
    </svg>
  ),
  HVAC: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  Equipment: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4L19.1 3.3a1 1 0 00-1.4 0L14.7 6.3z"/>
      <path d="M7 13l4 4L4 21l3-8z"/>
      <path d="M15 9l-8 8"/>
    </svg>
  ),
  Talent: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  Digital: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
};

const SERVICES = [
  {
    title: "Real Estate Sourcing",
    desc: "Expert location intelligence across tier 2 & 3 cities with pre-negotiated rates from our database of 1800+ F&B-suitable properties.",
    icon: Icons.RealEstate,
    tag: "Location Intelligence",
    stat: "1800+ Properties",
  },
  {
    title: "Civil & Infrastructure",
    desc: "Complete civil development with standardized processes ensuring consistency and quality across all locations nationwide.",
    icon: Icons.Civil,
    tag: "Nationwide Coverage",
    stat: "Pan India",
  },
  {
    title: "HVAC Systems",
    desc: "Climate control solutions including kitchen exhaust systems and energy-efficient equipment with maintenance-friendly installations.",
    icon: Icons.HVAC,
    tag: "Climate Control",
    stat: "Energy Efficient",
  },
  {
    title: "Equipment Solutions",
    desc: "Custom fabrication at our Saki Naka facility plus premium partnerships with Trustfrost, Mukunda Foods, and Hoshizaki.",
    icon: Icons.Equipment,
    tag: "Custom Fabrication",
    stat: "3 Premium Partners",
  },
  {
    title: "Talent Acquisition",
    desc: "Comprehensive hiring and training support for kitchen staff, front-of-house personnel, and specialized roles across all markets.",
    icon: Icons.Talent,
    tag: "Full Hiring Support",
    stat: "All Roles Covered",
  },
  {
    title: "Digital & Marketing",
    desc: "Aggregator management and comprehensive digital marketing across Zomato, Swiggy, Blinkit & more.",
    icon: Icons.Digital,
    tag: "Aggregator Management",
    stat: "4+ Platforms",
  },
];

const ServicesSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(SERVICES.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            SERVICES.forEach((_, i) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 300 + i * 110);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fade = (visible: boolean, delay = "") =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        id="services"
        ref={sectionRef}
        className="relative bg-[#0f0e0d] text-[#f2efe9] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute -top-40 -right-24 w-[600px] h-[600px] pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ── HEADER ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 pt-20 sm:pt-24 lg:pt-[110px] pb-14 sm:pb-16 lg:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end border-b border-white/[0.10]">
          <div>
            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500" />
                What We Do
              </span>
            </div>
            <h2
              className={`text-[clamp(38px,5vw,66px)] font-black leading-none tracking-[-0.02em] text-[#f2efe9] ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Complete<br />
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Solution</em><br />
              Portfolio.
            </h2>
          </div>

          <div>
            <p
              className={`text-[clamp(14px,1.4vw,16px)] font-light leading-[1.8] text-[#b0aaa2] max-w-[400px] mb-9 ${fade(heroVisible, "delay-200")}`}
            >
              A modular stack of services designed to support you from your first
              outlet all the way to multi-city scale — every piece built to work
              together.
            </p>
          </div>
        </div>

        {/* ── ALL 6 CARDS IN ONE ROW ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 py-16 sm:py-20 lg:py-[100px]">
          <div className="flex flex-col sm:flex-row gap-0.5">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group flex-1 min-w-0 bg-[#171614] border border-white/[0.10] p-6 relative overflow-hidden flex flex-col cursor-default transition-all duration-300 hover:border-orange-500 hover:bg-[#1c1916] ${
                    visibleCards[i]
                      ? "opacity-100 translate-y-0 transition-[opacity,transform,border-color,background] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: visibleCards[i] ? `${i * 0.1}s` : "0s" }}
                >
                  {/* Animated bottom bar */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />

                  {/* Top row: icon + number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-[42px] h-[42px] bg-[#24211e] border border-white/[0.07] flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500/10 group-hover:border-orange-500/25 transition-all duration-300">
                      <Icon />
                    </div>
                    <span
                      className="text-[44px] font-black leading-none text-white/[0.08] select-none group-hover:text-orange-100 transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <p className="text-[9px] font-medium tracking-[0.18em] uppercase text-orange-500 mb-2.5">
                    {service.tag}
                  </p>
                  <h3
                    className="text-[16px] font-bold leading-[1.25] text-[#f2efe9] mb-2.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[12px] font-light leading-[1.75] text-[#8c8680] flex-1 group-hover:text-[#b0aaa2] transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 pt-4 border-t border-white/[0.10] flex items-center gap-2">
                    <span className="text-[10px] font-medium tracking-[0.08em] text-[#8c8680] bg-[#24211e] border border-white/[0.10] px-2.5 py-1 group-hover:text-orange-500 group-hover:border-orange-500/25 transition-all duration-300">
                      {service.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 pb-16 sm:pb-20 lg:pb-24 border-t border-white/[0.10]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-12 sm:pt-14">
            <div>
              <h3
                className="text-[clamp(22px,2.5vw,28px)] font-bold text-[#f2efe9]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready to map your next kitchen?
              </h3>
              <p className="mt-2 text-[14px] font-light text-[#b0aaa2] max-w-md">
                Book a consult — we&apos;ll outline fit-out, equipment, or launch support for your city and timeline.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={ctaPrimaryClass}>
                Book a consult
              </Link>
              <Link href="/services" className={ctaSecondaryClass}>
                All services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
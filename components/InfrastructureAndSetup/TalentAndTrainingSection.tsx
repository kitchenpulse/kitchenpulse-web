"use client";
import React, { useEffect, useRef, useState } from "react";

const talentItems = [
  {
    title: "Comprehensive Recruitment",
    description:
      "End-to-end hiring support for chefs, kitchen teams, managers, and specialized roles aligned with your concept and standards.",
    icon: "🎯",
  },
  {
    title: "Structured Training Programs",
    description:
      "Customized training modules for new hires and existing staff focused on operations, safety, and brand-consistent service.",
    icon: "📐",
  },
  {
    title: "Performance & Service Standards",
    description:
      "Ongoing development to maintain high service levels, operational efficiency, and strong team culture across locations.",
    icon: "⚡",
  },
];

const roles = [
  { role: "Head Chefs & Sous Chefs", tag: "Kitchen Leadership" },
  { role: "Line Cooks & Prep Staff", tag: "Operations" },
  { role: "Restaurant Managers", tag: "Front-of-House" },
  { role: "Shift Leaders & Supervisors", tag: "Management" },
  { role: "Cloud Kitchen Specialists", tag: "D2C" },
  { role: "Back-Office & Admin", tag: "Support" },
];

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "92%", label: "Retention Rate" },
  { value: "30+", label: "Brands Staffed" },
];

const TalentAndTrainingSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [visibleRoles, setVisibleRoles] = useState<boolean[]>(new Array(6).fill(false));
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              talentItems.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 130);
              });
              roles.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleRoles((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, 200 + i * 80);
              });
            }, 300);
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
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        id="talent"
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

        {/* ── HERO BAND ── */}
        <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-end px-5 sm:px-[50px] lg:px-20 pt-[100px] pb-16 lg:pb-20 border-b border-black/[0.07]">

          {/* Left: Headline */}
          <div>
            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Talent &amp; Training
              </span>
            </div>
            <h2
              className={`text-[clamp(40px,5vw,68px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              People Who<br />Make Your<br />
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Brand Deliver.</em>
            </h2>
          </div>

          {/* Right: Body + Stats */}
          <div className="pb-2">
            <p className={`text-[clamp(14px,1.4vw,16px)] font-light leading-[1.8] text-[#6b6560] max-w-[400px] mb-10 ${fade(heroVisible, "delay-200")}`}>
              We source, train, and develop the teams that run your kitchens and
              front-of-house — so your brand delivers a consistent experience, every
              single day, across every location.
            </p>
            <div className={`flex border-t border-black/[0.07] pt-7 ${fade(heroVisible, "delay-300")}`}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 pr-5 ${i > 0 ? "pl-5 border-l border-black/[0.07]" : ""}`}
                >
                  <div
                    className="text-[clamp(26px,3vw,38px)] font-bold leading-none text-orange-500 mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] font-normal tracking-[0.12em] uppercase text-[#a09890]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-0.5 border-b border-black/[0.07]">

          {/* Cards column */}
          <div className="px-5 py-12 sm:px-[50px] sm:py-16 lg:px-20 lg:py-[72px] flex flex-col gap-0.5 border-b md:border-b-0 md:border-r border-black/[0.07]">
            <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a09890] mb-9 after:flex-1 after:max-w-12 after:h-px after:bg-black/[0.1]">
              What We Do
            </div>

            <div className="flex flex-col gap-0.5">
              {talentItems.map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-white border border-black/[0.07] px-7 py-8 overflow-hidden cursor-default transition-all duration-300 hover:border-orange-500 hover:bg-[#fffcfa] ${
                    visibleCards[index]
                      ? "opacity-100 translate-x-0 transition-[opacity,transform,border-color,background] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: visibleCards[index] ? `${index * 0.1}s` : "0s" }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-orange-500 to-orange-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-[400ms] origin-top" />

                  {/* Top row: icon + ghost number */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 bg-[#f0ede8] border border-black/[0.07] flex items-center justify-center text-[22px]">
                      {item.icon}
                    </div>
                    <span
                      className="text-[48px] font-black leading-none text-black/[0.04] select-none group-hover:text-orange-500/[0.08] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-[19px] font-bold leading-[1.25] text-[#1a1714] mb-2.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-light leading-[1.75] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Roles column */}
          <div className="px-5 py-12 sm:px-[36px] sm:py-16 lg:px-[52px] lg:py-[72px] flex flex-col">
            <div className="sticky top-8">
              <h3
                className={`text-[clamp(20px,2vw,26px)] font-bold leading-[1.25] text-[#1a1714] mb-2 ${fade(heroVisible)}`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Roles We Help<br />You{" "}
                <em className="text-orange-500" style={{ fontStyle: "italic" }}>Build</em>
              </h3>
              <p className={`text-[13px] font-light leading-[1.65] text-[#6b6560] mb-9 ${fade(heroVisible, "delay-100")}`}>
                From kitchen brigades to cloud kitchen specialists — every hire
                is matched to your standards.
              </p>

              <ul className="flex flex-col gap-[3px]">
                {roles.map((item, i) => (
                  <li
                    key={i}
                    className={`group flex items-center justify-between px-[18px] py-3.5 bg-white border border-black/[0.07] cursor-default transition-all duration-[250ms] hover:border-black/[0.12] hover:bg-[#fffcfa] ${
                      visibleRoles[i]
                        ? "opacity-100 translate-x-0 transition-[opacity,transform,background,border-color] duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: visibleRoles[i] ? `${i * 0.07}s` : "0s" }}
                  >
                    <span className="flex items-center gap-3 text-[13px] font-normal text-[#6b6560]">
                      <span className="w-[5px] h-[5px] rounded-full bg-orange-500 flex-shrink-0" />
                      {item.role}
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#a09890] bg-[#f0ede8] border border-black/[0.07] px-2.5 py-[3px] whitespace-nowrap group-hover:text-orange-500 group-hover:border-orange-200 transition-colors duration-[250ms]">
                      {item.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </section>
    </>
  );
};

export default TalentAndTrainingSection;
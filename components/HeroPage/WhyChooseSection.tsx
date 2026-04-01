"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiLightningBolt, HiCog, HiCurrencyRupee, HiUserGroup } from "react-icons/hi";

const reasons = [
  {
    title: "One-Stop Solution",
    desc: "From real estate sourcing to digital growth — everything under one roof.",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiLightningBolt,
    tag: "Full Stack",
    stat: "6 Services",
  },
  {
    title: "Seamless Integration",
    desc: "Coordinated execution across all operational functions.",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiCog,
    tag: "Operations",
    stat: "Zero Gaps",
  },
  {
    title: "Cost-Effective Model",
    desc: "25–30% savings through bulk purchasing and operational efficiencies.",
    img: "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiCurrencyRupee,
    tag: "Savings",
    stat: "25–30% Less",
  },
  {
    title: "Single Point of Contact",
    desc: "Dedicated team ensuring accountability and clarity.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiUserGroup,
    tag: "Accountability",
    stat: "1 Dedicated Team",
  },
];

/* ── Vertical divider between cards ──────────────────────────────── */
const VerticalConnector = ({ index }: { index: number }) => {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.strokeDasharray = "200";
    el.style.strokeDashoffset = "200";
    const anim = el.animate(
      [{ strokeDashoffset: "200" }, { strokeDashoffset: "0" }],
      { duration: 600, delay: index * 140 + 300, fill: "forwards", easing: "ease" }
    );
    return () => anim.cancel();
  }, [index]);

  return (
    <div className="flex justify-center" style={{ height: 56 }}>
      <svg width="2" height="56" viewBox="0 0 2 56" fill="none" overflow="visible">
        {/* Track */}
        <line x1="1" y1="0" x2="1" y2="56" stroke="rgba(249,115,22,0.15)" strokeWidth="1.5" strokeDasharray="5 4" />
        {/* Animated fill */}
        <line ref={lineRef} x1="1" y1="0" x2="1" y2="56" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arrow head */}
        <polygon points="-4,48 1,56 6,48" fill="rgba(249,115,22,0)" />
      </svg>
    </div>
  );
};

/* ── Main Section ─────────────────────────────────────────────────── */
const WhyChooseSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(reasons.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            reasons.forEach((_, i) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 300 + i * 140);
            });
          }
        });
      },
      { threshold: 0.06 }
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
        id="why-choose"
        ref={sectionRef}
        className="relative bg-[#faf9f7] text-[#1a1714] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Background image layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/printedp.jpg')" }}
        />

        {/* Light overlay */}
        <div className="absolute inset-0 z-[1] bg-[#faf9f7]/[0.88]" />

        {/* Grain */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 -right-[120px] -translate-y-1/2 w-[520px] h-[520px] pointer-events-none z-[2]"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ── HEADER ── */}
        <div className="relative z-[3] px-5 sm:px-[50px] lg:px-20 pt-16 sm:pt-20 lg:pt-[100px] pb-12 sm:pb-[60px] lg:pb-[72px] grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16 items-end border-b border-black/[0.07]">
          {/* Left */}
          <div>
            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500" />
                Why Us
              </span>
            </div>
            <h2
              className={`text-[clamp(38px,5vw,66px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why Choose<br />
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>KitchenPulse</em><br />?
            </h2>
          </div>

          {/* Right */}
          <div>
            <p
              className={`text-[clamp(14px,1.4vw,16px)] font-light leading-[1.8] text-[#6b6560] max-w-[400px] mb-9 ${fade(heroVisible, "delay-200")}`}
            >
              We bring structure, accountability, and measurable impact to every
              stage of your food business lifecycle — one partner, every layer.
            </p>
          </div>
        </div>

        {/* ── ROW OF CARDS ── */}
        <div className="relative z-[3] px-5 sm:px-[50px] lg:px-20 py-14 sm:py-16 lg:py-[100px]">
          <div className="flex flex-col sm:flex-row gap-5 items-stretch">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <React.Fragment key={item.title}>
                  {/* ── Card ── */}
                  <div
                    className={`group flex-1 min-w-0 bg-white/80 backdrop-blur-sm border border-black/[0.07] overflow-hidden relative transition-all duration-300 hover:border-orange-500 hover:bg-white ${
                      visibleCards[index]
                        ? "opacity-100 translate-y-0 transition-[opacity,transform,border-color,background] duration-[550ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        : "opacity-0 translate-y-7"
                    }`}
                    style={{ transitionDelay: visibleCards[index] ? `${index * 0.08}s` : "0s" }}
                  >
                    {/* Animated bottom bar */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] origin-left z-10" />

                    {/* Image */}
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover block transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                        style={{ filter: "grayscale(20%) brightness(0.88)" }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(250,249,247,0.92) 0%, rgba(250,249,247,0.3) 50%, transparent 100%)",
                        }}
                      />
                      <span className="absolute top-4 left-4 text-[9px] font-medium tracking-[0.2em] uppercase text-orange-500 bg-white/80 border border-orange-200 px-2.5 py-1 backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="px-7 pt-6">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 bg-[#f0ede8] border border-black/[0.07] flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-50 group-hover:border-orange-200 transition-all duration-300">
                          <Icon size={17} />
                        </div>
                        <h3
                          className="text-[clamp(17px,1.8vw,22px)] font-bold leading-[1.2] text-[#1a1714]"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13px] font-light leading-[1.8] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-5 mx-0 px-7 pb-5 pt-3.5 border-t border-black/[0.06] flex items-center justify-between">
                      <span className="text-[10px] font-medium tracking-[0.08em] text-[#a09890] bg-[#f0ede8] border border-black/[0.06] px-2.5 py-1 group-hover:text-orange-500 group-hover:border-orange-200 transition-all duration-300">
                        {item.stat}
                      </span>
                      <span
                        className="text-[28px] font-black leading-none text-orange-500/[0.12] select-none group-hover:text-orange-500/[0.25] transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;
"use client";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    label: "Dealer Network",
    description:
      "Extensive dealer and property network across major and emerging Indian cities.",
    icon: "🏙️",
  },
  {
    label: "Pre-Negotiated Rates",
    description:
      "Pre-negotiated rates from 1800+ vetted F&B-suitable properties for faster decisions.",
    icon: "📋",
  },
  {
    label: "Prime Locations",
    description:
      "Prime locations for dine-in, cloud kitchens, and D2C fulfillment centers.",
    icon: "📍",
  },
  {
    label: "Tier 2 & 3 Expertise",
    description:
      "Deep understanding of Tier 2 & 3 city dynamics for confident expansion.",
    icon: "🗺️",
  },
];

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    alt: "Mumbai skyline",
    city: "Mumbai",
  },
  {
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    alt: "Delhi cityscape",
    city: "Delhi",
  },
  {
    url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
    alt: "Bangalore city",
    city: "Bangalore",
  },
];

const stats = [
  { value: "1800+", label: "Vetted Properties" },
  { value: "Pan-India", label: "City Coverage" },
  { value: "Tier 2 & 3", label: "Deep Expertise" },
];

const intelPoints = [
  "1800+ vetted properties ready for F&B and D2C use",
  "Ground-level insight across Tier 1, 2 & 3 cities",
  "End-to-end support from shortlisting to deal closure",
];

const StrategicLocationIntelligenceSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              highlights.forEach((_, i) => {
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
        @keyframes sli-ken-burns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        @keyframes sli-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        .sli-img-active {
          opacity: 1 !important;
          animation: sli-ken-burns 8s ease forwards;
        }
      `}</style>

      <section
        id="location"
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
          <div className="relative z-[2] flex flex-col justify-center bg-[#faf9f7] px-5 py-12 sm:px-[50px] sm:py-16 lg:px-20 lg:py-20">

            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Location Intelligence
              </span>
            </div>

            <h2
              className={`text-[clamp(42px,5.5vw,76px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] mb-7 ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Where{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Location</em>
              <br />Becomes
              <br />Advantage.
            </h2>

            <p
              className={`text-[clamp(14px,1.5vw,16px)] font-light leading-[1.75] text-[#6b6560] max-w-[420px] mb-10 ${fade(heroVisible, "delay-200")}`}
            >
              We combine on-ground expertise with data-driven insight to secure
              locations that maximize visibility, operational efficiency, and
              long-term profitability for F&amp;B and D2C brands.
            </p>

          
            {/* Stats strip */}
            
          </div>

          {/* Right: Crossfading image panel */}
          <div className={`relative overflow-hidden min-h-[360px] md:min-h-0 ${fade(heroVisible, "delay-200")}`}>

            {/* Diagonal cutout (desktop only) */}
            <div
              className="absolute top-0 left-[-1px] w-20 h-full bg-[#faf9f7] z-[2] hidden md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />

            {/* Images */}
            {heroImages.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-in-out ${i === activeImage ? "sli-img-active" : ""}`}
                style={{ filter: "brightness(0.78) saturate(0.85)" }}
              />
            ))}

            {/* City badge */}
            <div className="absolute top-6 left-14 md:left-14 z-[3] bg-white/80 border border-black/[0.09] backdrop-blur-md px-4 py-2 text-[12px] font-medium tracking-[0.08em] uppercase text-[#1a1714] flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-orange-500"
                style={{ animation: "sli-pulse 2s ease infinite" }}
              />
              {heroImages[activeImage].city}
            </div>

            {/* Dot controls */}
            <div className="absolute bottom-8 right-8 z-[3] flex items-center gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show ${heroImages[i].city}`}
                  className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                    i === activeImage
                      ? "bg-orange-500 scale-[1.35]"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 left-14 z-[3] bg-white/90 border border-black/[0.08] backdrop-blur-md px-5 py-4 max-w-[210px]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-orange-500 font-medium mb-2">
                Pan-India Network
              </div>
              <div
                className="text-[17px] font-bold leading-[1.25] text-[#1a1714]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Prime Real Estate, Placed Right
              </div>
            </div>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 py-16 sm:py-20 lg:py-[100px]">

          {/* Section label */}
          <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a09890] mb-12 after:flex-1 after:max-w-16 after:h-px after:bg-black/[0.1]">
            Our Capabilities
          </div>

          {/* 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white border border-black/[0.07] px-8 py-10 overflow-hidden cursor-default transition-all duration-300 hover:border-orange-500 hover:bg-[#fffcfa] ${
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
                  className="absolute top-4 right-5 text-[72px] font-black leading-none text-black/[0.04] select-none group-hover:text-orange-500/[0.07] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  0{index + 1}
                </span>

                <span className="text-[26px] mb-5 block">{item.icon}</span>
                <h3
                  className="text-[19px] font-bold leading-[1.25] text-[#1a1714] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.label}
                </h3>
                <p className="text-[13px] font-light leading-[1.75] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── INTEL PANEL ── */}
        <div className="relative z-[2] mx-5 sm:mx-[50px] lg:mx-20 mb-16 sm:mb-20 lg:mb-[100px] bg-white border border-black/[0.07] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] overflow-hidden">

          {/* Content side */}
          <div className="flex flex-col justify-center px-7 py-11 sm:px-14 sm:py-14">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-5">
              How We Source for You
            </p>
            <h3
              className="text-[clamp(24px,2.5vw,34px)] font-bold leading-[1.2] text-[#1a1714] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sourcing That Goes{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Beyond</em>{" "}
              the Listing
            </h3>
            <p className="text-[14px] font-light leading-[1.8] text-[#6b6560] mb-9 max-w-[440px]">
              From off-market properties to pre-negotiated lease terms, our network
              gives you a real edge — whether you're launching your first outlet or
              scaling to fifty.
            </p>
            <ul className="flex flex-col gap-3.5">
              {intelPoints.map((item, i) => (
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

          {/* Image side */}
          <div className="group relative min-h-[320px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=85&auto=format&fit=crop"
              alt="City expansion"
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-[1.05]"
              style={{ filter: "brightness(0.75) saturate(0.8)" }}
            />
            {/* Warm tint overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>

      </section>
    </>
  );
};

export default StrategicLocationIntelligenceSection;
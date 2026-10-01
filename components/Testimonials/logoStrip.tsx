"use client";
import React from "react";

const logos = [
  { name: "Cluckin",       src: "/assets/clucin.png",        initials: "CK" },
  { name: "Sadak Chaap",  src: "/assets/sadakchap.jpeg",   initials: "MM" },
  { name: "Charcoal Eats", src: "/assets/charcoaleats.jpg",  initials: "CE" },
  { name: "Kerala Café",   src: "/assets/keralacafe.png",    initials: "KC" },
  { name: "Rebel Foods",   src: "/assets/rebelfoods.jpeg",    initials: "RF" },
  { name: "Enoki",     src: "/assets/enoki.jpeg",     initials: "FC" },
  { name: "Kytchens",        src: "/assets/kytchens.jpeg",        initials: "EF" },
  { name: "Kissan Connect", src: "/assets/kissanconnect.jpeg",           initials: "BBK" },
  { name: "MH99 Burgers",       src: "/assets/burgers.jpeg",       initials: "FC" },
];

// Duplicate for seamless infinite scroll
const track = [...logos, ...logos, ...logos];

const LogoStrip: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes marquee-ltr {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .logo-track-ltr {
          animation: marquee-ltr 28s linear infinite;
          will-change: transform;
        }
        .logo-track-rtl {
          animation: marquee-rtl 32s linear infinite;
          will-change: transform;
        }

        .logo-strip-wrap:hover .logo-track-ltr,
        .logo-strip-wrap:hover .logo-track-rtl {
          animation-play-state: paused;
        }

        .logo-card {
          transition: border-color 0.25s, background 0.25s;
        }
        .logo-card:hover {
          border-color: rgba(249,115,22,0.4) !important;
          background: #1c1916 !important;
        }
      `}</style>

      <section
        className="relative bg-[#0f0e0d] overflow-hidden border-y border-white/[0.08]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Left & right edge fades */}
        <div className="absolute left-0 top-0 h-full w-24 z-[3] pointer-events-none"
          style={{ background: "linear-gradient(to right, #0f0e0d, transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-24 z-[3] pointer-events-none"
          style={{ background: "linear-gradient(to left, #0f0e0d, transparent)" }} />

        {/* Section label */}
        <div className="relative z-[2] flex items-center justify-center pt-10 pb-6">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#7a746e]">
            <span className="w-8 h-px bg-white/[0.12] inline-block" />
            Trusted by Leading F&amp;B Brands
            <span className="w-8 h-px bg-white/[0.12] inline-block" />
          </span>
        </div>

        {/* Row 1 — left to right */}
        <div className="relative z-[2] logo-strip-wrap overflow-hidden mb-0.5">
          <div className="flex logo-track-ltr" style={{ width: "max-content" }}>
            {track.map((logo, i) => (
              <div
                key={i}
                className="logo-card flex items-center gap-3.5 mx-1.5 px-6 py-4 bg-[#171614] border border-white/[0.08] cursor-default select-none"
                style={{ minWidth: 200 }}
              >
                {/* Logo or initials */}
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#24211e] border border-white/[0.08] rounded-[4px] overflow-hidden">
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <span
                      className="text-[13px] font-bold text-orange-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {logo.initials}
                    </span>
                  )}
                </div>
                <span className="text-[13px] font-medium text-[#f2efe9] whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative z-[2] logo-strip-wrap overflow-hidden">
          <div className="flex logo-track-rtl" style={{ width: "max-content" }}>
            {[...track].reverse().map((logo, i) => (
              <div
                key={i}
                className="logo-card flex items-center gap-3.5 mx-1.5 px-6 py-4 bg-[#171614] border border-white/[0.08] cursor-default select-none"
                style={{ minWidth: 200 }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#24211e] border border-white/[0.08] rounded-[4px] overflow-hidden">
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <span
                      className="text-[13px] font-bold text-orange-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {logo.initials}
                    </span>
                  )}
                </div>
                <span className="text-[13px] font-medium text-[#f2efe9] whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-[2] h-10" />
      </section>
    </>
  );
};

export default LogoStrip;
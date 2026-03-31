"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";



const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#faf9f7]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-[heroZoom_14s_ease_forwards]"
        style={{
          backgroundImage: "url('assets/chefing.jpeg')",
          filter: "brightness(1.05) saturate(0.7)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Light overlay — heavy left, clear right */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(105deg, rgba(250,249,247,0.94) 0%, rgba(250,249,247,0.78) 45%, rgba(250,249,247,0.18) 100%)",
        }}
      />

      {/* Orange glow accent */}
      <div
        className="absolute z-[3] pointer-events-none -bottom-[120px] -left-[80px] w-[500px] h-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Vertical rule (hidden on mobile) */}
      <div
        className="absolute top-10 bottom-10 left-20 w-px z-[4] hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(249,115,22,0.3) 30%, rgba(249,115,22,0.3) 70%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-[4] w-full max-w-[1280px] mx-auto px-5 sm:px-7 md:px-[50px] lg:px-20 text-[#1a1714]">

        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-7 transition-all duration-700 ease-out delay-[50ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-orange-500" />
          F&amp;B &amp; D2C Growth Partners
        </div>

        {/* Headline */}
        <h1
          className={`text-[clamp(44px,6.5vw,90px)] font-black leading-none tracking-[-0.025em] text-[#1a1714] max-w-[780px] mb-7 transition-all duration-[750ms] ease-out delay-[150ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Powering Brands
          <br />
          From{" "}
          <em className="text-orange-500" style={{ fontStyle: "italic" }}>
            Setup
          </em>
          <br />
          to Scale.
        </h1>

        {/* Subheadline */}
        <p
          className={`text-[clamp(15px,1.6vw,18px)] font-light leading-[1.75] text-[#6b6560] max-w-[520px] mb-11 transition-all duration-700 ease-out delay-[280ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          End-to-end solutions across real estate, infrastructure, culinary
          innovation, staffing, and digital growth — all under one roof.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center gap-5 mb-16 transition-all duration-700 ease-out delay-[380ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium tracking-[0.06em] uppercase px-[30px] py-4 no-underline transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            }}
          >
            Schedule a Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-transparent text-[#6b6560] hover:text-[#1a1714] text-[13px] font-normal tracking-[0.05em] border border-[#d4cfc9] hover:border-[#a09890] px-7 py-[15px] no-underline transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path
                d="M5 7h4M7 5l2 2-2 2"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        

      </div>

      {/* Minimal style block — only for things Tailwind can't express:
          custom keyframe + Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes heroZoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
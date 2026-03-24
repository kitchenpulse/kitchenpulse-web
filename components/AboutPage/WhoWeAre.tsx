"use client";

import React, { useState } from "react";

const founders = [
  {
    name: "Rahul Sharma",
    title: "Co-Founder & CEO",
    bio: "Visionary leader with 15+ years in the F&B industry, driving Kitchen Pulse's mission to transform how food brands scale across India.",
    initials: "RS",
    linkedin: "#",
  },
  {
    name: "Priya Mehta",
    title: "Co-Founder & COO",
    bio: "Operations expert with deep expertise in D2C growth, supply chain, and building scalable systems for high-growth food businesses.",
    initials: "PM",
    linkedin: "#",
  },
];

const contactDetails = [
  {
    label: "Office Address",
    value: "Unit 4B, Saki Naka Business Park,\nAndheri East, Mumbai – 400072",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "hello@kitchenpulse.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+91 98765 43210",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.99 2.18 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
];

const WhoWeAre = () => {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 px-6 md:px-10 overflow-hidden bg-white"
      
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/3 w-[500px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #ea580c 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[350px] h-[250px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold">Who We Are</p>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black  mb-5 leading-tight">
            Built by{" "}
            <span style={{ WebkitTextStroke: "1px #ea580c", color: "transparent" }}>
              Operators,
            </span>{" "}
            for Operators
          </h2>
          <p className="text-gray-900 text-sm md:text-base leading-relaxed">
            <span className="font-semibold text-orange-500">Kitchen Pulse</span> is your complete F&amp;B and D2C
            success partner — offering end-to-end solutions for seamless launches,
            optimized operations, and sustained growth across every stage of your
            business journey.
          </p>
        </div>

        {/* ── Mission & Vision ── */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {[
            {
              label: "Our Mission",
              text: "Empowering F&B brands, restaurants, and D2C companies through integrated solutions spanning real estate, infrastructure, culinary innovation, digital marketing, staffing, and operational excellence.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              ),
            },
            {
              label: "Our Vision",
              text: "To become India's most trusted comprehensive partner for F&B and D2C growth — delivering measurable impact, innovation-driven results, and long-term sustainable success for every business we empower.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-orange-900/30 p-7"
              style={{ background: "linear-gradient(145deg, #181008 0%, #120c04 100%)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-orange-400"
                  style={{ background: "rgba(234,88,12,0.1)", border: "1px solid rgba(234,88,12,0.2)" }}
                >
                  {item.icon}
                </div>
                <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">{item.label}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              <div className="mt-5 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* ── Founders ── */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold text-center mb-8">
            Meet the Founders
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {founders.map((founder, i) => {
              const isHovered = hoveredFounder === i;
              return (
                <div
                  key={founder.name}
                  className="relative rounded-2xl border overflow-hidden cursor-default transition-all duration-400"
                  style={{
                    background: isHovered
                      ? "linear-gradient(145deg, #231508 0%, #1c1007 100%)"
                      : "linear-gradient(145deg, #181008 0%, #120c04 100%)",
                    borderColor: isHovered ? "rgba(234,88,12,0.4)" : "rgba(234,88,12,0.15)",
                    boxShadow: isHovered ? "0 0 40px rgba(234,88,12,0.15)" : "none",
                    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredFounder(i)}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0.3 }}
                  />

                  <div className="flex items-start gap-5 p-7">
                    {/* Avatar */}
                    <div
                      className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl text-lg font-bold text-orange-400 transition-all duration-300"
                      style={{
                        background: isHovered ? "rgba(234,88,12,0.15)" : "rgba(234,88,12,0.08)",
                        border: "1px solid rgba(234,88,12,0.25)",
                      }}
                    >
                      {founder.initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-lg leading-tight">{founder.name}</h3>
                      <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-3">
                        {founder.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">{founder.bio}</p>

                      {/* LinkedIn pill */}
                      <a
                        href={founder.linkedin}
                        className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-orange-300"
                        style={{
                          color: "#ea580c",
                          background: "rgba(234,88,12,0.08)",
                          border: "1px solid rgba(234,88,12,0.15)",
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Contact ── */}
        <div
          className="rounded-2xl border border-orange-900/30 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0e05 0%, #231508 100%)" }}
        >
          <div className="px-7 pt-7 pb-4 border-b border-orange-900/20">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold">Get in Touch</p>
          </div>
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-orange-900/20">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-7">
                <div
                  className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl text-orange-400 mt-0.5"
                  style={{ background: "rgba(234,88,12,0.08)", border: "1px solid rgba(234,88,12,0.18)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-orange-600 font-semibold mb-1.5">{item.label}</p>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
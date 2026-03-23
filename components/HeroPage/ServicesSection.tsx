
"use client"
import React, { useState } from "react"
import { GiWhiteBook } from "react-icons/gi"

// Lucide-style inline SVG icons for each service
const Icons = {
  RealEstate: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  Civil: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="6" width="20" height="14" rx="1"/>
      <path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/>
      <line x1="12" y1="10" x2="12" y2="16"/>
      <line x1="9" y1="13" x2="15" y2="13"/>
    </svg>
  ),
  HVAC: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  Equipment: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4L19.1 3.3a1 1 0 00-1.4 0L14.7 6.3z"/>
      <path d="M7 13l4 4L4 21l3-8z"/>
      <path d="M15 9l-8 8"/>
    </svg>
  ),
  Talent: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  Digital: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
}

const SERVICES = [
  {
    title: "Real Estate Sourcing",
    desc: "Expert location intelligence across tier 2 & 3 cities with pre-negotiated rates from our database of 1800+ F&B-suitable properties.",
    icon: Icons.RealEstate,
    accent: "from-orange-500 to-amber-400",
    tag: "Location Intelligence",
    stat: "1800+ Properties",
  },
  {
    title: "Civil & Infrastructure",
    desc: "Complete civil development with standardized processes ensuring consistency and quality across all locations nationwide.",
    icon: Icons.Civil,
    accent: "from-orange-600 to-orange-400",
    tag: "Nationwide Coverage",
    stat: "Pan India",
  },
  {
    title: "HVAC Systems",
    desc: "Climate control solutions including kitchen exhaust systems and energy-efficient equipment with maintenance-friendly installations.",
    icon: Icons.HVAC,
    accent: "from-amber-500 to-yellow-400",
    tag: "Climate Control",
    stat: "Energy Efficient",
  },
  {
    title: "Equipment Solutions",
    desc: "Custom fabrication at our Saki Naka facility plus premium partnerships with Trustfrost, Mukunda Foods, and Hoshizaki.",
    icon: Icons.Equipment,
    accent: "from-orange-500 to-red-400",
    tag: "Custom Fabrication",
    stat: "3 Premium Partners",
  },
  {
    title: "Talent Acquisition",
    desc: "Comprehensive hiring and training support for kitchen staff, front-of-house personnel, and specialized roles across all markets.",
    icon: Icons.Talent,
    accent: "from-amber-600 to-orange-400",
    tag: "Full Hiring Support",
    stat: "All Roles Covered",
  },
  {
    title: "Digital & Marketing",
    desc: "Aggregator management and comprehensive digital marketing across Zomato, Swiggy, Blinkit & more.",
    icon: Icons.Digital,
    accent: "from-orange-400 to-amber-300",
    tag: "Aggregator Management",
    stat: "4+ Platforms",
  },
]

const ServicesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      className="relative py-24 px-6 md:px-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1209 50%, #0f0f0f 100%)" }}
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)" }}
        />
        {/* Subtle grid overlay */}
       
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold">
              Services
            </p>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Complete{" "}
            <span
              className="relative inline-block"
              style={{ WebkitTextStroke: "1px #ea580c", color: "transparent" }}
            >
              Solution
            </span>{" "}
            Portfolio
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            A modular stack of services designed to support you from first
            outlet to multi-city scale.
          </p>
        </div>

        {/* Hero card — first service */}
        <div className="mb-6">
          <div
            className="relative overflow-hidden rounded-3xl border border-orange-900/40 cursor-pointer transition-all duration-500 bg-white"
           
            onMouseEnter={() => setHovered(-1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              {/* Icon area */}
              <div className="shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-black border border-orange-500/20 text-orange-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
                  <path d="M9 21V12h6v9"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-2 block">Location Intelligence</span>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">Real Estate Sourcing</h3>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed max-w-2xl">
                  Expert location intelligence across tier 2 & 3 cities with pre-negotiated rates from our database of 1800+ F&B-suitable properties.
                </p>
              </div>
              <div className="shrink-0 text-center">
                <div
                  className="text-4xl font-black"
                  style={{ WebkitTextStroke: "1px #ea580c", color: "transparent" }}
                >
                  1800+
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Properties</div>
              </div>
            </div>
            {/* Decorative bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
          </div>
        </div>

        {/* 5-card grid */}
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.slice(1).map((service, i) => {
            const Icon = service.icon
            const idx = i + 1
            const isHovered = hovered === idx

            return (
              <div
                key={service.title + i}
                className="relative group rounded-2xl border border-orange-900/30 overflow-hidden cursor-pointer transition-all duration-400 bg-white"
               
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.accent} transition-opacity duration-300`}
                  style={{ opacity: isHovered ? 1 : 0.3 }}
                />

                <div className="p-6 flex flex-col h-full">
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl text-orange-400 transition-all duration-300 bg-black"
                      // style={{
                      //   background: isHovered ? "rgba(234,88,12,0.15)" : "rgba(234,88,12,0.08)",
                      //   border: "1px solid rgba(234,88,12,0.2)",
                      // }}
                    >
                      <Icon />
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider tabular-nums"
                      style={{ color: "rgba(234,88,12,0.35)" }}
                    >
                      {String(idx).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-orange-600 font-bold mb-2">
                    {service.tag}
                  </span>
                  <h3 className="text-base font-bold text-black mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-900 text-xs leading-relaxed flex-1">
                    {service.desc}
                  </p>

                  {/* Stat pill */}
                  <div className="mt-4 pt-4 border-t border-orange-900/20">
                    <span
                      className="inline-block text-[10px] font-semibold px-2 py-1 rounded-md"
                      style={{
                        background: "rgba(234,88,12,0.08)",
                        color: "#ea580c",
                        border: "1px solid rgba(234,88,12,0.15)",
                      }}
                    >
                      {service.stat}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      
      </div>
    </section>
  )
}

export default ServicesSection
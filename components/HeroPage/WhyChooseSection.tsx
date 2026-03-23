"use client"
import React, { useEffect, useRef } from "react"
import { HiLightningBolt, HiCog, HiCurrencyRupee, HiUserGroup } from "react-icons/hi"

const reasons = [
  {
    title: "One-Stop Solution",
    desc: "From real estate sourcing to digital growth — everything under one roof.",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiLightningBolt,
  },
  {
    title: "Seamless Integration",
    desc: "Coordinated execution across all operational functions.",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiCog,
  },
  {
    title: "Cost-Effective Model",
    desc: "25–30% savings through bulk purchasing and operational efficiencies.",
    img: "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiCurrencyRupee,
  },
  {
    title: "Single Point of Contact",
    desc: "Dedicated team ensuring accountability and clarity.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: HiUserGroup,
  },
]

/* ── Animated Arrow SVG ───────────────────────────────────────────── */
const AnimatedArrow = ({ fromLeft, index }: { fromLeft: boolean; index: number }) => {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = `${len}`
    path.style.strokeDashoffset = `${len}`
    path.style.animation = `drawPath 1.2s ease forwards`
    path.style.animationDelay = `${index * 0.25}s`
  }, [index])

  const W = 800
  const H = 90

  const leftPath = `M ${W * 0.41} 5 C ${W * 0.5} -30, ${W * 0.5} 100, ${W * 0.59} ${H - 5}`
  const rightPath = `M ${W * 0.59} 5 C ${W * 0.5} -30, ${W * 0.5} 100, ${W * 0.41} ${H - 5}`

  const d = fromLeft ? leftPath : rightPath
  const arrowId = `arrow-${index}`
  const glowId = `glow-${index}`
  const animId = `flowDot-${index}`

  return (
    <div className="hidden md:block w-full relative" style={{ height: 90 }}>
      <style>{`
        @keyframes drawPath {
          to { stroke-dashoffset: 0; }
        }
        @keyframes ${animId} {
          0%   { offset-distance: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .dot-${index} {
          offset-path: path('${d}');
          animation: ${animId} 1.6s ease-in-out infinite;
          animation-delay: ${index * 0.3}s;
        }
      `}</style>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full overflow-visible"
        fill="none"
      >
        <defs>
          <marker
            id={arrowId}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
          </marker>

          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={d}
          stroke="#e5e7eb"
          strokeWidth="2"
          strokeDasharray="6 4"
          strokeLinecap="round"
        />

        <path
          ref={pathRef}
          d={d}
          stroke="#ef4444"
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd={`url(#${arrowId})`}
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />
      </svg>

      <div
        className={`dot-${index} absolute`}
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#ef4444",
          boxShadow: "0 0 10px 4px rgba(239,68,68,0.7)",
          top: 0,
          left: 0,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}

/* ── Main Section ─────────────────────────────────────────────────── */
const WhyChooseSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-8 relative overflow-hidden"
      style={{ backgroundImage: "url('/assets/printedp.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/30" />
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-black mb-3">
            Why us
          </p>
          <h2 className="text-5xl md:text-4xl font-bold text-black mb-3">
            Why Choose KitchenPulse?
          </h2>
          <p className="text-black font-bold max-w-2xl mx-auto text-sm md:text-base">
            We bring structure, accountability, and measurable impact to every
            stage of your food business lifecycle.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {reasons.map((item, index) => {
            const isLeft = index % 2 === 0
            const isLast = index === reasons.length - 1
            const Icon = item.icon

            return (
              <div key={item.title}>
                {/* Card */}
                <div className="flex flex-col md:flex-row items-center">
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="group relative rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
                      </div>

                      {/* Content BELOW image */}
                      <div className="p-4">
                       

                        <h3 className="mb-1">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                            <Icon className="h-5 w-5 text-black" />
                            <span className="text-lg font-semibold text-black tracking-tight">
                              {item.title}
                            </span>
                          </div>
                        </h3>

                        <p className="text-sm text-black">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Arrow to next card */}
                {!isLast && (
                  <AnimatedArrow fromLeft={isLeft} index={index} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection

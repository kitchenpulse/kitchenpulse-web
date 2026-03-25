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

/* ── Animated connector between cards ─────────────────────────────── */
const Connector = ({ fromLeft, index }: { fromLeft: boolean; index: number }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    const anim = path.animate(
      [{ strokeDashoffset: `${len}` }, { strokeDashoffset: "0" }],
      { duration: 1200, delay: index * 260, fill: "forwards", easing: "ease" }
    );
    return () => anim.cancel();
  }, [index]);

  const W = 800;
  const H = 80;
  const d = fromLeft
    ? `M ${W * 0.41} 4 C ${W * 0.5} -28, ${W * 0.5} 98, ${W * 0.59} ${H - 4}`
    : `M ${W * 0.59} 4 C ${W * 0.5} -28, ${W * 0.5} 98, ${W * 0.41} ${H - 4}`;

  return (
    <div className="hidden md:block w-full relative" style={{ height: 80 }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full overflow-visible"
        fill="none"
      >
        <defs>
          <marker id={`arr-${index}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f97316" />
          </marker>
        </defs>
        {/* Track */}
        <path d={d} stroke="rgba(249,115,22,0.12)" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
        {/* Animated fill */}
        <path
          ref={pathRef}
          d={d}
          stroke="#f97316"
          strokeWidth="1.5"
          strokeLinecap="round"
          markerEnd={`url(#arr-${index})`}
        />
      </svg>
    </div>
  );
};

/* ── Main Section ─────────────────────────────────────────────────── */
const WhyChooseSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(reasons.length).fill(false));
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .wc-section {
          font-family: 'DM Sans', sans-serif;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .wc-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Background image layer */
        .wc-bg {
          position: absolute;
          inset: 0;
          background-image: url('/assets/printedp.jpg');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        /* Dark overlay — heavy enough to match the dark site feel */
        .wc-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(8, 8, 8, 0.82);
        }

        /* Grain on top of overlay */
        .wc-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Ambient glow */
        .wc-glow {
          position: absolute;
          top: 50%; right: -120px;
          transform: translateY(-50%);
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── HEADER ── */
        .wc-header {
          position: relative;
          z-index: 2;
          padding: 100px 80px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: end;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        @media (max-width: 1100px) { .wc-header { padding: 80px 50px 60px; gap: 40px; } }
        @media (max-width: 800px)  { .wc-header { grid-template-columns: 1fr; padding: 60px 28px 48px; gap: 28px; } }
        @media (max-width: 480px)  { .wc-header { padding: 48px 20px 40px; } }

        .wc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 24px;
        }

        .wc-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .wc-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
        }

        .wc-headline em { font-style: italic; color: #f97316; }

        .wc-header-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #9e9690;
          max-width: 400px;
          margin-bottom: 36px;
        }

        .wc-header-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 28px;
        }

        .wc-hstat { flex: 1; padding-right: 20px; }
        .wc-hstat + .wc-hstat { padding-left: 20px; border-left: 1px solid rgba(255,255,255,0.06); }

        .wc-hstat-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }

        .wc-hstat-lbl {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── TIMELINE BODY ── */
        .wc-timeline {
          position: relative;
          z-index: 2;
          padding: 60px 80px 100px;
          max-width: 1280px;
          margin: 0 auto;
        }

        @media (max-width: 1100px) { .wc-timeline { padding: 48px 50px 80px; } }
        @media (max-width: 800px)  { .wc-timeline { padding: 40px 28px 60px; } }
        @media (max-width: 480px)  { .wc-timeline { padding: 32px 20px 48px; } }

        /* ── CARD ROW ── */
        .wc-row {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .wc-card-wrap {
          width: 100%;
          display: flex;
        }

        .wc-card-wrap.left  { justify-content: flex-start; }
        .wc-card-wrap.right { justify-content: flex-end; }

        /* The card itself */
        .wc-card {
          width: 46%;
          background: rgba(10,10,10,0.7);
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: translateY(28px);
          transition: border-color 0.35s, background 0.35s;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        @media (max-width: 800px) { .wc-card { width: 100%; } }

        .wc-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.35s, background 0.35s;
        }

        .wc-card:hover {
          border-color: #f97316;
          background: rgba(15,10,5,0.8);
        }

        /* Orange bottom bar on hover */
        .wc-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s ease;
        }

        .wc-card:hover::after { transform: scaleX(1); }

        /* Image */
        .wc-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          overflow: hidden;
        }

        .wc-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: grayscale(30%) brightness(0.75);
        }

        .wc-card:hover .wc-card-img-wrap img {
          transform: scale(1.06);
          filter: grayscale(0%) brightness(0.85);
        }

        /* Scrim over image */
        .wc-card-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 50%, transparent 100%);
          pointer-events: none;
        }

        /* Tag overlaid on image */
        .wc-card-img-tag {
          position: absolute;
          top: 16px; left: 16px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(249,115,22,0.3);
          padding: 4px 10px;
          backdrop-filter: blur(4px);
        }

        /* Content below image */
        .wc-card-body {
          padding: 24px 28px 0;
        }

        .wc-card-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .wc-card-icon-box {
          width: 36px; height: 36px;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s;
        }

        .wc-card:hover .wc-card-icon-box {
          background: #2a1a0a;
          border-color: #3a2010;
        }

        .wc-card-icon-box svg { width: 17px; height: 17px; }

        .wc-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(17px, 1.8vw, 22px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
        }

        .wc-card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          transition: color 0.3s;
        }

        .wc-card:hover .wc-card-desc { color: #9e9690; }

        .wc-card-footer {
          margin-top: 20px;
          padding: 14px 28px 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wc-card-stat {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #3a3530;
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.06);
          padding: 4px 10px;
          transition: color 0.3s, border-color 0.3s;
        }

        .wc-card:hover .wc-card-stat {
          color: #f97316;
          border-color: #3a2010;
        }

        .wc-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          color: rgba(249,115,22,0.12);
          line-height: 1;
          transition: color 0.3s;
          user-select: none;
        }

        .wc-card:hover .wc-card-num { color: rgba(249,115,22,0.25); }

        /* Fade utilities */
        .wc-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .wc-fade.visible { opacity: 1; transform: translateY(0); }
        .wc-d1 { transition-delay: 0.1s; }
        .wc-d2 { transition-delay: 0.2s; }
        .wc-d3 { transition-delay: 0.3s; }
      `}</style>

      <section id="why-choose" className="wc-section" ref={sectionRef}>
        {/* Background */}
        <div className="wc-bg" />
        <div className="wc-grain" />
        <div className="wc-glow" />

        {/* ── HEADER ── */}
        <div className="wc-header">
          <div>
            <div className={`wc-fade ${heroVisible ? "visible" : ""}`}>
              <span className="wc-eyebrow">
                <span className="wc-eyebrow-line" />
                Why Us
              </span>
            </div>
            <h2 className={`wc-headline wc-fade wc-d1 ${heroVisible ? "visible" : ""}`}>
              Why Choose<br /><em>KitchenPulse</em><br />?
            </h2>
          </div>

          <div>
            <p className={`wc-header-body wc-fade wc-d2 ${heroVisible ? "visible" : ""}`}>
              We bring structure, accountability, and measurable impact to every
              stage of your food business lifecycle — one partner, every layer.
            </p>
            <div className={`wc-header-stats wc-fade wc-d3 ${heroVisible ? "visible" : ""}`}>
              {[
                { v: "4", l: "Key Advantages" },
                { v: "30%", l: "Cost Savings" },
                { v: "1", l: "Point of Contact" },
              ].map((s, i) => (
                <div className="wc-hstat" key={i}>
                  <div className="wc-hstat-val">{s.v}</div>
                  <div className="wc-hstat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div className="wc-timeline">
          {reasons.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === reasons.length - 1;
            const Icon = item.icon;

            return (
              <div className="wc-row" key={item.title}>
                <div className={`wc-card-wrap ${isLeft ? "left" : "right"}`}>
                  <div
                    className={`wc-card ${visibleCards[index] ? "visible" : ""}`}
                    style={{ transitionDelay: visibleCards[index] ? `${index * 0.08}s` : "0s" }}
                  >
                    {/* Image */}
                    <div className="wc-card-img-wrap">
                      <img src={item.img} alt={item.title} />
                      <div className="wc-card-scrim" />
                      <span className="wc-card-img-tag">{item.tag}</span>
                    </div>

                    {/* Body */}
                    <div className="wc-card-body">
                      <div className="wc-card-title-row">
                        <div className="wc-card-icon-box">
                          <Icon />
                        </div>
                        <h3 className="wc-card-title">{item.title}</h3>
                      </div>
                      <p className="wc-card-desc">{item.desc}</p>
                    </div>

                    {/* Footer */}
                    <div className="wc-card-footer">
                      <span className="wc-card-stat">{item.stat}</span>
                      <span className="wc-card-num">0{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Animated connector */}
                {!isLast && (
                  <div style={{ width: "100%", position: "relative", zIndex: 2 }}>
                    <Connector fromLeft={isLeft} index={index} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;
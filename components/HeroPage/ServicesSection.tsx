"use client";
import React, { useEffect, useRef, useState } from "react";

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
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(5).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              SERVICES.slice(1).forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 110);
              });
            }, 350);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .sv-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .sv-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Grain */
        .sv-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Ambient glow */
        .sv-glow {
          position: absolute;
          top: -160px; right: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── HEADER ── */
        .sv-header {
          position: relative;
          z-index: 2;
          padding: 100px 80px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: end;
          border-bottom: 1px solid #1a1a1a;
        }

        @media (max-width: 1100px) { .sv-header { padding: 80px 50px 60px; gap: 40px; } }
        @media (max-width: 800px)  { .sv-header { grid-template-columns: 1fr; padding: 60px 28px 48px; gap: 28px; } }
        @media (max-width: 480px)  { .sv-header { padding: 48px 20px 40px; } }

        .sv-eyebrow {
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

        .sv-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .sv-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
        }

        .sv-headline em { font-style: italic; color: #f97316; }

        .sv-header-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #9e9690;
          max-width: 400px;
          margin-bottom: 36px;
        }

        /* Header stats */
        .sv-header-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid #1e1e1e;
          padding-top: 28px;
        }

        .sv-hstat { flex: 1; padding-right: 20px; }
        .sv-hstat + .sv-hstat { padding-left: 20px; border-left: 1px solid #1e1e1e; }

        .sv-hstat-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }

        .sv-hstat-lbl {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── HERO CARD ── */
        .sv-hero-card-wrap {
          position: relative;
          z-index: 2;
          padding: 0 80px;
          margin-top: 2px;
        }

        @media (max-width: 1100px) { .sv-hero-card-wrap { padding: 0 50px; } }
        @media (max-width: 800px)  { .sv-hero-card-wrap { padding: 0 28px; } }
        @media (max-width: 480px)  { .sv-hero-card-wrap { padding: 0 20px; } }

        .sv-hero-card {
          background: #111;
          border: 1px solid #1a1a1a;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 0;
          overflow: hidden;
          transition: border-color 0.35s;
          position: relative;
        }

        @media (max-width: 800px) {
          .sv-hero-card { grid-template-columns: 1fr; }
        }

        .sv-hero-card:hover { border-color: #f97316; }

        .sv-hero-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .sv-hero-card:hover::after { transform: scaleX(1); }

        /* Icon col */
        .sv-hero-icon-col {
          padding: 48px 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #1a1a1a;
          background: #0e0e0e;
        }

        @media (max-width: 800px) {
          .sv-hero-icon-col { padding: 36px 28px; border-right: none; border-bottom: 1px solid #1a1a1a; justify-content: flex-start; }
        }

        .sv-hero-icon-box {
          width: 72px; height: 72px;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          transition: background 0.3s, border-color 0.3s;
        }

        .sv-hero-card:hover .sv-hero-icon-box {
          background: #2a1a0a;
          border-color: #3a2010;
        }

        .sv-hero-icon-box svg { width: 32px; height: 32px; }

        /* Content col */
        .sv-hero-content {
          padding: 48px 48px 48px 44px;
        }

        @media (max-width: 1100px) { .sv-hero-content { padding: 36px 32px; } }
        @media (max-width: 800px)  { .sv-hero-content { padding: 28px; } }

        .sv-hero-tag {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 12px;
        }

        .sv-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .sv-hero-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          max-width: 520px;
          transition: color 0.3s;
        }

        .sv-hero-card:hover .sv-hero-desc { color: #9e9690; }

        /* Stat col */
        .sv-hero-stat-col {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-left: 1px solid #1a1a1a;
          background: #0e0e0e;
          text-align: center;
          min-width: 160px;
        }

        @media (max-width: 800px) {
          .sv-hero-stat-col { border-left: none; border-top: 1px solid #1a1a1a; padding: 28px; flex-direction: row; gap: 16px; justify-content: flex-start; }
        }

        .sv-hero-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 3.5vw, 52px);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px #f97316;
          line-height: 1;
          margin-bottom: 8px;
        }

        @media (max-width: 800px) { .sv-hero-stat-num { margin-bottom: 0; } }

        .sv-hero-stat-lbl {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── 5-CARD GRID ── */
        .sv-grid-wrap {
          position: relative;
          z-index: 2;
          padding: 2px 80px 100px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2px;
        }

        @media (max-width: 1200px) { .sv-grid-wrap { padding: 2px 50px 80px; grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px)  { .sv-grid-wrap { grid-template-columns: repeat(2, 1fr); padding: 2px 28px 60px; } }
        @media (max-width: 560px)  { .sv-grid-wrap { grid-template-columns: 1fr; padding: 2px 20px 48px; } }

        .sv-card {
          background: #111;
          border: 1px solid #1a1a1a;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: border-color 0.3s, background 0.3s;
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .sv-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.3s, background 0.3s;
        }

        .sv-card:hover {
          background: #161616;
          border-color: #f97316;
        }

        .sv-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .sv-card:hover::after { transform: scaleX(1); }

        .sv-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sv-card-icon {
          width: 42px; height: 42px;
          background: #1a1a1a;
          border: 1px solid #252525;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          flex-shrink: 0;
          transition: background 0.3s, border-color 0.3s;
        }

        .sv-card:hover .sv-card-icon {
          background: #2a1a0a;
          border-color: #3a2010;
        }

        .sv-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          font-weight: 900;
          color: #1e1e1e;
          line-height: 1;
          user-select: none;
          transition: color 0.3s;
        }

        .sv-card:hover .sv-card-num { color: #2a1a0a; }

        .sv-card-tag {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 10px;
        }

        .sv-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .sv-card-desc {
          font-size: 12px;
          font-weight: 300;
          line-height: 1.75;
          color: #6b6560;
          flex: 1;
          transition: color 0.3s;
        }

        .sv-card:hover .sv-card-desc { color: #9e9690; }

        .sv-card-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #1a1a1a;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sv-card-stat {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #3a3530;
          background: #1a1a1a;
          border: 1px solid #252525;
          padding: 4px 10px;
          transition: color 0.3s, border-color 0.3s;
        }

        .sv-card:hover .sv-card-stat {
          color: #f97316;
          border-color: #3a2010;
        }

        /* Fade utilities */
        .sv-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .sv-fade.visible { opacity: 1; transform: translateY(0); }
        .sv-d1 { transition-delay: 0.1s; }
        .sv-d2 { transition-delay: 0.2s; }
        .sv-d3 { transition-delay: 0.3s; }
        .sv-d4 { transition-delay: 0.45s; }
      `}</style>

      <section id="services" className="sv-section" ref={sectionRef}>
        <div className="sv-glow" />

        {/* ── HEADER ── */}
        <div className="sv-header">
          <div>
            <div className={`sv-fade ${heroVisible ? "visible" : ""}`}>
              <span className="sv-eyebrow">
                <span className="sv-eyebrow-line" />
                What We Do
              </span>
            </div>
            <h2 className={`sv-headline sv-fade sv-d1 ${heroVisible ? "visible" : ""}`}>
              Our Complete<br /><em>Solution</em><br />Portfolio.
            </h2>
          </div>

          <div>
            <p className={`sv-header-body sv-fade sv-d2 ${heroVisible ? "visible" : ""}`}>
              A modular stack of services designed to support you from your first
              outlet all the way to multi-city scale — every piece built to work
              together.
            </p>
            <div className={`sv-header-stats sv-fade sv-d3 ${heroVisible ? "visible" : ""}`}>
              {[
                { v: "6", l: "Core Services" },
                { v: "1800+", l: "Properties" },
                { v: "4+", l: "Platforms" },
              ].map((s, i) => (
                <div className="sv-hstat" key={i}>
                  <div className="sv-hstat-val">{s.v}</div>
                  <div className="sv-hstat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HERO CARD ── */}
        <div className="sv-hero-card-wrap">
          <div className={`sv-hero-card sv-fade sv-d2 ${heroVisible ? "visible" : ""}`}>
            {/* Icon */}
            <div className="sv-hero-icon-col">
              <div className="sv-hero-icon-box">
                <Icons.RealEstate />
              </div>
            </div>

            {/* Content */}
            <div className="sv-hero-content">
              <p className="sv-hero-tag">Location Intelligence</p>
              <h3 className="sv-hero-title">Real Estate Sourcing</h3>
              <p className="sv-hero-desc">
                Expert location intelligence across tier 2 & 3 cities with
                pre-negotiated rates from our database of 1800+ F&B-suitable
                properties — sourced, vetted, and ready for you.
              </p>
            </div>

            {/* Stat */}
            <div className="sv-hero-stat-col">
              <div className="sv-hero-stat-num">1800+</div>
              <div className="sv-hero-stat-lbl">Properties</div>
            </div>
          </div>
        </div>

        {/* ── 5-CARD GRID ── */}
        <div className="sv-grid-wrap">
          {SERVICES.slice(1).map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`sv-card ${visibleCards[i] ? "visible" : ""}`}
                style={{ transitionDelay: visibleCards[i] ? `${i * 0.1}s` : "0s" }}
              >
                <div className="sv-card-top">
                  <div className="sv-card-icon"><Icon /></div>
                  <span className="sv-card-num">0{i + 2}</span>
                </div>
                <p className="sv-card-tag">{service.tag}</p>
                <h3 className="sv-card-title">{service.title}</h3>
                <p className="sv-card-desc">{service.desc}</p>
                <div className="sv-card-footer">
                  <span className="sv-card-stat">{service.stat}</span>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </>
  );
};

export default ServicesSection;
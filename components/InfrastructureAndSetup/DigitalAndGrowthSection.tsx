"use client";
import React, { useEffect, useRef, useState } from "react";

const digitalItems = [
  {
    title: "Aggregator & Channel Management",
    description:
      "End-to-end management of Zomato, Swiggy, Blinkit and other platforms to optimize visibility, ratings, and order volumes.",
    icon: "📡",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Performance Marketing",
    description:
      "Digital campaigns focused on ROAS and customer acquisition across search, social, and local discovery channels.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Brand & Customer Experience",
    description:
      "Cohesive brand storytelling, creatives, and CRM journeys that build loyalty across dine-in, delivery, and D2C.",
    icon: "✦",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80&auto=format&fit=crop",
  },
];

const metrics = [
  { value: "3.2×", label: "Avg. ROAS", sub: "across campaigns" },
  { value: "40%", label: "Order Growth", sub: "in 90 days" },
  { value: "60+", label: "Brands Scaled", sub: "across India" },
];

const growthPoints = [
  "Menu and pricing optimization for online channels",
  "Campaigns tailored to local catchment and occasions",
  "Reporting that connects digital data to store P&L",
];

const stats = [
  { value: "3.2×", label: "Avg. ROAS" },
  { value: "40%", label: "Order Growth" },
  { value: "60+", label: "Brands Scaled" },
];

const DigitalAndGrowthSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              digitalItems.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 140);
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .dg-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .dg-section * { box-sizing: border-box; margin: 0; padding: 0; }

        .dg-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* ── HERO ── */
        .dg-hero {
          position: relative;
          z-index: 2;
          padding: 100px 80px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: end;
        }

        @media (max-width: 1100px) { .dg-hero { padding: 80px 50px 0; gap: 48px; } }
        @media (max-width: 800px) {
          .dg-hero { grid-template-columns: 1fr; padding: 60px 28px 0; gap: 32px; }
        }
        @media (max-width: 480px) { .dg-hero { padding: 48px 20px 0; } }

        .dg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 24px;
        }

        .dg-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .dg-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
        }

        .dg-headline em { font-style: italic; color: #f97316; }

        .dg-hero-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #9e9690;
          margin-bottom: 40px;
          max-width: 400px;
        }

        /* Stats strip */
        .dg-stats-strip {
          display: flex;
          gap: 0;
          border-top: 1px solid #1e1e1e;
          padding-top: 28px;
          margin-bottom: 0;
        }

        .dg-stat { flex: 1; padding-right: 20px; }
        .dg-stat + .dg-stat { padding-left: 20px; border-left: 1px solid #1e1e1e; }

        .dg-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }

        .dg-stat-label {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── FEATURED CARDS ── */
        .dg-cards-track {
          position: relative;
          z-index: 2;
          padding: 64px 80px 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        @media (max-width: 1100px) { .dg-cards-track { padding: 56px 50px 0; } }
        @media (max-width: 900px) {
          .dg-cards-track { grid-template-columns: 1fr; padding: 48px 28px 0; }
        }
        @media (max-width: 480px) { .dg-cards-track { padding: 40px 20px 0; } }

        .dg-card {
          position: relative;
          overflow: hidden;
          border: 1px solid #1a1a1a;
          background: #111;
          cursor: default;
          opacity: 0;
          transform: translateY(28px);
          transition: border-color 0.35s;
          display: flex;
          flex-direction: column;
        }

        .dg-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.35s;
        }

        .dg-card:hover { border-color: #f97316; }

        /* Image zone */
        .dg-card-img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }

        @media (max-width: 900px) { .dg-card-img-wrap { height: 220px; } }

        .dg-card-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.6) saturate(0.8);
          transition: transform 6s ease, filter 0.4s ease;
          display: block;
        }

        .dg-card:hover .dg-card-img-wrap img {
          transform: scale(1.07);
          filter: brightness(0.5) saturate(0.7);
        }

        /* Gradient fade image into card body */
        .dg-card-img-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to top, #111, transparent);
          pointer-events: none;
        }

        /* Icon pill on image */
        .dg-card-icon {
          position: absolute;
          top: 16px; left: 16px;
          width: 38px; height: 38px;
          background: rgba(10,10,10,0.75);
          border: 1px solid #2a2a2a;
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          z-index: 2;
        }

        /* Number on image */
        .dg-card-num {
          position: absolute;
          top: 14px; right: 18px;
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 900;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          user-select: none;
          z-index: 2;
          transition: color 0.3s;
        }

        .dg-card:hover .dg-card-num { color: rgba(249,115,22,0.15); }

        /* Text zone */
        .dg-card-body {
          padding: 24px 26px 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dg-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .dg-card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: #6b6560;
          transition: color 0.3s;
          flex: 1;
        }

        .dg-card:hover .dg-card-desc { color: #9e9690; }

        /* Bottom bar */
        .dg-card-bar {
          height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          margin-top: 20px;
        }

        .dg-card:hover .dg-card-bar { transform: scaleX(1); }

        /* ── GROWTH PANEL ── */
        .dg-growth-panel {
          position: relative;
          z-index: 2;
          margin: 2px 80px 0;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          border: 1px solid #1e1e1e;
          background: #111;
          overflow: hidden;
        }

        @media (max-width: 1100px) { .dg-growth-panel { margin: 2px 50px 0; } }
        @media (max-width: 900px) {
          .dg-growth-panel { margin: 2px 28px 0; grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) { .dg-growth-panel { margin: 2px 20px 0; } }

        /* Metrics side */
        .dg-metrics-side {
          padding: 52px 44px;
          border-right: 1px solid #1e1e1e;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        @media (max-width: 900px) {
          .dg-metrics-side { border-right: none; border-bottom: 1px solid #1e1e1e; padding: 40px 28px; }
        }

        .dg-metrics-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5a5550;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dg-metrics-label::after {
          content: '';
          flex: 1;
          max-width: 40px;
          height: 1px;
          background: #2a2a2a;
        }

        .dg-metric-row {
          display: flex;
          align-items: baseline;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #1a1a1a;
        }

        .dg-metric-row:first-of-type { padding-top: 0; }
        .dg-metric-row:last-of-type { border-bottom: none; padding-bottom: 0; }

        .dg-metric-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          flex-shrink: 0;
        }

        .dg-metric-info { display: flex; flex-direction: column; gap: 2px; }

        .dg-metric-label {
          font-size: 13px;
          font-weight: 500;
          color: #f5f0eb;
          line-height: 1.2;
        }

        .dg-metric-sub {
          font-size: 11px;
          font-weight: 300;
          color: #5a5550;
          letter-spacing: 0.04em;
        }

        /* Growth content side */
        .dg-growth-content {
          padding: 52px 52px 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 900px) { .dg-growth-content { padding: 40px 28px; } }

        .dg-growth-eyebrow {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 20px;
        }

        .dg-growth-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.2vw, 32px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .dg-growth-title em { font-style: italic; color: #f97316; }

        .dg-growth-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          margin-bottom: 32px;
          max-width: 440px;
        }

        .dg-growth-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .dg-growth-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 13px;
          font-weight: 400;
          color: #9e9690;
          line-height: 1.6;
        }

        .dg-growth-bullet {
          width: 20px; height: 20px;
          background: #1e1e1e;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .dg-growth-bullet svg { width: 10px; height: 10px; color: #f97316; }

        /* bottom spacer */
        .dg-footer-space {
          height: 100px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 900px) { .dg-footer-space { height: 60px; } }
        @media (max-width: 480px) { .dg-footer-space { height: 48px; } }

        /* ── Fade-in utilities ── */
        .dg-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .dg-fade.visible { opacity: 1; transform: translateY(0); }
        .dg-d1 { transition-delay: 0.1s; }
        .dg-d2 { transition-delay: 0.2s; }
        .dg-d3 { transition-delay: 0.3s; }
        .dg-d4 { transition-delay: 0.45s; }
      `}</style>

      <section id="digital" className="dg-section" ref={sectionRef}>

        {/* ── HERO BAND ── */}
        <div className="dg-hero">
          <div>
            <div className={`dg-fade ${heroVisible ? "visible" : ""}`}>
              <span className="dg-eyebrow">
                <span className="dg-eyebrow-line" />
                Digital &amp; Growth
              </span>
            </div>
            <h2 className={`dg-headline dg-fade dg-d1 ${heroVisible ? "visible" : ""}`}>
              Driving Orders,<br />Reach &amp; <em>Visibility.</em>
            </h2>
          </div>

          <div>
            <p className={`dg-hero-body dg-fade dg-d2 ${heroVisible ? "visible" : ""}`}>
              We manage your digital presence across aggregators, social, and D2C
              channels to create predictable, scalable growth for your F&amp;B brand
              — every decision tied to metrics that matter.
            </p>
            <div className={`dg-stats-strip dg-fade dg-d3 ${heroVisible ? "visible" : ""}`}>
              {stats.map((s, i) => (
                <div className="dg-stat" key={i}>
                  <div className="dg-stat-value">{s.value}</div>
                  <div className="dg-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── IMAGE CARDS ── */}
        <div className="dg-cards-track">
          {digitalItems.map((item, index) => (
            <div
              key={index}
              className={`dg-card ${visibleCards[index] ? "visible" : ""}`}
              style={{ transitionDelay: visibleCards[index] ? `${index * 0.12}s` : "0s" }}
            >
              {/* Image */}
              <div className="dg-card-img-wrap">
                <img src={item.image} alt={item.title} />
                <div className="dg-card-img-fade" />
                <div className="dg-card-icon">{item.icon}</div>
                <span className="dg-card-num">0{index + 1}</span>
              </div>

              {/* Text */}
              <div className="dg-card-body">
                <h3 className="dg-card-title">{item.title}</h3>
                <p className="dg-card-desc">{item.description}</p>
                <div className="dg-card-bar" />
              </div>
            </div>
          ))}
        </div>

        {/* ── GROWTH PANEL ── */}
        <div className="dg-growth-panel">

          {/* Metrics */}
          <div className="dg-metrics-side">
            <div className="dg-metrics-label">Key Metrics</div>
            {metrics.map((m, i) => (
              <div className="dg-metric-row" key={i}>
                <span className="dg-metric-value">{m.value}</span>
                <div className="dg-metric-info">
                  <span className="dg-metric-label">{m.label}</span>
                  <span className="dg-metric-sub">{m.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="dg-growth-content">
            <p className="dg-growth-eyebrow">Growth Mindset</p>
            <h3 className="dg-growth-title">
              Every Initiative,<br /><em>Measurably Tied</em> to Revenue
            </h3>
            <p className="dg-growth-text">
              We connect order volume, AOV, repeat rate, and store-level
              profitability so you see exactly what's working — and scale it fast.
            </p>
            <ul className="dg-growth-list">
              {growthPoints.map((pt, i) => (
                <li key={i}>
                  <span className="dg-growth-bullet">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 5l2.5 2.5L8 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dg-footer-space" />

      </section>
    </>
  );
};

export default DigitalAndGrowthSection;
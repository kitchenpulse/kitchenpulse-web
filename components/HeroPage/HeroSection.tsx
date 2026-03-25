"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const stats = [
  { value: "1800+", label: "Pre-Negotiated Properties" },
  { value: "Nationwide", label: "Dealer Network" },
  { value: "25–30%", label: "Cost Optimization" },
  { value: "End-to-End", label: "Execution Model" },
];

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-section * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-section {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* Background image */
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('assets/chefing.jpeg');
          background-size: cover;
          background-position: center;
          filter: brightness(0.45) saturate(0.8);
          transform: scale(1.04);
          animation: hero-slow-zoom 14s ease forwards;
        }

        @keyframes hero-slow-zoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.0); }
        }

        /* Grain overlay */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.04;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Dark gradient — heavier left, lighter right to let image breathe */
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            105deg,
            rgba(10,10,10,0.88) 0%,
            rgba(10,10,10,0.70) 50%,
            rgba(10,10,10,0.30) 100%
          );
        }

        /* Orange glow accent bottom-left */
        .hero-glow {
          position: absolute;
          bottom: -120px;
          left: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%);
          z-index: 3;
          pointer-events: none;
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 80px;
          color: #f5f0eb;
        }

        @media (max-width: 1100px) { .hero-content { padding: 0 50px; } }
        @media (max-width: 768px)  { .hero-content { padding: 0 28px; } }
        @media (max-width: 480px)  { .hero-content { padding: 0 20px; } }

        /* Eyebrow */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.05s;
        }

        .hero-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .hero-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        /* Headline */
        .hero-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(44px, 6.5vw, 90px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.025em;
          color: #f5f0eb;
          max-width: 780px;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.75s ease, transform 0.75s ease;
          transition-delay: 0.15s;
        }

        .hero-headline.visible { opacity: 1; transform: translateY(0); }
        .hero-headline em { font-style: italic; color: #f97316; }

        /* Subheadline */
        .hero-sub {
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 300;
          line-height: 1.75;
          color: #9e9690;
          max-width: 520px;
          margin-bottom: 44px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.28s;
        }

        .hero-sub.visible { opacity: 1; transform: translateY(0); }

        /* CTAs */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.38s;
        }

        .hero-cta-row.visible { opacity: 1; transform: translateY(0); }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f97316;
          color: #0a0a0a;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 16px 30px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }

        .hero-btn-primary:hover { background: #ea580c; transform: translateY(-2px); }

        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #9e9690;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-decoration: none;
          border: 1px solid #2a2a2a;
          padding: 15px 28px;
          transition: color 0.25s, border-color 0.25s, transform 0.25s;
        }

        .hero-btn-ghost:hover {
          color: #f5f0eb;
          border-color: #5a5550;
          transform: translateY(-2px);
        }

        /* Stats strip */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 36px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transition-delay: 0.5s;
        }

        .hero-stats.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 700px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 28px 0; }
        }

        .hero-stat {
          padding-right: 24px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .hero-stat:last-child { border-right: none; }

        @media (max-width: 700px) {
          .hero-stat:nth-child(2) { border-right: none; }
          .hero-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.07); }
          .hero-stat { padding-right: 16px; padding-left: 0 !important; }
          .hero-stat:nth-child(2n) { padding-left: 20px !important; }
        }

        .hero-stat + .hero-stat { padding-left: 28px; }

        .hero-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 7px;
        }

        .hero-stat-label {
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #5a5550;
          text-transform: uppercase;
          line-height: 1.4;
        }

        /* Vertical rule on left edge */
        .hero-rule {
          position: absolute;
          top: 40px; bottom: 40px;
          left: 80px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(249,115,22,0.4) 30%, rgba(249,115,22,0.4) 70%, transparent);
          z-index: 4;
        }

        @media (max-width: 768px) { .hero-rule { display: none; } }
      `}</style>

      <section className="hero-section">
        {/* Layers */}
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="hero-rule" />

        {/* Content */}
        <div className="hero-content">

          <div className={`hero-eyebrow ${visible ? "visible" : ""}`}>
            <span className="hero-eyebrow-line" />
            F&amp;B &amp; D2C Growth Partners
          </div>

          <h1 className={`hero-headline ${visible ? "visible" : ""}`}>
            Powering Brands<br />
            From <em>Setup</em><br />
            to Scale.
          </h1>

          <p className={`hero-sub ${visible ? "visible" : ""}`}>
            End-to-end solutions across real estate, infrastructure,
            culinary innovation, staffing, and digital growth —
            all under one roof.
          </p>

          <div className={`hero-cta-row ${visible ? "visible" : ""}`}>
            <Link href="/contact" className="hero-btn-primary">
              Schedule a Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/services" className="hero-btn-ghost">
              Explore Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 7h4M7 5l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className={`hero-stats ${visible ? "visible" : ""}`}>
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;
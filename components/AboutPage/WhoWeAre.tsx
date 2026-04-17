"use client";

import React, { useEffect, useRef, useState } from "react";

const founders = [
  {
    name: "Sushant Oundhakar",
    title: "Co-Founder & CEO",
    bio: "Visionary leader with 15+ years in the F&B industry, driving Kitchen Pulse's mission to transform how food brands scale across India.",
    initials: "SO",
    linkedin: "#",
    stat: { value: "15+", label: "Years in F&B" },
  },
  {
    name: "Shubham Gupta",
    title: "Co-Founder & COO",
    bio: "Growth-driven business leader with 8+ years of experience in sales, strategy, and team leadership—scaling operations and driving top-line results across fast-paced sectors. Currently leading the West region at Mukunda Foods and passionate about building ambitious, high-impact businesses.",
    initials: "SG",
    linkedin: "#",
    stat: { value: "200+", label: "Brands Scaled" },
  },
];

const contactDetails = [
  {
    label: "Office Address",
    value: "Unit 4B, Saki Naka Business Park,\nAndheri East, Mumbai – 400072",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "hello@kitchenpulse.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+91 98765 43210",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.99 2.18 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
];

const pillars = [
  { icon: "◈", label: "Real Estate" },
  { icon: "◉", label: "Infrastructure" },
  { icon: "◐", label: "Culinary R&D" },
  { icon: "◑", label: "Digital Growth" },
  { icon: "◒", label: "Staffing" },
  { icon: "◓", label: "Operations" },
];

const WhoWeAre = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(founders.length).fill(false));
  const [visibleContact, setVisibleContact] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              founders.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 150);
              });
            }, 300);
            setTimeout(() => setVisibleContact(true), 700);
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

        .ww-section {
          font-family: 'DM Sans', sans-serif;
          background: #faf9f7;
          color: #1a1714;
          overflow: hidden;
          position: relative;
        }

        .ww-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Subtle ambient glow */
        .ww-glow {
          position: absolute;
          top: -100px; right: -120px;
          width: 640px; height: 520px;
          background: radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 68%);
          pointer-events: none;
          z-index: 1;
        }
        .ww-glow2 {
          position: absolute;
          bottom: 60px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── HEADER ── */
        .ww-header {
          position: relative;
          z-index: 2;
          padding: 100px 80px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: end;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        @media (max-width: 1100px) { .ww-header { padding: 80px 50px 60px; gap: 40px; } }
        @media (max-width: 800px)  { .ww-header { grid-template-columns: 1fr; padding: 60px 28px 48px; gap: 28px; } }
        @media (max-width: 480px)  { .ww-header { padding: 48px 20px 40px; } }

        .ww-eyebrow {
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
        .ww-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .ww-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #1a1714;
        }
        .ww-headline em { font-style: italic; color: #f97316; }

        .ww-header-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          max-width: 400px;
          margin-bottom: 36px;
        }
        .ww-header-body strong { color: #f97316; font-weight: 500; }

        /* Header stats */
        .ww-header-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid rgba(0,0,0,0.08);
          padding-top: 28px;
        }
        .ww-hstat { flex: 1; padding-right: 20px; }
        .ww-hstat + .ww-hstat { padding-left: 20px; border-left: 1px solid rgba(0,0,0,0.08); }
        .ww-hstat-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }
        .ww-hstat-lbl {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a09890;
        }

        /* ── PILLARS MARQUEE ── */
        .ww-pillars-wrap {
          position: relative;
          z-index: 2;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          padding: 0;
          background: #faf9f7;
        }
        .ww-pillars-track {
          display: flex;
          width: max-content;
          animation: ww-scroll 18s linear infinite;
        }
        .ww-pillars-track:hover { animation-play-state: paused; }

        @keyframes ww-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .ww-pillar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          border-right: 1px solid rgba(0,0,0,0.07);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ww-pillar-icon { font-size: 14px; color: #f97316; }
        .ww-pillar-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a09890;
          transition: color 0.3s;
        }
        .ww-pillar-item:hover .ww-pillar-label { color: #f97316; }

        /* ── MISSION/VISION ROW ── */
        .ww-mv-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(0,0,0,0.07);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        @media (max-width: 700px) { .ww-mv-grid { grid-template-columns: 1fr; } }

        .ww-mv-card {
          background: #faf9f7;
          padding: 52px 60px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }
        .ww-mv-card:hover { background: #f5f3ef; }

        /* Large italic letter watermark */
        .ww-mv-wm {
          position: absolute;
          bottom: -20px; right: 24px;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 120px;
          font-weight: 900;
          color: rgba(0,0,0,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: color 0.3s;
        }
        .ww-mv-card:hover .ww-mv-wm { color: rgba(249,115,22,0.06); }

        .ww-mv-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 20px;
        }
        .ww-mv-dot {
          width: 6px; height: 6px;
          background: #f97316;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .ww-mv-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700;
          color: #1a1714;
          margin-bottom: 18px;
          line-height: 1.2;
          position: relative;
          z-index: 1;
        }

        .ww-mv-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.85;
          color: #8a8480;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
          max-width: 380px;
        }
        .ww-mv-card:hover .ww-mv-text { color: #6b6560; }

        .ww-mv-line {
          margin-top: 28px;
          height: 1px;
          background: linear-gradient(90deg, #f97316 0%, transparent 60%);
          opacity: 0.2;
          transition: opacity 0.3s;
        }
        .ww-mv-card:hover .ww-mv-line { opacity: 0.45; }

        /* ── FOUNDERS ── */
        .ww-founders-wrap {
          position: relative;
          z-index: 2;
          padding: 2px 80px 0;
        }
        @media (max-width: 1100px) { .ww-founders-wrap { padding: 2px 50px 0; } }
        @media (max-width: 600px)  { .ww-founders-wrap { padding: 2px 20px 0; } }

        .ww-founders-label {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 36px 0 24px;
        }
        .ww-founders-label-line { flex: 1; height: 1px; background: rgba(0,0,0,0.08); }
        .ww-founders-label-text {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #a09890;
          white-space: nowrap;
        }

        .ww-founders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.07);
        }
        @media (max-width: 700px) { .ww-founders-grid { grid-template-columns: 1fr; } }

        /* ── FOUNDER CARD ── */
        .ww-founder-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          padding: 40px 36px 32px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: border-color 0.3s, background 0.3s;
          cursor: default;
        }
        .ww-founder-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.3s, background 0.3s;
        }
        .ww-founder-card:hover {
          background: #fffcfa;
          border-color: #f97316;
        }

        /* Bottom accent bar */
        .ww-founder-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ww-founder-card:hover::after { transform: scaleX(1); }

        /* Avatar */
        .ww-founder-avatar-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .ww-founder-avatar {
          width: 72px; height: 72px;
          background: #f0ede8;
          border: 1px solid rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #f97316;
          transition: background 0.3s, border-color 0.3s;
          position: relative;
          z-index: 1;
        }
        .ww-founder-card:hover .ww-founder-avatar {
          background: #fdecd9;
          border-color: rgba(249,115,22,0.3);
        }

        /* Stat */
        .ww-founder-stat {
          text-align: right;
          position: relative;
          z-index: 1;
        }
        .ww-founder-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: rgba(0,0,0,0.07);
          line-height: 1;
          transition: color 0.3s;
        }
        .ww-founder-card:hover .ww-founder-stat-val { color: rgba(249,115,22,0.18); }
        .ww-founder-stat-lbl {
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.12);
          margin-top: 3px;
          transition: color 0.3s;
        }
        .ww-founder-card:hover .ww-founder-stat-lbl { color: rgba(249,115,22,0.35); }

        .ww-founder-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2vw, 24px);
          font-weight: 700;
          color: #1a1714;
          line-height: 1.1;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
        }
        .ww-founder-title {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }
        .ww-founder-bio {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: #8a8480;
          transition: color 0.3s;
          position: relative;
          z-index: 1;
        }
        .ww-founder-card:hover .ww-founder-bio { color: #6b6560; }

        .ww-founder-footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid rgba(0,0,0,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .ww-linkedin-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a09890;
          text-decoration: none;
          transition: color 0.3s;
        }
        .ww-founder-card:hover .ww-linkedin-btn { color: #f97316; }

        .ww-founder-arrow {
          width: 20px; height: 20px;
          border: 1px solid rgba(0,0,0,0.1);
          background: #f0ede8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s, background 0.3s;
        }
        .ww-founder-card:hover .ww-founder-arrow {
          border-color: #f97316;
          background: #fdecd9;
        }
        .ww-founder-arrow svg {
          width: 10px; height: 10px;
          stroke: #a09890;
          transition: stroke 0.3s;
        }
        .ww-founder-card:hover .ww-founder-arrow svg { stroke: #f97316; }

        /* ── CONTACT ── */
        .ww-contact-wrap {
          position: relative;
          z-index: 2;
          padding: 2px 80px 100px;
          margin-top: 2px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }
        .ww-contact-wrap.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 1100px) { .ww-contact-wrap { padding: 2px 50px 80px; } }
        @media (max-width: 600px)  { .ww-contact-wrap { padding: 2px 20px 48px; } }

        .ww-contact-label {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 36px 0 24px;
        }

        .ww-contact-box {
          border: 1px solid rgba(0,0,0,0.07);
          overflow: hidden;
        }

        .ww-contact-header {
          padding: 20px 28px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ww-contact-header-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #f97316;
        }
        .ww-contact-header-tag {
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a09890;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 4px 10px;
        }

        .ww-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #ffffff;
        }
        @media (max-width: 700px) { .ww-contact-grid { grid-template-columns: 1fr; } }

        .ww-contact-item {
          padding: 32px 28px;
          border-right: 1px solid rgba(0,0,0,0.07);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: background 0.3s;
        }
        .ww-contact-item:last-child { border-right: none; }
        .ww-contact-item:hover { background: #fffcfa; }

        .ww-contact-icon-wrap {
          width: 38px; height: 38px;
          border: 1px solid rgba(0,0,0,0.08);
          background: #f0ede8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #8a8480;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .ww-contact-item:hover .ww-contact-icon-wrap {
          border-color: rgba(249,115,22,0.3);
          color: #f97316;
          background: #fdecd9;
        }

        .ww-contact-sub-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a09890;
          margin-bottom: 8px;
          transition: color 0.3s;
        }
        .ww-contact-item:hover .ww-contact-sub-label { color: #f97316; }

        .ww-contact-value {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: #8a8480;
          white-space: pre-line;
          transition: color 0.3s;
        }
        .ww-contact-item:hover .ww-contact-value { color: #6b6560; }

        /* Fade utilities */
        .ww-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ww-fade.visible { opacity: 1; transform: translateY(0); }
        .ww-d1 { transition-delay: 0.1s; }
        .ww-d2 { transition-delay: 0.2s; }
        .ww-d3 { transition-delay: 0.3s; }
        .ww-d4 { transition-delay: 0.45s; }
      `}</style>

      <section id="who-we-are" className="ww-section" ref={sectionRef}>
        <div className="ww-glow" />
        <div className="ww-glow2" />

        {/* ── HEADER ── */}
        <div className="ww-header">
          <div>
            <div className={`ww-fade ${heroVisible ? "visible" : ""}`}>
              <span className="ww-eyebrow">
                <span className="ww-eyebrow-line" />
                Who We Are
              </span>
            </div>
            <h2 className={`ww-headline ww-fade ww-d1 ${heroVisible ? "visible" : ""}`}>
              Built by<br /><em>Operators,</em><br />for Operators.
            </h2>
          </div>

          <div>
            <p className={`ww-header-body ww-fade ww-d2 ${heroVisible ? "visible" : ""}`}>
              <strong>Kitchen Pulse</strong> is your complete F&amp;B and D2C success partner —
              offering end-to-end solutions for seamless launches, optimized operations,
              and sustained growth across every stage of your business journey.
            </p>
            <div className={`ww-header-stats ww-fade ww-d3 ${heroVisible ? "visible" : ""}`}>
              {[
                { v: "6+", l: "Core Verticals" },
                { v: "∞", l: "Growth Paths" },
                { v: "Pan-India", l: "Reach" },
              ].map((s, i) => (
                <div className="ww-hstat" key={i}>
                  <div className="ww-hstat-val">{s.v}</div>
                  <div className="ww-hstat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PILLARS MARQUEE ── */}
        <div className={`ww-pillars-wrap ww-fade ww-d4 ${heroVisible ? "visible" : ""}`}>
          <div className="ww-pillars-track">
            {[...pillars, ...pillars].map((p, i) => (
              <div className="ww-pillar-item" key={i}>
                <span className="ww-pillar-icon">{p.icon}</span>
                <span className="ww-pillar-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── MISSION & VISION ── */}
        <div className="ww-mv-grid">
          {[
            {
              label: "Our Mission",
              wm: "M",
              title: "Empower Every F&B Brand to Thrive.",
              text: "Empowering F&B brands, restaurants, and D2C companies through integrated solutions spanning real estate, infrastructure, culinary innovation, digital marketing, staffing, and operational excellence.",
            },
            {
              label: "Our Vision",
              wm: "V",
              title: "India's Most Trusted Growth Partner.",
              text: "To become India's most trusted comprehensive partner for F&B and D2C growth — delivering measurable impact, innovation-driven results, and long-term sustainable success for every business we empower.",
            },
          ].map((item) => (
            <div className="ww-mv-card" key={item.label}>
              <span className="ww-mv-wm">{item.wm}</span>
              <div className="ww-mv-label">
                <span className="ww-mv-dot" />
                {item.label}
              </div>
              <h3 className="ww-mv-title">{item.title}</h3>
              <p className="ww-mv-text">{item.text}</p>
              <div className="ww-mv-line" />
            </div>
          ))}
        </div>

        {/* ── FOUNDERS ── */}
        <div className="ww-founders-wrap">
          <div className="ww-founders-label">
            <div className="ww-founders-label-line" />
            <span className="ww-founders-label-text">Meet the Founders</span>
            <div className="ww-founders-label-line" />
          </div>

          <div className="ww-founders-grid">
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                className={`ww-founder-card ${visibleCards[i] ? "visible" : ""}`}
                style={{ transitionDelay: visibleCards[i] ? `${i * 0.12}s` : "0s" }}
              >
                <div className="ww-founder-avatar-row">
                  <div className="ww-founder-avatar">{founder.initials}</div>
                  <div className="ww-founder-stat">
                    <div className="ww-founder-stat-val">{founder.stat.value}</div>
                    <div className="ww-founder-stat-lbl">{founder.stat.label}</div>
                  </div>
                </div>

                <h3 className="ww-founder-name">{founder.name}</h3>
                <p className="ww-founder-title">{founder.title}</p>
                <p className="ww-founder-bio">{founder.bio}</p>

                <div className="ww-founder-footer">
                  <a href={founder.linkedin} className="ww-linkedin-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 12, height: 12 }}>
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn Profile
                  </a>
                  <div className="ww-founder-arrow">
                    <svg viewBox="0 0 10 10" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 5h6M5 2l3 3-3 3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTACT ── */}
        <div className={`ww-contact-wrap ${visibleContact ? "visible" : ""}`}>
          <div className="ww-contact-label">
            <div className="ww-founders-label-line" />
            <span className="ww-founders-label-text">Get in Touch</span>
            <div className="ww-founders-label-line" />
          </div>

          <div className="ww-contact-box">
            <div className="ww-contact-header">
              <span className="ww-contact-header-label">Contact</span>
              <span className="ww-contact-header-tag">Mumbai · India</span>
            </div>
            <div className="ww-contact-grid">
              {contactDetails.map((item) => (
                <div className="ww-contact-item" key={item.label}>
                  <div className="ww-contact-icon-wrap">{item.icon}</div>
                  <div>
                    <p className="ww-contact-sub-label">{item.label}</p>
                    <p className="ww-contact-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
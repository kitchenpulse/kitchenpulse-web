"use client";
import React, { useEffect, useRef, useState } from "react";

const talentItems = [
  {
    title: "Comprehensive Recruitment",
    description:
      "End-to-end hiring support for chefs, kitchen teams, managers, and specialized roles aligned with your concept and standards.",
    icon: "🎯",
  },
  {
    title: "Structured Training Programs",
    description:
      "Customized training modules for new hires and existing staff focused on operations, safety, and brand-consistent service.",
    icon: "📐",
  },
  {
    title: "Performance & Service Standards",
    description:
      "Ongoing development to maintain high service levels, operational efficiency, and strong team culture across locations.",
    icon: "⚡",
  },
];

const roles = [
  { role: "Head Chefs & Sous Chefs", tag: "Kitchen Leadership" },
  { role: "Line Cooks & Prep Staff", tag: "Operations" },
  { role: "Restaurant Managers", tag: "Front-of-House" },
  { role: "Shift Leaders & Supervisors", tag: "Management" },
  { role: "Cloud Kitchen Specialists", tag: "D2C" },
  { role: "Back-Office & Admin", tag: "Support" },
];

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "92%", label: "Retention Rate" },
  { value: "30+", label: "Brands Staffed" },
];

const TalentAndTrainingSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [visibleRoles, setVisibleRoles] = useState<boolean[]>(new Array(6).fill(false));
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              talentItems.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 130);
              });
              roles.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleRoles((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, 200 + i * 80);
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

        .tt-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .tt-section * { box-sizing: border-box; margin: 0; padding: 0; }

        .tt-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* ── HERO BAND ── */
        .tt-hero {
          position: relative;
          z-index: 2;
          padding: 100px 80px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          border-bottom: 1px solid #1a1a1a;
        }

        @media (max-width: 1100px) { .tt-hero { padding: 80px 50px 60px; gap: 48px; } }
        @media (max-width: 800px) {
          .tt-hero {
            grid-template-columns: 1fr;
            padding: 60px 28px 48px;
            gap: 36px;
          }
        }
        @media (max-width: 480px) { .tt-hero { padding: 48px 20px 40px; } }

        .tt-eyebrow {
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

        .tt-eyebrow-line {
          width: 32px; height: 1px;
          background: #f97316;
        }

        .tt-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
          margin-bottom: 0;
        }

        .tt-headline em {
          font-style: italic;
          color: #f97316;
        }

        .tt-hero-right {
          padding-bottom: 8px;
        }

        .tt-hero-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #9e9690;
          margin-bottom: 40px;
          max-width: 400px;
        }

        .tt-stats-strip {
          display: flex;
          gap: 0;
          border-top: 1px solid #1e1e1e;
          padding-top: 28px;
        }

        .tt-stat {
          flex: 1;
          padding-right: 20px;
        }

        .tt-stat + .tt-stat {
          padding-left: 20px;
          border-left: 1px solid #1e1e1e;
        }

        .tt-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }

        .tt-stat-label {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── CARDS + ROLES GRID ── */
        .tt-body {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 2px;
          border-bottom: 1px solid #1a1a1a;
        }

        @media (max-width: 900px) {
          .tt-body { grid-template-columns: 1fr; }
        }

        /* Cards column */
        .tt-cards-col {
          padding: 72px 64px 72px 80px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          border-right: 1px solid #1a1a1a;
        }

        @media (max-width: 1200px) { .tt-cards-col { padding: 60px 40px 60px 50px; } }
        @media (max-width: 900px) {
          .tt-cards-col {
            padding: 48px 28px;
            border-right: none;
            border-bottom: 1px solid #1a1a1a;
          }
        }
        @media (max-width: 480px) { .tt-cards-col { padding: 40px 20px; } }

        .tt-col-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5a5550;
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .tt-col-label::after {
          content: '';
          flex: 1;
          max-width: 48px;
          height: 1px;
          background: #2a2a2a;
        }

        .tt-card {
          background: #111;
          border: 1px solid #1a1a1a;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateX(-16px);
          transition: background 0.3s, border-color 0.3s;
        }

        .tt-card.visible {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94),
                      background 0.3s, border-color 0.3s;
        }

        .tt-card:hover {
          background: #161616;
          border-color: #f97316;
        }

        .tt-card::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #f97316, #ea580c);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s ease;
        }

        .tt-card:hover::after { transform: scaleY(1); }

        .tt-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .tt-card-icon-wrap {
          font-size: 22px;
          width: 44px; height: 44px;
          background: #1a1a1a;
          border: 1px solid #252525;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tt-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 900;
          color: #1e1e1e;
          line-height: 1;
          user-select: none;
          transition: color 0.3s;
        }

        .tt-card:hover .tt-card-num { color: #2a1a0a; }

        .tt-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 700;
          color: #f5f0eb;
          margin-bottom: 10px;
          line-height: 1.25;
        }

        .tt-card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: #6b6560;
          transition: color 0.3s;
        }

        .tt-card:hover .tt-card-desc { color: #9e9690; }

        /* Roles column */
        .tt-roles-col {
          padding: 72px 56px 72px 52px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 1200px) { .tt-roles-col { padding: 60px 36px; } }
        @media (max-width: 900px) { .tt-roles-col { padding: 48px 28px; } }
        @media (max-width: 480px) { .tt-roles-col { padding: 40px 20px; } }

        .tt-roles-sticky {
          position: sticky;
          top: 32px;
        }

        .tt-roles-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.25;
          margin-bottom: 8px;
        }

        .tt-roles-heading em {
          font-style: italic;
          color: #f97316;
        }

        .tt-roles-sub {
          font-size: 13px;
          font-weight: 300;
          color: #6b6560;
          line-height: 1.65;
          margin-bottom: 36px;
        }

        .tt-roles-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .tt-role-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: #111;
          border: 1px solid #1a1a1a;
          opacity: 0;
          transform: translateX(16px);
          transition: background 0.25s, border-color 0.25s;
          cursor: default;
        }

        .tt-role-item.visible {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94),
                      background 0.25s, border-color 0.25s;
        }

        .tt-role-item:hover {
          background: #161616;
          border-color: #2a2a2a;
        }

        .tt-role-name {
          font-size: 13px;
          font-weight: 400;
          color: #9e9690;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tt-role-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #f97316;
          flex-shrink: 0;
        }

        .tt-role-tag {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3a3530;
          background: #1a1a1a;
          border: 1px solid #252525;
          padding: 3px 10px;
          white-space: nowrap;
          transition: color 0.25s, border-color 0.25s;
        }

        .tt-role-item:hover .tt-role-tag {
          color: #f97316;
          border-color: #3a2010;
        }

        /* ── FADE-IN utilities ── */
        .tt-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .tt-fade.visible { opacity: 1; transform: translateY(0); }
        .tt-d1 { transition-delay: 0.1s; }
        .tt-d2 { transition-delay: 0.2s; }
        .tt-d3 { transition-delay: 0.3s; }
        .tt-d4 { transition-delay: 0.45s; }
      `}</style>

      <section id="talent" className="tt-section" ref={sectionRef}>

        {/* ── HERO BAND ── */}
        <div className="tt-hero">
          {/* Left: Headline */}
          <div>
            <div className={`tt-fade ${heroVisible ? "visible" : ""}`}>
              <span className="tt-eyebrow">
                <span className="tt-eyebrow-line" />
                Talent &amp; Training
              </span>
            </div>
            <h2 className={`tt-headline tt-fade tt-d1 ${heroVisible ? "visible" : ""}`}>
              People Who<br />Make Your<br /><em>Brand Deliver.</em>
            </h2>
          </div>

          {/* Right: Body + Stats */}
          <div className="tt-hero-right">
            <p className={`tt-hero-body tt-fade tt-d2 ${heroVisible ? "visible" : ""}`}>
              We source, train, and develop the teams that run your kitchens and
              front-of-house — so your brand delivers a consistent experience, every
              single day, across every location.
            </p>
            <div className={`tt-stats-strip tt-fade tt-d3 ${heroVisible ? "visible" : ""}`}>
              {stats.map((s, i) => (
                <div className="tt-stat" key={i}>
                  <div className="tt-stat-value">{s.value}</div>
                  <div className="tt-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="tt-body">

          {/* Cards */}
          <div className="tt-cards-col">
            <div className="tt-col-label">What We Do</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {talentItems.map((item, index) => (
                <div
                  key={index}
                  className={`tt-card ${visibleCards[index] ? "visible" : ""}`}
                  style={{ transitionDelay: visibleCards[index] ? `${index * 0.1}s` : "0s" }}
                >
                  <div className="tt-card-top">
                    <div className="tt-card-icon-wrap">{item.icon}</div>
                    <span className="tt-card-num">0{index + 1}</span>
                  </div>
                  <h3 className="tt-card-title">{item.title}</h3>
                  <p className="tt-card-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="tt-roles-col">
            <div className="tt-roles-sticky">
              <h3 className={`tt-roles-heading tt-fade ${heroVisible ? "visible" : ""}`}>
                Roles We Help<br />You <em>Build</em>
              </h3>
              <p className={`tt-roles-sub tt-fade tt-d1 ${heroVisible ? "visible" : ""}`}>
                From kitchen brigades to cloud kitchen specialists — every hire
                is matched to your standards.
              </p>
              <ul className="tt-roles-list">
                {roles.map((item, i) => (
                  <li
                    key={i}
                    className={`tt-role-item ${visibleRoles[i] ? "visible" : ""}`}
                    style={{ transitionDelay: visibleRoles[i] ? `${i * 0.07}s` : "0s" }}
                  >
                    <span className="tt-role-name">
                      <span className="tt-role-dot" />
                      {item.role}
                    </span>
                    <span className="tt-role-tag">{item.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </section>
    </>
  );
};

export default TalentAndTrainingSection;
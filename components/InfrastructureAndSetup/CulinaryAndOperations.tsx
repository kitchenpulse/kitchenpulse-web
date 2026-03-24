"use client";
import React, { useEffect, useRef, useState } from "react";

const culinaryItems = [
  {
    title: "Recipe Development",
    description:
      "Expert chefs create standardized recipes that balance food cost control with consistent taste and quality across all outlets.",
    icon: "🍳",
    accent: "#f97316",
  },
  {
    title: "Menu Engineering",
    description:
      "Data-driven menu design focused on profitability, guest preference, and operational efficiency with smart pricing strategies.",
    icon: "📋",
    accent: "#ea580c",
  },
  {
    title: "Nutrition Consulting",
    description:
      "Specialized support for wellness menus, dietary programs, and health-focused product development for modern consumers.",
    icon: "🌿",
    accent: "#c2410c",
  },
];

const stats = [
  { value: "200+", label: "Recipes Crafted" },
  { value: "95%", label: "Client Retention" },
  { value: "40+", label: "Kitchens Optimized" },
];

const CulinaryAndOperationsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              culinaryItems.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 150);
              });
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .culinary-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .culinary-section * {
          box-sizing: border-box;
        }

        /* Grain overlay */
        .culinary-section::before {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.03;
          pointer-events: none;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .hero-container {
          position: relative;
          min-height: 90vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            min-height: auto;
          }
        }

        /* Left text panel */
        .hero-text-panel {
          position: relative;
          z-index: 2;
          padding: 80px 60px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #0a0a0a;
        }

        @media (max-width: 1200px) {
          .hero-text-panel { padding: 60px 40px 60px 50px; }
        }

        @media (max-width: 900px) {
          .hero-text-panel { padding: 60px 28px 48px; }
        }

        @media (max-width: 480px) {
          .hero-text-panel { padding: 48px 20px 40px; }
        }

        .eyebrow {
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

        .eyebrow-line {
          width: 32px;
          height: 1px;
          background: #f97316;
          display: inline-block;
        }

        .hero-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(42px, 5.5vw, 76px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
          margin: 0 0 28px;
        }

        .hero-headline em {
          font-style: italic;
          color: #f97316;
        }

        .hero-subtitle {
          font-size: clamp(14px, 1.5vw, 16px);
          font-weight: 300;
          line-height: 1.75;
          color: #9e9690;
          max-width: 420px;
          margin-bottom: 40px;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f97316;
          color: #0a0a0a;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 16px 28px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }

        .btn-primary:hover {
          background: #ea580c;
          transform: translateY(-2px);
        }

        .btn-ghost {
          font-size: 13px;
          font-weight: 400;
          color: #9e9690;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          letter-spacing: 0.02em;
        }

        .btn-ghost:hover { color: #f5f0eb; }

        /* Stats strip */
        .stats-strip {
          display: flex;
          gap: 0;
          margin-top: 60px;
          border-top: 1px solid #1e1e1e;
          padding-top: 32px;
        }

        .stat-item {
          flex: 1;
          padding-right: 24px;
        }

        .stat-item + .stat-item {
          padding-left: 24px;
          border-left: 1px solid #1e1e1e;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* Right image panel */
        .hero-image-panel {
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }

        @media (max-width: 900px) {
          .hero-image-panel { min-height: 350px; }
        }

        .hero-image-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.75) saturate(0.9);
          transition: transform 8s ease;
        }

        .hero-image-panel:hover img {
          transform: scale(1.04);
        }

        /* Diagonal overlay */
        .image-diagonal {
          position: absolute;
          top: 0; left: -1px;
          width: 80px;
          height: 100%;
          background: #0a0a0a;
          clip-path: polygon(0 0, 100% 0, 0 100%);
          z-index: 2;
        }

        @media (max-width: 900px) {
          .image-diagonal { display: none; }
        }

        /* Floating badge */
        .floating-badge {
          position: absolute;
          bottom: 32px;
          right: 32px;
          background: rgba(10, 10, 10, 0.85);
          border: 1px solid #2a2a2a;
          backdrop-filter: blur(10px);
          padding: 18px 22px;
          z-index: 3;
          max-width: 200px;
        }

        .floating-badge-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f97316;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .floating-badge-text {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
        }

        /* Cards section */
        .cards-section {
          padding: 100px 80px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1200px) { .cards-section { padding: 80px 50px; } }
        @media (max-width: 900px) { .cards-section { padding: 60px 28px; } }
        @media (max-width: 480px) { .cards-section { padding: 48px 20px; } }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5a5550;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .section-label::after {
          content: '';
          flex: 1;
          max-width: 64px;
          height: 1px;
          background: #2a2a2a;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }

        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: 1fr; gap: 2px; }
        }

        @media (max-width: 600px) {
          .cards-grid { grid-template-columns: 1fr; }
        }

        .culinary-card {
          background: #111;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          border: 1px solid #1a1a1a;
          cursor: default;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(24px);
        }

        .culinary-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.35s, border-color 0.35s;
        }

        .culinary-card:hover {
          background: #161616;
          border-color: #f97316;
        }

        .culinary-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .culinary-card:hover::after {
          transform: scaleX(1);
        }

        .card-number {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          font-weight: 900;
          color: #1e1e1e;
          line-height: 1;
          position: absolute;
          top: 16px; right: 24px;
          user-select: none;
          transition: color 0.35s;
        }

        .culinary-card:hover .card-number {
          color: #2a1a0a;
        }

        .card-icon {
          font-size: 28px;
          margin-bottom: 20px;
          display: block;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #f5f0eb;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #6b6560;
          transition: color 0.3s;
        }

        .culinary-card:hover .card-desc {
          color: #9e9690;
        }

        /* Operations panel */
        .operations-panel {
          margin: 0 80px 100px;
          background: #111;
          border: 1px solid #1e1e1e;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1200px) { .operations-panel { margin: 0 50px 80px; } }
        @media (max-width: 900px) {
          .operations-panel {
            margin: 0 28px 60px;
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) { .operations-panel { margin: 0 20px 48px; } }

        .ops-image-side {
          position: relative;
          min-height: 320px;
          overflow: hidden;
        }

        .ops-image-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6) saturate(0.8);
          transition: transform 6s ease;
        }

        .ops-image-side:hover img {
          transform: scale(1.05);
        }

        .ops-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 60%);
        }

        .ops-content-side {
          padding: 52px 52px 52px 56px;
        }

        @media (max-width: 900px) { .ops-content-side { padding: 44px 28px; } }

        .ops-eyebrow {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 20px;
        }

        .ops-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .ops-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          margin-bottom: 32px;
        }

        .ops-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ops-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 13px;
          font-weight: 400;
          color: #9e9690;
          line-height: 1.6;
        }

        .ops-bullet {
          width: 20px;
          height: 20px;
          background: #1e1e1e;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ops-bullet svg {
          width: 10px;
          height: 10px;
          color: #f97316;
        }

        /* Fade-in for hero */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-delay-1 { transition-delay: 0.1s; }
        .fade-in-delay-2 { transition-delay: 0.2s; }
        .fade-in-delay-3 { transition-delay: 0.3s; }
        .fade-in-delay-4 { transition-delay: 0.45s; }
        .fade-in-delay-5 { transition-delay: 0.6s; }
      `}</style>

      <section id="culinary" className="culinary-section" ref={sectionRef}>

        {/* ── HERO SPLIT ── */}
        <div className="hero-container">

          {/* Left: Text */}
          <div className="hero-text-panel">
            <div className={`fade-in ${heroVisible ? "visible" : ""}`}>
              <span className="eyebrow">
                <span className="eyebrow-line" />
                Culinary &amp; Operations
              </span>
            </div>

            <h2 className={`hero-headline fade-in fade-in-delay-1 ${heroVisible ? "visible" : ""}`}>
              Where <em>Craft</em><br />Meets<br />Precision.
            </h2>

            <p className={`hero-subtitle fade-in fade-in-delay-2 ${heroVisible ? "visible" : ""}`}>
              We bring together chef-driven innovation and operational discipline
              to design menus, kitchens, and processes that perform in real-world
              F&amp;B and D2C environments.
            </p>

            <div className={`hero-cta-row fade-in fade-in-delay-3 ${heroVisible ? "visible" : ""}`}>
              <button className="btn-primary">
                Explore Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-ghost">
                View Case Studies
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 7h4M7 5l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className={`stats-strip fade-in fade-in-delay-4 ${heroVisible ? "visible" : ""}`}>
              {stats.map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className={`hero-image-panel fade-in fade-in-delay-2 ${heroVisible ? "visible" : ""}`}>
            <div className="image-diagonal" />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=85&auto=format&fit=crop"
              alt="Professional chef at work"
            />
            <div className="floating-badge">
              <div className="floating-badge-label">Est. Excellence</div>
              <div className="floating-badge-text">Farm to Table Innovation</div>
            </div>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="cards-section">
          <div className="section-label">Our Services</div>
          <div className="cards-grid">
            {culinaryItems.map((item, index) => (
              <div
                key={index}
                className={`culinary-card ${visibleCards[index] ? "visible" : ""}`}
                style={{ transitionDelay: visibleCards[index] ? `${index * 0.12}s` : "0s" }}
              >
                <span className="card-number">0{index + 1}</span>
                <span className="card-icon">{item.icon}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── OPERATIONS PANEL ── */}
        <div className="operations-panel">
          {/* Image side */}
          <div className="ops-image-side">
            <img
              src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=800&q=85&auto=format&fit=crop"
              alt="Kitchen operations"
            />
            <div className="ops-image-overlay" />
          </div>

          {/* Content side */}
          <div className="ops-content-side">
            <p className="ops-eyebrow">How We Support Your Kitchens</p>
            <h3 className="ops-title">Scalable Systems Built for the Real World</h3>
            <p className="ops-text">
              From back-of-house workflows to brand-consistent recipes, we help
              you design culinary systems that are scalable, repeatable, and
              easy to train across locations.
            </p>
            <ul className="ops-list">
              {[
                "Standardized SOPs for prep, cooking, and service",
                "Optimized station layouts to reduce waste and delays",
                "Clear documentation for faster onboarding and training",
              ].map((item, i) => (
                <li key={i}>
                  <span className="ops-bullet">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 5l2.5 2.5L8 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </>
  );
};

export default CulinaryAndOperationsSection;
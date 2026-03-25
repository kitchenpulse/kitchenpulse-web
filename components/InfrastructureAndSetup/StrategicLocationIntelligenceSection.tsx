"use client";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    label: "Dealer Network",
    description:
      "Extensive dealer and property network across major and emerging Indian cities.",
    icon: "🏙️",
  },
  {
    label: "Pre-Negotiated Rates",
    description:
      "Pre-negotiated rates from 1800+ vetted F&B-suitable properties for faster decisions.",
    icon: "📋",
  },
  {
    label: "Prime Locations",
    description:
      "Prime locations for dine-in, cloud kitchens, and D2C fulfillment centers.",
    icon: "📍",
  },
  {
    label: "Tier 2 & 3 Expertise",
    description:
      "Deep understanding of Tier 2 & 3 city dynamics for confident expansion.",
    icon: "🗺️",
  },
];

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    alt: "Mumbai skyline",
    city: "Mumbai",
  },
  {
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    alt: "Delhi cityscape",
    city: "Delhi",
  },
  {
    url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
    alt: "Bangalore city",
    city: "Bangalore",
  },
];

const stats = [
  { value: "1800+", label: "Vetted Properties" },
  { value: "Pan-India", label: "City Coverage" },
  { value: "Tier 2 & 3", label: "Deep Expertise" },
];

const StrategicLocationIntelligenceSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              highlights.forEach((_, i) => {
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

        .sli-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .sli-section * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Grain overlay */
        .sli-section::before {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.03;
          pointer-events: none;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* ── HERO ── */
        .sli-hero-container {
          position: relative;
          min-height: 90vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .sli-hero-container {
            grid-template-columns: 1fr;
            min-height: auto;
          }
        }

        /* Left text panel */
        .sli-hero-text-panel {
          position: relative;
          z-index: 2;
          padding: 80px 60px 80px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #0a0a0a;
        }

        @media (max-width: 1200px) {
          .sli-hero-text-panel { padding: 60px 40px 60px 50px; }
        }
        @media (max-width: 900px) {
          .sli-hero-text-panel { padding: 60px 28px 48px; }
        }
        @media (max-width: 480px) {
          .sli-hero-text-panel { padding: 48px 20px 40px; }
        }

        .sli-eyebrow {
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

        .sli-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #f97316;
          display: inline-block;
        }

        .sli-hero-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(42px, 5.5vw, 76px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
          margin-bottom: 28px;
        }

        .sli-hero-headline em {
          font-style: italic;
          color: #f97316;
        }

        .sli-hero-subtitle {
          font-size: clamp(14px, 1.5vw, 16px);
          font-weight: 300;
          line-height: 1.75;
          color: #9e9690;
          max-width: 420px;
          margin-bottom: 40px;
        }

        .sli-cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sli-btn-primary {
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
          font-family: 'DM Sans', sans-serif;
        }

        .sli-btn-primary:hover {
          background: #ea580c;
          transform: translateY(-2px);
        }

        .sli-btn-ghost {
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
          font-family: 'DM Sans', sans-serif;
        }

        .sli-btn-ghost:hover { color: #f5f0eb; }

        /* Stats strip */
        .sli-stats-strip {
          display: flex;
          gap: 0;
          margin-top: 60px;
          border-top: 1px solid #1e1e1e;
          padding-top: 32px;
        }

        .sli-stat-item {
          flex: 1;
          padding-right: 24px;
        }

        .sli-stat-item + .sli-stat-item {
          padding-left: 24px;
          border-left: 1px solid #1e1e1e;
        }

        .sli-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 6px;
        }

        .sli-stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* Right image panel */
        .sli-hero-image-panel {
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }

        @media (max-width: 900px) {
          .sli-hero-image-panel { min-height: 360px; }
        }

        .sli-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease;
          filter: brightness(0.7) saturate(0.85);
        }

        .sli-hero-img.active { opacity: 1; }

        /* Slow Ken Burns on active image */
        @keyframes sli-ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

        .sli-hero-img.active {
          animation: sli-ken-burns 8s ease forwards;
        }

        /* Diagonal overlay */
        .sli-image-diagonal {
          position: absolute;
          top: 0; left: -1px;
          width: 80px;
          height: 100%;
          background: #0a0a0a;
          clip-path: polygon(0 0, 100% 0, 0 100%);
          z-index: 2;
        }

        @media (max-width: 900px) {
          .sli-image-diagonal { display: none; }
        }

        /* City indicator */
        .sli-city-badge {
          position: absolute;
          top: 24px;
          left: 56px;
          z-index: 3;
          background: rgba(10, 10, 10, 0.7);
          border: 1px solid #2a2a2a;
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f5f0eb;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        @media (max-width: 900px) {
          .sli-city-badge { left: 20px; }
        }

        .sli-city-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f97316;
          animation: sli-pulse 2s ease infinite;
        }

        @keyframes sli-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        /* Dot indicators */
        .sli-dots {
          position: absolute;
          bottom: 32px;
          right: 32px;
          z-index: 3;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .sli-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s;
        }

        .sli-dot.active {
          background: #f97316;
          transform: scale(1.35);
        }

        /* Pan-India badge */
        .sli-floating-badge {
          position: absolute;
          bottom: 32px;
          left: 56px;
          background: rgba(10, 10, 10, 0.85);
          border: 1px solid #2a2a2a;
          backdrop-filter: blur(10px);
          padding: 18px 22px;
          z-index: 3;
          max-width: 210px;
        }

        @media (max-width: 900px) {
          .sli-floating-badge { left: 20px; }
        }

        .sli-floating-badge-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f97316;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .sli-floating-badge-text {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.25;
        }

        /* ── CARDS SECTION ── */
        .sli-cards-section {
          padding: 100px 80px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1200px) { .sli-cards-section { padding: 80px 50px; } }
        @media (max-width: 900px) { .sli-cards-section { padding: 60px 28px; } }
        @media (max-width: 480px) { .sli-cards-section { padding: 48px 20px; } }

        .sli-section-label {
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

        .sli-section-label::after {
          content: '';
          flex: 1;
          max-width: 64px;
          height: 1px;
          background: #2a2a2a;
        }

        .sli-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }

        @media (max-width: 1100px) {
          .sli-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .sli-cards-grid { grid-template-columns: 1fr; }
        }

        .sli-card {
          background: #111;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          border: 1px solid #1a1a1a;
          cursor: default;
          opacity: 0;
          transform: translateY(24px);
          transition: background 0.35s, border-color 0.35s;
        }

        .sli-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      background 0.35s, border-color 0.35s;
        }

        .sli-card:hover {
          background: #161616;
          border-color: #f97316;
        }

        .sli-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .sli-card:hover::after {
          transform: scaleX(1);
        }

        .sli-card-number {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          font-weight: 900;
          color: #1e1e1e;
          line-height: 1;
          position: absolute;
          top: 16px; right: 20px;
          user-select: none;
          transition: color 0.35s;
        }

        .sli-card:hover .sli-card-number {
          color: #2a1a0a;
        }

        .sli-card-icon {
          font-size: 26px;
          margin-bottom: 20px;
          display: block;
        }

        .sli-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 700;
          color: #f5f0eb;
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .sli-card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: #6b6560;
          transition: color 0.3s;
        }

        .sli-card:hover .sli-card-desc {
          color: #9e9690;
        }

        /* ── INTEL PANEL (mirrored from ops panel) ── */
        .sli-intel-panel {
          margin: 0 80px 100px;
          background: #111;
          border: 1px solid #1e1e1e;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1200px) { .sli-intel-panel { margin: 0 50px 80px; } }
        @media (max-width: 900px) {
          .sli-intel-panel {
            margin: 0 28px 60px;
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) { .sli-intel-panel { margin: 0 20px 48px; } }

        .sli-intel-content {
          padding: 52px 56px 52px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 900px) { .sli-intel-content { padding: 44px 28px; } }

        .sli-intel-eyebrow {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 20px;
        }

        .sli-intel-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .sli-intel-title em {
          font-style: italic;
          color: #f97316;
        }

        .sli-intel-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          margin-bottom: 36px;
          max-width: 440px;
        }

        .sli-intel-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sli-intel-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 13px;
          font-weight: 400;
          color: #9e9690;
          line-height: 1.6;
        }

        .sli-intel-bullet {
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

        .sli-intel-bullet svg {
          width: 10px;
          height: 10px;
          color: #f97316;
        }

        /* Image side of intel panel */
        .sli-intel-image {
          position: relative;
          min-height: 320px;
          overflow: hidden;
        }

        .sli-intel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6) saturate(0.8);
          transition: transform 6s ease;
        }

        .sli-intel-image:hover img {
          transform: scale(1.05);
        }

        .sli-intel-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 60%);
        }

        /* ── Fade-in utilities ── */
        .sli-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .sli-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sli-delay-1 { transition-delay: 0.1s; }
        .sli-delay-2 { transition-delay: 0.2s; }
        .sli-delay-3 { transition-delay: 0.3s; }
        .sli-delay-4 { transition-delay: 0.45s; }
        .sli-delay-5 { transition-delay: 0.6s; }
      `}</style>

      <section id="location" className="sli-section" ref={sectionRef}>

        {/* ── HERO SPLIT ── */}
        <div className="sli-hero-container">

          {/* Left: Text */}
          <div className="sli-hero-text-panel">
            <div className={`sli-fade-in ${heroVisible ? "visible" : ""}`}>
              <span className="sli-eyebrow">
                <span className="sli-eyebrow-line" />
                Location Intelligence
              </span>
            </div>

            <h2 className={`sli-hero-headline sli-fade-in sli-delay-1 ${heroVisible ? "visible" : ""}`}>
              Where <em>Location</em><br />Becomes<br />Advantage.
            </h2>

            <p className={`sli-hero-subtitle sli-fade-in sli-delay-2 ${heroVisible ? "visible" : ""}`}>
              We combine on-ground expertise with data-driven insight to secure
              locations that maximize visibility, operational efficiency, and
              long-term profitability for F&amp;B and D2C brands.
            </p>

            <div className={`sli-cta-row sli-fade-in sli-delay-3 ${heroVisible ? "visible" : ""}`}>
              <button className="sli-btn-primary">
                Find Locations
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="sli-btn-ghost">
                View Properties
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 7h4M7 5l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className={`sli-stats-strip sli-fade-in sli-delay-4 ${heroVisible ? "visible" : ""}`}>
              {stats.map((s, i) => (
                <div className="sli-stat-item" key={i}>
                  <div className="sli-stat-value">{s.value}</div>
                  <div className="sli-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Crossfading Image */}
          <div className={`sli-hero-image-panel sli-fade-in sli-delay-2 ${heroVisible ? "visible" : ""}`}>
            <div className="sli-image-diagonal" />

            {heroImages.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                className={`sli-hero-img ${i === activeImage ? "active" : ""}`}
              />
            ))}

            {/* City indicator */}
            <div className="sli-city-badge">
              <span className="sli-city-dot" />
              {heroImages[activeImage].city}
            </div>

            {/* Dot controls */}
            <div className="sli-dots">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  className={`sli-dot ${i === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show ${heroImages[i].city}`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="sli-floating-badge">
              <div className="sli-floating-badge-label">Pan-India Network</div>
              <div className="sli-floating-badge-text">Prime Real Estate, Placed Right</div>
            </div>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="sli-cards-section">
          <div className="sli-section-label">Our Capabilities</div>
          <div className="sli-cards-grid">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`sli-card ${visibleCards[index] ? "visible" : ""}`}
                style={{ transitionDelay: visibleCards[index] ? `${index * 0.12}s` : "0s" }}
              >
                <span className="sli-card-number">0{index + 1}</span>
                <span className="sli-card-icon">{item.icon}</span>
                <h3 className="sli-card-title">{item.label}</h3>
                <p className="sli-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── INTEL PANEL ── */}
        <div className="sli-intel-panel">

          {/* Content side */}
          <div className="sli-intel-content">
            <p className="sli-intel-eyebrow">How We Source for You</p>
            <h3 className="sli-intel-title">
              Sourcing That Goes <em>Beyond</em> the Listing
            </h3>
            <p className="sli-intel-text">
              From off-market properties to pre-negotiated lease terms, our network
              gives you a real edge — whether you're launching your first outlet or
              scaling to fifty.
            </p>
            <ul className="sli-intel-list">
              {[
                "1800+ vetted properties ready for F&B and D2C use",
                "Ground-level insight across Tier 1, 2 & 3 cities",
                "End-to-end support from shortlisting to deal closure",
              ].map((item, i) => (
                <li key={i}>
                  <span className="sli-intel-bullet">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 5l2.5 2.5L8 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="sli-intel-image">
            <img
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=85&auto=format&fit=crop"
              alt="City expansion"
            />
            <div className="sli-intel-image-overlay" />
          </div>
        </div>

      </section>
    </>
  );
};

export default StrategicLocationIntelligenceSection;
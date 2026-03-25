"use client";
import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your goals, audience, and current challenges to identify the right opportunities.",
    tag: "Foundation",
    detail: "Goals · Audience · Gaps",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description:
      "We craft a data-driven roadmap with clear milestones, timelines, and success metrics.",
    tag: "Roadmap",
    detail: "Milestones · Timelines · KPIs",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "We execute the strategy with clean development, integrations, and thorough testing.",
    tag: "Execution",
    detail: "Dev · Integrations · QA",
  },
  {
    number: "04",
    title: "Growth & Optimisation",
    description:
      "We monitor performance, iterate, and continuously improve to maximise long-term results.",
    tag: "Iteration",
    detail: "Analytics · A/B · Scale",
  },
];

const ProcessSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              steps.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 120);
              });
            }, 200);
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

        .pr-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }

        .pr-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Grain */
        .pr-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Ambient glow — bottom-left to differ from ServicesSection */
        .pr-glow {
          position: absolute;
          bottom: -160px; left: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── HEADER ── */
        .pr-header {
          position: relative;
          z-index: 2;
          padding: 100px 80px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: end;
          border-bottom: 1px solid #1a1a1a;
        }

        @media (max-width: 1100px) { .pr-header { padding: 80px 50px 60px; gap: 40px; } }
        @media (max-width: 800px)  { .pr-header { grid-template-columns: 1fr; padding: 60px 28px 48px; gap: 28px; } }
        @media (max-width: 480px)  { .pr-header { padding: 48px 20px 40px; } }

        .pr-eyebrow {
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

        .pr-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .pr-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
        }

        .pr-headline em { font-style: italic; color: #f97316; }

        .pr-header-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #9e9690;
          max-width: 400px;
          margin-bottom: 36px;
        }

        /* Header stats */
        .pr-header-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid #1e1e1e;
          padding-top: 28px;
        }

        .pr-hstat { flex: 1; padding-right: 20px; }
        .pr-hstat + .pr-hstat { padding-left: 20px; border-left: 1px solid #1e1e1e; }

        .pr-hstat-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }

        .pr-hstat-lbl {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── CONNECTOR STRIP ── */
        .pr-connector-strip {
          position: relative;
          z-index: 2;
          padding: 0 80px;
          display: flex;
          align-items: center;
          gap: 0;
          overflow: hidden;
        }

        @media (max-width: 1100px) { .pr-connector-strip { padding: 0 50px; } }
        @media (max-width: 800px)  { .pr-connector-strip { display: none; } }

        .pr-connector-node {
          width: 10px; height: 10px;
          border: 1px solid #f97316;
          background: #1a1a1a;
          flex-shrink: 0;
          transform: rotate(45deg);
        }

        .pr-connector-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, #f97316, #2a1a0a 80%);
        }

        .pr-connector-line:last-child {
          background: #1a1a1a;
        }

        /* ── GRID ── */
        .pr-grid-wrap {
          position: relative;
          z-index: 2;
          padding: 2px 80px 100px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }

        @media (max-width: 1100px) { .pr-grid-wrap { padding: 2px 50px 80px; grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px)  { .pr-grid-wrap { grid-template-columns: 1fr; padding: 2px 20px 48px; } }

        /* ── CARD ── */
        .pr-card {
          background: #111;
          border: 1px solid #1a1a1a;
          padding: 36px 28px 28px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: border-color 0.3s, background 0.3s;
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .pr-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.3s, background 0.3s;
        }

        .pr-card:hover {
          background: #161616;
          border-color: #f97316;
        }

        /* Bottom accent bar */
        .pr-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .pr-card:hover::after { transform: scaleX(1); }

        /* Step number watermark */
        .pr-card-watermark {
          position: absolute;
          top: 16px; right: 20px;
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: color 0.3s;
        }

        .pr-card:hover .pr-card-watermark { color: #221206; }

        /* Tag */
        .pr-card-tag {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        /* Title */
        .pr-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        /* Desc */
        .pr-card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          flex: 1;
          transition: color 0.3s;
          position: relative;
          z-index: 1;
        }

        .pr-card:hover .pr-card-desc { color: #9e9690; }

        /* Footer */
        .pr-card-footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .pr-card-detail {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: #3a3530;
          transition: color 0.3s;
        }

        .pr-card:hover .pr-card-detail { color: #6b6560; }

        /* Arrow indicator */
        .pr-card-arrow {
          width: 20px; height: 20px;
          border: 1px solid #252525;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s, background 0.3s;
          flex-shrink: 0;
        }

        .pr-card:hover .pr-card-arrow {
          border-color: #f97316;
          background: #2a1a0a;
        }

        .pr-card-arrow svg {
          width: 10px; height: 10px;
          stroke: #3a3530;
          transition: stroke 0.3s;
        }

        .pr-card:hover .pr-card-arrow svg { stroke: #f97316; }

        /* Fade utilities */
        .pr-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .pr-fade.visible { opacity: 1; transform: translateY(0); }
        .pr-d1 { transition-delay: 0.1s; }
        .pr-d2 { transition-delay: 0.2s; }
        .pr-d3 { transition-delay: 0.3s; }
        .pr-d4 { transition-delay: 0.45s; }
      `}</style>

      <section id="process" className="pr-section" ref={sectionRef}>
        <div className="pr-glow" />

        {/* ── HEADER ── */}
        <div className="pr-header">
          <div>
            <div className={`pr-fade ${heroVisible ? "visible" : ""}`}>
              <span className="pr-eyebrow">
                <span className="pr-eyebrow-line" />
                How We Work
              </span>
            </div>
            <h2 className={`pr-headline pr-fade pr-d1 ${heroVisible ? "visible" : ""}`}>
              Our Proven<br /><em>Process</em><br />Framework.
            </h2>
          </div>

          <div>
            <p className={`pr-header-body pr-fade pr-d2 ${heroVisible ? "visible" : ""}`}>
              A simple, transparent four-step framework that takes you from
              initial discovery to sustainable growth — every stage designed
              to build on the last.
            </p>
            <div className={`pr-header-stats pr-fade pr-d3 ${heroVisible ? "visible" : ""}`}>
              {[
                { v: "4", l: "Stages" },
                { v: "100%", l: "Transparent" },
                { v: "∞", l: "Iterations" },
              ].map((s, i) => (
                <div className="pr-hstat" key={i}>
                  <div className="pr-hstat-val">{s.v}</div>
                  <div className="pr-hstat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CONNECTOR STRIP ── */}
        <div className={`pr-connector-strip pr-fade pr-d4 ${heroVisible ? "visible" : ""}`}>
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="pr-connector-node" />
              {i < steps.length && <div className="pr-connector-line" />}
            </React.Fragment>
          ))}
          <div className="pr-connector-node" style={{ borderColor: "#1e1e1e" }} />
        </div>

        {/* ── STEP CARDS ── */}
        <div className="pr-grid-wrap">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`pr-card ${visibleCards[i] ? "visible" : ""}`}
              style={{ transitionDelay: visibleCards[i] ? `${i * 0.1}s` : "0s" }}
            >
              {/* Watermark number */}
              <span className="pr-card-watermark">{step.number}</span>

              <p className="pr-card-tag">{step.tag}</p>
              <h3 className="pr-card-title">{step.title}</h3>
              <p className="pr-card-desc">{step.description}</p>

              <div className="pr-card-footer">
                <span className="pr-card-detail">{step.detail}</span>
                <div className="pr-card-arrow">
                  <svg viewBox="0 0 10 10" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 5h6M5 2l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
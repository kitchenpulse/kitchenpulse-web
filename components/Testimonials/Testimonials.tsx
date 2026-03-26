"use client";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    client: "Glen",
    role: "CEO",
    company: "Cluckin",
    logo: "/assets/clucin.png",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    quote:
      "Kitchen Pulse understood our QSR throughput challenges better than anyone we had worked with before. They supported us closely through equipment planning, installation, and commissioning, ensuring we went live on schedule with zero disruption to operations. I see them as a long-term partner for every new Cluckin outlet — our one-stop kitchen solutions partner.",
  },
  {
    client: "Venkatesh",
    role: "Chief of Staff",
    company: "Maiz Mexican",
    logo: "/assets/maizmexican.png",
    featured: false,
    quote:
      "With Maiz Mexican scaling across multiple locations, we needed a partner who could standardise our kitchens without compromising on menu authenticity. Kitchen Pulse helped us build a setup that makes expansion easy — a true one-stop solution from design and equipment to on-ground coordination.",
  },
  {
    client: "Krishna Kant",
    role: "CFO",
    company: "Charcoal Eats",
    logo: "/assets/charcoaleats.jpg",
    featured: false,
    quote:
      "The pace at which they execute projects and the price at which they deliver complete kitchens is amazing, especially given the quality of equipment and workmanship. They make the entire process far more predictable — from finalising BOQs to handover.",
  },
  {
    client: "Jestin",
    role: "Co-Founder",
    company: "Kerala Café",
    logo: "/assets/keralacafe.png",
    featured: false,
    quote:
      "Kitchen Pulse delivered a cohesive concept — aligning front-of-house interiors with our coastal, homely vibe while designing a back-of-house that handles heavy volumes comfortably. From ventilation to lighting, the way they tied interiors and kitchen together has elevated our guest experience.",
  },
  {
    client: "Rishabh",
    role: "Franchise Owner",
    company: "Rebel Foods",
    logo: null,
    initials: "RF",
    featured: false,
    quote:
      "What stood out most was their coordination across all stakeholders. They took charge of aligning vendors, contractors, and timelines so our kitchen was ready to operate without us chasing multiple parties. Their structured project management helped us start operations earlier than expected.",
  },
];

const stats = [
  { value: "120+", label: "Kitchens Built" },
  { value: "40+", label: "F&B Brands" },
  { value: "98%", label: "On-time Delivery" },
];

const featuredTestimonial = testimonials.find((t) => t.featured)!;
const smallTestimonials = testimonials.filter((t) => !t.featured);

const LogoBadge = ({
  logo,
  initials,
  size,
}: {
  logo: string | null;
  initials?: string;
  size: "lg" | "sm";
}) => {
  const dimension = size === "lg" ? 40 : 32;
  const fontSize = size === "lg" ? 14 : 11;
  const className = size === "lg" ? "tm-logo-badge" : "tm-logo-sm";

  if (logo) {
    return (
      <div
        className={className}
        style={{ padding: 0, overflow: "hidden", background: "#1a1a1a" }}
      >
        <img
          src={logo}
          alt=""
          style={{
            width: dimension,
            height: dimension,
            objectFit: "cover",
            display: "block",
            borderRadius: size === "lg" ? 3 : 2,
          }}
        />
      </div>
    );
  }

  return (
    <div className={className} style={{ fontSize }}>
      {initials}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              smallTestimonials.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 130);
              });
            }, 500);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .tm-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }
        .tm-section * { box-sizing: border-box; margin: 0; padding: 0; }

        .tm-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .tm-hero {
          position: relative;
          z-index: 2;
          padding: 80px 80px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
        }

        .tm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 22px;
        }
        .tm-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .tm-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
        }
        .tm-headline em { font-style: italic; color: #f97316; }

        .tm-hero-body {
          font-size: clamp(13px, 1.3vw, 15px);
          font-weight: 300;
          line-height: 1.85;
          color: #7a7570;
          max-width: 400px;
          align-self: end;
          padding-bottom: 4px;
        }

        .tm-count-strip {
          display: flex;
          gap: 0;
          border-top: 1px solid #1e1e1e;
          padding-top: 24px;
          margin-top: 28px;
        }
        .tm-count { flex: 1; padding-right: 20px; }
        .tm-count + .tm-count { padding-left: 20px; border-left: 1px solid #1e1e1e; }
        .tm-count-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }
        .tm-count-lbl {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        .tm-grid-area {
          position: relative;
          z-index: 2;
          padding: 56px 80px 0;
        }

        .tm-featured {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          border: 1px solid #1a1a1a;
          background: #111;
          overflow: hidden;
          margin-bottom: 2px;
          transition: border-color 0.35s;
        }
        .tm-featured:hover { border-color: #f97316; }

        .tm-feat-img-wrap {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        .tm-feat-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.5) saturate(0.7);
          transition: transform 6s ease, filter 0.4s ease;
          display: block;
        }
        .tm-featured:hover .tm-feat-img-wrap img {
          transform: scale(1.05);
          filter: brightness(0.4) saturate(0.6);
        }
        .tm-feat-img-fade {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 100px;
          background: linear-gradient(to top, #111, transparent);
          pointer-events: none;
        }
        .tm-feat-body {
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .tm-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          font-weight: 900;
          color: #f97316;
          line-height: 0.8;
          opacity: 0.4;
          margin-bottom: 14px;
          user-select: none;
        }
        .tm-feat-quote {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.85;
          color: #8a8580;
          flex: 1;
          transition: color 0.3s;
        }
        .tm-featured:hover .tm-feat-quote { color: #b5b0ab; }
        .tm-feat-footer {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid #1e1e1e;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .tm-logo-badge {
          width: 40px; height: 40px;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 700;
          color: #f97316;
          flex-shrink: 0;
          border-radius: 4px;
        }
        .tm-feat-name {
          font-size: 13px;
          font-weight: 500;
          color: #f5f0eb;
          margin-bottom: 2px;
        }
        .tm-feat-role { font-size: 11px; color: #5a5550; letter-spacing: 0.04em; }
        .tm-feat-bar {
          height: 3px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .tm-featured:hover .tm-feat-bar { transform: scaleX(1); }

        .tm-small-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }

        .tm-card {
          background: #111;
          border: 1px solid #1a1a1a;
          padding: 28px 26px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.35s;
          cursor: default;
          opacity: 0;
          transform: translateY(24px);
        }
        .tm-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.35s;
        }
        .tm-card:hover { border-color: #f97316; }

        .tm-card-qmark {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 900;
          color: #f97316;
          opacity: 0.35;
          line-height: 1;
          margin-bottom: 10px;
          user-select: none;
        }
        .tm-card-quote {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.8;
          color: #6b6560;
          flex: 1;
          transition: color 0.3s;
        }
        .tm-card:hover .tm-card-quote { color: #9e9690; }
        .tm-card-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #1e1e1e;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tm-logo-sm {
          width: 32px; height: 32px;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 11px;
          font-weight: 700;
          color: #f97316;
          flex-shrink: 0;
          border-radius: 3px;
        }
        .tm-card-name { font-size: 12px; font-weight: 500; color: #f5f0eb; margin-bottom: 2px; }
        .tm-card-role { font-size: 10.5px; color: #4a4540; letter-spacing: 0.04em; }
        .tm-card-bar {
          height: 2px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          margin-top: 12px;
        }
        .tm-card:hover .tm-card-bar { transform: scaleX(1); }

        .tm-footer-space { height: 80px; position: relative; z-index: 2; }

        .tm-fade { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .tm-fade.visible { opacity: 1; transform: translateY(0); }
        .tm-d1 { transition-delay: 0.1s; }
        .tm-d2 { transition-delay: 0.2s; }
        .tm-d3 { transition-delay: 0.35s; }
        .tm-d4 { transition-delay: 0.45s; }

        @media (max-width: 1100px) {
          .tm-hero { padding: 70px 50px 0; gap: 40px; }
          .tm-grid-area { padding: 50px 50px 0; }
          .tm-small-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .tm-hero { grid-template-columns: 1fr; padding: 56px 28px 0; gap: 24px; }
          .tm-hero-body { max-width: 100%; }
          .tm-grid-area { padding: 44px 28px 0; }
          .tm-featured { grid-template-columns: 1fr; }
          .tm-feat-img-wrap { height: 220px; }
          .tm-small-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .tm-hero { padding: 44px 20px 0; }
          .tm-grid-area { padding: 36px 20px 0; }
          .tm-small-row { grid-template-columns: 1fr; }
          .tm-feat-body { padding: 24px 22px; }
        }
      `}</style>

      <section className="tm-section" ref={sectionRef}>

        {/* HERO */}
        <div className="tm-hero">
          <div>
            <div className={`tm-fade ${heroVisible ? "visible" : ""}`}>
              <span className="tm-eyebrow">
                <span className="tm-eyebrow-line" />
                Client Testimonials
              </span>
            </div>
            <h2 className={`tm-headline tm-fade tm-d1 ${heroVisible ? "visible" : ""}`}>
              Partners Who<br /><em>Trust the Pulse.</em>
            </h2>
          </div>
          <div>
            <p className={`tm-hero-body tm-fade tm-d2 ${heroVisible ? "visible" : ""}`}>
              From single-outlet QSRs to multi-city cloud kitchen chains, our clients count on
              Kitchen Pulse to deliver complete kitchen solutions — on time, on budget, and built to scale.
            </p>
            <div className={`tm-count-strip tm-fade tm-d3 ${heroVisible ? "visible" : ""}`}>
              {stats.map((s, i) => (
                <div className="tm-count" key={i}>
                  <div className="tm-count-val">{s.value}</div>
                  <div className="tm-count-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARDS AREA */}
        <div className="tm-grid-area">

          {/* Featured Card */}
          <div className={`tm-featured tm-fade tm-d4 ${heroVisible ? "visible" : ""}`}>
            <div className="tm-feat-img-wrap">
              <img src={featuredTestimonial.image} alt="Commercial kitchen" />
              <div className="tm-feat-img-fade" />
            </div>
            <div className="tm-feat-body">
              <div>
                <div className="tm-quote-mark">"</div>
                <p className="tm-feat-quote">{featuredTestimonial.quote}</p>
              </div>
              <div className="tm-feat-footer">
                <LogoBadge logo={featuredTestimonial.logo} initials={(featuredTestimonial as any).initials} size="lg" />
                <div>
                  <div className="tm-feat-name">{featuredTestimonial.client}</div>
                  <div className="tm-feat-role">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                </div>
              </div>
              <div className="tm-feat-bar" />
            </div>
          </div>

          {/* Small Cards */}
          <div className="tm-small-row">
            {smallTestimonials.map((t, index) => (
              <div
                key={t.company}
                className={`tm-card ${visibleCards[index] ? "visible" : ""}`}
                style={{ transitionDelay: visibleCards[index] ? `${index * 0.1}s` : "0s" }}
              >
                <div>
                  <div className="tm-card-qmark">"</div>
                  <p className="tm-card-quote">{t.quote}</p>
                </div>
                <div className="tm-card-footer">
                  <LogoBadge logo={t.logo} initials={(t as any).initials} size="sm" />
                  <div>
                    <div className="tm-card-name">{t.client}</div>
                    <div className="tm-card-role">{t.role}, {t.company}</div>
                  </div>
                </div>
                <div className="tm-card-bar" />
              </div>
            ))}
          </div>
        </div>

        <div className="tm-footer-space" />
      </section>
    </>
  );
};

export default Testimonials;
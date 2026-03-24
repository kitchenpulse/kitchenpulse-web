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

const StrategicLocationIntelligenceSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-cycle hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer for scroll-in animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .sli-section * { box-sizing: border-box; }
        .sli-section { font-family: 'DM Sans', sans-serif; }

        .sli-fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sli-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sli-fade-up.delay-1 { transition-delay: 0.1s; }
        .sli-fade-up.delay-2 { transition-delay: 0.2s; }
        .sli-fade-up.delay-3 { transition-delay: 0.3s; }
        .sli-fade-up.delay-4 { transition-delay: 0.4s; }
        .sli-fade-up.delay-5 { transition-delay: 0.5s; }
        .sli-fade-up.delay-6 { transition-delay: 0.6s; }

        /* Hero image crossfade */
        .hero-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease;
        }
        .hero-img.active { opacity: 1; }

        /* Dot indicators */
        .dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .dot.active {
          background: #f97316;
          transform: scale(1.3);
        }

        /* Highlight card hover */
        .highlight-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .highlight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.10);
          border-color: #fdba74;
        }

        /* Stat pill hover */
        .stat-pill {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-pill:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(249,115,22,0.18);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="sli-section"
        style={{ background: "#f8f7f4", padding: "80px 0 96px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* ── Top label ── */}
          <div className={`sli-fade-up ${visible ? "visible" : ""}`}
            style={{ marginBottom: 12, textAlign: "center" }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "#ea580c",
              background: "#fff3ed", padding: "5px 14px",
              borderRadius: 100, border: "1px solid #fdba74",
            }}>
              Location Strategy
            </span>
          </div>

          {/* ── Heading ── */}
          <div className={`sli-fade-up delay-1 ${visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800, color: "#0f172a", lineHeight: 1.15,
              marginBottom: 16,
            }}>
              Strategic Location{" "}
              <span style={{
                color: "#ea580c",
                borderBottom: "3px solid #fdba74",
                paddingBottom: 2,
              }}>Intelligence</span>
            </h2>
            <p style={{
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "#64748b", maxWidth: 600, margin: "0 auto", lineHeight: 1.7,
            }}>
              We combine on-ground expertise and data-driven insights to help F&amp;B and
              D2C brands secure locations that maximize visibility, operational efficiency,
              and long-term profitability.
            </p>
          </div>

          {/* ── Main grid: Hero Image + Stats ── */}
          <div className={`sli-fade-up delay-2 ${visible ? "visible" : ""}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginBottom: 28,
              alignItems: "stretch",
            }}>

            {/* Hero Image Panel */}
            <div style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              minHeight: 340,
              boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
            }}>
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={img.alt}
                  className={`hero-img ${i === activeImage ? "active" : ""}`}
                />
              ))}

              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
              }} />

              {/* City label */}
              <div style={{
                position: "absolute", top: 20, left: 20,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(8px)",
                borderRadius: 8, padding: "6px 14px",
                color: "#fff", fontSize: 13, fontWeight: 600,
                letterSpacing: "0.05em",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                📍 {heroImages[activeImage].city}
              </div>

              {/* Badge */}
              <div style={{
                position: "absolute", top: 20, right: 20,
                background: "#ea580c",
                borderRadius: 8, padding: "6px 14px",
                color: "#fff", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.06em",
              }}>
                Pan-India
              </div>

              {/* Bottom text + dots */}
              <div style={{
                position: "absolute", bottom: 20, left: 20, right: 20,
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <p style={{
                  color: "#fff", fontSize: 14, fontWeight: 500,
                  lineHeight: 1.4, maxWidth: "70%",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}>
                  Sourcing prime real estate across India's most dynamic markets
                </p>
                <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === activeImage ? "active" : ""}`}
                      onClick={() => setActiveImage(i)}
                      style={{ border: "none", padding: 0 }}
                      aria-label={`Show ${heroImages[i].city}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              justifyContent: "space-between",
            }}>
              {/* At-a-glance */}
              <div style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                padding: "24px 28px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "#94a3b8", marginBottom: 18,
                }}>
                  At a glance
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[
                    { value: "1800+", label: "Vetted F&B-ready properties" },
                    { value: "Pan-India", label: "Key & emerging city coverage" },
                    { value: "Tier 2 & 3", label: "Deep city-level expertise" },
                    { value: "Faster", label: "Decisions via pre-negotiated rates" },
                  ].map((stat, i) => (
                    <div key={i} className="stat-pill" style={{
                      background: i === 0 ? "#fff7ed" : "#f8fafc",
                      borderRadius: 14,
                      padding: "14px 16px",
                      border: `1px solid ${i === 0 ? "#fdba74" : "#e2e8f0"}`,
                    }}>
                      <p style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        fontWeight: 800,
                        color: i === 0 ? "#ea580c" : "#0f172a",
                        lineHeight: 1.1,
                        marginBottom: 5,
                        fontFamily: "'Playfair Display', serif",
                      }}>
                        {stat.value}
                      </p>
                      <p style={{
                        fontSize: 12, color: "#64748b", lineHeight: 1.4,
                      }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badge strip */}
              <div style={{
                background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
                borderRadius: 20,
                padding: "22px 28px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}>
                <div style={{
                  fontSize: 36, lineHeight: 1,
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 12,
                  width: 58, height: 58,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  🏆
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                    Trusted by F&amp;B &amp; D2C Leaders
                  </p>
                  <p style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
                    From QSR chains to cloud kitchen operators — we've placed brands in locations that perform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Highlight cards ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 12,
          }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`highlight-card sli-fade-up delay-${index + 3} ${visible ? "visible" : ""}`}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  padding: "22px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    fontSize: 20,
                    background: "#fff7ed",
                    borderRadius: 10,
                    width: 40, height: 40,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#ea580c",
                  }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p style={{
                  fontSize: 13, color: "#475569", lineHeight: 1.65,
                  fontWeight: 500,
                }}>
                  {item.description}
                </p>
                <div style={{
                  marginTop: "auto",
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: 12,
                }}>
                  <span style={{
                    fontSize: 12, fontWeight: 600, color: "#94a3b8",
                  }}>
                    {item.label} →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default StrategicLocationIntelligenceSection;
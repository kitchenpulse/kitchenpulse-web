"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/MainSection#infrastructureAndSetup", label: "Infrastructure & Setup" },
  { href: "/MainSection#culinary", label: "Culinary & Operations" },
  { href: "/MainSection#talent", label: "Talent & Training" },
  { href: "/MainSection#digital", label: "Digital & Growth" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .kp-nav-root {
          font-family: 'DM Sans', sans-serif;
        }

        /* ── TOP BAR ── */
        .kp-topbar {
          background: #080808;
          border-bottom: 1px solid #1a1a1a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 48px;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: #5a5550;
        }
        @media (max-width: 768px) { .kp-topbar { display: none; } }

        .kp-topbar a {
          color: #5a5550;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .kp-topbar a:hover { color: #f97316; }

        .kp-topbar-dot {
          width: 4px; height: 4px;
          background: #f97316;
          transform: rotate(45deg);
          opacity: 0.5;
        }

        /* ── MAIN NAV ── */
        .kp-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #0a0a0a;
          border-bottom: 1px solid #1a1a1a;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .kp-nav.scrolled {
          border-bottom-color: #f97316;
          box-shadow: 0 1px 40px rgba(249,115,22,0.08);
        }

        /* thin orange progress line at very bottom when scrolled */
        .kp-nav.scrolled::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 100%; height: 1px;
          background: linear-gradient(90deg, #f97316, #ea580c 40%, transparent 100%);
        }

        .kp-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 64px;
        }
        @media (max-width: 1100px) { .kp-nav-inner { padding: 0 32px; } }
        @media (max-width: 768px)  { .kp-nav-inner { padding: 0 20px; } }

        /* ── LOGO ── */
        .kp-logo {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .kp-logo-word {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #f5f0eb;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .kp-logo-accent {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          font-style: italic;
          color: #f97316;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .kp-logo-diamond {
          width: 5px; height: 5px;
          background: #f97316;
          transform: rotate(45deg);
          margin: 0 1px 0 3px;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ── DESKTOP LINKS ── */
        .kp-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        @media (max-width: 768px) { .kp-links { display: none; } }

        .kp-link {
          position: relative;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b6560;
          text-decoration: none;
          padding: 8px 14px;
          transition: color 0.2s;
        }

        .kp-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 14px;
          width: 0; height: 1px;
          background: #f97316;
          transition: width 0.25s ease;
        }

        .kp-link:hover {
          color: #f5f0eb;
        }
        .kp-link:hover::after { width: calc(100% - 28px); }

        /* ── SERVICES DROPDOWN ── */
        .kp-services-wrap {
          position: relative;
        }

        .kp-services-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b6560;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 14px;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .kp-services-btn:hover,
        .kp-services-btn.open { color: #f5f0eb; }

        .kp-chevron {
          transition: transform 0.25s ease;
          opacity: 0.6;
        }
        .kp-services-btn.open .kp-chevron { transform: rotate(180deg); opacity: 1; }

        .kp-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 0;
          min-width: 220px;
          background: #111;
          border: 1px solid #1e1e1e;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          box-shadow: 0 16px 40px rgba(0,0,0,0.6);
        }

        .kp-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Orange left-border marker on dropdown */
        .kp-dropdown::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 100%;
          background: linear-gradient(180deg, #f97316, #ea580c);
        }

        .kp-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 20px 13px 22px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: #6b6560;
          text-decoration: none;
          border-bottom: 1px solid #1a1a1a;
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }
        .kp-dropdown-item:last-child { border-bottom: none; }
        .kp-dropdown-item:hover {
          color: #f5f0eb;
          background: #161616;
          padding-left: 26px;
        }

        .kp-dropdown-arrow {
          margin-left: auto;
          opacity: 0;
          transition: opacity 0.2s;
          color: #f97316;
          font-size: 10px;
        }
        .kp-dropdown-item:hover .kp-dropdown-arrow { opacity: 1; }

        /* ── CTA BUTTON ── */
        .kp-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: 12px;
          padding: 10px 20px;
          background: transparent;
          border: 1px solid #f97316;
          color: #f97316;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, color 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }

        .kp-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f97316;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
          z-index: 0;
        }

        .kp-cta:hover::before { transform: translateX(0); }
        .kp-cta:hover { color: #0a0a0a; box-shadow: 0 0 24px rgba(249,115,22,0.25); }

        .kp-cta span { position: relative; z-index: 1; }

        .kp-cta-dot {
          width: 4px; height: 4px;
          background: currentColor;
          transform: rotate(45deg);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: background 0.25s;
        }

        /* ── MOBILE TOGGLE ── */
        .kp-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border: 1px solid #252525;
          background: #111;
          color: #9e9690;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .kp-mobile-toggle:hover { border-color: #f97316; color: #f97316; }
        @media (max-width: 768px) { .kp-mobile-toggle { display: flex; } }

        /* ── MOBILE MENU ── */
        .kp-mobile-menu {
          display: none;
          border-top: 1px solid #1a1a1a;
          background: #0a0a0a;
        }
        @media (max-width: 768px) { .kp-mobile-menu { display: block; } }

        .kp-mobile-inner {
          padding: 24px 20px 28px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .kp-mobile-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b6560;
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .kp-mobile-link:hover {
          color: #f5f0eb;
          border-left-color: #f97316;
          background: #111;
        }

        .kp-mobile-services-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b6560;
          background: none;
          border: none;
          border-left: 2px solid transparent;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .kp-mobile-services-btn:hover,
        .kp-mobile-services-btn.open {
          color: #f5f0eb;
          border-left-color: #f97316;
          background: #111;
        }

        .kp-mobile-sub {
          padding: 4px 0 8px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 2px solid #1e1e1e;
          margin-left: 16px;
        }

        .kp-mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3a3530;
          text-decoration: none;
          transition: color 0.2s;
        }
        .kp-mobile-sub-link:hover { color: #f97316; }

        .kp-mobile-sub-dash {
          width: 12px; height: 1px;
          background: #3a3530;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .kp-mobile-sub-link:hover .kp-mobile-sub-dash { background: #f97316; }

        .kp-mobile-divider {
          height: 1px;
          background: #1a1a1a;
          margin: 8px 0;
        }

        .kp-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          padding: 14px;
          background: transparent;
          border: 1px solid #f97316;
          color: #f97316;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
        }
        .kp-mobile-cta:hover { background: #f97316; color: #0a0a0a; }
      `}</style>

      <div className="kp-nav-root">
        {/* ── TOP BAR ── */}
        <div className="kp-topbar">
          <a href="tel:9167636653">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.99 2.18 2 2 0 013 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 91676 36653
          </a>
          <div className="kp-topbar-dot" />
          <a href="mailto:info@kitchenpulse.in">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            info@kitchenpulse.in
          </a>
        </div>

        {/* ── MAIN NAV ── */}
        <nav
          className={`kp-nav ${isScrolled ? "scrolled" : ""}`}
          aria-label="Main navigation"
        >
          <div className="kp-nav-inner">

            {/* Logo */}
            <Link href="/" className="kp-logo">
              <span className="kp-logo-word">Kitchen</span>
              <div className="kp-logo-diamond" />
              <span className="kp-logo-accent">Pulse</span>
            </Link>

            {/* Desktop links */}
            <div className="kp-links">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <Link key={link.href} href={link.href} className="kp-link">
                  {link.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                className="kp-services-wrap"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
                <button
                  type="button"
                  className={`kp-services-btn ${servicesHover ? "open" : ""}`}
                  aria-haspopup="true"
                  aria-expanded={servicesHover}
                >
                  Services
                  <ChevronDown size={13} className="kp-chevron" aria-hidden="true" />
                </button>

                <div className={`kp-dropdown ${servicesHover ? "open" : ""}`}>
                  {SERVICE_LINKS.map((service) => (
                    <Link key={service.href} href={service.href} className="kp-dropdown-item">
                      {service.label}
                      <span className="kp-dropdown-arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {NAV_LINKS.slice(2).map((link) => (
                <Link key={link.href} href={link.href} className="kp-link">
                  {link.label}
                </Link>
              ))}

              <Link href="/contact" className="kp-cta">
                <span className="kp-cta-dot" />
                <span>Schedule a Call</span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="kp-mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="kp-mobile-menu">
              <div className="kp-mobile-inner">
                <Link href="/" className="kp-mobile-link" onClick={closeMobileMenu}>Home</Link>
                <Link href="/about" className="kp-mobile-link" onClick={closeMobileMenu}>About</Link>

                {/* Services accordion */}
                <div>
                  <button
                    type="button"
                    className={`kp-mobile-services-btn ${isServicesOpen ? "open" : ""}`}
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                  >
                    Services
                    <ChevronDown
                      size={13}
                      style={{
                        transition: "transform 0.25s",
                        transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                      }}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="kp-mobile-sub">
                      {SERVICE_LINKS.map((s) => (
                        <Link key={s.href} href={s.href} className="kp-mobile-sub-link" onClick={closeMobileMenu}>
                          <span className="kp-mobile-sub-dash" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/process" className="kp-mobile-link" onClick={closeMobileMenu}>Process</Link>
                <Link href="/contact" className="kp-mobile-link" onClick={closeMobileMenu}>Contact</Link>

                <div className="kp-mobile-divider" />

                <Link href="/contact" className="kp-mobile-cta" onClick={closeMobileMenu}>
                  <span style={{ width: 4, height: 4, background: "currentColor", transform: "rotate(45deg)", flexShrink: 0 }} />
                  Book a Consultation
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "919167636653";
const WHATSAPP_MESSAGE = "Hi! I'd like to schedule a call with Kitchen Pulse.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/MainSection#infrastructure", label: "Infrastructure & Setup" },
  { href: "/MainSection#culinary", label: "Culinary & Operations" },
  { href: "/MainSection#talent", label: "Talent & Training" },
  { href: "/MainSection#digital", label: "Digital & Growth" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;

        if (currentY < 60 || currentY < lastScrollY.current) {
          // Scrolling up or near top — show navbar
          setNavVisible(true);
        } else if (currentY > lastScrollY.current && currentY > 60) {
          // Scrolling down past 60px — hide navbar & close mobile menu
          setNavVisible(false);
          setIsOpen(false);
        }

        setIsScrolled(currentY > 10);
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Slide in/out ── */
        .kp-nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transform: translateY(0);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s,
                      box-shadow 0.3s;
        }
        .kp-nav-root.nav-hidden {
          transform: translateY(-100%);
        }

        /* ── Link hover underline ── */
        .kp-link-underline { position: relative; }
        .kp-link-underline::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 12px;
          width: 0; height: 1px;
          background: #f97316;
          transition: width 0.25s ease;
        }
        .kp-link-underline:hover::after { width: calc(100% - 24px); }

        /* ── Services dropdown ── */
        .kp-dropdown {
          position: absolute;
          top: calc(100% + 12px); left: 0;
          min-width: 220px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.09);
          border-top: 2px solid #f97316;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          opacity: 0; visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          z-index: 100;
        }
        .kp-dropdown.open {
          opacity: 1; visibility: visible;
          transform: translateY(0);
        }
        .kp-dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 18px;
          font-size: 12px; font-weight: 400;
          letter-spacing: 0.04em;
          color: #6b6560;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }
        .kp-dropdown-item:last-child { border-bottom: none; }
        .kp-dropdown-item:hover {
          color: #f97316; background: #fff8f5; padding-left: 22px;
        }

        /* ── Orange CTA (fill-slide on hover) ── */
        .kp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          background: transparent;
          border: 1px solid #f97316;
          color: #f97316;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.25s;
        }
        .kp-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: #f97316;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
          z-index: 0;
        }
        .kp-cta-btn:hover::before { transform: translateX(0); }
        .kp-cta-btn:hover { color: #fff; }
        .kp-cta-btn > * { position: relative; z-index: 1; }

        /* ── Mobile links ── */
        .kp-mobile-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          font-size: 13px; font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b6560;
          text-decoration: none;
          border-left: 2px solid transparent;
          border-radius: 0 4px 4px 0;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .kp-mobile-link:hover {
          color: #1a1714;
          border-left-color: #f97316;
          background: #fff8f5;
        }

        /* ── Mobile CTA ── */
        .kp-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 4px;
          padding: 13px;
          background: transparent;
          border: 1px solid #f97316;
          color: #f97316;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
        }
        .kp-mobile-cta:hover { background: #f97316; color: #fff; }
      `}</style>

      {/* Fixed navbar that slides up/down */}
      <nav
        className={`kp-nav-root bg-white ${navVisible ? "" : "nav-hidden"} ${
          isScrolled
            ? "border-b border-orange-500/40 shadow-[0_2px_20px_rgba(249,115,22,0.07)]"
            : "border-b border-black/[0.07]"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-5 sm:px-12 lg:px-20 h-16">

          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-0.5 no-underline flex-shrink-0"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[21px] font-bold text-[#1a1714] tracking-[-0.01em] leading-none">
              Kitchen
            </span>
            <span className="w-[5px] h-[5px] bg-orange-500 rotate-45 mx-[3px] flex-shrink-0 opacity-80" />
            <span className="text-[21px] font-bold italic text-orange-500 tracking-[-0.01em] leading-none">
              Pulse
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="kp-link-underline relative px-3 py-2 text-[11px] font-medium tracking-[0.12em] uppercase text-[#6b6560] no-underline hover:text-[#1a1714] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  servicesHover ? "text-[#1a1714]" : "text-[#6b6560]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                aria-haspopup="true"
                aria-expanded={servicesHover}
              >
                Services
                <ChevronDown
                  size={13}
                  className="opacity-60 transition-transform duration-200"
                  style={{ transform: servicesHover ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                />
              </button>

              <div className={`kp-dropdown ${servicesHover ? "open" : ""}`}>
                {SERVICE_LINKS.map((service) => (
                  <Link key={service.href} href={service.href} className="kp-dropdown-item">
                    {service.label}
                    <span className="text-orange-400 text-[10px]">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="kp-link-underline relative px-3 py-2 text-[11px] font-medium tracking-[0.12em] uppercase text-[#6b6560] no-underline hover:text-[#1a1714] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Orange CTA → WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kp-cta-btn ml-3"
            >
              <span className="w-[4px] h-[4px] bg-current rotate-45 flex-shrink-0" />
              <span>Schedule a Call</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 border border-black/10 bg-[#faf9f7] text-[#6b6560] hover:border-orange-500/40 hover:text-orange-500 transition-all duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-black/[0.07] bg-white">
            <div className="flex flex-col gap-1 px-4 py-5">
              <Link href="/" className="kp-mobile-link" onClick={closeMobileMenu}>Home</Link>
              <Link href="/about" className="kp-mobile-link" onClick={closeMobileMenu}>About</Link>

              {/* Services accordion */}
              <div>
                <button
                  type="button"
                  className={`w-full flex items-center justify-between px-3.5 py-3 text-[13px] font-light tracking-[0.08em] uppercase transition-colors duration-200 bg-transparent border-none border-l-2 cursor-pointer ${
                    isServicesOpen
                      ? "text-[#1a1714] border-orange-500 bg-orange-50"
                      : "text-[#6b6560] border-transparent"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                >
                  Services
                  <ChevronDown
                    size={13}
                    className="opacity-60 transition-transform duration-200"
                    style={{ transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 pl-4 border-l border-black/[0.08] flex flex-col py-1">
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2 py-2.5 px-2 text-[11px] font-light tracking-[0.08em] uppercase text-[#9a948e] no-underline hover:text-orange-500 transition-colors duration-200"
                        onClick={closeMobileMenu}
                      >
                        <span className="w-3 h-px bg-current opacity-50 flex-shrink-0" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/testimonials" className="kp-mobile-link" onClick={closeMobileMenu}>Testimonials</Link>
              <Link href="/contact" className="kp-mobile-link" onClick={closeMobileMenu}>Contact</Link>

              <div className="h-px bg-black/[0.07] my-2" />

              {/* Mobile CTA → WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kp-mobile-cta"
                onClick={closeMobileMenu}
              >
                <span className="w-[4px] h-[4px] bg-current rotate-45 flex-shrink-0" />
                Schedule a Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer — prevents content from sitting under the fixed nav */}
      <div className="h-16" />
    </div>
  );
}
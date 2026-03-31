"use client";
import React, { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About Us", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.05 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay = "") =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-input {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.12);
          color: #1a1714;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          padding: 10px 14px;
          outline: none;
          flex: 1;
          min-width: 0;
          border-radius: 0;
          appearance: none;
          transition: border-color 0.3s;
        }
        .footer-input::placeholder { color: #b0aaa4; }
        .footer-input:focus { border-color: rgba(249,115,22,0.5); }

        .footer-nav-link {
          font-size: 13px;
          font-weight: 300;
          color: #6b6560;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-nav-link:hover { color: #f97316; }

        .footer-social {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.1);
          color: #8a8480;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .footer-social:hover {
          border-color: rgba(249,115,22,0.4);
          color: #f97316;
          background: #fff8f5;
        }
      `}</style>

      <footer
        ref={footerRef}
        className="relative bg-[#faf9f7] text-[#1a1714] border-t border-black/[0.07]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >

        {/* ── MAIN ROW ── */}
        <div className={`flex flex-col md:flex-row md:items-start justify-between gap-10 px-5 sm:px-12 lg:px-20 py-12 ${fade()}`}>

          {/* Brand + description */}
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block flex-shrink-0" />
              <span
                className="text-[18px] font-bold text-[#1a1714] tracking-[0.04em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kitchen Pulse
              </span>
            </div>
            <p className="text-[13px] font-light leading-[1.85] text-[#6b6560] mb-5">
              End-to-end solutions for F&B brands — from kitchen design and talent to digital growth and D2C strategy.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="footer-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className={`flex flex-col gap-2.5 ${fade("delay-100")}`}>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="footer-nav-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className={`flex flex-col gap-1.5 ${fade("delay-150")}`}>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#b0aaa4] mb-2">Contact</p>
            <a href="mailto:hello@kitchenpulse.in" className="footer-nav-link">
              hello@kitchenpulse.in
            </a>
            <a href="tel:+919876543210" className="footer-nav-link">
              +91 98765 43210
            </a>
            <p className="text-[13px] font-light text-[#9a948e] leading-[1.7] mt-1">
              Andheri East,<br />Mumbai – 400072
            </p>
          </div>

          {/* Newsletter */}
          <div className={`${fade("delay-200")}`}>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#b0aaa4] mb-4">Stay in the loop</p>
            {subscribed ? (
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-3">
                <div className="w-5 h-5 flex items-center justify-center bg-orange-500 flex-shrink-0">
                  <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                    <path d="M1.5 5l2.5 2.5L8.5 2.5" />
                  </svg>
                </div>
                <p className="text-[12px] font-light text-orange-600">You're subscribed. Thanks!</p>
              </div>
            ) : (
              <div className="flex gap-0 w-full max-w-[280px]">
                <input
                  type="email"
                  className="footer-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && email) setSubscribed(true); }}
                />
                <button
                  type="button"
                  onClick={() => { if (email) setSubscribed(true); }}
                  className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-medium tracking-[0.15em] uppercase px-4 py-2.5 cursor-pointer transition-colors duration-200"
                  style={{ border: "none" }}
                >
                  Join
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-12 lg:px-20 py-4 border-t border-black/[0.07]">
          <span className="text-[11px] font-light tracking-[0.04em] text-[#b0aaa4]">
            © {new Date().getFullYear()} Kitchen Pulse Hospitality Pvt. Ltd. All rights reserved.
          </span>
          <span className="text-[11px] font-light tracking-[0.1em] text-[#c8c2bc] uppercase">
            19.0760° N, 72.8777° E · Mumbai, India
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
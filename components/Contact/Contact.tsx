"use client";

import React, { useEffect, useRef, useState } from "react";

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

const socialLinks = [
  {
    label: "Instagram",
    handle: "@kitchenpulse.in",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Kitchen Pulse",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "+91 98765 43210",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
];

const formFields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your name", span: 1 },
  { id: "brand", label: "Brand / Company", type: "text", placeholder: "Your brand name", span: 1 },
  { id: "email", label: "Email Address", type: "email", placeholder: "hello@yourbrand.com", span: 1 },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 00000 00000", span: 1 },
  { id: "message", label: "Tell us about your goals", type: "textarea", placeholder: "Describe your F&B or D2C brand and what you're looking to achieve...", span: 2 },
];

const interests = [
  "Real Estate", "Infrastructure", "Culinary R&D",
  "Digital Growth", "Staffing", "Operations",
];

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const toggleInterest = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-section {
          font-family: 'DM Sans', sans-serif;
          background: #0a0a0a;
          color: #f5f0eb;
          overflow: hidden;
          position: relative;
        }
        .ct-section * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Grain overlay — mirrors WhoWeAre */
        .ct-section::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.025;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Ambient glows — bottom-left primary, top-right secondary */
        .ct-glow {
          position: absolute;
          bottom: -60px; left: -100px;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 68%);
          pointer-events: none;
          z-index: 1;
        }
        .ct-glow2 {
          position: absolute;
          top: 40px; right: -80px;
          width: 380px; height: 380px;
          background: radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* ── HEADER ── */
        .ct-header {
          position: relative;
          z-index: 2;
          padding: 100px 80px 72px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: end;
          border-bottom: 1px solid #1a1a1a;
        }
        @media (max-width: 1100px) { .ct-header { padding: 80px 50px 60px; gap: 40px; } }
        @media (max-width: 800px)  { .ct-header { grid-template-columns: 1fr; padding: 60px 28px 48px; gap: 28px; } }
        @media (max-width: 480px)  { .ct-header { padding: 48px 20px 40px; } }

        .ct-eyebrow {
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
        .ct-eyebrow-line { width: 32px; height: 1px; background: #f97316; }

        .ct-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f5f0eb;
        }
        .ct-headline em { font-style: italic; color: #f97316; }

        .ct-header-body {
          font-size: clamp(14px, 1.4vw, 16px);
          font-weight: 300;
          line-height: 1.8;
          color: #9e9690;
          max-width: 400px;
          margin-bottom: 36px;
        }
        .ct-header-body strong { color: #f97316; font-weight: 500; }

        /* Header stats */
        .ct-header-stats {
          display: flex;
          gap: 0;
          border-top: 1px solid #1e1e1e;
          padding-top: 28px;
        }
        .ct-hstat { flex: 1; padding-right: 20px; }
        .ct-hstat + .ct-hstat { padding-left: 20px; border-left: 1px solid #1e1e1e; }
        .ct-hstat-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          color: #f97316;
          line-height: 1;
          margin-bottom: 5px;
        }
        .ct-hstat-lbl {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5a5550;
        }

        /* ── SECTION DIVIDER LABEL ── */
        .ct-divider-label {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 36px 80px 24px;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1100px) { .ct-divider-label { padding: 36px 50px 24px; } }
        @media (max-width: 600px)  { .ct-divider-label { padding: 36px 20px 24px; } }

        .ct-divider-line { flex: 1; height: 1px; background: #1a1a1a; }
        .ct-divider-text {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #3a3530;
          white-space: nowrap;
        }

        /* ── BODY GRID ── */
        .ct-body {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.55fr;
          gap: 2px;
          background: #111;
          padding: 0 80px;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
        }
        @media (max-width: 1100px) { .ct-body { padding: 0 50px; } }
        @media (max-width: 860px)  { .ct-body { grid-template-columns: 1fr; padding: 0 28px; } }
        @media (max-width: 480px)  { .ct-body { padding: 0 20px; } }

        /* ── LEFT PANEL ── */
        .ct-left {
          background: #0a0a0a;
          padding: 52px 48px 52px 0;
          border-right: 1px solid #1a1a1a;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        @media (max-width: 860px) {
          .ct-left {
            border-right: none;
            border-bottom: 1px solid #1a1a1a;
            padding: 40px 0;
          }
        }

        /* Contact info cards */
        .ct-info-stack { display: flex; flex-direction: column; gap: 2px; }

        .ct-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 20px;
          border: 1px solid #1a1a1a;
          background: #111;
          transition: background 0.3s, border-color 0.3s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .ct-info-item::after {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #f97316, #ea580c);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.35s ease;
        }
        .ct-info-item:hover::after { transform: scaleY(1); }
        .ct-info-item:hover { background: #161616; border-color: rgba(249,115,22,0.2); }

        .ct-info-icon {
          width: 38px; height: 38px;
          border: 1px solid #252525;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #6b6560;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .ct-info-item:hover .ct-info-icon {
          border-color: rgba(249,115,22,0.35);
          color: #f97316;
          background: #1e1107;
        }

        .ct-info-sub {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a3530;
          margin-bottom: 6px;
          transition: color 0.3s;
        }
        .ct-info-item:hover .ct-info-sub { color: #f97316; }

        .ct-info-val {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: #6b6560;
          white-space: pre-line;
          transition: color 0.3s;
        }
        .ct-info-item:hover .ct-info-val { color: #9e9690; }

        /* Social links */
        .ct-social-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 16px;
        }
        .ct-social-dot {
          width: 6px; height: 6px;
          background: #f97316;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .ct-social-stack { display: flex; flex-direction: column; gap: 2px; }

        .ct-social-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border: 1px solid #1a1a1a;
          background: #111;
          text-decoration: none;
          transition: background 0.3s, border-color 0.3s;
          group: true;
        }
        .ct-social-item:hover { background: #161616; border-color: rgba(249,115,22,0.2); }

        .ct-social-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ct-social-icon-wrap {
          width: 32px; height: 32px;
          border: 1px solid #252525;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b6560;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .ct-social-item:hover .ct-social-icon-wrap {
          border-color: rgba(249,115,22,0.35);
          color: #f97316;
          background: #1e1107;
        }

        .ct-social-name {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #3a3530;
          transition: color 0.3s;
        }
        .ct-social-item:hover .ct-social-name { color: #f97316; }

        .ct-social-handle {
          font-size: 12px;
          font-weight: 300;
          color: #4a4540;
          transition: color 0.3s;
        }
        .ct-social-item:hover .ct-social-handle { color: #9e9690; }

        .ct-social-arrow {
          width: 20px; height: 20px;
          border: 1px solid #252525;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s, background 0.3s;
        }
        .ct-social-item:hover .ct-social-arrow {
          border-color: #f97316;
          background: #2a1a0a;
        }
        .ct-social-arrow svg {
          width: 10px; height: 10px;
          stroke: #3a3530;
          transition: stroke 0.3s;
        }
        .ct-social-item:hover .ct-social-arrow svg { stroke: #f97316; }

        /* ── RIGHT PANEL: FORM ── */
        .ct-right {
          background: #0a0a0a;
          padding: 52px 0 52px 48px;
        }
        @media (max-width: 860px) {
          .ct-right { padding: 40px 0; }
        }

        .ct-form-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1.2;
          margin-bottom: 8px;
        }
        .ct-form-heading em { font-style: italic; color: #f97316; }

        .ct-form-sub {
          font-size: 13px;
          font-weight: 300;
          color: #5a5550;
          margin-bottom: 36px;
          line-height: 1.7;
        }

        /* 2-col grid form */
        .ct-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        @media (max-width: 600px) { .ct-form-grid { grid-template-columns: 1fr; } }

        .ct-form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ct-form-field.span2 {
          grid-column: span 2;
        }
        @media (max-width: 600px) { .ct-form-field.span2 { grid-column: span 1; } }

        .ct-form-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a3530;
          transition: color 0.3s;
        }
        .ct-form-field:focus-within .ct-form-label { color: #f97316; }

        .ct-form-input,
        .ct-form-textarea {
          background: #111;
          border: 1px solid #1e1e1e;
          color: #f5f0eb;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          padding: 14px 16px;
          outline: none;
          width: 100%;
          transition: border-color 0.3s, background 0.3s;
          resize: none;
          appearance: none;
          -webkit-appearance: none;
        }
        .ct-form-input::placeholder,
        .ct-form-textarea::placeholder { color: #3a3530; }
        .ct-form-input:focus,
        .ct-form-textarea:focus {
          border-color: rgba(249,115,22,0.45);
          background: #0e0e0e;
        }
        .ct-form-textarea { min-height: 108px; padding-top: 14px; }

        /* Interests pills */
        .ct-interests-wrap {
          margin-top: 2px;
          grid-column: span 2;
        }
        @media (max-width: 600px) { .ct-interests-wrap { grid-column: span 1; } }

        .ct-interests-label {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a3530;
          margin-bottom: 10px;
        }

        .ct-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ct-pill {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 7px 14px;
          border: 1px solid #1e1e1e;
          background: #111;
          color: #4a4540;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          user-select: none;
        }
        .ct-pill:hover { border-color: rgba(249,115,22,0.3); color: #9e9690; background: #161616; }
        .ct-pill.active {
          background: #1e1107;
          border-color: #f97316;
          color: #f97316;
        }

        /* Submit */
        .ct-form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2px;
          grid-column: span 2;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 600px) { .ct-form-footer { grid-column: span 1; } }

        .ct-form-note {
          font-size: 11px;
          font-weight: 300;
          color: #3a3530;
          max-width: 220px;
          line-height: 1.6;
        }

        .ct-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #f97316;
          color: #0a0a0a;
          border: none;
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s, gap 0.3s;
          position: relative;
          overflow: hidden;
        }
        .ct-submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ea580c;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .ct-submit-btn:hover::before { transform: translateX(0); }
        .ct-submit-btn:hover { gap: 18px; }
        .ct-submit-btn span,
        .ct-submit-btn svg { position: relative; z-index: 1; }

        .ct-submit-btn svg {
          width: 14px; height: 14px;
          stroke: #0a0a0a;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* Success state */
        .ct-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 72px 32px;
          text-align: center;
          min-height: 320px;
        }
        .ct-success-icon {
          width: 56px; height: 56px;
          border: 1px solid rgba(249,115,22,0.3);
          background: #1e1107;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ct-success-icon svg {
          width: 24px; height: 24px;
          stroke: #f97316;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .ct-success-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #f5f0eb;
        }
        .ct-success-title em { font-style: italic; color: #f97316; }
        .ct-success-sub {
          font-size: 13px;
          font-weight: 300;
          color: #5a5550;
          max-width: 280px;
          line-height: 1.8;
        }

        /* ── FOOTER STRIP ── */
        .ct-footer-strip {
          position: relative;
          z-index: 2;
          padding: 28px 80px;
          border-top: 1px solid #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 1100px) { .ct-footer-strip { padding: 28px 50px; } }
        @media (max-width: 600px)  { .ct-footer-strip { padding: 28px 20px; flex-direction: column; align-items: flex-start; gap: 12px; } }

        .ct-footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ct-footer-diamond {
          width: 8px; height: 8px;
          background: #f97316;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .ct-footer-name {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 700;
          color: #f5f0eb;
          letter-spacing: 0.04em;
        }
        .ct-footer-tagline {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #3a3530;
        }
        .ct-footer-copy {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #2a2520;
        }

        /* Fade utilities */
        .ct-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ct-fade.visible { opacity: 1; transform: translateY(0); }
        .ct-d1 { transition-delay: 0.1s; }
        .ct-d2 { transition-delay: 0.2s; }
        .ct-d3 { transition-delay: 0.3s; }
        .ct-d4 { transition-delay: 0.45s; }
        .ct-d5 { transition-delay: 0.55s; }
      `}</style>

      <section id="contact" className="ct-section" ref={sectionRef}>
        <div className="ct-glow" />
        <div className="ct-glow2" />

        {/* ── HEADER ── */}
        <div className="ct-header">
          <div>
            <div className={`ct-fade ${visible ? "visible" : ""}`}>
              <span className="ct-eyebrow">
                <span className="ct-eyebrow-line" />
                Contact Us
              </span>
            </div>
            <h2 className={`ct-headline ct-fade ct-d1 ${visible ? "visible" : ""}`}>
              Let's Build<br /><em>Something</em><br />Together.
            </h2>
          </div>

          <div>
            <p className={`ct-header-body ct-fade ct-d2 ${visible ? "visible" : ""}`}>
              Whether you're launching a new F&amp;B concept, scaling an existing brand, or exploring <strong>D2C growth</strong> — we're ready to partner with you across every stage of the journey.
            </p>
            <div className={`ct-header-stats ct-fade ct-d3 ${visible ? "visible" : ""}`}>
              {[
                { v: "24h", l: "Response Time" },
                { v: "Pan-India", l: "Coverage" },
                { v: "Free", l: "First Consult" },
              ].map((s, i) => (
                <div className="ct-hstat" key={i}>
                  <div className="ct-hstat-val">{s.v}</div>
                  <div className="ct-hstat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className={`ct-divider-label ct-fade ct-d4 ${visible ? "visible" : ""}`}>
          <div className="ct-divider-line" />
          <span className="ct-divider-text">Reach Out</span>
          <div className="ct-divider-line" />
        </div>

        {/* ── BODY ── */}
        <div className={`ct-body ct-fade ct-d5 ${visible ? "visible" : ""}`}>

          {/* LEFT — contact info + socials */}
          <div className="ct-left">
            <div>
              <div className="ct-social-label">
                <span className="ct-social-dot" />
                Direct Contact
              </div>
              <div className="ct-info-stack">
                {contactDetails.map((item) => (
                  <div className="ct-info-item" key={item.label}>
                    <div className="ct-info-icon">{item.icon}</div>
                    <div>
                      <p className="ct-info-sub">{item.label}</p>
                      <p className="ct-info-val">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="ct-social-label">
                <span className="ct-social-dot" />
                Follow Us
              </div>
              <div className="ct-social-stack">
                {socialLinks.map((s) => (
                  <a href={s.href} className="ct-social-item" key={s.label}>
                    <div className="ct-social-left">
                      <div className="ct-social-icon-wrap">{s.icon}</div>
                      <div>
                        <p className="ct-social-name">{s.label}</p>
                        <p className="ct-social-handle">{s.handle}</p>
                      </div>
                    </div>
                    <div className="ct-social-arrow">
                      <svg viewBox="0 0 10 10" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="ct-right">
            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="ct-success-title">Message <em>Received.</em></p>
                </div>
                <p className="ct-success-sub">
                  Our team will reach out within 24 hours. We look forward to building with you.
                </p>
              </div>
            ) : (
              <>
                <h3 className="ct-form-heading">Start the <em>Conversation</em></h3>
                <p className="ct-form-sub">Fill in your details and we'll get back to you within 24 hours.</p>

                <div className="ct-form-grid">
                  {formFields.map((field) => (
                    <div
                      className={`ct-form-field${field.span === 2 ? " span2" : ""}`}
                      key={field.id}
                    >
                      <label className="ct-form-label" htmlFor={field.id}>{field.label}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          className="ct-form-textarea"
                          placeholder={field.placeholder}
                          value={formData[field.id] || ""}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          onFocus={() => setFocused(field.id)}
                          onBlur={() => setFocused(null)}
                        />
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          className="ct-form-input"
                          placeholder={field.placeholder}
                          value={formData[field.id] || ""}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          onFocus={() => setFocused(field.id)}
                          onBlur={() => setFocused(null)}
                        />
                      )}
                    </div>
                  ))}

                  {/* Interest pills */}
                  <div className="ct-interests-wrap">
                    <p className="ct-interests-label">Areas of Interest</p>
                    <div className="ct-pills">
                      {interests.map((item) => (
                        <button
                          key={item}
                          className={`ct-pill${selected.includes(item) ? " active" : ""}`}
                          onClick={() => toggleInterest(item)}
                          type="button"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="ct-form-footer">
                    <p className="ct-form-note">
                      We respect your privacy. No spam, ever.
                    </p>
                    <button className="ct-submit-btn" onClick={handleSubmit} type="button">
                      <span>Send Message</span>
                      <svg viewBox="0 0 14 14" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 7h10M7 2l5 5-5 5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── FOOTER STRIP ── */}
        <div className="ct-footer-strip">
          <div className="ct-footer-brand">
            <div className="ct-footer-diamond" />
            <span className="ct-footer-name">Kitchen Pulse</span>
            <span className="ct-footer-tagline">— India's F&amp;B Growth Partner</span>
          </div>
          <span className="ct-footer-copy">© {new Date().getFullYear()} Kitchen Pulse. All rights reserved.</span>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
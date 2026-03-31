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
  { id: "name",    label: "Full Name",              type: "text",     placeholder: "Your name",                span: 1 },
  { id: "brand",   label: "Brand / Company",        type: "text",     placeholder: "Your brand name",          span: 1 },
  { id: "email",   label: "Email Address",          type: "email",    placeholder: "hello@yourbrand.com",      span: 1 },
  { id: "phone",   label: "Phone Number",           type: "tel",      placeholder: "+91 00000 00000",          span: 1 },
  { id: "message", label: "Tell us about your goals", type: "textarea", placeholder: "Describe your F&B or D2C brand and what you're looking to achieve...", span: 2 },
];

const interests = [
  "Real Estate", "Infrastructure", "Culinary R&D",
  "Digital Growth", "Staffing", "Operations",
];

const ContactSection = () => {
  const [visible, setVisible]     = useState(false);
  const [formData, setFormData]   = useState<Record<string, string>>({});
  const [selected, setSelected]   = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused]     = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setVisible(true); }); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange  = (id: string, value: string) => setFormData((p) => ({ ...p, [id]: value }));
  const toggleInterest = (item: string) =>
    setSelected((p) => (p.includes(item) ? p.filter((i) => i !== item) : [...p, item]));
  const handleSubmit  = (e: React.MouseEvent) => { e.preventDefault(); setSubmitted(true); };

  const fade = (delay = "") =>
    `transition-all duration-700 ease-out ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-input {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.09);
          color: #1a1714;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          padding: 13px 15px;
          outline: none;
          width: 100%;
          transition: border-color 0.3s, background 0.3s;
          resize: none;
          appearance: none;
          -webkit-appearance: none;
          border-radius: 0;
        }
        .ct-input::placeholder { color: #c0bab4; }
        .ct-input:focus { border-color: rgba(249,115,22,0.5); background: #fffcfa; }

        .ct-info-bar {
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #f97316, #ea580c);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.35s ease;
        }
        .ct-info-item-w:hover .ct-info-bar { transform: scaleY(1); }

        .ct-submit-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ea580c;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .ct-submit-inner:hover::before { transform: translateX(0); }
        .ct-submit-inner:hover { gap: 18px; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="relative bg-[#faf9f7] text-[#1a1714] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Grain overlay */}
        <div
          className="fixed inset-0 opacity-[0.025] pointer-events-none z-[1]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        {/* Ambient glow — very subtle on light bg */}
        <div className="absolute bottom-[-60px] left-[-100px] w-[600px] h-[500px] pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 68%)" }} />
        <div className="absolute top-10 right-[-80px] w-[380px] h-[380px] pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.03) 0%, transparent 70%)" }} />

        {/* ── HEADER ── */}
        <div className={`relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-end px-5 sm:px-[50px] lg:px-20 pt-[100px] pb-16 lg:pb-[72px] border-b border-black/[0.07]`}>
          <div>
            <div className={fade()}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Contact Us
              </span>
            </div>
            <h2
              className={`text-[clamp(38px,5vw,66px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] ${fade("delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let's Build<br />
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Something</em><br />
              Together.
            </h2>
          </div>

          <div>
            <p className={`text-[clamp(14px,1.4vw,16px)] font-light leading-[1.8] text-[#6b6560] max-w-[400px] mb-9 ${fade("delay-200")}`}>
              Whether you're launching a new F&amp;B concept, scaling an existing brand, or exploring{" "}
              <strong className="text-orange-500 font-medium">D2C growth</strong>{" "}
              — we're ready to partner with you across every stage of the journey.
            </p>
            <div className={`flex border-t border-black/[0.07] pt-7 ${fade("delay-300")}`}>
              {[
                { v: "24h",      l: "Response Time" },
                { v: "Pan-India", l: "Coverage" },
                { v: "Free",     l: "First Consult" },
              ].map((s, i) => (
                <div key={i} className={`flex-1 pr-5 ${i > 0 ? "pl-5 border-l border-black/[0.07]" : ""}`}>
                  <div className="text-[clamp(22px,2.5vw,32px)] font-bold leading-none text-orange-500 mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}>{s.v}</div>
                  <div className="text-[10px] font-normal tracking-[0.12em] uppercase text-[#a09890]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER LABEL ── */}
        <div className={`relative z-[2] flex items-center gap-3.5 px-5 sm:px-[50px] lg:px-20 py-9 ${fade("delay-[450ms]")}`}>
          <div className="flex-1 h-px bg-black/[0.07]" />
          <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#c0bab4] whitespace-nowrap">
            Reach Out
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        {/* ── BODY GRID ── */}
        <div className={`relative z-[2] grid grid-cols-1 md:grid-cols-[1fr_1.55fr] gap-0.5 px-5 sm:px-[50px] lg:px-20 border-t border-b border-black/[0.07] ${fade("delay-[550ms]")}`}>

          {/* LEFT — contact info + socials */}
          <div className="flex flex-col gap-12 py-12 lg:py-[52px] pr-0 md:pr-12 lg:pr-[48px] border-b md:border-b-0 md:border-r border-black/[0.07]">

            {/* Direct Contact */}
            <div>
              <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-4">
                <span className="w-[6px] h-[6px] bg-orange-500 rotate-45 inline-block flex-shrink-0" />
                Direct Contact
              </div>
              <div className="flex flex-col gap-0.5">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="ct-info-item-w group relative flex items-start gap-4 px-5 py-5 bg-white border border-black/[0.07] cursor-default transition-all duration-300 hover:border-orange-500/30 hover:bg-[#fffcfa] overflow-hidden"
                  >
                    <div className="ct-info-bar" />
                    <div className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center bg-[#f0ede8] border border-black/[0.07] text-[#8a8480] transition-all duration-300 group-hover:border-orange-500/30 group-hover:text-orange-500 group-hover:bg-orange-50">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#c0bab4] mb-1.5 transition-colors duration-300 group-hover:text-orange-500">
                        {item.label}
                      </p>
                      <p className="text-[13px] font-light leading-[1.75] text-[#8a8480] whitespace-pre-line transition-colors duration-300 group-hover:text-[#6b6560]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.22em] uppercase text-orange-500 mb-4">
                <span className="w-[6px] h-[6px] bg-orange-500 rotate-45 inline-block flex-shrink-0" />
                Follow Us
              </div>
              <div className="flex flex-col gap-0.5">
                {socialLinks.map((s) => (
                  <a
                    href={s.href}
                    key={s.label}
                    className="group flex items-center justify-between px-4 py-3.5 bg-white border border-black/[0.07] no-underline transition-all duration-300 hover:border-black/[0.14] hover:bg-[#fffcfa]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-[#f0ede8] border border-black/[0.07] text-[#8a8480] transition-all duration-300 group-hover:border-orange-500/30 group-hover:text-orange-500 group-hover:bg-orange-50">
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#a09890] transition-colors duration-300 group-hover:text-orange-500">
                          {s.label}
                        </p>
                        <p className="text-[12px] font-light text-[#c0bab4] transition-colors duration-300 group-hover:text-[#8a8480]">
                          {s.handle}
                        </p>
                      </div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center bg-[#f0ede8] border border-black/[0.07] transition-all duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-50">
                      <svg viewBox="0 0 10 10" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 stroke-[#c0bab4] transition-colors duration-300 group-hover:stroke-orange-500">
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="py-12 lg:py-[52px] pl-0 md:pl-12 lg:pl-[48px]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 py-[72px] px-8 text-center min-h-[320px]">
                <div className="w-14 h-14 flex items-center justify-center bg-orange-50 border border-orange-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-[26px] font-bold text-[#1a1714]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Message{" "}
                  <em className="text-orange-500" style={{ fontStyle: "italic" }}>Received.</em>
                </p>
                <p className="text-[13px] font-light text-[#8a8480] max-w-[280px] leading-[1.8]">
                  Our team will reach out within 24 hours. We look forward to building with you.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-[clamp(22px,2.5vw,30px)] font-bold leading-[1.2] text-[#1a1714] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Start the{" "}
                  <em className="text-orange-500" style={{ fontStyle: "italic" }}>Conversation</em>
                </h3>
                <p className="text-[13px] font-light text-[#8a8480] mb-9 leading-[1.7]">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={`flex flex-col gap-2 ${field.span === 2 ? "sm:col-span-2" : ""}`}
                    >
                      <label
                        htmlFor={field.id}
                        className={`text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                          focused === field.id ? "text-orange-500" : "text-[#c0bab4]"
                        }`}
                      >
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          className="ct-input min-h-[108px]"
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
                          className="ct-input"
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
                  <div className="sm:col-span-2 mt-0.5">
                    <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#c0bab4] mb-2.5">
                      Areas of Interest
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {interests.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`text-[10px] font-medium tracking-[0.14em] uppercase px-3.5 py-[7px] border cursor-pointer select-none transition-all duration-[250ms] ${
                            selected.includes(item)
                              ? "bg-orange-50 border-orange-400 text-orange-500"
                              : "bg-white border-black/[0.09] text-[#a09890] hover:border-orange-300/60 hover:text-[#6b6560] hover:bg-[#fffcfa]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Footer row */}
                  <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 mt-0.5">
                    <p className="text-[11px] font-light text-[#c0bab4] max-w-[220px] leading-[1.6]">
                      We respect your privacy. No spam, ever.
                    </p>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="ct-submit-inner relative inline-flex items-center gap-3 bg-orange-500 text-white text-[11px] font-medium tracking-[0.18em] uppercase px-7 py-3.5 border-none cursor-pointer overflow-hidden transition-[gap] duration-300"
                      style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                    >
                      <span className="relative z-[1]">Send Message</span>
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-[1] w-3.5 h-3.5">
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
        <div className="relative z-[2] flex items-center justify-between flex-wrap gap-4 px-5 sm:px-[50px] lg:px-20 py-7 border-t border-black/[0.07]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block flex-shrink-0" />
            <span
              className="text-[16px] font-bold text-[#1a1714] tracking-[0.04em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kitchen Pulse
            </span>
            <span className="text-[10px] font-light tracking-[0.14em] uppercase text-[#c0bab4]">
              — India's F&amp;B Growth Partner
            </span>
          </div>
          <span className="text-[10px] font-light tracking-[0.08em] text-[#c0bab4]">
            © {new Date().getFullYear()} Kitchen Pulse. All rights reserved.
          </span>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
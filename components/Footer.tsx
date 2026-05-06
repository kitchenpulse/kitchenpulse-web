"use client";
import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        .kp-footer-text {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.85;
          color: #6b6560;
        }

        .kp-footer-heading {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 14px;
        }

        .kp-footer-policy {
          font-size: 13px;
          font-weight: 400;
          color: #6b6560;
          letter-spacing: 0.03em;
        }

        .kp-footer-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.08);
          background: #fff;
          color: #f97316;
          transition: all 0.3s ease;
        }

        .kp-footer-icon:hover {
          background: #fff7f2;
          border-color: rgba(249,115,22,0.32);
          transform: translateY(-2px);
        }

        .kp-footer-divider {
          border-top: 1px solid rgba(0,0,0,0.08);
        }
      `}</style>

      <footer
        ref={footerRef}
        className="bg-[#faf9f7] text-[#1a1714] border-t border-black/[0.07]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className={`px-5 sm:px-12 lg:px-20 py-14 sm:py-16 ${fade()}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h3
                className="text-[30px] sm:text-[34px] leading-[1.2] text-[#1a1714] max-w-[260px]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                Built to help F&amp;B brands scale with clarity and confidence.
              </h3>
            </div>

            <div>
              <p className="kp-footer-heading">Contact</p>
              <p className="kp-footer-text max-w-[360px]">
                For business inquiries, partnerships, and growth conversations with Kitchen Pulse.
              </p>
              <p className="kp-footer-text mt-3 text-[#f97316] font-medium">
                info@kitchenpulse.in
              </p>
            </div>

            <div>
              <p className="kp-footer-heading">Phone</p>
              <p className="kp-footer-text max-w-[360px]">
                For business inquiries, partnerships, and growth conversations with Kitchen Pulse.
              </p>
              <p className="kp-footer-text mt-3 text-[#f97316] font-medium">
                +91 91676 36653
              </p>
            </div>
          </div>

          <div className="kp-footer-divider mt-12 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
              <span className="kp-footer-policy">Terms &amp; Conditions</span>
              <span className="text-[#c9c2bb]">•</span>
              <span className="kp-footer-policy">Privacy Policy</span>
              <span className="text-[#c9c2bb]">•</span>
              <span className="kp-footer-policy">Refund Policy</span>
            </div>

            <div className="flex items-center justify-center gap-4 mt-7">
              <div className="kp-footer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 18, height: 18 }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.2 4.3A8.5 8.5 0 1 1 12.5 3a8.38 8.38 0 0 1 4.3 1.2" />
                  <path d="M16.5 17l-2.3-.7a1 1 0 0 0-.95.2l-.5.5a6 6 0 0 1-2.8-2.8l.5-.5a1 1 0 0 0 .2-.95L10 11.5" />
                </svg>
              </div>

              <div className="kp-footer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 18, height: 18 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.79 19.79 0 0 1 .99 2.18 2 2 0 0 1 3 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div className="kp-footer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 18, height: 18 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-[11px] sm:text-[12px] font-light tracking-[0.05em] text-[#a89f97]">
                © {new Date().getFullYear()} Kitchen Pulse Hospitality Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
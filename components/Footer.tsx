"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ctaPrimaryClass, ctaSecondaryClass, whatsappUrl } from "@/components/ui/CtaButtons";

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
          color: #b0aaa2;
        }

        .kp-footer-heading {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #f97316;
          margin-bottom: 14px;
        }

        .kp-footer-divider {
          border-top: 1px solid rgba(255,255,255,0.10);
        }
      `}</style>

      <footer
        ref={footerRef}
        className="bg-[#0f0e0d] text-[#f2efe9] border-t border-white/[0.10]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className={`px-5 sm:px-12 lg:px-20 py-16 sm:py-20 ${fade()}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
            <div>
              <h3
                className="text-[28px] sm:text-[32px] leading-[1.25] text-[#f2efe9] max-w-[280px]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                Built to help F&amp;B brands scale with clarity and confidence.
              </h3>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className={ctaPrimaryClass}>
                  Book a consultation
                </Link>
                <a
                  href={whatsappUrl("Hi! I'd like to book a consultation with Kitchen Pulse.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaSecondaryClass}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <p className="kp-footer-heading">Contact</p>
              <a
                href="mailto:info@kitchenpulse.in"
                className="kp-footer-text mt-3 inline-block text-[#f97316] font-medium no-underline hover:underline min-h-[44px] leading-[44px]"
              >
                info@kitchenpulse.in
              </a>
            </div>

            <div>
              <p className="kp-footer-heading">Phone</p>
              <a
                href="tel:+919167636653"
                className="kp-footer-text mt-3 inline-block text-[#f97316] font-medium no-underline hover:underline min-h-[44px] leading-[44px]"
              >
                +91 91676 36653
              </a>
            </div>
          </div>

          <div className="kp-footer-divider mt-14 pt-8">
            <div className="text-center">
              <p className="text-[12px] font-light tracking-[0.05em] text-[#8c8680]">
                © {new Date().getFullYear()} Kitchen Pulse. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

"use client";
import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    label: "Kitchen Fit-Out",
    description:
      "End-to-end kitchen design and fit-out for dine-in, QSR, cloud kitchens, and commissary models.",
    icon: "🍳",
  },
  {
    label: "Equipment Sourcing",
    description:
      "Pre-vetted commercial equipment from 300+ trusted vendors at negotiated rates.",
    icon: "⚙️",
  },
  {
    label: "Cold Chain Setup",
    description:
      "Integrated cold storage, refrigeration, and logistics infrastructure for perishable operations.",
    icon: "❄️",
  },
  {
    label: "Compliance & Licensing",
    description:
      "FSSAI, fire NOC, local municipality approvals — handled end-to-end so you can focus on food.",
    icon: "📜",
  },
];

const setupSteps = [
  {
    number: "01",
    title: "Site Assessment",
    body: "Our team evaluates structural, electrical, plumbing, and ventilation readiness before a single rupee is spent on fit-out.",
  },
  {
    number: "02",
    title: "Design & Planning",
    body: "CAD-based kitchen layouts optimised for workflow efficiency, FSSAI compliance, and your specific cuisine requirements.",
  },
  {
    number: "03",
    title: "Build & Install",
    body: "Turnkey execution — civil work, MEP, equipment installation, and branding — delivered on schedule.",
  },
  {
    number: "04",
    title: "Handover & Training",
    body: "Live operational walkthrough, equipment SOP documentation, and a 90-day post-launch support window.",
  },
];

const checkPoints = [
  "Turnkey fit-outs delivered in as few as 21 days",
  "300+ pre-vetted equipment and material vendors",
  "In-house compliance desk for FSSAI and local approvals",
];

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80",
    alt: "Chef working in commercial kitchen",
    tag: "Commercial Kitchen",
  },
  {
    url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=80",
    alt: "Restaurant dine-in setup",
    tag: "Dine-In Setup",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    alt: "Cloud kitchen operations",
    tag: "Cloud Kitchen",
  },
];

const InfrastructureSetupSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false]);
  const [visiblePanel, setVisiblePanel] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => {
              capabilities.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 140);
              });
            }, 300);
            setTimeout(() => {
              setupSteps.forEach((_, i) => {
                setTimeout(() => {
                  setVisibleSteps((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                  });
                }, i * 130);
              });
            }, 500);
            setTimeout(() => setVisiblePanel(true), 800);
          }
        });
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fade = (visible: boolean, delay = "") =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes inf-ken-burns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        @keyframes inf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes inf-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .inf-img-active {
          opacity: 1 !important;
          animation: inf-ken-burns 8s ease forwards;
        }

        /* Step connector line */
        .inf-step-line::after {
          content: '';
          position: absolute;
          top: 20px;
          left: calc(100% + 1px);
          width: calc(100% - 2px);
          height: 1px;
          background: linear-gradient(90deg, rgba(249,115,22,0.3), transparent);
        }
        @media (max-width: 768px) { .inf-step-line::after { display: none; } }
      `}</style>

      <section
         id="infrastructure"
        ref={sectionRef}
        className="relative bg-[#faf9f7] text-[#1a1714] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >

        {/* ── HERO SPLIT ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">

          {/* Left: Text */}
          <div className="relative z-[2] flex flex-col justify-center bg-[#faf9f7] px-5 py-14 sm:px-[50px] sm:py-16 lg:px-20 lg:py-20">

            <div className={fade(heroVisible)}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Infrastructure & Setup
              </span>
            </div>

            <h2
              className={`text-[clamp(40px,5.5vw,74px)] font-black leading-none tracking-[-0.02em] text-[#1a1714] mb-7 ${fade(heroVisible, "delay-100")}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Built to{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Cook.</em>
              <br />Ready to
              <br />Scale.
            </h2>

            <p
              className={`text-[clamp(14px,1.5vw,16px)] font-light leading-[1.75] text-[#6b6560] max-w-[420px] mb-10 ${fade(heroVisible, "delay-200")}`}
            >
              From raw shell to fully operational kitchen — we design, source, build,
              and certify your F&amp;B infrastructure so your first day of service
              is seamless.
            </p>

        
          </div>

          {/* Right: crossfading image panel */}
          <div className={`relative overflow-hidden min-h-[360px] md:min-h-0 ${fade(heroVisible, "delay-200")}`}>

            {/* Diagonal cutout */}
            <div
              className="absolute top-0 left-[-1px] w-20 h-full bg-[#faf9f7] z-[2] hidden md:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />

            {heroImages.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-in-out ${i === activeImage ? "inf-img-active" : ""}`}
                style={{ filter: "brightness(0.76) saturate(0.82)" }}
              />
            ))}

            {/* Tag badge */}
            <div className="absolute top-6 left-14 z-[3] bg-white/80 border border-black/[0.09] backdrop-blur-md px-4 py-2 text-[12px] font-medium tracking-[0.08em] uppercase text-[#1a1714] flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-orange-500"
                style={{ animation: "inf-pulse 2s ease infinite" }}
              />
              {heroImages[activeImage].tag}
            </div>

            {/* Dot controls */}
            <div className="absolute bottom-8 right-8 z-[3] flex items-center gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                    i === activeImage ? "bg-orange-500 scale-[1.35]" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 left-14 z-[3] bg-white/90 border border-black/[0.08] backdrop-blur-md px-5 py-4 max-w-[220px]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-orange-500 font-medium mb-2">
                Turnkey Delivery
              </div>
              <div
                className="text-[17px] font-bold leading-[1.25] text-[#1a1714]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Shell to Operational in 21 Days
              </div>
            </div>
          </div>
        </div>

      

        {/* ── PROCESS STEPS ── */}
        <div className="relative z-[2] px-5 sm:px-[50px] lg:px-20 pb-16 sm:pb-20 lg:pb-[100px]">

          <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.2em] uppercase text-[#a09890] mb-12 after:flex-1 after:max-w-16 after:h-px after:bg-black/[0.1]">
            How It Works
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {setupSteps.map((step, i) => (
              <div
                key={i}
                className={`group relative bg-white border border-black/[0.07] px-8 pt-10 pb-9 overflow-hidden cursor-default transition-all duration-300 hover:border-orange-500 hover:bg-[#fffcfa] ${
                  visibleSteps[i]
                    ? "opacity-100 translate-y-0 transition-[opacity,transform,border-color,background] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visibleSteps[i] ? `${i * 0.12}s` : "0s" }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />

                {/* Step number */}
                <div
                  className="text-[11px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-6 flex items-center gap-3"
                >
                  <span
                    className="text-[40px] font-black leading-none text-black/[0.05] group-hover:text-orange-500/[0.12] transition-colors duration-300 select-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.number}
                  </span>
                  <span className="flex-1 h-px bg-black/[0.07] group-hover:bg-orange-500/20 transition-colors duration-300" />
                </div>

                <h3
                  className="text-[18px] font-bold leading-[1.25] text-[#1a1714] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px] font-light leading-[1.75] text-[#8a8480] group-hover:text-[#6b6560] transition-colors duration-300">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DEEP DIVE PANEL ── */}
        <div
          className={`relative z-[2] mx-5 sm:mx-[50px] lg:mx-20 mb-16 sm:mb-20 lg:mb-[100px] bg-white border border-black/[0.07] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] overflow-hidden transition-all duration-700 ease-out ${
            visiblePanel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Content side */}
          <div className="flex flex-col justify-center px-7 py-11 sm:px-14 sm:py-14">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-orange-500 mb-5">
              Why Kitchen Pulse
            </p>
            <h3
              className="text-[clamp(24px,2.5vw,34px)] font-bold leading-[1.2] text-[#1a1714] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Infrastructure That{" "}
              <em className="text-orange-500" style={{ fontStyle: "italic" }}>Performs</em>{" "}
              From Day One
            </h3>
            <p className="text-[14px] font-light leading-[1.8] text-[#6b6560] mb-9 max-w-[440px]">
              We've built hundreds of kitchens across India — from single cloud kitchen
              units to multi-city commissary networks. Every project follows our
              battle-tested build playbook, so nothing falls through the cracks.
            </p>
            <ul className="flex flex-col gap-3.5">
              {checkPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-[13px] font-normal leading-[1.6] text-[#8a8480]">
                  <span className="w-5 h-5 bg-[#f0ede8] border border-black/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 10 10" fill="none" stroke="#f97316" strokeWidth="1.5" width="10" height="10">
                      <path d="M2 5l2.5 2.5L8 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="group relative min-h-[320px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80"
              alt="Commercial kitchen build"
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-[1.05]"
              style={{ filter: "brightness(0.74) saturate(0.8)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, transparent 60%)",
              }}
            />
            {/* Floating stat */}
            <div className="absolute top-8 right-8 z-[3] bg-white/90 border border-black/[0.08] backdrop-blur-md px-5 py-4 text-center">
              <div
                className="text-[32px] font-black leading-none text-orange-500 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                21
              </div>
              <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-[#a09890]">
                Days to Handover
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default InfrastructureSetupSection;
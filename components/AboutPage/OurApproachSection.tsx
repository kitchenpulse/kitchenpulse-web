import React from "react";

const approachSteps = [
  {
    title: "Strategic Foundations",
    subtitle: "Location, infrastructure, and compliance",
    description:
      "We start by identifying the right markets, securing high-potential sites, and designing compliant, scalable infrastructure tailored to your brand.",
  },
  {
    title: "Operational Readiness",
    subtitle: "Culinary, equipment, and teams",
    description:
      "We set up efficient kitchens, deploy optimized equipment, and build skilled teams so your operations run smoothly from day one.",
  },
  {
    title: "Launch & Acceleration",
    subtitle: "Brand, delivery, and digital presence",
    description:
      "We orchestrate your launch across dine-in, delivery, and D2C channels with strong branding, aggregator management, and digital marketing.",
  },
  {
    title: "Continuous Optimization",
    subtitle: "Data, performance, and expansion",
    description:
      "We track key metrics, refine menus and operations, and support expansion into new locations and formats for sustainable growth.",
  },
];

const OurApproachSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">
            Our Approach to F&amp;B &amp; D2C Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We combine strategic location intelligence, robust infrastructure,
            culinary excellence, and digital growth frameworks to build brands
            that scale profitably across markets.
          </p>
        </div>

        {/* Timeline-style cards */}
        <div className="relative">
          {/* vertical line on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-10">
            {approachSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
                >
                  <div
                    className={`${
                      isLeft ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                  >
                    <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
                          0{index + 1}
                        </span>
                        <span className="text-[11px] uppercase tracking-wide text-slate-400">
                          Growth phase
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs uppercase tracking-wide text-orange-600 mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* timeline dot on large screens */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-orange-500 shadow-md" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;

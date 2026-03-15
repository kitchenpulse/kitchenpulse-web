import React from "react";

const steps = [
  {
    title: "Discovery & Consultation",
    description:
      "We understand your goals, audience, and current challenges to identify the right opportunities.",
  },
  {
    title: "Strategic Planning",
    description:
      "We craft a data-driven roadmap with clear milestones, timelines, and success metrics.",
  },
  {
    title: "Implementation",
    description:
      "We execute the strategy with clean development, integrations, and thorough testing.",
  },
  {
    title: "Growth & Optimization",
    description:
      "We monitor performance, iterate, and continuously improve to maximize long-term results.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Our Proven Process
        </h2>
        <p className="text-center text-white max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          A simple, transparent framework that takes you from initial discovery
          to sustainable growth.
        </p>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-sm">
                  0{index + 1}
                </div>
                <span className="text-[11px] uppercase tracking-wide text-slate-400 group-hover:text-orange-500 transition-colors">
                  Step {index + 1}
                </span>
              </div>

              <div className="px-6 pb-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="px-6 pb-4 mt-auto">
                <div className="h-px w-full bg-slate-100 mb-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

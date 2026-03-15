import React from "react";

const values = [
  {
    label: "End-to-End Partnership",
    description:
      "We act as a single, accountable partner for everything from real estate and infrastructure to culinary, staffing, and digital growth.",
  },
  {
    label: "Cost Efficiency",
    description:
      "We unlock 25–30% savings through bulk purchasing, in-house fabrication, and standardized processes without compromising on quality.",
  },
  {
    label: "Operational Excellence",
    description:
      "We focus on consistent, compliant, and scalable operations so your F&B or D2C business can grow reliably across markets.",
  },
  {
    label: "Data-Driven Growth",
    description:
      "We use insights from location intelligence, menu engineering, and digital performance to drive measurable, sustainable results.",
  },
  {
    label: "Collaboration & Transparency",
    description:
      "We maintain clear communication, shared roadmaps, and a single point of contact so you always know what’s happening and why.",
  },
  {
    label: "Innovation in Food & Tech",
    description:
      "We combine culinary innovation with modern equipment, infrastructure, and digital tools to keep your brand ahead of the market.",
  },
];

const OurValuesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className=" text-black text-3xl sm:text-4xl font-bold mb-4">
            Our Values
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            The principles that guide how we partner with F&amp;B brands,
            restaurants, and D2C companies at every stage of their journey.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group h-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
                  0{index + 1}
                </span>
                <span className="text-[11px] uppercase tracking-wide text-slate-400 group-hover:text-orange-500 transition-colors">
                  Core value
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                {value.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;

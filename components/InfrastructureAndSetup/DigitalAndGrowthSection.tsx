import React from "react";

const digitalItems = [
  {
    title: "Aggregator & Channel Management",
    description:
      "End-to-end management of Zomato, Swiggy, Blinkit and other platforms to optimize visibility, ratings, and order volumes.",
  },
  {
    title: "Performance Marketing",
    description:
      "Digital campaigns focused on ROAS and customer acquisition across search, social, and local discovery channels.",
  },
  {
    title: "Brand & Customer Experience",
    description:
      "Cohesive brand storytelling, creatives, and CRM journeys that build loyalty across dine-in, delivery, and D2C.",
  },
];

const DigitalAndGrowthSection = () => {
  return (
    <section
      id="digital"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-600 uppercase mb-2">
            Digital &amp; Growth
          </p>
          <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">
            Driving Orders, Reach &amp; Brand Visibility
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We manage your digital presence across aggregators, social, and D2C
            channels to create predictable, scalable growth for your F&amp;B
            brand.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {digitalItems.map((item, index) => (
              <div
                key={index}
                className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold mb-3">
                  0{index + 1}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Metrics card */}
          <div className="bg-slate-900 text-slate-50 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-md">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-orange-300 mb-3">
              Growth Mindset
            </h3>
            <p className="text-sm text-slate-100 mb-4 leading-relaxed">
              Every decision is tied to metrics like order volume, AOV, repeat
              rate, and store-level profitability, so you see the impact of
              each initiative.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li>• Menu and pricing optimization for online channels.</li>
              <li>• Campaigns tailored to local catchment and occasions.</li>
              <li>• Reporting that connects digital data to store P&amp;L.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalAndGrowthSection;

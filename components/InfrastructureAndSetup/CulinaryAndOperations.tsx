import React from "react";

const culinaryItems = [
  {
    title: "Recipe Development",
    description:
      "Expert chefs create standardized recipes that balance food cost control with consistent taste and quality across all outlets.",
  },
  {
    title: "Menu Engineering",
    description:
      "Data-driven menu design focused on profitability, guest preference, and operational efficiency with smart pricing strategies.",
  },
  {
    title: "Nutrition Consulting",
    description:
      "Specialized support for wellness menus, dietary programs, and health-focused product development for modern consumers.",
  },
];

const CulinaryAndOperationsSection = () => {
  return (
    <section
      id="culinary"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-600 uppercase mb-2">
            Culinary &amp; Operations
          </p>
          <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">
            Culinary Excellence &amp; Operational Performance
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We bring together chef-driven innovation and operational discipline
            to design menus, kitchens, and processes that perform in real-world
            F&amp;B and D2C environments.
          </p>
        </div>

        {/* Content layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {culinaryItems.map((item, index) => (
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

          {/* Side narrative */}
          <div className="bg-slate-900 text-slate-50 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-md">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-orange-300 mb-3">
              How We Support Your Kitchens
            </h3>
            <p className="text-sm text-slate-100 mb-4 leading-relaxed">
              From back-of-house workflows to brand-consistent recipes, we help
              you design culinary systems that are scalable, repeatable, and
              easy to train across locations.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li>• Standardized SOPs for prep, cooking, and service.</li>
              <li>• Optimized station layouts to reduce waste and delays.</li>
              <li>• Clear documentation for faster onboarding and training.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryAndOperationsSection;

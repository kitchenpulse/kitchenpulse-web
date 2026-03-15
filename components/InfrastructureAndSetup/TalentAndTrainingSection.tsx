import React from "react";

const talentItems = [
  {
    title: "Comprehensive Recruitment",
    description:
      "End-to-end hiring support for chefs, kitchen teams, managers, and specialized roles aligned with your concept and standards.",
  },
  {
    title: "Structured Training Programs",
    description:
      "Customized training modules for new hires and existing staff focused on operations, safety, and brand-consistent service.",
  },
  {
    title: "Performance & Service Standards",
    description:
      "Ongoing development to maintain high service levels, operational efficiency, and strong team culture across locations.",
  },
];

const TalentAndTrainingSection = () => {
  return (
    <section
      id="talent"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-600 uppercase mb-2">
            Talent &amp; Training
          </p>
          <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">
            Building High-Performance F&amp;B Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We source, train, and support the people who run your kitchens and
            front-of-house so your brand delivers a consistent experience
            every day.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] items-start">
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {talentItems.map((item, index) => (
              <div
                key={index}
                className="h-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
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

          {/* Side block */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-sm font-semibold tracking-wide text-slate-900 mb-3">
              Roles We Help You Build
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li>• Head chefs, sous chefs, line cooks, and prep staff.</li>
              <li>• Restaurant managers, supervisors, and shift leaders.</li>
              <li>• Admin and support personnel for back-office operations.</li>
              <li>• Specialized roles tailored to cloud kitchens and D2C.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentAndTrainingSection;

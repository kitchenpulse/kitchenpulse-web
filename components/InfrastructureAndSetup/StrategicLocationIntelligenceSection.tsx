
const highlights = [
  "Extensive dealer and property network across major and emerging Indian cities.",
  "Pre-negotiated rates from 1800+ vetted F&B-suitable properties for faster decisions.",
  "Prime locations for dine-in, cloud kitchens, and D2C fulfillment centers.",
  "Deep understanding of Tier 2 & 3 city dynamics for confident expansion.",
];

const StrategicLocationIntelligenceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start mb-10">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-600 uppercase mb-2">
              Location Strategy
            </p>
            <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">
              Strategic Location Intelligence
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We combine on-ground expertise and data-driven insights to help
              F&amp;B and D2C brands secure locations that maximize visibility,
              operational efficiency, and long-term profitability.
            </p>
          </div>

          {/* Key stats card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              At-a-glance
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                  1800+
                </p>
                <p className="mt-1">Vetted F&amp;B-ready properties</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                  Pan-India
                </p>
                <p className="mt-1">Coverage across key &amp; emerging cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bullet cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="h-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold mb-3">
                0{index + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicLocationIntelligenceSection;

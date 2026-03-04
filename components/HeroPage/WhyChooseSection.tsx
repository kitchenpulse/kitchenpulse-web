import React from "react"

const reasons = [
  {
    title: "One-Stop Solution",
    desc: "From real estate sourcing to digital growth — everything under one roof.",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Seamless Integration",
    desc: "Coordinated execution across all operational functions.",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cost-Effective Model",
    desc: "25–30% savings through bulk purchasing and operational efficiencies.",
    img: "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Single Point of Contact",
    desc: "Dedicated team ensuring accountability and clarity.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
]

const WhyChooseSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-8 relative overflow-hidden">
      {/* Connecting Lines Container (background decor) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="hidden md:block absolute top-[25%] left-[25%] w-24 h-24 border-2 border-blue-400/30 rounded-full" />
        <div className="hidden md:block absolute top-[25%] right-[25%] w-24 h-24 border-2 border-emerald-400/30 rounded-full" />
        <svg
          className="absolute top-[28%] left-1/2 transform -translate-x-1/2 w-32 h-32 opacity-50"
          fill="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M 20 50 Q 50 30 80 50 T 50 70 Q 20 50 20 50"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="absolute top-[58%] left-[25%] w-24 h-24 opacity-50"
          fill="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M 50 20 Q 80 50 50 80"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
            Why us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Why Choose KitchenPulse?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We bring structure, accountability, and measurable impact to every
            stage of your food business lifecycle.
          </p>
        </div>

       <div className="relative max-w-4xl mx-auto">
  {/* vertical line */}
  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2" />

  {reasons.map((item, index) => (
    <div
      key={item.title}
      className="relative flex flex-col md:flex-row items-center mb-10 md:mb-14"
    >
      {/* left/right alternate card */}
      <div
        className={`
          w-full md:w-5/12
          ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
        `}
      >
        <div className="group relative rounded-2xl border border-gray-200 bg-slate-950 shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
          </div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white text-xs font-bold border border-white/30">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </div>
        </div>
      </div>

      {/* center dot + arrow that points to the next card */}
      <div className="hidden md:flex flex-col items-center mx-4">
        {/* dot */}
        <div className="w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-md" />
        {/* arrow only if not last card */}
        {index < reasons.length - 1 && (
          <div className="flex-1 flex items-center justify-center">
            <svg
              className="w-6 h-16 text-red-600"
              viewBox="0 0 24 80"
              fill="none"
              stroke="currentColor"
            >
              {/* vertical line */}
              <path
                d="M12 0 L12 64"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* arrow head */}
              <path
                d="M6 58 L12 64 L18 58"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}

export default WhyChooseSection

import React from "react"

const SERVICES = [
  {
    title: "Infrastructure & Setup",
    desc: "End-to-end kitchen setup, equipment sourcing, and layout optimization for F&B and D2C brands.",
  },
  {
    title: "Culinary & Operations",
    desc: "Menu engineering, SOP design, and day-to-day ops support to keep your outlets running smoothly.",
  },
  {
    title: "Talent & Training",
    desc: "Hiring, training, and upskilling programs to build high-performing on-ground teams.",
  },
  {
    title: "Digital & Growth",
    desc: "Performance marketing, brand positioning, and tech integrations to scale your business.",
  },
]

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[0.25em] text-orange-600 mb-3">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Complete Solution Portfolio
        </h2>
        <p className="text-white max-w-2xl mx-auto text-sm md:text-base">
          A modular stack of services designed to support you from first outlet
          to multi-city scale.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="relative group h-full"
          >
            {/* glow / border accent */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none" />

            <div className="relative h-full flex flex-col p-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-black text-sm font-semibold">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg text-black md:text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-900 text-sm leading-relaxed mb-4 flex-1">
                {service.desc}
              </p>

            
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

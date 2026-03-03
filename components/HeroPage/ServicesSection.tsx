import React from 'react'

const ServicesSection = () => {
  return (
    <div>
       {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Complete Solution Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Infrastructure & Setup",
            "Culinary & Operations",
            "Talent & Training",
            "Digital & Growth",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive solutions tailored for F&B and D2C brands.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesSection

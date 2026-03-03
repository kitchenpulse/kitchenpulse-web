import React from 'react'

const ProcessSection = () => {
  return (
    <div>
      
      {/* ================= PROCESS ================= */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Proven Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Discovery & Consultation",
            "Strategic Planning",
            "Implementation",
            "Growth & Optimization",
          ].map((step, index) => (
            <div key={index}>
              <div className="text-orange-600 text-3xl font-bold mb-3">
                0{index + 1}
              </div>
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProcessSection

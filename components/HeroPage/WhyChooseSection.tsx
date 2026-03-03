import React from 'react'

const WhyChooseSection = () => {
  return (
    <div>
         {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-100 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose KitchenPulse?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                One-Stop Solution
              </h3>
              <p className="text-gray-600">
                From real estate sourcing to digital growth — everything under one roof.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Coordinated execution across all operational functions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Cost-Effective Model
              </h3>
              <p className="text-gray-600">
                25–30% savings through bulk purchasing and operational efficiencies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Single Point of Contact
              </h3>
              <p className="text-gray-600">
                Dedicated team ensuring accountability and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseSection

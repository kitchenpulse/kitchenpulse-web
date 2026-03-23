import React from 'react'
import Link from 'next/link'

const HeroSection: React.FC = () =>  {
  return (
    <div>
       {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('assets/chefing.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Powering F&B & D2C Brands
            <br /> From Setup to Scale
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            End-to-end solutions across real estate, infrastructure,
            culinary innovation, staffing, and digital growth —
            all under one roof.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 transition px-6 py-3 rounded-lg font-medium"
            >
              Schedule a Call
            </Link>

            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
            <div>
              <p className="text-2xl font-bold">1800+</p>
              <p className="text-gray-300">Pre-Negotiated Properties</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Nationwide</p>
              <p className="text-gray-300">Dealer Network</p>
            </div>
            <div>
              <p className="text-2xl font-bold">25–30%</p>
              <p className="text-gray-300">Cost Optimization</p>
            </div>
            <div>
              <p className="text-2xl font-bold">End-to-End</p>
              <p className="text-gray-300">Execution Model</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection

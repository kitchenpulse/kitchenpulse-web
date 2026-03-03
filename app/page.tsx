import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">

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
              Book a Strategy Call
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

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-20 text-center px-8">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Scale Your F&B Brand?
        </h2>
        <p className="mb-8 text-gray-300">
          Let’s build your success story with KitchenPulse.
        </p>

        <Link
          href="/contact"
          className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-medium transition"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
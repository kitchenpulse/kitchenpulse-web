import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className=" text-black text-3xl sm:text-4xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Kitchen Pulse is your complete F&amp;B and D2C success partner,
            offering end-to-end solutions for seamless launches, optimized
            operations, and sustained growth.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 mb-12">
          <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-sm font-semibold tracking-wide text-orange-600 uppercase mb-2">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Empowering F&amp;B brands, restaurants, and D2C companies with
              end-to-end solutions spanning real estate, infrastructure,
              culinary innovation, digital marketing, staffing, and
              operational excellence.
            </p>
          </div>

          <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-sm font-semibold tracking-wide text-orange-600 uppercase mb-2">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              To be India&apos;s most trusted comprehensive partner for F&amp;B
              and D2C growth, delivering measurable impact and sustainable
              success for every business we support.
            </p>
          </div>
        </div>

        {/* Why Choose & One-line Positioning */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] items-stretch">
          {/* Why Choose Us card */}
          <div className="bg-slate-900 text-slate-50 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col">
            <h3 className="text-sm font-semibold tracking-wide text-orange-300 uppercase mb-3">
              Why Choose Kitchen Pulse?
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <span className="font-semibold text-orange-300">
                  One-stop solution:
                </span>{" "}
                All services under one roof, from real estate to marketing, so
                you never juggle multiple vendors.
              </li>
              <li>
                <span className="font-semibold text-orange-300">
                  Cost-effective:
                </span>{" "}
                Integrated packages that unlock 25–30% savings through bulk
                purchasing and operational efficiencies.
              </li>
              <li>
                <span className="font-semibold text-orange-300">
                  Seamless integration:
                </span>{" "}
                End-to-end coordination across all business functions with a
                unified strategy and execution.
              </li>
              <li>
                <span className="font-semibold text-orange-300">
                  Single point of contact:
                </span>{" "}
                One dedicated team managing all your needs with clear
                communication and full accountability.
              </li>
            </ul>
          </div>

          {/* Positioning / Tagline card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-wide text-orange-600 uppercase mb-2">
              Your Complete F&amp;B &amp; D2C Partner
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We combine strategic location intelligence, infrastructure
              excellence, culinary innovation, and digital growth to build
              scalable, profitable food and D2C businesses.
            </p>
            <div className="text-xs sm:text-sm text-slate-500">
              Based in Mumbai, India — partnering with brands across tier 1,
              tier 2 and emerging markets.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

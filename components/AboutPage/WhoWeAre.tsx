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

     
      </div>
    </section>
  );
};

export default WhoWeAre;

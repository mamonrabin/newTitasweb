import { exo } from "@/src/app/font";
import React from "react";

const ServiceSteps = () => {
  return (
    <div className="mt-12">
      <h2
        className={`${exo.className} lg:text-4xl text-3xl font-bold leading-10 text-[#1D3131]`}
      >
        3 Simple Steps to Success Processs
      </h2>
      <p className="text-gray-500 mt-4">
        Assertively enable cutting-edge development through our proven
        methodology. Our systematic approach ensures project success while
        delivering revolutionary quality standards through future-proof
        technical architecture.
      </p>

      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="flex items-center flex-col border border-gray-200 rounded p-8">
          <p
            className={`${exo.className} w-14 h-14 rounded-full bg-[#2B748A] text-white text-xl font-bold flex items-center justify-center`}
          >
            01
          </p>
          <h2 className={`${exo.className} mt-4 font-bold text-[#2B748A]`}>
            STEP ONE
          </h2>
          <p className="mt-2 text-gray-500">Technical Discovery</p>
        </div>
        <div className="flex items-center flex-col border border-gray-200 rounded p-8">
          <p
            className={`${exo.className} w-14 h-14 rounded-full bg-[#2B748A] text-white text-xl font-bold flex items-center justify-center`}
          >
            02
          </p>
          <h2 className={`${exo.className} mt-4 font-bold text-[#2B748A]`}>
            STEP TWO
          </h2>
          <p className="mt-2 text-gray-500">Agile Development</p>
        </div>
        <div className="flex items-center flex-col border border-gray-200 rounded p-8">
          <p
            className={`${exo.className} w-14 h-14 rounded-full bg-[#2B748A] text-white text-xl font-bold flex items-center justify-center`}
          >
            03
          </p>
          <h2 className={`${exo.className} mt-4 font-bold text-[#2B748A]`}>
            STEP THREE
          </h2>
          <p className="mt-2 text-gray-500">Launch & Optimization</p>
        </div>
      </div>

      <p className="text-gray-500 mt-4">
        Assertively enable revolutionary collaboration through comprehensive
        technical architecture. Our development methodology ensures peak
        performance while delivering cutting-edge solutions that transform your
        business operations.
      </p>
    </div>
  );
};

export default ServiceSteps;

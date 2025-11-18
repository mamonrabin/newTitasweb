import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import ServiceImg from "@/public/assets/image/service-img-3.jpg";
import Image from "next/image";
import { exo } from "../font";
import { Check } from "lucide-react";
import ServiceSteps from "@/src/components/services/ServiceSteps";
import SideService from "@/src/components/services/SideService";

const page = () => {
  return (
    <div>
      <PageHeaderSection
        title="E-commerce Excellence Details"
        pageName="Service Details"
      />
      <div className="lg:mt-20 mt-10 pb-20 Container flex lg:flex-row flex-col gap-8">
        <div className="flex-2">
          <Image
            src={ServiceImg}
            alt="titasweb"
            width={800}
            height={800}
            className="rounded-md"
          />

          <div className="mt-8">
            <h2
              className={`${exo.className} lg:text-4xl text-3xl font-bold lg:leading-10 text-[#1D3131]`}
            >
              Conversion-Focused Benefits of Next.js E-commerce
            </h2>
            <p className="text-gray-500 mt-4">
              Assertively enable revenue-generating storefronts through
              performance optimized e-commerce technology. Our Next.js expertise
              maintains peak conversion rates while delivering exceptional
              shopping experiences through future-proof commerce architecture.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Higher Conversion Rates</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Psychology-driven design and lightning-fast performance that
                  turns visitors into customers. Our stores consistently
                  outperform industry conversion benchmarks.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Mobile-First Excellence</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Optimized for today&lsquo;s mobile shopping behavior with
                  seamless checkout flows. Over 70% of purchases happen on
                  mobile - we make sure yours convert.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Performance That Sells</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Sub-second load times and smooth interactions keep customers
                  engaged. Every millisecond improvement directly impacts your
                  revenue.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Built-in Growth Tools</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Advanced analytics, A/B testing capabilities, and conversion
                  optimization tools included. Continuously improve your
                  store&lsquo;s performance with data-driven insights.
                </p>
              </div>
            </div>

            <div>
              <ServiceSteps />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <SideService />
        </div>
      </div>
    </div>
  );
};

export default page;

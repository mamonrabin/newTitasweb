import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import ServiceImg from "@/public/assets/image/services02.jpg";
import Image from "next/image";
import { exo } from "../font";
import { Check } from "lucide-react";
import ServiceSteps from "@/src/components/services/ServiceSteps";
import SideService from "@/src/components/services/SideService";

const page = () => {
  return (
    <div>
      <PageHeaderSection
        title="Custom Software Development Details"
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
              Transformative Benefits of Custom Business Software
            </h2>
            <p className="text-gray-500 mt-4">
              Assertively enable operational excellence through purpose-built
              software solutions. Our custom development expertise maintains
              competitive advantages while delivering revolutionary efficiency
              improvements through future-proof business applications.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Process Automation</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Eliminate manual bottlenecks and human error with intelligent
                  workflow automation. Transform time-consuming tasks into
                  automated, efficient processes.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Industry Compliance Built-In</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Meet regulatory requirements automatically with built-in
                  compliance features. Whether HIPAA, SOX, or industry-specific
                  regulations - we&lsquo;ve got you covered.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Seamless Integration</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Connect all your business tools and data sources into one
                  cohesive system. Break down silos and improve decision-making
                  with unified information.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Real-Time Business Intelligence</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Live dashboards and reporting that give you instant visibility
                  into operations. Make data-driven decisions with
                  up-to-the-minute business insights.
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

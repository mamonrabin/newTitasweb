import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import Image from "next/image";
import bigImage from "@/public/assets/image/rr-project.webp";
import secondImage from "@/public/assets/image/rr-app-project.png";
import { exo } from "../font";
import { FaQuoteRight } from "react-icons/fa";
import { Check } from "lucide-react";
import ContactProject from "@/src/components/project/ContactProject";
import ProjectInformation from "@/src/components/project/ProjectInformation";

const page = () => {
  return (
    <div>
      <PageHeaderSection title="Project Details" pageName="Project Details" />

      <div className="Container py-20">
        <div className="flex lg:flex-row flex-col  gap-8">
          <div className="flex-2">
            <div>
              <Image
                src={bigImage}
                alt="titasweb"
                width={700}
                height={700}
                className="rounded-md w-full h-full"
              />
            </div>

            <h2 className={`${exo.className} mt-8 lg:text-4xl text-3xl font-bold`}>
              Our E-commerce Excellence Achievement
            </h2>
            <p className="mt-4 text-gray-500 leading-6.5">
              When Estonias most beloved bookstore needed to modernize their
              digital presence, they chose CodBeyón to transform their complex
              e-commerce platform into a high performance, revenue-generating
              machine. This project showcases our ability to handle large-scale
              technical challenges while delivering measurable business results.
            </p>

            <div className="flex lg:flex-row flex-col lg:items-center gap-8 mt-8">
              <div className="w-80 h-40 bg-[#2B748A] lg:rounded-l-xl rounded-t-xl flex items-center justify-center text-white">
                <FaQuoteRight size={60} />
              </div>
              <div>
                <p className="text-lg font-bold">
                  “CodBeyón has a rare ability to instantly understand highly
                  complex projects... they improved our entire system. Their
                  contribution was immense and we highly recommend them.”
                </p>
                <h2 className="text-base font-semibold text-[#2B748A] mt-2">
                  --- Margus Saksing
                </h2>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col items-center gap-8 mt-10">
              <Image
                src={bigImage}
                alt="titasweb"
                width={400}
                height={400}
                className="rounded-md"
              />
              <Image
                src={secondImage}
                alt="titasweb"
                width={400}
                height={400}
                className="rounded-md"
              />
            </div>

            <div className="py-10">
              <h2 className={`${exo.className} lg:text-4xl text-3xl font-bold`}>
                The Challenge Of This Project
              </h2>
              <p className="mt-4 text-gray-500 leading-6.5">
                Rahva Raamat faced a critical business challenge that threatened
                their market leadership. Their established e-commerce platform
                was underperforming with slow load times, dated user experience,
                and complex architecture that made improvements difficult to
                implement. As Estonias largest bookstore, they couldnt afford
                downtime or customer frustration during the transformation.
              </p>
            </div>

            <div>
              <h2 className={`${exo.className} text-2xl font-bold`}>
                Key Challenge Points:
              </h2>

              <ul className="flex flex-wrap items-center gap-2 mt-4">
                <li className="bg-[#2B748A] px-4 py-2 rounded text-white font-semibold">
                  Performance crises
                </li>
                <li className="bg-[#2B748A] px-4 py-2 rounded text-white font-semibold">
                  Technical Debt
                </li>
                <li className="bg-[#2B748A] px-4 py-2 rounded text-white font-semibold">
                  User Experience Gap
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className={`${exo.className} text-3xl font-bold`}>
                Our Strategic Solution
              </h2>
              <p className="mt-4 text-gray-500 leading-6.5">
                <span className="font-bold">Solution Overview:</span> We
                developed a comprehensive three-pillar strategy that addressed
                both immediate performance issues and long-term scalability
                needs, all while maintaining business continuity.
              </p>

              <h2 className={`${exo.className} text-2xl font-bold mt-4`}>
                Our Three-Pillar Approach:
              </h2>

              <div className="flex flex-col gap-4 mt-6">
                <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                  <h2
                    className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                  >
                    <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                      <Check size={12} />
                    </span>{" "}
                    <span>Performance & Architecture Overhaul</span>
                  </h2>
                  <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                    Complete re-architecture of the Next.js frontend with
                    advanced optimization techniques. We identified and resolved
                    critical backend bottlenecks, creating a foundation for
                    sustained high performance.
                  </p>
                </div>

                <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                  <h2
                    className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                  >
                    <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                      <Check size={12} />
                    </span>{" "}
                    <span>Modern Brand Experience Design</span>
                  </h2>
                  <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                    Implemented a completely new Corporate Visual Identity with
                    user-centric design principles. The new interface builds
                    trust, improves usability, and creates a premium shopping
                    experience.
                  </p>
                </div>

                <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                  <h2
                    className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                  >
                    <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                      <Check size={12} />
                    </span>{" "}
                    <span>Data-Driven Optimization Framework</span>
                  </h2>
                  <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                    Integrated advanced analytics including Google Analytics and
                    Microsoft Clarity to provide actionable insights for
                    continuous improvement and strategic decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ProjectInformation/>
          </div>
        </div>
        <ContactProject />
      </div>
    </div>
  );
};

export default page;

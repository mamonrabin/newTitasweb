import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import ServiceImg from "@/public/assets/image/service04.jpg";
import Image from "next/image";
import { exo } from "../font";
import { Check } from "lucide-react";
import ServiceSteps from "@/src/components/services/ServiceSteps";
import SideService from "@/src/components/services/SideService";

const page = () => {
  return (
    <div>
      <PageHeaderSection
        title="UI/UX Design Details"
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
              Conversion-Driven Benefits of Strategic UI/UX Design
            </h2>
            <p className="text-gray-500 mt-4">
              Assertively enable customer engagement through psychology-based
              design methodology. Our UI/UX expertise maintains peak conversion
              rates while delivering intuitive user experiences through
              future-proof design systems.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Psychology-Based Design</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Every design decision backed by user behavior research and
                  conversion psychology. We create interfaces that naturally
                  guide users toward desired actions.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Mobile-First Approach</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Responsive designs that work flawlessly across all devices and
                  screen sizes. Your users get perfect experiences whether on
                  mobile, tablet, or desktop.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Continuous Optimization</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Built-in A/B testing capabilities and user feedback
                  integration. Your design continuously improves based on real
                  user data and behavior patterns.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Brand Authority Enhancement</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Professional designs that reinforce trust and credibility.
                  Users perceive well-designed interfaces as more trustworthy
                  and are more likely to convert.
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

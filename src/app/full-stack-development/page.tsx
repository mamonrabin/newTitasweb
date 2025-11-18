import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import ServiceImg from "@/public/assets/image/service-img-1.jpg";
import Image from "next/image";
import { exo } from "../font";
import { Check } from "lucide-react";
import ServiceSteps from "@/src/components/services/ServiceSteps";
import SideService from "@/src/components/services/SideService";

const page = () => {
  return (
    <div>
      <PageHeaderSection
        title="Full-Stack Development Details"
        pageName="Service Details"
      />
      <div className="mt-20 pb-20 Container flex lg:flex-row flex-col gap-8">
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
              Advanced Benefits of Next.js Full-Stack Development
            </h2>
            <p className="text-gray-500 mt-4">
              Assertively enable enterprise-grade applications with cutting-edge
              technology. Our Next.js expertise maintains peak performance
              across all platforms while delivering revolutionary user
              experiences through future-proof development practices.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Lightning-Fast Performance</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  We build applications that load in under 2 seconds, keeping
                  your users engaged and Google rankings high. Server-side
                  rendering and advanced caching deliver results your
                  competitors can&lsquo;t match.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Enterprise Security Standards</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  We implement security at every layer - from API endpoints to
                  user authentication. Your application meets enterprise
                  compliance requirements while maintaining seamless user
                  experiences.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>Scalable Architecture</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Built to handle growth from startup to enterprise scale. Our
                  Next.js applications seamlessly scale with your business
                  without performance degradation.
                </p>
              </div>

              <div className="border border-[#2B748A]/20 hover:border-[#2B748A] duration-300 cursor-pointer px-4 py-6 rounded-md">
                <h2
                  className={`${exo.className} flex items-center gap-4 font-semibold text-lg`}
                >
                  <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                    <Check size={12} />
                  </span>{" "}
                  <span>SEO-Optimized Foundation</span>
                </h2>
                <p className="mt-2 text-gray-500 leading-6.5 lg:ml-8">
                  Server-side rendering and technical SEO built-in from day one.
                  Your application ranks higher and attracts more organic
                  traffic automatically.
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

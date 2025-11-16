import { exo } from "@/src/app/font";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import HeroMask from "@/public/assets/image/hero-mask.png";
import HeroBanner from "@/public/assets/image/hero-banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="Container h-[120vh] bg-[#151F23] text-white mt-[-60px] relative overflow-hidden">
      <div className="grid lg:grid-cols-2 py-30">
        <div className="mt-12">
          <p
            className={`${exo.className} uppercase font-bold text-sm tracking-wider text-[#2B748A]`}
          >
            Welcome To titasweb
          </p>
          <h2 className={`${exo.className} mt-6 text-6xl font-bold leading-18`}>
            Transform Your Vision Into Market-Leading Software
          </h2>
          <p className="text-lg leading-7 mt-4">
            Full-stack development expertise that scales with your ambitions.
            From concept to deployment, we build software that drives real
            business results.
          </p>

          <div className="mt-8">
            <button
              className={`${exo.className} cursor-pointer relative overflow-hidden group px-8 py-4 rounded font-semibold bg-[#2B748A] text-white transition-all duration-500`}
            >
              {/* Text layer container */}
              <span className="relative z-10 block overflow-hidden">
                <span className="flex items-center gap-2 capitalize transition-transform duration-500 group-hover:-translate-y-full">
                  Start your project today <IoArrowForwardSharp />
                </span>
                <span className="absolute flex items-center gap-2 capitalize top-full left-0 w-full text-[#2B748A] transition-transform duration-500 group-hover:-translate-y-full">
                  Start your project today <IoArrowForwardSharp />
                </span>
              </span>

              {/* Half-circle sliding background */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0"
              >
                <span
                  className="
                    absolute left-1/2 bottom-0
                    -translate-x-1/2 translate-y-full group-hover:translate-y-0
                    transition-transform duration-700 ease-out
                    w-[220%] aspect-square rounded-t-full
                    bg-white
                  "
                />
              </span>
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={HeroMask}
              alt="Hero Mask"
              width={1000}
              height={1000}
              className="z-0 rotate-180 absolute -top-100 -right-10 opacity-5"
            />
          </div>

          <div className="w-[900px] relative p-1 rounded-lg  inline-block ">
            <Image
              src={HeroBanner}
              alt="Hero Banner"
              width={1000}
              height={1000}
              className="rounded-lg"
            />

            <div className="w-[900px] rounded-4xl rotate-70 z-50 top-3 -right-12 absolute h-[900px] border-2 border-[#2B748A]">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

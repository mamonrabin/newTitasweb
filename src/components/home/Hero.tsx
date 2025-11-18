import { exo } from "@/src/app/font";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import HeroMask from "@/public/assets/image/hero-mask.png";
import HeroBanner from "@/public/assets/image/hero-banner.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="Container lg:h-[120vh] bg-[#151F23] text-white lg:mt-[-60px] relative overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:py-0 py-20 mt-12 lg:pb-30">
        <div className=" lg:flex-none flex flex-col lg:items-start items-center lg:justify-baseline justify-center">
          <p
            className={`${exo.className} uppercase font-bold text-sm tracking-wider text-[#2B748A]`}
          >
            Welcome To titasweb
          </p>
          <h2
            className={`${exo.className} mt-6 md:text-6xl text-4xl font-bold lg:text-start text-center md:leading-18 leading-12`}
          >
            Transform Your Vision Into Market-Leading Software
          </h2>
          <p className="text-lg leading-7 lg:text-start text-center lg:mt-4 mt-6">
            Full-stack development expertise that scales with your ambitions.
            From concept to deployment, we build software that drives real
            business results.
          </p>

          <div className="lg:mt-8 mt-12">
            <Link href="/appointment">
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
            </Link>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src={HeroMask}
              alt="Hero Mask"
              width={1000}
              height={1000}
              className="z-0 lg:rotate-180 -rotate-200  absolute lg:-top-100 md:-top-50 -top-10 lg:-right-10 right-10 opacity-5"
            />
          </div>

          <div className="w-[900px] relative p-1 rounded-lg  lg:inline-block hidden ">
            <Image
              src={HeroBanner}
              alt="Hero Banner"
              width={1000}
              height={1000}
              className="rounded-lg"
            />

            <div className="w-[900px] rounded-4xl rotate-70 z-30 top-3 -right-12 absolute h-[900px] border-2 border-[#2B748A]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

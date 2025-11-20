import { exo } from "@/src/app/font";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

export const quote = [
  {
    id: 1,
    text: "Expert Insights Across Industries",
  },
  {
    id: 2,
    text: "Tailored Solutions for Every Business",
  },
  {
    id: 3,
    text: "Data-Driven Decision Making",
  },
  {
    id: 4,
    text: "Comprehensive Service Offerings",
  },
];

const About = () => {
  return (
    <div className="Container mt-20">
      <div className="rounded-xl relative bg-[radial-gradient(circle_at_right,#09272C_0%,#2C758A_50%,#09272C_100%)] text-white lg:py-10 py-4 lg:px-10 px-4">
        <div className="lg:px-8 py-14">
          <p className={`${exo.className} uppercase text-sm font-bold`}>
            About Titaseweb
          </p>
          <h2
            className={`${exo.className} mt-4 md:text-4xl text-3xl font-bold lg:w-[50%] md:leading-12 leading-10`}
          >
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-6 text-gray-300 font-semibold lg:w-[50%] text-lg">
            Join the companies that chose excellence. Lets discuss your project
            today.
          </p>

          <div className="lg:mt-12 mt-10">
            <Link href="/contact">  
            <button
              className={`${exo.className} cursor-pointer relative overflow-hidden group px-8 py-4 rounded font-semibold bg-[#2B748A] text-white transition-all duration-500`}
            >
              {/* Text layer container */}
              <span className="relative z-10 block overflow-hidden">
                <span className="flex items-center gap-2 capitalize transition-transform duration-500 group-hover:-translate-y-full">
                  get a quote <IoArrowForwardSharp />
                </span>
                <span className="absolute flex items-center gap-2 capitalize top-full left-0 w-full  text-[#2B748A] transition-transform duration-500 group-hover:-translate-y-full">
                  get a quote <IoArrowForwardSharp />
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

        <div className="right-0 top-22 lg:absolute">
          <div className="flex lg:items-end flex-col gap-6">
            {quote.map((item) => (
              <p
                key={item.id}
                className="flex font-bold items-center gap-4 
    bg-white/10 backdrop-blur-md 
    border border-white/20 
    shadow-lg 
    px-4 py-4 
    rounded-tl-md rounded-bl-md"
              >
                <span className="rounded-full border border-white/30 p-0.5 font-extrabold">
                  <Check />
                </span>
                <span>{item.text}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

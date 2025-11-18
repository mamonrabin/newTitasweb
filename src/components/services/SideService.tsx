import { exo } from "@/src/app/font";
import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const SideService = () => {
  return (
    <div>
      <div className="border border-gray-200 rounded lg:px-8 px-4 py-4">
        <h2
          className={`${exo.className} text-xl font-bold border-b border-[#2B748A]/20 pb-4`}
        >
          Our Services
        </h2>

        <ul className={`${exo.className} mt-8 pb-2 flex flex-col gap-2`}>
          <Link href="/full-stack-development">
            <li className="px-3 py-3 border border-gray-300 rounded font-semibold text-gray-500 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
              Full Stack Development
            </li>
          </Link>
          <Link href="/e-commerce">
            <li className="px-3 py-3 border border-gray-300 rounded font-semibold text-gray-500 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
              E-commerce
            </li>
          </Link>
          <Link href="/ui-ux">
            <li className="px-3 py-3 border border-gray-300 rounded font-semibold text-gray-500 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
              Graphic Solutions
            </li>
          </Link>
          <Link href="/enterprise">
            <li className="px-3 py-3 border border-gray-300 rounded font-semibold text-gray-500 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
              Custome Softwear
            </li>
          </Link>
        </ul>
      </div>

      <div className="py-10 px-15 bg-[#2B748A] rounded mt-8 text-white">
        <h2 className={`${exo.className} text-2xl font-bold`}>
          Have any Questions? Call us Today!
        </h2>
        <p className="mt-4">
          Professional consultation available for your specific requirements
        </p>
        <p className={`${exo.className} text-3xl font-bold mt-4`}>
          +8801746770324
        </p>

        <div className="mt-8">
          <button
            className={`${exo.className} w-full text-center cursor-pointer relative overflow-hidden group px-8 py-4 rounded font-semibold bg-white text-[#2B748A] transition-all duration-500`}
          >
            {/* Text layer container */}
            <span className="relative z-10 block overflow-hidden">
              <span className="flex  items-center justify-center gap-2 capitalize transition-transform duration-500 group-hover:-translate-y-full">
                Make Appointment <IoArrowForwardSharp />
              </span>
              <span className="absolute flex  items-center justify-center gap-2 capitalize top-full left-0 w-full text-white transition-transform duration-500 group-hover:-translate-y-full">
                Make Appointment <IoArrowForwardSharp />
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
                                         bg-[#0b3744] text-white
                                       "
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideService;

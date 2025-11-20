import Image from "next/image";
import React from "react";
import { exo } from "../app/font";
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from "next/link";
import { TService } from "../types";
interface serviceProps {
  service:TService
}
const ServiceCard:React.FC<serviceProps> = ({ service }) => {
  return (
    <div className="bg-white border border-gray-200 rounded relative overflow-hidden group cursor-pointer">
      <div className="py-12 px-8 h-[490px]">
        <p className="text-[#2B748A] group-hover:rotate-360 group-hover:scale-115 duration-300 inline-flex">
          {service.icon}
        </p>
        <h2 className={`${exo.className} capitalize text-xl font-bold py-4`}>
          {service.title}
        </h2>
        <p className="text-gray-500 leading-7 line-clamp-4">
          {service.description}
        </p>
      </div>

      <div className="bottom-0 absolute h-[180px] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />

        {/* Sliding Button */}
        <div
          className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-full flex justify-center
  "
        >
          <Link href={service.link}>
            <button
              className={`
      ${exo.className}
      cursor-pointer relative overflow-hidden
      px-8 py-4 rounded font-semibold 
      bg-white text-[#2B748A]

      /* animation */
      scale-x-0 group-hover:scale-x-100
      origin-center transition-transform duration-300
    `}
            >
              <span className="relative z-10 block overflow-hidden">
                <span className="flex items-center gap-2 capitalize transition-transform duration-500 group-hover:-translate-y-full">
                  read more details <IoArrowForwardSharp />
                </span>

                <span className="absolute top-full left-0 flex items-center gap-2 capitalize w-full text-white transition-transform duration-500 group-hover:-translate-y-full">
                  read more details <IoArrowForwardSharp />
                </span>
              </span>

              {/* Half-circle bg stays the same */}
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
          bg-[#2B748A]
        "
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

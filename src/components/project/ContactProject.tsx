import React from "react";
import image2 from "@/public/assets/image/cta-bg-shape1-1.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { exo } from "@/src/app/font";
// import Image from "next/image";

const ContactProject = () => {
  return (
    <div className="mt-20">
      <div
        style={{
          backgroundImage: `url(${image2.src})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-20 flex items-center justify-center rounded-4xl relative"
      >
        {/* Glassy Overlay */}
        <div className="absolute inset-0 bg-[#1C2F35]/80 backdrop-blur-sm rounded-4xl"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center 
          ">
          <p className={`${exo.className} uppercase font-bold text-base text-white`}>about titasweb</p>
          <h2 className={`${exo.className} py-4 font-bold lg:text-5xl text-4xl lg:leading-13 leading-12 text-white mt-2 lg:w-[60%]`}>
            Do You Have Similar Service Requirements?
          </h2>

           <div className="flex items-center gap-4 mt-6">
        
            <div className="">
              <button
                className={`${exo.className} cursor-pointer relative overflow-hidden group px-8 py-4 rounded font-semibold bg-white text-[#2B748A] transition-all duration-500`}
              >
                {/* Text layer container */}
                <span className="relative z-10 block overflow-hidden">
                   
                  <span className="flex items-center gap-2 capitalize transition-transform duration-500 group-hover:-translate-y-full">
                    Contact With Us <IoArrowForwardSharp />
                  </span>
                   <span className="absolute flex  items-center gap-2 capitalize top-full left-0 w-full text-white transition-transform duration-500 group-hover:-translate-y-full">
                    Contact With Us <IoArrowForwardSharp />
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
                                 bg-[#2B748A] text-white
                               "
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="top-0 left-0 absolute">
            <Image src={image2} alt="titasweb" width={500} height={500} className="w-full h-full object-cover"/>
        </div> */}
      </div>
    </div>
  );
};

export default ContactProject;

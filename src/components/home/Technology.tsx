"use client";

import { tecnologyList } from "@/src/api/tecnoligyApi";
import { exo } from "@/src/app/font";
import Image from "next/image";
import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Technology = () => {
  return (
    <div className="Container mt-20 pb-20">
      <h2
        className={`${exo.className} text-center uppercase text-gray-600 text-lg tracking-wider`}
      >
        Built With Industry-Leading Technologys
      </h2>

      <div className="mt-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {tecnologyList.map((tech) => (
            <SwiperSlide key={tech.id}>
              <div className="w-40 h-20 cursor-pointer border group border-[#262626]/10 rounded flex items-center justify-center mx-auto">
                <Image
                  src={tech.image}
                  alt="tech"
                  width={60}
                  height={60}
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Technology;

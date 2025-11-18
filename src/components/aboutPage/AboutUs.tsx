"use client"
import { motion } from "framer-motion";
import aboutImage from "@/public/assets/image/about1.jpg";
import Image from "next/image";
import { exo } from "@/src/app/font";
const AboutUs = () => {
  return (
    <div className="lg:mt-16 mt-10 grid lg:grid-cols-2 gap-8">
      <div className="mt-10">
        <p
          className={`${exo.className} text-[#3AC2CF] uppercase font-bold tracking-wider`}
        >
          About TitasWeb
        </p>
        <h2 className={`${exo.className} py-6 lg:text-4xl text-3xl font-bold leading-11`}>
          Building the Future of Digital Excellence
        </h2>
        <p className="text-gray-500 lg:mt-2 leading-8">
          The software landscape evolves rapidly, but one thing remains
          constant: businesses need reliable partners who can navigate
          complexity and deliver results. Titasweb exists to be that partner. We
          are not just building software - we are building the digital
          foundation for your companys next chapter of growth. Whether you are a
          startup with ambitious goals or an established company ready for
          digital transformation, we bring the expertise, dedication, and vision
          to make it happen.
        </p>

        <p className="text-gray-500 mt-3 leading-8">
          What started as a passion for solving complex problems has evolved
          into Titasweb - a software development company that bridges the gap
          between cutting-edge technology and real business results.
        </p>
        <p className="text-gray-500 mt-3 leading-8">
          Withing years of professional experience, web have had the privilege
          of working with industry leaders, From leading development teams to
          architecting enterprise-scale solutions, we have seen what separates
          good software from game changing software.
        </p>
      </div>

      <div>
        <div className="relative inline-block group  overflow-hidden">
          <Image
            className="lg:rounded-tl-[150px] rounded-tl-[50px] lg:rounded-br-[150px] rounded-br-[50px]"
            src={aboutImage}
            alt="about"
            width={500}
            height={500}
          />

          <motion.div
  initial={{ x: 0 }}
  animate={{ x: [0, 60, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className={`${exo.className} absolute left-0 bottom-0 bg-[#2B748A] text-white inline-flex flex-col px-8 py-8 text-center rounded-tl-[50px] rounded-br-[50px]`}
>
  <h1 className="text-4xl font-extrabold">100%</h1>
  <p className="font-xl uppercase font-bold mt-2">successful stories</p>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

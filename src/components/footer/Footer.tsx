import React from "react";
import logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import { exo } from "@/src/app/font";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import CopyRight from "./CopyRight";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="Container  relative bg-[radial-gradient(circle_at_right,#09272C_0%,#2C758A_50%,#09272C_100%)] text-white pt-20">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-12">
        <div className="flex-1 ">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="phone" width={70} height={70} />
            <h2 className={`${exo.className} text-2xl font-bold`}>TitasWeb</h2>
          </div>

          <div className="mt-4">
            <p className="leading-6">
              Titasweb turns ambitious visions into market-leading softwares.
              With over a decade of expertise in Web, App, AI, and e-commerce,
              we deliver technology that powers real business growth.
            </p>

            <div className="mt-8 flex items-center gap-2 cursor-pointer">
              <a
                className="bg-white text-[#2B748A] p-2 rounded hover:bg-[#2B748A] hover:text-white duration-300"
                href="https://www.facebook.com/profile.php?id=61584650367467"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                className="bg-white text-[#2B748A] p-2 rounded hover:bg-[#2B748A] hover:text-white duration-300"
                href="https://www.linkedin.com/company/titasweb/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="bg-white text-[#2B748A] p-2 rounded hover:bg-[#2B748A] hover:text-white duration-300"
                href="https://x.com/mamon63413"
                target="_blank"
              >
                <FaXTwitter />
              </a>
              <a
                className="bg-white text-[#2B748A] p-2 rounded hover:bg-[#2B748A] hover:text-white duration-300"
                href="#"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:items-center lg:justify-center">
          <h2 className={`${exo.className} text-xl font-bold`}>Quick Links</h2>

          <ul className="mt-4 flex flex-col gap-3 cursor-pointer">
            <Link href="/about">
              <li className="flex items-center gap-2 font-medium capitalize hover:text-gray-300 group">
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowRoundForward size={24} />
                </span>{" "}
                <span>about us</span>
              </li>
            </Link>
            <Link href="/project">
              <li className="flex items-center gap-2 font-medium capitalize hover:text-gray-300 group">
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowRoundForward size={24} />
                </span>{" "}
                <span>Portfolio</span>
              </li>
            </Link>
            <Link href="/appointment">
              <li className="flex items-center gap-2 font-medium capitalize hover:text-gray-300 group">
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowRoundForward size={24} />
                </span>{" "}
                <span>appointment</span>
              </li>
            </Link>
            <Link href="/contact">
              <li className="flex items-center gap-2 font-medium capitalize hover:text-gray-300 group">
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowRoundForward size={24} />
                </span>{" "}
                <span>contact us</span>
              </li>
            </Link>
            <Link href="/insights">
              <li className="flex items-center gap-2 font-medium capitalize hover:text-gray-300 group">
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowRoundForward size={24} />
                </span>{" "}
                <span>Insights</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex-1 flex flex-col lg:items-center lg:justify-center">
          <h2 className={`${exo.className} text-xl font-bold lg:ml-[-65px]`}>
            Office Information
          </h2>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-4">
              <p className="text-[#2B748A] w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <AiFillPhone size={20} />
              </p>
              <div>
                <p className="text-gray-400">Call Us 24/7</p>
                <h2 className="font-bold">+8801746770324</h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[#2B748A] w-8 h-8 flex items-center justify-center rounded-full bg-white">
                <MdEmail size={20} />
              </p>
              <div>
                <p className="text-gray-400">Work with us</p>
                <h2 className="font-bold">almamon757@gmail.com</h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[#2B748A] w-8 h-8 flex items-center justify-center rounded-full bg-white">
                {" "}
                <FaMapMarkerAlt size={20} />
              </p>
              <div>
                <p className="text-gray-400">Our Location</p>
                <h2 className="font-bold">Mirpur-1,Dhaka</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CopyRight />
    </div>
  );
};

export default Footer;

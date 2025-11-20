"use client";
import { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const ResponsiveBar = () => {
  const [openServices, setOpenServices] = useState(false);

  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <RiMenu3Fill size={20} />
      </SheetTrigger>
      <SheetContent className="py-4">
        <div className="flex items-center justify-between border-b px-6 pb-6">
          <Image src={logo} alt="titasweb" width={50} height={50} />
          <SheetClose className="cursor-pointer">
            <FaXmark className="text-2xl text-[#2B748A] cursor-pointer" />
          </SheetClose>
        </div>

        <ul className="flex flex-col text-[#151F23] gap-4 font-medium cursor-pointer">

          <Link href="/about">
            <li className="transition duration-700 hover:[text-shadow:0_0_8px_white] border-b px-6 pb-4">
              About Us
            </li>
          </Link>


          {/* Services Dropdown */}
          <li className="relative border-b px-6">
            <button
              onClick={() => setOpenServices(!openServices)}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              Services
              <FiPlus
                size={18}
                className={`transition-transform duration-300 ${openServices ? "rotate-45" : ""}`}
              />
            </button>

            <ul
              className={`
                w-56 rounded-b-md border border-black/5 bg-white 
                text-[#262626] py-2  font-semibold flex flex-col gap-1
                overflow-hidden transition-all duration-500
                ${openServices ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              {[
                { label: "Full Stack Development", href: "/full-stack-development" },
                { label: "E-commerce", href: "/e-commerce" },
                { label: "Graphic Solutions", href: "/ui-ux" },
                { label: "Custome Softwear", href: "/enterprise" },
                { label: "See All", href: "/services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:translate-x-2 hover:text-[#2B748A] transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>


          <Link href="/project">
            <li className="transition duration-700 hover:[text-shadow:0_0_8px_white] border-b px-6 pb-4">
              Projects
            </li>
          </Link>

          <Link href="/contact">
            <li className="transition duration-700 hover:[text-shadow:0_0_8px_white] border-b px-6 pb-4">
              Contact
            </li>
          </Link>

          <Link href="/insights">
            <li className="transition duration-700 hover:[text-shadow:0_0_8px_white] border-b px-6 pb-4">
              Insights
            </li>
          </Link>

        </ul>

        <div className="px-6 absolute bottom-10">
            <p><span>Mail:</span> <span>almamon757@gmail.com</span></p>
            <p><span>Phone:</span> <span>+8801746770324</span></p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveBar;

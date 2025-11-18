"use client";
import { exo } from "@/src/app/font";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavItems = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`Container z-50 transition-shadow duration-300 hidden lg:block ${
        scrolled ? "shadow-md " : ""
      }`}
    >
      <div className="bg-[#2B748A]  rounded-b-md flex items-center justify-between px-6 py-2 text-white">
        <ul className="flex items-center gap-10 font-semibold cursor-pointer">
          <Link href="/about">
            <li
              className="
    text-white transition duration-700
    hover:[text-shadow:0_0_8px_white]
  "
            >
              About Us
            </li>
          </Link>

          {/* Services with dropdown */}
          <li className="relative group">
            {/* Button for accessibility */}
            <button
              className="outline-none cursor-pointer flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              Services
              <ChevronDown size={18} />
            </button>

            {/* Dropdown */}
            <ul
              role="menu"
              className="
      absolute top-10.5 left-0 w-56
      rounded-b-md border border-black/5 bg-white text-[#262626] py-4
      shadow-xl font-semibold flex flex-col gap-1
      max-h-0 opacity-0 overflow-hidden
      transition-all duration-700 ease
      group-hover:max-h-[60vh] group-hover:opacity-100
      group-focus-within:max-h-[60vh] group-focus-within:opacity-100
      z-50
    "
            >
              {[
                {
                  label: "Full Stack Development",
                  href: "/full-stack-development",
                },
                { label: "E-commerce", href: "/e-commerce" },
                { label: "Graphic Solutions", href: "/ui-ux" },
                { label: "Custome Softwear", href: "/enterprise" },
                { label: "See All", href: "/services" },
              ].map((item) => (
                <li key={item.href} role="none">
                  <a
                    role="menuitem"
                    href={item.href}
                    className="block px-4 hover:translate-x-2 hover:text-[#2B748A] transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <Link href="/project">
            <li
              className="
     text-white transition duration-700
    hover:[text-shadow:0_0_8px_white]
  "
            >
              Projects
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="
     text-white transition duration-700
    hover:[text-shadow:0_0_8px_white]
  "
            >
              Contact
            </li>
          </Link>
          <Link href="/insights">
            <li
              className="
    text-white transition duration-700
    hover:[text-shadow:0_0_8px_white]
  "
            >
              Insights
            </li>
          </Link>
        </ul>

        <div>
          <Link href="/appointment">
            <button
              className={`${exo.className} cursor-pointer relative overflow-hidden group px-5 py-2.5 rounded font-semibold bg-white text-[#2B748A] transition-all duration-500`}
            >
              {/* Text layer container */}
              <span className="relative z-10 block overflow-hidden">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  Book Appointment
                </span>
                <span className="absolute top-full left-0 w-full block text-white transition-transform duration-500 group-hover:-translate-y-full">
                  Book Appointment
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
                  bg-[#00475C]
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

export default NavItems;

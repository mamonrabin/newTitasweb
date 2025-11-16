import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="bg-[#1C2F35] text-white">
      <div className="Container flex items-center justify-between py-3">
        <h2 className="font-medium">
          TitasWeb: Delivering IT, Web & Mobile Expertise Globally
        </h2>

        <div className="flex items-center justify-center gap-4">
          {/* Facebook */}
          <a
            href="#"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all duration-500 hover:scale-110 hover:border-[#1877F2] hover:bg-[#1877F2]/10"
          >
            <FaFacebookF className="text-base transition-all duration-500 group-hover:text-[#1877F2]" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all duration-500 hover:scale-110 hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10"
          >
            <FaTwitter className="text-base transition-all duration-500 group-hover:text-[#1DA1F2]" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-all duration-500 hover:scale-110 hover:border-[#0077B5] hover:bg-[#0077B5]/10"
          >
            <FaLinkedinIn className="text-base transition-all duration-500 group-hover:text-[#0077B5]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

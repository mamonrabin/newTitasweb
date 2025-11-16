import Image from "next/image";
import logo from "@/public/assets/logo/logo.svg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { exo } from "@/src/app/font";

const InfoNav = () => {
  return (
    <div className="Container py-4 bg-[#F5F6F7]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="phone" width={70} height={70} />
          <h2 className={`${exo.className} text-2xl font-bold`}>TitasWeb</h2>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 text-[#2B748A]">
              <FaPhoneAlt size={18} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <span className="text-lg font-bold">+8801746770324</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 text-[#2B748A]">
              <MdMail size={18} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Us Here</p>
              <span className="text-lg font-bold">almamon757@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 text-[#2B748A]">
              <FaMapMarkerAlt size={18} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Office Address</p>
              <span className="text-lg font-bold">Mirpur-1,Dhaka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoNav;

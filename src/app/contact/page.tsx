import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import React from "react";
import { exo } from "../font";
import Image from "next/image";
import contackImage from "@/public/assets/image/contact-cover.webp";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail, MdMiscellaneousServices } from "react-icons/md";
import { LuFolderInput } from "react-icons/lu";
import ContactChoose from "@/src/components/contactPage/ContactChoose";
import ContactForm from "@/src/form/ContactForm";

const page = () => {
  return (
    <div>
      <PageHeaderSection title="Contact Us" pageName="Contact Us" />

      <div className="mt-20 pb-20">
        <div className="Container">
          <div>
            <p
              className={`${exo.className} text-center uppercase font-bold text-[#3AC2CF]`}
            >
              Get In Touch
            </p>
            <h2
              className={`${exo.className} text-center font-bold lg:text-4xl text-3xl mt-4`}
            >
              Ready to Transform Your Business? Let&apos;s Talk.
            </h2>

            <div className="lg:px-40 w-full">
              <ContactForm/>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mt-30" style={{ width: "100%", height: "800px" }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848280008054!2d90.39124631498154!3d23.75088508458933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8915512f071%3A0x99fa2a85c09ccfe3!2sMirpur%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1720789410664!5m2!1sen!2sbd"
            ></iframe>
          </div>

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="bg-white absolute z-30 top-20 md:left-20">
            <div>
              <Image
                src={contackImage}
                alt="titasweb"
                width={400}
                height={400}
              />
            </div>
            <div className="px-6 py-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b border-[#2B748A]/20 pb-4">
                <p className="h-10 w-10 flex items-center justify-center rounded-full bg-[#2B748A] text-white">
                  <FaPhoneFlip size={16} />
                </p>
                <div className={`${exo.className}`}>
                  <p className="text-[#2B748A] text-sm font-bold">
                    Call Us 24/7
                  </p>
                  <h2 className="text-xl font-bold mt-1">+8801746770324</h2>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-[#2B748A]/20 pb-4">
                <p className="h-10 w-10 flex items-center justify-center rounded-full bg-[#2B748A] text-white">
                  <MdEmail size={16} />
                </p>
                <div className={`${exo.className}`}>
                  <p className="text-[#2B748A] text-sm font-bold">
                    Make a Quote
                  </p>
                  <h2 className="text-xl font-bold mt-1">
                    almamon757@gmail.com
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-[#2B748A]/20 pb-4">
                <p className="h-10 w-10 flex items-center justify-center rounded-full bg-[#2B748A] text-white">
                  <MdMiscellaneousServices size={16} />

                </p>
                <div className={`${exo.className}`}>
                  <p className="text-[#2B748A] text-sm font-bold">
                    Service Region
                  </p>
                  <h2 className="text-xl font-bold mt-1">Worldwide</h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="h-10 w-10 flex items-center justify-center rounded-full bg-[#2B748A] text-white">
                  <LuFolderInput size={16} />

                </p>
                <div className={`${exo.className}`}>
                  <p className="text-[#2B748A] text-sm font-bold">
                    RESPONSE TIME
                  </p>
                  <h2 className="text-xl font-bold mt-1">Within 2 Hours</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Container mt-20">
          <ContactChoose/>
        </div>
      </div>
    </div>
  );
};

export default page;

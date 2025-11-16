import PageHeaderSection from "@/src/utilits/PageHeaderSection";
import React from "react";
import { exo } from "../font";

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
            className={`${exo.className} text-center font-bold text-4xl mt-4`}
          >
            Ready to Transform Your Business? Let&apos;s Talk.
          </h2>

          <div className="lg:px-40 w-full">
            <form className="mt-8 w-full flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
                  type="text"
                  placeholder="Your Name *"
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
                  type="email"
                  placeholder="Email Address *"
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
                  type="text"
                  placeholder="Your Number"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded outline-none">
                  <option value="">Select Service</option>
                  <option value="">Full Stack Development</option>
                  <option value="">Ecommerce Website</option>
                  <option value="">Custome Website</option>
                  <option value="">Graphices Solution</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded outline-none">
                  <option value="">Project Budjet Range</option>
                  <option value="">Under TK.10000</option>
                  <option value="">TK. 10000-20000</option>
                  <option value="">TK. 20000-30000</option>
                  <option value="">TK. 30000-40000</option>
                  <option value="">
                    Let&apos;s discuss based on requirements
                  </option>
                </select>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
                  type="text"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements. The more details you provide, the better we can prepare for our consultation. *"
                  cols={30}
                  rows={10}
                ></textarea>
              </div>

              <div>
                <input
                  className={`${exo.className} px-8 py-4 rounded bg-[#2B748A] hover:bg-[#3AC2CF] duration-300 text-white font-medium cursor-pointer`}
                  type="submit"
                  value="Get Free Consultation →"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="mt-30"
          style={{ width: "100%", height: "600px" }}
        >
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
      </div>
      </div>
    </div>
  );
};

export default page;

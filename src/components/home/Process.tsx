import { workList } from "@/src/api/workApi";
import { exo } from "@/src/app/font";
import mask from "@/public/assets/image/processMask.png";
import Image from "next/image";

const Process = () => {
  return (
    <div className="Container mt-70 pb-30">
      <div
        className={`${exo.className} flex items-center justify-center text-center flex-col `}
      >
        <p className="text-[#3AC2CF] uppercase font-bold text-base">
          How IT Works
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-12 capitalize w-[58%]">
          We are building great future together, Be with us
        </h2>
      </div>

      <div className="mt-14 grid lg:grid-cols-4 gap-4 ">
        {workList.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-center flex-col group">
              <div className="relative">
                <Image
                  src={mask}
                  alt="mask image"
                  width={120}
                  height={120}
                  className=""
                />
                <p className=" group-hover:rotate-360 group-hover:scale-105 duration-300 cursor-pointer  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 absolute text-[#2B748A]">
                  {item.icon}
                </p>
              </div>

              <div className="text-center mt-6 cursor-pointer">
                <h2 className={`${exo.className} text-xl font-bold`}>{item.title}</h2>
                <p className="mt-4 text-gray-500 leading-7">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

import { exo } from "@/src/app/font";
import resultimage from "@/public/assets/image/result.png";
import Image from "next/image";
import { resultList } from "@/src/api/resultApi";

const Results = () => {
  return (
    <div className="Container mt-20 overflow-hidden  relative bg-[#1D3131] lg:rounded-tl-[160px] rounded-tl-[100px] lg:rounded-br-[160px] rounded-br-[100px] py-25">
      <div
        className={`${exo.className} flex items-center justify-center text-center flex-col `}
      >
        <p className="text-[#3AC2CF] uppercase font-bold text-base">
          What Sets Us Apart
        </p>
        <h2 className="mt-4 lg:text-4xl text-3xl font-bold capitalize text-white">
          Why TitasWeb Delivers Different Results
        </h2>
      </div>

      <div className="top-0 -right-40 absolute z-10 overflow-hidden hidden lg:block">
        <Image src={resultimage} alt="titasweb" width={350} height={350} className="overflow-hidden"  />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-16 relative z-40">
        {resultList.map((result) => (
          <div key={result.id} className="bg-white rounded relative overflow-hidden group cursor-pointer">
            <div className="py-12 px-8 ">
              <p className="text-[#2B748A] group-hover:rotate-360 group-hover:scale-115 duration-300 inline-flex">
                {result.icon}
              </p>
              <h2
                className={`${exo.className} capitalize text-xl font-bold py-4`}
              >
                {result.title}
              </h2>
              <p className="text-gray-500 leading-7">
                {result.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;

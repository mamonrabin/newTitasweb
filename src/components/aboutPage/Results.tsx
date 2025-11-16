import { exo } from "@/src/app/font";
import resultimage from "@/public/assets/image/result.png";
import Image from "next/image";
import { resultList } from "@/src/api/resultApi";

const Results = () => {
  return (
    <div className="Container mt-20  relative bg-[#1D3131] rounded-tl-[160px] rounded-br-[160px] py-25">
      <div
        className={`${exo.className} flex items-center justify-center text-center flex-col `}
      >
        <p className="text-[#3AC2CF] uppercase font-bold text-base">
          What Sets Us Apart
        </p>
        <h2 className="mt-4 text-4xl font-bold capitalize text-white">
          Why TitasWeb Delivers Different Results
        </h2>
      </div>

      <div className="top-0 right-0 absolute z-10">
        <Image src={resultimage} alt="titasweb" width={350} height={350}  />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-16">
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

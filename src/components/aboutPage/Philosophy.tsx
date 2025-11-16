import Image from "next/image";
import img1 from "@/public/assets/image/about2-1.png";
import img2 from "@/public/assets/image/about2-2.png";
import { exo } from "@/src/app/font";
import { philosophiesList } from "@/src/api/philosophyApi";

const Philosophy = () => {
  return (
    <div className="mt-20 grid lg:grid-cols-2 gap-40">
      {/* IMAGE COLUMN */}
      <div>
        <div className="flex item-center">
          <Image
            className="rounded-2xl"
            src={img1}
            alt="titaaweb"
            width={500}
            height={500}
          />

          <Image
            className="rounded-2xl relative top-30 right-40"
            src={img2}
            alt="titaaweb"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* CONTENT COLUMN */}
      <div>
        <h2 className={`${exo.className} text-4xl font-bold`}>
          Our Development Philosophy
        </h2>

        <div className="flex flex-col gap-6 mt-12">
          {philosophiesList.map((result) => (
            <div key={result.id} className="">
              <div className="flex items-center justify-center gap-10">
                <div className="">
                    <p className="w-16 h-16 bg-[#2B748A] rounded text-white inline-flex items-center justify-center">{result.icon}</p>
                </div>

                <div>
                  <h2 className={`${exo.className} text-xl font-bold `}>{result.title}</h2>
                  <p className="text-gray-500 mt-2 leading-7">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

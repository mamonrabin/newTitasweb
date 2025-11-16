
import React from 'react';
import dots from "@/src/assets/image/dots.png";
import Image from 'next/image';
interface SectionHeaderProps {
  tagTitle: string;
  title: string;
  subTitle: string;
  titleStyle?: string;
  subTitleStyle?: string;
  mainStyle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({tagTitle, title, subTitle, titleStyle, subTitleStyle,mainStyle}) => {
    return (
        <div className={`text-center flex flex-col items-center justify-center ${mainStyle}`}>
        <div
          className="inline-flex gap-2 items-center text-[#6F50F3] justify-center   px-4 py-2"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          {/* <img src="/assets/imgs/features-1/dots.png" alt="infinia" /> */}
          <Image src={dots} alt="titasweb" />
          <span className=" font-bold  uppercase">{tagTitle}</span>
        </div>
        <h3
          className={`lg:text-6xl md:text-4xl text-3xl font-semibold capitalize my-3 ${titleStyle}`}
          data-aos="fade-zoom-in"
          data-aos-delay={300}
        >
          {title}
        </h3>
        <p className={`mt-2 text-[#262626]/60 lg:w-[50%] ${subTitleStyle}`} data-aos="fade-zoom-in" data-aos-delay={100}>
          {subTitle}
        </p>
      </div>
    );
};

export default SectionHeader;
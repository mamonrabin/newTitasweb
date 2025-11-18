import React from 'react';
import lineBg from "@/public/assets/image/breadcrumb-bg.png";
import { exo } from '../app/font';
import Link from 'next/link';

interface PageHeaderSectionProps {
  title?: string;
  pageName?: string;
}

const PageHeaderSection: React.FC<PageHeaderSectionProps> = ({ title,pageName }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${lineBg.src})`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="lg:py-35 py-20 lg:mt-[-60px] lg:rounded-br-[180px] rounded-br-[100px]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 lg:rounded-br-[180px] rounded-br-[100px]"></div>

   
     <div className='Container mt-8 relative flex gap-6 lg:gap-0 lg:flex-row flex-col items-center lg:items-start lg:justify-between justify-center'>
       <h3 className={`${exo.className}  z-10 text-white lg:text-start text-center md:text-6xl text-4xl font-bold lg:w-[60%]`}>
        {title}
      </h3>

      <div >
         <div className='inline-flex items-center gap-1 bg-white py-4 px-8 rounded-tl-4xl rounded-br-4xl'>
         <Link href="/">
          <p className='text-gray-500 font-semibold hover:text-[#2B748A] duration-300 cursor-pointer'>Home</p>
         </Link>
         <span>/</span>
         <p className='font-semibold capitalize text-[#2B748A]'>{pageName}</p>
         </div>
      </div>
     </div>
    </div>
  );
};

export default PageHeaderSection;

import Image from "next/image";
import React from "react";
import { exo } from "../app/font";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="group cursor-pointer">
      <div className="w-full h-[260px] overflow-hidden">
        <Image
          src={blog.image}
          alt="titasweb"
          width={500}
          height={500}
          className="w-full h-full rounded-t-xl object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="flex items-center justify-between bg-[#1D3131] px-4 py-3 text-white">
        <p className={`${exo.className} font-semibold`}>{blog.author}</p>
        <p className="text-sm">{blog.date}</p>
      </div>

      <div className="px-4 mt-4">
        <Link href={blog.link}>
          <h2
            className={`${exo.className} text-xl font-bold text-[#1D3131] hover:text-[#2B748A] duration-300 line-clamp-2`}
          >
            {blog.title}
          </h2>
        </Link>
        <p className="mt-3 text-gray-600">{blog.description}</p>
        <Link href={blog.link}>
          <button className="flex items-center gap-2 mt-4 text-[#2B748A] font-bold hover:underline cursor-pointer duration-300">
            Read Details <GoArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

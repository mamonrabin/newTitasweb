import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group">
      <Link href={project.link}>
        <div>
          <Image
            src={project.image}
            alt="titasweb"
            width={800}
            height={800}
            className="w-full h-full rounded-md cursor-pointer"
          />
        </div>
      </Link>

      <div className="bottom-0 left-8 right-8 absolute group-hover:bottom-6 duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
        <Link href={project.link}>
          <h2 className="bg-[#2B748A] text-sm px-4 py-2 uppercase rounded-md text-white font-semibold inline-flex">
            {project.projectTitle}
          </h2>
        </Link>
          <Link href={project.link}>
        <div className="bg-white border border-gray-200 rounded-md mt-2 px-4 py-6 inline-flex flex-col">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">
            {project.name}
          </h2>
          <p className="py-2 text-gray-500 line-clamp-4">
            {project.description}
          </p>
          <ul className="flex flex-col gap-2 mt-2">
            {project.fecility.map((item, index) => (
              <li key={index} className="flex items-center gap-3 font-medium">
                <span className="w-4 h-4 bg-[#2B748A] rounded-full text-white flex items-center justify-center">
                  <Check size={12} />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

import service1 from "@/public/assets/image/service01.jpg";
import service2 from "@/public/assets/image/service03.jpg";
import service3 from "@/public/assets/image/services02.jpg";
import service4 from "@/public/assets/image/service04.jpg";
import { BrainCircuit, ScreenShareOff } from "lucide-react";
import { SlBasket } from "react-icons/sl";
import { GrCloudSoftware } from "react-icons/gr";

export const serviceList = [
  {
    id: 1,
    title: "Full-Stack Development",
    image: service1,
    link: "/full-stack-development",
    description:
      "Build scalable web applications with cutting-edge technology. Our Next.js and React expertise ensures lightning-fast performance and seamless user experiences.",
    icon: <ScreenShareOff size={40} />,
  },
  {
    id: 2,
    title: "E-commerce Excellence",
    image: service2,
    link: "/e-commerce",
    description:
      "Launch powerful online stores that convert visitors into customers. Our Next.js storefronts are optimized for sales and built to scale.",
    icon: <SlBasket size={40} />,
  },
  {
    id: 3,
    title: "Graphic Solutions",
    image: service3,
    link: "/ui-ux",
    description:
      "Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",
    icon: <BrainCircuit size={40} />,
  },
  {
    id: 4,
    title: "Custome Softwear",
    image: service4,
    description:
      "Assertively enable operational excellence through purpose-built software solutions. Our custom development expertise maintains competitive advantages while delivering revolutionary efficiency improvements through future-proof business applications.",
    icon: <GrCloudSoftware size={40} />,
  },
  {
    id: 5,
    title: "Branding & Marketing",
    description:
      "Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",
    icon: "https://i.ibb.co.com/27nfjG21/icon-5.png",
  },
  {
    id: 6,
    title: "Graphic Design",
    description:
      "Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",
    icon: "https://i.ibb.co.com/XkW7vJyj/icon-6.png",
  },
];

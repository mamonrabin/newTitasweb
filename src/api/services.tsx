import service1 from "@/public/assets/image/service01.jpg"
import service2 from "@/public/assets/image/service03.jpg"
import service3 from "@/public/assets/image/services02.jpg"
import { BrainCircuit, ScreenShareOff } from "lucide-react";
import { SlBasket } from "react-icons/sl";

export const serviceList = [
  {
    id: 1,
    title: "Full-Stack Development",
    image:service1,
    description:"Build scalable web applications with cutting-edge technology. Our Next.js and React expertise ensures lightning-fast performance and seamless user experiences.",  
    icon:<ScreenShareOff size={40} />
  },
  {
    id: 2,
    title: "E-commerce Excellence",
    image:service2,
    description:"Launch powerful online stores that convert visitors into customers. Our Next.js storefronts are optimized for sales and built to scale.",  
    icon:<SlBasket size={40} />
  },
  {
    id: 3,
    title: "Graphic Solutions",
    image:service3,
    description:"Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",  
    icon:<BrainCircuit size={40} />
  },
  {
    id: 4,
    title: "Application Development",
    description:"Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",  
    icon:"https://i.ibb.co.com/mVkPDCWP/icon-4.png"
  },
  {
    id: 5,
    title: "Branding & Marketing",
    description:"Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",  
    icon:"https://i.ibb.co.com/27nfjG21/icon-5.png"
  },
  {
    id: 6,
    title: "Graphic Design",
    description:"Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work",  
    icon:"https://i.ibb.co.com/XkW7vJyj/icon-6.png"
  }
];

import { BugOff, Framer, Rocket, Telescope } from "lucide-react";

export const workList = [
  {
    id: 1,
    title: "Discovery & Strategy",
    icon:<Telescope size={40} />,
    link: "/service/discover-the-project",
    text: "We dive deep into your business goals and technical requirements to create a roadmap for success.",
  },
  {
    id: 2,
    title: "Design & Development",
    icon:<Framer size={40} />,
    link: "/service/strategy-development",
    text: "Our expert team brings your vision to life with clean code, stunning design, and robust architecture.",
  },
  {
    id: 3,
    title: "Testing & Optimization",
    icon:<BugOff size={40} />,
    link: "/service/implementation-the-solution",
    text: "Rigorous testing ensures your software performs flawlessly under any condition.",
  },
  {
    id: 4,
    title: "Launch & Support",
    icon:<Rocket size={40} />,
    link: "/service/monitoring-progress",
    text: "We handle deployment and provide ongoing support to keep your software running smoothly.",
  },
];
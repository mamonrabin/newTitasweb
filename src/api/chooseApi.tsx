import { BugOff, Framer, Rocket, Telescope } from "lucide-react";

export const chooseList = [
  {
    id: 1,
    title: "Rapid Response",
    icon: <Telescope size={40} />,
    link: "/service/discover-the-project",
    text: "Get detailed project proposals within 24 hours. We understand that timing matters in business, and we move at your speed.",
  },
  {
    id: 2,
    title: "Transparent Pricing",
    icon: <Framer size={40} />,
    link: "/service/strategy-development",
    text: "No hidden fees, no surprise costs. Every proposal includes clear pricing with detailed scope breakdown and timeline.",
  },
  {
    id: 3,
    title: "Results Guarantee",
    icon: <BugOff size={40} />,
    link: "/service/implementation-the-solution",
    text: "We stand behind our work with measurable performance guarantees. Your success is our reputation.",
  },
  {
    id: 4,
    title: "Partnership Approach",
    icon: <Rocket size={40} />,
    link: "/service/monitoring-progress",
    text: "We become an extension of your team, invested in your long term success beyond just project delivery.",
  },
];

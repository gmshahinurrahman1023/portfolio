import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const heroIcons = [
  {
    id: 1,
    icon: FaHtml5,
    position: "-top-4 -left-4",
    color: "text-orange-500",
  },
  {
    id: 2,
    icon: FaReact,
    position: "-top-6 -right-4",
    color: "text-cyan-400",
  },
  {
    id: 3,
    icon: FaCss3Alt,
    position: "bottom-8 -left-4",
    color: "text-blue-500",
  },
  {
    id: 4,
    icon: FaJs,
    position: "bottom-6 -right-4",
    color: "text-yellow-400",
  },
  {
    id: 5,
    icon: SiTailwindcss,
    position: "top-1/2 -left-10",
    color: "text-sky-400",
  },
];

export default heroIcons;
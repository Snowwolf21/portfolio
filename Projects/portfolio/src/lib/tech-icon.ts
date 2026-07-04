import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa6";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiEslint,
  SiFigma,
  SiGithub,
  SiNpm,
  SiFramer,
 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { DiCss3 } from "react-icons/di";
import { LuChartArea } from "react-icons/lu";
import { TbBrandJavascript, TbBrandVite, TbApi, TbCirclesRelation} from "react-icons/tb";

export const techIcons = {
  React: {
    icon: FaReact,
    color: "text-[#61DAFB]",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },

  "Node.js": {
    icon: FaNodeJs,
    color: "text-[#5FA04E]",
  },

  "Express.js": {
    icon: SiExpress,
    color: "text-black dark:text-white",
  },

  MongoDB: {
    icon: SiMongodb,
    color: "text-[#47A248]",
  },

  "Socket.io": {
    icon: SiSocketdotio,
    color: "text-black dark:text-white",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },

  HTML5: {
    icon: FaHtml5,
    color: "text-[#E44D26]",
  },

  JavaScript: {
    icon: TbBrandJavascript,
    color: "text-[#F7DF1E]",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
  },

  CSS3: {
    icon: DiCss3,
    color: "text-[#264DE4]",
  },

  "Git & GitHub": {
    icon: SiGithub,
    color: "text-[#24292F] dark:text-white",
  },

  npm: {
    icon: SiNpm,
    color: "text-[#CB3837]",
  },

  Figma: {
    icon: SiFigma,
    color: "text-[#F24E1E]",
  },

  "VS Code": {
    icon: VscCode,
    color: "text-[#007ACC]",
  },

  Vercel: {
    icon: SiVercel,
    color: "text-black dark:text-white",
  },

  ESLint: {
    icon: SiEslint,
    color: "text-[#4B32C3]",
  },

  Vite: {
    icon: TbBrandVite,
    color: "text-[#646CFF]",
  },

  "REST APIs": {
    icon: TbApi,
    color: "text-accent",
  },
  "Framer Motion": {
    icon:SiFramer,
    color: "text-[#0055FF] dark:text-white"
  },
  "Context API": {
    icon: TbCirclesRelation,
    color: "text-[#61DAFB] dark:text-white"
  },
  "Recharts": {
    icon: LuChartArea,
    color: "text-[#22C55E]"
  }
} as const;

export type TechName = keyof typeof techIcons;
import React from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiJsonwebtokens, 
  SiGit,
  SiPostman,
  SiVercel
} from "react-icons/si";

export function getSkillIcon(iconName: string, className = "w-6 h-6", color?: string) {
  const props = { className, style: color ? { color } : undefined };
  switch (iconName) {
    case "React":
      return <SiReact {...props} />;
    case "Next":
      return <SiNextdotjs {...props} />;
    case "Vercel":
      return <SiVercel {...props} />;
    case "TS":
      return <SiTypescript {...props} />;
    case "Tailwind":
      return <SiTailwindcss {...props} />;
    case "Framer":
      return <SiFramer {...props} />;
    case "HTML":
      return <SiHtml5 {...props} />;
    case "CSS":
      return <SiCss {...props} />;
    case "JS":
      return <SiJavascript {...props} />;
    case "Node":
      return <SiNodedotjs {...props} />;
    case "Express":
      return <SiExpress {...props} />;
    case "Mongo":
      return <SiMongodb {...props} />;
    case "Postgres":
      return <SiPostgresql {...props} />;
    case "Rest":
      return <SiPostman {...props} />;
    case "Jwt":
      return <SiJsonwebtokens {...props} />;
    case "Git":
      return <SiGit {...props} />;
    default:
      return <SiReact {...props} />;
  }
}

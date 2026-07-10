export interface Skill {
  name: string;
  iconName: string;
 
  color: string;
}

export type CategoryType = "main" | "comfort" | string;

export interface StackItem {
  category: CategoryType;
  title: string;
  items: Skill[];
}

export const stack: StackItem[] = [
  {
    category: "main",
    title: "Frontend",
    items: [
      { name: "React", iconName: "React",  color: "#61DAFB" },
      { name: "Next.js", iconName: "Next", color: "#4169E1" },
      { name: "TypeScript", iconName: "TS", color: "#3178C6" },
      { name: "Tailwind CSS", iconName: "Tailwind", color: "#06B6D4" },
      { name: "Framer Motion", iconName: "Framer", color: "#F107A3" },
      { name: "HTML5", iconName: "HTML", color: "#E34F26" },
      { name: "CSS3", iconName: "CSS",  color: "#1572B6" },
      { name: "JavaScript", iconName: "JS",  color: "#F7DF1E" },
      // { name: "VS Code", iconName: "VS Code", level: 100, color: "#2661FA" },
    
    ],
  },
  {
    category: "main",
    title: "Backend",
    items: [
      { name: "Node.js", iconName: "Node",  color: "#339933" },
      { name: "Express.js", iconName: "Express",  color: "#828282" },
      { name: "MongoDB", iconName: "Mongo",  color: "#47A248" },
      // { name: "PostgreSQL", iconName: "Postgres", level: 65, color: "#2196F3" },
      { name: "REST APIs", iconName: "Rest",  color: "#00c8ff" },
      { name: "JWT Auth", iconName: "Jwt",  color: "#fb015b" },
      { name: "Git / Version Control", iconName: "Git",  color: "#F05032" },
      { name: "Vercel", iconName: "Vercel", color: "#2661FA" },
    ],
  },
];
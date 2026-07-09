export interface Skill {
  name: string;
  iconName: string;
  level: number; // 0-100 percentage
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
      { name: "React", iconName: "React", level: 80, color: "#61DAFB" },
      { name: "Next.js", iconName: "Next", level: 70, color: "#4169E1" },
      { name: "TypeScript", iconName: "TS", level: 75, color: "#3178C6" },
      { name: "Tailwind CSS", iconName: "Tailwind", level: 85, color: "#06B6D4" },
      { name: "Framer Motion", iconName: "Framer", level: 70, color: "#F107A3" },
      { name: "HTML5", iconName: "HTML", level: 90, color: "#E34F26" },
      { name: "CSS3", iconName: "CSS", level: 80, color: "#1572B6" },
      { name: "JavaScript", iconName: "JS", level: 85, color: "#F7DF1E" },
      // { name: "VS Code", iconName: "VS Code", level: 100, color: "#2661FA" },
    
    ],
  },
  {
    category: "main",
    title: "Backend",
    items: [
      { name: "Node.js", iconName: "Node", level: 60, color: "#339933" },
      { name: "Express.js", iconName: "Express", level: 60, color: "#828282" },
      { name: "MongoDB", iconName: "Mongo", level: 50, color: "#47A248" },
      // { name: "PostgreSQL", iconName: "Postgres", level: 65, color: "#2196F3" },
      { name: "REST APIs", iconName: "Rest", level: 60, color: "#00c8ff" },
      { name: "JWT Auth", iconName: "Jwt", level: 50, color: "#fb015b" },
      { name: "Git / Version Control", iconName: "Git", level: 75, color: "#F05032" },
      { name: "Vercel", iconName: "Vercel", level: 70, color: "#2661FA" },
    ],
  },
];
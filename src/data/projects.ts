export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
  learnings: string[];
  className?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Developer Portfolio",
    description:
      "Modern animated portfolio built with Next.js, TypeScript and Tailwind CSS.",
    image: "/projects/portfolio.png",
    github: "#",
    live: "#",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    learnings: [
      "Scroll-driven animations with CSS animation-timeline",
      "Theme switching without flash using inline head scripts",
      "3D CSS card flip with backface-visibility",
      "IntersectionObserver for active nav tracking",
    ],
  },

  {
    id: 2,
    title: "AI Coding Agent",
    description:
      "Streaming AI coding assistant capable of editing files inside the browser.",
    image: "/projects/agent.png",
    github: "#",
    live: "#",
    technologies: ["React", "OpenAI", "TypeScript", "Express"],
    learnings: [
      "Streaming responses via Server-Sent Events (SSE)",
      "Managing async state with React hooks and refs",
      "Prompt engineering and token optimisation",
      "Sandboxed code execution with Web Workers",
    ],
  },

  {
    id: 3,
    title: "Water Factory System",
    description:
      "Production monitoring dashboard for water manufacturing workflow.",
    image: "/projects/water.png",
    github: "#",
    live: "#",
    technologies: ["React", "Node", "MongoDB", "Tailwind"],
    learnings: [
      "Real-time data polling with REST APIs",
      "Role-based authentication using JWT",
      "Responsive dashboard layout with CSS Grid",
      "MongoDB aggregation pipelines for metrics",
    ],
  },
];
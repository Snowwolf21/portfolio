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
    title: "RSS Feed Reader",
    description:
      "Personal project - A modern, feature-rich RSS feed reader built from scratch. Features include read/unread tracking, article saving, subscription management, authentication, and a premium UI with dark mode.",
    image: "/projects/rss-feed.png",
    github: "https://github.com/Snowwolf21/frontpage_feed_reader_main",
    live: "https://snowwolfrssfeed.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Redis"],
    learnings: [
      "Build a full stack web application using Next.js",
      "Authentication with JWT (JSON Web Tokens)",
      "Frontend Encryption and decryption using crypto-js",
      "State management with Zustand",
      "Parsing of RSS feeds"
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
      "Parsing of RSS feeds"
    ],
  },

  {
    id: 3,
    title: "Stock Inventory Management System",
    description:
      "Web-based stock inventory management system built to streamline stock control and order processing.",
    image: "/projects/stock.png",
    github: "https://github.com/Snowwolf21/stock-management",
    live: "https://stock-management-main.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
    learnings: [
      "Real-time data polling with REST APIs",
      "Role-based authentication using JWT",
      "Responsive dashboard layout with CSS Grid",
      "MongoDB aggregation pipelines for metrics",
    ],
  },
];
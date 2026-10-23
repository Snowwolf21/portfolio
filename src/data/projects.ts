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
    title: "Stock Inventory Management",
    description:
      "A web-based stock inventory management system designed to optimize stock control and streamline order processing. It's an highly interactive and responsive user interface built with React and Next.js App Router. It incorporates strongly typed, reusable UI components built with TypeScript to ensure code reliability, and integrates modern navigation systems with modular layouts.",
    image: "/projects/stock-inventory.png", 
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

    {
    id: 2,
    title: "RSS Feed Reader",
    description:
      "A modern, feature-rich RSS feed reader built from scratch. Features include read/unread tracking, article saving, subscription management, authentication, and a premium UI with dark mode.",
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
    id: 3,
    title: "Personal Finance Dashboard",
    description:
      "Personal Finance Management built to track income and expenses, analyse spending patterns, and manage personal budgets.",
    image: "/projects/personal-finance.png",
    github: "https://github.com/Snowwolf21/personal-finance",
    live: "https://personal-finance-snowwolfdev.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
    learnings: [
            "Url State Driven Synchronization",
            "Responsive CSS Grid Table Design",
            "State Management with Zustand",
    ],
  }
];
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
    title: "Stock Inventory Management System",
    description:
      "Web-based stock inventory management system built to streamline stock control and order processing. Developed highly interactive, responsive interfaces using React and Next.js App Router. Built strongly typed, reusable UI components leveraging TypeScript to ensure code reliability. Integrated responsive navigation systems and modernized layouts with modular design. Managed collaborative workflows using Git and GitHub branch-protection methodologies.",
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
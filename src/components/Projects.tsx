"use client";
import Link from "next/link";
import  TechIcon  from "./Tech-Icon";
 import type { TechName } from "@/lib/tech-icon";
interface Project {
  title: string;
  description: string;
  category: "Frontend" | "Full-Stack";
  tags: TechName[];
  githubUrl: string | null;
  liveUrl: string | null;
  emoji: string;
  highlights: string[];
}

export default function Projects() {

  const projectsData: Project[] = [
    {
      title: "CollabWorkspace",
      description: "A real-time Kanban board where multiple users can drag tasks across columns simultaneously. Built to learn how far I could push WebSocket state sync before it breaks.",
      category: "Full-Stack",
      tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      githubUrl: null, // TODO: Replace with real GitHub URL
      liveUrl: null,   // TODO: Replace with real live URL
      emoji: "📋",
      highlights: [
        "Designed the MongoDB schema for multi-board workspaces with per-user permissions — had to restructure twice when nested arrays hit update performance walls",
        "Implemented optimistic UI updates for drag-and-drop, then reconciled with Socket.io server state to handle race conditions between concurrent users",
        "Built JWT auth from scratch with HTTP-only cookies instead of using a library — to actually understand how session security works under the hood"
      ]
    },
    {
      title: "DevFeed Hub",
      description: "A developer news aggregator that pulls from multiple RSS and API sources into a single dashboard. Started as a tool I actually wanted for my own morning reading.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Framer Motion"],
      githubUrl: null, // TODO: Replace with real GitHub URL
      liveUrl: null,   // TODO: Replace with real live URL
      emoji: "⚡",
      highlights: [
        "Added client-side caching with stale-while-revalidate pattern to prevent redundant API calls on tab switches — reduced network requests noticeably during daily use",
        "Built a responsive grid layout that adapts between 1, 2, and 3 columns using CSS container queries instead of media queries, so the cards respond to their container, not the viewport",
        "Implemented a bookmarks system persisted to localStorage with an undo-delete pattern — small feature but it taught me a lot about optimistic state management"
      ]
    },
    {
      title: "Nova Dashboard",
      description: "An admin dashboard with interactive charts, inventory tracking, and client management. Built to practice complex state coordination across deeply nested components.",
      category: "Frontend",
      tags: ["React", "Tailwind CSS", "Recharts", "Context API", "JavaScript"],
      githubUrl: null, // TODO: Replace with real GitHub URL
      liveUrl: null,   // TODO: Replace with real live URL
      emoji: "📊",
      highlights: [
        "Wired up Recharts with Context API so that clicking a chart segment filters the inventory table below it — learned the hard way that you need to debounce rapid filter state changes",
        "Implemented keyboard navigation across all interactive elements and tested with VoiceOver — discovered that most custom dropdown libraries silently break screen reader announcements",
        "Designed a nested filter system for inventory categories with URL-synced query params, so users can share filtered views by just copying the URL"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            What I&apos;ve Built
          </h2>
          <div className="h-1.5 w-16 bg-accent rounded-full mb-6" />
          <p className=" text-base text-secondary max-w-xl leading-relaxed">
            Real projects where I solved real problems. Each one taught me something I couldn&apos;t learn from a tutorial.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <article
              key={project.title}
              className="glass-card border border-card-border rounded-3xl p-6 flex flex-col h-full scroll-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Icon & Category */}
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center text-2xl shadow-inner">
                  {project.emoji}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-card-border bg-background/50 text-secondary">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
                {project.title}
              </h3>
              <p className="text-base text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights List */}
              <div className="mb-6 grow">
                <h4 className="text-sm uppercase font-bold tracking-wider text-secondary/80 mb-2">
                  What I Learned
                </h4>
                <ul className="space-y-2 text-sm text-secondary leading-relaxed">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-semibold px-2.5 py-1 rounded-lg bg-secondary/5 text-secondary border border-card-border/50 hover:border-accent/20 hover:text-accent transition-colors duration-300"
                  >
                    <TechIcon
                      name={tag}
                      showLabel
                      className="h-4 w-4"
                    />
                   
                  </span>
                  
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-card-border mt-auto">
                {project.githubUrl ? (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-accent transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary/50">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Coming Soon
                  </span>
                )}
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors duration-300 ml-auto"
                  >
                    Live Preview
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-secondary/50 ml-auto">
                    Deploying Soon
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

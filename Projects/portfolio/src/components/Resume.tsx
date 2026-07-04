"use client";

import Link from "next/link";
import  TechIcon  from "./Tech-Icon";
 import type { TechName } from "@/lib/tech-icon";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  bullets: string[];
}

export default function Resume() {
  const experiences: ExperienceItem[] = [
    {
      role: "Frontend Web Developer",
      company: "Freelance & Contract Work",
      duration: "2024 - Present",
      description: "Building responsive, interactive web applications for small businesses and startups. Responsible for the full frontend lifecycle — from design handoff to deployed product.",
      bullets: [
        "Rebuilt a local business landing page from a Figma mockup using React and Tailwind CSS, cutting the original load time by implementing code-splitting and lazy-loaded image components",
        "Implemented semantic HTML structure and proper heading hierarchy across client projects, which directly improved their Lighthouse accessibility and SEO audit scores",
        "Worked directly with non-technical clients to translate feature requests into component specs, managing scope and setting realistic delivery timelines"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Web Development Agency",
      duration: "2023 - 2024",
      description: "Contributed to frontend feature development across multiple client projects. Learned production workflow patterns: code review, branch strategy, and staging deployments.",
      bullets: [
        "Migrated a legacy JavaScript codebase to TypeScript over several sprints — identified and fixed type-safety gaps that had been causing silent runtime errors in production",
        "Built custom modal, drawer, and multi-level navigation components that the team continued using across other client projects after I left",
        "Tested cross-browser rendering consistency and keyboard navigation, catching tab-order issues that affected screen reader users on Safari"
      ]
    }
  ];

 

const skillCategories: {
  name: string;
  skills: TechName[];
}[] = [
  {
    name: "Frontend Core",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Next.js",
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    name: "Tooling & Workflow",
    skills: [
      "Git & GitHub",
      "npm",
      "Figma",
      "VS Code",
      "Vercel",
      "ESLint",
    ],
  },
];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            The Journey So Far
          </h2>
          <div className="h-1.5 w-16 bg-accent rounded-full mb-6" />
          <p className="text-base text-secondary max-w-2xl leading-relaxed">
            Professional experience, self-taught backend growth, and the tools I use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Experience Timeline Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="relative pl-6 border-l border-card-border/80 flex flex-col gap-10">
              {experiences.map((exp, index) => (
                <div key={exp.role} className="relative scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-31px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent border-[2.5px] border-background ring-4 ring-accent-glow" />
                  
                  {/* Card wrapper */}
                  <div className="glass-panel border border-card-border rounded-2xl p-6 md:p-8 hover:border-accent/25 transition-all duration-300">
                    <span className="text-sm font-bold tracking-widest text-accent uppercase font-mono">
                      {exp.duration}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-1.5">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-secondary mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-base text-secondary leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2.5 text-base text-secondary leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-accent mt-1 text-[8px]">▪</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Self-Directed Learning — Visually Distinct Card */}
            <div className="scroll-reveal" style={{ animationDelay: "200ms" }}>
              <div className="glass-panel border border-emerald-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1 bg-emerald-500/40 rounded-full" />
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase font-mono">
                    Late 2025 - Present
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                    Self-Directed
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-1.5">
                  Full-Stack Learning Journey
                </h3>
                <h4 className="text-base font-semibold text-secondary mb-4">
                  Independent Study & Project-Based Learning
                </h4>
                <p className="text-base text-secondary leading-relaxed mb-4">
                  Teaching myself backend development through building, breaking, and rebuilding real projects — not just following tutorials.
                </p>
                <ul className="space-y-2.5 text-base text-secondary leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 mt-1 text-[8px]">▪</span>
                    <span>Built a complete REST API with Express.js and MongoDB for the CollabWorkspace project — including data validation, error handling middleware, and proper HTTP status codes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 mt-1 text-[8px]">▪</span>
                    <span>Implemented JWT authentication with HTTP-only cookies from scratch to understand session management before reaching for libraries like NextAuth</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 mt-1 text-[8px]">▪</span>
                    <span>Currently exploring Next.js Server Components and API routes to handle server-side data fetching and mutations without a separate backend</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills & Resume Download Column */}
          <div className="lg:col-span-4 flex flex-col gap-8 scroll-reveal" style={{ animationDelay: "200ms" }}>
            <div className="glass-panel border border-card-border rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <span>🛠️</span> Tools I Use
              </h3>

              <div className="flex flex-col gap-6">
                {skillCategories.map((cat) => (
                  
                  <div key={cat.name}>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-secondary mb-3">
                      {cat.name}
                    </h4>
                   <div className="flex flex-wrap gap-2">
  {cat.skills.map((skill) => (
    <div
      key={skill}
      className="text-sm rounded-xl border border-card-border bg-background/60 px-3 py-2 transition-all duration-300 hover:border-accent"
    >
      <TechIcon
        name={skill}
        showLabel
        className="h-5 w-5"
      />
    </div>
  ))}
</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Box */}
            <div className="glass-panel border border-card-border rounded-3xl p-6 md:p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 z-0 bg-linear-r opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 from-accent to-transparent" />
              
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Download Resume
              </h3>
              <p className="text-xs text-secondary mb-6 leading-relaxed">
                Single-page PDF with my experience, projects, and contact details — formatted for quick review.
              </p>
              
              <button
                // href="#download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Add your real resume PDF link here! Place the file in /public/resume.pdf and update the href.");
                }}
                className="inline-flex relative z-10 items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md shadow-accent/10 hover:shadow-accent/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

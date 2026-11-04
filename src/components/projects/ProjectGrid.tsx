"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronDown } from "lucide-react";

const INITIAL_COUNT = 2;
const STAGGER = 0.12; // seconds between one card and the next
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProjectGrid() {
  const [showAll, setShowAll] = useState(false);
  const reduceMotion = useReducedMotion();

  const firstProjects = projects.slice(0, INITIAL_COUNT);
  const extraProjects = projects.slice(INITIAL_COUNT);
  const hasMoreProjects = extraProjects.length > 0;

  // `custom` is the card's position in its group, which becomes its delay,
  // so cards appear one after another instead of all at once.
  const cardVariants: Variants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease,
        delay: reduceMotion ? 0 : index * STAGGER,
      },
    }),
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : 12,
      transition: { duration: reduceMotion ? 0 : 0.5},
    },
  };

  // Plays each time a card scrolls into view (once per mount), so the
  // sequence is seen even if the projects section is below the fold.
  const reveal = {
    variants: cardVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
  } as const;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* `layout` lets the grid and button glide when cards are added/removed */}
      <motion.div
        layout={!reduceMotion}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease }}
        className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 md:gap-8 w-full"
      >
        {/* On every refresh: cards appear one after another */}
        {firstProjects.map((project, index) => (
          <motion.div key={project.id} custom={index} {...reveal}>
            <ProjectCard project={project} />
          </motion.div>
        ))}

        {/* "Show More": the extra cards appear one after another too */}
        <AnimatePresence>
          {showAll &&
            extraProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                exit="exit"
                layout={!reduceMotion}
                {...reveal}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {hasMoreProjects && (
        <motion.button
          layout={!reduceMotion}
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          transition={{ duration: 0.3, ease }}
          className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/15 hover:border-accent/40 bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium rounded-xl transition-colors duration-300 cursor-pointer text-sm"
        >
          <span>{showAll ? "Show Less" : "Show More"}</span>
          <motion.span
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease }}
            className="inline-flex"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      )}
    </div>
  );
}
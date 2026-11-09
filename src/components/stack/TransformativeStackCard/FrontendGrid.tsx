"use client";

import React, { useMemo } from "react";
import { MotionConfig, motion } from "framer-motion";
import { stack } from "@/data/stack";
import { getSkillIcon } from "./IconMapper";
import { createSkillVariants } from "./skill-motion";

interface Props {
  /** true = this side is showing AND the card is on screen. */
  isActive?: boolean;
  /** Match your card's flip duration in seconds (duration-700 = 0.7). */
  flipDuration?: number;
}

export default function FrontendGrid({ isActive = true, flipDuration = 0.7 }: Props) {
  const frontendSkills = stack.find((item) => item.title === "Frontend")?.items || [];
  const { grid, skill: skillVariants } = useMemo(
    () => createSkillVariants(flipDuration),
    [flipDuration]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="h-full flex flex-col justify-between p-4 ">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-md md:text-lg lg:text-lg font-medium tracking-wider text-foreground">
              Frontend Stack
            </h3>
            <span className="text-xs font-bold px-3 py-1 rounded-full border border-sky-400/30 text-sky-400 bg-sky-400/10 uppercase tracking-widest">
              Client
            </span>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 "
            variants={grid}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
          >
            {frontendSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="p-2 rounded-lg border border-accent/30 bg-amber-400 dark:bg-zinc-900/50 hover:border-accent-hover/20 hover:bg-white/10 dark:hover:bg-accent-hover/20 transition-[border-color,background-color,box-shadow] duration-300 group flex flex-col  h-auto  shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                      {getSkillIcon(skill.iconName, "w-4 h-4 sm:w-5 sm:h-5", skill.color)}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors truncate max-w-22.5 sm:max-w-none">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
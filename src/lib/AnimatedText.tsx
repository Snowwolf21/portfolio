"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

interface Props {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
}

// Each word slides up out of a "mask" (overflow-hidden) one after another.
const word: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.6, ease: EASE } },
};

export default function AnimatedText({
  text,
  as = "p",
  className,
  delay = 0,
  stagger = 0.04,
}: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  const Component = motion[as] as typeof motion.p;
  const words = text.split(" ");

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {/* Screen readers get the full sentence once, not word fragments */}
      <span className="sr-only">{text}</span>

      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden="true"
          className="mr-[0.25em] inline-block overflow-hidden py-[0.08em] my-[-0.08em] align-bottom"
        >
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
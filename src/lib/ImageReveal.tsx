"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";

interface Props {
  children: ReactNode;
  className?: string;
  /** Adds the gentle idle float from your globals.css (.animate-float) */
  float?: boolean;
}

// The frame "wipes" open from the top while the image inside settles from
// slightly zoomed-in to normal size. Only clip-path and transform animate,
// so it stays smooth and causes no layout shift.
export default function ImageReveal({ children, className = "", float = false }: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={float ? "animate-float" : undefined}>
      <motion.div
        className={`overflow-hidden ${className}`}
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
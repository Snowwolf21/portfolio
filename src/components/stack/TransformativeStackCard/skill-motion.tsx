// "use client";

// import { useEffect, useState, useRef } from "react";

// export function useStackAnimation() {
//   const [isAnimated, setIsAnimated] = useState(false);
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const currentElement = elementRef.current;
//     if (!currentElement) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Trigger animation when the section is 40% visible in the viewport
//         if (entry.isIntersecting) {
//           setIsAnimated(true);
//         } else {
//           // Optional: Reset it when scrolling away so it flips again next time
//           setIsAnimated(false); 
//         }
//       },
//       { 
//         threshold: 0.4 // Adjust this to control how far down they must scroll to flip
//       }
//     );

//     observer.observe(currentElement);

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, []);

//   return { elementRef, isAnimated };
// }



import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Shared by FrontendGrid and BackendGrid so both sides animate identically.
 * flipDuration = the card's flip time in seconds (duration-700 = 0.7).
 */
export function createSkillVariants(flipDuration: number) {
  // Parent: starts each skill 0.07s after the previous one, beginning once
  // the face is about halfway through turning toward the viewer.
  const grid: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: flipDuration * 0.5 },
    },
  };

  // Child: pops in. The reset to "hidden" waits for the flip to finish, so
  // skills don't vanish while the face is still turning away.
  const skill: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.92,
      transition: { duration: 0, delay: flipDuration },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: EASE },
    },
  };

  return { grid, skill };
}
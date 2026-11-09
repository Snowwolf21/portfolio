import type { Variants } from "framer-motion";

// One easing + one set of distances for the whole site keeps motion consistent.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Play once, when ~25% of the element is visible.
export const VIEWPORT = { once: true, amount: 0.25 } as const;

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const slideIn = (from: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: from === "left" ? -40 : 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
});
"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // gap between each button
      delayChildren: 0.5,    // wait for the headline and text to appear first
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroButtons() {
  const socials = [
  { name: "GitHub", href: "https://github.com/snowwolf21", Icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/engakinkunmi", Icon: FaLinkedinIn },
  { name: "X", href: "https://x.com/engakinkunmi", Icon: FaTwitter },
]
  return (
    <motion.div
      className="flex justify-center lg:justify-start flex-wrap gap-4 pt-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
     
     <motion.ul
  className="flex items-center gap-3"
  variants={container}
  initial="hidden"
  animate="visible"
>
  {socials.map(({ name, href, Icon }) => (
    <motion.li key={name} variants={item}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        title={name}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-all hover:scale-110 hover:border-accent-glow/30"
      >
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
      </a>
    </motion.li>
  ))}
</motion.ul>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden text-foreground"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 p-4 mt-40 sm:mt-48 lg:mt-56 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -32, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
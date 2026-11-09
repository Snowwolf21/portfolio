"use client";

import { MotionConfig, motion } from "framer-motion";
import Container from "../layout/Container";
import AboutInfo from "./AboutInfo";
import AboutProfile from "./AboutProfile";
import SectionHeading from "../ui/SectionHeading";
import { about } from "@/data/about";
import { slideIn, staggerContainer, VIEWPORT } from "@/lib/motion";

export default function About() {
  return (
    // reducedMotion="user" automatically removes movement for people who
    // enabled "reduce motion" in their OS, so you don't handle it by hand here.
    <MotionConfig reducedMotion="user">
      <section id="about" className="py-20">
        <Container>
          <SectionHeading title={about.title} subtitle={about.subtitle} />

          <motion.div
            className="mt-4 grid items-center gap-4 md:mt-10 lg:grid-cols-2"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div variants={slideIn("left")}>
              <AboutInfo />
            </motion.div>

            <motion.div variants={slideIn("right")}>
              <AboutProfile />
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </MotionConfig>
  );
}
"use client";

import StackFront from "./StackFront";
import StackBack from "./StackBack";
import { StackCardProps } from "../../lib/types";
import { useStackAnimation } from "./useStackAnimation";

export default function TransformativeStackCard({
  coreStack,
  backendStack,
  showcaseImageSrc,
}: StackCardProps) {
  const { cardRef, isFlipped } = useStackAnimation();

  return (
    <div
      ref={cardRef}
      className="lg:col-span-5 w-full h-145 perspective-1000"
    >
      <div
        className={`relative w-full h-full transition-transform duration-3000 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
       <StackFront showcaseImageSrc={showcaseImageSrc} />

        <StackBack
          coreStack={coreStack}
          backendStack={backendStack}
        />
      </div>
    </div>
  );
}
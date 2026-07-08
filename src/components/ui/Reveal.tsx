"use client";

import {ReactNode} from "react";

import { useIntersection } from "@/hooks/useIntersection";

import { reveal, fadeUp } from "@/lib/animations";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Reveal({children,className}: Props) {
  const { ref, visible } = useIntersection();

  return (
    <div ref={ref} className={`${className} ${ visible ? reveal : fadeUp}`}>
      {children}
    </div>
  );
}
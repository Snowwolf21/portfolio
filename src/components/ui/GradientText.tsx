import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: Props) {
  return (
    <span
      className={`
        bg-accent
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}
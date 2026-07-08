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
        bg-linear-to-r
        from-cyan-400
        via-blue-500
        to-violet-500
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
}
import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-card-border
        bg-background
        shadow-lg
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
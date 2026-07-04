"use client";

import { techIcons, type TechName } from "@/lib/tech-icon";

interface TechIconProps {
  name: TechName;
  className?: string;
  showLabel?: boolean;
}

export default function TechIcon({
  name,
  className = "",
  showLabel = false,
}: TechIconProps) {
  const { icon: Icon, color } = techIcons[name];

  if (showLabel) {
    return (
      <span className="inline-flex items-center gap-2">
        <Icon className={`${color} ${className}`} />
        <span>{name}</span>
      </span>
    );
  }

  return <Icon className={`${color} ${className}`} />;
}
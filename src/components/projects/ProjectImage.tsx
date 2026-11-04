import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Props {
  src: string;
  title: string;
  learnings: string[];
  isActive: boolean;
}

export default function ProjectImage({
  src,
  title,
  learnings,
  isActive,
}: Props) {
  return (
    <div className="relative h-70  overflow-hidden rounded-md">
      <Image
        src={src}
        alt={title}
        fill
        loading="eager"
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-fit p-2 rounded-md transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}
        `}
      />

    </div>
  );
}
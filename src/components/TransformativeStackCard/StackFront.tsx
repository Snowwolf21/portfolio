import Image from "next/image";

interface Props {
  showcaseImageSrc: string;
  className?: string;
}

export default function StackFront({
  showcaseImageSrc,
  className,
}: Props) {
  return (
    <div className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass-panel border border-card-border bg-zinc-900 shadow-2xl ${className}`}>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={showcaseImageSrc}
          alt="Developer Workspace Showcase"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent" />
      </div>
    </div>
  );
}
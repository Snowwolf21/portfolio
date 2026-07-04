"use client"
import Image, { StaticImageData } from "next/image";

interface IconProps {
  src: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export  function Icon({
  src,
  alt,
  width = 32,
  height = 32,
  className = "",
}: IconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );
}
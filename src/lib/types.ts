export interface TechItem {
  name: string;
  level?: string;
  status?: string;
  glow: string;
  color?: string;
}

export interface StackCardProps {
  coreStack: TechItem[];
  backendStack: TechItem[];
  showcaseImageSrc: string;
}
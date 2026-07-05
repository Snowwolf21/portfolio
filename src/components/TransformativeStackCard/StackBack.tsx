import FrontendGrid from "./FrontendGrid";
import BackendGrid from "./BackendGrid";
import WindowHeader from "./WindowHeader";
import { TechItem } from "../../lib/types";

interface Props {
  coreStack: TechItem[];
  backendStack: TechItem[];
  className?: string;
}

export default function StackBack({
  coreStack,
  backendStack,
  className,
}: Props) {
  return (
    <div className={`absolute inset-0 rotate-y-180 backface-hidden glass-panel border border-card-border rounded-3xl p-6 md:p-8 shadow-2xl bg-zinc-900/95 overflow-y-auto ${className}`}>

      <WindowHeader />

      <FrontendGrid stack={coreStack} />

      <BackendGrid stack={backendStack} />

      <div className="absolute bottom-10 left-10 mt-6 pt-4 border-t border-card-border font-mono text-xs">
        <span className="text-accent">export</span>{" "}
        <span className="text-blue-400">default</span>{" "}
        SnowWolf;
      </div>

    </div>
  );
}
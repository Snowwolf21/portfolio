import StackHeader from "./StackHeader";
import CodeFooter from "./CodeFooter";
import TransformativeStackCard from "./TransformativeStackCard";

export default function StackSection() {
  return (
    <section id="stack" className="py-20 relative overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-glow/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <StackHeader />
        
        <div className="mt-12">
          <TransformativeStackCard />
        </div>
        
        <div className="flex justify-center mt-12">
          <CodeFooter />
        </div>
      </div>
    </section>
  );
}
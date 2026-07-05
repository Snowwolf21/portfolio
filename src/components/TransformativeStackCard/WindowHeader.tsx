export default function WindowHeader() {
  return (
    <div className="flex items-center gap-1.5 border-b border-card-border pb-4 mb-6">
      <span className="w-3 h-3 rounded-full bg-red-400/80" />
      <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
      <span className="w-3 h-3 rounded-full bg-green-400/80" />

      <span className="text-sm text-secondary font-mono ml-4">
        stack.config.ts
      </span>
    </div>
  );
}
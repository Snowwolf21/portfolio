export default function Hero() {

  const coreStack = [
    { name: "React", level: "Primary", color: "from-cyan-400 to-blue-500", glow: "rgba(6, 182, 212, 0.4)" },
    { name: "TypeScript", level: "Daily Driver", color: "from-blue-500 to-indigo-600", glow: "rgba(59, 130, 246, 0.4)" },
    { name: "Tailwind CSS", level: "Primary", color: "from-teal-400 to-cyan-500", glow: "rgba(20, 184, 166, 0.4)" },
    { name: "JavaScript", level: "Since Day 1", color: "from-yellow-400 to-amber-500", glow: "rgba(234, 179, 8, 0.4)" },
  ];

  const backendStack = [
    { name: "Node.js", status: "Building With", color: "from-green-400 to-emerald-600", glow: "rgba(74, 222, 128, 0.3)" },
    { name: "Express.js", status: "Building With", color: "from-gray-400 to-slate-600", glow: "rgba(148, 163, 184, 0.3)" },
    { name: "MongoDB", status: "Building With", color: "from-emerald-500 to-green-600", glow: "rgba(16, 185, 129, 0.3)" },
  ];

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glowing Ambient Orbs */}
      <div className="glow-spot top-1/4 left-1/10" style={{ transform: "translate(-50%, -50%)" }} />
      <div className="glow-spot bottom-1/4 right-1/10" style={{ transform: "translate(50%, 50%)" }} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Write-up Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Frontend Dev · Going Full-Stack
          </div>
          
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
           I specialize in turning complex product ideas into intuitive, high-performance user interfaces while growing into full-stack engineering.
          </h1>
          
          <p className="text-base text-secondary leading-relaxed mb-6 max-w-xl">
            I&apos;m <span className="text-foreground font-semibold">Akinkunmi</span> — a frontend developer who ships responsive, accessible UIs with <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">TypeScript</span>, and <span className="text-foreground font-medium">Tailwind CSS</span>. I obsess over the details that make products feel polished: smooth transitions, clean component APIs, and layouts that just work on every screen.
          </p>

          <p className="text-base text-secondary leading-relaxed mb-10 max-w-xl">
            Recently, I&apos;ve been building full-stack projects with <span className="text-foreground font-medium">Node.js</span>, <span className="text-foreground font-medium">Express</span>, and <span className="text-foreground font-medium">MongoDB</span> — not because it&apos;s trendy, but because I got tired of handing off half-finished work to a backend team.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover active:scale-[0.98] transition-all duration-200 text-center shadow-lg shadow-accent/25 hover:shadow-accent/40 cursor-pointer"
            >
              See What I&apos;ve Built
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl border border-card-border font-medium hover:bg-accent/10 hover:border-accent hover:text-accent active:scale-[0.98] transition-all duration-200 text-center glass-panel cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Dynamic Stack Visual Board */}
        <div className="lg:col-span-5 w-full scroll-reveal">
          <div className="glass-panel border border-card-border rounded-3xl p-6 md:p-8 shadow-2xl relative">
            <div className="absolute -top-3 -right-3 h-10 w-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent animate-bounce">
              ⚡
            </div>
            
            {/* Window header */}
            <div className="flex items-center gap-1.5 border-b border-card-border pb-4 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="text-sm text-secondary font-mono ml-4">stack.config.ts</span>
            </div>

            {/* Core Frontend Tech */}
            <div className="mb-6">
              <h3 className="text-xs uppercase font-bold tracking-wider text-secondary mb-3">Frontend — Where I Live</h3>
              <div className="grid grid-cols-2 gap-3">
                {coreStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-2xl bg-background/50 border border-card-border hover:border-accent/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
                    style={{
                      boxShadow: `0 0 15px -10px ${tech.glow}`
                    }}
                  >
                    {/* Hover light highlight */}
                    <div className="absolute inset-0 bg-linear-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-accent to-transparent" />
                    
                    <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                    <span className="text-[10px] text-secondary mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expanding Stack */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-secondary">Backend — Expanding Into</h3>
                <span className="text-[10px] text-emerald-500 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Shipped Projects
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {backendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-2xl bg-background/50 border border-card-border hover:border-emerald-500/20 transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                    style={{
                      boxShadow: `0 0 15px -10px ${tech.glow}`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full bg-linear-r-br ${tech.color}`} />
                      <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                    </div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-card-border group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors duration-300 font-mono">
                      {tech.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual bottom code signature */}
            <div className="mt-6 pt-4 border-t border-card-border font-mono text-[11px] text-secondary/80">
              <span className="text-accent">export</span> <span className="text-blue-400">default</span> <span className="text-foreground">AlexDev</span>;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large glows */}
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl animate-blob" />
      <div className="absolute right-[8%] top-[16%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-[8%] left-[35%] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-blob animation-delay-4000" />

      {/* Small particles */}
      <span className="absolute left-[10%] top-[22%] h-2 w-2 rounded-full bg-cyan-400/80 shadow-[0_0_18px_rgba(34,211,238,0.9)] animate-particle" />
      <span className="absolute left-[20%] top-[40%] h-1.5 w-1.5 rounded-full bg-violet-400/80 shadow-[0_0_18px_rgba(167,139,250,0.9)] animate-particle animation-delay-1000" />
      <span className="absolute left-[35%] top-[18%] h-2 w-2 rounded-full bg-indigo-400/80 shadow-[0_0_18px_rgba(129,140,248,0.9)] animate-particle animation-delay-2000" />
      <span className="absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-fuchsia-400/80 shadow-[0_0_18px_rgba(232,121,249,0.9)] animate-particle" />
      <span className="absolute right-[28%] top-[48%] h-1.5 w-1.5 rounded-full bg-sky-400/80 shadow-[0_0_18px_rgba(56,189,248,0.9)] animate-particle animation-delay-3000" />
      <span className="absolute right-[10%] bottom-[22%] h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(103,232,249,0.9)] animate-particle animation-delay-2000" />
      <span className="absolute left-[15%] bottom-[18%] h-2 w-2 rounded-full bg-violet-300/80 shadow-[0_0_18px_rgba(196,181,253,0.9)] animate-particle animation-delay-4000" />
      <span className="absolute left-[48%] bottom-[12%] h-1.5 w-1.5 rounded-full bg-indigo-300/80 shadow-[0_0_18px_rgba(165,180,252,0.9)] animate-particle animation-delay-1000" />

      {/* Grid fade */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[72px_72px]" />
    </div>
  );
}
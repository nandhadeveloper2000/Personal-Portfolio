"use client";

type PremiumFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PremiumFrame({
  children,
  className = "",
}: PremiumFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[30px] ${className}`}
    >
      <div className="absolute inset-0 rounded-[30px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.28),rgba(236,72,153,0.26),rgba(59,130,246,0.28),rgba(99,102,241,0.35))] opacity-70 blur-xl transition duration-700 group-hover:opacity-100" />

      <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-[30px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.14),transparent_15%,transparent_55%,rgba(255,255,255,0.10),transparent_80%,rgba(255,255,255,0.14))]" />

      <div className="relative m-px rounded-[29px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.64))] backdrop-blur-2xl">
        <div className="absolute inset-0 rounded-[29px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_28%)]" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
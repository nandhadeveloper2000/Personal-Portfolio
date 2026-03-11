"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

type SocialItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  gradient: string;
  description: string;
};

const socialItems: SocialItem[] = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    gradient: "from-indigo-500 via-violet-500 to-cyan-400",
    description: personalInfo.email,
  },
  {
    label: "Call",
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    icon: FiPhone,
    gradient: "from-emerald-500 via-teal-500 to-green-400",
    description: personalInfo.phone,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FiGithub,
    external: true,
    gradient: "from-slate-700 via-slate-800 to-slate-950",
    description: "View code profile",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FiLinkedin,
    external: true,
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    description: "Professional profile",
  },
];

function MagneticWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 14,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 14,
    mass: 0.2,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    x.set(relX * 0.18);
    y.set(relY * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SidebarLink({ item }: { item: SocialItem }) {
  const Icon = item.icon;

  const content = (
    <div className="group relative flex w-18.5 items-center gap-3 overflow-hidden rounded-[22px] border border-white/10 bg-white/5 px-3 py-3 text-slate-300 backdrop-blur-2xl transition-all duration-500 hover:w-60 hover:border-white/20 hover:bg-white/8 hover:text-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <span className="pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,transparent_65%,rgba(255,255,255,0.08))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-px rounded-[21px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_30%)] opacity-80" />

      <span
        className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${item.gradient} text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)]`}
      >
        <Icon className="h-5 w-5" />
      </span>

      <span className="relative z-10 flex min-w-0 flex-col overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="text-sm font-semibold text-white">{item.label}</span>
        <span className="text-xs text-slate-400">{item.description}</span>
      </span>
    </div>
  );

  if (item.external) {
    return (
      <MagneticWrapper className="flex justify-start">
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="block"
        >
          {content}
        </a>
      </MagneticWrapper>
    );
  }

  return (
    <MagneticWrapper className="flex justify-start">
      <a href={item.href} aria-label={item.label} className="block">
        {content}
      </a>
    </MagneticWrapper>
  );
}

export default function SocialSidebar() {
  return (
    <>
      {/* Desktop Left Sidebar */}
      <div className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 xl:block">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[34px] bg-[radial-gradient(circle,rgba(99,102,241,0.20),transparent_50%)] blur-3xl" />
          <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/45 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition-all duration-500 hover:border-white/15 hover:shadow-[0_35px_110px_rgba(30,41,59,0.55)]">
            <div className="absolute inset-0 rounded-[30px] p-px">
              <div className="h-full w-full rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03),rgba(168,85,247,0.18),rgba(59,130,246,0.16))]" />
            </div>

            <div className="pointer-events-none absolute inset-px rounded-[29px] bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.60))]" />
            <div className="pointer-events-none absolute inset-px rounded-[29px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.14),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />

            <div className="relative flex flex-col items-start gap-3">
              {socialItems.map((item) => (
                <SidebarLink key={item.label} item={item} />
              ))}

              <div className="my-1 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Bottom Dock */}
      <div className="fixed inset-x-0 bottom-4 z-50 px-4 xl:hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-md"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-3xl">
            <div className="absolute inset-0 rounded-[28px] p-px">
              <div className="h-full w-full rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03),rgba(168,85,247,0.18),rgba(59,130,246,0.14))]" />
            </div>

            <div className="pointer-events-none absolute inset-px rounded-[27px] bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(2,6,23,0.68))]" />

            <div className="relative grid grid-cols-5 gap-2 p-2">
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FiMail className="h-5 w-5" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                aria-label="Call"
                className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FiPhone className="h-5 w-5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FiGithub className="h-5 w-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>

              <Link
                href="#contact"
                aria-label="Contact"
                className="flex h-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(99,102,241,1),rgba(168,85,247,1),rgba(236,72,153,1))] text-white shadow-[0_14px_34px_rgba(139,92,246,0.35)]"
              >
                <FiSend className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
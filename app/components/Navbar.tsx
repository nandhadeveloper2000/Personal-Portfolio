"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineStatusOnline,
  HiOutlineX,
} from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

type NavItem = {
  label: string;
  href: string;
  id: string;
};

const navLinks: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

type MagneticState = {
  x: number;
  y: number;
};

function MagneticNavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [magnetic, setMagnetic] = useState<MagneticState>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMagnetic({
      x: x * 0.14,
      y: y * 0.18,
    });
  };

  const resetMagnetic = () => {
    setMagnetic({ x: 0, y: 0 });
  };

  return (
    <Link
      ref={ref}
      href={item.href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMagnetic}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
        active ? "text-white" : "text-slate-300 hover:text-white"
      }`}
      style={{
        transform: `translate3d(${magnetic.x}px, ${magnetic.y}px, 0)`,
        transition:
          "transform 180ms cubic-bezier(0.22, 1, 0.36, 1), color 300ms ease, background-color 300ms ease",
      }}
    >
      <span
        className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
          active
            ? "bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.05)]"
            : "bg-transparent group-hover:bg-white/6"
        }`}
      />

      <span
        className={`absolute inset-x-4 bottom-0 h-px rounded-full bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 transition-all duration-300 ${
          active
            ? "opacity-100 shadow-[0_0_18px_rgba(168,85,247,0.9)]"
            : "opacity-0 group-hover:opacity-80"
        }`}
      />

      {active && (
        <>
          <span className="absolute left-1/2 top-[calc(100%-6px)] h-2 w-10 -translate-x-1/2 rounded-full bg-violet-400/70 blur-md" />
          <span className="absolute left-1/2 top-[calc(100%-2px)] h-1 w-8 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 shadow-[0_0_20px_rgba(192,132,252,0.95)]" />
        </>
      )}

      <span className="relative z-10">{item.label}</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateNavbarState = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollY > 16);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      let currentSection = "home";

      for (const item of navLinks) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const sectionTop = section.offsetTop - 180;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    const handleHashChange = () => {
      setOpen(false);
      updateNavbarState();
    };

    updateNavbarState();

    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div
              className={`group relative overflow-hidden rounded-[30px] border transition-all duration-500 ${
                scrolled
                  ? "border-white/15 bg-slate-950/70 shadow-[0_25px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
                  : "border-white/10 bg-slate-950/56 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[30px] p-px">
                <div className="absolute inset-0 rounded-[30px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.45),rgba(168,85,247,0.45),rgba(217,70,239,0.45),rgba(59,130,246,0.35),rgba(99,102,241,0.45))] opacity-70 blur-[2px] animate-[spin_8s_linear_infinite]" />
              </div>

              <div className="pointer-events-none absolute inset-px rounded-[29px] bg-slate-950/80" />
              <div className="pointer-events-none absolute inset-px rounded-[29px] bg-[radial-gradient(circle_at_left_top,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_right,rgba(217,70,239,0.14),transparent_22%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
              <div className="pointer-events-none absolute -left-10 top-3 h-24 w-28 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="pointer-events-none absolute right-0 top-2 h-24 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-1/3 h-20 w-32 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0.75 overflow-hidden rounded-t-[30px]">
                <div className="absolute inset-0 bg-white/5" />
                <div
                  className="h-full rounded-full bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 shadow-[0_0_18px_rgba(192,132,252,0.9)] transition-[width] duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                {/* Brand */}
                <Link
                  href="#home"
                  className="group/brand flex min-w-0 items-center gap-3"
                >
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(139,92,246,0.18)] transition-all duration-300 group-hover/brand:scale-105 group-hover/brand:shadow-[0_16px_45px_rgba(168,85,247,0.24)] sm:h-12 sm:w-12">
                    <span className="absolute inset-0 rounded-2xl bg-white/10 blur-md" />
                    <Image
                      src="/logo.png"
                      alt="Nandhakumar Logo"
                      width={45}
                      height={45}
                      priority
                      className="relative z-10 h-auto w-auto object-contain"
                    />
                  </div>

                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-sm font-semibold text-white sm:text-[15px]">
                      {personalInfo.name}
                    </p>
                    <p className="truncate text-[11px] text-slate-400 sm:text-xs">
                      {personalInfo.title}
                    </p>
                  </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-1 md:flex">
                  {navLinks.map((item) => (
                    <MagneticNavLink
                      key={item.id}
                      item={item}
                      active={activeSection === item.id}
                    />
                  ))}
                </nav>

                {/* Right actions */}
                <div className="hidden items-center gap-3 md:flex">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.08)] backdrop-blur-xl">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]" />
                    </span>
                    <HiOutlineStatusOnline className="h-4 w-4" />
                    <span>Available for work</span>
                  </div>

                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(139,92,246,0.38)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(217,70,239,0.35)]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10">Let&apos;s Talk</span>
                    <FiArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Mobile toggle */}
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  aria-label="Toggle navigation menu"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition duration-300 hover:bg-white/10 md:hidden"
                >
                  {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-10 -bottom-4 h-10 rounded-full bg-violet-500/10 blur-3xl" />
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="mt-3 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:hidden">
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_24%)]" />

                <div className="relative p-4">
                  {/* <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(139,92,246,0.20)]">
                        <span className="absolute inset-0 rounded-2xl bg-white/10 blur-md" />
                        <Image
                          src="/logo.png"
                          alt="Nandhakumar Logo"
                          width={40}
                          height={40}
                          className="relative z-10 object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {personalInfo.name}
                        </p>
                        <p className="truncate text-xs text-slate-400">
                          {personalInfo.title}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </span>
                      <span>Available for work</span>
                    </div>
                  </div> */}

                  <nav className="flex flex-col gap-1">
                    {navLinks.map((item) => {
                      const isActive = activeSection === item.id;

                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${
                            isActive
                              ? "bg-linear-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}

                    <Link
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.30)]"
                    >
                      <span>Let&apos;s Talk</span>
                      <FiArrowUpRight className="h-4 w-4" />
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="h-24 sm:h-24 md:h-28" />
    </>
  );
}
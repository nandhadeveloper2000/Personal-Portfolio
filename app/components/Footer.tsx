"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contactLinks = [
    {
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      icon: FiMail,
    },
    {
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      label: "Call",
      icon: FiPhone,
    },
    {
      href: personalInfo.github,
      label: "GitHub",
      icon: FiGithub,
      external: true,
    },
    {
      href: personalInfo.linkedin,
      label: "LinkedIn",
      icon: FiLinkedin,
      external: true,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Premium background layers */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.10),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />

      {/* glowing top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-fuchsia-500/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-fuchsia-500/10 via-indigo-500/5 to-transparent blur-2xl" />

      <div className="container-custom relative py-8 sm:py-10">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/5 px-6 py-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="space-y-3 text-center lg:text-left">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">
                  Nandhakumar S
                </span>
                . All rights reserved.
              </p>

              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            </div>

          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_30px_rgba(99,102,241,0.20)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 group-hover:scale-110 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={`group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_30px_rgba(168,85,247,0.22)] ${
                showScrollTop
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110 group-hover:border-fuchsia-400/30 group-hover:bg-fuchsia-500/10">
                <FiArrowUp className="h-4 w-4" />
              </span>
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpo,
} from "react-icons/si";

import { personalInfo } from "../data/portfolio";
import HeroParticles from "./HeroParticles";
import { FiEye } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-32 py-20 sm:py-20 lg:py-16"
    >
      <HeroParticles />

      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#030712]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.12),transparent_24%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px]" />

      <div className="container-custom relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="mt-6 text-3xl font-bold leading-[1.05] text-white sm:text-4xl lg:text-4xl xl:text-5xl">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-indigo-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            <br />
            {personalInfo.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.shortBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition duration-300 hover:scale-[1.03]"
            >
              View Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>


            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/8"
            >
              <FiEye className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              View Resume
            </Link>
                        <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm text-slate-400">Experience</p>
              <h3 className="mt-2 text-2xl font-bold text-white">1.5+ Years</h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm text-slate-400">Projects</p>
              <h3 className="mt-2 text-2xl font-bold text-white">10+</h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm text-slate-400">Deployment</p>
              <h3 className="mt-2 text-lg font-bold text-white">
                Render · Vercel
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mb-20 flex justify-center lg:mb-0 lg:justify-end">
          <div className="relative flex h-130 w-full max-w-150 items-center justify-center sm:h-150">
            {/* Glow */}
            <div className="absolute h-95 w-95 animate-pulse-slow rounded-full bg-linear-to-r from-indigo-500/30 via-violet-500/20 to-sky-500/30 blur-3xl sm:h-115 sm:w-115" />

            {/* Ring 1 */}
            <div className="absolute h-85 w-85 animate-spin-slow rounded-full border border-white/10 bg-white/3 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:h-107.5 sm:w-107.5" />

            {/* Ring 2 */}
            <div className="absolute h-75 w-75 animate-spin-reverse-slower rounded-full border border-indigo-300/15 sm:h-97.5 sm:w-97.5" />

            {/* Profile */}
            <div className="relative z-10 h-60 w-60 animate-float-gentle overflow-hidden rounded-full border-4 border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-90 sm:w-90">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-top scale-[1.02] transition duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* LEFT ICONS */}
            <div className="animate-float absolute left-3 top-24 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 backdrop-blur-md sm:left-10 sm:top-24">
              <FaReact className="text-3xl" />
            </div>

            <div className="animate-float absolute bottom-20 left-6 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-300 backdrop-blur-md sm:bottom-24 sm:left-14">
              <SiTypescript className="text-3xl" />
            </div>

            <div className="animate-float absolute left-16 top-8 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-3 text-sky-300 backdrop-blur-md sm:left-24 sm:top-8">
              <SiTailwindcss className="text-3xl" />
            </div>

            <div className="animate-float absolute bottom-36 left-0 rounded-2xl border border-neutral-400/20 bg-white/10 p-3 text-white backdrop-blur-md sm:bottom-40 sm:left-2">
              <SiExpo className="text-3xl" />
            </div>

            {/* RIGHT ICONS */}
            <div className="animate-float absolute right-3 top-24 rounded-2xl border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md sm:right-10 sm:top-24">
              <SiNextdotjs className="text-3xl" />
            </div>

            <div className="animate-float absolute bottom-20 right-6 rounded-2xl border border-green-400/20 bg-green-400/10 p-3 text-green-300 backdrop-blur-md sm:right-14 sm:bottom-24">
              <SiNodedotjs className="text-3xl" />
            </div>

            <div className="animate-float absolute right-16 top-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300 backdrop-blur-md sm:right-24 sm:top-8">
              <SiMongodb className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/portfolio";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const logos = [
  "/Globogreen-logo.png",
  "/why-global-logo-1.png",
  "/why-global-logo-1.png",
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-2 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[#030712]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.10),transparent_30%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="container-custom relative">
        <SectionTitle
          eyebrow="Experience"
          title="My journey in web and mobile development"
          description="A curated timeline of my professional work across full-stack web platforms, mobile applications, backend systems, and production-ready UI experiences."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-16"
        >
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-linear-to-b from-indigo-500/80 via-purple-500/70 to-pink-500/80 sm:block" />
          <div className="absolute left-5 top-0 hidden h-full w-0.5 blur-[6px] bg-linear-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50 sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((item: ExperienceItem, index: number) => (
              <motion.div
                key={`${item.company}-${item.role}-${index}`}
                variants={fadeUp}
              >
                <ExperienceCard item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const logoSrc = logos[index] || "/default-logo.png";

  return (
    <div className="flex items-start gap-6 sm:gap-15">
      <div className="relative z-10 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] sm:flex">
        <FiBriefcase className="text-lg text-white" />
      </div>

      <div className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)] sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.10),rgba(168,85,247,0.06),rgba(236,72,153,0.04))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

        <div className="relative z-10">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] sm:hidden">
            <FiBriefcase className="text-lg text-white" />
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-2.5 shadow-inner shadow-white/5">
                <Image
                  src={logoSrc}
                  alt={item.company}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-300">
                  {item.company}
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
              <FiCalendar className="text-indigo-300" />
              <span>{item.period}</span>
            </div>
          </div>

          <ul className="mt-6 space-y-1.5">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-[15px]"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-linear-to-r from-indigo-400 to-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.45)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
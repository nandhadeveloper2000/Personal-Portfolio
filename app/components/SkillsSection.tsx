"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoCss3 } from "react-icons/bi";
import type { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  title: string;
  description: string;
  items: SkillItem[];
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: EASE,
    },
  }),
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Modern interfaces with responsive layouts, premium interactions, and polished user experience.",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: BiLogoCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description:
      "Robust APIs, authentication systems, and scalable server-side application architecture.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "API Testing", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Database",
    description:
      "Flexible and structured data systems designed for performance, scale, and reliability.",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Development, collaboration, version control, deployment, and UI design workflow tools.",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscodeInsiders },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden scroll-mt-32 py-20 sm:py-20 lg:py-16"
    >
      {/* Base background */}
      <div className="absolute inset-0 -z-30 bg-[#030712]" />

      {/* Gradient atmosphere */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.14),transparent_30%)]" />

      {/* Floating blur lights */}
      <div className="absolute left-[10%] top-24 -z-10 h-52 w-52 rounded-full bg-indigo-500/12 blur-3xl" />
      <div className="absolute right-[10%] top-36 -z-10 h-60 w-60 rounded-full bg-fuchsia-500/12 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Soft grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[70px_70px] mask-[radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="relative"
        >
          <motion.div custom={0} variants={fadeUp}>
            <SectionTitle
              eyebrow="Skills"
              title="Technology stack I use to build modern products"
              description="A curated combination of frontend engineering, backend development, data systems, and workflow tools used to create scalable and visually polished digital products."
            />
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{
                  duration: 0.35,
                  ease: EASE,
                }}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4.5 p-px shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-0 rounded-4xl bg-[linear-gradient(135deg,rgba(99,102,241,0.22),rgba(168,85,247,0.12),rgba(236,72,153,0.18))] opacity-60 blur-xl transition duration-500 group-hover:opacity-90" />

                <motion.div
                  initial={{ opacity: 0.6, scaleX: 0.7 }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute left-1/2 top-0 z-20 h-0.75 w-32 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-400 via-fuchsia-400 to-pink-400 shadow-[0_0_25px_rgba(217,70,239,0.8)]"
                />

                <div className="relative z-10 h-full rounded-[31px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-6 py-7 backdrop-blur-2xl">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/20" />
                  <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-pink-500/10 blur-3xl transition duration-500 group-hover:bg-indigo-500/20" />

                  <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_20%,transparent_40%)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-indigo-200">
                          Expertise
                        </span>

                        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {group.items.map((item) => {
                        const Icon = item.icon;

                        return (
                          <span
                            key={item.name}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_24px_rgba(168,85,247,0.18)]"
                          >
                            <span className="text-indigo-300 transition duration-300 group-hover:text-fuchsia-300">
                              <Icon size={18} />
                            </span>
                            <span>{item.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
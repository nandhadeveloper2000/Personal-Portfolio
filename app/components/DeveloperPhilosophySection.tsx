"use client";

import { motion, type Variants } from "framer-motion";
import { FiCheckCircle, FiCpu, FiFeather, FiShield } from "react-icons/fi";
import SectionTitle from "./SectionTitle";

const philosophyPoints = [
  "Write clean, maintainable, and scalable code",
  "Design interfaces that are modern, intuitive, and responsive",
  "Build secure backend systems and reliable APIs",
  "Focus on usability, performance, and product quality",
  "Continuously learn, improve, and adapt to new technologies",
];

const pillars = [
  {
    title: "Clean Architecture",
    description:
      "I value structure, readability, and maintainability so applications remain scalable and easier to evolve over time.",
    icon: FiCpu,
  },
  {
    title: "User-Focused UI",
    description:
      "I aim to craft interfaces that feel polished, responsive, and comfortable for real users across devices.",
    icon: FiFeather,
  },
  {
    title: "Reliable Engineering",
    description:
      "I focus on authentication, API stability, secure flows, and dependable product behavior in production.",
    icon: FiShield,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function DeveloperPhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_25%)]" />

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle
              eyebrow="Development Philosophy"
              title="How I approach engineering and product building"
              description="My development mindset balances clean code, thoughtful design, and reliable engineering to build products that feel polished and production-ready."
            />
          </motion.div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div variants={fadeUp}>
              <div className="space-y-4">
                {philosophyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <FiCheckCircle className="mt-1 shrink-0 text-[16px] text-emerald-300" />
                    <p className="text-sm leading-7 text-slate-300 sm:text-[15px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="relative rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[linear-gradient(135deg,rgba(99,102,241,0.07),rgba(168,85,247,0.05),rgba(236,72,153,0.06))]" />

                <div className="relative space-y-4">
                  {pillars.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 text-violet-200">
                            <Icon className="text-xl" />
                          </div>

                          <div>
                            <h3 className="text-base font-semibold text-white sm:text-lg">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm leading-7 text-slate-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="rounded-3xl border border-violet-400/20 bg-linear-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 p-4">
                    <p className="text-sm leading-7 text-slate-300">
                      My goal is to build digital products that are not only functional,
                      but also polished, scalable, and valuable for real users.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
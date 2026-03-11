"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiDownload,
  FiEye,
  FiFileText,
} from "react-icons/fi";

export default function ResumeCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="absolute left-[12%] top-[35%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[140px]" />
        <div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          {/* Soft premium border */}
          <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03),rgba(168,85,247,0.14),rgba(59,130,246,0.12))]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[33px] bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.82))]" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[33px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            {/* Left content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mb-5 flex flex-wrap items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  Available for opportunities
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200">
                  <FiFileText className="h-4 w-4" />
                  Resume & Experience Snapshot
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Explore my resume, project depth, and
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  {" "}
                  full-stack engineering experience
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg"
              >
                My resume highlights experience in React.js, Next.js, Node.js,
                Express.js, MongoDB, TypeScript, Tailwind CSS, and React Native,
                along with product-focused UI development and scalable backend
                architecture.
              </motion.p>

              {/* Cleaner CTA hierarchy */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-[0_16px_40px_rgba(139,92,246,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(139,92,246,0.45)]"
                >
                  <FiDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <FiEye className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  View Resume
                </a>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  Let’s Connect
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">Frontend</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    React.js, Next.js, Tailwind CSS
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">Backend</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Node.js, Express.js, REST APIs
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">Database</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    MongoDB, scalable data modeling
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right preview card */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="relative mx-auto w-full max-w-md"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                  <div className="absolute inset-0 rounded-[28px] p-[1px]">
                    <div className="h-full w-full rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03),rgba(168,85,247,0.14),rgba(59,130,246,0.14))]" />
                  </div>

                  <div className="pointer-events-none absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(2,6,23,0.78))]" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-[0_12px_30px_rgba(99,102,241,0.35)]">
                          <FiBriefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Resume Preview</p>
                          <h3 className="text-lg font-semibold text-white">
                            Nandhakumar S
                          </h3>
                        </div>
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                        PDF
                      </span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <div className="space-y-3">
                        <div className="h-3 w-32 rounded-full bg-white/90" />
                        <div className="h-2.5 w-44 rounded-full bg-indigo-300/80" />
                        <div className="h-px w-full bg-white/10" />

                        <div className="space-y-2">
                          <div className="h-2.5 w-full rounded-full bg-white/10" />
                          <div className="h-2.5 w-[92%] rounded-full bg-white/10" />
                          <div className="h-2.5 w-[78%] rounded-full bg-white/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                            <p className="text-xs text-slate-400">Role</p>
                            <p className="mt-1 text-sm font-medium text-white">
                              MERN Developer
                            </p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                            <p className="text-xs text-slate-400">Focus</p>
                            <p className="mt-1 text-sm font-medium text-white">
                              Full-Stack Apps
                            </p>
                          </div>
                        </div>

                        <div className="rounded-xl border border-emerald-400/15 bg-emerald-500/8 p-3">
                          <div className="flex items-start gap-2">
                            <FiCheckCircle className="mt-0.5 h-4 w-4 text-emerald-300" />
                            <p className="text-sm leading-6 text-emerald-100">
                              Available for full-time roles, freelance work, and
                              premium product collaborations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle caption instead of more buttons */}
                    <p className="mt-4 text-center text-xs tracking-wide text-slate-500">
                      Quick resume snapshot for recruiters and collaborators
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
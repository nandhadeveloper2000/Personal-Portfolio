"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiDownload,
  FiEye,
  FiFileText,
  FiMapPin,
} from "react-icons/fi";
import { educationList, personalInfo } from "../data/portfolio";

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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[34px] border border-white/10 bg-white/4 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03),rgba(168,85,247,0.14),rgba(59,130,246,0.12))]" />
          <div className="pointer-events-none absolute inset-px rounded-[33px] bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.88))]" />
          <div className="pointer-events-none absolute inset-px rounded-[33px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* Left side - Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
                  Education & Resume
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Academic background and
                <span className="bg-linear-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  {" "}
                  professional resume
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.14 }}
                className="mt-5 max-w-2xl text-base  text-justify leading-7 text-slate-300 sm:text-lg"
              >
                My academic background combined with hands-on development experience
                has shaped my expertise in modern full-stack technologies. I build
                scalable web and mobile applications using React.js, Next.js,
                Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, and
                React Native, focusing on clean architecture, performance,
                and production-ready solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mt-8 space-y-4"
              >
                {educationList.map((item, index) => (
                  <div
                    key={`${item.degree}-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)]">
                        <FiBookOpen className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-indigo-200">
                          CGPA: {item.cgpa} {item.period}
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-300">
                          
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.institution}
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                          <FiMapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  Let’s Connect
                  <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right side - Resume image */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="relative mx-auto w-full max-w-lg"
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
                <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                  <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03),rgba(168,85,247,0.14),rgba(59,130,246,0.12))]" />
                  <div className="absolute inset-px rounded-[27px] bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.82))]" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Resume Preview</p>
                        <h3 className="text-lg font-semibold text-white">
                          {personalInfo.name}
                        </h3>
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                        JPG Preview
                      </span>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
                      <Image
                        src="/Resume_page.jpg"
                        alt={`${personalInfo.name} resume preview`}
                        width={700}
                        height={950}
                        className="h-105 w-full object-cover object-top"
                        priority
                      />
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
                      <a
                        href="/resume.pdf"
                        download
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(139,92,246,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(139,92,246,0.45)]"
                      >
                        <FiDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                        Download
                      </a>

                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/8"
                      >
                        <FiEye className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        View
                      </a>
                    </div>

                    <p className="mt-4 text-center text-xs tracking-wide text-slate-500">
                      Resume first-page preview for recruiters and hiring teams
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
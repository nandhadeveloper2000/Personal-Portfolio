"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiLayers,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../data/portfolio";

const highlights = [
  {
    icon: <FiCode className="h-5 w-5" />,
    title: "Scalable Full-Stack Architecture",
    text: "I design scalable applications using React.js, Next.js, Node.js, and Express.js with modular architecture, reusable components, and well-structured APIs.",
  },
  {
    icon: <FiLayers className="h-5 w-5" />,
    title: "Modern MERN Stack Development",
    text: "I build complete web platforms using MongoDB, Express.js, React.js, and Node.js, integrating REST APIs, authentication systems, and production-ready backend services.",
  },
  {
    icon: <FiSmartphone className="h-5 w-5" />,
    title: "Web & Mobile Solutions",
    text: "I develop responsive web apps with Next.js and cross-platform mobile applications using React Native, delivering consistent and high-performance user experiences.",
  },
  {
    icon: <FiZap className="h-5 w-5" />,
    title: "TypeScript & Modern Tooling",
    text: "I use TypeScript, Tailwind CSS, and modern development tools to build maintainable, type-safe applications with clean code and optimized performance.",
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
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-32 py-20 sm:py-24 lg:py-8"
    >
      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle
              eyebrow="About Me"
              title="Building premium full-stack and mobile products with clean code"
              description="I focus on creating scalable web and mobile applications with modern architecture, strong backend integration, and polished user experience."
            />
          </motion.div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <div className="relative rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute inset-0 rounded-4xl bg-[linear-gradient(135deg,rgba(99,102,241,0.08),rgba(168,85,247,0.03),rgba(236,72,153,0.08))]" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                    Full-Stack Developer • React Native Developer
                  </div>

                  {/* <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl">
                    Building scalable digital products with premium design and modern architecture
                  </h2> */}

                  <p className="mt-5 text-justify leading-8 text-slate-300 sm:text-lg">
                    {personalInfo.longBio}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.03]"
                    >
                      Let&apos;s Connect
                      <FiArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/resume.pdf"
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-400/30 hover:bg-white/10"
                    >
                      <FiDownload className="h-4 w-4" />
                      Download Resume
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-3xl" />

                <div className="relative rounded-[34px] bg-[linear-gradient(135deg,rgba(99,102,241,0.75),rgba(168,85,247,0.55),rgba(236,72,153,0.75))] p-px shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                  <div className="rounded-[33px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/developer-illustration2.png"
                        alt="Developer Illustration"
                        width={520}
                        height={520}
                        priority
                        className="h-auto w-full max-w-107.5 object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.18)]"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-indigo-400/30 hover:bg-white/10"
              >
                <div className="w-fit rounded-2xl bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-3 text-indigo-300 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-justify text-base leading-6 text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
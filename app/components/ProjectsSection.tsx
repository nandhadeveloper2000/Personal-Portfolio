import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolio";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-400/30 hover:bg-white/[0.07] hover:shadow-[0_20px_80px_rgba(99,102,241,0.18)] sm:p-7">
      <div className="mb-5 inline-flex w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
        Featured Project
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-400 sm:text-base">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-indigo-400/20 group-hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-indigo-500/30"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-white/25 hover:bg-white/10"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#030712]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_30%)]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Projects"
            title="Work that demonstrates product thinking and execution"
            description="A curated selection of projects that highlight clean architecture, premium UI, and real-world full-stack development."
          />

          <Link
            href="/projects"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/15 bg-white/3 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-indigo-400/30 hover:bg-white/10"
          >
            See All Projects
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
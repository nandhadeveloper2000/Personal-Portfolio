import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ResumeCTA from "./components/ResumeCTA";
import LuxuryFloatingContactBar from "./components/LuxuryFloatingContactBar";
import DeveloperPhilosophySection from "./components/DeveloperPhilosophySection";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <DeveloperPhilosophySection />
      <ProjectsSection />
      <ResumeCTA />
      <ContactSection />
      <LuxuryFloatingContactBar />
    </main>
  );
}
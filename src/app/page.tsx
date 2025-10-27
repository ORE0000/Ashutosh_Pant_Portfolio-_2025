import AboutSection from "@/components/sections/AboutSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="relative z-10">
        <AboutSection />
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-40 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20">
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificatesSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

    
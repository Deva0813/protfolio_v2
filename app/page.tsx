import EducationCertSection from "@/components/EducationCert/EducationCertSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillSection from "@/components/Skills/SkillSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection/>
      <EducationCertSection/>
    </main>
  );
}

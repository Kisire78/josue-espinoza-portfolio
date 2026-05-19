import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import QaExperienceSection from "@/components/QaExperienceSection";
import QaSkillsSection from "@/components/QaSkillsSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <QaExperienceSection />
      <QaSkillsSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;

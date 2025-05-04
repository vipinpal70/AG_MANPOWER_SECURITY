import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import QualitySection from "../components/QualitySection";
import TrainingSection from "../components/TrainingSection";
import ContactSection from "../components/ContactSection";
import TeamSection from "../components/TeamSection";
import { setupScrollAnimation } from "../lib/animation";

const Home = () => {
  useEffect(() => {
    setupScrollAnimation();
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QualitySection />
      <TrainingSection />
      <TeamSection />
      <ContactSection />
    </>
  );
};

export default Home;

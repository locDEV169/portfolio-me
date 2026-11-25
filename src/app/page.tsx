import { AboutBand, IntroSection } from "@/components/IntroSection";
import { CaptureMomentsSection } from "@/components/CaptureMomentsSection";
import { HomeHero } from "@/components/HomeHero";
import { SelectedWorksSection } from "@/components/SelectedWorksSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <AboutBand />
      <ServicesSection />
      <SelectedWorksSection />
      <CaptureMomentsSection />
    </>
  );
}

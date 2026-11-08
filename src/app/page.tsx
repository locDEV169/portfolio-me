import { CaptureMomentsSection } from "@/components/CaptureMomentsSection";
import { FaqSection } from "@/components/FaqSection";
import { HomeHero } from "@/components/HomeHero";
import { IntroSection } from "@/components/IntroSection";
import { SelectedWorksSection } from "@/components/SelectedWorksSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <ServicesSection />
      <SelectedWorksSection />
      <CaptureMomentsSection />
      <FaqSection />
    </>
  );
}

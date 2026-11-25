import type { Metadata } from "next";
import { AboutBand } from "@/components/IntroSection";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <AboutBand headingAs="h1" />;
}

import type { Metadata } from "next";
import { AboutProfile } from "@/components/AboutProfile";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <AboutProfile />;
}

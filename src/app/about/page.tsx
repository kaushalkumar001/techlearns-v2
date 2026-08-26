import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "./_components/AboutHero";
import AboutVisionMission from "./_components/AboutVisionMission";
import AboutManifesto from "./_components/AboutManifesto";
import AboutPositioning from "./_components/AboutPositioning";
import FounderSection from "./_components/FounderSection";

export const metadata: Metadata = {
  title: "About Techlearns | A Next-Generation Corporate Experience Learning Ecosystem",
  description: "Techlearns exists to bridge the gap between learning technology and experiencing how technology is actually built, applied and delivered.",
  alternates: { canonical: "https://techlearns.com/about" },
  openGraph: {
    title: "About Techlearns | Corporate Experience Learning Ecosystem",
    description: "Techlearns exists to bridge the gap between learning technology and experiencing how technology is actually built, applied and delivered.",
    url: "https://techlearns.com/about"
  }
};

export default function AboutPage() {
  return (
    <div className="landing-page-container light-theme">
      <Header />
      <main>
        <AboutHero />
        <AboutVisionMission />
        <AboutManifesto />
        <FounderSection />
        <AboutPositioning />
      </main>
      <Footer />
    </div>
  );
}

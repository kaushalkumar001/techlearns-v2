import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "./_components/AboutHero";
import AboutWhyExists from "./_components/AboutWhyExists";
import AboutStats from "./_components/AboutStats";
import AboutDifferent from "./_components/AboutDifferent";
import AboutVisionAdvisory from "./_components/AboutVisionAdvisory";
import AboutFounderJourney from "./_components/AboutFounderJourney";

export const metadata: Metadata = {
  title: "About Techlearns | Corporate Experience Learning Ecosystem",
  description: "Techlearns is a next-generation Corporate Experience Learning company built to transform how technology talent learns, experiences and prepares for the professional world.",
  alternates: { canonical: "https://techlearns.com/about" },
  openGraph: {
    title: "About Techlearns | Corporate Experience Learning Ecosystem",
    description: "Techlearns is a next-generation Corporate Experience Learning company built to transform how technology talent learns, experiences and prepares for the professional world.",
    url: "https://techlearns.com/about"
  }
};

export default function AboutPage() {
  return (
    <div className="landing-page-container light-theme">
      <Header />
      <main>
        <AboutHero />
        <AboutWhyExists />
        <AboutStats />
        <AboutDifferent />
        <AboutVisionAdvisory />
        <AboutFounderJourney />
      </main>
      <Footer />
    </div>
  );
}

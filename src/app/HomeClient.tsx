"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./_components/HeroSection";
import OfferingsSection from "./_components/OfferingsSection";
import WhyTechLearnsSection from "./_components/WhyTechLearnsSection";
import EnvironmentSection from "./_components/EnvironmentSection";
import StepsSection from "./_components/StepsSection";
import MentorsSection from "./_components/MentorsSection";
import AlumniSection from "./_components/AlumniSection";
import HiringPartnersSection from "./_components/HiringPartnersSection";
import AwardsSection from "./_components/AwardsSection";
import FAQSection from "./_components/FAQSection";
import CTASection from "./_components/CTASection";
import PartnersSection from "./_components/PartnersSection";

export default function HomeClient() {
  return (
    <div className="landing-page-container">
      <Header />

      <main>
        <HeroSection />
        <HiringPartnersSection />
        <StepsSection />
        <OfferingsSection />
        <PartnersSection />
        <WhyTechLearnsSection />
        <EnvironmentSection />
        <MentorsSection />
        <AlumniSection />
        <AwardsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

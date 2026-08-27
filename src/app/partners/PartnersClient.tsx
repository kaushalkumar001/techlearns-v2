"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersHero from "./_components/PartnersHero";
import PartnersEnvironment from "./_components/PartnersEnvironment";
import PartnersWorkingCulture from "./_components/PartnersWorkingCulture";
import PartnersCelFramework from "./_components/PartnersCelFramework";
import PartnersDayInLife from "./_components/PartnersDayInLife";
import PartnersDifference from "./_components/PartnersDifference";

const SectionDivider = () => (
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
    <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #E2E8F0 15%, #E2E8F0 85%, transparent 100%)" }} />
  </div>
);

export default function PartnersClient() {
  return (
    <div style={{ background: "#FFFFFF", color: "#0B1F3A", fontFamily: "var(--font-sans), sans-serif" }}>
      <Header />

      <main>
        <PartnersHero />
        <SectionDivider />
        <PartnersEnvironment />
        <SectionDivider />
        <PartnersWorkingCulture />
        <SectionDivider />
        <PartnersCelFramework />
        <SectionDivider />
        <PartnersDayInLife />
        <SectionDivider />
        <PartnersDifference />
      </main>

      <Footer />
    </div>
  );
}

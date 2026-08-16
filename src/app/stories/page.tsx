import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learner Proof | Techlearns Skill Passport Showcase",
  description: "Curated, consent-based Skill Passports — real projects, competition results, and mentor-verified evidence.",
  alternates: {
    canonical: "https://techlearns.com/stories"
  },
  openGraph: {
    title: "Learner Proof | Techlearns Skill Passport Showcase",
    description: "Curated, consent-based Skill Passports — real projects, competition results, and mentor-verified evidence.",
    url: "https://techlearns.com/stories"
  }
};

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container" style={{ textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

          <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            REAL EVIDENCE ONLY
          </span>
          <h1 className="fade-in-up" style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "12px", marginBottom: "16px", fontWeight: 800 }}>
            Here's what our learners can do. Here's the evidence.
          </h1>
          <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto 40px", fontSize: "16px", lineHeight: "1.7" }}>
            Curated, consent-based Skill Passports — real projects, competition results, and mentor-verified evidence.
          </p>

          {/* Placement Out Audits Notice */}
          <div className="glass-card" style={{ padding: "40px 30px", maxWidth: "600px", border: "1px dashed var(--border-color)", background: "rgba(255, 255, 255, 0.015)" }}>
            <p style={{ fontSize: "14px", color: "var(--foreground-muted-extra)", margin: 0, lineHeight: "1.6", fontStyle: "italic" }}>
              Notice: Real, verified learner profiles will be published here upon completion of the initial cohort audits. No placeholders or stock testimonials are permitted in our commitment to total placement transparency.
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link href="/programs" className="glow-btn-primary">
              Build Your Own Skill Passport
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

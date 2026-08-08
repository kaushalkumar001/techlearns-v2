import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers & Active Positions",
  description: "Help build India's corporate experience learning platform. Open positions for technical mentors and platform engineers.",
  alternates: {
    canonical: "https://techlearns.com/careers"
  },
  openGraph: {
    title: "Careers & Active Positions | TechLearns Academy",
    description: "Help build India's corporate experience learning platform. Open positions for technical mentors and platform engineers.",
    url: "https://techlearns.com/careers"
  }
};

const openPositions = [
  { title: "Technical Mentor - Generative AI & ML", location: "Remote / Bangalore", type: "Full-Time", desc: "Guide candidates through multi-agent workflows, fine-tuning scripts, and vector database orchestration. Perform code reviews on Pull Requests." },
  { title: "DevOps & Cloud Platform Engineer", location: "Bangalore Office", type: "Full-Time", desc: "Build out and manage the virtual sandboxing infrastructure, unit-test diagnostics, and Kubernetes clusters powering SkillOS." },
  { title: "Agile Curriculum Product Manager", location: "Remote (India)", type: "Full-Time", desc: "Define corporate ticket backlogs, estimate story metrics, and coordinate cohort sprint challenges with partner hiring networks." }
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>WE ARE HIRING</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Careers at TechLearns</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Join the team building India's most advanced Corporate Experience Learning ecosystem. Let's redefine developer education.
            </p>
          </div>

          {/* Positions Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px", margin: "0 auto 60px" }}>
            {openPositions.map((pos, idx) => (
              <div key={idx} className="glass-card fade-in-up" style={{ padding: "30px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", alignItems: "center", animationDelay: `${idx * 0.1}s` }}>
                <div style={{ maxWidth: "500px" }}>
                  <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "4px" }}>{pos.title}</h3>
                  <div style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase", marginBottom: "12px" }}>{pos.location} | {pos.type}</div>
                  <p style={{ fontSize: "13.5px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{pos.desc}</p>
                </div>
                <div>
                  <a href="mailto:careers@techlearns.com" className="glow-btn-secondary">Apply Now</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

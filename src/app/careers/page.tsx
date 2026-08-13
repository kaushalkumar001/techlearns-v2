import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Readiness at Techlearns | From Week 1, Not the Final Week",
  description: "Resume, portfolio, communication and interview practice grow alongside your technical skill — tracked the whole way through.",
  alternates: {
    canonical: "https://techlearns.com/careers"
  },
  openGraph: {
    title: "Career Readiness at Techlearns | From Week 1, Not the Final Week",
    description: "Resume, portfolio, communication and interview practice grow alongside your technical skill — tracked the whole way through.",
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
        
        {/* Careers Hub Section */}
        <section style={{ padding: "0 0 60px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              CAREER READINESS &amp; PLACEMENT SUPPORT
            </span>
            <h1 className="fade-in-up" style={{ fontSize: "48px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800 }}>
              Interview readiness doesn't start in your last month.<br />
              <span style={{ color: "#CB6CE6" }}>It starts in Week 1.</span>
            </h1>
            <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              Resume, portfolio, communication and interview practice grow alongside your technical skill — tracked the whole way through.
            </p>
          </div>
        </section>

        {/* What's Included Grid */}
        <section style={{ padding: "60px 0", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>THE SYSTEM</span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", marginTop: "8px", fontWeight: 700 }}>Continuous Employment Engineering</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {[
                { title: "Resume & Portfolio Building", desc: "Coached from day one. You don't write lists of technologies — you present repositories of verified code blocks and tickets." },
                { title: "Mock Interviews & Feedback", desc: "Undergo simulated technical screens and system design reviews with feedback logged straight to your SkillOS profile." },
                { title: "Role Skill-Graph Matching", desc: "Find exact openings matching your verified competency vectors. No guess-work." },
                { title: "SkillOS Application Tracker", desc: "Manage referrals, active interview tracks, code challenges and placements inside a single unified cockpit." },
                { title: "Recruiter Showcases", desc: "Showcase live code caps, hackathon submissions, and sprint metrics to corporate recruiting managers." },
                { title: "Consent-Based Passport Sharing", desc: "Control your privacy. Share verified project credentials and commit history directly with interested employers on your own terms." }
              ].map((inc, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "28px", borderTop: "2px solid #CB6CE6" }}>
                  <h3 style={{ fontSize: "17px", color: "#FFFFFF", fontWeight: 700, marginBottom: "10px" }}>{inc.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>{inc.desc}</p>
                </div>
              ))}
            </div>

            {/* Outcome Integrity Notice */}
            <div className="glass-card" style={{ padding: "30px", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)", textAlign: "center" }}>
              <h3 style={{ fontSize: "16px", color: "#CB6CE6", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase", fontFamily: "monospace" }}>
                🛡️ Our Outcome Integrity Commitment
              </h3>
              <p style={{ color: "var(--foreground-muted)", fontSize: "13.5px", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
                We will never publish a single headline placement percentage without also publishing who was eligible, who sought placement, the time window, how many were placed, and how outcomes were verified. Placement <strong>assistance</strong> and placement <strong>guarantee</strong> are always clearly distinguished.
              </p>
            </div>
          </div>
        </section>

        {/* Join our team (Jobs at Techlearns) */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em" }}>WE ARE HIRING TOO</span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "8px", fontWeight: 850 }}>Join the Techlearns Team</h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "10px auto 0", fontSize: "15px" }}>
                Help us build the virtual labs, sandboxes, and pedagogy that scale experience-based education.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "800px", margin: "0 auto 40px" }}>
              {openPositions.map((pos, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                  <div style={{ maxWidth: "520px" }}>
                    <h3 style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 700, marginBottom: "4px" }}>{pos.title}</h3>
                    <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase", display: "inline-block", marginBottom: "12px" }}>{pos.location} | {pos.type}</span>
                    <p style={{ fontSize: "13.5px", color: "var(--foreground-muted)", lineHeight: "1.6", margin: 0 }}>{pos.desc}</p>
                  </div>
                  <div>
                    <a href="mailto:careers@techlearns.com" className="glow-btn-secondary" style={{ fontSize: "12px", padding: "8px 16px" }}>Apply Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

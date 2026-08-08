import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Experience Learning (CEL)",
  description: "Experience how software companies build product features. Master Scrum sprints, daily check-ins, and direct Pull Request code audits.",
  alternates: {
    canonical: "https://techlearns.com/cel"
  },
  openGraph: {
    title: "Corporate Experience Learning (CEL) | TechLearns Academy",
    description: "Experience how software companies build product features. Master Scrum sprints, daily check-ins, and direct Pull Request code audits.",
    url: "https://techlearns.com/cel"
  }
};

const milestones = [
  { step: "01", name: "Backlog Planning", desc: "Select and assign verified system requirements from the backlog dashboard. Estimate story points with your team using standard Scrum tools." },
  { step: "02", name: "Daily Standups", desc: "Sync progress in 15-minute daily check-ins. Answer what you did yesterday, what you plan to do today, and list any blocker issues." },
  { step: "03", name: "Branch & Code", desc: "Create a dedicated feature branch on Git. Write modular code using clean system principles and AI assisted coding assistants." },
  { step: "04", name: "Review Pipeline", desc: "Submit a Pull Request. Review lint outputs, syntax verification assertions, and receive feedback from engineering guides." },
  { step: "05", name: "Continuous Integration", desc: "Push verified builds to GitHub. Watch Docker compilation checks and test assertions execute automatically." },
  { step: "06", name: "Operate & Deploy", desc: "Deploy builds to AWS cloud containers. Check telemetry logs, monitor latency spikes, and analyze database connections." }
];

export default function CELPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>OUR LEARNING PHILOSOPHY</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Corporate Experience Learning (CEL)</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              At TechLearns Academy, we don't believe in passive video consumption. Learn software engineering exactly how companies build it.
            </p>
          </div>

          {/* Comparison Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "80px" }}>
            <div className="glass-card" style={{ padding: "40px", borderLeft: "4px solid #FF5F56" }}>
              <h3 style={{ fontSize: "20px", color: "var(--foreground)", marginBottom: "16px" }}>Traditional EdTech Learning</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, fontSize: "14px" }}>
                <li>❌ Watch 300+ hours of passive video tutorials.</li>
                <li>❌ Build isolated toy projects on basic sandboxes.</li>
                <li>❌ Receive automated certificates with no verifiable code proof.</li>
                <li>❌ Mock interview prep ignoring collaborative team mechanics.</li>
              </ul>
            </div>
            
            <div className="glass-card" style={{ padding: "40px", borderLeft: "4px solid #27C93F", border: "1px solid rgba(39, 201, 63, 0.2)" }}>
              <h3 style={{ fontSize: "20px", color: "var(--foreground)", marginBottom: "16px" }}>TechLearns CEL Model</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, fontSize: "14px" }}>
                <li>🚀 Claim unresolved backlog tickets directly on Jira.</li>
                <li>🚀 Experience Scrum sprints, daily standups, and blocker syncs.</li>
                <li>🚀 Recieve code reviews on Pull Requests from FAANG mentors.</li>
                <li>🚀 Compile real-world commits verified on the blockchain.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Grid */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "28px", color: "var(--foreground)", textAlign: "center", marginBottom: "40px" }}>The Daily Engineering Cycle</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {milestones.map((mil, idx) => (
                <div key={idx} className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: `${idx * 0.05}s` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span style={{ fontSize: "12px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace" }}>STEP {mil.step}</span>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27C93F" }}></span>
                  </div>
                  <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>{mil.name}</h3>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{mil.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card" style={{ padding: "50px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)" }}>
            <h3 style={{ fontSize: "24px", color: "var(--foreground)", marginBottom: "12px" }}>Stop buying courses. Start building platforms.</h3>
            <p style={{ color: "var(--foreground-muted)", marginBottom: "30px", fontSize: "14px" }}>Qualify for our entrance examination cohort to begin your CEL track.</p>
            <Link href="/contact" className="glow-btn-primary">
              Register for TLET Exam
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

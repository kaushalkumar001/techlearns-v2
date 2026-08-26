import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Techlearns Future Skills League | Compete While You Learn",
  description: "Hackathons, CTFs, datathons and demo days aren't extracurricular here — they're how you prove what you've built.",
  alternates: { canonical: "https://techlearns.com/fsl" },
  openGraph: {
    title: "Techlearns Future Skills League | Compete While You Learn",
    description: "Pressure is part of the curriculum.",
    url: "https://techlearns.com/fsl"
  }
};

const formats = [
  { format: "AI Agent Buildathon", what: "Build an agent for a defined workflow; judged on usefulness, safety, cost, reliability" },
  { format: "Hackathon / Product Sprint", what: "Design and build a working product under time constraints" },
  { format: "Datathon", what: "Analyze a dataset, generate insights, defend recommendations" },
  { format: "Cybersecurity CTF", what: "Solve controlled security challenges and document the investigation" },
  { format: "SOC Incident Simulation", what: "Detect, triage, contain and communicate a simulated incident" },
  { format: "Cloud Architecture Challenge", what: "Design for scalability, reliability, security and cost" },
  { format: "Bug Bash / Debug Derby", what: "Find and fix defects quickly, with clear documentation" },
  { format: "API Integration Challenge", what: "Connect services and deliver a functional workflow" },
  { format: "UI/UX Designathon", what: "Research, prototype, test and present a user experience" },
  { format: "Automation Challenge", what: "Remove a repetitive process using code, low-code or AI" },
  { format: "Open Source Sprint", what: "Contribute fixes, docs or features to selected projects" },
  { format: "Demo Day / Pitch Arena", what: "Explain product value and trade-offs to an external jury" }
];

export default function FSLPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section style={{ padding: "24px 0 80px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Competitions & Challenges</span>
            <h1 style={{ fontSize: "52px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", lineHeight: "1.15" }}>
              Pressure is part of<br />
              <span style={{ color: "#CB6CE6" }}>the curriculum.</span>
            </h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "620px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              Hackathons, CTFs, datathons and demo days aren't extracurricular here — they're how you prove what you've built.
            </p>
          </div>
        </section>

        {/* League Banner */}
        <section style={{ padding: "60px 0", background: "linear-gradient(135deg, rgba(91,45,145,0.15) 0%, rgba(44,10,113,0.2) 100%)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="grid-2col" style={{ gap: "60px", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>SIGNATURE EVENT</span>
                <h2 style={{ fontSize: "40px", color: "var(--foreground)", marginTop: "12px", marginBottom: "16px", fontWeight: 900 }}>
                  Techlearns<br />
                  <span style={{ color: "#CB6CE6" }}>Future Skills League</span>
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.75" }}>
                  Our signature annual competition — regional qualifiers building to a national finale, open to partner colleges and industry-sponsored challenge statements.
                </p>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.75", marginTop: "16px" }}>
                  Points are earned for participation, quality, improvement, teamwork and external achievements — not just speed.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { icon: "📍", label: "Regional Qualifiers", desc: "Multiple city-based rounds" },
                  { icon: "🏟️", label: "National Finale", desc: "The Future Skills Finale — our annual showcase" },
                  { icon: "🏢", label: "Industry-Sponsored Briefs", desc: "Real problem statements from employer partners" },
                  { icon: "📊", label: "Auditable Scoring", desc: "Transparent, multi-criteria judging — not just speed" }
                ].map((item, i) => (
                  <div key={i} className="glass-card" style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{ fontSize: "28px" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--foreground)" }}>{item.label}</div>
                      <div style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Format Table */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", fontWeight: 800 }}>Competition Formats</h2>
              <p style={{ color: "var(--foreground-muted)", marginTop: "12px" }}>Every format builds a specific type of capability evidence.</p>
            </div>
            <div className="glass-card" style={{ overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(91, 45, 145, 0.15)" }}>
                    <th style={{ padding: "18px 24px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#CB6CE6", letterSpacing: "0.05em", width: "35%" }}>FORMAT</th>
                    <th style={{ padding: "18px 24px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#CB6CE6", letterSpacing: "0.05em" }}>WHAT YOU LEARN & PROVE</th>
                  </tr>
                </thead>
                <tbody>
                  {formats.map((f, i) => (
                    <tr key={i} style={{ borderTop: "1px solid var(--border-color)", background: i % 2 === 0 ? "transparent" : "rgba(91,45,145,0.03)" }}>
                      <td style={{ padding: "16px 24px", fontWeight: 700, color: "var(--foreground)", fontSize: "14px" }}>{f.format}</td>
                      <td style={{ padding: "16px 24px", color: "var(--foreground-muted)", fontSize: "14px", lineHeight: "1.5" }}>{f.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "60px 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.03)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px" }}>
                View Upcoming Challenges
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "500px", margin: "0 auto 36px", fontSize: "16px" }}>
                Join a league, participate in a challenge, and start building verifiable evidence of your capability.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="glow-btn-primary">Join the League</Link>
                <Link href="/programs" className="glow-btn-secondary">View Programs</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

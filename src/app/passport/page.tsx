import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certifications & Credentials | Techlearns Credential Stack",
  description: "Official external certifications, verified Techlearns credentials, and experience-based badges — layered into one evidence record.",
  alternates: { canonical: "https://techlearns.com/passport" },
  openGraph: {
    title: "Certifications & Credentials | Techlearns",
    description: "A credential stack you can actually defend.",
    url: "https://techlearns.com/passport"
  }
};

const externalPathways = [
  { org: "Microsoft", desc: "Certifications and Applied Skills — role-based validated credentials" },
  { org: "Google", desc: "Career Certificates / AI Essentials / AI Professional / Cybersecurity pathways" },
  { org: "AWS", desc: "Role-based certifications: Cloud Practitioner, AI Practitioner, and more" },
  { org: "Cisco", desc: "Networking and cybersecurity pathways" },
  { org: "FutureSkills Prime / SSC nasscom", desc: "Emerging-technology assessments" }
];

const techllearnsCredentials = [
  { name: "Techlearns Course Completion", desc: "Confirms you completed the program — every enrolled learner receives this." },
  { name: "Techlearns Skill Distinction", desc: "Awarded only after performance thresholds and portfolio defense are met. Not given to everyone." },
  { name: "Corporate Experience Readiness Badge", desc: "Based on project execution, teamwork, communication and operating discipline — not just technical scores." },
  { name: "Skill Passport", desc: "Your dynamic evidence record with verified links, assessment history, project artifacts and readiness indicators." }
];

const experienceCredentials = [
  { name: "Live Project / Client Brief Badge", desc: "Awarded for completing a real-world or employer-contributed project brief." },
  { name: "Hackathon / Competition Badge", desc: "Finalist or winner recognition from FSL competitions and challenge events." },
  { name: "Industry Mentor Review Badge", desc: "Verified mentor feedback on your technical output, communication and improvement." },
  { name: "Internship / Apprenticeship Evidence", desc: "Documented record of real-world work experience as part of the program." },
  { name: "Community Leadership Badge", desc: "Earned through peer mentoring, study group leadership or community contribution." }
];

export default function PassportPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>

        {/* Hero */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Credentials & Certifications</span>
            <h1 style={{ fontSize: "52px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", lineHeight: "1.15" }}>
              A credential stack you<br />
              <span style={{ color: "#CB6CE6" }}>can actually defend</span>
            </h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "620px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              Official external certifications, verified Techlearns credentials, and experience-based badges — layered into one evidence record.
            </p>
          </div>
        </section>

        {/* Layer A — External */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ marginBottom: "48px" }}>
              <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>LAYER A</span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", fontWeight: 800, marginTop: "8px" }}>Official External Credential Pathways</h2>
              <p style={{ color: "var(--foreground-muted)", fontSize: "16px", marginTop: "10px", maxWidth: "680px" }}>
                We help you prepare for recognized industry pathways. <em>Techlearns prepares learners for these credentials. We do not claim official partner status unless authorized in writing by the issuing organization.</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {externalPathways.map((p, i) => (
                <div key={i} className="glass-card" style={{ padding: "28px" }}>
                  <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "8px", fontWeight: 700 }}>{p.org}</h3>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layer B — Techlearns */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ marginBottom: "48px" }}>
              <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>LAYER B</span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", fontWeight: 800, marginTop: "8px" }}>Techlearns Verified Skill Credentials</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {techllearnsCredentials.map((c, i) => (
                <div key={i} className="glass-card" style={{ padding: "32px", display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(203,108,230,0.15)", border: "1px solid rgba(203,108,230,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "18px" }}>
                    {i === 0 ? "📜" : i === 1 ? "⭐" : i === 2 ? "🏅" : "💳"}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "8px", fontWeight: 700 }}>{c.name}</h3>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.65" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layer C — Experience */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ marginBottom: "48px" }}>
              <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>LAYER C</span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", fontWeight: 800, marginTop: "8px" }}>Experience Credentials</h2>
              <p style={{ color: "var(--foreground-muted)", fontSize: "16px", marginTop: "10px" }}>Earned through doing — not completing.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {experienceCredentials.map((c, i) => (
                <div key={i} className="glass-card" style={{ padding: "28px", borderLeft: "3px solid #CB6CE6" }}>
                  <h3 style={{ fontSize: "17px", color: "var(--foreground)", marginBottom: "8px", fontWeight: 700 }}>{c.name}</h3>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.03)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px" }}>See Credential Pathways by Program →</h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "500px", margin: "0 auto 36px", fontSize: "16px" }}>
                Every program includes a recommended credential pathway. Talk to an advisor to understand what you'll walk away with.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/programs" className="glow-btn-primary">View Programs</Link>
                <Link href="/contact" className="glow-btn-secondary">Talk to an Advisor</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verified Skill Passport",
  description: "The cryptographic proof-of-work profile that replaces traditional resumes. Audit actual candidate commit ledgers and reviews.",
  alternates: {
    canonical: "https://techlearns.com/passport"
  },
  openGraph: {
    title: "Verified Skill Passport | TechLearns Academy",
    description: "The cryptographic proof-of-work profile that replaces traditional resumes. Audit actual candidate commit ledgers and reviews.",
    url: "https://techlearns.com/passport"
  }
};

const verifiedProjects = [
  { name: "Distributed High-Frequency Trading Matcher", lang: "Rust / gRPC", hash: "sha256:d8c0...4f1e", status: "Verified Audit Pass", reviewer: "Staff Architect (Google)" },
  { name: "Multi-Tenant Collaborative Rich Text Canvas", lang: "TypeScript / Redis / WebSockets", hash: "sha256:f48a...92b0", status: "Verified Audit Pass", reviewer: "Tech Lead (Meta)" },
  { name: "Kubernetes Auto-Scaler for Video Transcoding", lang: "Go / Terraform / AWS", hash: "sha256:a12e...63cf", status: "Verified Audit Pass", reviewer: "SRE Manager (Netflix)" }
];

export default function PassportPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>EVIDENCE-BASED RECRUITING</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Verified Skill Passport</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              A blockchain-verified candidate profile containing real-world project links, code history audits, and mentor ratings.
            </p>
          </div>

          {/* Profile Card Mockup */}
          <div className="glass-card" style={{ padding: "40px", maxWidth: "800px", margin: "0 auto 60px", borderColor: "var(--secondary-magenta)", background: "var(--card-bg)" }}>
            
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "25px", marginBottom: "25px" }}>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-magenta) 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: 700, color: "#FFFFFF" }}>SP</div>
                <div>
                  <h2 style={{ fontSize: "28px", color: "var(--foreground)", marginBottom: "4px" }}>Saahil Paul</h2>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
                    <span style={{ color: "var(--foreground-muted)" }}>Full Stack Software Engineer</span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27C93F" }}></span>
                    <span style={{ color: "#27C93F", fontWeight: 600 }}>TLET Qualifier - Cohort AI-2026A</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center" }}>
                <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", letterSpacing: "0.15em", fontFamily: "monospace" }}>SKILL PASSPORT STATUS</span>
                <span style={{ fontSize: "12px", background: "rgba(39, 201, 63, 0.15)", color: "#27C93F", padding: "4px 12px", borderRadius: "20px", fontWeight: 650, marginTop: "4px" }}>PLACEMENT READY</span>
              </div>
            </div>

            {/* Middle Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "25px", marginBottom: "25px", textAlign: "center" }}>
              <div>
                <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", display: "block", marginBottom: "6px" }}>VERIFIED SKILL SCORE</span>
                <strong style={{ fontSize: "28px", color: "#CB6CE6" }}>92.5%</strong>
              </div>
              <div>
                <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", display: "block", marginBottom: "6px" }}>AGILE TICKETS SHIPPED</span>
                <strong style={{ fontSize: "24px", color: "var(--foreground)" }}>8 Systems</strong>
              </div>
              <div>
                <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", display: "block", marginBottom: "6px" }}>HACKATHON WINS</span>
                <strong style={{ fontSize: "24px", color: "var(--foreground)" }}>6 Podiums</strong>
              </div>
              <div>
                <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", display: "block", marginBottom: "6px" }}>COMMUNICATION INDEX</span>
                <strong style={{ fontSize: "24px", color: "var(--foreground)" }}>9.2 / 10</strong>
              </div>
            </div>

            {/* Bottom Section - Code evidence log */}
            <div>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "16px" }}>Verified Repository Audit Trail</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {verifiedProjects.map((p, idx) => (
                  <div key={idx} style={{ padding: "16px", border: "1px solid var(--border-color)", background: "rgba(255,255,255,0.01)", borderRadius: "8px", fontSize: "13px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <strong style={{ color: "var(--foreground)" }}>{p.name}</strong>
                      <span style={{ color: "#27C93F", fontFamily: "monospace" }}>{p.status}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--foreground-muted-extra)" }}>
                      <span>Stack: {p.lang}</span>
                      <span>Reviewer: {p.reviewer}</span>
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", marginTop: "6px", fontFamily: "monospace", display: "flex", gap: "4px" }}>
                      <span>Commit SHA:</span>
                      <span style={{ color: "var(--secondary-magenta)" }}>{p.hash}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Recruiter view highlights */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "60px" }}>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Proof over Claims</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Resumes claim skills. The Skill Passport displays real-world execution telemetry and PR approval histories.</p>
            </div>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>FAANG Audited</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Every milestone capstone is audited by senior technical architects from Google, Meta, and Netflix.</p>
            </div>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Direct Hiring Link</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Share your Skill Passport URL directly with recruitment agencies to qualify instantly for interview slots.</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

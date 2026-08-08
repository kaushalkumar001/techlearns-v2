import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Distinguished Engineering Mentors",
  description: "Receive Pull Request feedback directly from software engineering leads at Google, Meta, Microsoft, and Netflix.",
  alternates: {
    canonical: "https://techlearns.com/mentors"
  },
  openGraph: {
    title: "Distinguished Engineering Mentors | TechLearns Academy",
    description: "Receive Pull Request feedback directly from software engineering leads at Google, Meta, Microsoft, and Netflix.",
    url: "https://techlearns.com/mentors"
  }
};

const mentors = [
  {
    name: "Arjun Mehta",
    role: "Senior Staff Engineer",
    company: "Google",
    topics: ["Distributed Systems", "Go REST APIs", "gRPC Communications"],
    bio: "Over 12 years of core engineering experience at Google. Leads scalable indexing pipelines. Focused on teaching low-latency systems and concurrency checks.",
    imageBg: "linear-gradient(135deg, #FF4B2B, #FF416C)"
  },
  {
    name: "Priya Nair",
    role: "Tech Lead, AI & Core",
    company: "Meta",
    topics: ["PyTorch Workflows", "Vector DB Orchestration", "LLM Fine-tuning"],
    bio: "Tech Lead at Meta's AI group. Spearheads large-language model pipelines. Mentors candidates on prompt engineering architectures and AI agent guardrails.",
    imageBg: "linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)"
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "Netflix",
    topics: ["AWS Architecture", "Kubernetes Scaling", "Telemetry Audits"],
    bio: "VP of Engineering at Netflix. Manages video transcoding deployment groups. Guides candidates on cloud resilience, telemetry logs, and high-load database connections.",
    imageBg: "linear-gradient(135deg, #8A2387, #E94057, #F27121)"
  },
  {
    name: "Rohan Sen",
    role: "Principal Architect",
    company: "Microsoft",
    topics: ["TypeScript / Node", "Next.js Rendering", "PostgreSQL Schemas"],
    bio: "Principal Architect at Microsoft. Contributes to Next-generation cloud runtimes. Reviews PR inputs, modular layouts, and database schema migrations.",
    imageBg: "linear-gradient(135deg, #00b4db, #0083b0)"
  }
];

export default function MentorsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>DISTINGUISHED ADVISORS</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Meet the Mentors</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Our candidates receive detailed code reviews, architecture critiques, and mock sprint guidelines directly from active corporate leaders.
            </p>
          </div>

          {/* Mentors Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            {mentors.map((m, idx) => (
              <div key={idx} className="glass-card fade-in-up" style={{ padding: "35px", display: "flex", flexDirection: "column", gap: "20px", animationDelay: `${idx * 0.1}s` }}>
                
                {/* Visual Circle Identity */}
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div 
                    style={{ 
                      width: "64px", 
                      height: "64px", 
                      borderRadius: "50%", 
                      background: m.imageBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#FFFFFF"
                    }}
                  >
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "2px" }}>{m.name}</h3>
                    <span style={{ fontSize: "12px", color: "var(--foreground-muted-extra)" }}>{m.role}</span>
                  </div>
                </div>

                <p style={{ fontSize: "13.5px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{m.bio}</p>

                <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "15px", marginTop: "auto" }}>
                  <span style={{ color: "var(--foreground-muted-extra)", display: "block", fontSize: "11px", marginBottom: "8px", fontFamily: "monospace" }}>FOCUS TOPICS</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {m.topics.map((t, i) => (
                      <span key={i} style={{ fontSize: "11px", background: "rgba(91, 45, 145, 0.12)", color: "var(--secondary-magenta)", padding: "2px 8px", borderRadius: "4px" }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ display: "inline-block", fontSize: "12px", color: "var(--primary-purple)", fontWeight: 600, background: "rgba(91, 45, 145, 0.08)", padding: "4px 10px", borderRadius: "20px" }}>
                    Active Reviewer: {m.company}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card" style={{ padding: "50px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)" }}>
            <h3 style={{ fontSize: "24px", color: "var(--foreground)", marginBottom: "12px" }}>Learn directly from the builders.</h3>
            <p style={{ color: "var(--foreground-muted)", marginBottom: "30px", fontSize: "14px" }}>Schedule a diagnostic session with our technical team during your TLET preparation.</p>
            <Link href="/contact" className="glow-btn-primary">
              Apply to Register
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

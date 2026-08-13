import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Techlearns Programs | AI, Data, Cloud, Cybersecurity & Full-Stack Tracks",
  description: "Career tracks built around where demand is actually moving. AI plus execution. Every program pairs current curriculum with corporate practice, industry exposure and competition.",
  alternates: { canonical: "https://techlearns.com/programs" },
  openGraph: {
    title: "Techlearns Programs | AI, Data, Cloud, Cybersecurity & Full-Stack Tracks",
    description: "Career tracks built around where demand is actually moving.",
    url: "https://techlearns.com/programs"
  }
};

const flagshipPrograms = [
  {
    title: "AI Foundations & Productivity",
    duration: "4–6 weeks",
    bestFor: "Students, professionals, non-tech teams",
    outcome: "AI literacy, prompting, workflow design, responsible use",
    competition: "AI Automation Challenge",
    tags: ["AI Literacy", "Prompt Engineering", "Workflow Automation"]
  },
  {
    title: "Generative AI & Agentic AI Engineering",
    duration: "5–6 months",
    bestFor: "Developers / technical graduates",
    outcome: "Python, APIs, RAG, agents, evaluation, deployment, LLMOps",
    competition: "AI Agent Buildathon",
    tags: ["Python", "LangChain", "RAG", "LLMOps", "Agents"]
  },
  {
    title: "Full-Stack Software Engineering with AI",
    duration: "6–9 months",
    bestFor: "Students / career switchers",
    outcome: "DSA, frontend, backend, databases, APIs, cloud, AI-assisted engineering",
    competition: "Hackathon / Product Sprint",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "DSA"]
  },
  {
    title: "Data Analytics + BI + GenAI",
    duration: "4–6 months",
    bestFor: "Graduates / business learners",
    outcome: "Excel, SQL, Python, Power BI, statistics, storytelling",
    competition: "Datathon",
    tags: ["SQL", "Python", "Power BI", "Statistics"]
  },
  {
    title: "Cybersecurity & SOC Analyst",
    duration: "6 months",
    bestFor: "Technical students / graduates",
    outcome: "Networking, SIEM, threat detection, incident response",
    competition: "Cybersecurity CTF",
    tags: ["SIEM", "Threat Detection", "Incident Response", "Networking"]
  },
  {
    title: "Cloud, DevOps & Platform Engineering",
    duration: "6 months",
    bestFor: "Developers / IT learners",
    outcome: "Cloud, Linux, containers, CI/CD, IaC, observability",
    competition: "Cloud Architecture Challenge",
    tags: ["Terraform", "Kubernetes", "CI/CD", "Observability"]
  },
  {
    title: "Data Science, ML & MLOps",
    duration: "6–9 months",
    bestFor: "Technical graduates",
    outcome: "Statistics, ML, deep learning, GenAI, model operations",
    competition: "Bug Bash / Debug Derby",
    tags: ["Python", "ML", "Deep Learning", "MLflow", "GenAI"]
  },
  {
    title: "Data Engineering & Modern Analytics",
    duration: "6 months",
    bestFor: "Developers / analysts",
    outcome: "SQL, pipelines, warehouses, orchestration, governance",
    competition: "API Integration Challenge",
    tags: ["SQL", "Spark", "Kafka", "Snowflake", "Airflow"]
  }
];

const specialistPrograms = [
  "AI Automation & No-Code Workflow Engineering (8–12 weeks)",
  "AI Product Management & Product Analytics (12–16 weeks)",
  "UI/UX + Product Design with AI (4–6 months)",
  "Growth, Digital Marketing & Marketing Automation with AI (4 months)",
  "QA Automation, Test Engineering & AI-Assisted Quality (4–6 months)",
  "IoT, Edge AI & Industry 4.0 Foundations (4–6 months)",
  "Role-based AI programs for HR, Finance, Sales, Operations, Educators and MSMEs"
];

const included = [
  "Diagnostic assessment",
  "Weekly practice & labs",
  "3+ portfolio artifacts",
  "1 team project",
  "1 competition",
  "2+ industry interactions",
  "Credential pathway",
  "Capstone defense",
  "Skill Passport"
];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>

        {/* Hero */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Flagship Career Tracks</span>
            <h1 style={{ fontSize: "48px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", lineHeight: "1.15" }}>
              Career tracks built around<br />
              <span style={{ color: "#CB6CE6" }}>where demand is actually moving</span>
            </h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "650px", margin: "0 auto 32px", fontSize: "18px", lineHeight: "1.7" }}>
              AI plus execution. Every program pairs current curriculum with corporate practice, industry exposure and competition.
            </p>
          </div>
        </section>

        {/* Every program includes */}
        <section style={{ padding: "40px 0 60px", background: "rgba(91, 45, 145, 0.06)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#CB6CE6", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>Every Program Includes</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              {included.map((item, i) => (
                <span key={i} style={{ fontSize: "13px", background: "rgba(91, 45, 145, 0.12)", color: "var(--foreground)", border: "1px solid rgba(203, 108, 230, 0.2)", padding: "6px 14px", borderRadius: "20px", fontWeight: 500 }}>
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship Grid */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "32px", color: "var(--foreground)", fontWeight: 800, marginBottom: "40px", textAlign: "center" }}>Flagship Career Tracks</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
              {flagshipPrograms.map((prog, idx) => (
                <div key={idx} className="glass-card fade-in-up" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "18px", animationDelay: `${idx * 0.07}s` }}>
                  <div>
                    <h2 style={{ fontSize: "22px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>{prog.title}</h2>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "13px", color: "var(--foreground-muted)", marginBottom: "12px" }}>
                      <span>⏱ {prog.duration}</span>
                      <span>👤 {prog.bestFor}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6", borderLeft: "3px solid rgba(203,108,230,0.4)", paddingLeft: "12px" }}>{prog.outcome}</p>
                  </div>

                  <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                      <span style={{ color: "var(--foreground-muted-extra)", fontWeight: 600 }}>COMPETITION</span>
                      <span style={{ color: "#CB6CE6", fontWeight: 600 }}>{prog.competition}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {prog.tags.map((t, i) => (
                      <span key={i} style={{ fontSize: "11px", background: "rgba(91, 45, 145, 0.12)", color: "var(--secondary-magenta)", padding: "2px 8px", borderRadius: "4px" }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: "8px" }}>
                    <Link href="/contact" className="glow-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Talk to a Program Advisor
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialist Programs */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="grid-2col" style={{ gap: "60px", alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: "32px", color: "var(--foreground)", fontWeight: 800, marginBottom: "16px" }}>Specialist & Cross-Functional Programs</h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                  For learners with specific role targets or shorter learning windows — focused, practice-intensive, and built around the same CEL model.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "32px" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {specialistPrograms.map((p, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5" }}>
                      <span style={{ color: "#CB6CE6", flexShrink: 0 }}>→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.03)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px" }}>Not sure which track is right for you?</h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "520px", margin: "0 auto 36px", fontSize: "16px" }}>
                Take a free diagnostic. We'll map your baseline, your role target and the right program for your goals.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="glow-btn-primary">Book a Free Diagnostic</Link>
                <Link href="/cel" className="glow-btn-secondary">How CEL Works</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

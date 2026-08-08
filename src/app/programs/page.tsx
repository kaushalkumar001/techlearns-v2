import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advanced Technology Programs",
  description: "Explore our 6 high-demand, company-aligned specializations: Generative AI, Full Stack, DevOps, Cybersecurity, Data, and MLOps.",
  alternates: {
    canonical: "https://techlearns.com/programs"
  },
  openGraph: {
    title: "Advanced Technology Programs | TechLearns Academy",
    description: "Explore our 6 high-demand, company-aligned specializations: Generative AI, Full Stack, DevOps, Cybersecurity, Data, and MLOps.",
    url: "https://techlearns.com/programs"
  }
};

const programs = [
  {
    title: "Generative AI Engineering",
    duration: "6 Months",
    salary: "₹18 - ₹45 LPA",
    projects: "12 Real Tickets",
    capstone: "Multi-Agent Workflow Orchestrator",
    challenge: "FSL AI Buildathon",
    roles: ["Generative AI Engineer", "LLM Engineer", "AI Solutions Architect"],
    desc: "Master prompt engineering pipelines, LLM fine-tuning, RAG (Retrieval-Augmented Generation) architectures, vector databases, and autonomous agent orchestration."
  },
  {
    title: "AI-Enabled Full Stack Development",
    duration: "12 Months",
    salary: "₹12 - ₹30 LPA",
    projects: "8 Real Tickets",
    capstone: "Real-time Collaborative SaaS Editor",
    challenge: "National Full Stack Hackathon",
    roles: ["Full Stack Developer", "Frontend Engineer", "Backend Solutions Developer"],
    desc: "Build scalable web systems with Next.js, React, Node.js, and Postgres. Leverage AI coding co-pilots for accelerated feature shipping and git workflows."
  },
  {
    title: "Cloud Platform & DevOps Engineering",
    duration: "6 Months",
    salary: "₹14 - ₹35 LPA",
    projects: "10 Real Tickets",
    capstone: "Kubernetes Auto-scaling Multi-Region Pipeline",
    challenge: "DevOps CTF Challenge",
    roles: ["DevOps Engineer", "Cloud Infrastructure Architect", "Site Reliability Engineer"],
    desc: "Provision Infrastructure as Code (IaC) with Terraform. Architect auto-scaling clusters with Kubernetes, setup Github Actions pipelines, and monitor AWS environments."
  },
  {
    title: "Advanced Cybersecurity & Networks",
    duration: "8 Months",
    salary: "₹10 - ₹28 LPA",
    projects: "14 Real Tickets",
    capstone: "Distributed Intrusion Detection Engine",
    challenge: "FSL Cyber CTF Finals",
    roles: ["Security Engineer", "Security Analyst", "Penetration Tester"],
    desc: "Secure enterprise codebases, configure firewalls, identify network threats, and execute advanced ethical hacking audits in virtual sandboxes."
  },
  {
    title: "Data Analytics & Engineering",
    duration: "6 Months",
    salary: "₹9 - ₹24 LPA",
    projects: "9 Real Tickets",
    capstone: "Real-Time Ad-Tech Stream Analytics",
    challenge: "FSL Datathon",
    roles: ["Data Engineer", "Data Analyst", "Analytics Manager"],
    desc: "Manipulate large datasets with Python and SQL. Deploy real-time analytical streaming pipelines with Spark, Kafka, and Snowflake dashboards."
  },
  {
    title: "MLOps Engineering Specialist",
    duration: "8 Months",
    salary: "₹15 - ₹40 LPA",
    projects: "11 Real Tickets",
    capstone: "Real-time LLM Guardrail Monitoring Console",
    challenge: "FSL MLOps Hackathon",
    roles: ["MLOps Engineer", "Machine Learning Platform Engineer", "Data Ops Architect"],
    desc: "Bridge the gap between data science and production deployment. Deploy, version, and monitor ML models using MLflow, DVC, and Triton servers."
  }
];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>CURATED SPECIALIZATIONS</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Our Learning Tracks</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Explore our 6 high-demand, company-aligned specializations. Graduate with a cryptographically verified Skill Passport of evidence.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            {programs.map((prog, idx) => (
              <div key={idx} className="glass-card fade-in-up" style={{ padding: "35px", display: "flex", flexDirection: "column", gap: "20px", animationDelay: `${idx * 0.1}s` }}>
                <div>
                  <h2 style={{ fontSize: "24px", color: "var(--foreground)", marginBottom: "8px" }}>{prog.title}</h2>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{prog.desc}</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", fontSize: "13px", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "16px 0" }}>
                  <div>
                    <span style={{ color: "var(--foreground-muted-extra)", display: "block" }}>DURATION</span>
                    <strong style={{ color: "var(--foreground)" }}>{prog.duration}</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--foreground-muted-extra)", display: "block" }}>AVG. SALARY RANGE</span>
                    <strong style={{ color: "var(--foreground)" }}>{prog.salary}</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--foreground-muted-extra)", display: "block" }}>PRACTICE PROJECTS</span>
                    <strong style={{ color: "var(--foreground)" }}>{prog.projects}</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--foreground-muted-extra)", display: "block" }}>LEAGUE CHALLENGE</span>
                    <strong style={{ color: "var(--foreground)" }}>{prog.challenge}</strong>
                  </div>
                </div>

                <div>
                  <span style={{ color: "var(--foreground-muted-extra)", display: "block", fontSize: "12px", marginBottom: "6px" }}>TARGET CAREER ROLES</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {prog.roles.map((r, i) => (
                      <span key={i} style={{ fontSize: "11px", background: "rgba(91, 45, 145, 0.12)", color: "var(--secondary-magenta)", padding: "2px 8px", borderRadius: "4px" }}>{r}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ color: "var(--foreground-muted-extra)", display: "block", fontSize: "12px", marginBottom: "4px" }}>CAPSTONE SYSTEM</span>
                  <strong style={{ fontSize: "13px", color: "var(--foreground)" }}>{prog.capstone}</strong>
                </div>

                <div style={{ marginTop: "auto", paddingTop: "10px" }}>
                  <Link href="/contact" className="glow-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Apply for Admissions Track
                  </Link>
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

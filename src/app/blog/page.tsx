import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications, Engineering Guides & Placement Research",
  description: "Read active hiring trends, engineering guidelines, prompt workflows, and portfolio reviews.",
  alternates: {
    canonical: "https://techlearns.com/blog"
  },
  openGraph: {
    title: "Publications, Engineering Guides & Placement Research | TechLearns Academy",
    description: "Read active hiring trends, engineering guidelines, prompt workflows, and portfolio reviews.",
    url: "https://techlearns.com/blog"
  }
};

const articles = [
  {
    title: "Why Certificates Are Losing Value in High-Growth Hiring",
    category: "Hiring Trends",
    date: "August 04, 2026",
    summary: "Explore how tech engineering leads use automated code verification pipelines, candidate Git history, and system design assessments to bypass static resume screens.",
    readTime: "5 Min Read"
  },
  {
    title: "Orchestrating Autonomous AI Agents: The Next Big Software Track",
    category: "Generative AI",
    date: "July 28, 2026",
    summary: "Traditional full-stack engineers are transitioning to LLM engineering. Learn the core patterns of prompt workflows, RAG systems, and multi-agent systems.",
    readTime: "8 Min Read"
  },
  {
    title: "How to Build a Verifiable Portfolio that Attracts FAANG Recruiters",
    category: "Career Guidance",
    date: "July 15, 2026",
    summary: "Stop building simple landing pages. Recruiters share details on the telemetry metrics, code comments, test assertions, and agile logs they look for in portfolios.",
    readTime: "6 Min Read"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>RESEARCH &amp; BLOG ARTICLES</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>TechLearns Publication</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Stay updated with active technical guidelines, MLOps orchestration patterns, and research on engineering placement trends.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            {articles.map((art, idx) => (
              <div key={idx} className="glass-card fade-in-up" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "16px", animationDelay: `${idx * 0.1}s` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px" }}>
                  <span style={{ color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase" }}>{art.category}</span>
                  <span style={{ color: "var(--foreground-muted-extra)" }}>{art.date}</span>
                </div>
                
                <div>
                  <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "8px", lineHeight: "1.4" }}>{art.title}</h3>
                  <p style={{ fontSize: "13.5px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{art.summary}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-color)", paddingTop: "14px", marginTop: "auto", fontSize: "12px" }}>
                  <span style={{ color: "var(--foreground-muted-extra)" }}>{art.readTime}</span>
                  <a href="#" style={{ color: "var(--secondary-magenta)", fontWeight: 600 }}>Read Article →</a>
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

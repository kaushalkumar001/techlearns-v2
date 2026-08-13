import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Techlearns Skill Report | Insights on AI, Careers & Future Skills",
  description: "A running read on what's changing in AI, data, cloud, cybersecurity — and what it means for your career.",
  alternates: {
    canonical: "https://techlearns.com/blog"
  },
  openGraph: {
    title: "Techlearns Skill Report | Insights on AI, Careers & Future Skills",
    description: "A running read on what's changing in AI, data, cloud, cybersecurity — and what it means for your career.",
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
        
        {/* Hero Section */}
        <section style={{ padding: "0 0 60px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              TECHLEARNS CONTENT HUB
            </span>
            <h1 className="fade-in-up" style={{ fontSize: "48px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800 }}>
              The Techlearns Skill Report
            </h1>
            <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              A running read on what's changing in AI, data, cloud, cybersecurity — and what it means for your career.
            </p>
          </div>
        </section>

        {/* Content Pillars */}
        <section style={{ padding: "60px 0", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "45px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>PILLARS</span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", marginTop: "8px", fontWeight: 700 }}>Our Content Pillars</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { title: "Proof", desc: "Student demos, project breakdowns, challenge winners, mentor reviews." },
                { title: "Industry Signal", desc: "What companies are adopting; role and tool changes; skill maps." },
                { title: "Learning Experience", desc: "Behind-the-scenes stand-ups, reviews, visits, competitions." },
                { title: "Experts", desc: "Insights from practitioners and advisory council members." },
                { title: "Opportunity", desc: "Competitions, internships, scholarships, open challenge briefs." },
                { title: "Founder Vision", desc: "The future of education, skills and employability in India." }
              ].map((pil, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "24px", borderLeft: "3px solid #CB6CE6" }}>
                  <h3 style={{ fontSize: "16px", color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>{pil.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section style={{ padding: "80px 0 60px" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "45px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>RECENT ARTICLES</span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", marginTop: "8px", fontWeight: 700 }}>Latest Publications</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
              {articles.map((art, idx) => (
                <div key={idx} className="glass-card fade-in-up" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "16px", animationDelay: `${idx * 0.1}s` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px" }}>
                    <span style={{ color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", textTransform: "uppercase" }}>{art.category}</span>
                    <span style={{ color: "var(--foreground-muted-extra)" }}>{art.date}</span>
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "8px", lineHeight: "1.4", fontWeight: 700 }}>{art.title}</h3>
                    <p style={{ fontSize: "13.5px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{art.summary}</p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-color)", paddingTop: "14px", marginTop: "auto", fontSize: "12px" }}>
                    <span style={{ color: "var(--foreground-muted-extra)" }}>{art.readTime}</span>
                    <span style={{ color: "var(--secondary-magenta)", fontWeight: 650 }}>Read Article →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Block */}
        <section style={{ padding: "0 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px", fontWeight: 805 }}>
                Subscribe to the Quarterly Skill Report
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "500px", margin: "0 auto 30px", fontSize: "16px" }}>
                Get the latest insights on skill gaps, engineering job roles, and platform releases directly to your inbox.
              </p>
              
              <NewsletterForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

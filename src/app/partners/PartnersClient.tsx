"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const candidatesList = [
  { name: "Saahil Paul", score: 92, commits: 482, repo: "github.com/saahilpaul/COLLAB-SAAS", ready: "Yes", stack: "Next.js, Python, Redis" },
  { name: "Anya Sharma", score: 94, commits: 620, repo: "github.com/anyasharma/LLM-WORKFLOW", ready: "Yes", stack: "PyTorch, FastAPI, AWS" },
  { name: "Kabir Roy", score: 90, commits: 394, repo: "github.com/kabirroy/K8S-DEVOPS", ready: "Interview Stage", stack: "Terraform, Docker, CI/CD" },
  { name: "Tanvi Sen", score: 88, commits: 350, repo: "github.com/tanvisen/STREAM-ANALYTICS", ready: "Yes", stack: "Apache Spark, SQL, Python" }
];

export default function PartnersClient() {
  const [filterStack, setFilterStack] = useState("");
  const [minScore, setMinScore] = useState(90);

  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section style={{ padding: "24px 0 80px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              PARTNER WITH TECHLEARNS
            </span>
            <h1 className="fade-in-up" style={{ fontSize: "48px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800 }}>
              Build your talent pipeline before the resume stage
            </h1>
            <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              Partner with Techlearns to shape challenge briefs, mentor learners, and access a consent-based, evidence-verified talent pool.
            </p>
            <div style={{ marginTop: "30px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#employers" className="glow-btn-primary">For Employers</a>
              <a href="#colleges" className="glow-btn-secondary">For Colleges &amp; Institutions</a>
            </div>
          </div>
        </section>

        {/* Interactive Recruiter Dashboard Console */}
        <section style={{ padding: "60px 0 80px", background: "rgba(91, 45, 145, 0.02)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>
                RECRUITER WORKSPACE PREVIEW
              </span>
              <h2 style={{ fontSize: "32px", color: "var(--foreground)", marginTop: "8px", fontWeight: 700 }}>
                Filter Talent by Auditable Evidence
              </h2>
            </div>

            <div className="glass-card" style={{ padding: "30px", background: "var(--card-bg)" }}>
              <div style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "20px", marginBottom: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "20px", color: "var(--foreground)", marginBottom: "4px" }}>Verified Candidates Console</h3>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>Simulate filtering our live talent pool based on verified evidence metrics.</p>
                </div>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "10px", fontWeight: 700, color: "var(--foreground-muted-extra)", fontFamily: "monospace" }}>FILTER BY STACK</label>
                    <input
                      type="text"
                      placeholder="e.g. Python, Redis"
                      value={filterStack}
                      onChange={(e) => setFilterStack(e.target.value)}
                      style={{ padding: "6px 12px", borderRadius: "4px", fontSize: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-color)", color: "var(--foreground)" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "10px", fontWeight: 700, color: "var(--foreground-muted-extra)", fontFamily: "monospace" }}>MIN SKILL SCORE ({minScore}%)</label>
                    <input
                      type="range"
                      min={85}
                      max={95}
                      value={minScore}
                      onChange={(e) => setMinScore(Number(e.target.value))}
                      style={{ width: "130px", accentColor: "#CB6CE6" }}
                    />
                  </div>
                </div>
              </div>

              {/* Candidate Table */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "650px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "10px" }}>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", color: "var(--foreground-muted-extra)" }}>Candidate</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", color: "var(--foreground-muted-extra)" }}>Skill Score</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", color: "var(--foreground-muted-extra)" }}>Verified Commit History</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", color: "var(--foreground-muted-extra)" }}>Vetted Stack</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: "12px", color: "var(--foreground-muted-extra)" }}>Placement Code Audit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidatesList
                      .filter(c => c.score >= minScore && (filterStack === "" || c.stack.toLowerCase().includes(filterStack.toLowerCase())))
                      .map((cand, idx) => (
                        <tr key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          <td style={{ padding: "16px 12px", fontWeight: 700, color: "var(--foreground)" }}>{cand.name}</td>
                          <td style={{ padding: "16px 12px", fontWeight: 700, color: "#CB6CE6" }}>{cand.score}%</td>
                          <td style={{ padding: "16px 12px", color: "var(--foreground-muted)" }}>{cand.commits} Audited Commits</td>
                          <td style={{ padding: "16px 12px", fontSize: "12px" }}>
                            {cand.stack.split(", ").map((s, i) => (
                              <span key={i} style={{ display: "inline-block", background: "rgba(255, 255, 255, 0.05)", padding: "2px 6px", borderRadius: "4px", marginRight: "4px", color: "var(--foreground-muted)" }}>{s}</span>
                            ))}
                          </td>
                          <td style={{ padding: "16px 12px", fontFamily: "monospace", color: "#27C93F", fontSize: "11px" }}>{cand.repo}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* For Employers Section */}
        <section id="employers" style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                CO-BUILDING CAPABILITY
              </span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "8px", fontWeight: 800 }}>
                For Employers
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "10px auto 0", fontSize: "15px" }}>
                See how industry engagement connects directly to learner outcomes inside our curriculum ecosystem.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "0px", overflow: "hidden", border: "1px solid var(--border-color)", marginBottom: "50px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "rgba(91, 45, 145, 0.15)", borderBottom: "1px solid var(--border-color)" }}>
                    <th style={{ padding: "16px 24px", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", width: "40%" }}>You Contribute</th>
                    <th style={{ padding: "16px 24px", color: "#FFFFFF", fontWeight: 700, fontSize: "15px" }}>We Create</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { contribute: "Expert talk", create: "Pre-reading, learner questions, reflection output" },
                    { contribute: "Industry visit", create: "Learning objectives, observation sheet, post-visit challenge" },
                    { contribute: "Challenge brief", create: "Teams, milestone reviews, jury and evidence" },
                    { contribute: "Mentor hours", create: "Structured rubric and feedback history" },
                    { contribute: "Project data / case", create: "Safe problem statement, confidentiality controls, evaluation" },
                    { contribute: "Internships", create: "Readiness criteria, tracking, learning outcomes" },
                    { contribute: "Hiring showcase", create: "Role-specific evidence view and interview days" },
                    { contribute: "Technology credits / labs", create: "Responsible use, access policy, learning integration" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                      <td style={{ padding: "16px 24px", fontWeight: 600, color: "#FFFFFF" }}>{row.contribute}</td>
                      <td style={{ padding: "16px 24px", color: "var(--foreground-muted)" }}>{row.create}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Corporate Advisory Council */}
            <div className="glass-card" style={{ padding: "40px", borderLeft: "4px solid #CB6CE6", background: "rgba(203, 108, 230, 0.02)" }}>
              <h3 style={{ fontSize: "20px", color: "#FFFFFF", fontWeight: 700, marginBottom: "12px" }}>
                🛡️ Corporate Advisory Council
              </h3>
              <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                A 12–20 member council spanning AI, software, data, cybersecurity, cloud, product and HR/talent — meeting quarterly to review curriculum relevance, challenge statements, emerging skills and learner evidence.
              </p>
            </div>

            <div style={{ marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link href="/contact" className="glow-btn-primary">
                Join the Advisory Council
              </Link>
              <Link href="/contact" className="glow-btn-secondary">
                Submit a Challenge Brief
              </Link>
            </div>
          </div>
        </section>

        {/* For Colleges Section */}
        <section id="colleges" style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="grid-2col" style={{ gap: "60px", alignItems: "center" }}>
              <div>
                <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  FOR COLLEGES &amp; INSTITUTIONS
                </span>
                <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800, lineHeight: "1.2" }}>
                  Deploy a plug-and-play employability layer
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
                  Techlearns operates as a complementary employability layer: baseline assessment, role tracks, weekly practice, live instruction, scheduled offline immersion, competitions, SkillOS analytics and a shared outcome dashboard — modular enough to sit alongside your academic timetable.
                </p>
                <Link href="/contact" className="glow-btn-primary">
                  Explore Techlearns-in-Campus
                </Link>
              </div>

              <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 700 }}>Ecosystem Integration Modules</h3>
                {[
                  { title: "Baseline Assessment", desc: "Diagnostic testing for all students to discover aptitude vectors." },
                  { title: "SkillOS Student Analytics", desc: "Verifiable progress maps replacing static resume claims." },
                  { title: "Future Skills League Access", desc: "Direct entries into regional qualifiers and national hackathons." },
                  { title: "Outcome Dashboard", desc: "Institutional dashboard tracking coding consistency and placements." }
                ].map((mod, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "#CB6CE6", fontWeight: "bold" }}>⚡</span>
                    <div>
                      <strong style={{ fontSize: "14px", color: "#FFFFFF", display: "block" }}>{mod.title}</strong>
                      <span style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>{mod.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

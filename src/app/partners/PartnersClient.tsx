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
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>EMPLOYER HIRING CHANNELS</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Industry Partners &amp; Placements</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Skip traditional CV screening blocks. Direct hire candidates pre-vetted with blockchain-certified Skill Passports.
            </p>
          </div>

          {/* Interactive Recruiter Dashboard Mock */}
          <div className="glass-card" style={{ padding: "40px", marginBottom: "80px", background: "var(--card-bg)" }}>
            <div style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "20px", marginBottom: "30px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: "22px", color: "var(--foreground)", marginBottom: "4px" }}>Verified Candidates Console</h2>
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

            {/* Candidate Table Mocks */}
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
                            <span key={i} style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: "4px", marginRight: "4px", color: "var(--foreground-muted)" }}>{s}</span>
                          ))}
                        </td>
                        <td style={{ padding: "16px 12px", fontFamily: "monospace", color: "#27C93F", fontSize: "11px" }}>{cand.repo}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Partner Perks Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "60px" }}>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Zero Screening Cycles</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Audit the actual repository work, commit depth, lint outputs, and code review history of candidates pre-hiring.</p>
            </div>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Pre-Placement Alignment</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Secure early hiring pipelines. Partner companies evaluate candidates during TLET and lock in specialized tracks.</p>
            </div>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Vetted Agile Aptitude</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Our candidates enter your company with 12 months of daily sprint syncs, code reviews, and remote git experience.</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

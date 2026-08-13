"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function SkillOSClient() {
  const [consoleLog, setConsoleLog] = useState<string[]>([
    "// Welcome to SkillOS console terminal v1.2",
    "[INFO] Initializing Node runtime environment...",
    "[INFO] Fetching current active backlog ticket #DEV-44...",
    "[INFO] Run commands or execute unit tests using the console panel."
  ]);
  const [userInput, setUserInput] = useState("");

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    let response = `Unknown command: '${userInput}'. Try 'npm test' or 'git status'.`;
    if (userInput.toLowerCase() === "npm test") {
      response = "✓ PASS tests/auth.test.ts (4 assertions passed, 0 failed)";
    } else if (userInput.toLowerCase() === "git status") {
      response = "On branch feature/auth-dev-44\nYour branch is up to date.\nChanges not staged for commit:\n  (use \"git add <file>...\" to update)\n\tmodified:   src/app/page.tsx";
    }

    setConsoleLog(prev => [...prev, `$ ${userInput}`, response]);
    setUserInput("");
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        
        {/* Hero Section */}
        <section style={{ padding: "0 0 60px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              TECHLEARNS platform
            </span>
            <h1 className="fade-in-up" style={{ fontSize: "48px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800 }}>
              Not an LMS. An operating system for capability.
            </h1>
            <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              A standard LMS manages content. SkillOS manages what you can actually do — and proves it.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a href="#demo" className="glow-btn-primary">See a SkillOS Demo</a>
            </div>
          </div>
        </section>

        {/* Interactive Terminal simulator block */}
        <section style={{ padding: "40px 0 80px" }}>
          <div className="container">
            <div className="grid-split" style={{ gap: "50px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ fontSize: "28px", color: "var(--foreground)", fontWeight: 700 }}>Interactive Terminal Simulator</h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                  Type commands directly into the terminal widget to simulate executing test suites or checking your Git repository status in our coding workspace.
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, fontSize: "13px", color: "var(--foreground-muted)" }}>
                  <li>🔧 Type <strong style={{ color: "#CB6CE6" }}>npm test</strong> to execute automated test validation.</li>
                  <li>🔧 Type <strong style={{ color: "#CB6CE6" }}>git status</strong> to check unstaged repository files.</li>
                </ul>
              </div>

              {/* Simulated Terminal */}
              <div 
                className="glass-card" 
                style={{ 
                  padding: "24px", 
                  backgroundColor: "rgba(0,0,0,0.4)", 
                  borderColor: "var(--border-color)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  lineHeight: "1.6",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  height: "320px",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", maxHeight: "230px" }}>
                  {consoleLog.map((log, idx) => (
                    <pre key={idx} style={{ margin: 0, whiteSpace: "pre-wrap", color: log.startsWith("$") ? "var(--secondary-magenta)" : log.startsWith("✓") ? "#27C93F" : "var(--foreground-muted)" }}>
                      {log}
                    </pre>
                  ))}
                </div>

                <form onSubmit={handleRunCommand} style={{ display: "flex", gap: "10px", borderTop: "1px solid var(--border-color)", paddingTop: "10px" }}>
                  <span style={{ color: "#CB6CE6" }}>$</span>
                  <input 
                    type="text" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type npm test or git status..." 
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "var(--foreground)",
                      width: "100%",
                      fontSize: "12px",
                      fontFamily: "monospace"
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Modules Table */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                COMPREHENSIVE LAYERS
              </span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "8px", fontWeight: 800 }}>
                Platform Modules
              </h2>
            </div>

            <div className="glass-card" style={{ padding: 0, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "rgba(91, 45, 145, 0.15)", borderBottom: "1px solid var(--border-color)" }}>
                    <th style={{ padding: "16px 24px", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", width: "30%" }}>Module</th>
                    <th style={{ padding: "16px 24px", color: "#FFFFFF", fontWeight: 700, fontSize: "15px" }}>What It Does</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { module: "Identity & Diagnostic", desc: "Learner profile, goals, baseline tests, role-fit map" },
                    { module: "Role Skill Graph", desc: "Competency map by job role with prerequisites and evidence" },
                    { module: "Learning Hub", desc: "Live schedules, recordings, notes, microlearning" },
                    { module: "Practice Engine", desc: "Coding, SQL, quizzes, cloud labs, security labs, drills" },
                    { module: "AI Learning Coach", desc: "Practice suggestions, explanations, revision plans — with safety controls" },
                    { module: "Project Workspace", desc: "Briefs, teams, milestones, files, Git links, reviews" },
                    { module: "Corporate Simulation", desc: "Tickets, sprint board, stand-ups, review gates, demo records" },
                    { module: "Competition Engine", desc: "Challenges, team formation, submissions, judging, leaderboards" },
                    { module: "Skill Passport", desc: "Verified evidence, portfolio links, scores, credentials" },
                    { module: "Mentor Cockpit", desc: "At-risk alerts, progress tracking, intervention, feedback history" },
                    { module: "Industry / Recruiter View", desc: "Consent-based talent showcase and proof of capability" },
                    { module: "Certification Tracker", desc: "Target credential, prep status, exam readiness" },
                    { module: "Career Hub", desc: "Resume, interview practice, role matching, application tracker" },
                    { module: "Ecosystem Analytics", desc: "Cohort health, skill gaps, mentor effectiveness, outcomes" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                      <td style={{ padding: "16px 24px", fontWeight: 700, color: "#FFFFFF" }}>{row.module}</td>
                      <td style={{ padding: "16px 24px", color: "var(--foreground-muted)" }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dashboard Philosophy */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                OUR PHILOSOPHY
              </span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "8px", fontWeight: 800 }}>
                Growth, Not Vanity
              </h2>
            </div>

            <div className="grid-2col" style={{ gap: "30px" }}>
              <div className="glass-card" style={{ padding: "40px", borderTop: "3px solid #27C93F", background: "rgba(39, 201, 63, 0.02)" }}>
                <h3 style={{ fontSize: "18px", color: "#27C93F", fontWeight: 700, marginBottom: "20px" }}>🟢 We Show</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: 0, fontSize: "14px", color: "var(--foreground-muted)" }}>
                  <li>🔹 Skill mastery trend &amp; consistency</li>
                  <li>🔹 Quality of project evidence &amp; artifacts</li>
                  <li>🔹 Improvement after reviews &amp; feedback</li>
                  <li>🔹 Team contribution &amp; stand-up logs</li>
                  <li>🔹 Role readiness gaps &amp; trajectory</li>
                </ul>
              </div>

              <div className="glass-card" style={{ padding: "40px", borderTop: "3px solid var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)" }}>
                <h3 style={{ fontSize: "18px", color: "#CB6CE6", fontWeight: 700, marginBottom: "20px" }}>🔴 We Don't Over-Reward</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: 0, fontSize: "14px", color: "var(--foreground-muted)" }}>
                  <li>🔸 Hours watched &amp; idle course progress</li>
                  <li>🔸 Passive logins &amp; vanity clicks</li>
                  <li>🔸 Low-value certificate count templates</li>
                  <li>🔸 One-time quiz luck or search-lookup runs</li>
                  <li>🔸 Leaderboard gaming or generic completion percentages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes SkillOS Different */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "11px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                CORE DIFFERENTIATORS
              </span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "8px", fontWeight: 800 }}>
                What Makes SkillOS Different
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { title: "Evidence Graph", desc: "Every skill links to the assessment, artifact or review that proves it." },
                { title: "Competition Seasons", desc: "Inter-cohort and inter-college leagues with auditable scoring." },
                { title: "Intervention Engine", desc: "Flags falling practice, repeated errors or low confidence automatically." },
                { title: "Mentor Calibration", desc: "Common rubrics reduce inconsistent scoring across evaluations." },
                { title: "Recruiter-Ready Views", desc: "Concise, role-specific, consent-based and auditable profile dashboards." },
                { title: "Curriculum Telemetry", desc: "Spots where entire cohorts struggle, so teaching updates fast." }
              ].map((diff, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "28px" }}>
                  <h3 style={{ fontSize: "17px", color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>{diff.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Signup conversion block */}
        <section id="demo" style={{ padding: "80px 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px", fontWeight: 800 }}>
                Experience SkillOS in action
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "500px", margin: "0 auto 30px", fontSize: "16px" }}>
                Get a custom workspace walkthrough or set up diagnostic assessments for your cohort.
              </p>
              <Link href="/contact" className="glow-btn-primary">
                Book a SkillOS Walkthrough →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

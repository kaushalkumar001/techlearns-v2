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
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>PLATFORM WORKSPACE</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Powered by SkillOS</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              SkillOS is your unified developer console tracking active tickets, PR logs, code review diagnostics, and telemetry analysis.
            </p>
          </div>

          {/* Interactive terminal mockup */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "50px", alignItems: "center", marginBottom: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2 style={{ fontSize: "28px", color: "var(--foreground)" }}>Interactive Terminal Simulator</h2>
              <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.7" }}>
                Type commands directly into the terminal widget on the right to simulate executing test suites or checking your Git repository status.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, fontSize: "13px", color: "var(--foreground-muted)" }}>
                <li>🔧 Type <strong style={{ color: "var(--secondary-magenta)" }}>npm test</strong> to execute automated test validation.</li>
                <li>🔧 Type <strong style={{ color: "var(--secondary-magenta)" }}>git status</strong> to check unstaged repository files.</li>
              </ul>
            </div>

            {/* Simulated Terminal */}
            <div 
              className="glass-card" 
              style={{ 
                padding: "24px", 
                backgroundColor: "var(--code-bg)", 
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
                  <div key={idx} style={{ color: log.startsWith("$") ? "var(--secondary-magenta)" : log.startsWith("✓") ? "#27C93F" : "var(--foreground-muted)" }}>
                    {log}
                  </div>
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

          {/* Key platform layers */}
          <div style={{ margin: "80px 0 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>1. Practice Engine</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Continuous coding challenges evaluated against strict automated unit tests. Focus on writing clean code.</p>
            </div>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>2. PR Review Pipeline</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Direct feedback loop on your GitHub pull request commits, with structural review comments from corporate engineering guides.</p>
            </div>
            <div className="glass-card" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>3. Analytics &amp; telemetry</h3>
              <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Track coding efficiency, deployment velocity, system design capability, and agile metrics directly on your dashboard.</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

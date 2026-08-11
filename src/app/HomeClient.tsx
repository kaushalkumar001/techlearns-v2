"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data Structure definitions
const celStages = [
  { name: "ENTRANCE", title: "Milestone 01: Qualify TLET Entrance Test", desc: "Pass the TechLearns Entrance Test (TLET) to assess analytical thinking, core logic, and technical aptitude.", task: "TLET Exam & Analytical Diagnostics" },
  { name: "GATEWAY", title: "Milestone 02: Corporate Gateway", desc: "Secure your pass to Cyber Hub, Gurugram (or remote gateway) for physical/hybrid onboarding and immersion.", task: "DLF Cyber City Onboarding" },
  { name: "SELECTION", title: "Milestone 03: Hiring Drive Selection", desc: "Showcase your portfolio and coding skills to top-tier technology recruiters and engineering leads during active selection sprints.", task: "Hiring Drives & Recruiter Sprints" },
  { name: "CONFIRM", title: "Milestone 04: Pre-Placement Offer (PPO)", desc: "Secure a formal, legally backed Pre-Placement Offer Letter containing your compensation and role parameters before core training begins.", task: "PPO Verification & Career Security" },
  { name: "LAUNCH", title: "Milestone 05: Experiential Tech Training", desc: "Undergo 6-12 months of rigorous AI-enabled software engineering training, working in agile sprints to ship real code.", task: "Core Engineering & Production Deployments" }
];

const celWorkflows = [
  { title: "Sprint Planning", desc: "Define backlog items, assign tickets, and estimate story points like a professional engineering crew.", icon: "📋" },
  { title: "Daily Standup", desc: "Sync development updates, report blockers, and align day-to-day milestones in 15-minute syncs.", icon: "⏰" },
  { title: "Git Workflow", desc: "Create feature branches, perform rebase operations, and merge PRs following strict team standards.", icon: "🌿" },
  { title: "Peer Review", desc: "Conduct syntax audits, comment on design architectures, and request approvals before deployment.", icon: "👁️" },
  { title: "Demo Day", desc: "Present live working builds to external technical experts, detailing engineering constraints and metrics.", icon: "🚀" },
  { title: "Industry Review", desc: "Recieve code audits from engineering leaders at Google, Meta, and Netflix to verify passport skills.", icon: "👔" }
];

const skillOSTabs = [
  { id: "practice", label: "Practice Engine", title: "Continuous Interactive Coding", desc: "Execute automated code challenges verified against unit tests. Monitor performance benchmarks, runtime memory, and clean formatting styles in real-time." },
  { id: "projects", label: "Real Projects", title: "Agile Workspace Dashboard", desc: "Claim unresolved system tickets directly on a mock Jira dashboard. Write code locally, commit to GitHub, and see tests validate on deploy hooks." },
  { id: "competitions", label: "League CTFs", title: "Future Skills League Hub", desc: "Compete in national buildathons, optimize data algorithms, and attempt security capture-the-flags to push your name up the live leaderboards." },
  { id: "mentor", label: "Code Reviews", title: "Asynchronous Mentor Feedback", desc: "Review comments left on your Pull Requests by engineering leaders, showing precisely where to improve modular architecture and readability." },
  { id: "analytics", label: "Skill Passport Analytics", title: "Engineering Competency Heatmap", desc: "Visualize an interactive graph tracking Git activity, deployment velocity, communication scores, system design competency, and coding test metrics." },
  { id: "career", label: "Recruiter Board", title: "Verified Placement Channels", desc: "Authorize hiring corporations to search your verified portfolio, check your code history, review project architecture documents, and request interviews." }
];

const programsList = [
  { title: "Generative AI Engineering", duration: "6 Months", salary: "₹18 - ₹45 LPA", projects: 12, capstone: "Multi-Agent Workflow Orchestrator", challenge: "FSL AI Buildathon" },
  { title: "AI-Enabled Full Stack", duration: "12 Months", salary: "₹12 - ₹30 LPA", projects: 8, capstone: "Real-time Collaborative SaaS Editor", challenge: "National Full Stack Hackathon" },
  { title: "Cloud Platform & DevOps", duration: "6 Months", salary: "₹14 - ₹35 LPA", projects: 10, capstone: "Kubernetes Auto-scaling Pipeline", challenge: "DevOps CTF Challenge" },
  { title: "Cybersecurity & Networks", duration: "8 Months", salary: "₹10 - ₹28 LPA", projects: 14, capstone: "Distributed Intrusion Detection Engine", challenge: "FSL Cyber CTF Finals" },
  { title: "Data Analytics & Engineering", duration: "6 Months", salary: "₹9 - ₹24 LPA", projects: 9, capstone: "Real-Time Ad-Tech Stream Analytics", challenge: "FSL Datathon" },
  { title: "MLOps Engineering", duration: "8 Months", salary: "₹15 - ₹40 LPA", projects: 11, capstone: "Real-time LLM Guardrail Monitoring", challenge: "FSL MLOps Hackathon" }
];

const leaderboardData = [
  { rank: 1, name: "Saahil Paul", score: 2940, batch: "AI-2026A", badge: "Grandmaster" },
  { rank: 2, name: "Anya Sharma", score: 2810, batch: "FS-2026B", badge: "Master" },
  { rank: 3, name: "Kabir Roy", score: 2750, batch: "DO-2026A", badge: "Master" },
  { rank: 4, name: "Tanvi Sen", score: 2680, batch: "AI-2026A", badge: "Expert" }
];

const recruiterCandidates = [
  { name: "Saahil Paul", role: "Full Stack Engineer", score: "92%", commits: "482 commits", ready: "Placement Ready", stack: "Next.js, Python, Redis" },
  { name: "Anya Sharma", role: "AI & ML Specialist", score: "94%", commits: "620 commits", ready: "Placement Ready", stack: "PyTorch, FastAPI, Docker" },
  { name: "Kabir Roy", role: "DevOps Architect", score: "90%", commits: "394 commits", ready: "Interview Stage", stack: "Terraform, Kubernetes, GitHub Actions" }
];

const successStoriesList = [
  {
    name: "Rohan Das",
    role: "Software Engineer at AWS",
    before: "Struggling graduate watching recorded videos",
    projects: "Built high-frequency order match trading engine",
    competitions: "Ranked 3rd in Future Skills League",
    offer: "Joined AWS at ₹28 LPA package",
    avatarBg: "linear-gradient(135deg, #FF9900, #FF5500)"
  },
  {
    name: "Nikita Kapoor",
    role: "AI Engineer at Microsoft",
    before: "Non-CS background doing traditional courses",
    projects: "Created autonomous multimodal document parser",
    competitions: "Won AI Buildathon 2025",
    offer: "Joined Microsoft AI Group at ₹34 LPA",
    avatarBg: "linear-gradient(135deg, #00A4EF, #0078D7)"
  }
];

const faqsList = [
  {
    question: "How is Techlearns different from platforms like Scaler or traditional bootcamps?",
    answer: "Traditional bootcamps function like 'Netflix for courses'—you watch videos, do exercises, and get a certificate. Techlearns functions like joining a software company. You get assigned actual system tickets, work in agile development teams with standups, compete in the national Future Skills League, and graduate with a verified Skill Passport showing audit-proof evidence of your coding, collaboration, and deployment skills."
  },
  {
    question: "What does the 'Pre-Hired First, Then Trained' model mean?",
    answer: "It means selected candidates receive a formal Pre-Placement Offer Letter (PPO) containing clear role, location, and salary parameters before their core technical training begins. You secure your career outcome first, and then undergo focused, mentor-led training to master the exact technology stack required by your hiring employer."
  },
  {
    question: "What is the Skill Passport and how is it evaluated?",
    answer: "The Skill Passport is a cryptographic, verified candidate profile that replaces traditional resume resumes. It maps actual code verification links, Git commit records, peer review logs, team-project scores, and hackathon standing data directly to a single shareable profile. Employers don't just see a certificate; they audit the real history of everything you built."
  },
  {
    question: "Do I get an internship or pre-placement offer before the program?",
    answer: "Yes, candidates qualifying our entrance exams are eligible for early pre-placement letters (PPOs) from our network of 200+ partner companies. You lock in your hire parameters first, then undergo specialized training aligned with the hiring company's technology stack."
  },
  {
    question: "What happens if I fail the TLET Entrance Test?",
    answer: "If you fail, you can access our free prep tracks containing core logical frameworks, syntax exercises, and programming fundamentals. You are welcome to re-attempt the TLET exam in 30 days."
  }
];

export default function HomeClient() {
  const [activeCel, setActiveCel] = useState(0);
  const [activeSkillOSTab, setActiveSkillOSTab] = useState("analytics");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [recruiterSearch, setRecruiterSearch] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Generative AI Engineering",
    year: "2026",
    experience: "Student",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Header />

      <main style={{ minHeight: "100%", background: "transparent" }}>
        
        {/* 1. HERO SECTION */}
        <section id="hero" style={{ position: "relative", padding: "120px 0 100px", overflow: "hidden" }}>
          <div className="glow-bg" style={{ top: "5%", left: "-5%" }}></div>
          <div className="glow-bg" style={{ bottom: "5%", right: "-5%", background: "var(--secondary-magenta)" }}></div>
          
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <span 
                className="fade-in-up"
                style={{
                  alignSelf: "flex-start",
                  background: "rgba(203, 108, 230, 0.12)",
                  border: "1px solid rgba(203, 108, 230, 0.3)",
                  color: "var(--secondary-magenta)",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 650,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  animationDelay: "0.05s"
                }}
              >
                ⚡ Cohort 2026 Admissions Open
              </span>
              
              <h1 className="fade-in-up" style={{ fontSize: "56px", lineHeight: "1.1", fontWeight: 900, color: "var(--foreground)", animationDelay: "0.15s" }}>
                India's 1st <br />
                <span className="text-gradient-purple">Pre-Hired School</span> <br />
                for Software Engineers.
              </h1>
              
              <p className="fade-in-up" style={{ fontSize: "18px", color: "var(--foreground-muted)", lineHeight: "1.65", animationDelay: "0.25s" }}>
                At TechLearns Academy, you get pre-hired first, then trained. Powered by Industry Titans, Defined by Performance. Get a guaranteed placement letter before your course begins.
              </p>
              
              <div className="fade-in-up" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "10px", animationDelay: "0.35s" }}>
                <Link href="/programs" className="glow-btn-primary">
                  Explore Academics
                </Link>
                <a href="#contact" className="glow-btn-secondary">
                  Experience a Live Lab
                </a>
              </div>
            </div>

            {/* Journey Card inspired by GCC School */}
            <div className="floating fade-in-up" style={{ display: "flex", justifyContent: "center", animationDelay: "0.2s", width: "100%" }}>
              <div 
                className="glass-card" 
                style={{ 
                  width: "100%", 
                  maxWidth: "520px", 
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  backgroundColor: "var(--card-bg)",
                  borderColor: "rgba(203, 108, 230, 0.2)",
                  position: "relative",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Admissions Portfolio
                  </span>
                  <h2 style={{ fontSize: "28px", fontWeight: 800, color: "var(--foreground)", lineHeight: "1.3", margin: 0 }}>
                    Start Your Journey <br />
                    With <span className="text-gradient-purple">TechLearns</span>
                  </h2>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: "8px 0 0 0" }}>
                    Qualify for a unique 6 to 12 Months AI-Enabled Experiential Software Engineering Program. Get hired by top technology companies first, then undergo structured, mentor-led training.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "20px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>🎓</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Entrance Qualification</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>TLET Admission Test</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>🏢</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Corporate Gateway</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>DLF Cyber City, Gurugram & Remote</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>🎫</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Global Recognition</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>Verified Skill Passport</div>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="glow-btn-primary" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "14px 20px" }}>
                  Download Syllabus & Dossier
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section id="problem" style={{ padding: "100px 0 80px", background: "rgba(255, 255, 255, 0.015)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Why Most Students Still Struggle After Completing Courses</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "650px", margin: "0 auto", animationDelay: "0.1s" }}>
                Generic tutorials make you feel like you are learning. But the moment you face real code repositories, everything breaks.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div className="glass-card fade-in-up" style={{ padding: "30px", borderLeft: "4px solid #FF5F56", animationDelay: "0.1s" }}>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>❌ Passive Watching</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Watched 300 hours of video lectures. Felt comfortable, but never designed custom database schemas or cloud runtimes from scratch.</p>
              </div>
              <div className="glass-card fade-in-up" style={{ padding: "30px", borderLeft: "4px solid #FF5F56", animationDelay: "0.2s" }}>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>❌ Ad-Hoc Assignments</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Completed toy assignments on simplified sandboxes. Never solved git merge conflicts or integrated API gateways.</p>
              </div>
              <div className="glass-card fade-in-up" style={{ padding: "30px", borderLeft: "4px solid #FF5F56", animationDelay: "0.3s" }}>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>❌ Certificate Fallacy</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Received visual certificate badges. Have no verifiable proof-of-work link, commits ledger, or peer reviews to show recruiters.</p>
              </div>
            </div>

            <div className="glass-card fade-in-up" style={{ padding: "40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.03)", animationDelay: "0.4s" }}>
              <h3 style={{ fontSize: "28px", color: "var(--foreground)", marginBottom: "12px", fontWeight: 800 }}>
                The Industry Doesn't Hire <span style={{ color: "#CB6CE6" }}>Certificates.</span>
              </h3>
              <p style={{ fontSize: "24px", color: "var(--foreground)", fontWeight: 700 }}>
                It Hires <span className="text-gradient-purple">Evidence.</span>
              </p>
            </div>

          </div>
        </section>

        {/* 3. WHAT MAKES TECHLEARNS DIFFERENT */}
        <section id="comparison" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Traditional Platforms vs. <span style={{ color: "#CB6CE6" }}>TechLearns</span></h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                How TechLearns Academy transforms learning from passive consumer tutorials to professional builder sprints.
              </p>
            </div>

            <div className="overflowX: auto fade-in-up" style={{ animationDelay: "0.2s" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "650px" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "20px", textAlign: "left" }}>Learning Dimensions</th>
                    <th style={{ padding: "20px", textAlign: "left" }}>Traditional Platforms</th>
                    <th style={{ padding: "20px", textAlign: "left" }}>TechLearns Academy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "20px", fontWeight: 600 }}>Core Paradigm</td>
                    <td style={{ padding: "20px" }}>Learn &amp; Watch videos</td>
                    <td style={{ padding: "20px", fontWeight: 600, color: "var(--primary-purple-bright)" }}>Learn + Build Real Systems</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "20px", fontWeight: 600 }}>Problem Focus</td>
                    <td style={{ padding: "20px" }}>Academic toy assignments</td>
                    <td style={{ padding: "20px", fontWeight: 600, color: "var(--primary-purple-bright)" }}>Real-World Business Tickets</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "20px", fontWeight: 600 }}>Team Mechanics</td>
                    <td style={{ padding: "20px" }}>Solo project building</td>
                    <td style={{ padding: "20px", fontWeight: 600, color: "var(--primary-purple-bright)" }}>Agile Team Sprints (SCRUM)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "20px", fontWeight: 600 }}>Outcome Proof</td>
                    <td style={{ padding: "20px" }}>Unverified certificates</td>
                    <td style={{ padding: "20px", fontWeight: 600, color: "var(--primary-purple-bright)" }}>Verified Skill Passport Dashboard</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "20px", fontWeight: 600 }}>Audit Trail</td>
                    <td style={{ padding: "20px" }}>Recorded progress charts</td>
                    <td style={{ padding: "20px", fontWeight: 600, color: "var(--primary-purple-bright)" }}>Verifiable Git History &amp; PR Reviews</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "20px", fontWeight: 600 }}>Interview Preparation</td>
                    <td style={{ padding: "20px" }}>Static mock Q&amp;A sessions</td>
                    <td style={{ padding: "20px", fontWeight: 600, color: "var(--primary-purple-bright)" }}>12-Month Experiential Corporate Workflow</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* 4. CORPORATE EXPERIENCE LEARNING (CEL) */}
        <section id="cel" style={{ padding: "100px 0 80px", position: "relative", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "65px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Corporate Experience Learning (CEL)</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Our 9-step learning pipeline simulates a tech enterprise. Click through the timeline blocks to inspect details.
              </p>
            </div>

            {/* Clickable horizontal timeline */}
            <div 
              className="fade-in-up"
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                flexWrap: "wrap", 
                gap: "10px", 
                marginBottom: "40px",
                borderBottom: "1px solid var(--border-color)",
                paddingBottom: "20px",
                animationDelay: "0.2s"
              }}
            >
              {celStages.map((stage, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCel(i)}
                  style={{
                    background: activeCel === i ? "linear-gradient(135deg, var(--primary-purple) 0%, var(--primary-purple-light) 100%)" : "transparent",
                    color: activeCel === i ? "#FFFFFF" : "var(--foreground-muted)",
                    border: activeCel === i ? "none" : "1px solid var(--border-color)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "monospace"
                  }}
                >
                  {stage.name}
                </button>
              ))}
            </div>

            {/* Active Stage Detail card */}
            <div className="glass-card fade-in-up" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", animationDelay: "0.3s" }}>
              <div>
                <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>ACTIVE PIPELINE STEP</span>
                <h3 style={{ fontSize: "28px", color: "var(--foreground)", margin: "8px 0 16px" }}>{celStages[activeCel].title}</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--foreground-muted)", marginBottom: "20px" }}>{celStages[activeCel].desc}</p>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27C93F" }}></span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--foreground)", fontFamily: "monospace" }}>Current Focus: {celStages[activeCel].task}</span>
                </div>
              </div>
              <div 
                className="glass-card" 
                style={{ 
                  padding: "24px", 
                  background: "rgba(0,0,0,0.1)", 
                  border: "1px solid var(--border-color)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  lineHeight: "1.7"
                }}
              >
                <span style={{ color: "#CB6CE6" }}>$ curl -H "Authorization: Bearer passport_token" \</span><br />
                <span style={{ paddingLeft: "16px" }}>https://api.techlearns.com/v1/cel/verify</span><br /><br />
                <span style={{ color: "var(--foreground-muted)" }}>&#123;</span><br />
                <span style={{ paddingLeft: "16px", color: "var(--foreground-muted)" }}>"stage": "{celStages[activeCel].name}",</span><br />
                <span style={{ paddingLeft: "16px", color: "var(--foreground-muted)" }}>"status": "VERIFIED_COMPLETED",</span><br />
                <span style={{ paddingLeft: "16px", color: "var(--foreground-muted)" }}>"metricScore": 92.5,</span><br />
                <span style={{ paddingLeft: "16px", color: "var(--foreground-muted)" }}>"gitRepository": "github.com/techlearns/cel-pipeline-verification"</span><br />
                <span style={{ color: "var(--foreground-muted)" }}>&#125;</span>
              </div>
            </div>

            {/* Clickable workflow list */}
            <div style={{ marginTop: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {celWorkflows.map((work, idx) => (
                <div className="glass-card fade-in-up" key={idx} style={{ padding: "24px", display: "flex", gap: "16px", animationDelay: `${0.05 * idx}s` }}>
                  <span style={{ fontSize: "28px" }}>{work.icon}</span>
                  <div>
                    <h4 style={{ fontSize: "16px", color: "var(--foreground)", marginBottom: "6px" }}>{work.title}</h4>
                    <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5" }}>{work.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. INSIDE TECHLEARNS */}
        <section id="inside" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Inside Techlearns Ecosystem</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                We've built an environment engineered to mimic real developer roles. You aren't doing courses; you are coding systems.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              
              <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.1s" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>🎫</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Corporate Simulations</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Students don't solve abstract, academic coding questions. They claim unresolved Jira tickets, build APIs, and fix real system codebases.</p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.2s" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>👥</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Industry Mentorship</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Receive detailed, asynchronous code reviews on your Pull Requests directly from engineering leads at Google, Meta, and Microsoft.</p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.3s" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>🏆</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Mandatory Hackathons</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Participate in monthly sprint challenges, CTF security events, and AI agent optimization leagues. Prove your skills under pressure.</p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.15s" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>🤖</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>AI Integration Practice</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Leverage AI-assisted coding assistants daily. Learn the modern engineering skill of prompt workflows and agent orchestration.</p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.25s" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>🛠️</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Agile Agile Teams</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Every cohort is divided into agile sprint groups. Experience Scrum planning, daily code standups, and peer review dynamics.</p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.35s" }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>💳</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px" }}>Verified Skill Passport</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>Your entire activity history, Git logs, and peer comments are compiled into a shareable credential profile verified on the blockchain.</p>
              </div>

            </div>

          </div>
        </section>

        {/* 6. SKILL PASSPORT SHOWCASE */}
        <section id="passport" style={{ padding: "100px 0 80px", position: "relative", background: "rgba(255, 255, 255, 0.015)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>YOUR DEVELOPER IDENTITY</span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)" }}>The Skill Passport</h2>
              <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                Our strongest feature. The Skill Passport functions as an audit-ready digital profile tracking real code evidence, deployment velocity, and communication ratings. 
              </p>
              <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.7" }}>
                Instead of a PDF certificate, send hiring managers a direct link to your Skill Passport to let them review your actual repository history.
              </p>
              <div style={{ marginTop: "10px" }}>
                <Link href="/passport" className="glow-btn-primary">
                  View Recruiter Dashboard View
                </Link>
              </div>
            </div>

            {/* Mock Passport Profile Card replaced with the generated 3D image */}
            <div className="fade-in-up" style={{ display: "flex", justifyContent: "center" }}>
              <div 
                className="glass-card"
                style={{
                  width: "100%",
                  maxWidth: "460px",
                  padding: "16px",
                  borderColor: "rgba(203, 108, 230, 0.2)",
                  position: "relative",
                  background: "rgba(0,0,0,0.2)",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                <img 
                  src="/skill_passport_card.png" 
                  alt="Verified Skill Passport cryptographic card"
                  style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* 7. SKILLOS DASHBOARD PREVIEW */}
        <section id="skillos" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Powered by <span style={{ color: "#CB6CE6" }}>SkillOS</span></h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Instead of simple video lecture portals, SkillOS is our unified workspace tracking practice, peer logs, and real-time analytics.
              </p>
            </div>

            {/* Dashboard Tabs Selector */}
            <div className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: "0.2s" }}>
              <div 
                style={{ 
                  display: "flex", 
                  borderBottom: "1px solid var(--border-color)", 
                  paddingBottom: "15px", 
                  gap: "10px", 
                  overflowX: "auto" 
                }}
              >
                {skillOSTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSkillOSTab(tab.id)}
                    style={{
                      background: activeSkillOSTab === tab.id ? "rgba(91, 45, 145, 0.15)" : "transparent",
                      color: activeSkillOSTab === tab.id ? "var(--secondary-magenta)" : "var(--foreground-muted)",
                      border: "none",
                      borderBottom: activeSkillOSTab === tab.id ? "2px solid var(--secondary-magenta)" : "none",
                      padding: "8px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Tab Screen Content */}
              {(() => {
                const currentTab = skillOSTabs.find(t => t.id === activeSkillOSTab) || skillOSTabs[4];
                return (
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", marginTop: "30px", alignItems: "center" }}>
                    <div>
                      <h3 style={{ fontSize: "22px", color: "var(--foreground)", marginBottom: "12px" }}>{currentTab.title}</h3>
                      <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--foreground-muted)" }}>{currentTab.desc}</p>
                      
                      <div style={{ marginTop: "24px" }}>
                        <Link href="/skillos" className="glow-btn-secondary">
                          Launch Platform Showcase
                        </Link>
                      </div>
                    </div>
                    
                    <div 
                      className="glass-card" 
                      style={{ 
                        padding: "10px", 
                        background: "rgba(0,0,0,0.15)", 
                        border: "1px solid var(--border-color)",
                        overflow: "hidden"
                      }}
                    >
                      <img 
                        src="/skillos_dashboard_mockup.png" 
                        alt="SkillOS Workspace Mockup"
                        style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "contain", display: "block" }}
                      />
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </section>

        {/* 8. PROGRAMS SECTION */}
        <section id="programs" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Our Learning Tracks</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Select a pathway aligned with your career goals. Lock in target hiring company profiles beforehand.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {programsList.map((prog, index) => (
                <div key={index} className="glass-card fade-in-up" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "20px", animationDelay: `${0.05 * index}s` }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>EXPERIENCE JOURNEY</span>
                    <h3 style={{ fontSize: "20px", color: "var(--foreground)" }}>{prog.title}</h3>
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
                      <span style={{ color: "var(--foreground-muted-extra)", display: "block" }}>PROJECTS</span>
                      <strong style={{ color: "var(--foreground)" }}>{prog.projects} Tickets</strong>
                    </div>
                    <div>
                      <span style={{ color: "var(--foreground-muted-extra)", display: "block" }}>CHALLENGE</span>
                      <strong style={{ color: "var(--foreground)" }}>{prog.challenge}</strong>
                    </div>
                  </div>

                  <div>
                    <span style={{ color: "var(--foreground-muted-extra)", display: "block", fontSize: "11px", marginBottom: "4px" }}>CAPSTONE SYSTEM</span>
                    <strong style={{ fontSize: "13px", color: "var(--foreground)" }}>{prog.capstone}</strong>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <Link href="/programs" className="glow-btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                      View Pathway Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 9. CORPORATE WORKFLOW VISUALIZER */}
        <section id="workflow" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>The Corporate Workflow</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                This is exactly how high-growth tech companies build and deploy. You'll master this pipeline on day one.
              </p>
            </div>

            {/* Visual Flow diagram mock */}
            <div className="glass-card fade-in-up" style={{ padding: "40px", animationDelay: "0.2s" }}>
              <div 
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "20px",
                  textAlign: "center"
                }}
              >
                {[
                  { step: "1. Jira Ticket", icon: "🎫", desc: "Claims Task" },
                  { step: "2. Sprint Sync", icon: "🔄", desc: "Agile Planning" },
                  { step: "3. Git Commit", icon: "💻", desc: "Local Code" },
                  { step: "4. Code Review", icon: "👁️", desc: "PR Review" },
                  { step: "5. CI/CD Pipeline", icon: "🛠️", desc: "Docker & AWS" },
                  { step: "6. Deployment", icon: "🚀", desc: "Production Live" }
                ].map((wf, idx) => (
                  <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1, minWidth: "130px" }}>
                    <span style={{ fontSize: "32px" }}>{wf.icon}</span>
                    <strong style={{ fontSize: "14px", color: "var(--foreground)" }}>{wf.step}</strong>
                    <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)" }}>{wf.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 10. COMPETITIONS (FUTURE SKILLS LEAGUE) */}
        <section id="fsl" style={{ padding: "100px 0 80px", background: "rgba(255, 255, 255, 0.015)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>FUTURE SKILLS LEAGUE</span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)" }}>Compete in National Challenges</h2>
              <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                Join the Future Skills League (FSL), a national coding tournament system featuring monthly AI buildathons, capture-the-flags (CTFs), datathons, and algorithmic optimization sprints.
              </p>
              <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.7" }}>
                Score points by building optimized architectures and climbing the league ranks to showcase verified standing stats directly to FAANG recruiting panels.
              </p>
              <div style={{ marginTop: "10px" }}>
                <Link href="/fsl" className="glow-btn-primary">
                  View League Standing Rules
                </Link>
              </div>
            </div>

            {/* FSL Trophy Widget replaced with generated 3D render */}
            <div className="fade-in-up" style={{ display: "flex", justifyContent: "center", animationDelay: "0.2s" }}>
              <div 
                className="glass-card"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  padding: "16px",
                  borderColor: "rgba(203, 108, 230, 0.2)",
                  background: "rgba(0,0,0,0.2)",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                <img 
                  src="/fsl_league_trophy.png" 
                  alt="Future Skills League National Trophy"
                  style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* 11. LEARNER JOURNEY TIMELINE */}
        <section id="journey" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>The Candidate Journey</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Follow the milestone roadmap that transforms you from logical thinking candidates to hired engineers.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
              {[
                { title: "1. Admission & TLET Validation", desc: "Register, qualify the Analytical Aptitude Assessment, and claim your initial candidate ticket." },
                { title: "2. Sprint Pre-Work Preparation", desc: "Complete asynchronous syntax modules and prepare branch structures in GitHub." },
                { title: "3. Live Standups & Mentor Reviews", desc: "Undergo 12 months of high-intensity experiential coding sprints, daily code reviews, and deployments." },
                { title: "4. Future Skills League Hackathons", desc: "Compete in monthly coding optimization CTFs to push score metrics on your Skill Passport." },
                { title: "5. Recruiter Showcase & Launch", desc: "Hiring managers audit your code logs, issue credentials, and transition you into corporate placement slots." }
              ].map((jour, index) => (
                <div key={index} className="glass-card fade-in-up" style={{ padding: "24px", display: "flex", gap: "20px", alignItems: "flex-start", animationDelay: `${0.05 * index}s` }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary-purple)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#FFFFFF", fontSize: "14px" }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "16px", color: "var(--foreground)", marginBottom: "6px" }}>{jour.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>{jour.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 12. EMPLOYER SECTION (RECRUITER DASHBOARD MOCK) */}
        <section id="employers" style={{ padding: "100px 0 80px", position: "relative", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "60px", alignItems: "center" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>EMPLOYER CHANNELS</span>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)" }}>No Resumes. Just Auditable Code.</h2>
              <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                Hiring managers are tired of generalized certificates. Our Employer Dashboard lets companies filter profiles based on real-time commit volume, reviewer logs, and communication parameters.
              </p>
              <div style={{ marginTop: "10px" }}>
                <Link href="/partners" className="glow-btn-primary">
                  Review Employer Partnership Panel
                </Link>
              </div>
            </div>

            {/* Recruiter Console Mockup */}
            <div className="fade-in-up" style={{ display: "flex", justifyContent: "center", animationDelay: "0.2s" }}>
              <div 
                className="glass-card"
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  padding: "24px",
                  borderColor: "var(--border-color)",
                  background: "var(--card-bg)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, fontFamily: "monospace" }}>[RECRUITER_PORTAL]</span>
                  <input 
                    type="text" 
                    placeholder="Search by tech stack..." 
                    value={recruiterSearch}
                    onChange={(e) => setRecruiterSearch(e.target.value)}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      fontSize: "11px",
                      color: "var(--foreground)",
                      width: "160px"
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {recruiterCandidates
                    .filter(c => c.stack.toLowerCase().includes(recruiterSearch.toLowerCase()) || recruiterSearch === "")
                    .map((cand, idx) => (
                      <div 
                        key={idx}
                        style={{
                          padding: "12px",
                          border: "1px solid var(--border-color)",
                          background: "rgba(255,255,255,0.02)",
                          borderRadius: "8px",
                          fontSize: "12px"
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                          <strong style={{ color: "var(--foreground)" }}>{cand.name}</strong>
                          <span style={{ color: "#27C93F", fontSize: "11px" }}>{cand.ready}</span>
                        </div>
                        <div style={{ color: "var(--foreground-muted-extra)", fontSize: "11px", marginBottom: "6px" }}>{cand.role} | {cand.stack}</div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "6px" }}>
                          <span>Skill Score: <strong style={{ color: "#CB6CE6" }}>{cand.score}</strong></span>
                          <span>{cand.commits}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 13. SUCCESS STORIES TIMELINE */}
        <section id="stories" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Proven Career Transitions</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Verify actual candidate pathways tracing their logical journey from course watchers to AWS &amp; Microsoft engineering leads.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
              {successStoriesList.map((story, i) => (
                <div key={i} className="glass-card fade-in-up" style={{ padding: "30px", animationDelay: `${0.1 * i}s` }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "20px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: story.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{story.name.split(" ").map(n => n[0]).join("")}</div>
                    <div>
                      <h4 style={{ fontSize: "16px", color: "var(--foreground)", marginBottom: "2px" }}>{story.name}</h4>
                      <span style={{ fontSize: "12px", color: "var(--foreground-muted-extra)" }}>{story.role}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--foreground-muted-extra)" }}>Before</span>
                      <strong style={{ color: "var(--foreground)" }}>{story.before}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--foreground-muted-extra)" }}>Capstone</span>
                      <strong style={{ color: "var(--foreground)", textAlign: "right", maxWidth: "200px" }}>{story.projects}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--foreground-muted-extra)" }}>FSL Standing</span>
                      <strong style={{ color: "var(--foreground)" }}>{story.competitions}</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border-color)", paddingTop: "12px", marginTop: "4px" }}>
                      <span style={{ color: "var(--secondary-magenta)", fontWeight: 600 }}>Launch Offer</span>
                      <strong style={{ color: "#27C93F" }}>{story.offer}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/stories" className="glow-btn-secondary">
                View All Verification Timelines
              </Link>
            </div>

          </div>
        </section>

        {/* 14. INDUSTRY PARTNERS */}
        <section id="partners" style={{ padding: "80px 0", background: "rgba(255, 255, 255, 0.015)", borderTop: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ fontSize: "12px", color: "var(--foreground-muted-extra)", letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase" }}>TARGET CORPORATE HIRING PARTNERS</span>
            </div>
            
            <div 
              style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                flexWrap: "wrap", 
                gap: "40px",
                opacity: 0.65
              }}
            >
              {["Microsoft", "AWS", "Google", "Cisco", "NASSCOM"].map((logo, idx) => (
                <div 
                  key={idx}
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    fontFamily: "var(--font-headings)",
                    letterSpacing: "-0.04em"
                  }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS COUNTER GRID */}
        <section id="stats" style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Academy Scale & Impact
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, color: "var(--foreground)", marginTop: "8px" }}>
                Why TechLearns is Trusted by Global Innovators
              </h2>
              <p style={{ fontSize: "16px", color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0" }}>
                See why our experience-first, pre-hired learning journey is designed for the high-performing engineering teams of tomorrow.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              <div className="glass-card" style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "#CB6CE6", margin: 0 }}>30+</h3>
                <strong style={{ fontSize: "14px", color: "var(--foreground)" }}>Combined Legacy Years</strong>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>of elite engineering leadership</span>
              </div>
              <div className="glass-card" style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "#CB6CE6", margin: 0 }}>20K+</h3>
                <strong style={{ fontSize: "14px", color: "var(--foreground)" }}>Global Students & Alumni</strong>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>learning & shipping production code</span>
              </div>
              <div className="glass-card" style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "#CB6CE6", margin: 0 }}>60+</h3>
                <strong style={{ fontSize: "14px", color: "var(--foreground)" }}>Placement & Hiring Partners</strong>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>providing pre-placement offers</span>
              </div>
              <div className="glass-card" style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "#CB6CE6", margin: 0 }}>40+</h3>
                <strong style={{ fontSize: "14px", color: "var(--foreground)" }}>Distinguished Mentors</strong>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>from Google, Microsoft, & Meta</span>
              </div>
              <div className="glass-card" style={{ padding: "30px 24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "#CB6CE6", margin: 0 }}>4.8★</h3>
                <strong style={{ fontSize: "14px", color: "var(--foreground)" }}>Google Rating</strong>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>backed by 800+ developer reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* 15. COMMUNITY */}
        <section id="community" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Our Active Community</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Participate in dynamic programming sprints, office visits, national code hackathons, and demo events.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              <div className="glass-card fade-in-up" style={{ padding: "24px", animationDelay: "0.1s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>💻</span>
                <strong style={{ fontSize: "16px", color: "var(--foreground)", display: "block", marginBottom: "6px" }}>Monthly Sprints</strong>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>Active build sessions where engineering cohorts ship production features side-by-side.</p>
              </div>
              <div className="glass-card fade-in-up" style={{ padding: "24px", animationDelay: "0.2s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>🏢</span>
                <strong style={{ fontSize: "16px", color: "var(--foreground)", display: "block", marginBottom: "6px" }}>Office Visits</strong>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>Regular technical study trips to our corporate partner headquarters to meet core product managers.</p>
              </div>
              <div className="glass-card fade-in-up" style={{ padding: "24px", animationDelay: "0.3s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "12px" }}>📡</span>
                <strong style={{ fontSize: "16px", color: "var(--foreground)", display: "block", marginBottom: "6px" }}>Demo Days</strong>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>Present caps and system architectures directly before external corporate jury experts.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 16. PRICING */}
        <section id="pricing" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Select Your Journey</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Don't buy video courses. Join a company-like learning ecosystem.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div 
                className="glass-card fade-in-up" 
                style={{ 
                  width: "100%", 
                  maxWidth: "500px", 
                  padding: "40px",
                  border: "2px solid var(--secondary-magenta)",
                  boxShadow: "0 12px 40px rgba(203, 108, 230, 0.1)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>FLAGSHIP TRACK</span>
                    <h3 style={{ fontSize: "24px", color: "var(--foreground)" }}>AI &amp; Software Engineering Journey</h3>
                  </div>
                  <span style={{ fontSize: "12px", background: "rgba(203, 108, 230, 0.15)", color: "var(--secondary-magenta)", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>TLET Qualifier</span>
                </div>

                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", marginBottom: "30px", lineHeight: "1.6" }}>
                  A comprehensive, high-intensity 12-month program. Fully verified on SkillOS. Features PPO eligibility, live mentor PR reviews, FSL hackathons, and cryptographic Skill Passport verification.
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: "0 0 40px", fontSize: "14px" }}>
                  <li>🚀 12 Months Corporate Experience Simulator</li>
                  <li>💻 Verified Skill Passport Credentials</li>
                  <li>👁️ PR Reviews from FAANG Engineers</li>
                  <li>🏆 Access to Future Skills League Tournaments</li>
                  <li>💼 Pre-Placement Offer (PPO) Eligibility</li>
                </ul>

                <a href="#contact" className="glow-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Apply for Admissions
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 17. FAQ ACCORDION */}
        <section id="faq" style={{ padding: "100px 0 80px", background: "rgba(255, 255, 255, 0.015)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 className="fade-in-up" style={{ fontSize: "36px", marginBottom: "16px", color: "var(--foreground)" }}>Frequently Asked Questions</h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto", animationDelay: "0.1s" }}>
                Get clear answers regarding the admissions track, Skill Passport verification, and placement rules.
              </p>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqsList.map((faq, index) => {
                const isActive = activeFaq === index;
                return (
                  <div 
                    key={index}
                    className="glass-card fade-in-up" 
                    style={{ 
                      padding: "20px", 
                      cursor: "pointer", 
                      borderColor: isActive ? "rgba(203, 108, 230, 0.4)" : "var(--border-color)",
                      background: isActive ? "rgba(44, 10, 113, 0.25)" : "var(--card-bg)",
                      animationDelay: `${0.05 * index}s`
                    }}
                    onClick={() => setActiveFaq(isActive ? null : index)}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h4 style={{ fontSize: "16px", color: "var(--foreground)", fontWeight: 600 }}>{faq.question}</h4>
                      <span style={{ fontSize: "20px", color: "#CB6CE6", transition: "transform 0.3s", transform: isActive ? "rotate(45deg)" : "none" }}>+</span>
                    </div>
                    {isActive && (
                      <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.6", color: "var(--foreground-muted)" }}>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 18. CTA ADMISSIONS SECTION */}
        <section id="contact" style={{ padding: "100px 0", position: "relative" }}>
          <div className="container">
            <div 
              className="glass-card fade-in-up" 
              style={{ 
                padding: "60px 40px", 
                textAlign: "center", 
                background: "linear-gradient(135deg, rgba(91, 45, 145, 0.15) 0%, rgba(44, 10, 113, 0.15) 100%)",
                border: "1px solid var(--border-color)"
              }}
            >
              <h2 style={{ fontSize: "40px", color: "var(--foreground)", marginBottom: "16px" }}>Start Your Corporate Experience.</h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto 40px", fontSize: "16px", lineHeight: "1.6" }}>
                Submit your initial details to qualify for the next cohort admissions. Our technical counseling team will sync back in 24 hours.
              </p>

              {formSubmitted ? (
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.15)", border: "1px solid #27C93F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>✓</div>
                  <h4 style={{ fontSize: "18px", color: "var(--foreground)" }}>TLET Registration Received!</h4>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Please verify your email inbox for initial analytical prep trackers.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>FULL NAME</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>SELECT PROGRAM</label>
                    <select 
                      name="track" 
                      value={formData.track} 
                      onChange={handleInputChange}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    >
                      <option>Generative AI Engineering</option>
                      <option>AI-Enabled Full Stack</option>
                      <option>Cloud Platform &amp; DevOps</option>
                      <option>Cybersecurity &amp; Networks</option>
                    </select>
                  </div>
                  <button type="submit" className="glow-btn-primary" style={{ gridColumn: "1 / -1", justifyContent: "center", padding: "14px", marginTop: "10px" }}>
                    Start Your Corporate Experience
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

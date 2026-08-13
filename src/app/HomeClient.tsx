"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// SVG Circular Sector Path Generator Helper
const getArcPath = (x: number, y: number, radius: number, innerRadius: number, startAngle: number, endAngle: number) => {
  const startAngleRad = (startAngle * Math.PI) / 180;
  const endAngleRad = (endAngle * Math.PI) / 180;
  
  const x1_outer = x + radius * Math.cos(startAngleRad);
  const y1_outer = y + radius * Math.sin(startAngleRad);
  const x2_outer = x + radius * Math.cos(endAngleRad);
  const y2_outer = y + radius * Math.sin(endAngleRad);
  
  const x1_inner = x + innerRadius * Math.cos(startAngleRad);
  const y1_inner = y + innerRadius * Math.sin(startAngleRad);
  const x2_inner = x + innerRadius * Math.cos(endAngleRad);
  const y2_inner = y + innerRadius * Math.sin(endAngleRad);
  
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
  
  return `M ${x1_inner} ${y1_inner} L ${x1_outer} ${y1_outer} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2_outer} ${y2_outer} L ${x2_inner} ${y2_inner} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1_inner} ${y1_inner} Z`;
};

// Chessboard Stats data matching Screenshot 1
const powerhouseStats = [
  { val: "30+", label: "Years of Legacy" },
  { val: "20K+", label: "Global Students" },
  { val: "120+", label: "Countries Presence" },
  { val: "40+", label: "Franchisees PAN India" },
  { val: "No.1", label: "AI-Powered Experience Platform" },
  { val: "11+", label: "Copyrighted Learning Frameworks" },
  { val: "1200+", label: "Lab and Practice Drills" },
  { val: "280+", label: "Empanelled Industry Instructors" },
  { val: "250+", label: "Dedicated Support Team" },
  { val: "40+", label: "Industry Advisory Mentors" },
  { val: "60+", label: "Active Placement Partners" },
  { val: "50+", label: "Institutional Partnerships" }
];

// WHY CEL Wheel slices data matching Screenshot 2
const whyCelSlices = [
  {
    num: "01",
    label: "Best in Class",
    sublabel: "Industry Instructors",
    color: "#D97706", // Orange
    title: "Best in Class Industry Instructors",
    desc: "Learn from engineering leads and architects who build production systems at scale, bringing real-world blueprints directly into the classroom."
  },
  {
    num: "02",
    label: "Techlearns-backed",
    sublabel: "Ecosystem",
    color: "#65A30D", // Lime/Green
    title: "Backed by the Techlearns Enterprise Network",
    desc: "Gain immediate leverage from a learning platform co-designed with engineering leaders and enterprise partners across the technology landscape."
  },
  {
    num: "03",
    label: "Hiring commitment",
    sublabel: "Before Admission",
    color: "#B91C1C", // Red
    title: "Pre-Hired Model & Employer Commitment",
    desc: "Qualify through the Techlearns Entrance Test (TLET) to secure placement pipelines and employer interest before diving into intensive engineering sprints."
  },
  {
    num: "04",
    label: "Industry-aligned",
    sublabel: "Curriculum & Pedagogy",
    color: "#1D4ED8", // Blue
    title: "Corporate Workflow Curricula",
    desc: "No static slides. Sprints, GitHub PR reviews, code standards, CI tests, and documentation gates are baked into your daily schedule."
  },
  {
    num: "05",
    label: "Niche",
    sublabel: "Tech Domains Focused",
    color: "#7C3AED", // Purple
    title: "Specialised High-Demand Tech Tracks",
    desc: "Focus on AI Engineering, Cloud Platform Engineering, MLOps, Cybersecurity SOC operations, and Modern Analytics rather than generic code paths."
  },
  {
    num: "06",
    label: "AI-Enabled",
    sublabel: "Adaptive Practice",
    color: "#0F766E", // Teal
    title: "Telemetry-Driven Adaptive SkillOS",
    desc: "Our practice engine adapts labs, drills and quizzes based on your active code quality telemetry, helping you isolate and close skill gaps faster."
  },
  {
    num: "07",
    label: "Hyper-personalised",
    sublabel: "Learning Experience",
    color: "#BE185D", // Pink
    title: "Individual Skill Pathways & Mentor Allocation",
    desc: "Get assigned your own industry practitioner for PR review gates, helping you review architecture trade-offs and code structure weekly."
  },
  {
    num: "08",
    label: "Early exposure",
    sublabel: "Corporate Culture",
    color: "#C2410C", // Red-Orange
    title: "Engineering Team Ritual Immersion",
    desc: "Operate in structured stand-ups, retro reviews, and cross-functional incident simulations to acquire the soft execution habits of real engineering leads."
  }
];

// Data Structure definitions
const celStages = [
  { name: "Assess", title: "01. Assess", desc: "Diagnostic assessment, career intent, baseline capability and role fit.", task: "Diagnostic & Goal Mapping" },
  { name: "Learn", title: "02. Learn", desc: "Live instruction, guided modules and core concept reviews.", task: "Live Cohort Instruction" },
  { name: "Practise", title: "03. Practise", desc: "Daily labs, drills, quizzes, database setup, and AI-assisted practice loops.", task: "Daily Hands-on Drills" },
  { name: "Build", title: "04. Build", desc: "Mini-projects, team projects, capstone products, and production-grade architectures.", task: "Artifact Production" },
  { name: "Operate", title: "05. Operate", desc: "Stand-ups, sprints, tickets, pull request reviews, and public demos.", task: "Agile Work Simulation" },
  { name: "Experience", title: "06. Experience", desc: "Expert talks, industry visits, job shadowing, mentor reviews, and internships.", task: "Employer Engagements" },
  { name: "Compete", title: "07. Compete", desc: "Hackathons, CTFs, datathons, cloud architecture challenges, and demo days.", task: "FSL Season Challenges" },
  { name: "Validate", title: "08. Validate & Launch", desc: "Skill Passport cryptographic auditing, credential preparation, mock hiring, and recruiter showcase launch.", task: "Career Readiness & Launch" }
];

const celWorkflows = [
  { title: "Stand-up & Sprint Planning", desc: "Daily stand-up updates, backlog prioritisation, story-point estimation and role allocation in structured Scrum sprints.", icon: "📋" },
  { title: "Build Cycle & Version Control", desc: "Branch discipline, code reviews, documentation, QA testing and PR merges following engineering team standards.", icon: "🌿" },
  { title: "Review Gate", desc: "Mentor, code, design and data reviews with clear rubrics and mandatory revision requirements before advancement.", icon: "👁️" },
  { title: "Demo Day", desc: "Present live working products to a mixed technical and business jury — external experts, mentors, and industry partners.", icon: "🚀" },
  { title: "Incident Simulation", desc: "Debug, recover, communicate and document under time pressure — mirroring on-call engineering responsibilities.", icon: "⚡" },
  { title: "Retrospective", desc: "Structured reflection on what worked, what failed, root-cause analysis, and documented improvement commitments.", icon: "🔁" }
];

const skillOSTabs = [
  { id: "practice", label: "Practice Engine", title: "Daily Interactive Labs", desc: "Daily coding labs, SQL challenges, cloud drills, quizzes, AI-assisted practice and case-based exercises verified against unit tests and performance benchmarks." },
  { id: "projects", label: "Live Projects", title: "Corporate Project Board", desc: "Claim real project briefs and live challenge tickets on a sprint board. Submit code to GitHub, get automated CI checks, and receive external jury feedback at review gates." },
  { id: "competitions", label: "FSL Competitions", title: "Future Skills League Hub", desc: "Compete in national AI buildathons, data science challenges, cybersecurity CTFs and cloud architecture sprints. League standings are shared with partner recruiters." },
  { id: "mentor", label: "Mentor Reviews", title: "Asynchronous Mentor Feedback", desc: "Structured, rubric-based review comments on your Pull Requests from industry practitioners — showing precisely where to improve technical depth, communication and code quality." },
  { id: "analytics", label: "Skill Passport", title: "Engineering Competency Dashboard", desc: "A dynamic evidence profile tracking baseline-to-outcome skill growth, practice consistency, project artifacts, competition results, mentor reviews and credential readiness." },
  { id: "career", label: "Recruiter Showcase", title: "Consent-Based Employer Discovery", desc: "Authorise hiring companies to browse your verified Skill Passport — including project links, Git history, peer-review logs, competition standings and interview readiness indicators." }
];

const programsList = [
  { title: "Generative AI & Agentic AI Engineering", duration: "5-6 Months", salary: "₹18 - ₹45 LPA", projects: 5, capstone: "Team-built AI Product with External Jury Defense", challenge: "AI Buildathon" },
  { title: "Full-Stack Software Engineering with AI", duration: "6-9 Months", salary: "₹12 - ₹30 LPA", projects: 4, capstone: "Production SaaS App with System Design & Security", challenge: "Hackathon / Product Sprint" },
  { title: "Data Analytics + BI + GenAI", duration: "4-6 Months", salary: "₹9 - ₹24 LPA", projects: 3, capstone: "Executive Business Insight Memo & Jury Presentation", challenge: "Datathon Challenge" },
  { title: "Cybersecurity & SOC Analyst", duration: "6 Months", salary: "₹10 - ₹28 LPA", projects: 4, capstone: "Incident Report, CTF Evidence & Security Lab Portfolio", challenge: "Capture-the-Flag (CTF)" },
  { title: "Cloud, DevOps & Platform Engineering", duration: "6 Months", salary: "₹14 - ₹35 LPA", projects: 4, capstone: "Deployed System Architecture & Incident Simulation", challenge: "Cloud Architecture Challenge" },
  { title: "Data Science, ML & MLOps", duration: "6-9 Months", salary: "₹15 - ₹40 LPA", projects: 4, capstone: "Production ML Pipeline with Model Monitoring & Guardrails", challenge: "Bug Bash / Debug Derby" },
  { title: "Data Engineering & Modern Analytics", duration: "6 Months", salary: "₹11 - ₹32 LPA", projects: 4, capstone: "Real-Time Data Pipeline with Governance Framework", challenge: "API Integration Challenge" }
];

const leaderboardData = [
  { rank: 1, name: "Saahil Paul", score: 2940, batch: "GenAI-2026A", badge: "Grandmaster" },
  { rank: 2, name: "Anya Sharma", score: 2810, batch: "FullStack-2026B", badge: "Master" },
  { rank: 3, name: "Kabir Roy", score: 2750, batch: "Cloud-2026A", badge: "Master" },
  { rank: 4, name: "Tanvi Sen", score: 2680, batch: "GenAI-2026A", badge: "Expert" }
];

const recruiterCandidates = [
  { name: "Saahil Paul", role: "Generative AI Engineer", score: "92%", commits: "482 commits", ready: "Placement Ready", stack: "Python, LangChain, FastAPI, Docker" },
  { name: "Anya Sharma", role: "Full-Stack Engineer", score: "94%", commits: "620 commits", ready: "Placement Ready", stack: "Next.js, Node.js, PostgreSQL, AWS" },
  { name: "Kabir Roy", role: "Cloud & DevOps Engineer", score: "90%", commits: "394 commits", ready: "Interview Stage", stack: "Terraform, Kubernetes, GitHub Actions, GCP" }
];

const successStoriesList = [
  {
    name: "Rohan Das",
    role: "Generative AI Engineer",
    before: "Computer Science graduate with no practical AI project experience",
    projects: "Built a production RAG system and multi-agent workflow for a fintech brief",
    competitions: "Ranked 3rd in Techlearns Future Skills League — AI Buildathon Season",
    offer: "Secured a role at a Series B AI startup at ₹28 LPA",
    avatarBg: "linear-gradient(135deg, #FF9900, #FF5500)"
  },
  {
    name: "Nikita Kapoor",
    role: "Data Analyst & BI Specialist",
    before: "Commerce graduate who had never written a line of SQL before TechLearns",
    projects: "Developed a full Power BI dashboard and executive insight memo for a real client brief",
    competitions: "Won the Techlearns Datathon 2025 — Jury awarded top evidence portfolio",
    offer: "Joined a leading analytics consultancy at ₹16 LPA",
    avatarBg: "linear-gradient(135deg, #00A4EF, #0078D7)"
  }
];

const faqsList = [
  {
    question: "What is Corporate Experience Learning (CEL) and how is it different?",
    answer: "CEL is TechLearns' core pedagogy. Instead of watching video lectures, you operate inside a simulated corporate team — claiming Jira tickets, committing code, attending daily stand-ups, doing sprint planning, presenting at demo days and receiving review-gate feedback from mentors. The blueprint defines it as an eight-stage flywheel: Assess, Learn, Practise, Build, Operate, Experience, Compete, Validate. You never spend too long in 'learn' mode without building something real."
  },
  {
    question: "How is TechLearns different from Scaler, upGrad, or traditional bootcamps?",
    answer: "Traditional platforms give you content and a certificate. TechLearns gives you a Corporate Experience journey. The key differences are: the TEEE pedagogical model (personalised to your role target), an AI-first daily tooling culture (Copilot, Cursor, Claude), the Future Skills League competition ecosystem, structured offline industry visits, and a Cryptographic Skill Passport that shows recruiters verifiable evidence — not just a completion badge."
  },
  {
    question: "What is the Techlearns Skill Passport?",
    answer: "The Skill Passport is your dynamic evidence profile at graduation. It contains your role target, verified skill scores, practice consistency data, portfolio project links, Git commit history, competition results, mentor review feedback, presentation performance, external credential readiness and internship evidence. It replaces the traditional resume for technical roles by showing what you can actually do — not just what courses you completed."
  },
  {
    question: "What credentials and certifications do I get?",
    answer: "TechLearns uses a three-layer credential stack. Layer A: official external pathways from Microsoft (Applied Skills), Google (Career Certificates), AWS, and Cisco where you qualify. Layer B: Techlearns-issued credentials — Course Completion, Skill Distinction (awarded only after performance thresholds), and the Corporate Experience Readiness Badge. Layer C: experience credentials — Live Project badge, FSL Hackathon badge, Industry Mentor Review badge, and Internship evidence."
  },
  {
    question: "What is the Future Skills League (FSL)?",
    answer: "FSL is TechLearns' national competition ecosystem — a recurring season of AI buildathons, cybersecurity CTFs, datathons, cloud architecture challenges and demo days. Competitions are curriculum milestones, not optional add-ons. League standings are shared directly with partner recruiters. Winning or placing in the FSL is concrete, verifiable proof of performance under pressure — which is exactly what employers want to see."
  },
  {
    question: "What is the 30-50-20 learning mix?",
    answer: "Every flagship program follows an intentional design ratio: approximately 30% guided concepts and demonstrations, 50% applied practice and project work, and 20% industry exposure, competitions, reviews and career evidence. Theory never dominates. You are always building, reviewing, competing or presenting."
  },
  {
    question: "Who are the typical learners at TechLearns?",
    answer: "TechLearns is designed for students, recent graduates, early-career professionals, and career switchers who want to transition into high-demand tech roles in AI engineering, full-stack development, data analytics, cloud & DevOps, cybersecurity or data science. Programs range from 4 weeks (AI Foundations) to 9 months (Full-Stack with AI or ML & MLOps) based on depth required."
  }
];

export default function HomeClient() {
  const [activeCel, setActiveCel] = useState(0);
  const [activeWhyCelSlice, setActiveWhyCelSlice] = useState(0);
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
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-headings)",
                  animationDelay: "0.05s"
                }}
              >
                ⚡ A NEXT-GENERATION CORPORATE EXPERIENCE LEARNING ECOSYSTEM
              </span>
              
              <h1 className="fade-in-up" style={{ fontSize: "56px", lineHeight: "1.1", fontWeight: 900, color: "var(--foreground)", animationDelay: "0.15s" }}>
                Learning technology<br />
                <span className="text-gradient-purple">isn't enough.</span><br />
                Experience how it's built.
              </h1>
              
              <p className="fade-in-up" style={{ fontSize: "18px", color: "var(--foreground-muted)", lineHeight: "1.65", animationDelay: "0.25s" }}>
                Techlearns turns technology learning into a measurable corporate experience journey — combining current skills, real work practices, industry exposure, live projects, competitions and a digital Skill Passport, in one integrated ecosystem.
              </p>

              <p className="fade-in-up" style={{ fontSize: "14px", color: "var(--foreground-muted)", letterSpacing: "0.08em", fontWeight: 700, textTransform: "uppercase", animationDelay: "0.3s" }}>
                Learn. Experience. Build. Compete. Prove. Lead.
              </p>
              
              <div className="fade-in-up" style={{ display: "flex", flexDirection: "column", gap: "12px", animationDelay: "0.35s" }}>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/programs" className="glow-btn-primary">
                    Explore Flagship Programs
                  </Link>
                  <Link href="/cel" className="glow-btn-secondary" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    See How Corporate Experience Learning Works →
                  </Link>
                </div>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted-extra)" }}>
                  Free diagnostic assessment · No commitment · Get a personalised role-fit map in minutes
                </span>
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
                    Techlearns CEL Ecosystem
                  </span>
                  <h2 style={{ fontSize: "28px", fontWeight: 800, color: "var(--foreground)", lineHeight: "1.3", margin: 0 }}>
                    Stop collecting certificates.<br />
                    Start building <span className="text-gradient-purple">proof.</span>
                  </h2>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: "8px 0 0 0" }}>
                    A completion certificate doesn't prove you can perform. Techlearns replaces "I finished a course" with "here's what I can do — and here's the evidence."
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "20px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>🎯</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Diagnostic Assessment</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>Skill baseline, role fit & career mapping</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>🏢</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Corporate Work Rituals</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>Stand-ups, sprints, reviews, demo days</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>🏆</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Future Skills League</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>Hackathons, CTFs, buildathons & datathons</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ fontSize: "24px" }}>💳</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--foreground)" }}>Verified Skill Passport</div>
                      <div style={{ fontSize: "12px", color: "var(--foreground-muted)" }}>Evidence profile — not just a certificate</div>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="glow-btn-primary" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "14px 20px" }}>
                  Book Free Career Diagnostic
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 2. THE SHIFT / PROBLEM STATEMENT BAND */}
        <section id="problem" style={{ padding: "100px 0 80px", background: "rgba(255, 255, 255, 0.015)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                WHY WE EXIST
              </span>
              <h2 className="fade-in-up" style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                A certificate has never proven that someone can perform.
              </h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "16px", lineHeight: "1.7", animationDelay: "0.1s" }}>
                Most learning platforms measure what you watched. Techlearns measures what you can do. We built Corporate Experience Learning because content without context, projects without operating discipline, and certificates without proof don't survive contact with a real job.
              </p>
            </div>

            {/* Before/After Micro-Comparison Table */}
            <div className="glass-card fade-in-up" style={{ padding: "30px", overflowX: "auto", animationDelay: "0.2s" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                    <th style={{ padding: "16px", textAlign: "left", color: "var(--foreground-muted-extra)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em", width: "50%" }}>MOST LEARNING PLATFORMS</th>
                    <th style={{ padding: "16px", textAlign: "left", color: "#CB6CE6", fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em", width: "50%" }}>TECHLEARNS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Watching content", "Building and explaining"],
                    ["Attendance tracked", "Growth tracked"],
                    ["One final project", "Continuous evidence"],
                    ["A guest lecture", "Structured industry experience"],
                    ["Practising alone", "Team execution and feedback"],
                    ["Certificate collection", "Credential + proof stack"],
                    ["Interview prep at the end", "Career readiness from Week 1"],
                    ['"I completed a course"', '"Here\'s what I can do, and here\'s the evidence"']
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid var(--border-color)", background: idx % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                      <td style={{ padding: "14px 16px", fontSize: "14px", color: "var(--foreground-muted)" }}>❌ {row[0]}</td>
                      <td style={{ padding: "14px 16px", fontSize: "14px", color: "var(--foreground)", fontWeight: 600 }}>🚀 {row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* 4. THE POWERHOUSE BEHIND TECHLEARNS (Redesigned matching Screenshot 1) */}
        <section id="why-now" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                THE POWERHOUSE BEHIND TECHLEARNS
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, color: "var(--foreground)", marginTop: "12px", marginBottom: "16px" }}>
                India's Premium Experience Learning Infrastructure
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "800px", margin: "0 auto 40px", fontSize: "16px", lineHeight: "1.7" }}>
                Scale, trust and pedigree. We combine traditional academic scale with modern corporate operating environments to train candidates for the actual workflows of top global teams.
              </p>
            </div>

            {/* Chessboard alternating grid matching Screenshot 1 colors */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
              gap: "20px", 
              marginBottom: "40px" 
            }}>
              {powerhouseStats.map((stat, idx) => {
                const row = Math.floor(idx / 4);
                const col = idx % 4;
                const isPlum = (row + col) % 2 === 1;
                const bg = isPlum ? "#7E3B68" : "#1B1E36";
                return (
                  <div 
                    key={idx} 
                    style={{ 
                      backgroundColor: bg,
                      padding: "36px 24px",
                      textAlign: "center",
                      borderRadius: "8px",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "180px",
                      border: "1px solid rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    <h3 style={{ fontSize: "40px", fontWeight: 900, color: "#FFFFFF", margin: "0 0 10px", fontFamily: "var(--font-headings)" }}>
                      {stat.val}
                    </h3>
                    <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.85)", fontWeight: 600, margin: 0, lineHeight: "1.4" }}>
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "15px", color: "var(--foreground-muted)", marginBottom: "16px" }}>
                Techlearns operates continuously across these dimensions to match the structural shifting of engineering skills.
              </p>
              <Link href="/blog" style={{ color: "var(--secondary-magenta)", fontWeight: 650, fontSize: "14px", textDecoration: "none" }} className="hover-underline">
                Read our latest quarterly Skill & Practice Report →
              </Link>
            </div>
          </div>
        </section>

        {/* 5. WHAT MAKES TECHLEARNS DIFFERENT */}
        <section id="difference" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                THE TECHLEARNS DIFFERENCE
              </span>
              <h2 className="fade-in-up" style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                Five things you won't find in a typical course
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              <div className="glass-card fade-in-up" style={{ padding: "30px", borderTop: "3px solid #CB6CE6", animationDelay: "0.1s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "16px" }}>🏢</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>Corporate Work Rituals Embedded in Every Course</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Stand-ups, sprint planning, tickets, code and design reviews, documentation, quality gates, demos and retrospectives aren't case studies you read about — they're how you'll actually work, every week.
                </p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", borderTop: "3px solid #CB6CE6", animationDelay: "0.2s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "16px" }}>🤝</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>Mandatory Industry Exposure</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Expert sessions, workplace visits, employer challenge briefs, project reviews, internships and recruiter interactions are scheduled curriculum milestones, not optional events bolted onto the syllabus.
                </p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", borderTop: "3px solid #CB6CE6", animationDelay: "0.3s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "16px" }}>🏆</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>Competition as Pedagogy</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Hackathons, AI buildathons, datathons, cybersecurity CTFs, cloud challenges, bug bashes and demo days are built directly into your learning calendar — because pressure, deadlines and public proof build capability faster than passive study.
                </p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", borderTop: "3px solid #CB6CE6", animationDelay: "0.15s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "16px" }}>💳</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>One Skill → One Proof</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Every important competency you learn generates an artifact, assessment, review, or verified performance record — all captured inside your Skill Passport.
                </p>
              </div>

              <div className="glass-card fade-in-up" style={{ padding: "30px", borderTop: "3px solid #CB6CE6", animationDelay: "0.25s" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "16px" }}>🤖</span>
                <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>Human Mentorship + AI-Supported Practice</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  An AI Learning Coach powers personalised practice and feedback loops. Human mentors keep the judgment, accountability, and career guidance — where it belongs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. INTERACTIVE CIRCULAR SELECTOR WHEEL (Methodology Teaser - Redesigned matching Screenshot 2) */}
        <section id="cel" style={{ padding: "100px 0 80px", position: "relative", background: "rgba(91, 45, 145, 0.02)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                WHY TECHLEARNS CEL SYSTEM?
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                Built by Industry Leaders to Shape Future Engineers
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "16px", lineHeight: "1.7" }}>
                An operating system for your capability — clicking any of the 8 segments reveals how we bridge the gap between academic theory and real-world corporate expectations.
              </p>
            </div>

            {/* Circular selector grid layout */}
            <div className="grid-split" style={{ 
              gap: "50px", 
              alignItems: "center" 
            }}>
              
              {/* Left Column: Interactive Circle Wheel */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", minHeight: "420px", width: "100%" }}>
                <svg width="100%" height="auto" viewBox="0 0 400 400" style={{ transform: "rotate(0deg)", maxWidth: "400px" }}>
                  {/* Outer circle outline */}
                  <circle cx="200" cy="200" r="162" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="158" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* Render 8 slices */}
                  {whyCelSlices.map((slice, i) => {
                    const startAngle = i * 45 - 90 - 22.5;
                    const endAngle = (i + 1) * 45 - 90 - 22.5;
                    const pathD = getArcPath(200, 200, 155, 75, startAngle, endAngle);
                    
                    const midAngle = startAngle + 22.5;
                    const textX = 200 + 115 * Math.cos((midAngle * Math.PI) / 180);
                    const textY = 200 + 115 * Math.sin((midAngle * Math.PI) / 180);
                    
                    const isActive = activeWhyCelSlice === i;
                    
                    return (
                      <g key={i} style={{ cursor: "pointer" }} onClick={() => setActiveWhyCelSlice(i)}>
                        {/* Slice path */}
                        <path 
                          d={pathD} 
                          fill={slice.color}
                          opacity={isActive ? 0.95 : 0.4}
                          stroke="#0B0F19"
                          strokeWidth="2"
                          style={{
                            transition: "all 0.3s ease",
                            transform: isActive ? "scale(1.02) translate(-4px, -4px)" : "scale(1)",
                            transformOrigin: "200px 200px"
                          }}
                        />
                        {/* Slice Label/Text inside */}
                        <text 
                          x={textX} 
                          y={textY} 
                          fill="var(--wheel-slice-text-color)" 
                          fontSize="9" 
                          fontWeight="700"
                          textAnchor="middle"
                          style={{ pointerEvents: "none" }}
                        >
                          {slice.num}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Center Circle matching Screenshot 2 */}
                  <circle cx="200" cy="200" r="70" fill="var(--wheel-center-bg)" stroke="var(--border-color)" strokeWidth="2" />
                  <text x="200" y="185" textAnchor="middle" fill="var(--foreground-muted)" fontSize="9" fontWeight="bold" letterSpacing="0.05em">WHY</text>
                  <text x="200" y="202" textAnchor="middle" fill="var(--wheel-text-color)" fontSize="11" fontWeight="bold">Techlearns</text>
                  <text x="200" y="217" textAnchor="middle" fill="var(--secondary-magenta)" fontSize="9" fontWeight="bold">CEL SYSTEM?</text>
                </svg>
              </div>

              {/* Right Column: Active Slice details card */}
              <div 
                className="glass-card" 
                style={{ 
                  padding: "40px 30px", 
                  borderLeft: `4px solid ${whyCelSlices[activeWhyCelSlice].color}`,
                  background: "var(--wheel-card-bg)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: whyCelSlices[activeWhyCelSlice].color, fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>
                    STAGE {whyCelSlices[activeWhyCelSlice].num} / 08
                  </span>
                  <h3 style={{ fontSize: "24px", color: "var(--wheel-card-text)", marginTop: "6px", fontWeight: 800 }}>
                    {whyCelSlices[activeWhyCelSlice].title}
                  </h3>
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--foreground-muted)", margin: 0 }}>
                  {whyCelSlices[activeWhyCelSlice].desc}
                </p>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", borderTop: "1px solid var(--wheel-card-border-top)", paddingTop: "16px", marginTop: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: whyCelSlices[activeWhyCelSlice].color }}></span>
                  <span style={{ fontSize: "12px", color: "var(--wheel-card-muted)", fontFamily: "monospace" }}>
                    Status: Active Operational Standard
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6.5 PATHWAY TO YOUR SUCCESS TIMELINE (Redesigned matching Screenshot 3) */}
        <section id="pathway" style={{ padding: "100px 0 80px", background: "transparent" }}>
          <div className="container">
            
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                YOUR ENGINEERING PIPELINE
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                Pathway to <span className="text-gradient-purple">Your Success</span>
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "16px", lineHeight: "1.7" }}>
                Five structural milestones that take you from logical orientation to an active corporate software engineering launch.
              </p>
            </div>

            {/* Interactive Timeline matching Screenshot 3 */}
            <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
              
              {/* Central vertical dashed line */}
              <div style={{ 
                position: "absolute", 
                left: "50%", 
                top: "20px", 
                bottom: "40px", 
                width: "2px", 
                borderLeft: "2px dashed rgba(148, 163, 184, 0.15)",
                transform: "translateX(-50%)",
                zIndex: 0
              }} className="desktop-only"></div>

              {/* Timeline Steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "60px", position: "relative", zIndex: 1 }}>
                
                {/* Step 1 */}
                <div className="timeline-row">
                  <div style={{ width: "45%", display: "flex", justifyContent: "flex-end" }} className="desktop-only">
                    <div style={{ 
                      backgroundColor: "#5B2D91", 
                      padding: "20px 24px", 
                      borderRadius: "8px", 
                      boxShadow: "0 8px 20px rgba(91, 45, 145, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#FFFFFF",
                      minWidth: "280px"
                    }}>
                      <span style={{ fontSize: "20px" }}>📄</span>
                      <strong style={{ fontSize: "14px", fontWeight: 700 }}>Qualify TLET Entrance Exam</strong>
                    </div>
                  </div>
                  <div className="timeline-circle" style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "#5B2D91", 
                    color: "#FFFFFF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: "0 0 0 8px rgba(91, 45, 145, 0.15)",
                    margin: "0 auto 20px"
                  }}>1</div>
                  <div className="timeline-content" style={{ paddingLeft: "20px" }}>
                    <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Entrance Milestone</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Qualify TLET Entrance Exam</h4>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>
                      The first step towards your dream engineering career begins with formal qualification of the Techlearns Entrance Test.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="timeline-row" style={{ flexDirection: "row-reverse" }}>
                  <div style={{ width: "45%", display: "flex", justifyContent: "flex-start" }} className="desktop-only">
                    <div style={{ 
                      backgroundColor: "#7E3B68", 
                      padding: "20px 24px", 
                      borderRadius: "8px", 
                      boxShadow: "0 8px 20px rgba(126, 59, 104, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#FFFFFF",
                      minWidth: "280px"
                    }}>
                      <span style={{ fontSize: "20px" }}>🎟️</span>
                      <strong style={{ fontSize: "14px", fontWeight: 700 }}>Get the Ticket to Virtual Cyber Hub</strong>
                    </div>
                  </div>
                  <div className="timeline-circle" style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "#7E3B68", 
                    color: "#FFFFFF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: "0 0 0 8px rgba(126, 59, 104, 0.15)",
                    margin: "0 auto 20px"
                  }}>2</div>
                  <div className="timeline-content" style={{ paddingRight: "20px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Corporate Gateway</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Get the Ticket to Virtual Cyber Hub</h4>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>
                      Secure your pass to India's most prestigious virtual developer district and get assigned your initial repository trackers.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="timeline-row">
                  <div style={{ width: "45%", display: "flex", justifyContent: "flex-end" }} className="desktop-only">
                    <div style={{ 
                      backgroundColor: "#D97706", 
                      padding: "20px 24px", 
                      borderRadius: "8px", 
                      boxShadow: "0 8px 20px rgba(217, 119, 6, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#FFFFFF",
                      minWidth: "280px"
                    }}>
                      <span style={{ fontSize: "20px" }}>👥</span>
                      <strong style={{ fontSize: "14px", fontWeight: 700 }}>Be Part of Hiring Drive</strong>
                    </div>
                  </div>
                  <div className="timeline-circle" style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "#D97706", 
                    color: "#FFFFFF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: "0 0 0 8px rgba(217, 119, 6, 0.15)",
                    margin: "0 auto 20px"
                  }}>3</div>
                  <div className="timeline-content" style={{ paddingLeft: "20px" }}>
                    <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Selection Phase</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Be Part of Hiring Drive</h4>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>
                      Showcase your initial baseline scores and diagnostic reports to top-tier technical recruiters and industry sponsors.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="timeline-row" style={{ flexDirection: "row-reverse" }}>
                  <div style={{ width: "45%", display: "flex", justifyContent: "flex-start" }} className="desktop-only">
                    <div style={{ 
                      backgroundColor: "#1B1E36", 
                      padding: "20px 24px", 
                      borderRadius: "8px", 
                      boxShadow: "0 8px 20px rgba(27, 30, 54, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#FFFFFF",
                      minWidth: "280px"
                    }}>
                      <span style={{ fontSize: "20px" }}>📄</span>
                      <strong style={{ fontSize: "14px", fontWeight: 700 }}>Get Pre-Placement Offer Letter</strong>
                    </div>
                  </div>
                  <div className="timeline-circle" style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "#1B1E36", 
                    color: "#FFFFFF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: "0 0 0 8px rgba(27, 30, 54, 0.15)",
                    margin: "0 auto 20px"
                  }}>4</div>
                  <div className="timeline-content" style={{ paddingRight: "20px", textAlign: "right" }}>
                    <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Confirmation</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Get the Pre-Placement Offer Letter</h4>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>
                      Validate your logical eligibility milestones with a formal intent of employment before kicking off your tech domain sprints.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="timeline-row">
                  <div style={{ width: "45%", display: "flex", justifyContent: "flex-end" }} className="desktop-only">
                    <div style={{ 
                      backgroundColor: "#C2410C", 
                      padding: "20px 24px", 
                      borderRadius: "8px", 
                      boxShadow: "0 8px 20px rgba(194, 65, 12, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#FFFFFF",
                      minWidth: "280px"
                    }}>
                      <span style={{ fontSize: "20px" }}>🎓</span>
                      <strong style={{ fontSize: "14px", fontWeight: 700 }}>Start Experiential Learning</strong>
                    </div>
                  </div>
                  <div className="timeline-circle" style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "#C2410C", 
                    color: "#FFFFFF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: "0 0 0 8px rgba(194, 65, 12, 0.15)",
                    margin: "0 auto 20px"
                  }}>5</div>
                  <div className="timeline-content" style={{ paddingLeft: "20px" }}>
                    <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Career Launch</span>
                    <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>Start Your Experiential Learning</h4>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.5", margin: 0 }}>
                      Bridge the final gap between theory and code, operating in team sprints, review gates, and Future Skills League seasons.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 7. FLAGSHIP PROGRAMS */}
        <section id="programs" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                WHERE TO START
              </span>
              <h2 className="fade-in-up" style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                Career tracks built around where demand is actually moving
              </h2>
              <p className="fade-in-up" style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "16px", lineHeight: "1.7" }}>
                AI plus execution. Every program pairs current curriculum with corporate practice, real projects, industry exposure and competition.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {[
                { name: "AI Foundations & Productivity", dur: "4–6 weeks", tags: ["AI Literacy", "Prompting", "Workflow Design", "Responsible Use"] },
                { name: "Generative AI & Agentic AI Engineering", dur: "5–6 months", tags: ["Python", "APIs", "RAG", "Agents", "LLMOps", "Deployment"] },
                { name: "Full-Stack Software Engineering with AI", dur: "6–9 months", tags: ["DSA", "Frontend", "Backend", "Cloud", "AI-assisted engineering"] },
                { name: "Data Analytics + BI + GenAI", dur: "4–6 months", tags: ["SQL", "Python", "Power BI", "Statistics", "Data Storytelling"] },
                { name: "Cybersecurity & SOC Analyst", dur: "6 months", tags: ["Networking", "SIEM", "Threat Detection", "Incident Response"] },
                { name: "Cloud, DevOps & Platform Engineering", dur: "6 months", tags: ["Containers", "CI/CD", "IaC", "Observability", "Reliability"] },
                { name: "Data Science, ML & MLOps", dur: "6–9 months", tags: ["ML", "Deep learning", "GenAI", "Model operations"] },
                { name: "Data Engineering & Modern Analytics", dur: "6 months", tags: ["Pipelines", "Warehouses", "Orchestration", "Governance"] }
              ].map((prog, idx) => (
                <div key={idx} className="glass-card fade-in-up" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: "12px", color: "var(--foreground-muted-extra)", fontWeight: 600 }}>⏱ {prog.dur}</span>
                    <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginTop: "8px", marginBottom: "12px", fontWeight: 700 }}>{prog.name}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {prog.tags.map((t, i) => (
                        <span key={i} style={{ fontSize: "10px", background: "rgba(203, 108, 230, 0.12)", color: "var(--secondary-magenta)", padding: "2px 8px", borderRadius: "4px", fontWeight: 500 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/programs`} style={{ color: "#CB6CE6", fontSize: "13px", fontWeight: 650, textDecoration: "none", display: "inline-block", marginTop: "8px" }}>
                    View Program →
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <Link href="/programs" className="glow-btn-primary">
                Compare All Programs →
              </Link>
            </div>
          </div>
        </section>

        {/* 8. TECHLEARNS SKILLOS TEASER */}
        <section id="skillos" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            <div className="grid-split" style={{ gap: "60px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  THE PLATFORM
                </span>
                <h2 style={{ fontSize: "36px", fontWeight: 800, color: "var(--foreground)" }}>
                  Not an LMS. An operating system for your capability.
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                  A standard LMS manages content. Techlearns SkillOS manages what you can actually do. Every assignment, lab, project, competition, review and milestone leaves measurable evidence — feeding directly into your Skill Passport.
                </p>

                <div className="grid-2col" style={{ gap: "16px", marginTop: "10px" }}>
                  {[
                    { title: "Role Skill Graph", desc: "See exactly what a role requires and where you stand" },
                    { title: "Practice Engine", desc: "Coding, SQL, cloud and security labs with instant feedback" },
                    { title: "Corporate Simulation", desc: "Sprint boards, tickets, review gates, demo records" },
                    { title: "Competition Engine", desc: "Challenges, leaderboards, judging, certificates" },
                    { title: "AI Learning Coach", desc: "Personalised practice suggestions and revision plans" },
                    { title: "Skill Passport", desc: "Your verified, shareable evidence record" }
                  ].map((feat, i) => (
                    <div key={i} style={{ borderLeft: "2px solid #CB6CE6", paddingLeft: "12px" }}>
                      <strong style={{ fontSize: "14px", color: "var(--foreground)", display: "block", marginBottom: "4px" }}>{feat.title}</strong>
                      <span style={{ fontSize: "12px", color: "var(--foreground-muted)", lineHeight: "1.4" }}>{feat.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Dashboard philosophy callout */}
                <div style={{ background: "rgba(91, 45, 145, 0.1)", borderLeft: "3px solid #CB6CE6", padding: "16px", marginTop: "12px", borderRadius: "4px" }}>
                  <p style={{ fontSize: "13px", color: "var(--foreground)", margin: 0, lineHeight: "1.5" }}>
                    📊 <strong>Dashboard philosophy:</strong> We show skill mastery trend, practice consistency, and evidence quality — not hours watched or passive logins. Growth is the metric. Not vanity.
                  </p>
                </div>

                <div style={{ marginTop: "10px" }}>
                  <Link href="/skillos" className="glow-btn-primary">
                    Explore SkillOS →
                  </Link>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div 
                  className="glass-card" 
                  style={{ 
                    padding: "16px", 
                    background: "rgba(0,0,0,0.2)", 
                    border: "1px solid var(--border-color)",
                    borderRadius: "20px"
                  }}
                >
                  <img 
                    src="/skillos_dashboard_mockup.png" 
                    alt="SkillOS Workspace Interface" 
                    style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. COMPETITIONS & CHALLENGE ECOSYSTEM */}
        <section id="competitions" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.03)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="grid-split" style={{ gap: "60px", alignItems: "center" }}>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{ fontSize: "11px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  LEARN BY COMPETING
                </span>
                <h2 style={{ fontSize: "36px", fontWeight: 800, color: "var(--foreground)" }}>
                  Compete while you learn — it's not optional here
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                  Hackathons, CTFs, datathons, cloud architecture challenges and demo days are part of your calendar from day one. Pressure, deadlines, and a public audience build skills faster than passive study ever will.
                </p>

                {/* Format chips tag cloud */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "10px 0" }}>
                  {[
                    "AI Agent Buildathon", "Hackathon / Product Sprint", "Datathon", "Cybersecurity CTF",
                    "SOC Incident Simulation", "Cloud Architecture Challenge", "Bug Bash", "API Integration Challenge",
                    "UI/UX Designathon", "Automation Challenge", "Open Source Sprint", "Demo Day / Pitch Arena"
                  ].map((chip, i) => (
                    <span key={i} style={{ fontSize: "12px", background: "rgba(255, 255, 255, 0.04)", border: "1px solid var(--border-color)", color: "var(--foreground-muted)", padding: "6px 12px", borderRadius: "20px" }}>
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Signature event callout */}
                <div style={{ background: "rgba(203, 108, 230, 0.06)", border: "1px dashed var(--secondary-magenta)", padding: "20px", borderRadius: "8px" }}>
                  <strong style={{ color: "#CB6CE6", fontSize: "14px", display: "block", marginBottom: "4px" }}>🏆 Techlearns Future Skills League</strong>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", margin: 0, lineHeight: "1.5" }}>
                    Our annual, season-based competition with regional qualifiers and a national finale, open to partner colleges and industry-sponsored challenge statements.
                  </p>
                </div>

                <div style={{ marginTop: "10px" }}>
                  <Link href="/fsl" className="glow-btn-primary">
                    See Upcoming Challenges →
                  </Link>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div 
                  className="glass-card" 
                  style={{ 
                    padding: "16px", 
                    background: "rgba(0,0,0,0.2)", 
                    border: "1px solid var(--border-color)",
                    borderRadius: "20px"
                  }}
                >
                  <img 
                    src="/fsl_league_trophy.png" 
                    alt="Future Skills League Trophy" 
                    style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* 10. SKILL PASSPORT / PROOF SHOWCASE */}
        <section id="proof" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            <div className="grid-split" style={{ gap: "60px", alignItems: "center" }}>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  EVIDENCE SHOWCASE
                </span>
                <h2 style={{ fontSize: "36px", fontWeight: 800, color: "var(--foreground)" }}>
                  Skill Passport: your dynamic proof profiles
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                  A static resume lists claims. A Techlearns Skill Passport houses proof logs. It compiles role targets, verified practice consistency scores, project repository integrations, mentor code reviews, and certification checks.
                </p>

                {/* Audit and compliance notice */}
                <div style={{ background: "rgba(255, 153, 0, 0.05)", border: "1px dashed rgba(255, 153, 0, 0.2)", padding: "20px", borderRadius: "8px" }}>
                  <strong style={{ color: "#FF9900", fontSize: "13px", display: "block", marginBottom: "4px" }}>⚖️ Regulatory Compliance & Verification Audit</strong>
                  <p style={{ fontSize: "12px", color: "var(--foreground-muted)", margin: 0, lineHeight: "1.5" }}>
                    In accordance with transparency codes, learner placements and practice metrics are subject to annual internal audits. Student data indicators reflect verified SkillOS telemetry. Fabricated metrics are strictly prohibited.
                  </p>
                </div>

                <div style={{ marginTop: "10px" }}>
                  <Link href="/passport" className="glow-btn-primary">
                    See Passport Structure →
                  </Link>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="glass-card" style={{ padding: "16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-color)", borderRadius: "20px" }}>
                  <img 
                    src="/skill_passport_card.png" 
                    alt="Cryptographic Skill Passport Smart Card Illustration" 
                    style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 11. CREDENTIAL STACK TEASER */}
        <section id="credentials" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.02)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                CREDENTIAL SYSTEM
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                A Three-Layer Credential Stack
              </h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "16px", lineHeight: "1.7" }}>
                Every milestone achieved leaves a permanent telemetry trail, structured across international pathways and practice credentials.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              <div className="glass-card" style={{ padding: "30px", borderTop: "3px solid #5B2D91" }}>
                <span style={{ fontSize: "12px", color: "#5B2D91", fontWeight: 700, fontFamily: "monospace" }}>LAYER A</span>
                <h3 style={{ fontSize: "20px", color: "#FFFFFF", margin: "10px 0" }}>External Credentials</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Qualify for official industry standards where relevant, including Microsoft Applied Skills, Google Career Certificates, and AWS cloud competencies.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "30px", borderTop: "3px solid #7C3AED" }}>
                <span style={{ fontSize: "12px", color: "#7C3AED", fontWeight: 700, fontFamily: "monospace" }}>LAYER B</span>
                <h3 style={{ fontSize: "20px", color: "#FFFFFF", margin: "10px 0" }}>Verified Competency</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Techlearns completion certificates, combined with high-performance Skill Distinction Badges awarded only to candidates meeting practice standards.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "30px", borderTop: "3px solid #8B5CF6" }}>
                <span style={{ fontSize: "12px", color: "#8B5CF6", fontWeight: 700, fontFamily: "monospace" }}>LAYER C</span>
                <h3 style={{ fontSize: "20px", color: "#FFFFFF", margin: "10px 0" }}>Experience Badging</h3>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>
                  Earn verified telemetry logs for successful Live Projects, Future Skills League challenge wins, mentor review milestones, and internship roles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. WHO TECHLEARNS IS FOR */}
        <section id="audience" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                TARGET AUDIENCE
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                Tailored pathways for every background
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { name: "Students", role: "Start early, build portfolios, and earn corporate readiness credentials before graduation.", href: "/programs" },
                { name: "Switchers", role: "Transition into tech roles via rigorous labs, live projects, and dedicated placement drives.", href: "/programs" },
                { name: "Professionals", role: "Level up into AI engineering, MLOps, or Cloud Architecture with flexible, advanced modules.", href: "/programs" },
                { name: "Colleges", role: "Plug-and-play CEL programs, SkillOS telemetry platforms, and FSL qualifiers for your campus.", href: "/partners" },
                { name: "Employers", role: "Hire vetted, project-ready talent with complete visibility into commit histories and skill scores.", href: "/partners" }
              ].map((aud, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ fontSize: "20px", color: "#FFFFFF", fontWeight: 700 }}>{aud.name}</h3>
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", marginTop: "10px", lineHeight: "1.5" }}>{aud.role}</p>
                  </div>
                  <Link href={aud.href} style={{ color: "var(--secondary-magenta)", fontSize: "13px", fontWeight: 650 }}>
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. TRUST & GOVERNANCE BAND */}
        <section id="trust" style={{ padding: "60px 0", background: "rgba(91, 45, 145, 0.05)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", textAlign: "center" }}>
          <div className="container">
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>Our Quality & Transparency Pledge</h3>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "14px", lineHeight: "1.6" }}>
              We believe in demonstrable capabilities. Every curriculum is updated quarterly to match industrial shifts. All telemetry dashboard scores reflect actual practice attempts. We maintain complete separation between learning analytics and recruiter matching to preserve grading integrity.
            </p>
          </div>
        </section>

        {/* 14. CONTENT HUB TEASER */}
        <section id="content-hub" style={{ padding: "100px 0 80px" }}>
          <div className="container">
            <div className="grid-split" style={{ gap: "60px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  SKILL REPORT
                </span>
                <h2 style={{ fontSize: "36px", fontWeight: 800, color: "var(--foreground)" }}>
                  Quarterly Skill Reports & Technical Blog
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                  Read our continuous analysis of developer skill gaps, emerging AI architectures, SOC analyst operations, and placement telemetry metrics. We write for engineers and hiring managers who value facts over hype.
                </p>
                <div style={{ marginTop: "10px" }}>
                  <Link href="/blog" className="glow-btn-primary">
                    Browse the Skill Report Hub →
                  </Link>
                </div>
              </div>
              <div className="glass-card" style={{ padding: "30px", background: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
                <h4 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "12px", fontWeight: 700 }}>Featured Article</h4>
                <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 650, fontFamily: "monospace" }}>AI & AGENTIC ENGINEERING</span>
                <h3 style={{ fontSize: "20px", color: "var(--foreground)", margin: "8px 0 12px" }}>The Fall of the Code Monkey: Why practice engines must focus on logic verification</h3>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5" }}>
                  Why copy-pasting code is a career dead-end in the age of generative models, and how to build verifiable evidence of debugging capability.
                </p>
                <Link href="/blog" style={{ color: "var(--secondary-magenta)", fontSize: "13px", fontWeight: 650, display: "inline-block", marginTop: "10px" }}>Read Article →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 15. FAQ ACCORDION */}
        <section id="faq" style={{ padding: "100px 0 80px", background: "rgba(91, 45, 145, 0.02)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span style={{ fontSize: "11px", color: "var(--secondary-magenta)", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                QUESTIONS & ANSWERS
              </span>
              <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "12px", marginBottom: "16px", color: "var(--foreground)" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
              {faqsList.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: "20px 24px", 
                    cursor: "pointer"
                  }}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>{faq.question}</h3>
                    <span style={{ fontSize: "18px", color: "var(--secondary-magenta)" }}>{activeFaq === idx ? "−" : "+"}</span>
                  </div>
                  {activeFaq === idx && (
                    <p style={{ fontSize: "14px", color: "var(--foreground-muted)", marginTop: "12px", lineHeight: "1.6", margin: "12px 0 0 0" }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" style={{ padding: "100px 0", position: "relative" }}>
          <div className="container">
            <div 
              className="glass-card fade-in-up" 
              style={{ 
                padding: "60px 40px", 
                textAlign: "center", 
                background: "var(--contact-card-bg)",
                border: "1px solid var(--border-color)"
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "12px", color: "var(--secondary-magenta)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "16px" }}>THE TECHLEARNS MANIFESTO</p>
                <p style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "15px", lineHeight: "1.8", fontStyle: "italic" }}>
                  We believe talent is everywhere, but meaningful exposure is not. We believe a learner should experience the discipline of real work before the first job. We believe skills become valuable when they are practised, challenged, reviewed and proven. And we believe India can build a generation that does not merely hold certificates — it can build, solve, communicate, compete and lead.
                </p>
              </div>
              <h2 style={{ fontSize: "40px", color: "var(--foreground)", marginBottom: "16px" }}>Stop collecting certificates.<br /><span className="text-gradient-purple">Start building proof.</span></h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "0 auto 20px", fontSize: "16px", lineHeight: "1.6" }}>
                Take a free diagnostic assessment and get a personalised role-fit map in minutes.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "30px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", color: "var(--foreground-muted-extra)" }}>
                  No spam. No obligation. Just a clear starting point.
                </span>
              </div>

              {formSubmitted ? (
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.15)", border: "1px solid #27C93F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>✓</div>
                  <h4 style={{ fontSize: "18px", color: "var(--foreground)" }}>TLET Registration Received!</h4>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)" }}>Please verify your email inbox for initial analytical prep trackers.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="grid-3col" style={{ gap: "16px", maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>FULL NAME</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      style={{ 
                        padding: "10px 14px", 
                        borderRadius: "6px", 
                        fontSize: "13px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--border-color)",
                        color: "var(--foreground)"
                      }}
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
                      style={{ 
                        padding: "10px 14px", 
                        borderRadius: "6px", 
                        fontSize: "13px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--border-color)",
                        color: "var(--foreground)"
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>SELECT PROGRAM</label>
                    <select 
                      name="track" 
                      value={formData.track} 
                      onChange={handleInputChange}
                      style={{ 
                        padding: "10px 14px", 
                        borderRadius: "6px", 
                        fontSize: "13px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid var(--border-color)",
                        color: "var(--foreground)"
                      }}
                    >
                      <option>Generative AI & Agentic AI Engineering</option>
                      <option>Full-Stack Software Engineering with AI</option>
                      <option>Data Analytics + BI + GenAI</option>
                      <option>Cybersecurity & SOC Analyst</option>
                      <option>Cloud, DevOps & Platform Engineering</option>
                      <option>Data Science, ML & MLOps</option>
                      <option>Data Engineering & Modern Analytics</option>
                      <option>AI Foundations & Productivity (Short-form)</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "10px" }}>
                    <button type="submit" className="glow-btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px" }}>
                      Book Your Free Career Diagnostic
                    </button>
                    <Link href="/contact" style={{ color: "#CB6CE6", fontSize: "14px", fontWeight: 600, textDecoration: "none" }} className="hover-underline">
                      Talk to a Program Advisor →
                    </Link>
                  </div>
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

"use client";

import React from "react";
import {
  Compass,
  BookOpen,
  Code2,
  Layers,
  Cpu,
  Briefcase,
  Trophy,
  Rocket,
  ChevronRight,
  Target
} from "lucide-react";

export default function PartnersCelFramework() {
  const celStages = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Understand Your Starting Point.",
      desc: "Every learner begins with an assessment of technical ability, problem-solving, communication and career aspirations.",
      icon: Compass,
      highlights: ["Assessment of technical ability", "Problem-solving evaluation", "Communication & career aspirations", "Clarity instead of confusion"]
    },
    {
      num: "02",
      title: "LEARN",
      subtitle: "Understand Technology With Industry Context.",
      desc: "Students develop strong technical fundamentals through structured learning, mentor guidance, practical demonstrations and AI-supported learning.",
      icon: BookOpen,
      highlights: ["Where and how technology is used", "Real-world applications & use cases", "Industry technology stacks", "Business relevance & products"]
    },
    {
      num: "03",
      title: "PRACTISE",
      subtitle: "Convert Knowledge Into Confidence.",
      desc: "Students practise continuously through coding challenges, technical exercises, problem-solving labs, debugging, and skill assessments.",
      icon: Code2,
      highlights: ["Coding challenges & labs", "Debugging & scenario questions", "AI-assisted practice", "Speed + understanding = capability"]
    },
    {
      num: "04",
      title: "BUILD",
      subtitle: "Create Something That Speaks For Your Skills.",
      desc: "Every major skill creates visible proof. Students move from exercises to applications, platforms, AI solutions, dashboards, and APIs.",
      icon: Layers,
      highlights: ["Websites & SaaS applications", "AI & GenAI solutions", "Data products & dashboards", "Stop saying 'I know it' — show 'I built it'"]
    },
    {
      num: "05",
      title: "OPERATE",
      subtitle: "Experience How Technology Teams Work.",
      desc: "This is where learning begins to feel like professional execution with Git, GitHub, Version Control, Agile, Sprints, and Task Management.",
      icon: Cpu,
      highlights: ["Git & GitHub discipline", "Agile sprints & stand-ups", "Code reviews & testing", "Cloud deployment & documentation"]
    },
    {
      num: "06",
      title: "EXPERIENCE",
      subtitle: "Face Corporate-Like Situations Before Employment.",
      desc: "Students participate in industry problem statements, corporate simulations, client-style briefs, mentor reviews, and live product demos.",
      icon: Briefcase,
      highlights: ["Corporate simulations & briefs", "Mentor & jury reviews", "Technical presentations", "Tech + Business + Communication"]
    },
    {
      num: "07",
      title: "COMPETE",
      subtitle: "Learn to Perform When the Outcome Matters.",
      desc: "Corporate careers are competitive. CEL develops performance ability through hackathons, buildathons, coding contests, and AI challenges.",
      icon: Trophy,
      highlights: ["Hackathons & buildathons", "Coding & AI challenges", "Pressure execution", "Quick thinking within constraints"]
    },
    {
      num: "08",
      title: "PROVE & LAUNCH",
      subtitle: "Turn Learning Into Career Evidence.",
      desc: "The learner's journey becomes visible through GitHub activity, CEL Skill Passport™, mentor reviews, and technical competency.",
      icon: Rocket,
      highlights: ["CEL Skill Passport™ evidence", "Resume & LinkedIn optimization", "Mock & technical interviews", "Direct recruiter interaction"]
    }
  ];

  const corporatePractices = [
    { title: "Professional Reporting", desc: "Communicate progress, completed tasks, and blockers clearly." },
    { title: "Daily & Weekly Targets", desc: "Measurable outcomes instead of vague course completion." },
    { title: "Stand-Up Culture", desc: "Periodically communicate progress, blockers and next actions." },
    { title: "Sprint-Based Work", desc: "Projects divided into milestones similar to agile tech teams." },
    { title: "GitHub Discipline", desc: "Code, versions, and commits become your digital proof." },
    { title: "Documentation Culture", desc: "Document projects, processes and technical decisions." },
    { title: "Review & Feedback", desc: "Regular work reviews so feedback fuels continuous growth." },
    { title: "Presentation Culture", desc: "Repeatedly explain solutions, ideas, and live products." },
    { title: "Professional Comm", desc: "Practise workplace emails, meetings, and interviews." },
    { title: "Team Accountability", desc: "Individual responsibility within shared team outcomes." },
    { title: "Deadline Discipline", desc: "Projects and challenges delivered within defined timelines." },
    { title: "Peer Collaboration", desc: "Give help, receive help, and build solutions together." },
    { title: "Problem Ownership", desc: "Understand the root problem before asking for solutions." },
    { title: "AI Productivity", desc: "Use modern AI tools responsibly to research, build & debug." },
    { title: "Continuous Upskilling", desc: "Develop the habit of learning new tools continuously." }
  ];

  return (
    <>
      {/* SECTION 03: THE 8-STAGE CEL FRAMEWORK */}
      <section id="framework" style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "5px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              03. PROGRESSIVE METHODOLOGY
            </span>
            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: "900", color: "#0B1F3A", marginTop: "14px", marginBottom: "16px" }}>
              The 8-Stage CEL Framework
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "780px", margin: "0 auto", lineHeight: "1.7" }}>
              <strong style={{ color: "#5B2E91" }}>Discover → Learn → Practise → Build → Operate → Experience → Compete → Prove & Launch</strong><br />
              Every stage takes the student closer to complete professional readiness.
            </p>
          </div>

          {/* Interactive 8-Stage Tabs/Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "20px" }}>
            {celStages.map((stage, idx) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "20px",
                    padding: "28px 24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    transition: "all 0.25s ease",
                    position: "relative"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ background: "#5B2E91", color: "#FFFFFF", fontSize: "11px", fontWeight: "900", padding: "3px 10px", borderRadius: "9999px", fontFamily: "monospace" }}>
                      STAGE {stage.num}
                    </span>
                    <IconComponent size={24} color="#5B2E91" />
                  </div>

                  <h3 style={{ fontSize: "20px", fontWeight: "900", color: "#0B1F3A", marginBottom: "4px" }}>
                    {stage.title}
                  </h3>
                  <div style={{ fontSize: "13px", fontWeight: "800", color: "#5B2E91", marginBottom: "12px" }}>
                    {stage.subtitle}
                  </div>

                  <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.6", marginBottom: "16px" }}>
                    {stage.desc}
                  </p>

                  <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {stage.highlights.map((h, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#334155", fontWeight: "600" }}>
                        <ChevronRight size={14} color="#5B2E91" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 04: 100% CORPORATE-READY PRACTICES */}
      <section style={{ padding: "80px 0", background: "#F8FAFC" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "5px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              04. DAILY WORKPLACE HABITS
            </span>
            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: "900", color: "#0B1F3A", marginTop: "14px", marginBottom: "16px" }}>
              100% Corporate-Ready Practices
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: "1.7" }}>
              Corporate readiness is built through daily behavior — not suddenly during placement season.
            </p>
          </div>

          {/* 15 Practices Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "18px" }}>
            {corporatePractices.map((prac, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "20px 22px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)"
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A", marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Target size={16} color="#5B2E91" />
                  <span>{prac.title}</span>
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.6" }}>
                  {prac.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

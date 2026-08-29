"use client";

import React from "react";
import { motion } from "framer-motion";
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
  User,
  CheckCircle2,
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
      <section id="framework" style={{ padding: "90px 0", background: "#E8E7E3" }}>
        <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", marginBottom: "14px" }}>
              <div
                style={{
                  fontSize: "clamp(11px, 1.2vw, 12.5px)",
                  fontWeight: "700",
                  color: "#5B2E91",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "6px"
                }}
              >
                PROGRESSIVE METHODOLOGY
              </div>
              <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
            </div>

            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(28px, 4.2vw, 50px)", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "14px" }}>
              The 8-Stage CEL Framework
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#64748B", maxWidth: "780px", margin: "0 auto", lineHeight: "1.7", fontStyle: "italic" }}>
              Discover &rarr; Learn &rarr; Practise &rarr; Build &rarr; Operate &rarr; Experience &rarr; Compete &rarr; Prove &amp; Launch<br />
              Every stage takes the student closer to complete professional readiness.
            </p>
          </div>

          {/* CAROUSEL POST PORTRAIT FRAME GRID */}
          <div
            className="cel-framework-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "60px"
            }}
          >
            {celStages.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isColoredCard = idx % 2 === 1;

              // Card Background Colors
              const bgColor = isColoredCard ? "#3FA3B5" : "#FFFFFF";
              const textColor = isColoredCard ? "#FFFFFF" : "#0B1F3A";
              const subtitleColor = isColoredCard ? "rgba(255, 255, 255, 0.95)" : "#3FA3B5";
              const watermarkColor = isColoredCard ? "rgba(255, 255, 255, 0.22)" : "rgba(11, 31, 58, 0.08)";
              const descColor = isColoredCard ? "rgba(255, 255, 255, 0.88)" : "#64748B";
              const tagBg = isColoredCard ? "rgba(255, 255, 255, 0.2)" : "#F0FDF4";
              const tagText = isColoredCard ? "#FFFFFF" : "#0D9488";
              const sliderLineBg = isColoredCard ? "rgba(255, 255, 255, 0.35)" : "#CBD5E1";
              const sliderDotBg = isColoredCard ? "#FFFFFF" : "#3FA3B5";

              const dotPositionPercent = ((idx + 1) / celStages.length) * 100;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(0, 0, 0, 0.12)" }}
                  className="cel-stage-card"
                  style={{
                    background: bgColor,
                    borderRadius: "20px",
                    padding: "28px 26px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "440px",
                    border: isColoredCard ? "none" : "1px solid #E2E8F0",
                    transition: "all 0.3s ease",
                    overflow: "hidden"
                  }}
                >
                  {/* Top Header Row */}
                  <div>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px", position: "relative" }}>
                      <span
                        style={{
                          fontSize: "56px",
                          fontWeight: "900",
                          color: watermarkColor,
                          lineHeight: "0.9",
                          fontFamily: "var(--font-headings), sans-serif",
                          letterSpacing: "-0.04em",
                          userSelect: "none"
                        }}
                      >
                        {stage.num}
                      </span>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <IconComponent size={20} color={textColor} />
                        <span style={{ fontSize: "14px", fontWeight: "800", color: textColor, fontFamily: "monospace" }}>
                          {stage.num}
                        </span>
                      </div>
                    </div>

                    <div style={{ fontSize: "12px", fontWeight: "900", color: subtitleColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                      STAGE {stage.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-headings), sans-serif",
                        fontSize: "22px",
                        fontWeight: "900",
                        color: textColor,
                        lineHeight: "1.15",
                        letterSpacing: "-0.01em",
                        marginBottom: "6px",
                        textTransform: "uppercase"
                      }}
                    >
                      {stage.title}
                    </h3>

                    <div style={{ fontSize: "13px", fontWeight: "700", fontStyle: "italic", color: subtitleColor, marginBottom: "12px" }}>
                      {stage.subtitle}
                    </div>

                    <p style={{ fontSize: "13px", color: descColor, lineHeight: "1.55", marginBottom: "16px", fontWeight: "400" }}>
                      {stage.desc}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {stage.highlights.map((h, i) => (
                        <span
                          key={i}
                          style={{
                            background: tagBg,
                            color: tagText,
                            fontSize: "10.5px",
                            fontWeight: "700",
                            padding: "3px 9px",
                            borderRadius: "9999px",
                            border: isColoredCard ? "1px solid rgba(255,255,255,0.3)" : "1px solid #CCFBF1"
                          }}
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Elements */}
                  <div style={{ marginTop: "24px" }}>
                    <div style={{ position: "relative", width: "100%", height: "2px", background: sliderLineBg, marginBottom: "18px", borderRadius: "2px" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: `${dotPositionPercent}%`,
                          transform: "translate(-50%, -50%)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: sliderDotBg,
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          background: isColoredCard ? "rgba(255, 255, 255, 0.22)" : "rgba(11, 31, 58, 0.05)",
                          padding: "5px 12px",
                          borderRadius: "9999px",
                          fontSize: "11px",
                          fontWeight: "800",
                          color: textColor
                        }}
                      >
                        <User size={12} color={textColor} />
                        <span>Techlearns CEL™</span>
                      </div>

                      <div style={{ opacity: 0.8, color: textColor }}>
                        <ChevronRight size={18} color={textColor} />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 04: 100% CORPORATE-READY PRACTICES */}
      <section style={{ padding: "90px 0", background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

          {/* 2-Column Split Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "48px",
              alignItems: "start"
            }}
            className="corporate-split-container"
          >
            {/* Left Column */}
            <div className="corporate-sticky-left" style={{ position: "sticky", top: "100px" }}>
              <div style={{ display: "inline-flex", flexDirection: "column", marginBottom: "16px" }}>
                <div
                  style={{
                    fontSize: "clamp(11px, 1.2vw, 12.5px)",
                    fontWeight: "700",
                    color: "#5B2E91",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "6px"
                  }}
                >
                  DAILY WORKPLACE HABITS
                </div>
                <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-headings), sans-serif",
                  fontSize: "clamp(26px, 3.4vw, 42px)",
                  fontWeight: "900",
                  color: "#0B1F3A",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  marginBottom: "16px"
                }}
              >
                100% Corporate-Ready Practices
              </h2>
              <p style={{ fontSize: "clamp(14px, 1.3vw, 15px)", color: "#64748B", lineHeight: "1.65" }}>
                Corporate readiness is built through daily behavior — not suddenly during placement season.
              </p>
            </div>

            {/* Right Column */}
            <div
              style={{
                borderLeft: "1px solid #E2E8F0",
                paddingLeft: "48px"
              }}
              className="corporate-grid-col"
            >
              <div
                className="corporate-subgrid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "32px 28px"
                }}
              >
                {corporatePractices.map((prac, idx) => (
                  <div
                    key={idx}
                    style={{
                      paddingBottom: "24px",
                      borderBottom: "1px solid #F1F5F9",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <Target size={15} color="#5B2E91" />
                      <h3 style={{ fontSize: "15px", fontWeight: "800", color: "#0B1F3A" }}>
                        {prac.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.5" }}>
                      {prac.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

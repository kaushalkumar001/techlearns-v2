"use client";

import React from "react";
import { Eye, Rocket, Network, Cpu, Building2, GraduationCap, Lightbulb, Users } from "lucide-react";

export default function AboutVisionAdvisory() {
  const graduateOutcomes = [
    "Skills",
    "Experience",
    "Portfolio",
    "Professional Confidence",
    "Industry Exposure",
    "Continuous Adaptability"
  ];

  const ecosystemNodes = [
    "Learners",
    "Mentors",
    "Universities",
    "Technology Platforms",
    "Industry Experts",
    "Companies",
    "Innovation Communities",
    "Recruiters"
  ];

  const advisoryDomains = [
    {
      title: "TECHNOLOGY & AI",
      desc: "Technology leaders helping us stay aligned with emerging technologies, modern engineering practices and AI-driven transformation.",
      icon: <Cpu size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    },
    {
      title: "INDUSTRY & CORPORATE LEADERSHIP",
      desc: "Professionals providing insights into changing workplace expectations, talent requirements and organisational practices.",
      icon: <Building2 size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    },
    {
      title: "ACADEMIA & EDUCATION",
      desc: "Academic leaders contributing perspectives on learner development, curriculum innovation and industry-academia integration.",
      icon: <GraduationCap size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    },
    {
      title: "ENTREPRENEURSHIP & INNOVATION",
      desc: "Founders and ecosystem leaders encouraging product thinking, innovation and entrepreneurial capability.",
      icon: <Lightbulb size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    },
    {
      title: "TALENT & EMPLOYABILITY",
      desc: "HR, talent acquisition and workforce leaders helping align learner development with evolving hiring expectations.",
      icon: <Users size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header: Vision & Mission */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#F5F0FF",
                border: "1px solid #E4D7FF",
                padding: "5px 16px",
                borderRadius: "9999px",
                color: "#5B2E91",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#5B2E91", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>
                🎯
              </span>
              <span>03. OUR VISION &amp; MISSION</span>
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-headings), sans-serif",
              fontSize: "38px",
              fontWeight: "900",
              color: "#0B1F3A",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}
          >
            Creating a New Standard<br />
            <span style={{ color: "#8B5CF6" }}>for Technology Learning</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "600px", margin: "0 auto", fontWeight: "400" }}>
            Our vision is to build Techlearns into a globally recognised Corporate Experience Learning ecosystem connecting education, emerging technologies and industry.
          </p>
        </div>

        {/* 2-Column Split: Vision & Mission */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }} className="grid-2col">

          {/* Vision Box */}
          <div
            style={{
              background: "#FAF9FE",
              border: "1.5px solid #EDE9FE",
              borderRadius: "28px",
              padding: "36px",
              boxShadow: "0 10px 30px rgba(91, 46, 145, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Eye size={20} color="#8B5CF6" />
                </div>
                <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5B2E91" }}>
                  OUR VISION
                </span>
              </div>

              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "20px", fontWeight: "800", color: "#0B1F3A", marginBottom: "12px" }}>
                Graduating with Real Capability
              </h3>

              <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6", marginBottom: "24px" }}>
                We envision a future where learners graduate not only with theoretical knowledge, but with a complete evidence stack built for professional impact.
              </p>

              <div style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", marginBottom: "12px" }}>
                LEARNERS GRADUATE WITH:
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {graduateOutcomes.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #EDE9FE",
                      borderRadius: "9999px",
                      padding: "4px 14px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#8B5CF6"
                    }}
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Box */}
          <div
            style={{
              background: "linear-gradient(135deg, #0B1F3A 0%, #1E0A3C 100%)",
              borderRadius: "28px",
              padding: "36px",
              color: "#FFFFFF",
              boxShadow: "0 15px 40px rgba(11, 31, 58, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Rocket size={20} color="#D8B4FE" />
                </div>
                <span style={{ fontSize: "12px", fontWeight: "900", letterSpacing: "0.1em", textTransform: "uppercase", color: "#D8B4FE" }}>
                  OUR MISSION
                </span>
              </div>

              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "20px", fontWeight: "800", color: "#FFFFFF", marginBottom: "16px" }}>
                Empowering Digital Economy Leaders
              </h3>

              <p style={{ fontSize: "14px", fontWeight: "500", color: "#E2E8F0", lineHeight: "1.7" }}>
                “To empower learners with technology capabilities, professional experiences and career confidence required to thrive in a continuously evolving digital economy.”
              </p>
            </div>

            <div style={{ marginTop: "32px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.12)", fontSize: "12px", color: "#D8B4FE", fontWeight: "700" }}>
              ⚡ Building real career confidence from Day 1.
            </div>
          </div>

        </div>

        {/* Connected Ecosystem Matrix Box */}
        <div
          style={{
            background: "#F8F5FD",
            border: "2px dashed #EDE9FE",
            borderRadius: "28px",
            padding: "36px",
            textAlign: "center",
            marginBottom: "80px"
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8B5CF6", marginBottom: "10px" }}>
            <Network size={16} color="#8B5CF6" />
            <span>INTERCONNECTED ECOSYSTEM MATRIX</span>
          </div>
          <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A", marginBottom: "16px" }}>
            Our ambition is to create an interconnected ecosystem bringing together:
          </h4>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px", maxWidth: "900px", margin: "0 auto 16px" }}>
            {ecosystemNodes.map((node, i) => (
              <React.Fragment key={node}>
                <span style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "9999px", padding: "6px 16px", fontSize: "12px", fontWeight: "700", color: "#0B1F3A" }}>
                  {node}
                </span>
                {i < ecosystemNodes.length - 1 && (
                  <span style={{ color: "#8B5CF6", fontWeight: "900" }}>×</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div style={{ fontSize: "13px", fontWeight: "800", color: "#5B2E91" }}>
            Together, creating stronger pathways from learning to professional impact.
          </div>
        </div>

        {/* Advisory Board Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#F5F0FF",
                border: "1px solid #E4D7FF",
                padding: "5px 16px",
                borderRadius: "9999px",
                color: "#5B2E91",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#5B2E91", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>
                👥
              </span>
              <span>05. ADVISORY BOARD</span>
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-headings), sans-serif",
              fontSize: "36px",
              fontWeight: "900",
              color: "#0B1F3A",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}
          >
            Guided by Experience. Shaped by Industry.
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "600px", margin: "0 auto", fontWeight: "400" }}>
            Building future-ready talent requires perspectives beyond the classroom. The Techlearns Advisory Board brings together experienced leaders from complementary domains.
          </p>
        </div>

        {/* 5 Domains Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}
          className="grid-3col"
        >
          {advisoryDomains.map((d) => (
            <div
              key={d.title}
              style={{
                background: "#FAF9FE",
                border: "1.5px solid #EDE9FE",
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: d.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px"
                  }}
                >
                  {d.icon}
                </div>
                <h3 style={{ fontSize: "13px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.06em", color: "#0B1F3A", marginBottom: "8px" }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6" }}>
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

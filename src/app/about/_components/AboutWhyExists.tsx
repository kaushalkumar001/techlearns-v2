"use client";

import React from "react";
import { Target, Users, ShieldCheck } from "lucide-react";

export default function AboutWhyExists() {
  const features = [
    {
      title: "Trusted Partner & Purpose",
      desc: "To make professional experience an integral part of the learning journey—not something that begins only after employment.",
      icon: <Target size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    },
    {
      title: "Fastpace Workplace Integration",
      desc: "Creating an environment where learners progressively understand how technology is applied, how teams operate, and how ideas become products.",
      icon: <Users size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    },
    {
      title: "Tested Reliability & Proof",
      desc: "Projects, portfolios, challenges, demonstrations and assessments create stronger evidence than course completion certificates alone.",
      icon: <ShieldCheck size={20} color="#8B5CF6" />,
      bg: "#F5F0FF"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="grid-2col"
        >

          {/* Left Column: Overlapping Dual Composition with Bridge Puzzle Illustration */}
          <div style={{ position: "relative", minHeight: "340px", paddingBottom: "24px" }}>

            {/* Primary Illustration Container scaled to match image aspect ratio */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                aspectRatio: "765 / 470",
                margin: "0 auto",
                borderRadius: "28px",
                border: "4px solid #FFFFFF",
                background: "#0891B2",
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                overflow: "hidden"
              }}
            >
              <img
                src="/crops/bridge_gap_illustration.png"
                alt="Bridging the Space Between Education and the Real World"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            {/* Secondary Overlapping Rounded Photo Card */}
            <div
              style={{
                position: "absolute",
                bottom: "-18px",
                left: "0px",
                width: "200px",
                height: "140px",
                borderRadius: "24px",
                border: "4px solid #FFFFFF",
                background: "#0B1F3A",
                boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                overflow: "hidden",
                zIndex: 10
              }}
            >
              <img
                src="/crops/lab_modern.png"
                alt="TechLearns Corporate Lab"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Circular Purple Floating Stat Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "0px",
                width: "115px",
                height: "115px",
                borderRadius: "50%",
                background: "#8B5CF6",
                color: "#FFFFFF",
                padding: "16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 18px 40px rgba(139, 92, 246, 0.38)",
                zIndex: 20
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: "900", lineHeight: "1" }}>10,000+</span>
              <span style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", color: "#F3E8FF", marginTop: "4px" }}>
                Students Mentored
              </span>
            </div>

          </div>

          {/* Right Column: Content & 3 Purple Feature Rows (Matching img1 layout) */}
          <div>

            {/* Eyebrow Tag */}
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
                  🏢
                </span>
                <span>About Company</span>
              </span>
            </div>

            {/* Headline */}
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
              We Are The Best Corporate Experience Learning Platform
            </h2>

            {/* Paragraph Subtitle */}
            <p style={{ fontSize: "15px", color: "#64748B", lineHeight: "1.7", marginBottom: "32px", fontWeight: "400" }}>
              Technology is changing faster than conventional learning models. Students today have unprecedented access to courses, tutorials and certifications—yet employers continue to experience a gap between academic knowledge and workplace capability. Techlearns was created to address this gap.
            </p>

            {/* 3 Purple Icon Feature Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {features.map((feat) => (
                <div key={feat.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: feat.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A", marginBottom: "4px" }}>
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6" }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

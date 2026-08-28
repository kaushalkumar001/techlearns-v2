"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function AboutFounderJourney() {
  const journeyNodes = [
    "Technology Programs",
    "Corporate Experience Learning",
    "AI-Enabled Learning",
    "Industry Mentorship",
    "Innovation Challenges",
    "Professional Communities",
    "Techlearns for Campus",
    "Centres of Excellence",
    "Corporate Partnerships",
    "Talent & Career Opportunities"
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FAF9FC", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section 04: Meet the Founder */}
        <motion.div
          id="founder"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          style={{ marginBottom: "80px" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center" }} className="grid-2col">

            {/* Left Bio Text */}
            <div>
              <div style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#5B2E91", marginBottom: "8px" }}>
                04. MEET THE FOUNDER
              </div>
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "36px", fontWeight: "900", color: "#0B1F3A", marginBottom: "4px" }}>
                Prof. Ankur Gill
              </h3>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#5B2E91", marginBottom: "16px" }}>
                Founder, Techlearns • Educator • Industry Professional • Mentor • Author • Institution Builder
              </div>

              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.7", marginBottom: "16px" }}>
                Techlearns is founded by <strong style={{ color: "#0B1F3A" }}>Prof. Ankur Gill</strong>, an education and industry professional with more than a decade of experience spanning <strong style={{ color: "#0B1F3A" }}>academic operations, student development, employability, corporate relations, admissions, technology initiatives and industry-academia engagement.</strong>
              </p>

              {/* Observation Callout Box */}
              <div
                style={{
                  background: "#F5F0FF",
                  borderLeft: "4px solid #5B2E91",
                  padding: "16px 20px",
                  borderRadius: "0 16px 16px 0",
                  marginBottom: "16px"
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: "800", color: "#5B2E91", marginBottom: "4px" }}>
                  A Fundamental Observation:
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#0B1F3A", fontStyle: "italic", lineHeight: "1.5" }}>
                  “Students do not need only more courses. They need environments that allow them to experience how professionals learn, think, build and perform.”
                </div>
              </div>

              {/* Founder's Belief Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0B1F3A 0%, #1E0A3C 100%)",
                  borderRadius: "20px",
                  padding: "20px 24px",
                  color: "#FFFFFF",
                  boxShadow: "0 10px 25px rgba(11, 31, 58, 0.2)",
                  marginBottom: "24px"
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#D8B4FE", marginBottom: "6px" }}>
                  THE FOUNDER&apos;S BELIEF
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700", lineHeight: "1.6", color: "#FFFFFF" }}>
                  “The real outcome of education is not what a learner knows—it is what the learner becomes capable of doing with that knowledge.”
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ fontSize: "13px", color: "#64748B", maxWidth: "420px" }}>
                  His vision for Techlearns is to create an ecosystem where students can gain <strong style={{ color: "#0B1F3A" }}>experience before employment</strong> and develop the confidence to compete in a global technology economy.
                </div>

                <Link
                  href="/mentors"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: "800",
                    color: "#5B2E91",
                    textDecoration: "none",
                    whiteSpace: "nowrap"
                  }}
                >
                  <span>Know More About Our Founder</span>
                  <ArrowRight size={14} color="#5B2E91" />
                </Link>
              </div>

            </div>

            {/* Right Founder Photo & Glass Badge */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "360px",
                  borderRadius: "28px",
                  border: "4px solid #FFFFFF",
                  background: "#F5F0FF",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                  overflow: "hidden"
                }}
              >
                <img
                  src="/crops/founder_ankur.png"
                  alt="Prof. Ankur Gill - Founder, Techlearns"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 10%"
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "10px",
                  maxWidth: "240px",
                  background: "rgba(11, 31, 58, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "16px",
                  color: "#FFFFFF",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
                }}
              >
                <div style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", color: "#D8B4FE" }}>
                  Founder &amp; CEO
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#FFFFFF", marginTop: "2px" }}>
                  Prof. Ankur Gill
                </div>
                <div style={{ fontSize: "11px", color: "#E2E8F0", marginTop: "2px", lineHeight: "1.3" }}>
                  10+ Years Experience in Employability &amp; Corporate Relations.
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Light Separation Line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #E2E8F0 15%, #E2E8F0 85%, transparent 100%)", margin: "60px 0" }} />

        {/* Section Header: Section 06 The Journey Ahead */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
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
                🚀
              </span>
              <span>06. THE JOURNEY AHEAD</span>
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
            Building More Than{" "}
            <span style={{ color: "#5B2E91" }}>a Learning Platform</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "560px", margin: "0 auto 20px", fontWeight: "400" }}>
            Techlearns is being built as an evolving ecosystem. Our journey will progressively connect:
          </p>
        </motion.div>

        {/* 10 Journey Nodes Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "14px",
            marginBottom: "40px"
          }}
          className="grid-2col"
        >
          {journeyNodes.map((node, idx) => (
            <div
              key={node}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #EDE9FE",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}
            >
              <div style={{ background: "#F5F0FF", color: "#5B2E91", fontSize: "11px", fontWeight: "900", padding: "2px 6px", borderRadius: "6px", fontFamily: "monospace" }}>
                0{idx + 1}
              </div>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#0B1F3A" }}>
                {node}
              </span>
            </div>
          ))}
        </div>

        {/* Light Separation Line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #E2E8F0 15%, #E2E8F0 85%, transparent 100%)", margin: "60px 0 40px" }} />

        {/* Wide White Container Stage (Exact img1 Design) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            margin: "40px auto 0",
            background: "#FFFFFF",
            borderRadius: "32px",
            padding: "68px 48px",
            color: "#0B1F3A",
            textAlign: "center",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.06)",
            border: "1px solid #E2E8F0",
            overflow: "hidden"
          }}
        >
          {/* Left Side U-Shaped Purple-Blue Arc Graphic (Exact img1 Match) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-80px",
              transform: "translateY(-50%)",
              width: "320px",
              height: "320px",
              pointerEvents: "none",
              zIndex: 1
            }}
          >
            <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
              <defs>
                <linearGradient id="exactLeftArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5B2E91" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#7E3AF2" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
                </linearGradient>
                <filter id="exactLeftArcShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#5B2E91" floodOpacity="0.25" />
                </filter>
              </defs>
              {/* Upward U-Curve Arc (Dips in center, curves up on both ends) */}
              <path
                d="M 10 110 C 50 260 210 260 280 90"
                stroke="url(#exactLeftArcGrad)"
                strokeWidth="48"
                strokeLinecap="round"
                filter="url(#exactLeftArcShadow)"
              />
            </svg>
          </div>

          {/* Right Side Inverted Rainbow Purple-Blue Arc Graphic (Exact img1 Match) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-80px",
              transform: "translateY(-50%)",
              width: "340px",
              height: "340px",
              pointerEvents: "none",
              zIndex: 1
            }}
          >
            <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
              <defs>
                <linearGradient id="exactRightArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#7E3AF2" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#5B2E91" stopOpacity="0.95" />
                </linearGradient>
                <filter id="exactRightArcShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#5B2E91" floodOpacity="0.25" />
                </filter>
              </defs>
              {/* Inverted Rainbow Arch (Curves UP over top-right corner) */}
              <path
                d="M 30 250 C 90 40 270 40 325 190"
                stroke="url(#exactRightArcGrad)"
                strokeWidth="50"
                strokeLinecap="round"
                filter="url(#exactRightArcShadow)"
              />
            </svg>
          </div>

          <div style={{ position: "relative", zIndex: 10, maxWidth: "700px", margin: "0 auto" }}>

            {/* Premium Eyebrow Pill Badge */}
            <div style={{ marginBottom: "18px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  background: "linear-gradient(135deg, #F5F0FF 0%, #EDE9FE 100%)",
                  border: "1px solid #D8B4FE",
                  padding: "7px 22px",
                  borderRadius: "9999px",
                  color: "#5B2E91",
                  fontSize: "12px",
                  fontWeight: "900",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 15px rgba(91, 46, 145, 0.08)"
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#5B2E91",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    boxShadow: "0 2px 6px rgba(91, 46, 145, 0.35)",
                    lineHeight: 1
                  }}
                >
                  ⦿
                </span>
                <span>THE FUTURE OF TECHNOLOGY LEARNING</span>
              </span>
            </div>

            {/* Main Headline with Gradient Shimmer Accent */}
            <h3
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "clamp(36px, 4.2vw, 52px)",
                fontWeight: "900",
                color: "#0B1F3A",
                lineHeight: "1.12",
                letterSpacing: "-0.025em",
                marginBottom: "18px"
              }}
            >
              We Are Building for<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                What Comes Next.
              </span>
            </h3>

            {/* Subtitle Paragraph (Original Content with Subtle Highlight) */}
            <p
              style={{
                fontSize: "15px",
                color: "#64748B",
                lineHeight: "1.7",
                maxWidth: "620px",
                margin: "0 auto 32px",
                fontWeight: "400"
              }}
            >
              Techlearns brings together technology learning, practical exposure, AI integration, industry engagement, and career readiness within one connected <strong style={{ color: "#0B1F3A", fontWeight: "700" }}>Corporate Experience Learning ecosystem.</strong>
            </p>

            {/* Center Purple Gradient Capsule CTA Button (Matching img1 center CTA button) */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                href="/cel"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                  color: "#FFFFFF",
                  padding: "14px 36px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px rgba(91, 46, 145, 0.35)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>Explore CEL Methodology</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Edit3, Maximize2, Search, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function AboutDifferent() {
  const principles = [
    {
      isElevated: true,
      title: "EXPERIENCE-LED LEARNING",
      desc: "Learning becomes more powerful when concepts are connected with projects, challenges, professional environments and real applications.",
      icon: <Edit3 size={20} color="#5B2E91" />,
      iconBg: "#F5F0FF"
    },
    {
      title: "INDUSTRY-ALIGNED SKILLS",
      desc: "Our learning ecosystem evolves with technologies, tools, roles and capabilities shaping the modern workplace.",
      icon: <Maximize2 size={20} color="#0B1F3A" />
    },
    {
      title: "AI-NATIVE THINKING",
      desc: "AI is not treated only as another subject. We encourage learners to understand how AI can enhance the way they learn, build, analyse, automate and create.",
      icon: <Search size={20} color="#0B1F3A" />
    },
    {
      title: "PROOF-DRIVEN GROWTH",
      desc: "We believe capability should be visible. Projects, portfolios, challenges, demonstrations and assessments create stronger evidence than course completion alone.",
      icon: <ShieldCheck size={20} color="#0B1F3A" />
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "44px",
            flexWrap: "wrap",
            gap: "24px"
          }}
        >
          {/* Title with Blue Toggle Switch */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5B2E91", marginBottom: "8px" }}>
              WHAT MAKES TECHLEARNS DIFFERENT
            </div>
            <h2
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "clamp(30px, 3.6vw, 42px)",
                fontWeight: "900",
                color: "#0B1F3A",
                lineHeight: "1.15",
                letterSpacing: "-0.025em",
                margin: 0
              }}
            >
              Designed Around<br />
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#5B2E91" }}>capability</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    width: "56px",
                    height: "28px",
                    borderRadius: "9999px",
                    background: "#5B2E91",
                    padding: "3px",
                    cursor: "pointer"
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                      marginLeft: "auto"
                    }}
                  />
                </span>
                <span>Not Course Completion.</span>
              </span>
            </h2>
          </div>

          {/* Top Right Dark Pill Button */}
          <Link
            href="/cel"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#0B1F3A",
              color: "#FFFFFF",
              padding: "13px 26px",
              borderRadius: "14px",
              fontSize: "13.5px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease"
            }}
          >
            <span style={{ fontSize: "14px" }}>✨</span>
            <span>Explore CEL</span>
          </Link>
        </motion.div>

        <p style={{ fontSize: "15px", color: "#64748B", marginBottom: "40px", fontWeight: "500" }}>
          Techlearns is built around four fundamental principles:
        </p>

        {/* 4 Principles Grid (Matching img1 layout) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
            marginBottom: "48px"
          }}
          className="grid-2col"
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: smoothEase }}
              style={
                p.isElevated
                  ? {
                    background: "#FFFFFF",
                    borderRadius: "24px",
                    padding: "32px 28px",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.04)"
                  }
                  : {
                    background: "#FAF9FE",
                    borderRadius: "24px",
                    padding: "32px 28px",
                    border: "1px solid #EDE9FE"
                  }
              }
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: p.iconBg || "#F5F0FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px"
                }}
              >
                {p.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-headings), sans-serif",
                  fontSize: "15px",
                  fontWeight: "900",
                  letterSpacing: "0.04em",
                  color: "#0B1F3A",
                  marginBottom: "8px",
                  textTransform: "uppercase"
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#64748B",
                  lineHeight: "1.65",
                  margin: 0,
                  fontWeight: "400"
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Principle Box: One Skill. One Proof. */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          style={{
            background: "#F5F0FF",
            border: "1.5px solid #E4D7FF",
            borderRadius: "24px",
            padding: "32px 36px",
            color: "#0B1F3A",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <Sparkles size={18} color="#5B2E91" />
              <span style={{ fontSize: "11px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", color: "#5B2E91" }}>
                FLAGSHIP PHILOSOPHY
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "24px", fontWeight: "900", color: "#0B1F3A", marginBottom: "4px" }}>
              One Skill. One Proof.
            </h3>
            <p style={{ fontSize: "13.5px", color: "#64748B", margin: 0 }}>
              That philosophy sits at the heart of Techlearns.
            </p>
          </div>

          <Link
            href="/cel"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
              color: "#FFFFFF",
              padding: "12px 28px",
              borderRadius: "9999px",
              fontSize: "13.5px",
              fontWeight: "800",
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(91, 46, 145, 0.3)"
            }}
          >
            <span>Explore CEL Methodology</span>
            <ArrowRight size={15} color="#FFFFFF" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

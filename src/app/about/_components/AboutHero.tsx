"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  const ecosystemPills = [
    "Learn",
    "Experience",
    "Build",
    "Compete",
    "Prove",
    "Lead"
  ];

  return (
    <section
      style={{
        position: "relative",
        background: "#FAF8FE",
        padding: "48px 0 90px",
        overflow: "hidden"
      }}
    >
      {/* Right Side Solid Purple Background Stage (700px height) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "42%",
          height: "700px",
          background: "linear-gradient(140deg, #8B5CF6 0%, #7C3AED 45%, #6D28D9 100%)",
          zIndex: 1
        }}
        className="desktop-only"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.14,
            backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
            backgroundSize: "20px 20px"
          }}
        />
      </div>

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

        {/* Top Hero Split Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "40px",
            alignItems: "center",
            minHeight: "440px"
          }}
          className="grid-2col"
        >

          {/* Left Column: Title, Subtitles, Philosophy */}
          <div>

            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: "18px" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#F5F0FF",
                  border: "1px solid #E4D7FF",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  color: "#5B2E91",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase"
                }}
              >
                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#5B2E91",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "8px"
                  }}
                >
                  ⦿
                </span>
                <span>ABOUT TECHLEARNS</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "clamp(36px, 4.3vw, 56px)",
                fontWeight: "900",
                color: "#180C2E",
                lineHeight: "1.12",
                letterSpacing: "-0.025em",
                marginBottom: "18px"
              }}
            >
              Building Talent for<br />
              <span style={{ color: "#8B5CF6" }}>the Way the World Works</span>
            </motion.h1>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "15px",
                color: "#0B1F3A",
                lineHeight: "1.65",
                maxWidth: "520px",
                marginBottom: "16px",
                fontWeight: "600"
              }}
            >
              Techlearns is a next-generation Corporate Experience Learning company built to transform how technology talent learns, experiences and prepares for the professional world.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                fontSize: "14px",
                color: "#64748B",
                lineHeight: "1.65",
                maxWidth: "520px",
                marginBottom: "24px",
                fontWeight: "400"
              }}
            >
              We believe the future of learning is not about consuming more content—it is about developing the ability to <strong style={{ color: "#0B1F3A" }}>apply knowledge, solve problems, work professionally and demonstrate capability.</strong> Through our <strong style={{ color: "#5B2E91" }}>Corporate Experience Learning (CEL)</strong> philosophy, Techlearns brings together technology learning, AI, practical exposure, industry engagement and career readiness within one connected ecosystem.
            </motion.p>

            {/* 2 Capsule Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
            >
              <Link
                href="/cel"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#8B5CF6",
                  color: "#FFFFFF",
                  padding: "13px 36px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(139, 92, 246, 0.35)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>Explore CEL Philosophy</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </Link>

              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#FFFFFF",
                  color: "#7C3AED",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  padding: "13px 36px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
                }}
              >
                <span>Explore Programs</span>
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Clean Student Cutout Image touching bottom cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "relative",
              height: "100%"
            }}
          >
            <img
              src="/crops/hero_student_clean_cutout.png"
              alt="TechLearns Fellow"
              style={{
                height: "460px",
                maxHeight: "460px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "-32px",
                zIndex: 10,
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.15))"
              }}
            />
          </div>

        </div>

        {/* Floating Dual Cards Row: Manifesto & CEL Ecosystem Pills */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: "24px",
            marginTop: "32px"
          }}
          className="grid-2col"
        >

          {/* Left Purple Card: "I can build it. I can solve it. I can prove it." */}
          <div
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
              borderRadius: "24px",
              padding: "36px 32px",
              color: "#FFFFFF",
              boxShadow: "0 20px 45px rgba(139, 92, 246, 0.28)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", color: "#F3E8FF", marginBottom: "8px" }}>
                OUR CONFIDENT BELIEF
              </div>
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "20px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1.4", marginBottom: "12px" }}>
                We are building Techlearns for a generation that wants to go beyond “I know it” to confidently say:
              </h3>
              <div style={{ fontSize: "17px", fontWeight: "900", color: "#FDE68A", fontStyle: "italic", marginBottom: "20px" }}>
                “I can build it. I can solve it. I can prove it.”
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {ecosystemPills.map((pill) => (
                <span
                  key={pill}
                  style={{
                    background: "rgba(255, 255, 255, 0.18)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "9999px",
                    padding: "4px 12px",
                    fontSize: "11.5px",
                    fontWeight: "800",
                    color: "#FFFFFF"
                  }}
                >
                  • {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right White Card: Corporate Experience Learning Ecosystem */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #EDE9FE",
              borderRadius: "24px",
              padding: "32px 36px",
              boxShadow: "0 15px 45px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8B5CF6", marginBottom: "6px" }}>
                CONNECTED ECOSYSTEM
              </div>
              <h4 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "20px", fontWeight: "800", color: "#0B1F3A", marginBottom: "10px" }}>
                Corporate Experience Learning Ecosystem
              </h4>
              <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6", marginBottom: "20px" }}>
                Bringing together technology learning, AI, practical exposure, industry engagement and career readiness within one connected ecosystem.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", borderTop: "1px solid #F1F5F9", paddingTop: "16px" }}>
              <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#5B2E91" }}>
                Learn. Experience. Build. Compete. Prove. Lead.
              </div>
              <Link
                href="/cel"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12.5px",
                  fontWeight: "800",
                  color: "#8B5CF6",
                  textDecoration: "none"
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={14} color="#8B5CF6" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  const checklist = [
    "Experience-Led Learning",
    "Industry-Aligned Skills",
    "AI-Native Thinking",
    "Proof-Driven Growth",
    "Verified Skill Passport",
    "1-on-1 Corporate Mentorship",
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
      {/* Right Side Solid Purple Background Block (Set to 700px height) */}
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
        {/* Geometric Hex Pattern Overlay */}
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

          {/* Left Column: Eyebrow, Title, Paragraph, Buttons */}
          <div>

            {/* Eyebrow Tag (Matching img1 style) */}
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
                  background: "transparent",
                  color: "#5B2E91",
                  fontSize: "12.5px",
                  fontWeight: "800",
                  letterSpacing: "0.02em"
                }}
              >
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "1.5px solid #8B5CF6",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8B5CF6",
                    fontSize: "9px"
                  }}
                >
                  ⦿
                </span>
                <span>Feel The Convenience</span>
              </span>
            </motion.div>

            {/* Main Headline (Matching img1 typography) */}
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
              the Way the World Works
            </motion.h1>

            {/* Paragraph Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "15px",
                color: "#64748B",
                lineHeight: "1.65",
                maxWidth: "500px",
                marginBottom: "32px",
                fontWeight: "400"
              }}
            >
              Techlearns is a next-generation Corporate Experience Learning company built to transform how technology talent learns, experiences and prepares for the professional world.
            </motion.p>

            {/* 2 Capsule Action Buttons (Matching img1 button styles) */}
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
                  justifyContent: "center",
                  background: "#8B5CF6",
                  color: "#FFFFFF",
                  padding: "13px 36px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(139, 92, 246, 0.35)",
                  transition: "all 0.2s ease"
                }}
              >
                Get Started
              </Link>

              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  color: "#7C3AED",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  padding: "13px 36px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.2s ease"
                }}
              >
                Learn More
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Clean Cutout Student Image moved down touching the How Can I Help You div */}
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

        {/* Overlapping Floating Dual Cards Row (Matching img1 bottom dual cards) */}
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

          {/* Left Purple Floating Card (Matching img1 purple card) */}
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
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "21px", fontWeight: "800", color: "#FFFFFF", marginBottom: "8px" }}>
                Always Update Every Day
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.55", marginBottom: "28px" }}>
                Corporate Experience Learning brings together technology learning, AI, practical exposure, and career readiness.
              </p>
            </div>

            {/* Form Input Bar with White Pill Button (Matching img1 form input) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.22)",
                backdropFilter: "blur(12px)",
                padding: "5px",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <input
                type="text"
                readOnly
                value="fellow@techlearns.com"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  padding: "6px 16px",
                  fontSize: "12.5px",
                  fontWeight: "600",
                  color: "#FFFFFF"
                }}
              />
              <Link
                href="/cel"
                style={{
                  background: "#FFFFFF",
                  color: "#7C3AED",
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: "800",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
              >
                Request
              </Link>
            </div>
          </div>

          {/* Right White Floating Card (Matching img1 white split card) */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "24px",
              padding: "32px 36px",
              boxShadow: "0 15px 45px rgba(0, 0, 0, 0.05)",
              display: "grid",
              gridTemplateColumns: "1fr 1.25fr",
              gap: "28px",
              alignItems: "center"
            }}
            className="grid-2col"
          >

            {/* Left Column Checklist */}
            <div style={{ borderRight: "1px solid #F1F5F9", paddingRight: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "9.5px" }}>
                {checklist.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={15} color="#8B5CF6" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#334155" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Statement */}
            <div>
              <h4 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "18px", fontWeight: "800", color: "#0F172A", marginBottom: "8px" }}>
                How Can I Help You?
              </h4>
              <p style={{ fontSize: "12px", color: "#64748B", lineHeight: "1.6", marginBottom: "16px" }}>
                We are building Techlearns for a generation that wants to go beyond “I know it” to confidently say: <strong style={{ color: "#0F172A" }}>“I can build it. I can solve it. I can prove it.”</strong>
              </p>
              <Link
                href="/cel"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12.5px",
                  fontWeight: "800",
                  color: "#7C3AED",
                  textDecoration: "none"
                }}
              >
                <span>Read More</span>
                <ArrowRight size={14} color="#7C3AED" />
              </Link>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

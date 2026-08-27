"use client";

import React from "react";
import { Eye, Rocket, Network, Cpu, Building2, GraduationCap, Lightbulb, Users, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;

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

  const row1Domains = [
    {
      title: "TECHNOLOGY & AI",
      desc: "Technology leaders helping us stay aligned with emerging technologies, modern engineering practices and AI-driven transformation.",
      icon: <Cpu size={22} color="#FFFFFF" />,
      color: "#5B2E91"
    },
    {
      title: "INDUSTRY & CORPORATE LEADERSHIP",
      desc: "Professionals providing insights into changing workplace expectations, talent requirements and organisational practices.",
      icon: <Building2 size={22} color="#FFFFFF" />,
      color: "#5B2E91"
    },
    {
      title: "ACADEMIA & EDUCATION",
      desc: "Academic leaders contributing perspectives on learner development, curriculum innovation and industry-academia integration.",
      icon: <GraduationCap size={22} color="#FFFFFF" />,
      color: "#5B2E91"
    }
  ];

  const row2Domains = [
    {
      title: "ENTREPRENEURSHIP & INNOVATION",
      desc: "Founders and ecosystem leaders encouraging product thinking, innovation and entrepreneurial capability.",
      icon: <Lightbulb size={22} color="#FFFFFF" />,
      color: "#5B2E91"
    },
    {
      title: "TALENT & EMPLOYABILITY",
      desc: "HR, talent acquisition and workforce leaders helping align learner development with evolving hiring expectations.",
      icon: <Users size={22} color="#FFFFFF" />,
      color: "#5B2E91"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header: Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          style={{ textAlign: "center", marginBottom: "52px" }}
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
            <span style={{ color: "#5B2E91" }}>for Technology Learning</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "600px", margin: "0 auto", fontWeight: "400" }}>
            Our vision is to build Techlearns into a globally recognised Corporate Experience Learning ecosystem connecting education, emerging technologies and industry.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* SECTION 03: OUR VISION & MISSION (EXACT MATCH FOR NEW IMG1) */}
        {/* ============================================================ */}
        <div style={{ maxWidth: "1080px", margin: "0 auto 60px", position: "relative" }}>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              position: "relative"
            }}
            className="grid-2col"
          >
            {/* CARD 1: OUR VISION (MATCHING LEFT CARD IN IMG1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: smoothEase }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.12)" }}
              style={{
                background: "#FAFAFC",
                borderRadius: "24px",
                padding: "32px 24px",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.04)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "box-shadow 0.3s ease"
              }}
            >
              {/* Outer Cyan Accent Border & Top Arrow overlay matching img1 */}
              <svg
                viewBox="0 0 500 380"
                fill="none"
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  width: "calc(100% + 8px)",
                  height: "calc(100% + 8px)",
                  pointerEvents: "none"
                }}
              >
                {/* Top-Left Solid Rounded Accent Line (Cyan #06B6D4) - Animated on Scroll */}
                <motion.path
                  d="M 12 300 L 12 28 A 16 16 0 0 1 28 12 L 476 12"
                  stroke="#06B6D4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: smoothEase }}
                />
                {/* Top Right Arrow Head pointing right */}
                <motion.path
                  d="M 466 5 L 484 12 L 466 19"
                  stroke="#06B6D4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0, ease: smoothEase }}
                />
                {/* Dotted Bottom Line */}
                <path
                  d="M 28 372 L 476 372"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
              </svg>

              {/* Minimal Line Icon (Growth / Eye icon) */}
              <div style={{ marginBottom: "16px", marginTop: "10px" }}>
                <TrendingUp size={36} color="#0B1F3A" strokeWidth={1.8} />
              </div>

              {/* Single Indicator Dot (Matching img1 dot) */}
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#06B6D4", marginBottom: "20px" }} />

              {/* Eyebrow Label */}
              <div style={{ fontSize: "12px", fontWeight: "900", color: "#06B6D4", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                OUR VISION
              </div>

              {/* Card Title */}
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "22px", fontWeight: "800", color: "#0B1F3A", marginBottom: "12px" }}>
                Graduating with Real Capability
              </h3>

              {/* Manifesto Paragraph */}
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.65", marginBottom: "24px", maxWidth: "400px" }}>
                We envision a future where learners graduate not only with knowledge, but with skills, experience, portfolio, professional confidence, industry exposure, and adaptability.
              </p>

              {/* Graduate Outcome Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px", marginTop: "auto" }}>
                {graduateOutcomes.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "#ECFEFF",
                      border: "1px solid #CFFAFE",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      fontSize: "11.5px",
                      fontWeight: "700",
                      color: "#0891B2"
                    }}
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CARD 2: OUR MISSION (MATCHING RIGHT CARD IN IMG1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: smoothEase }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(126, 58, 242, 0.12)" }}
              style={{
                background: "#FAFAFC",
                borderRadius: "24px",
                padding: "32px 24px",
                boxShadow: "0 12px 35px rgba(0, 0, 0, 0.04)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "box-shadow 0.3s ease"
              }}
            >
              {/* Outer Purple Accent Border & Bottom Arrow overlay matching img1 */}
              <svg
                viewBox="0 0 500 380"
                fill="none"
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  width: "calc(100% + 8px)",
                  height: "calc(100% + 8px)",
                  pointerEvents: "none"
                }}
              >
                {/* Dotted Top Line */}
                <path
                  d="M 28 12 L 476 12"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
                {/* Bottom-Right Solid Rounded Accent Line (Purple #7E3AF2) - Animated on Scroll */}
                <motion.path
                  d="M 488 80 L 488 352 A 16 16 0 0 1 472 368 L 24 368"
                  stroke="#7E3AF2"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
                />
                {/* Bottom Left Arrow Head pointing left */}
                <motion.path
                  d="M 34 361 L 16 368 L 34 375"
                  stroke="#7E3AF2"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3, ease: smoothEase }}
                />
              </svg>

              {/* Minimal Line Icon (Rocket Icon) */}
              <div style={{ marginBottom: "16px", marginTop: "10px" }}>
                <Rocket size={36} color="#0B1F3A" strokeWidth={1.8} />
              </div>

              {/* Double Indicator Dots (Matching img1 2 dots) */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7E3AF2" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7E3AF2" }} />
              </div>

              {/* Eyebrow Label */}
              <div style={{ fontSize: "12px", fontWeight: "900", color: "#7E3AF2", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                OUR MISSION
              </div>

              {/* Card Title */}
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "22px", fontWeight: "800", color: "#0B1F3A", marginBottom: "12px" }}>
                Empowering Digital Economy Leaders
              </h3>

              {/* Manifesto Paragraph */}
              <p style={{ fontSize: "14.5px", fontWeight: "500", color: "#475569", lineHeight: "1.7", marginBottom: "24px", maxWidth: "420px" }}>
                &ldquo;To empower learners with technology capabilities, professional experiences and career confidence required to thrive in a continuously evolving digital economy.&rdquo;
              </p>

              {/* Bottom Callout Badge */}
              <div style={{ marginTop: "auto", fontSize: "12px", color: "#5B2E91", fontWeight: "800", background: "#F5F0FF", padding: "10px 18px", borderRadius: "9999px", border: "1px solid #E4D7FF" }}>
                ⚡ Building real career confidence from Day 1.
              </div>
            </motion.div>

          </div>

        </div>

        {/* Light Separation Line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #E2E8F0 15%, #E2E8F0 85%, transparent 100%)", margin: "40px 0 60px" }} />

        {/* Connected Ecosystem Matrix Box */}
        <div
          style={{
            position: "relative",
            padding: "40px 0 60px",
            marginBottom: "60px"
          }}
        >
          {/* Top Faint Background Typography Watermark (Matching img1 "Searchable") */}
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(54px, 8vw, 120px)",
              fontWeight: "900",
              color: "rgba(139, 92, 246, 0.07)",
              letterSpacing: "0.02em",
              userSelect: "none",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-headings), sans-serif",
              zIndex: 0
            }}
          >
            INTERCONNECTED
          </div>

          {/* Bottom Faint Background Typography Watermark (Matching img1 "Knowledge") */}
          <div
            style={{
              position: "absolute",
              bottom: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(54px, 8vw, 120px)",
              fontWeight: "900",
              color: "rgba(139, 92, 246, 0.07)",
              letterSpacing: "0.02em",
              userSelect: "none",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-headings), sans-serif",
              zIndex: 0
            }}
          >
            ECOSYSTEM
          </div>

          <div style={{ position: "relative", zIndex: 10 }}>

            {/* Top Collaborators Cutout PNG (Exact 3-People PNG extracted from img1) */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-12px",
                position: "relative",
                zIndex: 10
              }}
            >
              {/* Abstract Sketch Line Doodle Over Left Woman (Exact left positioning from img1) */}
              <svg width="75" height="40" viewBox="0 0 75 40" fill="none" style={{ position: "absolute", top: "10px", left: "14%", zIndex: 12 }}>
                <path d="M5 32C22 10 52 7 68 22" stroke="#5B2E91" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 34C27 16 47 14 60 26" stroke="#5B2E91" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
              </svg>

              {/* Sparkle Star 1: Left of Search Bar (Exact position from img1) */}
              <div style={{ position: "absolute", bottom: "10px", left: "18%", color: "#5B2E91", fontSize: "20px", zIndex: 12 }}>
                ✨
              </div>

              {/* Radial Hatch Marks Over Right Woman (Exact right positioning from img1) */}
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" style={{ position: "absolute", top: "20px", right: "13%", zIndex: 12 }}>
                <line x1="10" y1="35" x2="3" y2="43" stroke="#5B2E91" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="22" y1="32" x2="22" y2="43" stroke="#5B2E91" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="34" y1="35" x2="41" y2="43" stroke="#5B2E91" strokeWidth="2.2" strokeLinecap="round" />
              </svg>

              <img
                src="/crops/zsearch_people_cutout.png"
                alt="TechLearns Interconnected Fellows"
                style={{
                  height: "175px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))",
                  display: "block"
                }}
              />
            </div>

            {/* Center Capsule Pill Search Bar (Matching img1 center search bar) */}
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #5B2E91",
                borderRadius: "9999px",
                padding: "12px 28px",
                maxWidth: "760px",
                margin: "0 auto 36px",
                boxShadow: "0 16px 40px rgba(91, 46, 145, 0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                position: "relative",
                zIndex: 15
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%" }}>
                <span style={{ display: "flex", alignItems: "center", color: "#5B2E91" }}>
                  🔍
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#475569" }}>
                  Search across learners, mentors, universities, and corporate partners...
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#F5F0FF",
                  border: "1px solid #E4D7FF",
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: "11.5px",
                  fontWeight: "800",
                  color: "#5B2E91",
                  whiteSpace: "nowrap",
                  flexShrink: 0
                }}
              >
                <span>🔒 connected matrix</span>
              </div>
            </div>

            {/* Row of Angled Floating Paper Cards (Matching img1 4 paper notes) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "18px",
                maxWidth: "1000px",
                margin: "0 auto 32px",
                position: "relative"
              }}
              className="grid-4col"
            >
              {/* Sparkle Star 2: Between Card 1 and Card 2 (Exact position from img1) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ position: "absolute", top: "-18px", left: "24.5%", color: "#5B2E91", fontSize: "18px", zIndex: 12 }}
              >
                ✨
              </motion.div>

              {/* Card 1: Learners & Mentors */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.05, ease: smoothEase }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, boxShadow: "0 18px 40px rgba(91, 46, 145, 0.16)", borderColor: "#5B2E91" }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EDE9FE",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",
                  transform: "rotate(-2deg)",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease"
                }}
              >
                <div style={{ fontSize: "10px", fontWeight: "900", color: "#5B2E91", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                  LEARNERS &amp; MENTORS
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#0B1F3A", marginBottom: "6px" }}>
                  • Skill Passport
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", lineHeight: "1.4" }}>
                  1-on-1 Corporate Mentorship &amp; Real Code Reviews
                </div>
              </motion.div>

              {/* Card 2: Universities & Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, boxShadow: "0 18px 40px rgba(91, 46, 145, 0.16)", borderColor: "#5B2E91" }}
                style={{
                  background: "#FAF9FE",
                  border: "1px solid #E4D7FF",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",
                  transform: "rotate(1.5deg)",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease"
                }}
              >
                <div style={{ fontSize: "10px", fontWeight: "900", color: "#5B2E91", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                  UNIVERSITIES &amp; PLATFORMS
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#0B1F3A", marginBottom: "6px" }}>
                  • CEL Framework
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", lineHeight: "1.4" }}>
                  Curriculum Innovation &amp; Tech Ecosystem Integration
                </div>
              </motion.div>

              {/* Card 3: Experts & Companies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.25, ease: smoothEase }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, boxShadow: "0 18px 40px rgba(91, 46, 145, 0.16)", borderColor: "#5B2E91" }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EDE9FE",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",
                  transform: "rotate(-1.5deg)",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease"
                }}
              >
                <div style={{ fontSize: "10px", fontWeight: "900", color: "#5B2E91", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                  EXPERTS &amp; COMPANIES
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#0B1F3A", marginBottom: "6px" }}>
                  • Industry Sprints
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", lineHeight: "1.4" }}>
                  Production Workflows &amp; Verified Talent Hiring
                </div>
              </motion.div>

              {/* Card 4: Recruiters & Communities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.35, ease: smoothEase }}
                whileHover={{ scale: 1.05, y: -6, rotate: 0, boxShadow: "0 18px 40px rgba(91, 46, 145, 0.16)", borderColor: "#5B2E91" }}
                style={{
                  background: "#FAF9FE",
                  border: "1px solid #E4D7FF",
                  borderRadius: "16px",
                  padding: "20px 16px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.05)",
                  transform: "rotate(2.5deg)",
                  position: "relative",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease"
                }}
              >
                {/* Paperclip Graphic */}
                <span style={{ position: "absolute", top: "-10px", right: "14px", fontSize: "18px" }}>
                  📎
                </span>
                <div style={{ fontSize: "10px", fontWeight: "900", color: "#5B2E91", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                  RECRUITERS &amp; COMMUNITIES
                </div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#0B1F3A", marginBottom: "6px" }}>
                  • Talent Pipeline
                </div>
                <div style={{ fontSize: "11px", color: "#64748B", lineHeight: "1.4" }}>
                  Verifiable Proof &amp; Direct Career Readiness
                </div>
              </motion.div>
            </div>

            {/* Connecting Vertical Line (Matching img1 arrow pointer) */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <div style={{ width: "2px", height: "24px", background: "#5B2E91", opacity: 0.6 }} />
            </div>

            {/* Bottom Statement & Original Ecosystem Pills (Matching img1 bottom statement) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
            >
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "20px", fontWeight: "800", color: "#0B1F3A", marginBottom: "12px" }}>
                Our ambition is to create an interconnected ecosystem bringing together:
              </h3>

              {/* Original 8 Ecosystem Nodes with Staggered Motion Entrance & Hover Pop */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                {ecosystemNodes.map((node, i) => (
                  <React.Fragment key={node}>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.82, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05, ease: smoothEase }}
                      whileHover={{ scale: 1.08, y: -2, boxShadow: "0 6px 18px rgba(91, 46, 145, 0.18)", borderColor: "#5B2E91" }}
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #EDE9FE",
                        borderRadius: "9999px",
                        padding: "5px 16px",
                        fontSize: "12.5px",
                        fontWeight: "700",
                        color: "#0B1F3A",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                        display: "inline-block",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {node}
                    </motion.span>
                    {i < ecosystemNodes.length - 1 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 + 0.05 }}
                        style={{ color: "#5B2E91", fontWeight: "900" }}
                      >
                        ×
                      </motion.span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Concluding Bold Text with Animated Underline Doodle */}
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{ fontSize: "15px", fontWeight: "900", color: "#5B2E91" }}>
                  Together, creating stronger pathways from learning to professional impact.
                </div>
                <svg width="220" height="10" viewBox="0 0 220 10" fill="none" style={{ display: "block", margin: "4px auto 0" }}>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    d="M2 7C40 2.5 120 2 218 7"
                    stroke="#5B2E91"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Light Separation Line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #E2E8F0 15%, #E2E8F0 85%, transparent 100%)", margin: "60px 0" }} />

        {/* ============================================================ */}
        {/* 05. ADVISORY BOARD SECTION */}
        {/* ============================================================ */}
        <div>

          {/* Eyebrow & Header (Matching img top centered headline) */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ marginBottom: "12px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  padding: "5px 16px",
                  borderRadius: "9999px",
                  color: "#5B2E91",
                  fontSize: "11.5px",
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
                color: "#180C2E",
                letterSpacing: "-0.02em",
                marginBottom: "12px"
              }}
            >
              Guided by Experience. Shaped by Industry.
            </h2>
            <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "640px", margin: "0 auto", lineHeight: "1.65", fontWeight: "400" }}>
              Building future-ready talent requires perspectives beyond the classroom. The <strong style={{ color: "#180C2E", fontWeight: "700" }}>Techlearns Advisory Board</strong> brings together experienced professionals and leaders from complementary domains.
            </p>
          </div>

          {/* Row 1: 3 Advisory Cards (Matching img top 3 grid) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginBottom: "24px"
            }}
            className="grid-3col"
          >
            {row1Domains.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                  border: "1px solid #EAEAE8",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  {/* Square Solid Icon Box */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: card.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      boxShadow: "0 8px 20px rgba(139, 92, 246, 0.25)"
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "16px", fontWeight: "800", color: "#180C2E", marginBottom: "10px", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.65", fontWeight: "400" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Advisory Cards (Matching img bottom 2 grid) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              marginBottom: "32px"
            }}
            className="grid-2col"
          >
            {row2Domains.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                  border: "1px solid #EAEAE8",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  {/* Square Solid Icon Box */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: card.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      boxShadow: "0 8px 20px rgba(124, 58, 237, 0.25)"
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "16px", fontWeight: "800", color: "#180C2E", marginBottom: "10px", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.65", fontWeight: "400" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Advisory Closing Callout & Button */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #EAEAE8",
              borderRadius: "24px",
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)"
            }}
          >
            <div>
              <div style={{ fontSize: "13px", color: "#64748B", marginBottom: "4px" }}>
                Every advisor brings a different perspective. Together, they help ensure one thing:
              </div>
              <div style={{ fontSize: "16px", fontWeight: "900", color: "#180C2E" }}>
                “Techlearns remains connected to where the world of work is going—not where it has been.”
              </div>
            </div>

            <Link
              href="/mentors"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#5B2E91",
                color: "#FFFFFF",
                padding: "12px 26px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: "800",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(91, 46, 145, 0.25)"
              }}
            >
              <span>Meet Our Advisory Board</span>
              <ArrowRight size={15} color="#FFFFFF" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

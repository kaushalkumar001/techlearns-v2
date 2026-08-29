"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Target,
  Users,
  Zap,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Trophy,
  Cpu
} from "lucide-react";

export default function PartnersWorkingCulture() {
  const celModeHabits = [
    { title: "Show Up Professionally", desc: "Respect time, commitments, meetings and deliverables with corporate punctuality.", icon: Clock },
    { title: "Take Ownership", desc: "Understand that every assigned task has a responsible owner and a defined outcome.", icon: Target },
    { title: "Work in Teams", desc: "Collaborate, communicate, divide responsibilities and support collective goals.", icon: Users },
    { title: "Communicate Clearly", desc: "Explain ideas, report progress, ask meaningful questions and present solutions confidently.", icon: Zap, featured: true },
    { title: "Work With Deadlines", desc: "Learn how to plan, prioritise and deliver under realistic time constraints.", icon: ShieldCheck },
    { title: "Accept Reviews", desc: "Take feedback from mentors, peers and experts and continuously improve.", icon: CheckCircle2 },
    { title: "Document Work", desc: "Maintain repositories, reports, project documentation and development records.", icon: BookOpen },
    { title: "Present Results", desc: "Explain not only what you built, but also why you built it and what problem it solves.", icon: Trophy },
    { title: "Solve Unfamiliar Problems", desc: "Move beyond step-by-step instructions toward independent analytical thinking.", icon: Cpu }
  ];

  return (
    <section style={{ padding: "80px 0 60px", background: "#F8FAFC", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Section */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", fontWeight: "900", color: "#5B2E91", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
            WORKING CULTURE
          </div>
          <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Explore by category
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "760px", lineHeight: "1.65" }}>
            The moment you enter Techlearns, your role begins to change. Students are not treated as passive recipients of content — they progressively become <strong style={{ color: "#5B2E91" }}>Learners → Practitioners → Builders → Team Members → Problem Solvers → Performers → Professionals.</strong>
          </p>
        </div>

        {/* Exactly 9 Cards Layout matching img1 */}
        {/* Top Row: 5 Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "18px",
            marginBottom: "18px"
          }}
          className="grid-5col-img1"
        >
          {celModeHabits.slice(0, 5).map((habit, idx) => {
            const IconComponent = habit.icon;
            const isFeatured = habit.featured;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: isFeatured ? "0 20px 40px rgba(91, 46, 145, 0.3)" : "0 14px 30px rgba(0, 0, 0, 0.06)" }}
                style={{
                  background: isFeatured
                    ? "linear-gradient(135deg, #7E3AF2 0%, #5B2E91 100%)"
                    : "#FFFFFF",
                  color: isFeatured ? "#FFFFFF" : "#0B1F3A",
                  border: isFeatured ? "none" : "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "26px 20px",
                  boxShadow: isFeatured
                    ? "0 12px 30px rgba(91, 46, 145, 0.25)"
                    : "0 4px 20px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "210px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.25s ease"
                }}
              >
                {/* Featured card background diagonal dashes texture */}
                {isFeatured && (
                  <svg style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", opacity: 0.2, pointerEvents: "none" }}>
                    <pattern id="diagonalDashes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 4" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#diagonalDashes)" />
                  </svg>
                )}

                {/* Top Icon Pedestal */}
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: isFeatured ? "rgba(255, 255, 255, 0.2)" : "#F5F0FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={20} color={isFeatured ? "#FFFFFF" : "#5B2E91"} />
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 style={{ fontSize: "16.5px", fontWeight: "800", color: isFeatured ? "#FFFFFF" : "#0B1F3A", marginBottom: "8px", lineHeight: "1.3" }}>
                    {habit.title}
                  </h3>
                  <p style={{ fontSize: "12.5px", color: isFeatured ? "rgba(255,255,255,0.88)" : "#64748B", lineHeight: "1.5", margin: 0 }}>
                    {habit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Row: Left Decorative Fingerprint Pattern Cell + 4 Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "18px",
            marginBottom: "44px"
          }}
          className="grid-5col-img1"
        >
          {/* Left Cell: Concentric Fingerprint Pattern Illustration */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "210px",
              overflow: "hidden"
            }}
          >
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" style={{ opacity: 0.35 }}>
              {Array.from({ length: 14 }).map((_, i) => (
                <circle
                  key={i}
                  cx="-10"
                  cy="110"
                  r={20 + i * 11}
                  stroke="#5B2E91"
                  strokeWidth="1.6"
                  strokeDasharray="4 6"
                  strokeOpacity={0.85 - i * 0.05}
                />
              ))}
            </svg>
          </div>

          {/* 4 Cards on the Right */}
          {celModeHabits.slice(5, 9).map((habit, idx) => {
            const IconComponent = habit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx + 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: "0 14px 30px rgba(0, 0, 0, 0.06)" }}
                style={{
                  background: "#FFFFFF",
                  color: "#0B1F3A",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "26px 20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "210px",
                  transition: "all 0.25s ease"
                }}
              >
                {/* Top Icon Pedestal */}
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "#F5F0FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    flexShrink: 0
                  }}
                >
                  <IconComponent size={20} color="#5B2E91" />
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 style={{ fontSize: "16.5px", fontWeight: "800", color: "#0B1F3A", marginBottom: "8px", lineHeight: "1.3" }}>
                    {habit.title}
                  </h3>
                  <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.5", margin: 0 }}>
                    {habit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Quote Callout */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #F5F0FF 0%, #EDE9FE 100%)",
              border: "1.5px solid #D8B4FE",
              padding: "18px 36px",
              borderRadius: "9999px",
              boxShadow: "0 10px 30px rgba(91, 46, 145, 0.08)"
            }}
          >
            <span style={{ fontSize: "16.5px", fontWeight: "900", color: "#5B2E91" }}>
              CEL Mode is not a class. It is a professional behaviour system.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

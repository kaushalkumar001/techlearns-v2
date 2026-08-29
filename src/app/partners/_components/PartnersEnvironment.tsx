"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Workflow,
  CheckCircle2,
  Sparkles,
  Code2,
  Layers,
  ShieldCheck,
  Zap,
  Trophy,
  Briefcase,
  Target,
  TrendingUp,
  Rocket,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function PartnersEnvironment() {
  const [activeEnvTab, setActiveEnvTab] = useState("All Practices");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const envCategories = [
    "All Practices",
    "Workstations & Spaces",
    "Teams & Execution",
    "Reviews & Reporting",
    "Growth & Innovation"
  ];

  const environmentItems = [
    { text: "Corporate-style workstations and collaborative spaces", icon: Building2, category: "Workstations & Spaces" },
    { text: "Team-based learning and project environments", icon: Users, category: "Teams & Execution" },
    { text: "Daily and weekly deliverables", icon: Calendar, category: "Teams & Execution" },
    { text: "Professional reporting practices", icon: FileText, category: "Reviews & Reporting" },
    { text: "Stand-up discussions", icon: MessageSquare, category: "Reviews & Reporting" },
    { text: "Sprint-based execution", icon: Workflow, category: "Teams & Execution" },
    { text: "Task ownership", icon: CheckCircle2, category: "Teams & Execution" },
    { text: "Mentor and peer reviews", icon: Sparkles, category: "Reviews & Reporting" },
    { text: "GitHub-based collaboration", icon: Code2, category: "Workstations & Spaces" },
    { text: "Product demonstrations", icon: Layers, category: "Growth & Innovation" },
    { text: "Presentation rooms", icon: ShieldCheck, category: "Workstations & Spaces" },
    { text: "Innovation discussions", icon: Zap, category: "Growth & Innovation" },
    { text: "Hackathons and build challenges", icon: Trophy, category: "Growth & Innovation" },
    { text: "Corporate expert interactions", icon: Briefcase, category: "Growth & Innovation" },
    { text: "Professional communication practices", icon: Target, category: "Reviews & Reporting" },
    { text: "Performance dashboards and progress reviews", icon: TrendingUp, category: "Reviews & Reporting" },
    { text: "Career preparation activities", icon: Rocket, category: "Growth & Innovation" }
  ];

  const filteredItems = environmentItems.filter(
    item => activeEnvTab === "All Practices" || item.category === activeEnvTab
  );

  return (
    <section style={{ padding: "80px 0 70px", background: "#FAF8FE" }}>
      <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "6px 18px", borderRadius: "9999px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", marginBottom: "16px" }}>
            01. CORPORATE EXPERIENCE ENVIRONMENT
          </span>
          <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(28px, 4.2vw, 52px)", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "14px" }}>
            The Environment Changes the Learner.
          </h2>
          <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#64748B", maxWidth: "760px", margin: "0 auto", lineHeight: "1.7" }}>
            Imagine entering a learning space where the culture feels closer to a technology company than a conventional classroom. Students are surrounded by teams, projects, mentors, deadlines, and reviews.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px" }}>
          {envCategories.map((cat) => {
            const isActive = activeEnvTab === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveEnvTab(cat);
                  setShowAllMobile(false);
                }}
                className="partners-env-pill"
                style={{
                  background: isActive ? "#0B1F3A" : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "#475569",
                  border: isActive ? "1px solid #0B1F3A" : "1px solid #E2E8F0",
                  padding: "8px 22px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: isActive ? "0 6px 18px rgba(11, 31, 58, 0.15)" : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.2s ease"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 5-Column Grid Cards */}
        <div
          style={{
            display: "grid",
            gap: "18px",
            marginBottom: "32px"
          }}
          className="grid-5col-img1 partners-env-grid"
        >
          {filteredItems.map((item, idx) => {
            const IconComp = item.icon;
            const isHiddenOnMobile = !showAllMobile && idx >= 4;

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(91, 46, 145, 0.12)", borderColor: "#5B2E91" }}
                className={isHiddenOnMobile ? "partners-card-mobile-hidden" : ""}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "24px 18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  minHeight: "130px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.25s ease",
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "#F5F0FF",
                    color: "#5B2E91",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    flexShrink: 0
                  }}
                >
                  <IconComp size={20} color="#5B2E91" />
                </div>
                <span style={{ fontSize: "13.5px", fontWeight: "700", color: "#0B1F3A", lineHeight: "1.4" }}>
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* View All / View Less Button for Responsive Mobile Screens */}
        {filteredItems.length > 4 && (
          <div className="partners-view-all-mobile-wrap" style={{ justifyContent: "center", marginBottom: "40px" }}>
            <button
              onClick={() => setShowAllMobile(prev => !prev)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#FFFFFF",
                color: "#5B2E91",
                border: "1.5px solid #E4D7FF",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontSize: "13.5px",
                fontWeight: "800",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(91, 46, 145, 0.08)",
                transition: "all 0.2s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#F5F0FF";
                e.currentTarget.style.borderColor = "#5B2E91";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#E4D7FF";
              }}
            >
              <span>{showAllMobile ? "View Less Practices" : `View All Practices (${filteredItems.length})`}</span>
              {showAllMobile ? <ChevronUp size={16} color="#5B2E91" /> : <ChevronDown size={16} color="#5B2E91" />}
            </button>
          </div>
        )}

        {/* Core Objective Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="partners-env-banner"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E0A3C 50%, #3B1A6B 100%)",
            borderRadius: "24px",
            padding: "38px 44px",
            color: "#FFFFFF",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.22)",
            border: "1.5px solid rgba(216, 180, 254, 0.3)"
          }}
        >
          <span style={{ color: "#FDE68A", fontSize: "12px", fontWeight: "900", letterSpacing: "0.1em", textTransform: "uppercase" }}>THE OBJECTIVE IS SIMPLE</span>
          <h3 style={{ fontSize: "clamp(20px, 3.5vw, 26px)", fontWeight: "900", marginTop: "8px", marginBottom: "12px", color: "#FFFFFF" }}>
            Make Corporate Culture Familiar Before the First Job.
          </h3>
          <p style={{ fontSize: "clamp(13.5px, 1.3vw, 15px)", color: "#E2E8F0", maxWidth: "780px", margin: "0 auto", lineHeight: "1.65" }}>
            When students enter an organisation, words like <strong style={{ color: "#FDE68A" }}>deadline, sprint, review, repository, deployment, documentation, presentation, collaboration and ownership</strong> should not feel new — they should feel completely natural.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

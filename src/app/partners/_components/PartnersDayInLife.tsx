"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Hammer,
  MessageSquare,
  Zap,
  CheckCircle,
  Trophy,
  Presentation,
  Compass,
  ArrowDown,
  Clock,
  Flag,
  Award,
  Sparkles
} from "lucide-react";

export default function PartnersDayInLife() {
  const dailySchedule = [
    {
      num: "01",
      time: "09:30 AM",
      title: "TEAM HUDDLE",
      desc: "The day begins with priorities, goals and team responsibilities.",
      icon: Users,
      color: "#0D9488"
    },
    {
      num: "02",
      time: "10:00 AM",
      title: "TECH LEARNING",
      desc: "A new concept is introduced with practical industry relevance.",
      icon: BookOpen,
      color: "#E11D48"
    },
    {
      num: "03",
      time: "11:30 AM",
      title: "HANDS-ON BUILDING",
      desc: "Students implement the concept through practical development.",
      icon: Hammer,
      color: "#D97706"
    },
    {
      num: "04",
      time: "01:00 PM",
      title: "COLLABORATE",
      desc: "Team members discuss blockers, solutions and architectural approaches.",
      icon: MessageSquare,
      color: "#9333EA"
    },
    {
      num: "05",
      time: "02:00 PM",
      title: "PROJECT SPRINT",
      desc: "Learners work on applications, products or industry-oriented problems.",
      icon: Zap,
      color: "#059669"
    },
    {
      num: "06",
      time: "03:30 PM",
      title: "CODE / WORK REVIEW",
      desc: "Mentors or peers review work and suggest optimizations.",
      icon: CheckCircle,
      color: "#4F46E5"
    },
    {
      num: "07",
      time: "04:30 PM",
      title: "CHALLENGE",
      desc: "Students face a coding, design, problem-solving or innovation challenge.",
      icon: Trophy,
      color: "#BE185D"
    },
    {
      num: "08",
      time: "05:15 PM",
      title: "DEMO & PRESENT",
      desc: "Selected learners explain what they created and what they learned.",
      icon: Presentation,
      color: "#7C3AED"
    },
    {
      num: "09",
      time: "05:45 PM",
      title: "REFLECT & PLAN",
      desc: "Progress is documented and the next milestone is defined.",
      icon: Compass,
      color: "#2563EB"
    }
  ];

  const studentGrowthStages = [
    {
      step: "STEP 1",
      label: "MONTH 1",
      title: "“TELL ME WHAT TO DO.”",
      desc: "The student is learning fundamentals and needs clear direction.",
      color: "#0284C7",
      height: 90
    },
    {
      step: "STEP 2",
      label: "EARLY JOURNEY",
      title: "“I CAN DO THIS TASK.”",
      desc: "The student starts applying concepts independently.",
      color: "#0D9488",
      height: 125
    },
    {
      step: "STEP 3",
      label: "DEVELOPING",
      title: "“I CAN BUILD THIS.”",
      desc: "Projects start replacing simple classroom assignments.",
      color: "#10B981",
      height: 160
    },
    {
      step: "STEP 4",
      label: "ADVANCED",
      title: "“WE CAN BUILD THIS TOGETHER.”",
      desc: "The learner understands collaboration, sprints, and teamwork.",
      color: "#F59E0B",
      height: 195
    },
    {
      step: "STEP 5",
      label: "EXPERIENCE",
      title: "“I CAN SOLVE THIS PROBLEM.”",
      desc: "The student begins thinking beyond step-by-step instructions.",
      color: "#EA580C",
      height: 230
    },
    {
      step: "STEP 6",
      label: "PROFESSIONAL",
      title: "“I CAN OWN THIS.”",
      desc: "The learner manages responsibility, quality, and strict deadlines.",
      color: "#E11D48",
      height: 265
    },
    {
      step: "STEP 7",
      label: "CAREER-READY",
      title: "“LET ME SHOW YOU WHAT I CAN DO.”",
      desc: "Enters interviews with Projects, Evidence, Confidence & Experience.",
      color: "#7E3AF2",
      height: 300
    }
  ];

  return (
    <>
      {/* SECTION 05: A DAY IN THE LIFE */}
      <section style={{ padding: "90px 0", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>

        {/* Graph Grid Pattern Background Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(226, 232, 240, 0.85) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.85) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "32px 32px",
            backgroundPosition: "center center",
            pointerEvents: "none",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 35%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 35%, transparent 95%)",
            zIndex: 0
          }}
        />

        <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                05. A DAY IN THE LIFE
              </div>
              <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
            </div>

            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "14px" }}>
              A Glimpse Inside the CEL Environment
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: "1.7" }}>
              This is what learning actually feels like when built around real corporate execution.
            </p>
          </div>

          {/* VERTICAL TIMELINE INFOGRAPHIC */}
          <div
            style={{
              position: "relative",
              maxWidth: "960px",
              margin: "0 auto 70px",
              padding: "40px 0 20px"
            }}
            className="day-in-life-timeline"
          >
            {/* Central Vertical Line Axis */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "60px",
                width: "3px",
                background: "#CBD5E1",
                transform: "translateX(-50%)",
                zIndex: 1
              }}
              className="timeline-center-line"
            />

            {/* Alternating Left / Right Timeline Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "54px" }}>
              {dailySchedule.map((slot, idx) => {
                const isRight = idx % 2 === 0;
                const IconComp = slot.icon;

                return (
                  <div
                    key={idx}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isRight ? "flex-end" : "flex-start",
                      width: "100%",
                      zIndex: 10
                    }}
                    className={`timeline-row ${isRight ? "row-right" : "row-left"}`}
                  >

                    {/* Center Circle Concentric Node */}
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "#FFFFFF",
                        border: `4px solid ${slot.color}`,
                        boxShadow: `0 0 0 4px rgba(255, 255, 255, 0.8), 0 4px 12px ${slot.color}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 15
                      }}
                      className="timeline-node"
                    >
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: slot.color }} />
                    </div>

                    {/* Content Block */}
                    <motion.div
                      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      style={{
                        width: "44%",
                        textAlign: isRight ? "left" : "right",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isRight ? "flex-start" : "flex-end"
                      }}
                      className="timeline-content-card"
                    >

                      {/* Icon */}
                      <div style={{ marginBottom: "6px", color: slot.color }}>
                        <IconComp size={32} color={slot.color} strokeWidth={1.75} />
                      </div>

                      {/* Step Number + Clock Badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "8px",
                          flexDirection: isRight ? "row" : "row-reverse"
                        }}
                      >
                        <span
                          style={{
                            fontSize: "38px",
                            fontWeight: "900",
                            color: slot.color,
                            fontFamily: "var(--font-headings), sans-serif",
                            lineHeight: "1"
                          }}
                        >
                          {slot.num}
                        </span>

                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#FFFFFF",
                            border: `1px solid ${slot.color}40`,
                            padding: "3px 10px",
                            borderRadius: "9999px",
                            fontSize: "11.5px",
                            fontWeight: "800",
                            color: slot.color,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                          }}
                        >
                          <Clock size={12} color={slot.color} />
                          <span>{slot.time}</span>
                        </span>
                      </div>

                      {/* Title Box */}
                      <div
                        style={{
                          background: slot.color,
                          color: "#FFFFFF",
                          padding: "7px 18px",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: "900",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                          boxShadow: `0 4px 14px ${slot.color}35`
                        }}
                      >
                        {slot.title}
                      </div>

                      {/* Description Paragraph */}
                      <p
                        style={{
                          fontSize: "13.5px",
                          color: "#475569",
                          lineHeight: "1.55",
                          maxWidth: "360px",
                          margin: 0
                        }}
                      >
                        {slot.desc}
                      </p>

                    </motion.div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Arrow Endpoint */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "40px",
                zIndex: 10
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#2563EB",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: "0 6px 18px rgba(37, 99, 235, 0.3)"
                }}
              >
                <ArrowDown size={22} color="#FFFFFF" strokeWidth={2.5} />
              </div>

              <div
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "900",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  boxShadow: "0 6px 20px rgba(37, 99, 235, 0.25)"
                }}
              >
                THE DAILY PHILOSOPHY
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                  maxWidth: "700px"
                }}
              >
                {["Learn Something.", "Apply Something.", "Build Something.", "Share Something.", "Improve Something."].map((p, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#FFFFFF",
                      color: "#1E293B",
                      border: "1px solid #E2E8F0",
                      padding: "8px 18px",
                      borderRadius: "9999px",
                      fontSize: "13px",
                      fontWeight: "800",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 06: STUDENT TRANSFORMATION */}
      <section style={{ padding: "90px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0", overflow: "hidden" }}>
        <div className="staircase-container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 120px" }}>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
                06. STUDENT TRANSFORMATION
              </div>
              <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
            </div>

            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(26px, 3.8vw, 46px)", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "14px" }}>
              How CEL Changes a Student Over Time
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: "1.7", fontStyle: "italic" }}>
              Growth You Can Feel. Progress You Can See.
            </p>
          </div>

          {/* ASCENDING STAIRCASE STEP INFOGRAPHIC */}
          <div
            style={{
              width: "100%",
              maxWidth: "100%",
              overflowX: "auto",
              paddingBottom: "20px"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "16px",
                alignItems: "end",
                minHeight: "560px",
                width: "100%",
                minWidth: "1000px",
                position: "relative"
              }}
              className="staircase-grid"
            >
              {studentGrowthStages.map((stage, idx) => {
                const isFinalStage = idx === studentGrowthStages.length - 1;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                      position: "relative"
                    }}
                  >

                    {/* Top Content Block */}
                    <div
                      style={{
                        marginBottom: "16px",
                        position: "relative",
                        paddingLeft: "10px",
                        borderLeft: `2px dashed ${stage.color}`
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "900",
                          color: stage.color,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          marginBottom: "4px"
                        }}
                      >
                        {stage.step}
                      </div>

                      <div
                        style={{
                          width: "32px",
                          height: "3px",
                          background: stage.color,
                          borderRadius: "2px",
                          marginBottom: "8px"
                        }}
                      />

                      <h3
                        style={{
                          fontFamily: "var(--font-headings), sans-serif",
                          fontSize: "14px",
                          fontWeight: "900",
                          color: "#0B1F3A",
                          lineHeight: "1.25",
                          marginBottom: "6px"
                        }}
                      >
                        {stage.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748B",
                          lineHeight: "1.45",
                          margin: 0
                        }}
                      >
                        {stage.desc}
                      </p>
                    </div>

                    {/* Flag Marker */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginBottom: "-2px",
                        paddingRight: "10px",
                        zIndex: 10
                      }}
                    >
                      {isFinalStage ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            background: "#7E3AF2",
                            color: "#FFFFFF",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            fontSize: "11px",
                            fontWeight: "900",
                            boxShadow: "0 4px 12px rgba(126, 58, 242, 0.4)"
                          }}
                        >
                          <Trophy size={14} color="#FDE68A" />
                          <span>VICTORIOUS!</span>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <Flag size={18} color={stage.color} fill={stage.color} />
                          <div style={{ width: "2px", height: "14px", background: stage.color }} />
                        </div>
                      )}
                    </div>

                    {/* Ascending Staircase Solid Pillar Block */}
                    <motion.div
                      whileHover={{ scaleY: 1.03 }}
                      style={{
                        height: `${stage.height}px`,
                        background: `linear-gradient(180deg, ${stage.color} 0%, ${stage.color}DD 100%)`,
                        borderRadius: "12px 12px 0 0",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        padding: "16px 8px",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                        transformOrigin: "bottom",
                        transition: "all 0.25s ease"
                      }}
                    >
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontSize: "12.5px",
                          fontWeight: "900",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          textAlign: "center",
                          lineHeight: "1.2"
                        }}
                      >
                        {stage.label}
                      </span>
                    </motion.div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

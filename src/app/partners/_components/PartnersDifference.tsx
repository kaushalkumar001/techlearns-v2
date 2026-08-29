"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";

export default function PartnersDifference() {
  const transformationShifts = [
    { from: "Classroom", to: "Workplace Mindset" },
    { from: "Course Completion", to: "Capability Development" },
    { from: "Assignments", to: "Products & Projects" },
    { from: "Individual Learning", to: "Team Collaboration" },
    { from: "Trainer Dependency", to: "Problem Ownership" },
    { from: "Marks", to: "Performance" },
    { from: "Certificate", to: "Proof of Skills" },
    { from: "Placement Preparation", to: "Continuous Career Readiness" },
    { from: "Learning Technology", to: "Experiencing Technology Professionally" }
  ];

  return (
    <>
      {/* SECTION 07: THE TECHLEARNS DIFFERENCE */}
      <section style={{ padding: "90px 0", background: "#FFFFFF", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

          {/* 2-Column Split Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "360px 1fr",
              gap: "56px",
              alignItems: "stretch",
              marginBottom: "60px"
            }}
            className="difference-grid-container"
          >
            {/* Left Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingRight: "16px"
              }}
            >
              <div>
                <div style={{ display: "inline-flex", flexDirection: "column", marginBottom: "16px" }}>
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
                    Why Techlearns?
                  </div>
                  <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-headings), sans-serif",
                    fontSize: "clamp(30px, 4.2vw, 56px)",
                    fontWeight: "900",
                    color: "#1E140F",
                    lineHeight: "1.08",
                    letterSpacing: "-0.02em",
                    marginBottom: "20px"
                  }}
                >
                  The Techlearns<br />
                  Difference
                </h2>

                <p style={{ fontSize: "clamp(14px, 1.4vw, 15px)", color: "#524B46", lineHeight: "1.7", marginBottom: "28px" }}>
                  Because we are not trying to become another training academy. We solve the <strong style={{ color: "#5B2E91" }}>Experience Gap between Education and Employment.</strong>
                </p>
              </div>

              {/* Left CTAs */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", paddingTop: "12px" }}>
                <a
                  href="#cel-promise"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "#991B1B",
                    textDecoration: "none"
                  }}
                >
                  <span>The CEL™ Promise</span>
                  <ArrowRight size={16} color="#991B1B" />
                </a>

                <a
                  href="#shifts"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: "800",
                    color: "#991B1B",
                    textDecoration: "none"
                  }}
                >
                  <span>9 Transformation Shifts</span>
                  <ArrowRight size={16} color="#991B1B" />
                </a>
              </div>

            </div>

            {/* Right Column */}
            <div
              style={{
                borderLeft: "1px solid #E5E7EB",
                paddingLeft: "48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 40px"
              }}
              className="difference-subgrid"
            >
              {/* Column 1 of Subgrid */}
              <div style={{ display: "flex", flexDirection: "column" }}>

                {/* Feature Item 1 */}
                <div
                  style={{
                    paddingBottom: "32px",
                    marginBottom: "32px",
                    borderBottom: "1px solid #E5E7EB"
                  }}
                >
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#FEF3C7",
                        color: "#D97706",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Zap size={22} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "900", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        TRADITIONAL ACADEMY MODEL
                      </div>
                      <h3 style={{ fontSize: "17px", fontWeight: "900", color: "#1E140F", marginBottom: "6px" }}>
                        Content & Certificate
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#524B46", lineHeight: "1.55", margin: 0 }}>
                        Trainer &rarr; Content &rarr; Assignment &rarr; Certificate. Focused strictly on static video watching and rote submissions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div style={{ paddingBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#FEF3C7",
                        color: "#D97706",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <ShieldCheck size={22} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "900", color: "#5B2E91", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        PROBLEM OWNERSHIP
                      </div>
                      <h3 style={{ fontSize: "17px", fontWeight: "900", color: "#1E140F", marginBottom: "6px" }}>
                        Workplace Mindset
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#524B46", lineHeight: "1.55", margin: 0 }}>
                        Move from classroom passive listening to active problem ownership, agile sprints, and corporate execution.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Column 2 of Subgrid */}
              <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #F1F5F9", paddingLeft: "32px" }}>

                {/* Feature Item 3 */}
                <div
                  style={{
                    paddingBottom: "32px",
                    marginBottom: "32px",
                    borderBottom: "1px solid #E5E7EB"
                  }}
                >
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#F5F0FF",
                        color: "#5B2E91",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <CheckCircle2 size={22} color="#5B2E91" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "900", color: "#5B2E91", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        TECHLEARNS CEL™ MODEL
                      </div>
                      <h3 style={{ fontSize: "17px", fontWeight: "900", color: "#1E140F", marginBottom: "6px" }}>
                        Corporate Experience
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#524B46", lineHeight: "1.55", margin: 0 }}>
                        Mentor &rarr; Practice &rarr; Teamwork &rarr; Projects &rarr; Reviews &rarr; Proof. Designed to feel like your very first tech workplace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Item 4 */}
                <div style={{ paddingBottom: "12px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#FEF3C7",
                        color: "#D97706",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Award size={22} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "900", color: "#5B2E91", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        VERIFIED CAPABILITY
                      </div>
                      <h3 style={{ fontSize: "17px", fontWeight: "900", color: "#1E140F", marginBottom: "6px" }}>
                        Proof of Skills
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#524B46", lineHeight: "1.55", margin: 0 }}>
                        Graduates leave with visible GitHub proof, CEL Skill Passport™, live product demos, and recruiter evidence.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* 9 CORE TRANSFORMATION SHIFTS */}
          <div id="shifts" style={{ marginTop: "48px", paddingTop: "44px", borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
            
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
                  CORE TRANSFORMATION
                </div>
                <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
              </div>

              <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(26px, 3.8vw, 44px)", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "12px" }}>
                9 Core Transformation Shifts
              </h2>
              <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#64748B", maxWidth: "700px", margin: "0 auto", fontStyle: "italic" }}>
                From Traditional Academy Classroom to Verified Corporate Capability.
              </p>
            </div>

            {/* DUAL SEMI-CIRCLE GRAPHIC & CALLOUTS CONTAINER */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "40px",
                alignItems: "center",
                maxWidth: "1200px",
                margin: "0 auto"
              }}
              className="shifts-graphic-container"
            >
              {/* Left Column: GREEN CALLOUTS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "right" }}>
                <div style={{ fontSize: "12px", fontWeight: "900", color: "#059669", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                  TECHLEARNS CEL™ MODEL (WHAT YOU GET)
                </div>
                {transformationShifts.map((shift, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#F0FDF4",
                      border: "1px solid #BBF7D0",
                      color: "#166534",
                      padding: "10px 18px",
                      borderRadius: "12px",
                      fontSize: "13.5px",
                      fontWeight: "800",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "10px",
                      boxShadow: "0 2px 8px rgba(16, 185, 129, 0.05)"
                    }}
                  >
                    <span>{shift.to}</span>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#10B981", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "900", flexShrink: 0 }}>✓</span>
                  </div>
                ))}
              </div>

              {/* Center Column: Dual Semi-Circle Graphic */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "24px",
                  position: "relative"
                }}
                className="center-dual-arcs"
              >
                <div
                  style={{
                    position: "relative",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: "conic-gradient(#10B981 0deg 180deg, transparent 180deg 360deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(16, 185, 129, 0.15)"
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "6px solid #D1FAE5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(16, 185, 129, 0.25)"
                    }}
                  >
                    <span style={{ fontSize: "42px", fontWeight: "900", color: "#10B981", lineHeight: 1 }}>✓</span>
                  </div>
                </div>

                <div
                  style={{
                    position: "relative",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: "conic-gradient(transparent 0deg 180deg, #EF4444 180deg 360deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(239, 68, 68, 0.15)"
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "6px solid #FEE2E2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 18px rgba(239, 68, 68, 0.25)"
                    }}
                  >
                    <span style={{ fontSize: "38px", fontWeight: "900", color: "#EF4444", lineHeight: 1 }}>✕</span>
                  </div>
                </div>
              </div>

              {/* Right Column: RED CALLOUTS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
                <div style={{ fontSize: "12px", fontWeight: "900", color: "#DC2626", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                  TRADITIONAL ACADEMY (WHAT WE ELIMINATE)
                </div>
                {transformationShifts.map((shift, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#FEF2F2",
                      border: "1px solid #FECACA",
                      color: "#991B1B",
                      padding: "10px 18px",
                      borderRadius: "12px",
                      fontSize: "13.5px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "10px"
                    }}
                  >
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#EF4444", color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "900", flexShrink: 0 }}>✕</span>
                    <span style={{ textDecoration: "line-through", opacity: 0.85 }}>{shift.from}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* THE CEL PROMISE SECTION */}
      <section id="cel-promise" style={{ padding: "64px 0", background: "#FFFFFF", borderTop: "1px solid rgba(0, 0, 0, 0.08)", overflow: "hidden" }}>
        <div style={{ maxWidth: "1040px", width: "100%", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "16px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#5B2E91" }} />
            <span style={{ fontSize: "12px", fontWeight: "900", color: "#5B2E91", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              THE CEL PROMISE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-headings), sans-serif",
              fontSize: "clamp(28px, 4.4vw, 54px)",
              fontWeight: "900",
              color: "#0B1F3A",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              marginBottom: "18px"
            }}
          >
            Experience Before <span style={{ fontFamily: "serif", fontStyle: "italic", fontWeight: "400", color: "#5B2E91" }}>Employment™️</span>
          </h2>

          <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#475569", lineHeight: "1.75", maxWidth: "780px", margin: "0 auto 32px" }}>
            Before a Techlearns learner enters their first organisation, they should already understand what it means to <strong style={{ color: "#5B2E91", fontWeight: "700" }}>Learn, Build, Collaborate, Communicate, Deliver, Review, Improve, Compete, Present, and Take Ownership.</strong>
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
            {["Learn the Technology.", "Live the Environment.", "Build the Experience.", "Prove Your Capability.", "Enter Corporate Life Ready."].map((p, i) => (
              <div key={i} style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", padding: "10px 22px", borderRadius: "9999px", fontSize: "13.5px", fontWeight: "800", color: "#5B2E91", boxShadow: "0 2px 8px rgba(91, 46, 145, 0.05)" }}>
                ✓ {p}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/contact"
              className="partners-promise-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                color: "#FFFFFF",
                padding: "16px 42px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: "900",
                letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(91, 46, 145, 0.35)",
                transition: "all 0.25s ease"
              }}
            >
              <span>EXPLORE THE CEL EXPERIENCE</span>
              <ArrowRight size={16} color="#FFFFFF" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

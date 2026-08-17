"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll linked animation hook
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Dynamic Parallax Transformations
  const phoneY = useTransform(smoothProgress, [0, 1], [50, -35]);
  const phoneRotate = useTransform(smoothProgress, [0, 0.5, 1], [-2, 0, 2]);
  const phoneScale = useTransform(smoothProgress, [0, 0.3, 0.8, 1], [0.93, 1, 1, 0.96]);

  const ringsScale = useTransform(smoothProgress, [0, 1], [0.85, 1.15]);
  const ringsRotate = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const ringsOpacity = useTransform(smoothProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.4]);

  const floatBadgeY = useTransform(smoothProgress, [0, 1], [70, -50]);
  const floatBadgeRotate = useTransform(smoothProgress, [0, 1], [4, -4]);

  return (
    <section ref={sectionRef} style={{ padding: "64px 0 0", background: "#F6F7F9", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Main Banner Card with Scroll Entrance & Soft Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "linear-gradient(135deg, #AFA0D2 0%, #A290C6 45%, #947EBC 100%)",
            borderRadius: "36px",
            padding: "54px 56px",
            color: "#180C2E",
            boxShadow: "0 24px 64px -14px rgba(91, 46, 145, 0.25)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Concentric Circular Rings with Scroll-Linked Parallax & Rotation */}
          <motion.div
            style={{
              position: "absolute",
              right: "220px",
              top: "50%",
              x: "50%",
              y: "-50%",
              scale: ringsScale,
              rotate: ringsRotate,
              opacity: ringsOpacity,
              pointerEvents: "none",
              zIndex: 0
            }}
          >
            <div
              style={{
                width: "740px",
                height: "740px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.04)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
            <div
              style={{
                width: "560px",
                height: "560px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.07)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
            <div
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.10)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
            <div
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.13)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          </motion.div>

          {/* Inner Grid */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "40px",
              alignItems: "center"
            }}
            className="cta-grid-responsive"
          >
            {/* Left Column: Staggered Scroll Entrance Typography & Actions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 }
                }
              }}
              style={{ maxWidth: "560px" }}
            >
              {/* Eyebrow Pill Tag */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.32)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.45)",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#180C2E",
                  textTransform: "uppercase",
                  marginBottom: "20px"
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 14, -10, 14, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  🚀
                </motion.span>{" "}
                ELEVATE YOUR TECH CAREER
              </motion.div>

              {/* Main Headline with Serif Italic Typography */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                style={{
                  fontFamily: "var(--font-headings), sans-serif",
                  fontSize: "44px",
                  fontWeight: "600",
                  color: "#160B2B",
                  lineHeight: "1.16",
                  letterSpacing: "-0.025em",
                  marginBottom: "18px"
                }}
              >
                Techlearns,{" "}
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: "500",
                    letterSpacing: "-0.01em"
                  }}
                >
                  your partner
                </span>
                <br />
                in tech transformation.
              </motion.h2>

              {/* Subtitle / Original Content */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                style={{
                  fontSize: "15px",
                  color: "#2C1B46",
                  lineHeight: "1.65",
                  marginBottom: "32px",
                  fontWeight: "450"
                }}
              >
                Join thousands of successful graduates who transitioned into high-growth software engineering, Data Science, and AI roles with 1-on-1 mentorship, live projects, and lifetime placement support.
              </motion.p>

              {/* Primary Action Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "28px"
                }}
              >
                {/* Primary Button */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="#courses"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#180C2E",
                      color: "#FFFFFF",
                      padding: "14px 28px",
                      borderRadius: "14px",
                      fontSize: "14px",
                      fontWeight: "700",
                      textDecoration: "none",
                      boxShadow: "0 8px 22px rgba(24, 12, 46, 0.3)",
                      transition: "background 0.2s ease"
                    }}
                  >
                    <span>Apply for Next Cohort</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>

                {/* Secondary Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "rgba(255, 255, 255, 0.4)",
                      color: "#180C2E",
                      border: "1.5px solid rgba(24, 12, 46, 0.25)",
                      padding: "14px 26px",
                      borderRadius: "14px",
                      fontSize: "14px",
                      fontWeight: "700",
                      textDecoration: "none",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span>Schedule Free 1-on-1 Counseling</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Guarantees */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5 } }
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "10px 16px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(24, 12, 46, 0.12)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#221138", fontWeight: "600" }}>
                  <span style={{ color: "#180C2E", fontWeight: "800" }}>✓</span> 100% Placement Assistance
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#221138", fontWeight: "600" }}>
                  <span style={{ color: "#180C2E", fontWeight: "800" }}>✓</span> 1-on-1 Industry Mentorship
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#221138", fontWeight: "600" }}>
                  <span style={{ color: "#180C2E", fontWeight: "800" }}>✓</span> Verified Skill Passport
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#221138", fontWeight: "600" }}>
                  <span style={{ color: "#180C2E", fontWeight: "800" }}>✓</span> Zero-Cost EMI Available
                </div>
              </motion.div>

            </motion.div>

            {/* Right Column: Smartphone Mockup with Scroll-Linked Parallax, Floating Badge & Micro-Interactions */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>

              {/* Floating Achievement Milestone Pill (Scroll-Linked Parallax) */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "14%",
                  left: "-115px",
                  zIndex: 25,
                  y: floatBadgeY,
                  rotate: floatBadgeRotate
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    borderRadius: "14px",
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 12px 30px -6px rgba(24, 12, 46, 0.2)"
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#10B981",
                      boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.25)"
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#0F172A", lineHeight: "1.1" }}>
                      Skill Passport Verified
                    </span>
                    <span style={{ fontSize: "9px", color: "#5B2E91", fontWeight: "700" }}>
                      Score: 980/1000 • Tier 1 Fellow
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Phone Device Mockup Container with Parallax */}
              <motion.div
                style={{
                  y: phoneY,
                  rotateZ: phoneRotate,
                  scale: phoneScale,
                  width: "315px",
                  height: "560px",
                  background: "#0F0C16",
                  borderRadius: "46px",
                  padding: "9px",
                  boxShadow: "0 28px 65px -12px rgba(22, 10, 44, 0.45), 0 0 0 2px rgba(255, 255, 255, 0.15), inset 0 0 4px 1px rgba(255, 255, 255, 0.12)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column"
                }}
                whileHover={{ scale: 1.025, transition: { duration: 0.3 } }}
              >
                {/* Screen Canvas */}
                <div
                  style={{
                    flex: 1,
                    background: "#FAFAFC",
                    borderRadius: "38px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    border: "1px solid rgba(0, 0, 0, 0.05)"
                  }}
                >
                  {/* Status Bar */}
                  <div
                    style={{
                      padding: "10px 18px 2px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#0F172A",
                      zIndex: 10
                    }}
                  >
                    <span>9:41</span>

                    {/* Dynamic Island Pill */}
                    <div
                      style={{
                        width: "82px",
                        height: "20px",
                        background: "#000000",
                        borderRadius: "20px",
                        position: "absolute",
                        left: "50%",
                        top: "8px",
                        transform: "translateX(-50%)"
                      }}
                    />

                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      {/* Signal */}
                      <svg width="12" height="10" viewBox="0 0 16 12" fill="#0F172A">
                        <rect x="0" y="9" width="2.5" height="3" rx="0.5" />
                        <rect x="4" y="6" width="2.5" height="6" rx="0.5" />
                        <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
                        <rect x="12" y="0" width="2.5" height="12" rx="0.5" />
                      </svg>
                      {/* WiFi */}
                      <svg width="12" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                      </svg>
                      {/* Battery */}
                      <div
                        style={{
                          width: "18px",
                          height: "9px",
                          border: "1.5px solid #0F172A",
                          borderRadius: "3px",
                          padding: "1px",
                          display: "flex"
                        }}
                      >
                        <div style={{ width: "80%", height: "100%", background: "#0F172A", borderRadius: "1px" }} />
                      </div>
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div style={{ padding: "8px 16px 6px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>

                    {/* Header: TechLearns Fellow Greeting */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "600", letterSpacing: "0.02em" }}>
                          TECHLEARNS FELLOW
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#0F172A", letterSpacing: "-0.02em" }}>
                          Kaushal kumar
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #5B2E91 0%, #7A42BE 100%)",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: "800",
                          boxShadow: "0 4px 10px rgba(91, 46, 145, 0.3)"
                        }}
                      >
                        KK
                      </motion.div>
                    </div>

                    {/* Filter Chips (TechLearns Tracks) */}
                    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "600",
                          color: "#64748B",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          background: "#F1F5F9"
                        }}
                      >
                        GenAI
                      </span>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        style={{
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "#FFFFFF",
                          padding: "4px 11px",
                          borderRadius: "9999px",
                          background: "#180C2E",
                          cursor: "pointer"
                        }}
                      >
                        Full-Stack AI
                      </motion.span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "600",
                          color: "#64748B",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          background: "#F1F5F9"
                        }}
                      >
                        DevOps
                      </span>
                    </div>

                    {/* Section: Live Corporate Sprints */}
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "800", color: "#0F172A", marginBottom: "6px" }}>
                        Corporate Sprints
                      </div>

                      {/* Main Featured Sprint Card with Hover Sheen */}
                      <motion.div
                        whileHover={{ y: -2, boxShadow: "0 12px 26px rgba(24, 11, 46, 0.35)" }}
                        style={{
                          background: "linear-gradient(135deg, #241142 0%, #17092F 100%)",
                          borderRadius: "16px",
                          padding: "12px 14px",
                          color: "#FFFFFF",
                          position: "relative",
                          overflow: "hidden",
                          boxShadow: "0 8px 20px rgba(24, 11, 46, 0.25)",
                          cursor: "pointer"
                        }}
                      >
                        {/* Background Radial Glow */}
                        <div
                          style={{
                            position: "absolute",
                            right: "-10px",
                            bottom: "-10px",
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(122, 66, 190, 0.45) 0%, transparent 70%)"
                          }}
                        />

                        <div style={{ fontSize: "13px", fontWeight: "800", lineHeight: "1.3", marginBottom: "14px", maxWidth: "165px" }}>
                          Generative AI & Agentic RAG Sprint
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          {/* Badges */}
                          <div style={{ display: "flex", gap: "5px" }}>
                            <span
                              style={{
                                background: "#E5F77D",
                                color: "#161E08",
                                fontSize: "9px",
                                fontWeight: "700",
                                padding: "3px 7px",
                                borderRadius: "9999px"
                              }}
                            >
                              Sprint 04
                            </span>
                            <span
                              style={{
                                background: "#E5F77D",
                                color: "#161E08",
                                fontSize: "9px",
                                fontWeight: "700",
                                padding: "3px 7px",
                                borderRadius: "9999px",
                                display: "flex",
                                alignItems: "center",
                                gap: "2px"
                              }}
                            >
                              ⚡ 980 XP
                            </span>
                          </div>

                          {/* Floating Circular Action Button */}
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              background: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                            }}
                          >
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="#180C2E">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </motion.div>
                        </div>

                      </motion.div>
                    </div>

                    {/* Section: Today's Deliverables */}
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "800", color: "#0F172A", marginBottom: "5px" }}>
                        Today&apos;s Deliverables
                      </div>

                      <motion.div
                        whileHover={{ background: "#E2E8F0" }}
                        style={{
                          background: "#F1F5F9",
                          borderRadius: "12px",
                          padding: "8px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "background 0.2s ease",
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div
                            style={{
                              width: "22px",
                              height: "22px",
                              borderRadius: "6px",
                              background: "#5B2E91",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#FFFFFF",
                              fontSize: "10px"
                            }}
                          >
                            ⚡
                          </div>
                          <div>
                            <div style={{ fontSize: "11px", fontWeight: "700", color: "#0F172A", lineHeight: "1.2" }}>PR Review: Vector Pipeline</div>
                            <div style={{ fontSize: "9px", color: "#64748B" }}>6:00 PM • Google SDE Mentor</div>
                          </div>
                        </div>
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          style={{ fontSize: "11px", fontWeight: "800", color: "#5B2E91" }}
                        >
                          ✓
                        </motion.span>
                      </motion.div>
                    </div>

                  </div>

                  {/* App Bottom Navigation Bar (TechLearns Ecosystem) */}
                  <div
                    style={{
                      background: "#180C2E",
                      padding: "6px 14px",
                      margin: "0 10px 8px",
                      borderRadius: "18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    {/* Active SkillOS Home Pill */}
                    <div
                      style={{
                        background: "#E5F77D",
                        color: "#180C2E",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "9px",
                        fontWeight: "800"
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      SkillOS
                    </div>

                    {/* Sprints Navigation Icon */}
                    <div style={{ color: "rgba(255,255,255,0.6)", padding: "4px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    </div>

                    {/* Skill Passport Navigation Icon */}
                    <div style={{ color: "rgba(255,255,255,0.6)", padding: "4px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>

                    {/* Profile Navigation Icon */}
                    <div style={{ color: "rgba(255,255,255,0.6)", padding: "4px" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

      <style jsx global>{`
        @media (max-width: 991px) {
          .cta-grid-responsive {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .cta-grid-responsive > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { programsData } from "../data/programs";

const smoothEasing = [0.16, 1, 0.3, 1] as const;

// SVG Icons
const CalendarIcon = ({ color = "#6D28D9", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const GraduationCapIcon = ({ color = "#6D28D9", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const RupeeIcon = ({ color = "#6D28D9", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 8h12M6 13h6a4 4 0 0 0 0-8H6M13 13L6 21" />
  </svg>
);

const UserIcon = ({ color = "#6D28D9", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CheckIcon = ({ color = "#FFFFFF", bg = "#6D28D9", size = 18 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

const DownloadIcon = ({ color = "currentColor", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Left Notched Card Vector Background SVG (matching img1 shape exactly)
const LeftNotchedCardBg = () => (
  <svg
    viewBox="0 0 500 580"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.04))",
      zIndex: 0
    }}
  >
    <path
      d="
        M 32 0
        H 300
        a 24 24 0 0 1 24 24
        V 56
        a 24 24 0 0 0 24 24
        H 468
        a 32 32 0 0 1 32 32
        V 548
        a 32 32 0 0 1 -32 32
        H 32
        a 32 32 0 0 1 -32 -32
        V 32
        a 32 32 0 0 1 32 -32
        Z
      "
      fill="#FFFFFF"
      stroke="#F1F5F9"
      strokeWidth="1.5"
    />
    <path
      d="M 32 580 H 468"
      stroke="#8A4EC9"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

// Right Notched Card Vector Background SVG (matching img2 shape exactly)
const RightNotchedCardBg = () => (
  <svg
    viewBox="0 0 500 580"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.04))",
      zIndex: 0
    }}
  >
    <path
      d="
        M 32 104
        a 32 32 0 0 1 32 -32
        H 152
        a 24 24 0 0 0 24 -24
        V 24
        a 24 24 0 0 1 24 -24
        H 468
        a 32 32 0 0 1 32 32
        V 548
        a 32 32 0 0 1 -32 32
        H 32
        a 32 32 0 0 1 -32 -32
        V 104
        Z
      "
      fill="#FFFFFF"
      stroke="#F1F5F9"
      strokeWidth="1.5"
    />
    <path
      d="M 32 580 H 468"
      stroke="#5B2E91"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export default function OfferingsSection() {
  const infographicData = [
    {
      challengeTitle: "Low Visibility",
      challengeSub: "Lack of practical production code exposure in college classes",
      solutionTitle: "Brand Reach & Visibility",
      solutionText: "Build real production apps & custom portfolios to increase student brand reach & career visibility."
    },
    {
      challengeTitle: "Slow Progression",
      challengeSub: "Outdated campus curriculum behind fast-evolving AI & tech stacks",
      solutionTitle: "AI Tech Tracks & Curriculum",
      solutionText: "Run industry-aligned tech tracks with modern AI tools & retarget traditional campus courses."
    },
    {
      challengeTitle: "High Churn",
      challengeSub: "Students struggling to clear technical rounds & coding tests",
      solutionTitle: "Corporate Mentorship & Projects",
      solutionText: "Introduce real-world live projects, hackathons & personalized 1-on-1 corporate mentorship."
    },
    {
      challengeTitle: "Poor Engagement",
      challengeSub: "Limited practice in live coding, system design & mock interviews",
      solutionTitle: "AI Mock Interviews & Support",
      solutionText: "Post interactive coding content, AI-driven mock interviews & offer instant query support."
    },
    {
      challengeTitle: "Tech Glitches",
      challengeSub: "No direct guidance from active senior engineering leads",
      solutionTitle: "Software Evaluation & Tracking",
      solutionText: "Regularly update learning software, evaluate student code & monitor system performance."
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "AI & GenAI",
    "Software Eng",
    "Cloud & DevOps",
    "Cybersecurity",
    "Data & Analytics"
  ];

  const filteredPrograms = activeCategory === "All"
    ? programsData
    : programsData.filter((p) => {
      if (activeCategory === "AI & GenAI") return p.category.includes("AI");
      if (activeCategory === "Software Eng") return p.category.includes("Software");
      if (activeCategory === "Cloud & DevOps") return p.category.includes("Cloud");
      if (activeCategory === "Cybersecurity") return p.category.includes("Security");
      if (activeCategory === "Data & Analytics") return p.category.includes("Data");
      return true;
    });

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="courses" style={{ padding: "48px 0", background: "#F8FAFC" }}>
      <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

        {/* Top Header matching input_file_2.png (img3) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: smoothEasing }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "28px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
            CHALLENGES &amp; SOLUTIONS <span style={{ color: "#5B2E91" }}>INFOGRAPHIC TEMPLATE</span>
          </h2>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto" }} />
        </motion.div>

        {/* Infographic Graphic Box matching input_file_0.png exactly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: smoothEasing }}
          style={{
            position: "relative",
            maxWidth: "1140px",
            margin: "0 auto 90px",
            paddingTop: "32px"
          }}
        >
          {/* Top Center Organic Dumbbell / Lock-Key Connector Bridge Seated Exactly in the Notch Cuts */}
          <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 35,
              display: "flex",
              alignItems: "center"
            }}
          >
            {/* Light Purple Lock Circle (72px with Vibrant 3D Ambient Glow) */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #A78BFA 0%, #8A4EC9 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "30px",
                boxShadow: "0 14px 35px rgba(138, 78, 201, 0.45), 0 0 25px rgba(138, 78, 201, 0.25)",
                position: "relative",
                zIndex: 2,
                border: "none"
              }}
            >
              🔒
            </div>

            {/* Smooth Dumbbell Fluid Bridge */}
            <svg width="86" height="36" viewBox="0 0 86 36" fill="none" style={{ margin: "0 -12px", position: "relative", zIndex: 1 }}>
              <path
                d="M 0 0 C 28 16, 58 16, 86 0 L 86 36 C 58 20, 28 20, 0 36 Z"
                fill="url(#dumbbellGradLarge)"
              />
              <defs>
                <linearGradient id="dumbbellGradLarge" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A4EC9" />
                  <stop offset="50%" stopColor="#7A42BE" />
                  <stop offset="100%" stopColor="#5B2E91" />
                </linearGradient>
              </defs>
            </svg>

            {/* Royal Purple Key Circle (72px with Vibrant 3D Ambient Glow) */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "30px",
                boxShadow: "0 14px 35px rgba(91, 46, 145, 0.55), 0 0 25px rgba(91, 46, 145, 0.35)",
                position: "relative",
                zIndex: 2,
                border: "none"
              }}
            >
              🔑
            </div>
          </div>

          {/* 2 Main Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              alignItems: "stretch"
            }}
          >
            {/* Left Card: CHALLENGES (with Top Right Notch Cut) */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "28px 28px 28px 28px",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.05)",
                padding: "36px 32px 36px 44px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: "1.5px solid #F1F5F9",
                borderBottom: "6px solid #8A4EC9"
              }}
            >
              {/* Top-Right L-Notch Background Cutout Box */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "44px",
                  background: "#F8FAFC",
                  borderRadius: "0 0 0 20px",
                  borderLeft: "1.5px solid #F1F5F9",
                  borderBottom: "1.5px solid #F1F5F9",
                  zIndex: 1
                }}
              />

              {/* Floating Light-Purple Vertical Pill Bar */}
              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  bottom: "32px",
                  left: "-12px",
                  width: "24px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #C084FC 0%, #8A4EC9 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 0",
                  boxShadow: "0 4px 14px rgba(138, 78, 201, 0.3)",
                  zIndex: 10
                }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.12)"
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#8A4EC9" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Card Header Title */}
              <div style={{ marginBottom: "36px", paddingLeft: "12px", position: "relative", zIndex: 3 }}>
                <h3 style={{ fontSize: "28px", fontWeight: "900", color: "#8A4EC9", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  CHALLENGES
                </h3>
              </div>

              {/* 5 Rows Matching Left Side of input_file_0.png */}
              <div style={{ display: "flex", flexDirection: "column", gap: "32px", flexGrow: 1, paddingLeft: "12px", position: "relative", zIndex: 3 }}>
                {infographicData.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", minHeight: "52px" }}>
                    <div>
                      <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#1E293B", marginBottom: "2px" }}>
                        {item.challengeTitle}
                      </h4>
                      <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.4" }}>
                        {item.challengeSub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: SOLUTIONS (with Top Left Notch Cut) */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "28px 28px 28px 28px",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.05)",
                padding: "36px 44px 36px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: "1.5px solid #F1F5F9",
                borderBottom: "6px solid #5B2E91"
              }}
            >
              {/* Top-Left L-Notch Background Cutout Box */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "120px",
                  height: "44px",
                  background: "#F8FAFC",
                  borderRadius: "0 0 20px 0",
                  borderRight: "1.5px solid #F1F5F9",
                  borderBottom: "1.5px solid #F1F5F9",
                  zIndex: 1
                }}
              />

              {/* Floating Royal-Purple Vertical Pill Bar */}
              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  bottom: "32px",
                  right: "-12px",
                  width: "24px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #7A42BE 0%, #5B2E91 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 0",
                  boxShadow: "0 4px 14px rgba(91, 46, 145, 0.3)",
                  zIndex: 10
                }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.12)"
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#5B2E91" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Card Header Title */}
              <div style={{ marginBottom: "36px", paddingRight: "12px", textAlign: "right", position: "relative", zIndex: 3 }}>
                <h3 style={{ fontSize: "28px", fontWeight: "900", color: "#5B2E91", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  SOLUTIONS
                </h3>
              </div>

              {/* 5 Rows Matching Right Side of input_file_0.png */}
              <div style={{ display: "flex", flexDirection: "column", gap: "32px", flexGrow: 1, paddingRight: "12px", position: "relative", zIndex: 3 }}>
                {infographicData.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "16px", minHeight: "52px", textAlign: "right" }}>
                    <div>
                      <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#1E293B", marginBottom: "2px" }}>
                        {item.solutionTitle}
                      </h4>
                      <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.4" }}>
                        {item.solutionText}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Programs / Featured Courses Section matching CodeChef screenshot exactly */}
        <section
          id="programs"
          style={{
            position: "relative",
            background: "#F8FAFC",
            backgroundImage: `
              linear-gradient(to right, rgba(203, 213, 225, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(203, 213, 225, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            padding: "70px 0 80px",
            marginTop: "64px",
            borderRadius: "24px",
            overflow: "hidden"
          }}
        >
          <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

            {/* Header: Ribbons + Title + Subtitles matching website brand theme */}
            <div style={{ textAlign: "center", marginBottom: "44px" }}>

              {/* Ribbon Flag Flanked Title */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>

                <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "36px", fontWeight: "800", color: "#0F172A", letterSpacing: "-0.02em", margin: 0 }}>
                  Featured Courses
                </h2>

                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>

              {/* Subtitle Line 1 */}
              <div style={{ fontSize: "15px", fontWeight: "700", color: "#8B5CF6", marginBottom: "6px" }}>
                Courses That Actually Help You Land Internships and Jobs
              </div>

              {/* Subtitle Line 2 */}
              <div style={{ fontSize: "13.5px", fontWeight: "500", color: "#64748B" }}>
                From Python basics to 5-star CP prep – built for students, tested by recruiter
              </div>
            </div>

            {/* Main Carousel Stage with Edge Fade Mask & Nav Controls */}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto" }}>

              {/* Left Side Fade Mask Overlay */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to right, #F8FAFC 0%, rgba(248,250,252,0) 100%)", zIndex: 20, pointerEvents: "none" }} />
              
              {/* Right Side Fade Mask Overlay */}
              <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to left, #F8FAFC 0%, rgba(248,250,252,0) 100%)", zIndex: 20, pointerEvents: "none" }} />

              {/* Left Circular Arrow Nav Button */}
              <button
                onClick={() => handleScroll('left')}
                style={{
                  position: "absolute",
                  left: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 30,
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#3B0764",
                  border: "none",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(139, 92, 246, 0.35)",
                  transition: "all 0.2s ease"
                }}
                aria-label="Previous Courses"
              >
                <ChevronLeft style={{ width: "22px", height: "22px", strokeWidth: 2.5 }} />
              </button>

              {/* Right Circular Arrow Nav Button */}
              <button
                onClick={() => handleScroll('right')}
                style={{
                  position: "absolute",
                  right: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 30,
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#3B0764",
                  border: "none",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(139, 92, 246, 0.35)",
                  transition: "all 0.2s ease"
                }}
                aria-label="Next Courses"
              >
                <ChevronRight style={{ width: "22px", height: "22px", strokeWidth: 2.5 }} />
              </button>

              {/* Horizontal Scroll Track */}
              <div
                ref={scrollContainerRef}
                style={{
                  display: "flex",
                  gap: "24px",
                  overflowX: "auto",
                  padding: "16px 24px 24px",
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                }}
              >
                {[
                  {
                    id: "sql-data-analysis",
                    bannerLines: ["SQL FOR DATA", "ANALYSIS"],
                    bannerGradient: "linear-gradient(145deg, #047857 0%, #10B981 60%, #065F46 100%)",
                    bannerPattern: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    iconType: "database",
                    rating: "4.6 (150k+)",
                    title: "SQL Roadmap for Data Analysis",
                    description: "Learn SQL to analyse and manipulate large data with our real-world case studies-based practical...",
                    coursesCount: "6 courses",
                    learnersCount: "107k+ learners",
                    imgUrl: "/images/course_man_brown.png"
                  },
                  {
                    id: "js-problem-solving",
                    bannerLines: ["JAVASCRIPT WITH", "PROBLEM SOLVING"],
                    bannerGradient: "linear-gradient(145deg, #1E40AF 0%, #3B82F6 60%, #1D4ED8 100%)",
                    bannerPattern: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    iconType: "js",
                    rating: "4.6 (184k+)",
                    title: "JavaScript with Beginner DSA",
                    description: "Learn the fundamentals of JavaScript programming. Solve 500+ handpicked data...",
                    coursesCount: "7 courses",
                    learnersCount: "173k+ learners",
                    imgUrl: "/images/course_man_tech_guy.png"
                  },
                  {
                    id: "java-backend",
                    bannerLines: ["JAVA BACKEND", "DEVELOPMENT"],
                    bannerGradient: "linear-gradient(145deg, #881337 0%, #E11D48 60%, #4C0519 100%)",
                    bannerPattern: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    iconType: "java",
                    rating: "4.5 (270k+)",
                    title: "Java Backend Developer",
                    description: "Master Java for development with a focus on fundamentals, frameworks, databases and API...",
                    coursesCount: "7 courses",
                    learnersCount: "238k+ learners",
                    imgUrl: "/images/course_woman_purple.png"
                  },
                  {
                    id: "python-data-science",
                    bannerLines: ["PYTHON FOR", "DATA SCIENCE"],
                    bannerGradient: "linear-gradient(145deg, #B45309 0%, #F59E0B 60%, #78350F 100%)",
                    bannerPattern: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    iconType: "python",
                    rating: "4.7 (195k+)",
                    title: "Python for Data Science & ML",
                    description: "Master Python programming, Pandas, NumPy & Machine Learning algorithms for real-world projects...",
                    coursesCount: "8 courses",
                    learnersCount: "142k+ learners",
                    imgUrl: "/images/course_woman_glasses.png"
                  },
                  {
                    id: "fullstack-mern",
                    bannerLines: ["FULL STACK", "DEVELOPMENT"],
                    bannerGradient: "linear-gradient(145deg, #5B21B6 0%, #8B5CF6 60%, #4C1D95 100%)",
                    bannerPattern: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    iconType: "code",
                    rating: "4.8 (310k+)",
                    title: "Full Stack MERN Developer",
                    description: "Build scalable web apps with React, Node.js, Express, MongoDB and Next.js from scratch...",
                    coursesCount: "9 courses",
                    learnersCount: "280k+ learners",
                    imgUrl: "/images/course_man_tech_guy.png"
                  },
                  {
                    id: "cloud-devops",
                    bannerLines: ["CLOUD & DEVOPS", "ENGINEERING"],
                    bannerGradient: "linear-gradient(145deg, #0F766E 0%, #0D9488 60%, #115E59 100%)",
                    bannerPattern: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    iconType: "cloud",
                    rating: "4.6 (120k+)",
                    title: "AWS Cloud & DevOps Architect",
                    description: "Master AWS Cloud, Docker containers, Kubernetes orchestration, and automated CI/CD pipelines...",
                    coursesCount: "6 courses",
                    learnersCount: "115k+ learners",
                    imgUrl: "/images/course_man_cloud_eng.png"
                  }
                ].map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ y: -6 }}
                    style={{
                      minWidth: "360px",
                      maxWidth: "368px",
                      flexShrink: 0,
                      background: "#FFFFFF",
                      borderRadius: "16px",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease"
                    }}
                  >
                    {/* Top Banner Section with Vibrant Gradient & Cutout Image (200px Height) */}
                    <div
                      style={{
                        height: "200px",
                        background: course.bannerGradient,
                        position: "relative",
                        overflow: "hidden",
                        padding: "16px"
                      }}
                    >
                      {/* Overlay Pattern */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: course.bannerPattern,
                          backgroundSize: "20px 20px",
                          pointerEvents: "none"
                        }}
                      />

                      {/* Top Left Circle Badge with High-Visibility Official Tech Logos */}
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.22)",
                          position: "relative",
                          zIndex: 3
                        }}
                      >
                        {course.iconType === "database" && (
                          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                            <ellipse cx="16" cy="7" rx="12" ry="4" fill="#0284C7" />
                            <ellipse cx="16" cy="7" rx="9" ry="2.2" fill="#38BDF8" />
                            <path d="M4 7v6c0 2.2 5.4 4 12 4s12-1.8 12-4V7" fill="#0284C7" />
                            <ellipse cx="16" cy="13" rx="12" ry="4" fill="#38BDF8" opacity="0.35" />
                            <path d="M4 13v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6" fill="#0369A1" />
                            <rect x="6" y="21" width="20" height="9" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
                            <text x="16" y="28" fontSize="7.5" fontWeight="900" fill="#38BDF8" textAnchor="middle" fontFamily="sans-serif">SQL</text>
                          </svg>
                        )}
                        {course.iconType === "js" && (
                          <div style={{ width: "26px", height: "26px", background: "#F7DF1E", borderRadius: "5px", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "0 2px 1px 0", boxSizing: "border-box", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}>
                            <span style={{ color: "#000000", fontWeight: "900", fontSize: "13px", fontFamily: "sans-serif", lineHeight: 1 }}>JS</span>
                          </div>
                        )}
                        {course.iconType === "java" && (
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                            <path d="M11.5 24.5c4.5 0.5 8.5-0.5 11 0 0 0 1-1.5-1-2-3-0.5-7 0.5-10 2z" fill="#E76F00" />
                            <path d="M10 21.5c4.5 0.5 8.5-0.5 11 0 0 0 1-1.5-1-2-3-0.5-7 0.5-10 2z" fill="#5382A1" />
                            <path d="M14.5 16c2 1.5 4.5 1.5 6 0 0 0 1-1-1-1.5-2-0.5-4 0.5-5 1.5z" fill="#E76F00" />
                            <path d="M16 11c1 1 2.5 1 3.5 0 0 0 0.5-0.5-0.5-1-1-0.5-2.5 0-3 1z" fill="#5382A1" />
                            <path d="M10 28c5 1 12 1 15-2 0 0-1-0.5-3 0.5-3 1-8.5 1-12 1.5z" fill="#E76F00" />
                          </svg>
                        )}
                        {course.iconType === "python" && (
                          <svg width="24" height="24" viewBox="0 0 110 110">
                            <path d="M51.8 0C24.3 0 26.2 11.9 26.2 11.9l.1 12.3h26.3v3.7H15.8S0 26.1 0 53.7c0 27.6 13.8 26.6 13.8 26.6h8.3v-11.7s-.5-13.8 13.8-13.8h26.4V28.5s.5-13.8-13.8-13.8h-16.7s-1-14.7 20-14.7zm-11.7 8.3c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z" fill="#3776AB"/>
                            <path d="M57.6 109.4c27.6 0 25.6-11.9 25.6-11.9l-.1-12.3H56.8v-3.7h36.8s15.8 1.8 15.8-25.8c0-27.6-13.8-26.6-13.8-26.6h-8.3v11.7s.5 13.8-13.8 13.8H47.1v26.3s-.5 13.8 13.8 13.8h16.7s1 14.7-20 14.7zm11.7-8.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z" fill="#FFD43B"/>
                          </svg>
                        )}
                        {course.iconType === "code" && (
                          <svg width="24" height="24" viewBox="0 0 841.9 595.3" fill="none">
                            <g stroke="#00D8FF" strokeWidth="32">
                              <ellipse cx="420.9" cy="297.6" rx="140" ry="340" transform="rotate(30 420.9 297.6)"/>
                              <ellipse cx="420.9" cy="297.6" rx="140" ry="340" transform="rotate(90 420.9 297.6)"/>
                              <ellipse cx="420.9" cy="297.6" rx="140" ry="340" transform="rotate(150 420.9 297.6)"/>
                            </g>
                            <circle cx="420.9" cy="297.6" r="48" fill="#00D8FF"/>
                          </svg>
                        )}
                        {course.iconType === "cloud" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#FF9900"/>
                            <path d="M7 14l3-3 2 2 4-4" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>

                      {/* Banner Text Title on Left (Stylized Chunky Slab Font matching CodeChef) */}
                      <div
                        style={{
                          position: "absolute",
                          left: "16px",
                          bottom: "16px",
                          width: "56%",
                          zIndex: 3
                        }}
                      >
                        {course.bannerLines.map((line, lIdx) => (
                          <h4
                            key={lIdx}
                            style={{
                              fontFamily: 'Rockwell, Georgia, var(--font-montserrat), sans-serif',
                              fontSize: "15px",
                              fontWeight: "900",
                              color: "#FFFFFF",
                              lineHeight: "1.2",
                              letterSpacing: "0.01em",
                              textTransform: "uppercase",
                              margin: 0,
                              textShadow: "0 2px 6px rgba(0,0,0,0.35)"
                            }}
                          >
                            {line}
                          </h4>
                        ))}
                      </div>

                      {/* Radial Backlight Glow Behind Cutout for Eye-Catchy Contrast */}
                      <div
                        style={{
                          position: "absolute",
                          right: "-10px",
                          top: "0",
                          bottom: "0",
                          width: "55%",
                          background: "radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.28) 0%, transparent 68%)",
                          pointerEvents: "none",
                          zIndex: 1
                        }}
                      />

                      {/* Student Image Cutout Holding Laptop on Right Side (100% Transparent Background) */}
                      <img
                        src={course.imgUrl}
                        alt={course.bannerLines.join(" ")}
                        style={{
                          position: "absolute",
                          right: "-6px",
                          bottom: "-2px",
                          height: "98%",
                          objectFit: "contain",
                          zIndex: 2,
                          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.38))",
                          mixBlendMode: "normal"
                        }}
                      />
                    </div>

                    {/* Card Body Section matching screenshot details */}
                    <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                      <div>
                        {/* Rating Pill */}
                        <div style={{ marginBottom: "12px" }}>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "4px 10px",
                              borderRadius: "16px",
                              background: "#F3E8FF",
                              color: "#7C3AED",
                              fontSize: "12px",
                              fontWeight: "700",
                              border: "1px solid #E9D5FF"
                            }}
                          >
                            <span>★</span>
                            <span>{course.rating}</span>
                          </span>
                        </div>

                        {/* Course Title */}
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: "800",
                            color: "#1E293B",
                            lineHeight: "1.3",
                            marginBottom: "8px"
                          }}
                        >
                          {course.title}
                        </h3>

                        {/* Course Description */}
                        <p
                          style={{
                            fontSize: "12.5px",
                            color: "#64748B",
                            lineHeight: "1.5",
                            marginBottom: "18px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {course.description}
                        </p>

                        {/* Meta Stats Row (Courses & Learners) */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "18px",
                            marginBottom: "20px",
                            fontSize: "13px",
                            color: "#475569",
                            fontWeight: "500"
                          }}
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <GraduationCapIcon size={16} color="#8B5CF6" />
                            <span>{course.coursesCount}</span>
                          </span>

                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <UserIcon size={16} color="#8B5CF6" />
                            <span>{course.learnersCount}</span>
                          </span>
                        </div>
                      </div>

                      {/* Enrol Now Full Width Button matching TechLearns Purple Website Brand Theme */}
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.025, boxShadow: "0 8px 24px rgba(139, 92, 246, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "12px",
                          borderRadius: "10px",
                          background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                          color: "#FFFFFF",
                          fontSize: "14.5px",
                          fontWeight: "700",
                          textAlign: "center",
                          textDecoration: "none",
                          boxShadow: "0 6px 18px rgba(139, 92, 246, 0.3)",
                          boxSizing: "border-box"
                        }}
                      >
                        Enrol now
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Bottom Subtext Note matching image */}
            <p
              style={{
                textAlign: "center",
                maxWidth: "760px",
                margin: "44px auto 0",
                fontSize: "13.5px",
                color: "#64748B",
                lineHeight: "1.65",
                fontWeight: "500"
              }}
            >
              Each course gives you a clear snapshot – Watch a quick preview, read a short description, see ratings, and check how many students are enrolled. Click “Enrol Now” to jump in, or browse all available courses
            </p>

          </div>
        </section>

      </div>
    </section>
  );
}


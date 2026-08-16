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

        {/* Programs Section */}
        <section id="programs" style={{ padding: "80px 0", background: "rgba(248, 250, 252, 0.6)", position: "relative", marginTop: "64px", borderRadius: "24px" }}>

          <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

            {/* Header & Navigation Arrow Controls */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ textAlign: "left", maxWidth: "672px" }}>

                {/* Eyebrow Tag */}
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                  SELECT YOUR CAREER TRACK
                </div>
                <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", marginBottom: "16px" }}></div>

                {/* Main Headline */}
                <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", lineHeight: "1.15", textTransform: "uppercase", margin: 0 }}>
                  WHERE TO START <span style={{ color: "#5B2E91" }}>YOUR TECH JOURNEY?</span>
                </h2>

                <p style={{ fontSize: "14px", fontWeight: "600", color: "#64748B", marginTop: "12px", margin: "12px 0 0" }}>
                  Choose from our industry-aligned corporate experience tracks designed by senior architects &amp; engineering leads.
                </p>
              </div>

              {/* Carousel Navigation Arrow Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                <button
                  onClick={() => handleScroll('left')}
                  className="carousel-arrow-btn"
                  aria-label="Scroll left"
                >
                  <ChevronLeft style={{ width: "20px", height: "20px", strokeWidth: 2.5 }} />
                </button>

                <button
                  onClick={() => handleScroll('right')}
                  className="carousel-arrow-btn"
                  aria-label="Scroll right"
                >
                  <ChevronRight style={{ width: "20px", height: "20px", strokeWidth: 2.5 }} />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: activeCategory === cat ? "none" : "1px solid #E2E8F0",
                    background: activeCategory === cat ? "#8B5CF6" : "#FFFFFF",
                    color: activeCategory === cat ? "#FFFFFF" : "#334155",
                    boxShadow: activeCategory === cat ? "0 4px 14px rgba(139, 92, 246, 0.25)" : "none"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Smooth Horizontal Carousel Track with Arrow Navigation */}
            <div
              ref={scrollContainerRef}
              style={{
                display: "flex",
                gap: "24px",
                overflowX: "auto",
                paddingBottom: "24px",
                paddingTop: "8px",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              {filteredPrograms.map((program) => {
                const tagList = program.tags || program.highlights || [];
                const roleTitle = program.certification || program.role || 'Certified Professional';

                return (
                  <motion.div
                    key={program.id}
                    whileHover={{ y: -6 }}
                    style={{
                      minWidth: "320px",
                      maxWidth: "340px",
                      flexShrink: 0,
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                      padding: "24px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div>
                      {/* Card Top Pill Badge & Duration */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "16px" }}>
                        <span style={{ padding: "4px 12px", borderRadius: "9999px", background: "#F3E8FF", border: "1px solid #E9D5FF", fontSize: "10px", fontWeight: "800", color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {program.badge || program.category}
                        </span>

                        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: "700", color: "#64748B" }}>
                          <Clock style={{ width: "14px", height: "14px", color: "#8B5CF6" }} />
                          <span>{program.duration}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#0F1D38", lineHeight: "1.3", marginBottom: "12px" }}>
                        {program.title}
                      </h3>

                      <p style={{ fontSize: "12px", color: "#64748B", fontWeight: "500", lineHeight: "1.6", marginBottom: "16px" }}>
                        {program.description}
                      </p>

                      {/* Program Highlights/Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "12px", borderTop: "1px solid #F1F5F9", marginBottom: "24px" }}>
                        {tagList.slice(0, 4).map((t, i) => (
                          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#F8FAFC", color: "#334155", fontWeight: "600", border: "1px solid #E2E8F0" }}>
                            <CheckCircle2 style={{ width: "12px", height: "12px", color: "#8B5CF6", flexShrink: 0 }} />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Area */}
                    <div style={{ paddingTop: "16px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                      <div style={{ overflow: "hidden" }}>
                        <span style={{ fontSize: "9px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                          CERTIFICATION
                        </span>
                        <span style={{ fontSize: "11px", fontWeight: "800", color: "#0F1D38", display: "block", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                          {roleTitle}
                        </span>
                      </div>

                      <Link
                        href="/contact"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "#8B5CF6",
                          color: "#FFFFFF",
                          fontSize: "12px",
                          fontWeight: "700",
                          textDecoration: "none",
                          boxShadow: "0 4px 12px rgba(139, 92, 246, 0.25)",
                          flexShrink: 0
                        }}
                      >
                        <span>Explore</span>
                        <ArrowRight style={{ width: "14px", height: "14px" }} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}


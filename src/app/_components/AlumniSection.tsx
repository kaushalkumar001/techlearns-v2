"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface AlumniItem {
  name: string;
  role: string;
  company: string;
  ctc: string;
  quote: string;
  photo: string;
  companyColor: string;
  before: string;
  after: string;
}

const alumniData: AlumniItem[] = [
  {
    name: "Mansi Sharma",
    role: "AI Data Scientist",
    company: "Amazon",
    ctc: "18 LPA",
    quote: "TechLearns transformed my theoretical knowledge into real production ML models. The 1-on-1 mentorship made all the difference!",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    companyColor: "#FF9900",
    before: "B.Tech Student",
    after: "AI Engineer"
  },
  {
    name: "Aman Kumar",
    role: "SDE-2",
    company: "Flipkart",
    ctc: "16 LPA",
    quote: "The hands-on projects helped me transition seamlessly from college to a high-scale backend role at Flipkart.",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    companyColor: "#2874F0",
    before: "Fresher",
    after: "Backend Dev"
  },
  {
    name: "Priya Nair",
    role: "Cloud Architect",
    company: "Salesforce",
    ctc: "14 LPA",
    quote: "Learning cloud infrastructure with live deployments gave me the confidence to ace technical interviews effortlessly.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    companyColor: "#00A1E0",
    before: "Intern",
    after: "Cloud Engineer"
  },
  {
    name: "Shubham Verma",
    role: "Full Stack Developer",
    company: "Microsoft",
    ctc: "10 LPA",
    quote: "Building real-world production projects & AI-powered mock interviews boosted my coding confidence tremendously.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    companyColor: "#00A4EF",
    before: "Student",
    after: "Full Stack Dev"
  },
  {
    name: "Yash Gupta",
    role: "Cybersecurity Analyst",
    company: "PwC",
    ctc: "12 LPA",
    quote: "The practical labs and threat modeling scenarios provided industry-grade skills that recruiters instantly valued.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    companyColor: "#D04A02",
    before: "Support Tech",
    after: "Security Analyst"
  },
  {
    name: "Rohan Mehta",
    role: "DevOps Engineer",
    company: "Adobe",
    ctc: "15 LPA",
    quote: "Automating CI/CD pipelines during the program prepared me directly for high-concurrency enterprise workflows.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80",
    companyColor: "#FF0000",
    before: "Junior Dev",
    after: "DevOps Lead"
  },
  {
    name: "Ananya Sen",
    role: "Security Engineer",
    company: "KPMG",
    ctc: "13 LPA",
    quote: "The curriculum aligned 100% with enterprise security standards, opening doors to top MNC offers.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    companyColor: "#00338D",
    before: "IT Analyst",
    after: "Security Lead"
  }
];

// Custom 8-pointed Asterisk Star SVG Icon in Techlearns Purple
const AsteriskStar = ({ size = 20, fill = "#FFFFFF" }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L13.7 8.3L20.5 3.5L17.2 10.8L24 12L17.2 13.2L20.5 20.5L13.7 15.7L12 24L10.3 15.7L3.5 20.5L6.8 13.2L0 12L6.8 10.8L3.5 3.5L10.3 8.3L12 0Z" />
  </svg>
);

// Header Accent Swirl Underline (Exact Proportional Sizing: 320px x 40px)
const HeaderAccent = () => (
  <div style={{ position: "absolute", bottom: "-16px", right: "0", pointerEvents: "none", zIndex: 1, overflow: "visible" }}>
    <svg
      width="340"
      height="45"
      viewBox="0 0 340 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible", display: "block" }}
    >
      <path
        d="M 10 20 C 100 42, 220 44, 330 12"
        stroke="#5B2E91"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 40 32 C 130 50, 240 50, 310 24"
        stroke="#5B2E91"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
    </svg>
  </div>
);

// 3 Curved SVG Dotted Lines with Arrowheads pointing to Card 1, Card 2, and Card 3
const DirectionalArrows = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "75px",
      marginTop: "-12px",
      marginBottom: "8px",
      pointerEvents: "none",
      userSelect: "none",
      overflow: "visible"
    }}
    className="directional-arrows-wrapper"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <marker
          id="arrowhead-purple"
          viewBox="0 0 12 12"
          refX="1"
          refY="6"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <path d="M 0 1 L 11 6 L 0 11 Z" fill="#7C3AED" />
        </marker>
      </defs>

      {/* 1. Left Arrow (Points to Card 1 center x=165) */}
      <path
        d="M 700 0 C 520 22, 320 25, 165 70"
        stroke="#7C3AED"
        strokeOpacity="0.35"
        strokeWidth="2.2"
        strokeDasharray="6 6"
        strokeLinecap="round"
        markerEnd="url(#arrowhead-purple)"
      />

      {/* 2. Middle Arrow (Points to Card 2 center x=500) */}
      <path
        d="M 720 0 C 660 22, 570 32, 500 70"
        stroke="#7C3AED"
        strokeOpacity="0.35"
        strokeWidth="2.2"
        strokeDasharray="6 6"
        strokeLinecap="round"
        markerEnd="url(#arrowhead-purple)"
      />

      {/* 3. Right Arrow (Points to Card 3 center x=835) */}
      <path
        d="M 740 0 C 780 22, 815 32, 835 70"
        stroke="#7C3AED"
        strokeOpacity="0.35"
        strokeWidth="2.2"
        strokeDasharray="6 6"
        strokeLinecap="round"
        markerEnd="url(#arrowhead-purple)"
      />
    </svg>
  </div>
);

export default function AlumniSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev >= alumniData.length - 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? alumniData.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev >= alumniData.length - 3 ? 0 : prev + 1));
  };

  // Get current 3 visible cards
  const visibleCards = [
    alumniData[startIndex % alumniData.length],
    alumniData[(startIndex + 1) % alumniData.length],
    alumniData[(startIndex + 2) % alumniData.length]
  ];

  return (
    <section
      id="stories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        padding: "60px 0 80px",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
        userSelect: "none"
      }}
    >
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 8px" }}>

        {/* Header Grid Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "center",
            marginBottom: "32px"
          }}
          className="alumni-header-grid"
        >
          {/* Left Text Column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            {/* Star Icon Badge */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#5B2E91",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                boxShadow: "0 6px 16px rgba(91, 46, 145, 0.25)"
              }}
            >
              <AsteriskStar size={20} fill="#FFFFFF" />
            </div>

            {/* Subtitle Description */}
            <p
              style={{
                fontSize: "15px",
                color: "#4B5563",
                lineHeight: "1.65",
                maxWidth: "460px",
                fontWeight: "500",
                margin: 0
              }}
            >
              Empowering students with verified{" "}
              <strong style={{ color: "#141414" }}>career transformations</strong>,{" "}
              <strong style={{ color: "#141414" }}>high salary hikes</strong>, and{" "}
              <strong style={{ color: "#141414" }}>top MNC placements</strong>—built specially for{" "}
              <span style={{ color: "#5B2E91", fontWeight: "700" }}>The TechLearns Community.</span>
            </p>
          </div>

          {/* Right Column: Title + Accent Swirl + Premium Slider Controls */}
          <div style={{ position: "relative", textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            {/* Premium Carousel Navigation Arrow Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <motion.button
                onClick={handlePrev}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#5B2E91",
                  color: "#FFFFFF",
                  borderColor: "#5B2E91",
                  boxShadow: "0 8px 24px rgba(91, 46, 145, 0.35)"
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1.5px solid #CBD5E1",
                  background: "#FFFFFF",
                  color: "#5B2E91",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
                aria-label="Previous Alumni"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#5B2E91",
                  color: "#FFFFFF",
                  borderColor: "#5B2E91",
                  boxShadow: "0 8px 24px rgba(91, 46, 145, 0.35)"
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1.5px solid #CBD5E1",
                  background: "#FFFFFF",
                  color: "#5B2E91",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
                aria-label="Next Alumni"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Headline with Decorative Swirl */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <h2
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  fontSize: "64px",
                  fontWeight: "800",
                  color: "#0B1F3A",
                  lineHeight: "1.04",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  textAlign: "right"
                }}
              >
                Success Stories <br />
                <span style={{ color: "#5B2E91", position: "relative", display: "inline-block" }}>
                  of Teachlearns
                </span>
              </h2>
              <HeaderAccent />
            </div>
          </div>
        </div>

        {/* 3 Directional SVG Arrows */}
        <DirectionalArrows />

        {/* Eye-Catching Animated 3 Cards Grid Section */}
        <div style={{ position: "relative", width: "100%", minHeight: "410px" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "28px",
                width: "100%"
              }}
              className="alumni-cards-grid"
            >
              {visibleCards.map((item, idx) => {
                const isMiddleCard = idx === 1;

                const cardBg = isMiddleCard
                  ? "#F5F0FF"
                  : "linear-gradient(135deg, #3A1B68 0%, #5B2E91 100%)";
                const cardBorder = isMiddleCard ? "2px solid #E9D5FF" : "1px solid rgba(255, 255, 255, 0.12)";
                const textColor = isMiddleCard ? "#0B1F3A" : "#FFFFFF";
                const subtextColor = isMiddleCard ? "#64748B" : "rgba(255, 255, 255, 0.9)";
                const badgeBg = isMiddleCard ? "#EDE9FE" : "rgba(255, 255, 255, 0.15)";
                const badgeBorder = isMiddleCard ? "1px solid #C4B5FD" : "1px solid rgba(255, 255, 255, 0.25)";
                const badgeColor = isMiddleCard ? "#5B2E91" : "#FFFFFF";
                const buttonBg = isMiddleCard ? "#5B2E91" : "#FFFFFF";
                const buttonColor = isMiddleCard ? "#FFFFFF" : "#5B2E91";

                return (
                  <motion.div
                    key={`${item.name}-${idx}`}
                    whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                    style={{
                      background: cardBg,
                      border: cardBorder,
                      borderRadius: "28px",
                      padding: "26px",
                      height: "410px",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: isMiddleCard
                        ? "0 12px 30px rgba(91, 46, 145, 0.08)"
                        : "0 16px 36px rgba(58, 27, 104, 0.2)",
                      cursor: "pointer"
                    }}
                  >
                    {/* Card 1 & Card 3 Layout (Top Arrow Button, Bottom Left Text) */}
                    {!isMiddleCard && (
                      <>
                        {/* Top Arrow Button */}
                        <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "flex-start" }}>
                          <motion.div
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            transition={{ duration: 0.25 }}
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                              background: buttonBg,
                              color: buttonColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
                            }}
                          >
                            <ArrowUpRight size={20} />
                          </motion.div>
                        </div>

                        {/* Cutout Student Image Frame (Right Side) */}
                        <div
                          style={{
                            position: "absolute",
                            top: "20px",
                            bottom: "20px",
                            right: "20px",
                            width: "44%",
                            borderRadius: "18px",
                            overflow: "hidden",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
                          }}
                        >
                          <img
                            src={item.photo}
                            alt={item.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>

                        {/* Bottom Left Text */}
                        <div style={{ position: "relative", zIndex: 10, width: "50%" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "4px 11px",
                              borderRadius: "9999px",
                              fontSize: "11px",
                              fontWeight: "700",
                              background: badgeBg,
                              border: badgeBorder,
                              color: badgeColor,
                              marginBottom: "8px"
                            }}
                          >
                            {item.company} • {item.ctc}
                          </span>

                          <h3 style={{ fontSize: "22px", fontWeight: "800", color: textColor, margin: "0 0 4px", lineHeight: "1.2" }}>
                            {item.name}
                          </h3>

                          <p style={{ fontSize: "12px", fontWeight: "600", color: subtextColor, margin: "0 0 8px" }}>
                            {item.role}
                          </p>

                          <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.8)", fontStyle: "italic", margin: "0 0 10px", lineHeight: "1.4" }}>
                            "{item.quote}"
                          </p>

                          <div style={{ fontSize: "11px", fontWeight: "700", color: "#E9D5FF" }}>
                            {item.before} ➔ {item.after}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Card 2 Layout (Top Left Text, Bottom Left Arrow Button) */}
                    {isMiddleCard && (
                      <>
                        {/* Top Left Text */}
                        <div style={{ position: "relative", zIndex: 10, width: "50%" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "4px 11px",
                              borderRadius: "9999px",
                              fontSize: "11px",
                              fontWeight: "700",
                              background: badgeBg,
                              border: badgeBorder,
                              color: badgeColor,
                              marginBottom: "8px"
                            }}
                          >
                            {item.company} • {item.ctc}
                          </span>

                          <h3 style={{ fontSize: "22px", fontWeight: "800", color: textColor, margin: "0 0 4px", lineHeight: "1.2" }}>
                            {item.name}
                          </h3>

                          <p style={{ fontSize: "12px", fontWeight: "600", color: subtextColor, margin: "0 0 8px" }}>
                            {item.role}
                          </p>

                          <p style={{ fontSize: "11.5px", color: "#475569", fontStyle: "italic", margin: "0 0 10px", lineHeight: "1.4" }}>
                            "{item.quote}"
                          </p>

                          <div style={{ fontSize: "11px", fontWeight: "700", color: "#5B2E91" }}>
                            {item.before} ➔ {item.after}
                          </div>
                        </div>

                        {/* Cutout Student Image Frame (Right Side) */}
                        <div
                          style={{
                            position: "absolute",
                            top: "20px",
                            bottom: "20px",
                            right: "20px",
                            width: "44%",
                            borderRadius: "18px",
                            overflow: "hidden",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
                          }}
                        >
                          <img
                            src={item.photo}
                            alt={item.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>

                        {/* Bottom Left Arrow Button */}
                        <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "flex-start", marginTop: "auto" }}>
                          <motion.div
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            transition={{ duration: 0.25 }}
                            style={{
                              width: "42px",
                              height: "42px",
                              borderRadius: "50%",
                              background: buttonBg,
                              color: buttonColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 6px 16px rgba(91, 46, 145, 0.3)"
                            }}
                          >
                            <ArrowUpRight size={20} />
                          </motion.div>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .alumni-header-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .directional-arrows-wrapper {
            display: none !important;
          }
          .alumni-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

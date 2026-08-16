"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
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
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
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
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
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
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
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
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
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
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
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
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    companyColor: "#00338D",
    before: "IT Analyst",
    after: "Security Lead"
  }
];

export default function AlumniSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const activeItem = alumniData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? alumniData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === alumniData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="stories" style={{ padding: "64px 0 90px", background: "#FAFBFD", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}>

        {/* Centered Header matching screenshot */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "40px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "10px" }}>
            What our <span style={{ color: "#5B2E91" }}>Students say?</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "600px", margin: "0 auto 16px" }}>
            From learners to leaders – success stories that inspire.
          </p>

          {/* 2-Tone Accent Line */}
          <div style={{ display: "flex", justifyContent: "center", gap: "4px", margin: "0 auto" }}>
            <div style={{ width: "24px", height: "4px", background: "#E2E8F0", borderRadius: "9999px" }} />
            <div style={{ width: "24px", height: "4px", background: "#5B2E91", borderRadius: "9999px" }} />
          </div>
        </div>



        {/* Avatar Dock Container (7 Avatars + SVG dotted curve crossing dead-center through every photo) */}
        <div style={{ position: "relative", width: "100%", maxWidth: "1050px", margin: "0 auto 44px", height: "220px", zIndex: 5 }}>

          {/* Vibrant Purple Dotted Curve SVG Line on zIndex: 1 passing behind the photos */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1050 220"
            preserveAspectRatio="none"
            fill="none"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 1, pointerEvents: "none", overflow: "visible" }}
          >
            <path
              d={Array.from({ length: 176 }, (_, i) => {
                const x = -350 + i * 10;
                const t = x / 1050;
                const y = 85 + 240 * t * (1 - t);
                return `${i === 0 ? "M" : "L"} ${x} ${y.toFixed(2)}`;
              }).join(" ")}
              stroke="#7C3AED"
              strokeWidth="3"
              strokeDasharray="7 6"
              strokeOpacity="0.95"
              fill="none"
            />
          </svg>

          {alumniData.map((item, idx) => {
            const isActive = idx === activeIndex;

            // Parametric t across the 1050px width (from 6% to 94%)
            const t = (idx / (alumniData.length - 1)) * 0.88 + 0.06;
            const leftPercent = t * 100;

            // Exact Gentle Parabolic Y coordinate: y(t) = 85 + 240 * t * (1 - t)
            const topPx = 85 + 240 * t * (1 - t);

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  position: "absolute",
                  left: `${leftPercent}%`,
                  top: `${topPx}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 10 : 5,
                  cursor: "pointer"
                }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.25 : 0.95,
                    opacity: isActive ? 1 : 0.9
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    borderRadius: "50%",
                    padding: isActive ? "4px" : "0px",
                    background: isActive ? "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)" : "transparent",
                    boxShadow: isActive ? "0 18px 48px rgba(91, 46, 145, 0.55)" : "0 12px 30px rgba(0, 0, 0, 0.16)"
                  }}
                >
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{
                      width: isActive ? "120px" : "96px",
                      height: isActive ? "120px" : "96px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "center 25%",
                      display: "block",
                      border: "none"
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Active Testimonial Card */}
        <div style={{ position: "relative", maxWidth: "840px", margin: "0 auto" }}>
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#5B2E91",
              color: "#FFFFFF",
              border: "none",
              boxShadow: "0 8px 20px rgba(91, 46, 145, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <ChevronLeft style={{ width: "24px", height: "24px", strokeWidth: 2.5 }} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#5B2E91",
              color: "#FFFFFF",
              border: "none",
              boxShadow: "0 8px 20px rgba(91, 46, 145, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <ChevronRight style={{ width: "24px", height: "24px", strokeWidth: 2.5 }} />
          </button>

          <div style={{ background: "#FFFFFF", borderRadius: "28px", padding: "44px 54px", boxShadow: "0 20px 50px rgba(11, 31, 58, 0.05)", border: "1px solid #F1F5F9", textAlign: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "26px", fontWeight: "800", color: "#5B2E91", marginBottom: "6px" }}>
                  {activeItem.name}
                </h3>

                <div style={{ fontSize: "14.5px", fontWeight: "600", color: "#64748B", marginBottom: "24px" }}>
                  {activeItem.role} at <span style={{ color: "#0B1F3A", fontWeight: "700" }}>{activeItem.company}</span> • <span style={{ color: "#5B2E91", fontWeight: "700" }}>{activeItem.ctc}</span>
                </div>

                <p style={{ fontSize: "15.5px", color: "#334155", lineHeight: "1.7", maxWidth: "680px", margin: "0 auto 28px", fontWeight: "400" }}>
                  “{activeItem.quote}”
                </p>

                <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
                  <span style={{ background: "#FEE2E2", color: "#EF4444", padding: "6px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700" }}>
                    Before: {activeItem.before}
                  </span>
                  <span style={{ color: "#475569", fontSize: "13px" }}>➔</span>
                  <span style={{ background: "#DCFCE7", color: "#166534", padding: "6px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700" }}>
                    After: {activeItem.after} ({activeItem.company})
                  </span>
                </div>

                <div>
                  <button style={{ background: "#FFFFFF", border: "1px solid #CBD5E1", padding: "9px 22px", borderRadius: "9999px", fontSize: "13px", fontWeight: "700", color: "#0B1F3A", display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                    <span style={{ background: "#0A66C2", color: "#FFFFFF", padding: "1px 5px", borderRadius: "3px", fontSize: "10.5px", fontWeight: "bold" }}>in</span>
                    Connect on LinkedIn
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

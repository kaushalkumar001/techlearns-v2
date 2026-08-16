"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const smoothEasing = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    name: "Aman Kumar",
    role: "Data Analyst • CTC: 8 LPA",
    quote: "TechLearns Academy changed my career journey. The training, projects and mock interviews helped me crack the job I always dreamed of.",
    image: "/crops/aman_kumar.png",
  },
  {
    name: "Mansi Sharma",
    role: "Software Engineer • CTC: 12 LPA",
    quote: "The Centres of Excellence & corporate mentorship gave me real hands-on experience before stepping into industry interviews.",
    image: "/images/alumni_mansi.jpg",
  },
  {
    name: "Shubham Verma",
    role: "Full Stack Developer • CTC: 10 LPA",
    quote: "Building real-world production projects & AI-powered mock interviews boosted my coding confidence tremendously.",
    image: "/images/alumni_shubham.jpg",
  },
  {
    name: "Yash Gupta",
    role: "Data Engineer • CTC: 14 LPA",
    quote: "TechLearns bridged the gap between college curriculum and top tech company expectations effortlessly.",
    image: "/images/alumni_yash.jpg",
  }
];

export default function WhyTechLearnsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section style={{ padding: "48px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            WHY TECHLEARNS ACADEMY
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", marginBottom: "16px" }}></div>

          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "36px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "10px" }}>
            Industry-tailored <span style={{ color: "#5B2E91" }}>learning</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Everything we do is designed to make you job-ready and future-ready.
          </p>
        </div>

        {/* 2-Column Layout: Left Cards (60%), Video Testimonial Right (40%) */}
        <div style={{ display: "grid", gridTemplateColumns: "0.6fr 0.4fr", gap: "32px", alignItems: "stretch" }}>

          {/* 4 Feature Cards Grid matching reference bento graphics in original compact height and width */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

            {/* Card 1: Industry-oriented curriculum */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {/* Compact Graphic Panel: Arc Dashboard (Multiservice support style) */}
              <div style={{ background: "#FAFAFE", border: "1px solid #F1F5F9", borderRadius: "12px", height: "92px", overflow: "hidden", position: "relative", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Arc SVG & Floating Badges */}
                <svg width="180" height="70" viewBox="0 0 180 70" fill="none" style={{ position: "absolute", top: "10px" }}>
                  <path d="M 15 60 A 75 75 0 0 1 165 60" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                </svg>

                {/* Badge 1 (Left) */}
                <div style={{ position: "absolute", left: "18px", bottom: "16px", width: "24px", height: "24px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", fontSize: "11px", fontWeight: "bold", color: "#E11D48" }}>
                  S
                </div>

                {/* Badge 2 (Top Left) */}
                <div style={{ position: "absolute", left: "48px", top: "12px", width: "24px", height: "24px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                {/* Badge 3 (Top Right) */}
                <div style={{ position: "absolute", right: "48px", top: "12px", width: "24px", height: "24px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#00A4EF">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Badge 4 (Right) */}
                <div style={{ position: "absolute", right: "18px", bottom: "16px", width: "24px", height: "24px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", fontSize: "11px", fontWeight: "bold" }}>
                  N
                </div>

                {/* Center Glowing Gradient Pill Button */}
                <div style={{ position: "absolute", bottom: "10px", background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)", color: "#FFFFFF", padding: "4px 14px", borderRadius: "9999px", fontSize: "10px", fontWeight: "700", boxShadow: "0 4px 12px rgba(79, 70, 229, 0.35)" }}>
                  Curriculum
                </div>
              </div>

              {/* Original Text Content */}
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#1E1B4B", marginBottom: "6px" }}>
                  Industry-oriented curriculum
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#7C3AED", borderRadius: "2px", marginBottom: "8px" }}></div>
                <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.45" }}>
                  An updated curriculum engineered to teach you only what the industry demands.
                </p>
              </div>
            </div>

            {/* Card 2: AI-driven learning products */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {/* Compact Graphic Panel: Analytics Line Chart (Track actions style) */}
              <div style={{ background: "#FAFAFE", border: "1px solid #F1F5F9", borderRadius: "12px", height: "92px", overflow: "hidden", position: "relative", marginBottom: "12px", padding: "8px 12px" }}>
                {/* Header Metrics */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: "9px", color: "#94A3B8", fontWeight: "600" }}>AI Code Evaluation ~</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "800", color: "#0F172A" }}>2,383</span>
                      <span style={{ background: "#EFF6FF", color: "#2563EB", padding: "0 4px", borderRadius: "9999px", fontSize: "8.5px", fontWeight: "700" }}>40% ▲</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "8.5px", color: "#64748B", background: "#FFFFFF", border: "1px solid #E2E8F0", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>
                    AI IDE
                  </div>
                </div>

                {/* Wave Chart Line */}
                <svg width="100%" height="45" viewBox="0 0 200 45" fill="none" style={{ position: "absolute", bottom: "4px", left: "0", right: "0" }}>
                  <path d="M 0 35 Q 30 20 60 30 T 120 15 T 200 8 L 200 45 L 0 45 Z" fill="url(#blueGradMini)" opacity="0.3" />
                  <path d="M 0 35 Q 30 20 60 30 T 120 15 T 200 8" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
                  <circle cx="120" cy="15" r="3" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />

                  <defs>
                    <linearGradient id="blueGradMini" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Tooltip Pill */}
                <div style={{ position: "absolute", top: "36px", right: "16px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "3px 8px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: "8.5px", fontWeight: "700", color: "#2563EB" }}>+670 AI checks • Real-time</div>
                </div>
              </div>

              {/* Original Text Content */}
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#1E1B4B", marginBottom: "6px" }}>
                  AI-driven learning products
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#2563EB", borderRadius: "2px", marginBottom: "8px" }}></div>
                <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.45" }}>
                  AI-based IDE with real-time support and help, AI-based mock interviews, and smart evaluation systems.
                </p>
              </div>
            </div>

            {/* Card 3: Experienced Instructors */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {/* Compact Graphic Panel: Bar Chart with Floating "You" Pill (Keep track of your rating style) */}
              <div style={{ background: "#FAFAFE", border: "1px solid #F1F5F9", borderRadius: "12px", height: "92px", overflow: "hidden", position: "relative", marginBottom: "12px", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "8px", paddingBottom: "10px" }}>
                {/* Background Dotted Line */}
                <div style={{ position: "absolute", top: "50%", left: "10px", right: "10px", borderTop: "1px dashed #CBD5E1" }} />

                {/* Bar 1 */}
                <div style={{ width: "16px", height: "28px", borderRadius: "4px 4px 0 0", background: "#E2E8F0" }} />
                {/* Bar 2 */}
                <div style={{ width: "16px", height: "42px", borderRadius: "4px 4px 0 0", background: "#CBD5E1" }} />

                {/* Bar 3 (Highlighted Center Bar with Pill) */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {/* Floating Pill Above Bar */}
                  <div style={{ position: "absolute", top: "-22px", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "9999px", padding: "2px 8px", fontSize: "9px", fontWeight: "800", color: "#4F46E5", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", whiteSpace: "nowrap" }}>
                    1000+ Mentors
                  </div>
                  <div style={{ width: "18px", height: "58px", borderRadius: "5px 5px 0 0", background: "linear-gradient(180deg, #818CF8 0%, #4F46E5 100%)", boxShadow: "0 4px 10px rgba(79, 70, 229, 0.3)" }} />
                </div>

                {/* Bar 4 */}
                <div style={{ width: "16px", height: "35px", borderRadius: "4px 4px 0 0", background: "#CBD5E1" }} />
                {/* Bar 5 */}
                <div style={{ width: "16px", height: "45px", borderRadius: "4px 4px 0 0", background: "#E2E8F0" }} />
              </div>

              {/* Original Text Content */}
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#1E1B4B", marginBottom: "6px" }}>
                  Experienced Instructors
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#16A34A", borderRadius: "2px", marginBottom: "8px" }}></div>
                <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.45" }}>
                  Courses taught only by people who have already aced it! 1000+ tech professionals to guide you.
                </p>
              </div>
            </div>

            {/* Card 4: 1000+ mock interviews */}
            <div style={{ background: "#FFFFFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "18px", boxShadow: "0 8px 24px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {/* Compact Graphic Panel: Flowchart Node Diagram (No code platform style) */}
              <div style={{ background: "#FAFAFE", border: "1px solid #F1F5F9", borderRadius: "12px", height: "92px", overflow: "hidden", position: "relative", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Node 1 (Top Left) */}
                <div style={{ position: "absolute", top: "10px", left: "14px", background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 100%)", color: "#FFFFFF", padding: "3px 8px", borderRadius: "6px", fontSize: "9px", fontWeight: "700", boxShadow: "0 2px 6px rgba(96, 165, 250, 0.3)" }}>
                  ⚡ Technical
                </div>

                {/* Node 2 (Middle Right) */}
                <div style={{ position: "absolute", top: "34px", right: "14px", background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)", color: "#FFFFFF", padding: "3px 8px", borderRadius: "6px", fontSize: "9px", fontWeight: "700", boxShadow: "0 2px 6px rgba(59, 130, 246, 0.3)" }}>
                  🎯 HR Prep
                </div>

                {/* Node 3 (Bottom Center) with Cursor */}
                <div style={{ position: "absolute", bottom: "10px", left: "24px", background: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)", color: "#FFFFFF", padding: "4px 10px", borderRadius: "6px", fontSize: "9.5px", fontWeight: "700", boxShadow: "0 4px 10px rgba(79, 70, 229, 0.35)", display: "flex", alignItems: "center", gap: "4px" }}>
                  🏆 Unlimited Practice
                  {/* Floating Hand Cursor */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" style={{ position: "absolute", right: "-6px", bottom: "-8px", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
                    <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74a3 3 0 0 1 2.3 2.1 3 3 0 0 1 .7 2.16v2a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-5a1 1 0 0 1 2 0v3.5a1 1 0 0 0 2 0v-4.76z" />
                  </svg>
                </div>

                {/* Connecting Line SVG */}
                <svg width="100%" height="100%" viewBox="0 0 180 80" fill="none" style={{ position: "absolute", top: 0, left: 0 }}>
                  <path d="M 50 20 Q 110 20 130 40 T 80 65" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                </svg>
              </div>

              {/* Original Text Content */}
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#1E1B4B", marginBottom: "6px" }}>
                  1000+ mock interviews
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#EA580C", borderRadius: "2px", marginBottom: "8px" }}></div>
                <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.45" }}>
                  Practice your skills with unlimited number of mock interviews you can schedule yourself.
                </p>
              </div>
            </div>

          </div>

          {/* Right Video Testimonial Card */}
          <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #EDE9FE", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>

            {/* Video Frame with Play Overlay */}
            <div style={{ position: "relative", width: "100%", height: "280px", background: "#0F172A" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: smoothEasing }}
                  src={current.image}
                  alt={current.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </AnimatePresence>

              {/* Play Icon */}
              <div style={{ position: "absolute", top: "18px", right: "18px", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1.5px solid rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "16px", cursor: "pointer" }}>
                ▶
              </div>

              {/* Working Slider Controls (< >) */}
              <div style={{ position: "absolute", bottom: "14px", left: "0", right: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", background: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(8px)", padding: "6px 16px", width: "fit-content", margin: "0 auto", borderRadius: "20px" }}>
                {/* Left Prev Arrow */}
                <button
                  onClick={handlePrev}
                  title="Previous"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 8px",
                    borderRadius: "50%",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  ‹
                </button>

                {/* Dots */}
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: index === currentIndex ? "12px" : "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: index === currentIndex ? "#A855F7" : "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                  />
                ))}

                {/* Right Next Arrow */}
                <button
                  onClick={handleNext}
                  title="Next"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 8px",
                    borderRadius: "50%",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Bottom Testimonial Card Details */}
            <div style={{ padding: "24px", minHeight: "140px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: smoothEasing }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#6D28D9" }}>
                      {current.name}
                    </h4>
                    <span style={{ background: "#0A66C2", color: "#FFFFFF", padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>
                      in
                    </span>
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#64748B", marginBottom: "14px" }}>
                    {current.role}
                  </div>
                  <p style={{ fontSize: "13px", color: "#334155", lineHeight: "1.6" }}>
                    <span style={{ color: "#6D28D9", fontSize: "18px", fontWeight: "bold", marginRight: "6px" }}>“</span>
                    {current.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

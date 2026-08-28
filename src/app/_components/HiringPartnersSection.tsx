"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  ShieldCheck,
  FileText,
  GraduationCap,
  Code2,
  Briefcase,
  Laptop,
  Terminal,
  Trophy,
  Target,
  Zap,
  Timer,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Official 100% Verified Full-Color Brand Vector Logos (VectorLogoZone CDN)
const partnerLogos = [
  { name: "Google", logoUrl: "https://www.vectorlogo.zone/logos/google/google-icon.svg", color: "#111827", fontSize: "19px", fontWeight: "700" },
  { name: "Microsoft", logoUrl: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg", color: "#5E5E5E", fontSize: "18px", fontWeight: "700" },
  { name: "Amazon", logoUrl: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg", color: "#FF9900", fontSize: "19px", fontWeight: "800" },
  { name: "Meta", logoUrl: "https://www.vectorlogo.zone/logos/meta/meta-icon.svg", color: "#0668E1", fontSize: "19px", fontWeight: "800" },
  { name: "Uber", logoUrl: "https://www.vectorlogo.zone/logos/uber/uber-icon.svg", color: "#111827", fontSize: "19px", fontWeight: "800" },
  { name: "Salesforce", logoUrl: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg", color: "#00A1E0", fontSize: "18px", fontWeight: "800" },
  { name: "Stripe", logoUrl: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", color: "#635BFF", fontSize: "19px", fontWeight: "800" },
  { name: "Netflix", logoUrl: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg", color: "#E50914", fontSize: "19px", fontWeight: "900" },
  { name: "Visa", logoUrl: "https://www.vectorlogo.zone/logos/visa/visa-icon.svg", color: "#1A1F71", fontSize: "19px", fontWeight: "900", fontStyle: "italic" },
  { name: "PayPal", logoUrl: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg", color: "#003087", fontSize: "18px", fontWeight: "800" },
  { name: "Atlassian", logoUrl: "https://www.vectorlogo.zone/logos/atlassian/atlassian-icon.svg", color: "#0052CC", fontSize: "16px", fontWeight: "800" },
  { name: "Flipkart", logoUrl: "https://www.vectorlogo.zone/logos/flipkart/flipkart-icon.svg", color: "#2874F0", fontSize: "18px", fontWeight: "800" }
];

const journeySteps = [

  {
    stepNum: "01",

    stepTag: "01 — BUILD YOUR FOUNDATION",

    title: "Every Great Developer Starts Somewhere",

    description:
      "Start with programming fundamentals, problem-solving, computer science basics, and essential development concepts.",

    icon: Laptop,

    skills: ["HTML", "CSS", "JavaScript", "CS Basics"],

    accentColor: "#7A42BE",

    gradient: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",

    glowColor: "rgba(122, 66, 190, 0.3)"
  },

  {
    stepNum: "02",

    stepTag: "02 — BUILD REAL PROJECTS",

    title: "Time to Build Something Awesome",

    description:
      "Apply your skills by building practical projects, working with modern technologies, and creating a strong portfolio.",

    icon: Code2,

    skills: ["React", "Node.js", "MongoDB", "Full-Stack Portfolio"],

    accentColor: "#6366F1",

    gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",

    glowColor: "rgba(99, 102, 241, 0.3)"
  },

  {
    stepNum: "03",

    stepTag: "03 — COMPETE & COLLABORATE",

    title: "Build. Break Things. Win Hackathons.",

    description:
      "Participate in hackathons, collaborative challenges, and problem-solving experiences that simulate real-world development.",

    icon: Trophy,

    skills: ["Hackathons", "Team Work", "Live Projects", "Innovation"],

    isHackathon: true,

    accentColor: "#F59E0B",

    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",

    glowColor: "rgba(245, 158, 11, 0.35)"
  },

  {
    stepNum: "04",

    stepTag: "04 — BECOME INDUSTRY READY",

    title: "Turn Your Skills Into Superpowers",

    description:
      "Strengthen technical expertise, communication, interview preparation, and professional problem-solving abilities.",

    icon: Target,

    skills: ["DSA", "System Design", "Mock Interviews", "Resume Prep"],

    accentColor: "#14B8A6",

    gradient: "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",

    glowColor: "rgba(20, 184, 166, 0.3)"
  },

  {
    stepNum: "05",

    stepTag: "05 — LAUNCH YOUR CAREER",

    title: "Now Go Get That Dream Job 🚀",

    description:
      "Connect with opportunities, hiring networks, career guidance, and roles that help learners begin and accelerate their professional journey.",

    icon: Briefcase,

    skills: ["Job Offers", "800+ Hiring Partners", "1-on-1 Referrals"],

    accentColor: "#10B981",

    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",

    glowColor: "rgba(16, 185, 129, 0.3)"
  }

];

export default function HiringPartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const validLogos = partnerLogos.filter(logo => !failedLogos[logo.name]);
  const marqueeItems = [...validLogos, ...validLogos];

  const currentStep = journeySteps[activeStepIndex] || journeySteps[0];
  const CurrentIcon = currentStep.icon;

  const lastWheelTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    const el = journeyRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Div changing & scroll pause starts ONLY when "From Learning Code..." heading arrives at top view
      const isInZone = rect.top <= 140 && rect.bottom >= windowHeight * 0.35;
      if (!isInZone) return;

      const now = Date.now();
      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;

      // Pause website scroll and cycle step until last step (index 4)
      if (isDown && activeStepIndex < journeySteps.length - 1) {
        e.preventDefault();
        if (now - lastWheelTime.current > 260) {
          setActiveStepIndex(prev => prev + 1);
          lastWheelTime.current = now;
        }
      } else if (isUp && activeStepIndex > 0) {
        e.preventDefault();
        if (now - lastWheelTime.current > 260) {
          setActiveStepIndex(prev => prev - 1);
          lastWheelTime.current = now;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInZone = rect.top <= 140 && rect.bottom >= windowHeight * 0.35;
      if (!isInZone) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      const now = Date.now();

      if (deltaY > 18 && activeStepIndex < journeySteps.length - 1) {
        e.preventDefault();
        if (now - lastWheelTime.current > 280) {
          setActiveStepIndex(prev => prev + 1);
          lastWheelTime.current = now;
          touchStartY.current = touchEndY;
        }
      } else if (deltaY < -18 && activeStepIndex > 0) {
        e.preventDefault();
        if (now - lastWheelTime.current > 280) {
          setActiveStepIndex(prev => prev - 1);
          lastWheelTime.current = now;
          touchStartY.current = touchEndY;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeStepIndex]);

  return (
    <section ref={sectionRef} aria-label="Hiring Partners Section" className="hiring-section-pin-container">
      <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(20px, 3vw, 32px)" }}>
          <div style={{ fontSize: "clamp(11px, 1.2vw, 12.5px)", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto 12px" }} />

          <h2 className="hiring-title">
            Get offers from <span style={{ color: "#5B2E91" }}>800+ top companies</span>
          </h2>
          <p className="hiring-subtext">
            Our learners are placed in leading organizations and continue to excel in their careers
          </p>
        </div>

        {/* 1-Row Infinite Horizontal Marquee */}
        <div className="hiring-marquee-container">

          {/* Side Fade Gradient Overlays */}
          <div className="marquee-fade-overlay fade-left" />
          <div className="marquee-fade-overlay fade-right" />

          {/* Continuous Marquee Track */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="hiring-marquee-track"
          >
            {marqueeItems.map((logo, index) => {
              return (
                <div
                  key={`${logo.name}-${index}`}
                  className="hiring-logo-pill"
                  style={{
                    fontSize: logo.fontSize,
                    fontWeight: logo.fontWeight,
                    color: logo.color,
                    fontStyle: logo.fontStyle || "normal"
                  }}
                >
                  <img
                    src={logo.logoUrl}
                    alt={logo.name}
                    width="22"
                    height="22"
                    style={{ objectFit: "contain", width: "22px", height: "22px" }}
                    onError={() => {
                      setFailedLogos(prev => ({ ...prev, [logo.name]: true }));
                    }}
                  />
                  <span>{logo.name}</span>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>

      {/* Pinned Scroll Journey Container (Pins heading until step 5 completes) */}
      <div ref={journeyRef} className="journey-pinned-stage">
        <div className="journey-sticky-wrapper">
          <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

            {/* High-End Performance Infographic Container */}
            <div className="hiring-infographic-card">

              {/* Full-Height Frosted Glass Blur Overlay Curtain (Desktop) */}
              <div className="hiring-blur-curtain" />

              {/* 2-Column Infographic Grid: Storytelling Left, Sticky Right */}
              <div className="hiring-grid">

                {/* Left Column: Single-Card Developer Journey Storytelling */}
                <div className="hiring-stats-col">

                  {/* Sticky Header inside storytelling box */}
                  <div className="hiring-scroll-header">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                      <div>
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
                          Career Storytelling
                        </div>
                        <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
                      </div>

                      {/* Step Indicator Pills (01 - 05) */}
                      <div style={{ display: "flex", gap: "4px" }}>
                        {journeySteps.map((s, i) => (
                          <button
                            key={s.stepNum}
                            onClick={() => setActiveStepIndex(i)}
                            style={{
                              padding: "3px 8px",
                              borderRadius: "9999px",
                              fontSize: "10px",
                              fontWeight: "800",
                              border: "1px solid",
                              borderColor: activeStepIndex === i ? s.accentColor : "#E2E8F0",
                              background: activeStepIndex === i ? s.accentColor : "#FFFFFF",
                              color: activeStepIndex === i ? "#FFFFFF" : "#64748B",
                              cursor: "pointer",
                              transition: "all 0.25s ease"
                            }}
                          >
                            {s.stepNum}
                          </button>
                        ))}
                      </div>
                    </div>

                    <h4 style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", fontWeight: "800", color: "#0B1F3A", margin: "4px 0 4px", fontFamily: "var(--font-montserrat)", letterSpacing: "-0.01em" }}>
                      From “Hello World” to “You’re Hired!” 🚀
                    </h4>
                    <p style={{ fontSize: "11.5px", color: "#64748B", margin: "0 0 10px", lineHeight: "1.5" }}>
                      A structured journey that takes you from learning the fundamentals to building projects, competing in hackathons, and becoming a job-ready software developer.
                    </p>
                    <div style={{ width: "42px", height: "3px", background: "linear-gradient(90deg, #7A42BE 0%, #5B2E91 100%)", borderRadius: "2px", marginBottom: "12px" }} />
                  </div>

                  {/* Single Active Step Card Viewport with Right-Curve Entrance Animation */}
                  <div className="single-card-story-viewport">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep.stepNum}
                        initial={{ opacity: 0, x: 90, y: -20, rotate: 6, scale: 0.92 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -90, y: 20, rotate: -6, scale: 0.92 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className={`infographic-single-pill-card ${currentStep.isHackathon ? "infographic-hackathon-pill" : ""}`}
                        style={{
                          borderColor: currentStep.accentColor,
                          boxShadow: `0 12px 36px ${currentStep.glowColor}`
                        }}
                      >
                        {/* LEFT SIDE: Step Icon Container */}
                        <div className="card-left-icon-wrap" style={{ background: currentStep.gradient }}>
                          <CurrentIcon size={24} color="#FFFFFF" strokeWidth={2.2} />
                        </div>

                        {/* MIDDLE: Content Details */}
                        <div className="card-middle-content">
                          <span className="card-step-tag" style={{ color: currentStep.accentColor }}>
                            {currentStep.stepTag}
                          </span>
                          <h5 className="card-step-title">{currentStep.title}</h5>
                          <p className="card-step-desc">{currentStep.description}</p>

                          {/* Hackathon Special Visual Elements for Step 03 */}
                          {currentStep.isHackathon && (
                            <div className="journey-hackathon-block">
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                                <span style={{ fontSize: "10px", fontWeight: "800", color: "#B45309", background: "#FFFFFF", padding: "2px 8px", borderRadius: "9999px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                  <Award size={10} color="#D97706" /> Winner Badge 🏆
                                </span>
                                <span style={{ fontSize: "10px", fontWeight: "800", color: "#D97706", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                  <Timer size={10} color="#F59E0B" /> 48H Clock ⚡
                                </span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#7A42BE", color: "#FFF", fontSize: "7px", fontWeight: "800", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #FFF" }}>JS</span>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#0EA5E9", color: "#FFF", fontSize: "7px", fontWeight: "800", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #FFF", marginLeft: "-4px" }}>PY</span>
                                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#10B981", color: "#FFF", fontSize: "7px", fontWeight: "800", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #FFF", marginLeft: "-4px" }}>TS</span>
                                  <span style={{ fontSize: "9.5px", fontWeight: "700", color: "#78350F", marginLeft: "4px" }}>+4 Team</span>
                                </div>
                                <span style={{ fontSize: "9px", fontWeight: "800", color: "#92400E", background: "#FFFFFF", padding: "2px 6px", borderRadius: "6px", border: "1px solid #FCD34D", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                  <Zap size={9} color="#F59E0B" /> Build • Innovate • Compete
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Skills Pill Tags with Staggered Entrance */}
                          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "8px" }}>
                            {currentStep.skills.map((skill, sIdx) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8, y: 4 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: 0.12 + sIdx * 0.05 }}
                                className="infographic-skill-pill"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* RIGHT SIDE: Overlapping Circular Number Node */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                          className="card-right-node-circle"
                          style={{ background: currentStep.gradient }}
                        >
                          <span>{currentStep.stepNum}</span>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Animated Down Scroll Badge */}
                  <div className="hiring-premium-scroll-indicator" style={{ width: "100%", justifyContent: "center", margin: "14px 0 0" }}>
                    <div className="scroll-mouse-pill">
                      <div className="scroll-wheel-dot" />
                    </div>
                    <span className="scroll-indicator-label">SCROLL DOWN TO PROGRESS ({activeStepIndex + 1}/5)</span>
                    <ChevronDown size={14} className="scroll-chevron-bounce" />
                  </div>

                </div>

                {/* Right Column: Floating Frosted Cards & Precision SVG Dial/Leader System */}
                <div className="hiring-dial-stage">

                  {/* Precision SVG Leader Lines & Sunburst Dial (Unchanged original 560px x 560px r=280 dial dimensions) */}
                  <div className="hiring-svg-dial-wrapper">
                    <svg width="700" height="560" viewBox="-260 -60 700 560" fill="none" style={{ overflow: "visible" }}>

                      {/* 3 Horizontal Leader Lines extending from Left Stats */}
                      <line x1="-260" y1="10" x2="35" y2="10" stroke="#CBD5E1" strokeWidth="1" />
                      <circle cx="35" cy="10" r="4.5" fill="#5B2E91" stroke="#FFFFFF" strokeWidth="2" />

                      <line x1="-260" y1="220" x2="-60" y2="220" stroke="#CBD5E1" strokeWidth="1" />
                      <circle cx="-60" cy="220" r="4.5" fill="#5B2E91" stroke="#FFFFFF" strokeWidth="2" />

                      <line x1="-260" y1="430" x2="35" y2="430" stroke="#CBD5E1" strokeWidth="1" />
                      <circle cx="35" cy="430" r="4.5" fill="#5B2E91" stroke="#FFFFFF" strokeWidth="2" />

                      {/* Outer Dotted Guide Arc (r=280 circle kept UNCHANGED) */}
                      <circle cx="220" cy="220" r="280" stroke="#7A42BE" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />

                      {/* Dense Radial Spokes Ring (140 fine spokes rotating at a slow, ultra-premium speed) */}
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "220px 220px" }}
                      >
                        {Array.from({ length: 140 }).map((_, i) => {
                          const angle = (i * 2.57) - 90;
                          const rad = (angle * Math.PI) / 180;
                          const x1 = 220 + Math.cos(rad) * 180;
                          const y1 = 220 + Math.sin(rad) * 180;
                          const x2 = 220 + Math.cos(rad) * 265;
                          const y2 = 220 + Math.sin(rad) * 265;
                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke={i % 4 === 0 ? "#5B2E91" : "#A78BFA"}
                              strokeWidth={i % 4 === 0 ? "2.4" : "1.2"}
                              strokeOpacity={i % 4 === 0 ? "0.9" : "0.45"}
                            />
                          );
                        })}
                      </motion.g>
                    </svg>

                    {/* Central Ambient Glowing Purple Orb */}
                    <div className="hiring-ambient-orb" />
                  </div>

                  {/* 4 Stacked Frosted Cards with Scroll Reveal Cascade */}
                  <div className="hiring-cards-list">

                    {/* Card 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      whileHover={{ scale: 1.03, x: -4 }}
                      className="hiring-frosted-card"
                    >
                      <div>
                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>800+ Companies</div>
                        <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Hiring Partners</div>
                      </div>
                      <div className="hiring-card-icon-wrap">
                        <Building2 size={20} color="#FFFFFF" />
                      </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      whileHover={{ scale: 1.03, x: -4 }}
                      className="hiring-frosted-card"
                    >
                      <div>
                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>25,000+ Placed</div>
                        <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Learners Career Growth</div>
                      </div>
                      <div className="hiring-card-icon-wrap">
                        <Users size={20} color="#FFFFFF" />
                      </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      whileHover={{ scale: 1.03, x: -4 }}
                      className="hiring-frosted-card"
                    >
                      <div>
                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>95% Placement</div>
                        <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Impact Success Rate</div>
                      </div>
                      <div className="hiring-card-icon-wrap">
                        <Award size={20} color="#FFFFFF" />
                      </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                      whileHover={{ scale: 1.03, x: -4 }}
                      className="hiring-frosted-card"
                    >
                      <div>
                        <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>32 LPA Highest</div>
                        <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Annual CTC Package</div>
                      </div>
                      <div className="hiring-card-icon-wrap">
                        <TrendingUp size={20} color="#FFFFFF" />
                      </div>
                    </motion.div>

                  </div>

                </div>

                {/* Bottom Dream Job Callout Pill */}
                <div style={{ textAlign: "center" }}>
                  <div className="hiring-bottom-pill">
                    <ShieldCheck size={18} color="#5B2E91" style={{ flexShrink: 0 }} />
                    <span>Your dream job is closer than you think. <strong style={{ color: "#5B2E91", fontWeight: "700" }}>We help you get there!</strong></span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Responsive CSS Architecture for HiringPartnersSection */

        .hiring-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.75rem, 4.5vw, 2.375rem);
          font-weight: 800;
          color: #0B1F3A;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .hiring-subtext {
          font-size: clamp(0.875rem, 1.5vw, 0.9375rem);
          color: #6B7280;
        }

        .hiring-marquee-container {
          background: #FFFFFF;
          border: 1px solid #EDE9FE;
          border-radius: 24px;
          padding: 28px 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          margin-bottom: 36px;
          overflow: hidden;
          position: relative;
        }

        .marquee-fade-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(40px, 8vw, 120px);
          z-index: 2;
          pointer-events: none;
        }
        .fade-left {
          left: 0;
          background: linear-gradient(to right, #FFFFFF 20%, rgba(255,255,255,0) 100%);
        }
        .fade-right {
          right: 0;
          background: linear-gradient(to left, #FFFFFF 20%, rgba(255,255,255,0) 100%);
        }

        .hiring-marquee-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: clamp(24px, 4vw, 60px);
        }

        .hiring-logo-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 14px;
          background: #F8FAFC;
          border: 1px solid #F1F5F9;
          white-space: nowrap;
          user-select: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
          flex-shrink: 0;
        }

        .hiring-infographic-card {
          background: #FAF9FF;
          border: 1px solid #EDE9FE;
          border-radius: 28px;
          padding: 48px 40px;
          margin-bottom: 0;
          position: relative;
          box-shadow: 0 12px 36px rgba(91, 46, 145, 0.04);
        }

        .hiring-blur-curtain {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 400px;
          background: linear-gradient(90deg, rgba(250, 249, 255, 0.1) 0%, rgba(250, 249, 255, 0.65) 30%, rgba(250, 249, 255, 0.95) 100%);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 5;
          pointer-events: none;
          border-top-right-radius: 28px;
          border-bottom-right-radius: 28px;
        }

        .hiring-card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
        }

        .hiring-card-headline {
          font-size: clamp(1.25rem, 2.8vw, 1.5rem);
          font-weight: 800;
          color: #0B1F3A;
          margin: 0;
          font-family: var(--font-montserrat);
        }

        .hiring-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 36px;
          align-items: start;
          position: relative;
        }

        .hiring-section-pin-container {
          position: relative;
          min-height: auto;
          padding: clamp(32px, 4vw, 48px) 0 0;
          background: #FFFFFF;
        }

        .journey-pinned-stage {
          position: relative;
          height: auto;
          padding: 0;
          margin: 0;
        }

        .journey-sticky-wrapper {
          position: relative;
          top: auto;
          width: 100%;
        }

        .hiring-scroll-header {
          position: sticky;
          top: 0;
          background: rgba(250, 249, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding-top: 4px;
          padding-bottom: 8px;
          z-index: 5;
          margin-bottom: 8px;
        }

        .single-card-story-viewport {
          width: 100%;
          padding-right: 28px;
          position: relative;
          min-height: 220px;
          box-sizing: border-box;
        }

        .infographic-single-pill-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1.5px solid #EDE9FE;
          border-radius: 28px;
          padding: 18px 48px 18px 20px;
          position: relative;
          width: 100%;
          min-height: 220px;
          height: 220px;
          box-sizing: border-box;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .infographic-hackathon-pill {
          background: linear-gradient(180deg, #FFFDF5 0%, #FFFFFF 100%);
          border-color: #FDE68A !important;
        }

        .card-left-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-right: 16px;
          box-shadow: 0 6px 16px rgba(11, 31, 58, 0.12);
        }

        .card-middle-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }

        .card-step-tag {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .card-step-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 15.5px;
          font-weight: 800;
          color: #0B1F3A;
          margin: 1px 0 2px;
          letter-spacing: -0.01em;
        }

        .card-step-desc {
          font-size: 12px;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
          font-weight: 450;
        }

        .card-right-node-circle {
          position: absolute;
          right: -22px;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 16px;
          font-weight: 800;
          border: 3px solid #FFFFFF;
          box-shadow: 0 4px 16px rgba(11, 31, 58, 0.18);
          z-index: 4;
        }

        .infographic-skill-pill {
          font-size: 10px;
          font-weight: 600;
          color: #475569;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .journey-hackathon-block {
          width: 100%;
          background: #FEF3C7;
          border: 1px solid #FDE68A;
          border-radius: 12px;
          padding: 8px 10px;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hiring-premium-scroll-indicator {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 8px 16px;
          margin-top: 14px;
          margin-bottom: 6px;
          width: 100%;
          background: linear-gradient(135deg, rgba(243, 232, 255, 0.9) 0%, rgba(238, 242, 255, 0.9) 100%);
          border: 1px solid #DDD6FE;
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(91, 46, 145, 0.06);
          position: sticky;
          bottom: 0;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 5;
        }

        .scroll-mouse-pill {
          width: 13px;
          height: 20px;
          border: 1.8px solid #7A42BE;
          border-radius: 9999px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 2px;
          flex-shrink: 0;
        }

        .scroll-wheel-dot {
          width: 3px;
          height: 5px;
          background: #7A42BE;
          border-radius: 9999px;
          animation: mouseWheelScroll 1.6s infinite ease-in-out;
        }

        @keyframes mouseWheelScroll {
          0% { opacity: 1; transform: translateY(0); }
          60% { opacity: 0.2; transform: translateY(7px); }
          100% { opacity: 0; transform: translateY(9px); }
        }

        .scroll-indicator-label {
          font-size: 10.5px;
          font-weight: 800;
          color: #5B2E91;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .scroll-chevron-bounce {
          color: #7A42BE;
          animation: chevronBounce 1.5s infinite ease-in-out;
          flex-shrink: 0;
        }

        @keyframes chevronBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        .hiring-dial-stage {
          position: sticky;
          top: 24px;
          align-self: start;
          display: flex;
          justify-content: flex-end;
          min-height: 480px;
          align-items: center;
          z-index: 10;
        }

        /* Circular Ring SVG Dial Wrapper - Size UNCHANGED (560px x 560px, r=280) */
        .hiring-svg-dial-wrapper {
          position: absolute;
          top: 50%;
          right: 170px;
          transform: translateY(-50%);
          width: 560px;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 2;
        }

        .hiring-ambient-orb {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(122, 66, 190, 0.85) 0%, rgba(91, 46, 145, 0.5) 55%, rgba(91, 46, 145, 0) 100%);
          filter: blur(32px);
          z-index: 0;
        }

        .hiring-cards-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 330px;
        }

        .hiring-frosted-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(237, 233, 254, 0.8);
          border-radius: 22px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 14px 35px rgba(91, 46, 145, 0.06);
        }

        .hiring-card-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          box-shadow: 0 6px 18px rgba(91, 46, 145, 0.35);
          flex-shrink: 0;
        }

        .hiring-bottom-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FAF8FF;
          border: 1px solid #E9D5FF;
          padding: 10px 24px;
          border-radius: 9999px;
          font-size: 13.5px;
          color: #374151;
        }

        /* Laptop Breakpoint (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1024px) {
          .hiring-infographic-card {
            padding: 36px 30px;
          }
          .hiring-blur-curtain {
            width: 280px;
          }
        }

        /* Tablet Breakpoint (768px to 1023px) */
        @media (max-width: 1023px) {
          .hiring-infographic-card {
            padding: 32px 24px;
            border-radius: 24px;
          }
          .hiring-blur-curtain {
            display: none;
          }
          .hiring-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .hiring-stats-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .hiring-dial-stage {
            min-height: auto;
            justify-content: center;
          }
          .hiring-cards-list {
            max-width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        /* Mobile Breakpoint (Below 768px) */
        @media (max-width: 767px) {
          .hiring-infographic-card {
            padding: 24px 14px;
            border-radius: 20px;
            margin-bottom: 28px;
          }
          .hiring-blur-curtain {
            display: none;
          }
          .hiring-card-top-bar {
            margin-bottom: 24px;
          }
          .hiring-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .single-card-story-viewport {
            padding-right: 18px !important;
            min-height: auto !important;
          }
          .infographic-single-pill-card {
            height: auto !important;
            min-height: auto !important;
            padding: 16px 36px 16px 14px !important;
            border-radius: 20px !important;
          }
          .card-left-icon-wrap {
            width: 40px !important;
            height: 40px !important;
            margin-right: 12px !important;
            border-radius: 12px !important;
          }
          .card-step-title {
            font-size: 13.5px !important;
          }
          .card-step-desc {
            font-size: 11px !important;
          }
          .card-right-node-circle {
            right: -16px !important;
            width: 36px !important;
            height: 36px !important;
            font-size: 13px !important;
          }
          .hiring-stats-col {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .hiring-stat-desc {
            max-width: 100%;
          }
          .hiring-dial-stage {
            min-height: auto;
            justify-content: center;
          }
          .hiring-cards-list {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .hiring-frosted-card {
            padding: 14px 18px;
            border-radius: 16px;
          }
          .hiring-bottom-pill {
            padding: 10px 18px;
            font-size: 12.5px;
            text-align: center;
          }
        }

        /* Small Mobile Devices (<= 480px) */
        @media (max-width: 480px) {
          .hiring-infographic-card {
            padding: 18px 10px !important;
            border-radius: 16px !important;
          }
          .single-card-story-viewport {
            padding-right: 14px !important;
          }
          .infographic-single-pill-card {
            padding: 14px 28px 14px 10px !important;
            border-radius: 16px !important;
          }
          .card-left-icon-wrap {
            width: 34px !important;
            height: 34px !important;
            margin-right: 8px !important;
            border-radius: 10px !important;
          }
          .card-step-tag {
            font-size: 9px !important;
          }
          .card-step-title {
            font-size: 12.5px !important;
          }
          .card-step-desc {
            font-size: 10.5px !important;
          }
          .card-right-node-circle {
            right: -14px !important;
            width: 30px !important;
            height: 30px !important;
            font-size: 11px !important;
            border-width: 2px !important;
          }
          .infographic-skill-pill {
            font-size: 9px !important;
            padding: 2px 5px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hiring-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

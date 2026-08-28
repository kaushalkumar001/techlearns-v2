"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Crisp Inline Vector SVG Icons matching brand aesthetic
const GraduationCapIcon = ({ color = "#5B2E91", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const UsersIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BriefcaseIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const TrendingUpIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ShieldIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const BuildingIcon = ({ color = "#FFFFFF", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
  </svg>
);

const HeartIcon = ({ color = "#FFFFFF", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Specific Icons for Course Stats Carousel
const CodeIcon = ({ color = "#6D28D9", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const BarChartIcon = ({ color = "#0284C7", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const CpuIcon = ({ color = "#7C3AED", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
  </svg>
);

const ShieldCheckIcon = ({ color = "#059669", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const MegaphoneIcon = ({ color = "#D97706", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

// Course Stats Data Array for Carousel (5 courses, showing 3 at a time)
const COURSE_STATS = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    stat: "12K+ Enrolled",
    badge: "94% Placement",
    iconColor: "#6D28D9",
    iconBg: "#F3EEFF",
    Icon: CodeIcon,
    cardGradient: "linear-gradient(140deg, #8B5CF6 0%, #6D28D9 55%, #5B21B6 100%)",
    glowColor: "rgba(109, 40, 217, 0.35)",
    borderColor: "rgba(139, 92, 246, 0.35)"
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    stat: "8.5K+ Enrolled",
    badge: "High Demand",
    iconColor: "#0284C7",
    iconBg: "#E0F2FE",
    Icon: BarChartIcon,
    cardGradient: "linear-gradient(140deg, #38BDF8 0%, #0284C7 55%, #0369A1 100%)",
    glowColor: "rgba(2, 132, 199, 0.35)",
    borderColor: "rgba(56, 189, 248, 0.35)"
  },
  {
    id: "data-science",
    title: "Data Science & Algorithms",
    stat: "15K+ Enrolled",
    badge: "AI & ML Track",
    iconColor: "#7C3AED",
    iconBg: "#F3E8FF",
    Icon: CpuIcon,
    cardGradient: "linear-gradient(140deg, #A855F7 0%, #7C3AED 55%, #4C1D95 100%)",
    glowColor: "rgba(124, 58, 237, 0.35)",
    borderColor: "rgba(168, 85, 247, 0.35)"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    stat: "6.2K+ Enrolled",
    badge: "Ethical Hacking",
    iconColor: "#059669",
    iconBg: "#D1FAE5",
    Icon: ShieldCheckIcon,
    cardGradient: "linear-gradient(140deg, #34D399 0%, #059669 55%, #047857 100%)",
    glowColor: "rgba(5, 150, 105, 0.35)",
    borderColor: "rgba(52, 211, 153, 0.35)"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    stat: "10K+ Enrolled",
    badge: "Growth & SEO",
    iconColor: "#D97706",
    iconBg: "#FEF3C7",
    Icon: MegaphoneIcon,
    cardGradient: "linear-gradient(140deg, #FBBF24 0%, #D97706 55%, #92400E 100%)",
    glowColor: "rgba(217, 119, 6, 0.35)",
    borderColor: "rgba(251, 191, 36, 0.35)"
  },
];

// Smooth Apple-like physics curve
const smoothEasing = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const [activeOffset, setActiveOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOffset((prev) => (prev + 1) % COURSE_STATS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Pick 3 courses starting from activeOffset
  const visibleCourses = [
    COURSE_STATS[activeOffset % COURSE_STATS.length],
    COURSE_STATS[(activeOffset + 1) % COURSE_STATS.length],
    COURSE_STATS[(activeOffset + 2) % COURSE_STATS.length],
  ];

  const activeCourse = visibleCourses[0];

  const CourseIcon0 = visibleCourses[0].Icon;
  const CourseIcon1 = visibleCourses[1].Icon;
  const CourseIcon2 = visibleCourses[2].Icon;

  return (
    <section
      aria-label="Hero Section"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #FBF9FF 0%, #F5F0FF 50%, #FAF8FF 100%)",
        padding: "0 0 48px",
        marginTop: "0",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Main Grid: Left Column Text & Right Visual Stage */}
        <div className="hero-top-grid">

          {/* Left Column Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEasing }}
            className="hero-text-block"
          >
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: smoothEasing }}
              style={{ marginBottom: "14px" }}
            >
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
                India’s First
              </div>
              <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: smoothEasing }}
              className="hero-headline"
            >
              Corporate Experience<br />
              <span style={{ color: "#5B2E91", display: "inline-block" }}>
                Learning
              </span><br />
              Growth Ecosystem
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: smoothEasing }}
              className="hero-subtext"
            >
              Empowering teams with industry-relevant skills, expert mentorship and real-world learning.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: smoothEasing }}
              className="hero-actions"
            >
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.97 }} className="hero-btn-wrap">
                <Link
                  href="/programs"
                  className="hero-primary-btn"
                >
                  Explore Programs →
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.97 }} className="hero-btn-wrap">
                <Link
                  href="/contact"
                  className="hero-secondary-btn"
                >
                  <span style={{ fontSize: "16px", lineHeight: "1" }}>↓</span> Download Dossier
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Visual Stage Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEasing }}
            className="hero-visual-stage"
          >

            {/* Outer Translucent Glass Frame with Dynamic Border */}
            <motion.div
              animate={{
                borderColor: activeCourse.borderColor
              }}
              transition={{ duration: 0.8 }}
              className="hero-card-glass-border"
            />

            {/* Solid Tilted Card with Dynamic Course Background & Student Cutout */}
            <motion.div
              animate={{
                background: activeCourse.cardGradient,
                boxShadow: `0 25px 50px -12px ${activeCourse.glowColor}`
              }}
              transition={{ duration: 0.8 }}
              className="hero-card-frame"
            >
              {/* Subtle inner pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.15,
                  backgroundImage: `radial-gradient(circle at 50% 30%, #FFFFFF 1px, transparent 1px)`,
                  backgroundSize: "16px 16px"
                }}
              />

              {/* Student Cutout image */}
              <img
                src="/images/hero_student_nobg.png"
                alt="TechLearns Fellow Professional"
                className="hero-student-img"
              />
            </motion.div>

            {/* Floating Course Badge 1: Top Right */}
            <AnimatePresence mode="wait">
              <motion.div
                key={visibleCourses[0].id + "-slot1"}
                initial={{ opacity: 0, y: 10, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.94 }}
                transition={{ duration: 0.45, ease: smoothEasing }}
                className="hero-badge hero-badge-1"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: visibleCourses[0].iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CourseIcon0 color={visibleCourses[0].iconColor} size={15} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.25", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {visibleCourses[0].title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                      <span style={{ fontSize: "10px", fontWeight: "700", color: visibleCourses[0].iconColor }}>
                        {visibleCourses[0].stat}
                      </span>
                      <span style={{ fontSize: "8.5px", fontWeight: "600", background: "#F1F5F9", color: "#475569", padding: "1px 4px", borderRadius: "4px" }}>
                        {visibleCourses[0].badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Course Badge 2: Middle Left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={visibleCourses[1].id + "-slot2"}
                initial={{ opacity: 0, y: 10, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.94 }}
                transition={{ duration: 0.45, delay: 0.08, ease: smoothEasing }}
                className="hero-badge hero-badge-2"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: visibleCourses[1].iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CourseIcon1 color={visibleCourses[1].iconColor} size={15} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.25", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {visibleCourses[1].title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                      <span style={{ fontSize: "10px", fontWeight: "700", color: visibleCourses[1].iconColor }}>
                        {visibleCourses[1].stat}
                      </span>
                      <span style={{ fontSize: "8.5px", fontWeight: "600", background: "#F1F5F9", color: "#475569", padding: "1px 4px", borderRadius: "4px" }}>
                        {visibleCourses[1].badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Course Badge 3: Bottom Right */}
            <AnimatePresence mode="wait">
              <motion.div
                key={visibleCourses[2].id + "-slot3"}
                initial={{ opacity: 0, y: 10, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.94 }}
                transition={{ duration: 0.45, delay: 0.15, ease: smoothEasing }}
                className="hero-badge hero-badge-3"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: visibleCourses[2].iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CourseIcon2 color={visibleCourses[2].iconColor} size={15} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.25", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {visibleCourses[2].title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                      <span style={{ fontSize: "10px", fontWeight: "700", color: visibleCourses[2].iconColor }}>
                        {visibleCourses[2].stat}
                      </span>
                      <span style={{ fontSize: "8.5px", fontWeight: "600", background: "#F1F5F9", color: "#475569", padding: "1px 4px", borderRadius: "4px" }}>
                        {visibleCourses[2].badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>

        {/* Middle Feature Cards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: smoothEasing }}
          className="hero-feature-bar"
        >
          {/* Feature 1 */}
          <div className="hero-feature-item">
            <div className="hero-feature-icon">
              <GraduationCapIcon color="#6D28D9" size={20} />
            </div>
            <div>
              <h2 className="hero-feature-title">Expert-Led Training</h2>
              <p className="hero-feature-desc">Learn from industry professionals</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="hero-feature-item hero-feature-border">
            <div className="hero-feature-icon">
              <BriefcaseIcon color="#6D28D9" size={20} />
            </div>
            <div>
              <h2 className="hero-feature-title">Job-Ready Skills</h2>
              <p className="hero-feature-desc">Build practical skills that employers value</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="hero-feature-item hero-feature-border">
            <div className="hero-feature-icon">
              <TrendingUpIcon color="#6D28D9" size={20} />
            </div>
            <div>
              <h2 className="hero-feature-title">Measurable Impact</h2>
              <p className="hero-feature-desc">Boost productivity and business growth</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="hero-feature-item hero-feature-border">
            <div className="hero-feature-icon">
              <ShieldIcon color="#6D28D9" size={20} />
            </div>
            <div>
              <h2 className="hero-feature-title">End-to-End Support</h2>
              <p className="hero-feature-desc">From learning to placement</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Dark Purple Stats & Corporate Partners Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: smoothEasing }}
          className="hero-stats-banner"
        >
          {/* Left Stats Section */}
          <div className="hero-stats-grid">

            {/* Stat 1 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <GraduationCapIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div className="hero-stat-value">50+</div>
                <div className="hero-stat-label">Programs</div>
              </div>
            </div>

            <div className="hero-stat-divider" />

            {/* Stat 2 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <BuildingIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div className="hero-stat-value">200+</div>
                <div className="hero-stat-label">Corporate Clients</div>
              </div>
            </div>

            <div className="hero-stat-divider" />

            {/* Stat 3 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <UsersIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div className="hero-stat-value">10K+</div>
                <div className="hero-stat-label">Professionals Trained</div>
              </div>
            </div>

            <div className="hero-stat-divider" />

            {/* Stat 4 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <HeartIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div className="hero-stat-value">95%</div>
                <div className="hero-stat-label">Satisfaction Rate</div>
              </div>
            </div>

          </div>

          {/* Right Section: Laurel Wreaths + Corporate Logos */}
          <div className="hero-laurel-section">

            {/* Left Laurel Wreath SVG */}
            <svg width="22" height="38" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 6C15 10 12 16 12 24C12 30 15 36 20 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8C8 6 4 9 6 13C8 17 12 18 12 18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 16C6 15 3 19 6 23C9 26 12 26 12 26" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 24C7 24 5 29 8 32C11 34 14 32 14 32" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <div style={{ textAlign: "center" }}>
              <div className="hero-laurel-title">
                Trusted by<br />Leading Companies
              </div>
              <div className="hero-laurel-logos">
                <span className="hero-company-tcs">tcs</span>
                <span className="hero-company-info">Infosys</span>
                <span className="hero-company-wipro">wipro</span>
                <span className="hero-company-more">&amp; more</span>
              </div>
            </div>

            {/* Right Laurel Wreath SVG */}
            <svg width="22" height="38" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }} aria-hidden="true">
              <path d="M18 6C15 10 12 16 12 24C12 30 15 36 20 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8C8 6 4 9 6 13C8 17 12 18 12 18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 16C6 15 3 19 6 23C9 26 12 26 12 26" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 24C7 24 5 29 8 32C11 34 14 32 14 32" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

          </div>

        </motion.div>

      </div>

      <style jsx global>{`
        /* Fully Responsive CSS Architecture for HeroSection */

        .hero-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 4vw, 56px);
          align-items: center;
          margin-bottom: clamp(28px, 4vw, 48px);
          padding-top: 0px !important;
          margin-top: 0px !important;
        }

        .hero-headline {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.75rem, 4.2vw, 3.125rem);
          font-weight: 800;
          color: #0B1F3A;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 20px;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .hero-subtext {
          font-size: clamp(0.875rem, 1.3vw, 1rem);
          color: #64748B;
          line-height: 1.6;
          max-width: 490px;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-primary-btn {
          background: linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%);
          color: #FFFFFF;
          padding: 16px 32px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 50px;
          box-shadow: 0 12px 30px rgba(109, 40, 217, 0.3);
          transition: background 0.2s ease;
        }

        .hero-secondary-btn {
          background: #FFFFFF;
          border: 1.5px solid #6D28D9;
          color: #6D28D9;
          padding: 16px 28px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 50px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .hero-visual-stage {
          position: relative;
          height: clamp(380px, 35vw, 480px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-card-glass-border {
          position: absolute;
          width: clamp(260px, 32vw, 360px);
          height: clamp(340px, 42vw, 460px);
          border-radius: 44px;
          border: 2px solid rgba(139, 92, 246, 0.25);
          transform: rotate(-10deg);
          z-index: 1;
          pointer-events: none;
        }

        .hero-card-frame {
          position: relative;
          width: clamp(240px, 30vw, 340px);
          height: clamp(320px, 40vw, 440px);
          border-radius: 36px;
          transform: rotate(-10deg);
          overflow: hidden;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          transition: background 0.8s ease, box-shadow 0.8s ease;
        }

        .hero-student-img {
          width: 115%;
          height: 122%;
          object-fit: contain;
          object-position: center bottom;
          transform: rotate(10deg) translateY(-24px) scale(1.15);
          z-index: 3;
          filter: drop-shadow(0 12px 25px rgba(0, 0, 0, 0.2));
        }

        .hero-badge {
          position: absolute;
          z-index: 10;
          background: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 16px 36px rgba(11, 31, 58, 0.1), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(226, 232, 240, 0.9);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .hero-badge-1 {
          top: 15px;
          right: -25px;
          padding: 12px 16px;
          min-width: 180px;
          max-width: 240px;
        }

        .hero-badge-2 {
          bottom: 70px;
          left: -35px;
          padding: 12px 16px;
          min-width: 175px;
          max-width: 235px;
        }

        .hero-badge-3 {
          bottom: 35px;
          right: -25px;
          padding: 12px 16px;
          min-width: 180px;
          max-width: 240px;
        }

        .hero-feature-bar {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 24px 32px;
          box-shadow: 0 15px 40px rgba(109, 40, 217, 0.06);
          border: 1px solid #EDE9FE;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 28px;
        }

        .hero-feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .hero-feature-border {
          border-left: 1px solid #F1F5F9;
          padding-left: 24px;
        }

        .hero-feature-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #F3EEFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-feature-title {
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 2px;
          line-height: 1.25;
        }

        .hero-feature-desc {
          font-size: 12px;
          color: #64748B;
          margin: 0;
          line-height: 1.35;
        }

        .hero-stats-banner {
          background: linear-gradient(135deg, #2E1065 0%, #4C1D95 50%, #5B21B6 100%);
          border-radius: 20px;
          padding: 20px 32px;
          color: #FFFFFF;
          box-shadow: 0 15px 35px rgba(46, 16, 101, 0.25);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .hero-stats-grid {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .hero-stat-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-stat-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-stat-value {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
          margin-top: 3px;
        }

        .hero-stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.15);
        }

        .hero-laurel-section {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hero-laurel-title {
          font-size: 10px;
          font-weight: 700;
          color: #FDE68A;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 4px;
        }

        .hero-laurel-logos {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }

        .hero-company-tcs {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: -0.03em;
          color: #FFFFFF;
        }

        .hero-company-info {
          font-weight: 700;
          font-size: 12.5px;
          color: #FFFFFF;
        }

        .hero-company-wipro {
          font-weight: 700;
          font-size: 12.5px;
          color: #FFFFFF;
        }

        .hero-company-more {
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 500;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS & MOBILE SCALING
        ---------------------------------------------------- */

        /* Large Desktop (1920px+) */
        @media (min-width: 1920px) {
          .hero-headline {
            font-size: 3.25rem;
          }
          .hero-subtext {
            font-size: 1.1rem;
            max-width: 540px;
          }
        }

        /* Standard Desktop / Large Laptop (1280px to 1439px) */
        @media (max-width: 1439px) and (min-width: 1280px) {
          .hero-badge-1 {
            right: -10px;
          }
          .hero-badge-2 {
            left: -15px;
          }
          .hero-badge-3 {
            right: -10px;
          }
        }

        /* Laptop (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1024px) {
          .hero-top-grid {
            gap: 32px;
          }
          .hero-visual-stage {
            height: 440px;
          }
          .hero-badge-1 {
            right: 0;
            padding: 10px 14px;
            max-width: 210px;
          }
          .hero-badge-2 {
            left: 0;
            padding: 10px 14px;
            max-width: 205px;
          }
          .hero-badge-3 {
            right: 0;
            padding: 10px 14px;
            max-width: 210px;
          }
          .hero-feature-bar {
            padding: 20px 24px;
            gap: 16px;
          }
          .hero-feature-border {
            padding-left: 16px;
          }
        }

        /* Tablet Landscape & Portrait (768px to 1023px) */
        @media (max-width: 1023px) {
          .hero-top-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
            margin-bottom: 32px;
            padding-top: 0px !important;
          }
          .hero-text-block {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtext {
            max-width: 90%;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual-stage {
            height: 400px;
            margin-top: 10px;
          }
          .hero-badge-1 {
            right: 4%;
            top: 10px;
          }
          .hero-badge-2 {
            left: 4%;
            bottom: 85px;
          }
          .hero-badge-3 {
            right: 4%;
            bottom: 15px;
          }
          .hero-feature-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 18px 20px;
          }
          .hero-feature-title {
            font-size: 13px !important;
          }
          .hero-feature-desc {
            font-size: 11.5px !important;
          }
          .hero-feature-border:nth-child(3) {
            border-left: none;
            padding-left: 0;
          }
          .hero-stats-banner {
            justify-content: center;
            padding: 18px 20px;
          }
          .hero-stats-grid {
            justify-content: center;
          }
          .hero-stat-value {
            font-size: 16px !important;
          }
          .hero-stat-label {
            font-size: 10.5px !important;
          }
        }

        /* Mobile Breakpoint (<768px) */
        @media (max-width: 767px) {
          .hero-top-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            text-align: center;
            margin-bottom: 24px;
            padding-top: 0px !important;
          }
          .hero-text-block {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-headline {
            font-size: clamp(1.65rem, 6.8vw, 2.25rem);
            margin-bottom: 12px;
            line-height: 1.2;
          }
          .hero-subtext {
            width: 100%;
            font-size: 13.5px;
            margin-bottom: 18px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .hero-btn-wrap {
            width: 100%;
          }
          .hero-primary-btn, .hero-secondary-btn {
            width: 100%;
            justify-content: center;
            min-height: 46px;
            padding: 12px 18px;
            font-size: 14px;
          }
          .hero-visual-stage {
            height: 370px;
            margin-top: 5px;
          }
          .hero-card-glass-border {
            width: 220px;
            height: 285px;
            border-radius: 32px;
          }
          .hero-card-frame {
            width: 200px;
            height: 265px;
            border-radius: 28px;
          }
          .hero-badge-1 {
            right: 0px;
            top: 0px;
            padding: 7px 10px;
            max-width: 165px;
            min-width: 130px;
          }
          .hero-badge-2 {
            left: 0px;
            bottom: 90px;
            padding: 7px 10px;
            max-width: 160px;
            min-width: 125px;
          }
          .hero-badge-3 {
            right: 0px;
            bottom: 5px;
            padding: 7px 10px;
            max-width: 165px;
            min-width: 130px;
          }

          /* Explicit Scaled Feature Card Typography for Phone & Mobile */
          .hero-feature-bar {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            padding: 14px 16px !important;
            border-radius: 16px !important;
            margin-bottom: 20px !important;
          }
          .hero-feature-item {
            gap: 10px !important;
          }
          .hero-feature-icon {
            width: 36px !important;
            height: 36px !important;
            min-width: 36px !important;
            border-radius: 10px !important;
          }
          .hero-feature-title {
            font-size: 12.5px !important;
            font-weight: 700 !important;
            margin-bottom: 1px !important;
            line-height: 1.25 !important;
          }
          .hero-feature-desc {
            font-size: 11px !important;
            line-height: 1.3 !important;
          }
          .hero-feature-border {
            border-left: none !important;
            border-top: 1px solid #F1F5F9 !important;
            padding-left: 0 !important;
            padding-top: 10px !important;
          }

          /* Explicit Scaled Bottom Stats Banner Typography for Phone & Mobile */
          .hero-stats-banner {
            padding: 14px 16px !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 14px !important;
            border-radius: 16px !important;
          }
          .hero-stats-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px 8px !important;
            width: 100% !important;
          }
          .hero-stat-cell {
            gap: 8px !important;
          }
          .hero-stat-icon {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
            border-radius: 8px !important;
          }
          .hero-stat-value {
            font-size: 15px !important;
            font-weight: 800 !important;
          }
          .hero-stat-label {
            font-size: 10px !important;
            margin-top: 2px !important;
          }
          .hero-stat-divider {
            display: none !important;
          }
          .hero-laurel-section {
            width: 100% !important;
            justify-content: center !important;
            border-top: 1px solid rgba(255, 255, 255, 0.15) !important;
            padding-top: 10px !important;
            gap: 10px !important;
          }
          .hero-laurel-title {
            font-size: 9px !important;
            margin-bottom: 2px !important;
          }
          .hero-laurel-logos {
            gap: 10px !important;
          }
          .hero-company-tcs {
            font-size: 12px !important;
          }
          .hero-company-info, .hero-company-wipro {
            font-size: 11px !important;
          }
          .hero-company-more {
            font-size: 9.5px !important;
          }
        }

        /* Small Mobile Devices (<= 480px) */
        @media (max-width: 480px) {
          .hero-headline {
            font-size: clamp(1.45rem, 6.5vw, 1.85rem) !important;
          }
          .hero-visual-stage {
            height: 340px !important;
          }
          .hero-card-glass-border {
            width: 195px !important;
            height: 255px !important;
          }
          .hero-card-frame {
            width: 180px !important;
            height: 240px !important;
          }
          .hero-badge-1 {
            right: -2px !important;
            top: 0px !important;
            padding: 6px 8px !important;
            max-width: 150px !important;
          }
          .hero-badge-2 {
            left: -2px !important;
            bottom: 80px !important;
            padding: 6px 8px !important;
            max-width: 145px !important;
          }
          .hero-badge-3 {
            right: -2px !important;
            bottom: 2px !important;
            padding: 6px 8px !important;
            max-width: 150px !important;
          }
          .hero-feature-bar {
            padding: 12px 12px !important;
            gap: 8px !important;
          }
          .hero-feature-icon {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
            border-radius: 8px !important;
          }
          .hero-feature-title {
            font-size: 11.5px !important;
          }
          .hero-feature-desc {
            font-size: 10px !important;
          }

          /* Bottom Stats Banner Small Phone Scaling */
          .hero-stats-banner {
            padding: 12px 12px !important;
            gap: 10px !important;
          }
          .hero-stat-cell {
            gap: 6px !important;
          }
          .hero-stat-icon {
            width: 28px !important;
            height: 28px !important;
            min-width: 28px !important;
            border-radius: 7px !important;
          }
          .hero-stat-value {
            font-size: 14px !important;
          }
          .hero-stat-label {
            font-size: 9.5px !important;
          }
          .hero-laurel-title {
            font-size: 8.5px !important;
          }
          .hero-company-tcs {
            font-size: 11px !important;
          }
          .hero-company-info, .hero-company-wipro {
            font-size: 10px !important;
          }
          .hero-company-more {
            font-size: 9px !important;
          }
        }

        /* Ultra Compact Screens (<= 360px) */
        @media (max-width: 360px) {
          .hero-headline {
            font-size: 1.35rem !important;
          }
          .hero-visual-stage {
            height: 320px !important;
          }
          .hero-card-glass-border {
            width: 175px !important;
            height: 230px !important;
          }
          .hero-card-frame {
            width: 160px !important;
            height: 215px !important;
          }
          .hero-badge-1 {
            right: -5px !important;
            top: 0px !important;
            max-width: 135px !important;
          }
          .hero-badge-2 {
            left: -5px !important;
            bottom: 70px !important;
            max-width: 130px !important;
          }
          .hero-badge-3 {
            right: -5px !important;
            bottom: 0px !important;
            max-width: 135px !important;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }

        /* Prefers Reduced Motion Accessibility Override */
        @media (prefers-reduced-motion: reduce) {
          .hero-badge-1, .hero-badge-2, .hero-badge-3 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

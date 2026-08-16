"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Crisp Inline Vector SVG Icons matching reference image perfectly
const GraduationCapIcon = ({ color = "#5B2E91", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const UsersIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BriefcaseIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const TrendingUpIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ShieldIcon = ({ color = "#5B2E91", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const SparkleIcon = ({ color = "#5B2E91", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const BuildingIcon = ({ color = "#FFFFFF", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
  </svg>
);

const HeartIcon = ({ color = "#FFFFFF", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const StarIcon = ({ color = "#6D28D9", size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Easing physics curve for Apple-like smooth animation
const smoothEasing = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #FBF9FF 0%, #F5F0FF 50%, #FAF8FF 100%)",
        padding: "32px 0 40px",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Top Main Grid: Left Column Text & Right Visual Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: "48px"
          }}
        >

          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEasing }}
          >
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: smoothEasing }}
              style={{ marginBottom: "20px" }}
            >
              <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                CORPORATE LEARNING EXPERIENCE
              </div>
              <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }}></div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothEasing }}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "52px",
                fontWeight: "800",
                color: "#0B1F3A",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                marginBottom: "20px"
              }}
            >
              Corporate Learning<br />
              <span style={{ color: "#5B2E91", display: "inline-block" }}>
                Experience
              </span><br />
              that Drives Results
            </motion.h1>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: smoothEasing }}
              style={{
                fontSize: "16px",
                color: "#64748B",
                lineHeight: "1.6",
                maxWidth: "490px",
                marginBottom: "32px"
              }}
            >
              Empowering teams with industry-relevant skills, expert mentorship and real-world learning.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: smoothEasing }}
              style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/programs"
                  style={{
                    background: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",
                    color: "#FFFFFF",
                    padding: "16px 32px",
                    borderRadius: "14px",
                    fontSize: "15px",
                    fontWeight: "700",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 12px 30px rgba(109, 40, 217, 0.3)"
                  }}
                >
                  Explore Programs →
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #6D28D9",
                    color: "#6D28D9",
                    padding: "16px 28px",
                    borderRadius: "14px",
                    fontSize: "15px",
                    fontWeight: "700",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <span style={{ fontSize: "16px" }}>↓</span> Download Dossier
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Visual Stage Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: smoothEasing }}
            style={{
              position: "relative",
              height: "490px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >

            {/* Outer Translucent Glass Frame */}
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "460px",
                borderRadius: "44px",
                border: "2px solid rgba(139, 92, 246, 0.25)",
                transform: "rotate(-10deg)",
                zIndex: 1
              }}
            />

            {/* Solid Tilted Polygon Background Card with Student Cutout */}
            <div
              style={{
                position: "relative",
                width: "340px",
                height: "440px",
                borderRadius: "36px",
                background: "linear-gradient(140deg, #8B5CF6 0%, #6D28D9 55%, #5B21B6 100%)",
                boxShadow: "0 25px 50px -12px rgba(109, 40, 217, 0.35)",
                transform: "rotate(-10deg)",
                overflow: "hidden",
                zIndex: 2,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center"
              }}
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
                alt="TechLearns Student Cutout"
                style={{
                  width: "115%",
                  height: "122%",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                  transform: "rotate(10deg) translateY(-24px) scale(1.15)",
                  zIndex: 3,
                  filter: "drop-shadow(0 12px 25px rgba(0, 0, 0, 0.2))"
                }}
              />
            </div>

            {/* Floating Card 1: Top Right - AI Powered */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "20px",
                right: "-10px",
                zIndex: 10,
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px 20px",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.08)",
                border: "1px solid #F1F5F9",
                minWidth: "170px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <SparkleIcon color="#5B2E91" size={16} />
                </div>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#0B1F3A" }}>AI Powered</span>
              </div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "700", lineHeight: "1.3" }}>
                Smarter Learning.<br />
                <span style={{ color: "#64748B", fontWeight: "500" }}>Better Outcomes.</span>
              </div>
              <div style={{ width: "24px", height: "3px", background: "#5B2E91", borderRadius: "2px", marginTop: "8px" }} />
            </motion.div>

            {/* Floating Card 2: Bottom Left - 10K+ Professionals */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "75px",
                left: "-25px",
                zIndex: 10,
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "14px 20px",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.08)",
                border: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}
            >
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#5B2E91", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 15px rgba(91, 46, 145, 0.3)" }}>
                <UsersIcon color="#FFFFFF" size={20} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.1" }}>10K+</div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: "500", marginTop: "2px" }}>Professionals<br />Trained</div>
              </div>
            </motion.div>

            {/* Floating Card 3: Bottom Right - 95% Career Impact */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "45px",
                right: "-10px",
                zIndex: 10,
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "14px 20px",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.08)",
                border: "1px solid #F1F5F9",
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}
            >
              <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUpIcon color="#5B2E91" size={20} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.1" }}>95%</div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: "500", marginTop: "2px" }}>Career Impact<br />Rate</div>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Middle Feature Cards Bar (Elevated White Container) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: smoothEasing }}
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "24px 32px",
            boxShadow: "0 15px 40px rgba(109, 40, 217, 0.06)",
            border: "1px solid #EDE9FE",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "28px"
          }}
        >
          {/* Feature 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <GraduationCapIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", marginBottom: "2px" }}>Expert-Led Training</h4>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.3" }}>Learn from industry professionals</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", borderLeft: "1px solid #F1F5F9", paddingLeft: "24px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <BriefcaseIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", marginBottom: "2px" }}>Job-Ready Skills</h4>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.3" }}>Build practical skills that employers value</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", borderLeft: "1px solid #F1F5F9", paddingLeft: "24px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <TrendingUpIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", marginBottom: "2px" }}>Measurable Impact</h4>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.3" }}>Boost productivity and business growth</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", borderLeft: "1px solid #F1F5F9", paddingLeft: "24px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ShieldIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", marginBottom: "2px" }}>End-to-End Support</h4>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.3" }}>From learning to placement</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Dark Purple Stats & Corporate Partners Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: smoothEasing }}
          style={{
            background: "linear-gradient(135deg, #2E1065 0%, #4C1D95 50%, #5B21B6 100%)",
            borderRadius: "20px",
            padding: "20px 32px",
            color: "#FFFFFF",
            boxShadow: "0 15px 35px rgba(46, 16, 101, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px"
          }}
        >
          {/* Left Stats Section */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>

            {/* Stat 1 */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCapIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>50+</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", marginTop: "2px" }}>Programs</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "32px", background: "rgba(255, 255, 255, 0.15)" }}></div>

            {/* Stat 2 */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BuildingIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>200+</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", marginTop: "2px" }}>Corporate Clients</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "32px", background: "rgba(255, 255, 255, 0.15)" }}></div>

            {/* Stat 3 */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <UsersIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>10K+</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", marginTop: "2px" }}>Professionals Trained</div>
              </div>
            </div>

            <div style={{ width: "1px", height: "32px", background: "rgba(255, 255, 255, 0.15)" }}></div>

            {/* Stat 4 */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <HeartIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>95%</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", marginTop: "2px" }}>Satisfaction Rate</div>
              </div>
            </div>

          </div>

          {/* Right Section: Laurel Wreaths + Corporate Logos */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>

            {/* Left Laurel Wreath SVG */}
            <svg width="22" height="38" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6C15 10 12 16 12 24C12 30 15 36 20 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8C8 6 4 9 6 13C8 17 12 18 12 18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 16C6 15 3 19 6 23C9 26 12 26 12 26" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 24C7 24 5 29 8 32C11 34 14 32 14 32" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", fontWeight: "700", color: "#FDE68A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                Trusted by<br />Leading Companies
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontWeight: "800", fontSize: "15px", letterSpacing: "-0.03em", color: "#FFFFFF" }}>tcs</span>
                <span style={{ fontWeight: "700", fontSize: "13px", color: "#FFFFFF" }}>Infosys</span>
                <span style={{ fontWeight: "700", fontSize: "13px", color: "#FFFFFF" }}>wipro</span>
                <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "500" }}>& more</span>
              </div>
            </div>

            {/* Right Laurel Wreath SVG */}
            <svg width="22" height="38" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
              <path d="M18 6C15 10 12 16 12 24C12 30 15 36 20 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8C8 6 4 9 6 13C8 17 12 18 12 18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 16C6 15 3 19 6 23C9 26 12 26 12 26" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 24C7 24 5 29 8 32C11 34 14 32 14 32" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const SparkleIcon = ({ color = "#5B2E91", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
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

// Smooth Apple-like physics curve
const smoothEasing = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #FBF9FF 0%, #F5F0FF 50%, #FAF8FF 100%)",
        padding: "clamp(24px, 4vw, 40px) 0 clamp(32px, 5vw, 48px)",
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
              style={{ marginBottom: "16px" }}
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
                India’s First Corporate Experience Learning Ecosystem
              </div>
              <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
            </motion.div>

            {/* Main Title with Responsive clamp() */}
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

            {/* Outer Translucent Glass Frame */}
            <div className="hero-card-glass-border" />

            {/* Solid Tilted Card with Student Cutout */}
            <div className="hero-card-frame">
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
            </div>

            {/* Floating Card 1: Top Right - AI Powered */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hero-badge hero-badge-1"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <SparkleIcon color="#5B2E91" size={14} />
                </div>
                <span style={{ fontSize: "13px", fontWeight: "800", color: "#0B1F3A" }}>AI Powered</span>
              </div>
              <div style={{ fontSize: "11px", color: "#64748B", fontWeight: "700", lineHeight: "1.3" }}>
                Smarter Learning.<br />
                <span style={{ color: "#64748B", fontWeight: "500" }}>Better Outcomes.</span>
              </div>
              <div style={{ width: "20px", height: "2.5px", background: "#5B2E91", borderRadius: "2px", marginTop: "6px" }} />
            </motion.div>

            {/* Floating Card 2: Bottom Left - 10K+ Professionals */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="hero-badge hero-badge-2"
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#5B2E91", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 14px rgba(91, 46, 145, 0.3)", flexShrink: 0 }}>
                <UsersIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.1" }}>10K+</div>
                <div style={{ fontSize: "10.5px", color: "#64748B", fontWeight: "500", marginTop: "2px", lineHeight: "1.2" }}>Professionals<br />Trained</div>
              </div>
            </motion.div>

            {/* Floating Card 3: Bottom Right - 95% Career Impact */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="hero-badge hero-badge-3"
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <TrendingUpIcon color="#5B2E91" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.1" }}>95%</div>
                <div style={{ fontSize: "10.5px", color: "#64748B", fontWeight: "500", marginTop: "2px", lineHeight: "1.2" }}>Career Impact<br />Rate</div>
              </div>
            </motion.div>

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
              <GraduationCapIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 2px" }}>Expert-Led Training</h2>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.35" }}>Learn from industry professionals</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="hero-feature-item hero-feature-border">
            <div className="hero-feature-icon">
              <BriefcaseIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 2px" }}>Job-Ready Skills</h2>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.35" }}>Build practical skills that employers value</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="hero-feature-item hero-feature-border">
            <div className="hero-feature-icon">
              <TrendingUpIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 2px" }}>Measurable Impact</h2>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.35" }}>Boost productivity and business growth</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="hero-feature-item hero-feature-border">
            <div className="hero-feature-icon">
              <ShieldIcon color="#6D28D9" size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", margin: "0 0 2px" }}>End-to-End Support</h2>
              <p style={{ fontSize: "12px", color: "#64748B", margin: 0, lineHeight: "1.35" }}>From learning to placement</p>
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
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>50+</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.75)", marginTop: "3px" }}>Programs</div>
              </div>
            </div>

            <div className="hero-stat-divider" />

            {/* Stat 2 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <BuildingIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>200+</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.75)", marginTop: "3px" }}>Corporate Clients</div>
              </div>
            </div>

            <div className="hero-stat-divider" />

            {/* Stat 3 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <UsersIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>10K+</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.75)", marginTop: "3px" }}>Professionals Trained</div>
              </div>
            </div>

            <div className="hero-stat-divider" />

            {/* Stat 4 */}
            <div className="hero-stat-cell">
              <div className="hero-stat-icon">
                <HeartIcon color="#FFFFFF" size={18} />
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>95%</div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.75)", marginTop: "3px" }}>Satisfaction Rate</div>
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
              <div style={{ fontSize: "10px", fontWeight: "700", color: "#FDE68A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                Trusted by<br />Leading Companies
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
                <span style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "-0.03em", color: "#FFFFFF" }}>tcs</span>
                <span style={{ fontWeight: "700", fontSize: "12.5px", color: "#FFFFFF" }}>Infosys</span>
                <span style={{ fontWeight: "700", fontSize: "12.5px", color: "#FFFFFF" }}>wipro</span>
                <span style={{ fontSize: "10.5px", color: "rgba(255, 255, 255, 0.75)", fontWeight: "500" }}>&amp; more</span>
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
        /* Responsive CSS Architecture for HeroSection */

        /* Desktop Layout (1280px+) */
        .hero-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 48px;
        }

        .hero-headline {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(2.25rem, 4.2vw, 3.125rem);
          font-weight: 800;
          color: #0B1F3A;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 20px;
        }

        .hero-subtext {
          font-size: clamp(0.9375rem, 1.5vw, 1rem);
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
          height: 480px;
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
          background: linear-gradient(140deg, #8B5CF6 0%, #6D28D9 55%, #5B21B6 100%);
          box-shadow: 0 25px 50px -12px rgba(109, 40, 217, 0.35);
          transform: rotate(-10deg);
          overflow: hidden;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
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
          border-radius: 18px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #F1F5F9;
        }

        .hero-badge-1 {
          top: 20px;
          right: -10px;
          padding: 16px 20px;
          min-width: 165px;
        }

        .hero-badge-2 {
          bottom: 75px;
          left: -25px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hero-badge-3 {
          bottom: 45px;
          right: -10px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
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

        /* Laptop Breakpoint (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1024px) {
          .hero-top-grid {
            gap: 32px;
          }
          .hero-visual-stage {
            height: 440px;
          }
          .hero-badge-1 {
            right: 0;
            padding: 12px 16px;
          }
          .hero-badge-2 {
            left: -10px;
            padding: 12px 16px;
          }
          .hero-badge-3 {
            right: 0;
            padding: 12px 16px;
          }
          .hero-feature-bar {
            padding: 20px 24px;
            gap: 16px;
          }
          .hero-feature-border {
            padding-left: 16px;
          }
        }

        /* Tablet Breakpoint (768px to 1023px) */
        @media (max-width: 1023px) {
          .hero-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            margin-bottom: 40px;
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
            right: 10%;
          }
          .hero-badge-2 {
            left: 10%;
          }
          .hero-badge-3 {
            right: 10%;
            bottom: 30px;
          }
          .hero-feature-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 20px 24px;
          }
          .hero-feature-border:nth-child(3) {
            border-left: none;
            padding-left: 0;
          }
          .hero-stats-banner {
            justify-content: center;
            padding: 20px 24px;
          }
          .hero-stats-grid {
            justify-content: center;
          }
        }

        /* Mobile Breakpoint (Below 768px) */
        @media (max-width: 767px) {
          .hero-top-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
            margin-bottom: 36px;
          }
          .hero-text-block {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-headline {
            font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            margin-bottom: 16px;
          }
          .hero-subtext {
            width: 95%;
            font-size: 14.5px;
            margin-bottom: 24px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-btn-wrap {
            width: 100%;
          }
          .hero-primary-btn, .hero-secondary-btn {
            width: 100%;
            justify-content: center;
            min-height: 48px;
            padding: 14px 20px;
          }
          .hero-visual-stage {
            height: 340px;
            margin-top: 10px;
          }
          .hero-card-glass-border {
            width: 240px;
            height: 310px;
            border-radius: 32px;
          }
          .hero-card-frame {
            width: 220px;
            height: 290px;
            border-radius: 28px;
          }
          .hero-badge-1 {
            right: 0;
            top: 10px;
            padding: 10px 14px;
            min-width: 140px;
          }
          .hero-badge-2 {
            left: -5px;
            bottom: 45px;
            padding: 10px 14px;
            gap: 10px;
          }
          .hero-badge-3 {
            right: -5px;
            bottom: 20px;
            padding: 10px 14px;
            gap: 10px;
          }
          .hero-feature-bar {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 20px;
          }
          .hero-feature-border {
            border-left: none;
            border-top: 1px solid #F1F5F9;
            padding-left: 0;
            padding-top: 14px;
          }
          .hero-stats-banner {
            padding: 20px;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .hero-stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px 20px;
            width: 100%;
          }
          .hero-stat-divider {
            display: none;
          }
          .hero-laurel-section {
            width: 100%;
            justify-content: center;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            padding-top: 16px;
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

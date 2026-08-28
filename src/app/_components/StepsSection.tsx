"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, GraduationCap, Code2, Award, Briefcase, Sparkles } from "lucide-react";

const steps = [
  {
    stepNumber: "01",
    stepTag: "Step 01 — Enroll",
    title: "ENROLL",
    description: "Choose your program and complete a simple enrollment process.",
    icon: FileText,
    accentColor: "#5B2E91",
    secondaryColor: "#7A42BE",
    glowColor: "rgba(91, 46, 145, 0.18)"
  },
  {
    stepNumber: "02",
    stepTag: "Step 02 — Learn",
    title: "LEARN",
    description: "Attend live classes with industry experts and access learning materials.",
    icon: GraduationCap,
    accentColor: "#3B82F6",
    secondaryColor: "#60A5FA",
    glowColor: "rgba(59, 130, 246, 0.18)"
  },
  {
    stepNumber: "03",
    stepTag: "Step 03 — Practice",
    title: "PRACTICE",
    description: "Work on real-world projects and hands-on assignments.",
    icon: Code2,
    accentColor: "#0EA5E9",
    secondaryColor: "#38BDF8",
    glowColor: "rgba(14, 165, 233, 0.18)"
  },
  {
    stepNumber: "04",
    stepTag: "Step 04 — Get Certified",
    title: "GET CERTIFIED",
    description: "Earn industry-recognized certificates upon completion.",
    icon: Award,
    accentColor: "#D97706",
    secondaryColor: "#F59E0B",
    glowColor: "rgba(217, 119, 6, 0.18)"
  },
  {
    stepNumber: "05",
    stepTag: "Step 05 — Get Placed",
    title: "GET PLACED",
    description: "Apply for jobs with our dedicated placement support.",
    icon: Briefcase,
    accentColor: "#10B981",
    secondaryColor: "#34D399",
    glowColor: "rgba(16, 185, 129, 0.18)"
  }
];

export default function StepsSection() {
  return (
    <section
      id="steps"
      aria-label="Your Path to Success Section"
      className="steps-section-wrapper"
    >
      <div className="steps-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px" }}
        >
          <div className="steps-pill-tag">
            <Sparkles size={14} color="#5B2E91" />
            <span>LEARNER ROADMAP</span>
          </div>

          <h2 className="steps-main-title">
            Your Path to Success, <span className="highlight-text">Step by Step</span>
          </h2>
          <p className="steps-sub-title">
            Follow our battle-tested 5-step roadmap engineered to transition you seamlessly from a learner to an industry-ready professional.
          </p>
        </motion.div>

        {/* Infographic Connected Roadmap Timeline */}
        <div className="infographic-roadmap-stage">

          {/* Dotted Connection Lines */}
          <div className="infographic-horizontal-line" />
          <div className="infographic-vertical-line" />

          {/* 5 Circular Nodes Row / Timeline Column */}
          <div className="infographic-nodes-row">
            {steps.map((step, idx) => {
              const isTop = idx % 2 === 0; // Steps 01, 03, 05 are TOP on desktop; Steps 02, 04 are BOTTOM on desktop
              const IconComp = step.icon;

              return (
                <div
                  key={step.stepNumber}
                  className={`infographic-node-column ${isTop ? "is-top" : "is-bottom"}`}
                >

                  {/* TOP SLOT (Content for Steps 01, 03, 05 on Desktop) */}
                  <div className="infographic-slot slot-top">
                    {isTop && (
                      <motion.div
                        initial={{ opacity: 0, y: -24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="infographic-content-card"
                      >
                        <div className="infographic-card-header">
                          <IconComp size={16} color={step.accentColor} />
                          <span className="infographic-card-title" style={{ color: step.accentColor }}>
                            {step.title}
                          </span>
                        </div>
                        <p className="infographic-card-desc">{step.description}</p>

                        {/* Connecting Dot pointing down to node */}
                        <div className="infographic-dot-connector dot-bottom" style={{ background: step.accentColor }} />
                      </motion.div>
                    )}
                  </div>

                  {/* CENTER CIRCULAR NODE DISK */}
                  <div className="infographic-circle-center-wrap">

                    {/* Outer Dashed Orbit Circle Ring */}
                    <div
                      className="infographic-orbit-ring"
                      style={{ borderColor: step.accentColor }}
                    />

                    {/* Main White Circular Node Disk */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                      className="infographic-circle-disk"
                      style={{
                        borderColor: step.accentColor,
                        boxShadow: `0 10px 30px ${step.glowColor}`
                      }}
                    >
                      {/* Triangular Pointer Arrow */}
                      <div
                        className={`infographic-pointer-arrow ${isTop ? "pointer-top" : "pointer-bottom"}`}
                        style={{
                          borderBottomColor: isTop ? step.accentColor : "transparent",
                          borderTopColor: !isTop ? step.accentColor : "transparent"
                        }}
                      />

                      {/* Step Number inside Circle */}
                      <div className="infographic-node-num">
                        {step.stepNumber}
                      </div>

                      {/* Sub-label "STEP" inside Circle */}
                      <div className="infographic-node-sub" style={{ color: step.accentColor }}>
                        STEP
                      </div>
                    </motion.div>

                  </div>

                  {/* BOTTOM SLOT (Content for Steps 02, 04 on Desktop) */}
                  <div className="infographic-slot slot-bottom">
                    {!isTop && (
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="infographic-content-card"
                      >
                        {/* Connecting Dot pointing up to node */}
                        <div className="infographic-dot-connector dot-top" style={{ background: step.accentColor }} />

                        <div className="infographic-card-header">
                          <IconComp size={16} color={step.accentColor} />
                          <span className="infographic-card-title" style={{ color: step.accentColor }}>
                            {step.title}
                          </span>
                        </div>
                        <p className="infographic-card-desc">{step.description}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Line Accent */}
        <div className="steps-bottom-divider">
          <div className="divider-line line-left" />
          <div className="divider-content">
            <span style={{ color: "#5B2E91", fontWeight: "800" }}>TechLearns</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>Structured Career Progression</span>
          </div>
          <div className="divider-line line-right" />
        </div>

      </div>

      <style jsx global>{`
        .steps-section-wrapper {
          padding: clamp(40px, 6vw, 80px) 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF9FF 50%, #FFFFFF 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid #EDE9FE;
          border-bottom: 1px solid #E2E8F0;
        }

        .steps-container {
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(16px, 3vw, 24px);
        }

        .steps-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: #F3E8FF;
          border: 1px solid #DDD6FE;
          border-radius: 9999px;
          font-size: clamp(10.5px, 1.2vw, 11.5px);
          font-weight: 800;
          color: #5B2E91;
          letter-spacing: 0.06em;
          margin-bottom: 14px;
        }

        .steps-main-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #0B1F3A;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          word-break: break-word;
        }

        .steps-main-title .highlight-text {
          background: linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .steps-sub-title {
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* Infographic Stage Layout */
        .infographic-roadmap-stage {
          position: relative;
          margin: clamp(28px, 4vw, 40px) 0 clamp(36px, 5vw, 56px);
          padding: 10px 0;
        }

        /* Horizontal Center Dotted Line (Desktop) */
        .infographic-horizontal-line {
          position: absolute;
          top: 50%;
          left: 5%;
          right: 5%;
          height: 2px;
          transform: translateY(-50%);
          background: repeating-linear-gradient(
            to right,
            #CBD5E1 0,
            #CBD5E1 8px,
            transparent 8px,
            transparent 16px
          );
          z-index: 1;
        }

        /* Vertical Center Dotted Line (Mobile & Tablet) */
        .infographic-vertical-line {
          display: none;
        }

        .infographic-nodes-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: clamp(8px, 1.5vw, 16px);
          position: relative;
          z-index: 2;
        }

        .infographic-node-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        /* Slots for Alternating Content Cards */
        .infographic-slot {
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
        }

        .slot-top {
          justify-content: flex-end;
          padding-bottom: 20px;
        }

        .slot-bottom {
          justify-content: flex-start;
          padding-top: 20px;
        }

        /* Text Content Cards */
        .infographic-content-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 14px 16px;
          text-align: center;
          position: relative;
          box-shadow: 0 8px 24px rgba(11, 31, 58, 0.05);
          max-width: 220px;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .infographic-content-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(91, 46, 145, 0.1);
          border-color: #CBD5E1;
        }

        .infographic-card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .infographic-card-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .infographic-card-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* Connecting Dots */
        .infographic-dot-connector {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 8px currentColor;
        }

        .dot-bottom {
          bottom: -14px;
        }

        .dot-top {
          top: -14px;
        }

        /* Center Circle Container */
        .infographic-circle-center-wrap {
          position: relative;
          width: clamp(72px, 7vw, 96px);
          height: clamp(72px, 7vw, 96px);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 4px 0;
          flex-shrink: 0;
        }

        /* Outer Dashed Orbit Circle Ring */
        .infographic-orbit-ring {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          border: 1.8px dashed;
          opacity: 0.6;
          pointer-events: none;
          animation: spinOrbit 40s linear infinite;
        }

        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Main Circular Node Disk */
        .infographic-circle-disk {
          width: clamp(62px, 6vw, 84px);
          height: clamp(62px, 6vw, 84px);
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 3;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          cursor: pointer;
        }

        /* Triangular Pointer Arrow */
        .infographic-pointer-arrow {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .pointer-top {
          top: -9px;
          border-bottom: 8px solid;
        }

        .pointer-bottom {
          bottom: -9px;
          border-top: 8px solid;
        }

        .infographic-node-num {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 800;
          color: #0B1F3A;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .infographic-node-sub {
          font-size: clamp(7.5px, 0.8vw, 8.5px);
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }

        .steps-bottom-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          max-width: 320px;
        }

        .line-left {
          background: linear-gradient(90deg, transparent 0%, #CBD5E1 100%);
        }

        .line-right {
          background: linear-gradient(90deg, #CBD5E1 0%, transparent 100%);
        }

        .divider-content {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #64748B;
        }

        /* ----------------------------------------------------
           RESPONSIVE ARCHITECTURE (Tablet & Mobile Progression)
        ---------------------------------------------------- */

        /* Standard Desktop / Large Laptop (1280px - 1439px) */
        @media (max-width: 1439px) and (min-width: 1100px) {
          .infographic-nodes-row {
            gap: 12px;
          }
          .infographic-content-card {
            padding: 12px 14px;
          }
          .infographic-card-title {
            font-size: 12.5px;
          }
          .infographic-card-desc {
            font-size: 11px;
          }
        }

        /* Laptop (900px - 1099px) */
        @media (max-width: 1099px) and (min-width: 900px) {
          .infographic-nodes-row {
            gap: 8px;
          }
          .infographic-content-card {
            padding: 10px 12px;
            border-radius: 14px;
          }
          .infographic-card-title {
            font-size: 11.5px;
          }
          .infographic-card-desc {
            font-size: 10.5px;
          }
          .slot-top {
            padding-bottom: 14px;
          }
          .slot-bottom {
            padding-top: 14px;
          }
        }

        /* Tablet & Mobile Layout (<900px) */
        @media (max-width: 899px) {
          .infographic-horizontal-line {
            display: none;
          }

          .infographic-vertical-line {
            display: block;
            position: absolute;
            top: 40px;
            bottom: 40px;
            left: 40px;
            width: 2px;
            transform: translateX(-50%);
            background: repeating-linear-gradient(
              to bottom,
              #CBD5E1 0,
              #CBD5E1 8px,
              transparent 8px,
              transparent 16px
            );
            z-index: 1;
          }

          .infographic-nodes-row {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 620px;
            margin: 0 auto;
          }

          .infographic-node-column {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            width: 100%;
            text-align: left;
          }

          .infographic-circle-center-wrap {
            width: 80px;
            height: 80px;
            margin: 0;
            z-index: 3;
          }

          .infographic-circle-disk {
            width: 72px;
            height: 72px;
            border-width: 3px;
          }

          .infographic-node-num {
            font-size: 20px;
          }

          .infographic-node-sub {
            font-size: 8px;
          }

          .infographic-pointer-arrow {
            display: none;
          }

          .infographic-dot-connector {
            display: none;
          }

          .infographic-slot {
            min-height: auto;
            padding: 0;
            flex: 1;
          }

          .slot-top, .slot-bottom {
            justify-content: center;
          }

          .slot-top:empty, .slot-bottom:empty {
            display: none;
          }

          .infographic-content-card {
            max-width: 100%;
            text-align: left;
            padding: 14px 16px;
            border-radius: 16px;
          }

          .infographic-card-header {
            justify-content: flex-start;
          }

          .infographic-card-title {
            font-size: 13px;
          }

          .infographic-card-desc {
            font-size: 11.5px;
          }
        }

        /* Mobile / Phone Devices (<768px) */
        @media (max-width: 767px) {
          .infographic-orbit-ring {
            display: none !important;
            visibility: hidden !important;
          }
        }

        /* Mobile Devices (<= 640px) */
        @media (max-width: 640px) {
          .infographic-vertical-line {
            left: 36px;
          }

          .infographic-circle-center-wrap {
            width: 72px;
            height: 72px;
          }

          .infographic-circle-disk {
            width: 64px;
            height: 64px;
            border-width: 2.5px;
          }

          .infographic-node-num {
            font-size: 18px;
          }

          .infographic-node-sub {
            font-size: 7.5px;
          }

          .infographic-node-column {
            gap: 12px;
          }

          .infographic-content-card {
            padding: 12px 14px;
            border-radius: 14px;
          }

          .infographic-card-title {
            font-size: 12px;
          }

          .infographic-card-desc {
            font-size: 11px;
          }

          .steps-bottom-divider {
            gap: 10px;
          }

          .divider-content {
            font-size: 11px;
          }
        }

        /* Extra Small Phones (<= 380px) */
        @media (max-width: 380px) {
          .infographic-vertical-line {
            left: 30px;
          }

          .infographic-circle-center-wrap {
            width: 60px;
            height: 60px;
          }

          .infographic-circle-disk {
            width: 54px;
            height: 54px;
            border-width: 2px;
          }

          .infographic-node-num {
            font-size: 16px;
          }

          .infographic-node-sub {
            font-size: 7px;
          }

          .infographic-node-column {
            gap: 10px;
          }

          .infographic-content-card {
            padding: 10px 12px;
          }

          .infographic-card-title {
            font-size: 11.5px;
          }

          .infographic-card-desc {
            font-size: 10.5px;
          }
        }

        /* Prefers Reduced Motion Accessibility Override */
        @media (prefers-reduced-motion: reduce) {
          .infographic-orbit-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

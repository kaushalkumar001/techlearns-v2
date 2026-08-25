"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, GraduationCap, Code2, Award, Briefcase, Sparkles, ChevronRight } from "lucide-react";

const steps = [
  {
    stepNumber: "Step 01",
    stepTag: "Step 01 — Enroll",
    title: "Enroll",
    description: "Choose your program and complete a simple enrollment process.",
    icon: FileText,
    gradient: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",
    accentColor: "#7A42BE",
    glowColor: "rgba(122, 66, 190, 0.25)"
  },
  {
    stepNumber: "Step 02",
    stepTag: "Step 02 — Learn",
    title: "Learn",
    description: "Attend live classes with industry experts and access learning materials.",
    icon: GraduationCap,
    gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    accentColor: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.25)"
  },
  {
    stepNumber: "Step 03",
    stepTag: "Step 03 — Practice",
    title: "Practice",
    description: "Work on real-world projects and hands-on assignments.",
    icon: Code2,
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
    accentColor: "#0EA5E9",
    glowColor: "rgba(14, 165, 233, 0.25)"
  },
  {
    stepNumber: "Step 04",
    stepTag: "Step 04 — Get Certified",
    title: "Get Certified",
    description: "Earn industry-recognized certificates upon completion.",
    icon: Award,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)"
  },
  {
    stepNumber: "Step 05",
    stepTag: "Step 05 — Get Placed",
    title: "Get Placed",
    description: "Apply for jobs with our dedicated placement support.",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)"
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

        {/* Horizontal Timeline Container */}
        <div className="steps-timeline-stage">

          {/* Dotted Glowing Connecting Line across steps (Desktop) */}
          <div className="steps-connector-line">
            <motion.div
              className="steps-connector-pulse"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* 5 Step Cards */}
          <div className="steps-grid">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="step-card-item"
                >
                  {/* Step Badge Tag */}
                  <div className="step-tag-header">
                    <span className="step-tag-pill" style={{ color: step.accentColor, borderColor: step.glowColor }}>
                      {step.stepTag}
                    </span>
                  </div>

                  {/* Icon Node Container */}
                  <div className="step-icon-wrapper" style={{ background: step.gradient, boxShadow: `0 8px 20px ${step.glowColor}` }}>
                    <IconComponent size={24} color="#FFFFFF" strokeWidth={2.2} />
                  </div>

                  {/* Step Content */}
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-desc">{step.description}</p>

                  {/* Directional indicator for desktop except last card */}
                  {idx < steps.length - 1 && (
                    <div className="step-card-arrow" aria-hidden="true">
                      <ChevronRight size={18} color="#94A3B8" />
                    </div>
                  )}
                </motion.div>
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
          padding: clamp(48px, 6vw, 72px) 0;
          background: linear-gradient(180deg, #FAF9FF 0%, #FFFFFF 50%, #F8FAFC 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid #EDE9FE;
          border-bottom: 1px solid #E2E8F0;
        }

        .steps-container {
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
        }

        .steps-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: #F3E8FF;
          border: 1px solid #DDD6FE;
          border-radius: 9999px;
          font-size: 11.5px;
          font-weight: 800;
          color: #5B2E91;
          letter-spacing: 0.06em;
          margin-bottom: 14px;
        }

        .steps-main-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.85rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #0B1F3A;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .steps-main-title .highlight-text {
          background: linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .steps-sub-title {
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        .steps-timeline-stage {
          position: relative;
          margin-bottom: 48px;
        }

        /* Glowing Connector Line (Desktop) */
        .steps-connector-line {
          position: absolute;
          top: 86px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: repeating-linear-gradient(
            to right,
            #CBD5E1 0,
            #CBD5E1 8px,
            transparent 8px,
            transparent 16px
          );
          z-index: 1;
          pointer-events: none;
        }

        .steps-connector-pulse {
          position: absolute;
          top: -2px;
          left: 0;
          width: 80px;
          height: 7px;
          background: linear-gradient(90deg, rgba(122, 66, 190, 0) 0%, #7A42BE 50%, rgba(122, 66, 190, 0) 100%);
          border-radius: 4px;
          box-shadow: 0 0 12px #7A42BE;
        }

        /* 5 Connected Step Cards Grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .step-card-item {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid #EDE9FE;
          border-radius: 24px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(11, 31, 58, 0.04);
          transition: all 0.3s ease;
        }

        .step-card-item:hover {
          border-color: #C084FC;
          box-shadow: 0 18px 40px rgba(91, 46, 145, 0.12);
        }

        .step-tag-header {
          margin-bottom: 16px;
        }

        .step-tag-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
          background: #FFFFFF;
          border: 1px solid;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .step-icon-wrapper {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 3;
        }

        .step-card-item:hover .step-icon-wrapper {
          transform: scale(1.08) rotate(3deg);
        }

        .step-card-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: #0B1F3A;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .step-card-desc {
          font-size: 12.5px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
          font-weight: 450;
        }

        .step-card-arrow {
          position: absolute;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
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

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .steps-connector-line {
            display: none;
          }
          .step-card-arrow {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
          }
          .steps-connector-line {
            display: none;
          }
          .step-card-arrow {
            display: none;
          }
          .step-card-item {
            padding: 20px 18px;
            text-align: left;
            flex-direction: row;
            gap: 16px;
            align-items: flex-start;
          }
          .step-tag-header {
            margin-bottom: 6px;
          }
          .step-icon-wrapper {
            margin-bottom: 0;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}



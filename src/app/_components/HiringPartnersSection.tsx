"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, TrendingUp, ShieldCheck, FileText, GraduationCap, Code2, Briefcase } from "lucide-react";

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
    stepTag: "Step 01 — Enroll",
    title: "Enroll",
    description: "Choose your program and complete a simple enrollment process.",
    icon: FileText,
    accentColor: "#7A42BE",
    gradient: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",
    glowColor: "rgba(122, 66, 190, 0.25)"
  },
  {
    stepTag: "Step 02 — Learn",
    title: "Learn",
    description: "Attend live classes with industry experts and access learning materials.",
    icon: GraduationCap,
    accentColor: "#6366F1",
    gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    glowColor: "rgba(99, 102, 241, 0.25)"
  },
  {
    stepTag: "Step 03 — Practice",
    title: "Practice",
    description: "Work on real-world projects and hands-on assignments.",
    icon: Code2,
    accentColor: "#0EA5E9",
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
    glowColor: "rgba(14, 165, 233, 0.25)"
  },
  {
    stepTag: "Step 04 — Get Certified",
    title: "Get Certified",
    description: "Earn industry-recognized certificates upon completion.",
    icon: Award,
    accentColor: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    glowColor: "rgba(245, 158, 11, 0.25)"
  },
  {
    stepTag: "Step 05 — Get Placed",
    title: "Get Placed",
    description: "Apply for jobs with our dedicated placement support.",
    icon: Briefcase,
    accentColor: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    glowColor: "rgba(16, 185, 129, 0.25)"
  }
];

export default function HiringPartnersSection() {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const validLogos = partnerLogos.filter(logo => !failedLogos[logo.name]);
  const marqueeItems = [...validLogos, ...validLogos];

  return (
    <section aria-label="Hiring Partners Section" style={{ padding: "clamp(32px, 5vw, 56px) 0", background: "#FFFFFF", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 40px)" }}>
          <div style={{ fontSize: "clamp(11px, 1.2vw, 12.5px)", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto 16px" }} />

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

        {/* High-End Performance Infographic Container */}
        <div className="hiring-infographic-card">

          {/* Full-Height Frosted Glass Blur Overlay Curtain (Desktop) */}
          <div className="hiring-blur-curtain" />

          {/* 2-Column Infographic Grid: Scroll Box Left, Sticky Right */}
          <div className="hiring-grid">

            {/* Left Column: Scroll Box containing 01 Header & Your Path to Success, Step by Step Timeline */}
            <div className="hiring-stats-col hiring-scroll-box">

              {/* Sticky Header inside scroll box */}
              <div className="hiring-scroll-header">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "clamp(24px, 2.8vw, 30px)", fontWeight: "800", color: "#5B2E91", fontFamily: "var(--font-montserrat)" }}>01</span>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "#7A42BE", textTransform: "uppercase", letterSpacing: "0.06em", background: "#F3E8FF", padding: "3px 10px", borderRadius: "9999px", border: "1px solid #DDD6FE" }}>
                    Career Placement &amp; Impact
                  </span>
                </div>
                <h4 style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.35rem)", fontWeight: "800", color: "#0B1F3A", margin: "4px 0 6px", fontFamily: "var(--font-montserrat)", letterSpacing: "-0.01em" }}>
                  Your Path to Success, Step by Step
                </h4>
                <div style={{ width: "42px", height: "3px", background: "linear-gradient(90deg, #7A42BE 0%, #5B2E91 100%)", borderRadius: "2px", marginBottom: "14px" }} />
              </div>

              {/* Connected 5-Step Cards Journey Timeline inside Scroll Box */}
              <div className="journey-timeline-list">
                {journeySteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <div key={step.stepTag} className="journey-card-item">

                      {/* Subtle dotted connector line to next step */}
                      {idx < journeySteps.length - 1 && (
                        <div className="journey-card-connector" />
                      )}

                      {/* Icon Circle Container */}
                      <div className="journey-icon-wrap" style={{ background: step.gradient, boxShadow: `0 6px 16px ${step.glowColor}` }}>
                        <IconComp size={20} color="#FFFFFF" strokeWidth={2.2} />
                      </div>

                      {/* Card Content Details */}
                      <div className="journey-card-body">
                        <span className="journey-card-tag" style={{ color: step.accentColor, borderColor: step.glowColor }}>
                          {step.stepTag}
                        </span>
                        <h5 className="journey-card-title">{step.title}</h5>
                        <p className="journey-card-desc">{step.description}</p>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Scroll indicator footer */}
              <div className="hiring-scroll-indicator">
                <span>Scroll inside to explore all 5 journey steps ↓</span>
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

              {/* 4 Stacked Frosted Cards */}
              <div className="hiring-cards-list">

                {/* Card 1 */}
                <div className="hiring-frosted-card">
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>800+ Companies</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Hiring Partners</div>
                  </div>
                  <div className="hiring-card-icon-wrap">
                    <Building2 size={20} color="#FFFFFF" />
                  </div>
                </div>

                {/* Card 2 */}
                <div className="hiring-frosted-card">
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>25,000+ Placed</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Learners Career Growth</div>
                  </div>
                  <div className="hiring-card-icon-wrap">
                    <Users size={20} color="#FFFFFF" />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="hiring-frosted-card">
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>95% Placement</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Impact Success Rate</div>
                  </div>
                  <div className="hiring-card-icon-wrap">
                    <Award size={20} color="#FFFFFF" />
                  </div>
                </div>

                {/* Card 4 */}
                <div className="hiring-frosted-card">
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>32 LPA Highest</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Annual CTC Package</div>
                  </div>
                  <div className="hiring-card-icon-wrap">
                    <TrendingUp size={20} color="#FFFFFF" />
                  </div>
                </div>

              </div>

            </div>

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
          margin-bottom: 40px;
          position: relative;
          overflow: hidden;
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

        .hiring-stats-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          z-index: 10;
        }

        .hiring-scroll-box {
          max-height: 490px;
          overflow-y: auto;
          padding-right: 16px;
          scrollbar-width: thin;
          scrollbar-color: #7A42BE #F1F5F9;
          scroll-behavior: smooth;
        }

        .hiring-scroll-box::-webkit-scrollbar {
          width: 6px;
        }
        .hiring-scroll-box::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 8px;
        }
        .hiring-scroll-box::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #7A42BE 0%, #5B2E91 100%);
          border-radius: 8px;
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

        .journey-timeline-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }

        .journey-card-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #FFFFFF;
          border: 1px solid #EDE9FE;
          border-radius: 20px;
          padding: 18px 20px;
          position: relative;
          box-shadow: 0 4px 16px rgba(91, 46, 145, 0.04);
          transition: all 0.25s ease;
        }

        .journey-card-item:hover {
          border-color: #C084FC;
          box-shadow: 0 10px 24px rgba(91, 46, 145, 0.1);
          transform: translateY(-2px);
        }

        .journey-card-connector {
          position: absolute;
          left: 39px;
          top: 60px;
          bottom: -20px;
          width: 2px;
          background: repeating-linear-gradient(
            to bottom,
            #7A42BE 0,
            #7A42BE 4px,
            transparent 4px,
            transparent 8px
          );
          opacity: 0.5;
          z-index: 1;
          pointer-events: none;
        }

        .journey-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .journey-card-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .journey-card-tag {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 9999px;
          background: #FAF8FF;
          border: 1px solid;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          width: fit-content;
        }

        .journey-card-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 15.5px;
          font-weight: 800;
          color: #0B1F3A;
          margin: 2px 0 0;
        }

        .journey-card-desc {
          font-size: 12px;
          color: #64748B;
          line-height: 1.55;
          margin: 0;
          font-weight: 450;
        }

        .hiring-scroll-indicator {
          text-align: center;
          padding: 10px 0;
          font-size: 11.5px;
          font-weight: 700;
          color: #7A42BE;
          letter-spacing: 0.03em;
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
            padding: 24px 18px;
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

        @media (prefers-reduced-motion: reduce) {
          .hiring-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, TrendingUp, ShieldCheck } from "lucide-react";

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

          {/* Top Section Counter / Tag */}
          <div className="hiring-card-top-bar">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: "300", color: "#94A3B8", fontFamily: "var(--font-montserrat)" }}>01</span>
              <h3 className="hiring-card-headline">
                Career Placement &amp; Impact Performance
              </h3>
            </div>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "3px solid #E2E8F0", borderTopColor: "#5B2E91", transform: "rotate(45deg)", flexShrink: 0 }} />
          </div>

          {/* 2-Column Infographic Grid */}
          <div className="hiring-grid">

            {/* Left Column: Big Percentage Stats */}
            <div className="hiring-stats-col">

              {/* Stat 1 */}
              <div>
                <div className="hiring-stat-number">
                  800+
                </div>
                <p className="hiring-stat-desc">
                  Active Industry Partners &amp; Enterprise Networks hiring TechLearns graduates globally.
                </p>
                <div className="hiring-stat-tag">
                  From Placement Cell
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="hiring-stat-number">
                  25,000+
                </div>
                <p className="hiring-stat-desc">
                  Learners placed into Software, AI, Cloud, Cybersecurity and Data engineering roles.
                </p>
                <div className="hiring-stat-tag">
                  From Alumni Data
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="hiring-stat-number">
                  95%
                </div>
                <p className="hiring-stat-desc">
                  Career Impact Rate with average salary hikes exceeding 120% after graduation.
                </p>
                <div className="hiring-stat-tag">
                  From Verified Audit
                </div>
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
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
        }

        .hiring-stats-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          z-index: 10;
        }

        .hiring-stat-number {
          font-size: clamp(2.35rem, 5.5vw, 3.25rem);
          font-weight: 800;
          color: #0B1F3A;
          line-height: 1;
          font-family: var(--font-montserrat);
        }

        .hiring-stat-desc {
          font-size: 13px;
          color: #64748B;
          margin: 8px 0 10px;
          line-height: 1.5;
          font-weight: 500;
          max-width: 360px;
        }

        .hiring-stat-tag {
          display: inline-flex;
          padding: 4px 12px;
          background: #FFFFFF;
          border: 1px solid #EDE9FE;
          border-radius: 9999px;
          font-size: 11px;
          color: #5B2E91;
          font-weight: 700;
        }

        .hiring-dial-stage {
          position: relative;
          display: flex;
          justify-content: flex-end;
          min-height: 480px;
          align-items: center;
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

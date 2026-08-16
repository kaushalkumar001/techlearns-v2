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
    <section style={{ padding: "48px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto 16px" }}></div>

          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Get offers from <span style={{ color: "#5B2E91" }}>800+ top companies</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Our learners are placed in leading organizations and continue to excel in their careers
          </p>
        </div>

        {/* 1-Row Infinite Horizontal Marquee */}
        <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "24px", padding: "32px 0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", marginBottom: "36px", overflow: "hidden", position: "relative" }}>

          {/* Side Fade Gradient Overlays */}
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #FFFFFF 20%, rgba(255,255,255,0) 100%)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #FFFFFF 20%, rgba(255,255,255,0) 100%)", zIndex: 2, pointerEvents: "none" }} />

          {/* Continuous Marquee Track */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", width: "max-content", alignItems: "center", gap: "60px" }}
          >
            {marqueeItems.map((logo, index) => {
              return (
                <div
                  key={`${logo.name}-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 18px",
                    borderRadius: "14px",
                    background: "#F8FAFC",
                    border: "1px solid #F1F5F9",
                    fontSize: logo.fontSize,
                    fontWeight: logo.fontWeight,
                    color: logo.color,
                    fontStyle: logo.fontStyle || "normal",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                    flexShrink: 0
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

        {/* High-End Performance Infographic matching Reference Image Graphic (img2) */}
        <div
          style={{
            background: "#FAF9FF",
            border: "1px solid #EDE9FE",
            borderRadius: "28px",
            padding: "48px 40px",
            marginBottom: "40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 12px 36px rgba(91, 46, 145, 0.04)"
          }}
        >
          {/* Full-Height Frosted Glass Blur Overlay Curtain (Stretches 100% top to bottom of parent container) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "400px",
              background: "linear-gradient(90deg, rgba(250, 249, 255, 0.1) 0%, rgba(250, 249, 255, 0.65) 30%, rgba(250, 249, 255, 0.95) 100%)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              zIndex: 5,
              pointerEvents: "none"
            }}
          />

          {/* Top Section Counter / Tag */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "32px", fontWeight: "300", color: "#94A3B8", fontFamily: "var(--font-montserrat)" }}>01</span>
              <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#0B1F3A", margin: 0, fontFamily: "var(--font-montserrat)" }}>
                Career Placement &amp; Impact Performance
              </h3>
            </div>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "3px solid #E2E8F0", borderTopColor: "#5B2E91", transform: "rotate(45deg)" }} />
          </div>

          {/* 2-Column Infographic Grid matching reference image layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "40px", alignItems: "center", position: "relative" }}>

            {/* Left Column: Big Percentage Stats matching img2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", position: "relative", zIndex: 10 }}>

              {/* Stat 1 */}
              <div>
                <div style={{ fontSize: "52px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1", fontFamily: "var(--font-montserrat)" }}>
                  800+
                </div>
                <p style={{ fontSize: "13px", color: "#64748B", margin: "8px 0 10px", lineHeight: "1.5", fontWeight: "500", maxWidth: "360px" }}>
                  Active Industry Partners &amp; Enterprise Networks hiring TechLearns graduates globally.
                </p>
                <div style={{ display: "inline-flex", padding: "4px 12px", background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "9999px", fontSize: "11px", color: "#5B2E91", fontWeight: "700" }}>
                  From Placement Cell
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div style={{ fontSize: "52px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1", fontFamily: "var(--font-montserrat)" }}>
                  25,000+
                </div>
                <p style={{ fontSize: "13px", color: "#64748B", margin: "8px 0 10px", lineHeight: "1.5", fontWeight: "500", maxWidth: "360px" }}>
                  Learners placed into Software, AI, Cloud, Cybersecurity and Data engineering roles.
                </p>
                <div style={{ display: "inline-flex", padding: "4px 12px", background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "9999px", fontSize: "11px", color: "#5B2E91", fontWeight: "700" }}>
                  From Alumni Data
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div style={{ fontSize: "52px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1", fontFamily: "var(--font-montserrat)" }}>
                  95%
                </div>
                <p style={{ fontSize: "13.5px", color: "#64748B", margin: "8px 0 10px", lineHeight: "1.5", fontWeight: "500", maxWidth: "360px" }}>
                  Career Impact Rate with average salary hikes exceeding 120% after graduation.
                </p>
                <div style={{ display: "inline-flex", padding: "4px 12px", background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "9999px", fontSize: "11px", color: "#5B2E91", fontWeight: "700" }}>
                  From Verified Audit
                </div>
              </div>

            </div>

            {/* Right Column: Floating Frosted Cards & Precision SVG Dial/Leader System */}
            <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", minHeight: "480px", alignItems: "center" }}>

              {/* Precision SVG Leader Lines & Sunburst Dial matching img2 exactly */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "170px",
                  transform: "translateY(-50%)",
                  width: "560px",
                  height: "560px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  zIndex: 2
                }}
              >
                {/* Dial SVG with Dense Radial Spokes & SVG Leader Lines */}
                <svg width="700" height="560" viewBox="-260 -60 700 560" fill="none" style={{ overflow: "visible" }}>

                  {/* 3 Horizontal Leader Lines extending from Left Stats */}
                  {/* Top Leader Line to (35, 10) on r=280 circle */}
                  <line x1="-260" y1="10" x2="35" y2="10" stroke="#CBD5E1" strokeWidth="1" />
                  <circle cx="35" cy="10" r="4.5" fill="#5B2E91" stroke="#FFFFFF" strokeWidth="2" />

                  {/* Middle Leader Line to (-60, 220) on left apex of r=280 circle */}
                  <line x1="-260" y1="220" x2="-60" y2="220" stroke="#CBD5E1" strokeWidth="1" />
                  <circle cx="-60" cy="220" r="4.5" fill="#5B2E91" stroke="#FFFFFF" strokeWidth="2" />

                  {/* Bottom Leader Line to (35, 430) on r=280 circle */}
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
                <div
                  style={{
                    position: "absolute",
                    width: "380px",
                    height: "380px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(122, 66, 190, 0.85) 0%, rgba(91, 46, 145, 0.5) 55%, rgba(91, 46, 145, 0) 100%)",
                    filter: "blur(32px)",
                    zIndex: 0
                  }}
                />
              </div>

              {/* 4 Stacked Frosted Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", position: "relative", zIndex: 10, width: "100%", maxWidth: "330px" }}>

                {/* Card 1 */}
                <div style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(237, 233, 254, 0.8)", borderRadius: "22px", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 14px 35px rgba(91, 46, 145, 0.06)" }}>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>800+ Companies</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Hiring Partners</div>
                  </div>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 6px 18px rgba(91, 46, 145, 0.35)", flexShrink: 0 }}>
                    <Building2 size={20} color="#FFFFFF" />
                  </div>
                </div>

                {/* Card 2 */}
                <div style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(237, 233, 254, 0.8)", borderRadius: "22px", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 14px 35px rgba(91, 46, 145, 0.06)" }}>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>25,000+ Placed</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Learners Career Growth</div>
                  </div>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 6px 18px rgba(91, 46, 145, 0.35)", flexShrink: 0 }}>
                    <Users size={20} color="#FFFFFF" />
                  </div>
                </div>

                {/* Card 3 */}
                <div style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(237, 233, 254, 0.8)", borderRadius: "22px", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 14px 35px rgba(91, 46, 145, 0.06)" }}>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>95% Placement</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Impact Success Rate</div>
                  </div>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 6px 18px rgba(91, 46, 145, 0.35)", flexShrink: 0 }}>
                    <Award size={20} color="#FFFFFF" />
                  </div>
                </div>

                {/* Card 4 */}
                <div style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(237, 233, 254, 0.8)", borderRadius: "22px", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 14px 35px rgba(91, 46, 145, 0.06)" }}>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A" }}>32 LPA Highest</div>
                    <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Annual CTC Package</div>
                  </div>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 6px 18px rgba(91, 46, 145, 0.35)", flexShrink: 0 }}>
                    <TrendingUp size={20} color="#FFFFFF" />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom Dream Job Callout Pill */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#FAF8FF", border: "1px solid #E9D5FF", padding: "10px 24px", borderRadius: "9999px", fontSize: "13.5px", color: "#374151" }}>
            <ShieldCheck size={18} color="#5B2E91" />
            Your dream job is closer than you think. <span style={{ color: "#5B2E91", fontWeight: "700" }}>We help you get there!</span>
          </div>
        </div>

      </div>
    </section>
  );
}

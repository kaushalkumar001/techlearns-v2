"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stepsData = [
  {
    watermark: "01",
    titleLine1: "Share the Story of your Classroom",
    titleLine2: "with Families",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step1.png"
  },
  {
    watermark: "02",
    titleLine1: "High Quality Service at the",
    titleLine2: "Best Value",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step2.png"
  },
  {
    watermark: "03",
    titleLine1: "Bring your School Community",
    titleLine2: "Together",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step3.png"
  }
  , {
    watermark: "03",
    titleLine1: "Bring your School Community",
    titleLine2: "Together",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step3.png"
  },
  {
    watermark: "04",
    titleLine1: "Bring your School Community",
    titleLine2: "Together",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step3.png"
  }
  ,  {
    watermark: "05",
    titleLine1: "Bring your School Community",
    titleLine2: "Together",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step3.png"
  }
];

export default function StepsSection() {
  return (
    <section
      id="steps"
      style={{
        padding: "64px 0 48px",
        background: "linear-gradient(180deg, #F0F4F9 0%, #F6F8FC 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Top Header matching EnvironmentSection design */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "38px",
              fontWeight: "800",
              color: "#0B1F3A",
              lineHeight: "1.3",
              margin: 0,
              letterSpacing: "-0.02em"
            }}
          >
            You care about your <span style={{ color: "#5B2E91" }}>brain.</span>
            <br />
            <span style={{ background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We do, too.
            </span>
          </h2>
        </motion.div>

        {/* Overlapping Glassmorphic Step Cards Layout */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px 28px",
            position: "relative",
            zIndex: 5
          }}
        >
          {stepsData.map((step, idx) => {
            return (
              <motion.div
                key={step.watermark}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "340px",
                  flex: "1 1 300px"
                }}
              >
                {/* Back Purple Box (Original website purple theme) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "125px",
                    height: "115px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",
                    boxShadow: "0 10px 25px rgba(91, 46, 145, 0.3)",
                    zIndex: 1,
                    padding: "14px 0 0 18px",
                    boxSizing: "border-box"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "30px",
                      fontWeight: "900",
                      color: "#FFFFFF",
                      lineHeight: "1",
                      letterSpacing: "-0.03em"
                    }}
                  >
                    {step.watermark}
                  </span>
                </div>

                {/* Front Frosted Glass Card */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: "36px",
                    marginLeft: "40px",
                    width: "calc(100% - 40px)",
                    background: "rgba(255, 255, 255, 0.76)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                    border: "1.5px solid rgba(255, 255, 255, 0.85)",
                    borderRadius: "24px",
                    boxShadow: "0 16px 36px -8px rgba(11, 31, 58, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)",
                    padding: "28px 22px 24px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  {/* Card Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "17px",
                      fontWeight: "800",
                      color: "#0B1F3A",
                      lineHeight: "1.35",
                      marginBottom: "12px",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {step.titleLine1} {step.titleLine2}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "#475569",
                      fontWeight: "400",
                      lineHeight: "1.65",
                      marginBottom: "20px",
                      margin: "0 0 20px 0"
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: step.linkColor || "#5B2E91",
                      textDecoration: "none",
                      marginTop: "auto",
                      transition: "gap 0.2s ease"
                    }}
                  >
                    <span>{step.linkText}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Line Divider with Brand Identifier (matching the image bottom) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "60px"
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent 0%, #CBD5E1 100%)", maxWidth: "320px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", fontWeight: "700", color: "#64748B" }}>
            <span style={{ color: "#5B2E91", fontWeight: "800" }}>TechLearns</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Ecosystem</span>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #CBD5E1 0%, transparent 100%)", maxWidth: "320px" }} />
        </motion.div>

      </div>
    </section>
  );
}


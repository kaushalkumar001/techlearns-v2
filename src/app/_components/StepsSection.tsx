"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stepsData = [
  {
    watermark: "1",
    titleLine1: "Share the Story of your Classroom",
    titleLine2: "with Families",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step1.png"
  },
  {
    watermark: "2",
    titleLine1: "High Quality Service at the",
    titleLine2: "Best Value",
    description: "Hanky panky zonked David such a fibber vagabond, up the duff knackered chancer. Poor shaped young delinquent bevvy fanny around wind up he lost his!",
    linkText: "Learn More →",
    linkColor: "#5B2E91",
    imgSrc: "/images/steps/step2.png"
  },
  {
    watermark: "3",
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
    <section id="steps" style={{ padding: "24px 0 20px", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header matching brand color theme */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 12px" }}>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "36px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.3", margin: 0, letterSpacing: "-0.02em" }}>
            You care about your <span style={{ color: "#5B2E91" }}>brain.</span>
            <br />
            <span style={{ background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We do, too.
            </span>
          </h2>
        </div>

        {/* Vertical Curved Dotted Trail SVG Background */}
        <svg
          viewBox="0 0 100 1100"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            left: "50%",
            top: "100px",
            bottom: "60px",
            width: "130px",
            height: "calc(100% - 160px)",
            transform: "translateX(-50%)",
            zIndex: 1,
            pointerEvents: "none"
          }}
          className="desktop-only"
        >
          <path
            d="M 50,0 Q 85,180 50,360 Q 15,540 50,720 Q 85,900 50,1080"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="2.5"
            strokeDasharray="4 6"
          />
        </svg>

        {/* 3 Step Rows matching img1 pixel-perfectly */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative", zIndex: 5 }}>
          {stepsData.map((step, idx) => {
            const isEven = idx === 1; // Step 2 has image on left, text on right

            return (
              <motion.div
                key={step.watermark}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "64px",
                  alignItems: "center",
                  position: "relative"
                }}
                className="grid-2col"
              >
                {/* Center Watermark Number & Concentric Pink Dot Node */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none"
                  }}
                  className="desktop-only"
                >
                  {/* Giant Watermark Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "180px",
                      fontWeight: "900",
                      color: "#F1F5F9",
                      lineHeight: "1",
                      letterSpacing: "-0.07em",
                      userSelect: "none"
                    }}
                  >
                    {step.watermark}
                  </span>

                  {/* Concentric Node Circle with Pink Dot */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "3px solid #EC4899",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 0 5px rgba(236, 72, 153, 0.18)"
                    }}
                  >
                    <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#EC4899" }} />
                  </div>
                </div>

                {/* Left Side Column */}
                <div>
                  {isEven ? (
                    /* Image for Step 2 (Left side) */
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "30px" }}>
                      <img
                        src={step.imgSrc}
                        alt={step.titleLine1}
                        style={{ width: "100%", height: "auto", maxWidth: "440px", objectFit: "contain" }}
                      />
                    </div>
                  ) : (
                    /* Text Content for Step 1 & Step 3 (Left side) */
                    <div style={{ paddingRight: "30px" }}>
                      <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "22px", fontWeight: "800", color: "#1E293B", marginBottom: "16px", lineHeight: "1.35", letterSpacing: "-0.01em" }}>
                        {step.titleLine1}<br />{step.titleLine2}
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#788292", fontWeight: "400", lineHeight: "1.7", marginBottom: "24px", maxWidth: "380px" }}>
                        {step.description}
                      </p>
                      <Link
                        href="/contact"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          fontWeight: "700",
                          color: step.linkColor,
                          textDecoration: "none"
                        }}
                      >
                        <span>{step.linkText}</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right Side Column */}
                <div>
                  {isEven ? (
                    /* Text Content for Step 2 (Right side) */
                    <div style={{ paddingLeft: "60px" }}>
                      <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "22px", fontWeight: "800", color: "#1E293B", marginBottom: "16px", lineHeight: "1.35", letterSpacing: "-0.01em" }}>
                        {step.titleLine1}<br />{step.titleLine2}
                      </h3>
                      <p style={{ fontSize: "13.5px", color: "#788292", fontWeight: "400", lineHeight: "1.7", marginBottom: "24px", maxWidth: "380px" }}>
                        {step.description}
                      </p>
                      <Link
                        href="/contact"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          fontWeight: "700",
                          color: step.linkColor,
                          textDecoration: "none"
                        }}
                      >
                        <span>{step.linkText}</span>
                      </Link>
                    </div>
                  ) : (
                    /* Image for Step 1 & Step 3 (Right side) */
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img
                        src={step.imgSrc}
                        alt={step.titleLine1}
                        style={{ width: "100%", height: "auto", maxWidth: "440px", objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

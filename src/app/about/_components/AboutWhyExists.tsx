"use client";

import React from "react";
import { CheckCircle2, Target } from "lucide-react";
import { motion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function AboutWhyExists() {
  const learningPoints = [
    "How technology is applied",
    "How professional teams operate",
    "How problems are solved",
    "How ideas become products",
    "How AI changes modern workflows",
    "How skills are demonstrated",
    "How professionals continuously evolve"
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="grid-2col"
        >

          {/* Left Column: Overlapping Dual Composition with Bridge Puzzle Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: smoothEase }}
            style={{ position: "relative", minHeight: "340px", paddingBottom: "24px" }}
          >

            {/* Primary Illustration Container scaled to match image aspect ratio */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                aspectRatio: "765 / 470",
                margin: "0 auto",
                borderRadius: "28px",
                border: "4px solid #FFFFFF",
                background: "#0891B2",
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                overflow: "hidden"
              }}
            >
              <img
                src="/crops/whyexists1.png"
                alt="Bridging the Space Between Education and the Real World"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            {/* Secondary Overlapping Rounded Photo Card */}
            <div
              style={{
                position: "absolute",
                bottom: "-18px",
                left: "0px",
                width: "210px",
                height: "140px",
                borderRadius: "24px",
                border: "4px solid #FFFFFF",
                background: "#FFFFFF",
                boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                overflow: "hidden",
                zIndex: 10
              }}
            >
              <img
                src="/crops/bridge_gap_illustration.png"
                alt="Education Excellence & Leadership Awards"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Circular Purple Floating Stat Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "0px",
                width: "115px",
                height: "115px",
                borderRadius: "50%",
                background: "#5B2E91",
                color: "#FFFFFF",
                padding: "16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 18px 40px rgba(91, 46, 145, 0.38)",
                zIndex: 20
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: "900", lineHeight: "1" }}>10,000+</span>
              <span style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", color: "#F3E8FF", marginTop: "4px" }}>
                Students Mentored
              </span>
            </div>

          </motion.div>

          {/* Right Column: Exact User Section 01 Copy */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
          >

            {/* Eyebrow Tag */}
            <div style={{ marginBottom: "14px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#F5F0FF",
                  border: "1px solid #E4D7FF",
                  padding: "5px 16px",
                  borderRadius: "9999px",
                  color: "#5B2E91",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase"
                }}
              >
                <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#5B2E91", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>
                  🏢
                </span>
                <span>01. WHY TECHLEARNS EXISTS</span>
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "36px",
                fontWeight: "900",
                color: "#0B1F3A",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                marginBottom: "16px"
              }}
            >
              Bridging the Space Between Education and the Real World
            </h2>

            {/* Paragraph Subtitle */}
            <p style={{ fontSize: "15px", color: "#64748B", lineHeight: "1.7", marginBottom: "20px", fontWeight: "400" }}>
              Technology is evolving faster than traditional learning can keep up. Students have endless access to courses, tutorials, and certifications—yet a critical gap remains between what they learn and what the real world demands. <strong style={{ color: "#5B2E91" }}>Techlearns bridges that gap by transforming learning into an experience where students build, apply, collaborate, and grow.</strong>
            </p>

            {/* 7 Progressively Understand Bullet Points */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }} className="grid-2col">
              {learningPoints.map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle2 size={15} color="#5B2E91" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#0B1F3A" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Purpose Box */}
            <div
              style={{
                background: "linear-gradient(135deg, #0B1F3A 0%, #1E0A3C 100%)",
                borderRadius: "20px",
                padding: "22px 26px",
                color: "#FFFFFF",
                boxShadow: "0 12px 30px rgba(11, 31, 58, 0.15)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <Target size={18} color="#D8B4FE" />
                <span style={{ fontSize: "11px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", color: "#D8B4FE" }}>
                  OUR PURPOSE
                </span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: "700", lineHeight: "1.6", color: "#FFFFFF" }}>
                “To make professional experience an integral part of the learning journey—not something that begins only after employment.”
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function FounderSection() {
  const founderPillars = [
    { icon: "🚀", title: "Visionary Leader" },
    { icon: "🏆", title: "Seasoned Entrepreneur" },
    { icon: "👤", title: "Mentor & Guide" },
    { icon: "💡", title: "Industry Expert" },
    { icon: "🎓", title: "Educationist" },
  ];

  return (
    <section id="founder" style={{ padding: "64px 0 88px", background: "#FFFFFF", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Main Hero Card matching uploaded reference image & TechLearns color theme */}
        <div
          style={{
            background: "linear-gradient(135deg, #F8F5FD 0%, #F1ECFA 50%, #E9E1F7 100%)",
            borderRadius: "40px",
            border: "1px solid #EDE9FE",
            boxShadow: "0 25px 60px rgba(91, 46, 145, 0.08)",
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            minHeight: "540px",
            alignItems: "stretch"
          }}
          className="grid-2col"
        >

          {/* Left Column: Typography, Bio, CTA Buttons, Metrics */}
          <div style={{ padding: "60px 48px 60px 60px", zIndex: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {/* Pill Tag */}
            <div style={{ marginBottom: "14px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#EDE9FE", color: "#5B2E91", padding: "5px 14px", borderRadius: "9999px", fontSize: "11.5px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                FOUNDER & VISIONARY
              </span>
            </div>

            {/* Main Headline */}
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "48px",
                fontWeight: "800",
                color: "#0B1F3A",
                lineHeight: "1.14",
                letterSpacing: "-0.03em",
                margin: "0 0 10px"
              }}
            >
              Educating Minds<br />
              <span style={{ background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Empowering Careers
              </span>
            </h2>

            {/* Subtitle / Bio Paragraph */}
            <p
              style={{
                fontSize: "15.5px",
                color: "#475569",
                lineHeight: "1.65",
                maxWidth: "460px",
                margin: "18px 0 32px",
                fontWeight: "400"
              }}
            >
              “My mission is to bridge the gap between learning and real-world success by empowering students with industry-relevant skills, mentorship, and corporate experience.”
            </p>

            {/* CTA Buttons Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "40px", flexWrap: "wrap" }}>
              <a
                href="#programs"
                style={{
                  background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",
                  color: "#FFFFFF",
                  padding: "13px 28px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(91, 46, 145, 0.35)",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center"
                }}
              >
                View Vision
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#FFFFFF",
                  color: "#5B2E91",
                  border: "1px solid #DDD6FE",
                  padding: "13px 24px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 12px rgba(91, 46, 145, 0.06)",
                  transition: "all 0.2s ease"
                }}
              >
                <span style={{ background: "#0A66C2", color: "#FFFFFF", padding: "1px 5px", borderRadius: "3px", fontSize: "11px", fontWeight: "bold" }}>in</span>
                Connect on LinkedIn
              </a>
            </div>

            {/* 3 Metric Stats Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "36px", borderTop: "1px solid rgba(221, 214, 254, 0.6)", paddingTop: "26px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "34px", fontWeight: "900", color: "#5B2E91", lineHeight: "1" }}>
                  10K+
                </div>
                <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "6px", fontWeight: "600" }}>
                  Students Mentored
                </div>
              </div>

              <div style={{ width: "1px", height: "36px", background: "#DDD6FE" }} />

              <div>
                <div style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "34px", fontWeight: "900", color: "#0B1F3A", lineHeight: "1" }}>
                  15+
                </div>
                <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "6px", fontWeight: "600" }}>
                  Years Experience
                </div>
              </div>

              <div style={{ width: "1px", height: "36px", background: "#DDD6FE" }} />

              <div>
                <div style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "34px", fontWeight: "900", color: "#5B2E91", lineHeight: "1" }}>
                  5+
                </div>
                <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "6px", fontWeight: "600" }}>
                  Ventures Scaled
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Founder Photo & Floating Glassmorphic Badge */}
          <div
            style={{
              position: "relative",
              height: "100%",
              minHeight: "520px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            {/* Founder Photo */}
            <img
              src="/crops/founder_ankur.png"
              alt="Ankur Gill - Founder & CEO"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 12%",
                display: "block",
                zIndex: 2
              }}
            />

            {/* Floating Glassmorphic Card on bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                right: "24px",
                background: "rgba(11, 31, 58, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(221, 214, 254, 0.25)",
                borderRadius: "22px",
                padding: "20px 22px",
                color: "#FFFFFF",
                boxShadow: "0 25px 50px rgba(11, 31, 58, 0.35)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                zIndex: 10,
                maxWidth: "330px"
              }}
            >
              <div>
                <div style={{ fontSize: "11px", fontWeight: "800", color: "#DDD6FE", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2px" }}>
                  Founder & CEO
                </div>
                <div style={{ fontSize: "17px", fontWeight: "800", color: "#FFFFFF", marginBottom: "4px" }}>
                  Ankur Gill
                </div>
                <div style={{ fontSize: "12px", color: "#E2E8F0", lineHeight: "1.4" }}>
                  Building India&apos;s premier corporate experience learning ecosystem.
                </div>
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #7A42BE 0%, #5B2E91 100%)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  textDecoration: "none",
                  boxShadow: "0 6px 16px rgba(91, 46, 145, 0.4)",
                  transition: "transform 0.2s ease"
                }}
              >
                <ArrowUpRight style={{ width: "22px", height: "22px", strokeWidth: 2.5 }} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Strip: 4 Founder Pillars matching the reference layout */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "28px",
            marginTop: "44px",
            padding: "0 16px"
          }}
        >
          {founderPillars.map((item, idx) => (
            <div
              key={idx}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "17px",
                fontWeight: 800,
                color: "#0B1F3A",
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <span style={{ fontSize: "22px", lineHeight: "1" }}>{item.icon}</span>
              {item.title}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

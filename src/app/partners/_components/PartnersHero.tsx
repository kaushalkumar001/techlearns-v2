"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronsUp } from "lucide-react";

export default function PartnersHero() {
  return (
    <section
      style={{
        marginTop: "-68px",
        paddingTop: "68px",
        paddingBottom: "0",
        paddingLeft: "0",
        paddingRight: "0",
        background: "linear-gradient(180deg, #F8FAFC 0%, #FAF8FE 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0" }}>

        {/* Full Width Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "6fr 4fr",
            gap: "48px",
            alignItems: "center",
            position: "relative",
            width: "100%"
          }}
          className="grid-hero-img3"
        >

          {/* LEFT COLUMN: TEXT, BUTTONS & BOTTOM STATS/PILLARS */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {/* Eyebrow Badge */}
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#F5F0FF",
                  border: "1px solid #E4D7FF",
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  color: "#5B2E91",
                  fontSize: "12px",
                  fontWeight: "900",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase"
                }}
              >
                <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#5B2E91", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "900" }}>✓</span>
                <span>EXPLORE CEL™ • CORPORATE EXPERIENCE LEARNING</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "clamp(34px, 4vw, 54px)",
                fontWeight: "900",
                color: "#0B1F3A",
                lineHeight: "1.12",
                letterSpacing: "-0.03em",
                marginBottom: "20px"
              }}
            >
              Don&apos;t Prepare for Corporate Life Someday.<br />
              <span
                style={{
                  color: "#5B2E91",
                  display: "inline-block"
                }}
              >
                Start Experiencing It Today.
              </span>
            </h1>

            {/* Paragraph */}
            <p
              style={{
                fontSize: "15.5px",
                color: "#64748B",
                lineHeight: "1.7",
                marginBottom: "32px",
                maxWidth: "580px"
              }}
            >
              At <strong style={{ color: "#0B1F3A", fontWeight: "700" }}>Techlearns</strong>, we believe a student cannot become corporate-ready only by watching lectures, completing assignments, or earning certificates. A professional is shaped by the <strong style={{ color: "#5B2E91", fontWeight: "700" }}>environment in which they learn, practise, collaborate, build, communicate, perform, fail, improve and deliver.</strong>
            </p>

            {/* Buttons Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginBottom: "44px" }}>
              <Link
                href="#framework"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                  color: "#FFFFFF",
                  padding: "16px 36px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px rgba(91, 46, 145, 0.3)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>Explore the CEL Framework</span>
                <ArrowRight size={18} color="#FFFFFF" />
              </Link>

              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#FFFFFF",
                  color: "#0B1F3A",
                  border: "1.5px solid #E2E8F0",
                  padding: "15px 28px",
                  borderRadius: "14px",
                  fontSize: "14.5px",
                  fontWeight: "800",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
              >
                <span>View Programs</span>
              </Link>
            </div>

            {/* Bottom 3 Core Value Pillars */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", paddingTop: "24px", borderTop: "1px solid #F1F5F9", flexWrap: "wrap" }}>
              {[
                { title: "Learn Like a Student.", desc: "Structured Industry Context" },
                { title: "Work Like a Professional.", desc: "Real Sprints & GitHub Discipline" },
                { title: "Grow Like Future Talent.", desc: "Proven Career Capability" }
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14.5px", fontWeight: "900", color: "#0B1F3A" }}>{stat.title}</span>
                  <span style={{ fontSize: "11.5px", color: "#64748B", fontWeight: "600" }}>{stat.desc}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: HERO IMAGE CARD, FLOATING BADGES & TESTIMONIAL */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Hero Image Box */}
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                border: "1px solid #EDE9FE"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Corporate Experience Learning at Techlearns"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              {/* Top Right Floating Pill Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "linear-gradient(135deg, #7E3AF2 0%, #5B2E91 100%)",
                  color: "#FFFFFF",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "900",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 20px rgba(91, 46, 145, 0.4)",
                  textTransform: "uppercase"
                }}
              >
                100% EXPERIENCE-LED
              </div>

              {/* Bottom Left Floating Frosted Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  padding: "10px 18px",
                  borderRadius: "14px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#F5F0FF", color: "#5B2E91", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "900" }}>✓</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#0B1F3A" }}>1-on-1 Corporate Mentorship</div>
                  <div style={{ fontSize: "10.5px", color: "#64748B", fontWeight: "600" }}>Real Code Reviews & Sprints</div>
                </div>
              </div>
            </div>

            {/* Bottom Testimonial / Quote Box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "#FAF8FE",
                border: "1px solid #EDE9FE",
                padding: "16px 20px",
                borderRadius: "18px"
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#F5F0FF",
                  border: "1.5px solid #E4D7FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(91, 46, 145, 0.1)"
                }}
              >
                <ChevronsUp size={22} color="#5B2E91" strokeWidth={3} />
              </div>
              <div>
                <div style={{ fontSize: "12.5px", color: "#475569", fontStyle: "italic", lineHeight: "1.45" }}>
                  &ldquo;CEL Mode is not a class. It is a professional behaviour system where learning meets corporate execution.&rdquo;
                </div>
                <div style={{ fontSize: "11.5px", fontWeight: "800", color: "#5B2E91", marginTop: "4px" }}>
                  Techlearns CEL™ Framework &bull; Corporate Experience Learning
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

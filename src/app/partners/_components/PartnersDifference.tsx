"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnersDifference() {
  const transformationShifts = [
    { from: "Classroom", to: "Workplace Mindset" },
    { from: "Course Completion", to: "Capability Development" },
    { from: "Assignments", to: "Products & Projects" },
    { from: "Individual Learning", to: "Team Collaboration" },
    { from: "Trainer Dependency", to: "Problem Ownership" },
    { from: "Marks", to: "Performance" },
    { from: "Certificate", to: "Proof of Skills" },
    { from: "Placement Preparation", to: "Continuous Career Readiness" },
    { from: "Learning Technology", to: "Experiencing Technology Professionally" }
  ];

  return (
    <>
      {/* SECTION 07: WHY TECHLEARNS FEELS DIFFERENT */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "5px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              07. THE TECHLEARNS DIFFERENCE
            </span>
            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: "900", color: "#0B1F3A", marginTop: "14px", marginBottom: "16px" }}>
              Why Techlearns Feels Different
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: "1.7" }}>
              Because we are not trying to become another training academy. We solve the <strong style={{ color: "#5B2E91" }}>Experience Gap between Education and Employment.</strong>
            </p>
          </div>

          {/* Model Comparison Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "48px" }}>

            {/* Traditional Model */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "32px", textAlign: "center" }}>
              <span style={{ color: "#64748B", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em" }}>TRADITIONAL ACADEMY MODEL</span>
              <div style={{ fontSize: "20px", fontWeight: "900", color: "#64748B", margin: "16px 0" }}>
                Trainer → Content → Assignment → Certificate
              </div>
              <p style={{ fontSize: "14px", color: "#94A3B8" }}>Focused strictly on static video watching and rote assignment submission.</p>
            </div>

            {/* CEL Model */}
            <div style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E293B 100%)", borderRadius: "20px", padding: "32px", textAlign: "center", color: "#FFFFFF", boxShadow: "0 15px 35px rgba(11, 31, 58, 0.2)" }}>
              <span style={{ color: "#D8B4FE", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em" }}>TECHLEARNS CEL™ MODEL</span>
              <div style={{ fontSize: "18px", fontWeight: "900", color: "#FFFFFF", margin: "16px 0", lineHeight: "1.5" }}>
                Mentor → Learning → Practice → Teamwork → Projects → Corporate Tools → Challenges → Reviews → Experience → Proof → Career
              </div>
              <p style={{ fontSize: "14px", color: "#CBD5E1" }}>Designed to feel like your very first technology workplace.</p>
            </div>

          </div>

          {/* 9 Transformation Shifts Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {transformationShifts.map((shift, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748B", fontWeight: "600", textDecoration: "line-through" }}>
                  {shift.from}
                </span>
                <ArrowRight size={16} color="#5B2E91" />
                <span style={{ fontSize: "14px", color: "#5B2E91", fontWeight: "800" }}>
                  {shift.to}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THE CEL PROMISE */}
      <section style={{ padding: "80px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

          <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "6px 20px", borderRadius: "9999px", fontSize: "12px", fontWeight: "900", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            THE CEL PROMISE
          </span>

          <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(34px, 4.2vw, 54px)", fontWeight: "900", color: "#0B1F3A", marginTop: "16px", marginBottom: "16px" }}>
            Experience Before Employment™️
          </h2>

          <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.75", maxWidth: "800px", margin: "0 auto 36px" }}>
            Before a Techlearns learner enters their first organisation, they should already understand what it means to <strong style={{ color: "#5B2E91" }}>Learn, Build, Collaborate, Communicate, Deliver, Review, Improve, Compete, Present, and Take Ownership.</strong>
          </p>

          {/* 5 Promise Pillars */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {["Learn the Technology.", "Live the Environment.", "Build the Experience.", "Prove Your Capability.", "Enter Corporate Life Ready."].map((p, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", padding: "12px 24px", borderRadius: "9999px", fontSize: "14px", fontWeight: "800", color: "#0B1F3A", boxShadow: "0 4px 15px rgba(0,0,0,0.04)" }}>
                ✓ {p}
              </div>
            ))}
          </div>

          {/* Bottom Action CTA */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/programs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                color: "#FFFFFF",
                padding: "16px 40px",
                borderRadius: "9999px",
                fontSize: "15px",
                fontWeight: "800",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(91, 46, 145, 0.35)"
              }}
            >
              <span>EXPLORE THE CEL EXPERIENCE</span>
              <ArrowRight size={18} color="#FFFFFF" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

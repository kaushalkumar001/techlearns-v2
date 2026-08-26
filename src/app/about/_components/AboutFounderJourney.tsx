"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutFounderJourney() {
  const journeyNodes = [
    "Technology Programs",
    "Corporate Experience Learning",
    "AI-Enabled Learning",
    "Industry Mentorship",
    "Innovation Challenges",
    "Professional Communities",
    "Techlearns for Campus",
    "Centres of Excellence",
    "Corporate Partnerships",
    "Talent & Career Opportunities"
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FAF9FC", position: "relative" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section 04: Meet the Founder */}
        <div
          id="founder"
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #EDE9FE",
            borderRadius: "32px",
            padding: "48px",
            boxShadow: "0 20px 50px rgba(91, 46, 145, 0.06)",
            marginBottom: "80px"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px", alignItems: "center" }} className="grid-2col">

            {/* Left Bio Text */}
            <div>
              <div style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#5B2E91", marginBottom: "8px" }}>
                04. MEET THE FOUNDER
              </div>
              <h3 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "36px", fontWeight: "900", color: "#0B1F3A", marginBottom: "4px" }}>
                Prof. Ankur Gill
              </h3>
              <div style={{ fontSize: "14px", fontWeight: "700", color: "#8B5CF6", marginBottom: "16px" }}>
                Founder, Techlearns • Educator • Industry Professional • Mentor • Author • Institution Builder
              </div>

              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.7", marginBottom: "16px" }}>
                Techlearns is founded by <strong style={{ color: "#0B1F3A" }}>Prof. Ankur Gill</strong>, an education and industry professional with more than a decade of experience spanning <strong style={{ color: "#0B1F3A" }}>academic operations, student development, employability, corporate relations, admissions, technology initiatives and industry-academia engagement.</strong>
              </p>

              {/* Observation Callout Box */}
              <div
                style={{
                  background: "#F5F0FF",
                  borderLeft: "4px solid #8B5CF6",
                  padding: "16px 20px",
                  borderRadius: "0 16px 16px 0",
                  marginBottom: "16px"
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: "800", color: "#5B2E91", marginBottom: "4px" }}>
                  A Fundamental Observation:
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "600", color: "#0B1F3A", fontStyle: "italic", lineHeight: "1.5" }}>
                  “Students do not need only more courses. They need environments that allow them to experience how professionals learn, think, build and perform.”
                </div>
              </div>

              <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.65", marginBottom: "16px" }}>
                Over the years, he has worked closely with thousands of students while building and mentoring specialised learning and career-development initiatives focused on technical skills, professional discipline, corporate exposure and employability. He has also authored multiple books, contributed to academic research and innovation, and represented the education ecosystem at national and international platforms. Techlearns takes this experience forward at a larger scale.
              </p>

              {/* Founder's Belief Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0B1F3A 0%, #1E0A3C 100%)",
                  borderRadius: "20px",
                  padding: "20px 24px",
                  color: "#FFFFFF",
                  boxShadow: "0 10px 25px rgba(11, 31, 58, 0.2)",
                  marginBottom: "24px"
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#D8B4FE", marginBottom: "6px" }}>
                  THE FOUNDER&apos;S BELIEF
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700", lineHeight: "1.6", color: "#FFFFFF" }}>
                  “The real outcome of education is not what a learner knows—it is what the learner becomes capable of doing with that knowledge.”
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ fontSize: "13px", color: "#64748B", maxWidth: "420px" }}>
                  His vision for Techlearns is to create an ecosystem where students can gain <strong style={{ color: "#0B1F3A" }}>experience before employment</strong> and develop the confidence to compete in a global technology economy.
                </div>

                <Link
                  href="/mentors"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: "800",
                    color: "#8B5CF6",
                    textDecoration: "none",
                    whiteSpace: "nowrap"
                  }}
                >
                  <span>Know More About Our Founder</span>
                  <ArrowRight size={14} color="#8B5CF6" />
                </Link>
              </div>

            </div>

            {/* Right Founder Photo & Glass Badge */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "360px",
                  borderRadius: "28px",
                  border: "4px solid #FFFFFF",
                  background: "#F5F0FF",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                  overflow: "hidden"
                }}
              >
                <img
                  src="/crops/founder_ankur.png"
                  alt="Prof. Ankur Gill - Founder, Techlearns"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 10%"
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "10px",
                  maxWidth: "240px",
                  background: "rgba(11, 31, 58, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "16px",
                  color: "#FFFFFF",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
                }}
              >
                <div style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", color: "#D8B4FE" }}>
                  Founder &amp; CEO
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#FFFFFF", marginTop: "2px" }}>
                  Prof. Ankur Gill
                </div>
                <div style={{ fontSize: "11px", color: "#E2E8F0", marginTop: "2px", lineHeight: "1.3" }}>
                  10+ Years Experience in Employability &amp; Corporate Relations.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section Header: Section 06 The Journey Ahead */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
                🚀
              </span>
              <span>06. THE JOURNEY AHEAD</span>
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-headings), sans-serif",
              fontSize: "38px",
              fontWeight: "900",
              color: "#0B1F3A",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              marginBottom: "16px"
            }}
          >
            Building More Than<br />
            <span style={{ color: "#8B5CF6" }}>a Learning Platform</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "560px", margin: "0 auto 20px", fontWeight: "400" }}>
            Techlearns is being built as an evolving ecosystem. Our journey will progressively connect:
          </p>
        </div>

        {/* 10 Journey Nodes Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "14px",
            marginBottom: "40px"
          }}
          className="grid-2col"
        >
          {journeyNodes.map((node, idx) => (
            <div
              key={node}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #EDE9FE",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}
            >
              <div style={{ background: "#F5F0FF", color: "#8B5CF6", fontSize: "11px", fontWeight: "900", padding: "2px 6px", borderRadius: "6px", fontFamily: "monospace" }}>
                0{idx + 1}
              </div>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#0B1F3A" }}>
                {node}
              </span>
            </div>
          ))}
        </div>

        {/* Evolving Statements Strip */}
        <div
          style={{
            background: "#F8F5FD",
            border: "1px solid #EDE9FE",
            borderRadius: "20px",
            padding: "24px 32px",
            textAlign: "center",
            marginBottom: "64px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", flexWrap: "wrap", fontSize: "13.5px", fontWeight: "700", color: "#5B2E91" }}>
            <span>As technologies change, our programs will evolve.</span>
            <span>•</span>
            <span>As industry expectations change, our experiences will evolve.</span>
            <span>•</span>
            <span>As our learners grow, Techlearns will grow with them.</span>
          </div>
          <div style={{ fontSize: "12.5px", color: "#64748B", marginTop: "8px" }}>
            Because preparing people for the future cannot be achieved with a static learning model.
          </div>
        </div>

        {/* Grand CTA Banner */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0B1F3A 0%, #160B2E 50%, #3A1B68 100%)",
            borderRadius: "32px",
            padding: "56px 48px",
            color: "#FFFFFF",
            textAlign: "center",
            boxShadow: "0 25px 60px rgba(11, 31, 58, 0.25)",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em", color: "#D8B4FE", marginBottom: "12px" }}>
              THE FUTURE OF TECHNOLOGY LEARNING
            </div>

            <h3
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "42px",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                marginBottom: "16px"
              }}
            >
              We Are Building for<br />
              <span style={{ color: "#D8B4FE" }}>What Comes Next.</span>
            </h3>

            <div style={{ fontSize: "14px", fontWeight: "700", color: "rgba(255, 255, 255, 0.85)", marginBottom: "32px" }}>
              TECHLEARNS • Corporate Experience Learning Ecosystem<br />
              <span style={{ color: "#FDE68A", fontSize: "13px", letterSpacing: "0.05em", marginTop: "6px", display: "inline-block" }}>
                Learn. Experience. Build. Compete. Prove. Lead.
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href="/cel"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#8B5CF6",
                  color: "#FFFFFF",
                  padding: "14px 34px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)"
                }}
              >
                <span>Explore CEL</span>
                <ArrowRight size={16} color="#FFFFFF" />
              </Link>

              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#FFFFFF",
                  color: "#0B1F3A",
                  padding: "14px 34px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.1)"
                }}
              >
                <span>Explore Programs</span>
              </Link>

              <Link
                href="/partners"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  color: "#FFFFFF",
                  padding: "14px 34px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "800",
                  textDecoration: "none"
                }}
              >
                <span>Techlearns for Campus</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

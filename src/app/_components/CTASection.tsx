"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section style={{ padding: "36px 0 48px", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>

        {/* Main CTA Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0B1F3A 0%, #1A3660 55%, #5B2E91 100%)",
            borderRadius: "32px",
            padding: "60px 48px",
            color: "#FFFFFF",
            boxShadow: "0 24px 60px -15px rgba(11, 31, 58, 0.4)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle Background Glows */}
          <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", filter: "blur(40px)" }}></div>
          <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "260px", height: "260px", borderRadius: "50%", background: "rgba(91,46,145,0.25)", filter: "blur(50px)" }}></div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "820px", margin: "0 auto" }}>

            {/* Pill Tag */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255, 255, 255, 0.25)", padding: "6px 18px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
              <span>🚀</span> ELEVATE YOUR TECH CAREER
            </div>

            {/* Heading */}
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "40px", fontWeight: "800", lineHeight: "1.2", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Start Your Tech Career Transformation Today
            </h2>

            {/* Subtitle */}
            <p style={{ fontSize: "16px", color: "#E9D5FF", lineHeight: "1.7", marginBottom: "36px", maxWidth: "680px", margin: "0 auto 36px" }}>
              Join thousands of successful graduates who transitioned into high-growth software engineering, Data Science, and AI roles with 1-on-1 mentorship, live projects, and lifetime placement support.
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginBottom: "40px" }}>
              <Link
                href="#courses"
                style={{
                  background: "#FFFFFF",
                  color: "#5B2E91",
                  padding: "16px 36px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  fontWeight: "800",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
              >
                Apply for Next Cohort →
              </Link>

              <Link
                href="/contact"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  border: "1.5px solid rgba(255, 255, 255, 0.3)",
                  padding: "16px 32px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  fontWeight: "700",
                  textDecoration: "none",
                  backdropFilter: "blur(6px)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                Schedule Free 1-on-1 Counseling
              </Link>
            </div>

            {/* 4 Trust Badges */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "#F3E8FF", fontWeight: "600" }}>
                <span>✓</span> 100% Placement Assistance
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "#F3E8FF", fontWeight: "600" }}>
                <span>✓</span> 1-on-1 Industry Mentorship
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "#F3E8FF", fontWeight: "600" }}>
                <span>✓</span> Verified Skill Passport
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "#F3E8FF", fontWeight: "600" }}>
                <span>✓</span> Zero-Cost EMI Available
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

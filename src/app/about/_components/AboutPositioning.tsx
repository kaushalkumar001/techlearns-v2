"use client";

import Link from "next/link";

export default function AboutPositioning() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center", marginBottom: "70px" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
              OUR POSITIONING
            </div>
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "34px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "18px", lineHeight: "1.25" }}>
              Designed for learners who don&apos;t want to stop at knowing technology
            </h2>
            <p style={{ color: "#4B5563", fontSize: "15.5px", lineHeight: "1.8" }}>
              Through Corporate Experience Learning, every learner experiences how technology is planned, built, reviewed, applied and delivered. The journey integrates skills, practice, projects, teamwork, industry exposure, competitions, credential pathways and career evidence. The result is demonstrated capability — not just a course-completion certificate.
            </p>
          </div>

          <div style={{ background: "linear-gradient(135deg, #6D28D9 0%, #4338CA 100%)", borderRadius: "24px", padding: "40px", color: "#FFFFFF", boxShadow: "0 14px 40px rgba(109, 40, 217, 0.2)" }}>
            <p style={{ fontSize: "24px", fontWeight: "800", lineHeight: "1.4", margin: 0 }}>
              Where learning technology becomes corporate experience —{" "}
              <span style={{ color: "#DDD6FE" }}>and experience becomes capability.</span>
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div style={{ background: "#FAF8FF", border: "1.5px solid #EDE9FE", borderRadius: "24px", padding: "48px 36px", textAlign: "center" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", marginBottom: "10px" }}>
            Ready to experience how it works?
          </h3>
          <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto 28px", fontSize: "15px" }}>
            Take a free diagnostic or explore our flagship programs.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#courses" style={{ background: "#6D28D9", color: "#FFFFFF", padding: "14px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 14px rgba(109, 40, 217, 0.3)" }}>
              Explore Programs →
            </Link>
            <Link href="/cel" style={{ background: "#FFFFFF", border: "1.5px solid #6D28D9", color: "#6D28D9", padding: "14px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
              See How CEL Works
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

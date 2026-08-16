"use client";

export default function AboutVisionMission() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>

          {/* Vision */}
          <div style={{ background: "#FAFAFF", border: "1px solid #EDE9FE", borderTop: "4px solid #5B2E91", borderRadius: "20px", padding: "36px", boxShadow: "0 10px 30px rgba(91, 46, 145, 0.04)" }}>
            <span style={{ fontSize: "12px", color: "#5B2E91", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              OUR VISION
            </span>
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "24px", color: "#0B1F3A", marginTop: "12px", marginBottom: "16px", fontWeight: "800" }}>
              A nationally trusted CEL ecosystem
            </h2>
            <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "1.75" }}>
              To become a nationally trusted next-generation Corporate Experience Learning ecosystem that enables learners from every background to build future-ready technological capability through real corporate experience, measurable practice, and continuous access to opportunity.
            </p>
          </div>

          {/* Mission */}
          <div style={{ background: "#FAFAFF", border: "1px solid #EDE9FE", borderTop: "4px solid #4338CA", borderRadius: "20px", padding: "36px", boxShadow: "0 10px 30px rgba(67, 56, 202, 0.04)" }}>
            <span style={{ fontSize: "12px", color: "#4338CA", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              OUR MISSION
            </span>
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "24px", color: "#111827", marginTop: "12px", marginBottom: "16px", fontWeight: "800" }}>
              Bridge learning and doing
            </h2>
            <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "1.75" }}>
              We bridge the gap between learning technology and experiencing how technology is built, applied, and delivered — by combining current curriculum, expert mentorship, corporate operating practices, live projects, industry exposure, competitions, verified skill evidence, and credible certification pathways.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

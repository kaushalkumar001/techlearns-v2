"use client";

export default function AboutManifesto() {
  return (
    <section style={{ padding: "80px 0", background: "#FAF8FF", borderTop: "1px solid #EDE9FE", borderBottom: "1px solid #EDE9FE" }}>
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#FFFFFF", border: "1px solid #EDE9FE", padding: "6px 16px", borderRadius: "9999px", color: "#5B2E91", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>
          <span>📜</span> Our Manifesto
        </div>

        <div style={{ background: "#FFFFFF", padding: "48px 36px", borderRadius: "24px", border: "1.5px dashed #DDD6FE", boxShadow: "0 10px 30px rgba(91, 46, 145, 0.04)" }}>
          <p style={{ fontSize: "17px", color: "#1F2937", lineHeight: "1.9", fontStyle: "italic", fontWeight: "500" }}>
            &ldquo;We believe talent is everywhere, but meaningful exposure is not. We believe a learner should experience the discipline of real work before the first job. We believe skills become valuable when they are practised, challenged, reviewed and proven. We believe technology should make learning measurable without making it impersonal. And we believe India can build a generation that does not merely hold certificates — it can build, solve, communicate, compete, and lead.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}

"use client";

export default function AboutHero() {
  return (
    <section style={{ padding: "60px 0 80px", background: "linear-gradient(180deg, #F8F7FF 0%, #FFFFFF 100%)", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F5F0FF", border: "1px solid #E4D7FF", padding: "6px 16px", borderRadius: "9999px", color: "#5B2E91", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
          <span>🏢</span> About TechLearns
        </div>
        <h1 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "46px", fontWeight: "800", color: "#0B1F3A", lineHeight: "1.2", letterSpacing: "-0.02em", marginBottom: "18px" }}>
          We&apos;re not another institute<br />
          <span style={{ color: "#5B2E91" }}>selling classes.</span>
        </h1>
        <p style={{ color: "#4B5563", fontSize: "17px", lineHeight: "1.7", maxWidth: "680px", margin: "0 auto" }}>
          TechLearns exists to bridge the gap between learning technology and experiencing how technology is actually built, applied, and delivered in corporate environments.
        </p>
      </div>
    </section>
  );
}

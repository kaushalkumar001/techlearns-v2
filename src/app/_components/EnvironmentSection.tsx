"use client";

import Link from "next/link";

export default function EnvironmentSection() {
  return (
    <section style={{ padding: "36px 0", background: "#F8FAFC" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header with 01 Watermark Badge matching img2 */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>

          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Where Learning Meets the <span style={{ color: "#5B2E91" }}>Right Environment</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "680px", margin: "0 auto", lineHeight: "1.6" }}>
            Modern classrooms. Practical labs. Collaborative spaces.<br />
            Everything designed to make learning more focused, interactive and career-oriented.
          </p>
        </div>

        {/* Bento Cards Layout matching img2 exactly */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "28px", alignItems: "stretch" }}>

          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Card 1: Modern Classrooms (Tall Card with Top Image & Bottom White Text Content Area matching img2 Left Card) */}
            <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #F1F5F9", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", height: "230px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Classrooms"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "20px", fontWeight: "800", color: "#0B1F3A", marginBottom: "8px" }}>
                  Modern Classrooms
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.6", marginBottom: "16px" }}>
                  State-of-the-art tech-enabled classrooms equipped with high-speed fiber internet, dual-monitor setups, and interactive displays for seamless learning.
                </p>
                <Link href="/contact" style={{ fontSize: "13px", fontWeight: "700", color: "#5B2E91", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

            {/* Card 3: Interactive Learning (Horizontal Split Card matching img2 Top-Right Card) */}
            <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #F1F5F9", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "flex", minHeight: "155px" }}>
              <div style={{ width: "40%", height: "100%", minHeight: "155px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Interactive Learning"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ width: "60%", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "17px", fontWeight: "800", color: "#0B1F3A", marginBottom: "6px" }}>
                  Interactive Learning
                </h3>
                <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.5", marginBottom: "12px" }}>
                  Peer-to-peer collaboration, group coding jams, and 1-on-1 mentor guidance.
                </p>
                <Link href="/contact" style={{ fontSize: "12.5px", fontWeight: "700", color: "#5B2E91", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Card 2: Hands-on Coding Labs (Horizontal Split Card matching img2 Top-Right Card) */}
            <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #F1F5F9", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "flex", minHeight: "155px" }}>
              <div style={{ width: "40%", height: "100%", minHeight: "155px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                  alt="Hands-on Coding Labs"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ width: "60%", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "17px", fontWeight: "800", color: "#0B1F3A", marginBottom: "6px" }}>
                  Hands-on Coding Labs
                </h3>
                <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.5", marginBottom: "12px" }}>
                  Real-time cloud dev sandbox environments with pre-configured toolchains and instant AI evaluation.
                </p>
                <Link href="/contact" style={{ fontSize: "12.5px", fontWeight: "700", color: "#5B2E91", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

            {/* Card 4: Offline Learning Experience (Full Hero Overlay Card matching img2 Bottom-Right Card) */}
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", flex: 1, minHeight: "260px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", display: "flex", alignItems: "flex-end" }}>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Offline Learning Experience"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(11, 31, 58, 0.9) 100%)" }} />

              <div style={{ position: "relative", zIndex: 2, padding: "24px" }}>
                <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "20px", fontWeight: "800", color: "#FFFFFF", marginBottom: "6px" }}>
                  Offline Learning Experience
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: "1.5", marginBottom: "12px", maxWidth: "420px" }}>
                  Immersive in-person learning hubs designed for deep focus, networking, and rapid career advancement.
                </p>
                <Link href="/contact" style={{ fontSize: "13px", fontWeight: "700", color: "#A78BFA", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

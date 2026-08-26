"use client";

import React from "react";

export default function AboutStats() {
  const stats = [
    { num: "15 +", label: "Years Experience" },
    { num: "10,000 +", label: "Students Mentored" },
    { num: "50 +", label: "Industry Mentors" },
    { num: "100 %", label: "Placement Assistance" },
  ];

  return (
    <section style={{ padding: "48px 0", background: "#FFFFFF", borderTop: "1px solid #EDE9FE", borderBottom: "1px solid #EDE9FE" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }} className="grid-2col">
          {stats.map((st) => (
            <div key={st.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "42px", fontWeight: "900", color: "#0B1F3A", lineHeight: "1" }}>
                {st.num}
              </span>
              <span style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", marginTop: "8px" }}>
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

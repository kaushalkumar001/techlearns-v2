"use client";

import React from "react";

export default function BlogsHero() {
  return (
    <section style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>
        {/* Top Articles Header Divider Line */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px", width: "100%" }}>
          <h1 className="blog-heading-serif" style={{ fontSize: "clamp(26px, 4.2vw, 42px)", fontWeight: 500, color: "var(--foreground)", whiteSpace: "nowrap", margin: 0 }}>
            Top Articles
          </h1>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#CBD5E1", opacity: 0.8 }} />
          <span className="blog-heading-serif" style={{ fontSize: "clamp(22px, 3.6vw, 38px)", fontWeight: 500, color: "var(--foreground)", whiteSpace: "nowrap" }}>
            2026
          </span>
        </div>
      </div>
    </section>
  );
}

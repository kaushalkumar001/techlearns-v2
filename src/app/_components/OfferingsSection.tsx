"use client";

import Link from "next/link";

export default function OfferingsSection() {
  return (
    <section id="courses" style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            — COURSES —
          </div>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Our <span style={{ color: "#6D28D9" }}>Offerings</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Industry-relevant programs designed to make you job-ready
          </p>
        </div>

        {/* 2 Big Program Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "32px", marginBottom: "40px" }}>
          
          {/* Card 1: Data Science & AI (Purple Theme) */}
          <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1.5px solid #E9D5FF", padding: "36px", boxShadow: "0 10px 30px rgba(109, 40, 217, 0.05)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              {/* Header with Icon & Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", marginBottom: "24px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "#F5F3FF", border: "1.5px solid #DDD6FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", flexShrink: 0 }}>
                  🧠
                </div>
                <div>
                  <h3 style={{ fontSize: "21px", fontWeight: "800", color: "#1E1B4B", marginBottom: "8px", lineHeight: "1.3" }}>
                    Data Science &<br />Artificial Intelligence
                  </h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ background: "#EEF2FF", color: "#4F46E5", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>ONLINE</span>
                    <span style={{ background: "#FAF5FF", color: "#7C3AED", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>14 MONTHS</span>
                  </div>
                </div>
              </div>

              {/* 4 Metadata Boxes */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", background: "#F8FAFC", padding: "16px", borderRadius: "16px", marginBottom: "24px", border: "1px solid #F1F5F9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>📅</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>NEW BATCH START FROM</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Jul 4, 2026</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>🎓</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>SCHOLARSHIP AVAILABLE</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Yes</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>₹</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>EMI STARTS FROM</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Rs. 7,950*</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>👤</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>ELIGIBILITY</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Open for All</div>
                  </div>
                </div>
              </div>

              {/* 5 Bullet Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {[
                  "Get a professional certificate on completion of course",
                  "Unlimited mock interviews for your interview practice",
                  "Access to 10,000+ coding questions in our Arena",
                  "100% Placement Assistance (Lifetime)",
                  "No coding experience required"
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#334155", fontWeight: "500" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#6D28D9", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold" }}>✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                <button style={{ background: "#5B21B6", color: "#FFFFFF", border: "none", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                  Explore Course →
                </button>
                <button style={{ background: "#FFFFFF", border: "1.5px solid #6D28D9", color: "#6D28D9", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                  <span>⤓</span> Download Brochure
                </button>
              </div>

              {/* Footer text */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#64748B", borderTop: "1px solid #F1F5F9", paddingTop: "12px" }}>
                <div>👥 1,200+ Students already enrolled</div>
                <div>*GST is applicable</div>
              </div>
            </div>
          </div>

          {/* Card 2: Advanced Full Stack Development (Green Theme) */}
          <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1.5px solid #BBF7D0", padding: "36px", boxShadow: "0 10px 30px rgba(16, 185, 129, 0.05)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              {/* Header with Icon & Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "18px", marginBottom: "24px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "#F0FDF4", border: "1.5px solid #86EFAC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: "#16A34A", fontWeight: "bold", flexShrink: 0 }}>
                  &lt;/&gt;
                </div>
                <div>
                  <h3 style={{ fontSize: "21px", fontWeight: "800", color: "#1E1B4B", marginBottom: "8px", lineHeight: "1.3" }}>
                    Advanced Full Stack<br />Development
                  </h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ background: "#F0FDF4", color: "#16A34A", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>ONLINE</span>
                    <span style={{ background: "#F0FDF4", color: "#16A34A", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>6-8 MONTHS</span>
                  </div>
                </div>
              </div>

              {/* 4 Metadata Boxes */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", background: "#F8FAFC", padding: "16px", borderRadius: "16px", marginBottom: "24px", border: "1px solid #F1F5F9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>📅</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>NEW BATCH START FROM</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Jul 4, 2026</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>🎓</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>SCHOLARSHIP AVAILABLE</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Yes</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>₹</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>EMI STARTS FROM</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Rs. 12,300*</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>👤</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "#64748B", fontWeight: "700" }}>ELIGIBILITY</div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0F172A" }}>Open for All</div>
                  </div>
                </div>
              </div>

              {/* 5 Bullet Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {[
                  "Get a professional certificate on completion of course",
                  "Unlimited mock interviews for your interview practice",
                  "Access to 10,000+ coding questions in our Arena",
                  "100% Placement Assistance (Lifetime)",
                  "No coding experience required"
                ].map((point, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "#334155", fontWeight: "500" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#16A34A", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold" }}>✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Buttons */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                <button style={{ background: "#059669", color: "#FFFFFF", border: "none", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                  Explore Course →
                </button>
                <button style={{ background: "#FFFFFF", border: "1.5px solid #059669", color: "#059669", padding: "14px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                  <span>⤓</span> Download Brochure
                </button>
              </div>

              {/* Footer text */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#64748B", borderTop: "1px solid #F1F5F9", paddingTop: "12px" }}>
                <div>👥 6,300+ Students already enrolled</div>
                <div>*GST is applicable</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div style={{ background: "#FAF8FF", border: "1px solid #EDE9FE", borderRadius: "20px", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #DDD6FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#6D28D9", flexShrink: 0 }}>
              🏅
            </div>
            <div>
              <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#1E1B4B", marginBottom: "2px" }}>
                Career support that stays with you—forever!
              </h4>
              <p style={{ fontSize: "13px", color: "#64748B" }}>
                Personalized guidance, resume support, interview prep & lifelong placement assistance.
              </p>
            </div>
          </div>

          <button style={{ background: "#5B21B6", color: "#FFFFFF", border: "none", padding: "12px 24px", borderRadius: "10px", fontSize: "13.5px", fontWeight: "700", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            🎧 Talk to Our Expert &gt;
          </button>
        </div>

      </div>
    </section>
  );
}

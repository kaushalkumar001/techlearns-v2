"use client";

export default function HiringPartnersSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F5F3FF", border: "1px solid #EDE9FE", padding: "6px 16px", borderRadius: "9999px", color: "#6D28D9", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>
            <span>👥</span> TRUSTED BY INDUSTRY LEADERS
          </div>

          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Get offers from <span style={{ color: "#6D28D9" }}>800+ top companies</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Our learners are placed in leading organizations and continue to excel in their careers
          </p>
        </div>

        {/* Big White Card with 2-Row Logo Cloud */}
        <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "24px", padding: "40px 32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", marginBottom: "36px" }}>
          
          {/* Row 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px", alignItems: "center", justifyItems: "center", paddingBottom: "28px", borderBottom: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "20px", fontWeight: "800", color: "#111827" }}>Uber</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#00A1E0" }}>salesforce</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#FF9900" }}>amazon</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#0668E1" }}>∞ Meta</div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#4285F4" }}>Google</div>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#5E5E5E" }}>Microsoft</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#5F259F" }}>पे PhonePe</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#CB202D" }}>zomato</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#0052FF" }}>coinbase</div>
          </div>

          {/* Row 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px", alignItems: "center", justifyItems: "center", paddingTop: "28px" }}>
            <div style={{ fontSize: "15px", fontWeight: "800", color: "#111827" }}>J.P.Morgan</div>
            <div style={{ fontSize: "18px", fontWeight: "900", color: "#1A1F71", fontStyle: "italic" }}>VISA</div>
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#0052CC" }}>▲ ATLASSIAN</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#003087" }}>PayPal</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#111827" }}>CRED</div>
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#581C87" }}>tcs <span style={{ fontSize: "9px", fontWeight: "500" }}>TATA</span></div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#635BFF" }}>stripe</div>
            <div style={{ fontSize: "18px", fontWeight: "900", color: "#E50914" }}>NETFLIX</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#2874F0" }}>Flipkart 🛍️</div>
          </div>

        </div>

        {/* 4 Stat Boxes Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          
          <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "18px", padding: "20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#6D28D9", flexShrink: 0 }}>
              🏢
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: "900", color: "#1E1B4B" }}>800+</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Hiring Partners</div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "18px", padding: "20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#6D28D9", flexShrink: 0 }}>
              👥
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: "900", color: "#1E1B4B" }}>25,000+</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Learners Placed</div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "18px", padding: "20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#6D28D9", flexShrink: 0 }}>
              🏅
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: "900", color: "#1E1B4B" }}>95%</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Placement Rate</div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "18px", padding: "20px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#6D28D9", flexShrink: 0 }}>
              📈
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: "900", color: "#1E1B4B" }}>Highest</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Package 32 LPA</div>
            </div>
          </div>

        </div>

        {/* Bottom Dream Job Callout Pill */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#FAF8FF", border: "1px solid #E9D5FF", padding: "10px 24px", borderRadius: "9999px", fontSize: "13.5px", color: "#374151" }}>
            <span style={{ color: "#6D28D9", fontWeight: "bold" }}>🛡️</span>
            Your dream job is closer than you think. <span style={{ color: "#6D28D9", fontWeight: "700" }}>We help you get there!</span>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

const mentorsData = [
  {
    name: "Dr. Pavan Duggal",
    desc: "An intellectual & influencer and recognized thought leader in Cyber Law, Technology, Privacy and Policy.",
    role: "Ex Advocate, Supreme Court of India, Expert Authority in Cyberlaw",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    logoText: "PAVAN DUGGAL ASSOCIATES",
    logoSub: "Advocates",
    logoColor: "#DC2626"
  },
  {
    name: "CPA Nimisha Chiripal",
    desc: "US CPA, recognized for expertise and data-driven insights. Guides learners with real-world financial perspectives.",
    role: "Senior Manager",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    logoText: "Deloitte.",
    logoSub: "",
    logoColor: "#111827"
  },
  {
    name: "Adv. Vikrant Rana",
    desc: "Litigation expert in corporate and regulatory laws. Advisor on legal frameworks and compliance.",
    role: "Managing Partner",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    logoText: "SR LEX FIRM",
    logoSub: "Advocates & Solicitors",
    logoColor: "#1E3A8A"
  },
  {
    name: "Mr. Goutam Bhattacharya",
    desc: "Award-winning leader in GCCs, HR transformation & strategic operations. Helping organizations scale globally with agile and future-ready teams.",
    role: "CEO - LSSSDC, NASSCOM & Development Council",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    logoText: "LSSSDC",
    logoSub: "Excellence Through Skills",
    logoColor: "#0284C7"
  },
  {
    name: "Dr. Amlan Chakraborty",
    desc: "Accomplished academician and researcher specializing in analytics and decision sciences.",
    role: "Ph.D, Expert Professor & Director, University of Calcutta",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    logoText: "UNIVERSITY OF CALCUTTA",
    logoSub: "Est. 1857",
    logoColor: "#1E293B"
  },
  {
    name: "CA Arvind Tuli",
    desc: "Finance leader & mentor for startups and learners. Brings practical insights from industry.",
    role: "Educator",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80",
    logoText: "unacademy",
    logoSub: "",
    logoColor: "#059669"
  }
];

export default function MentorsSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
            — OUR DISTINGUISHED —
          </div>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "900", color: "#0F172A", letterSpacing: "-0.01em", marginBottom: "8px" }}>
            INDUSTRY <span style={{ color: "#EA580C" }}>MENTORS</span>
          </h2>
          <div style={{ width: "42px", height: "3.5px", background: "#EA580C", borderRadius: "2px", margin: "0 auto" }}></div>
        </div>

        {/* 6 Dual-Tier Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
          {mentorsData.map((m, idx) => (
            <div 
              key={idx} 
              style={{ 
                borderRadius: "20px", 
                overflow: "hidden", 
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                border: "1px solid #EDE9FE",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Top Purple Tier */}
              <div style={{ background: "#250E52", padding: "20px", color: "#FFFFFF", position: "relative" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <img 
                    src={m.photo} 
                    alt={m.name} 
                    style={{ width: "80px", height: "96px", borderRadius: "12px", objectFit: "cover", flexShrink: 0, border: "1.5px solid rgba(255,255,255,0.2)" }} 
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: "16.5px", fontWeight: "800", color: "#FFFFFF", marginBottom: "6px" }}>
                      {m.name}
                    </h4>
                    <p style={{ fontSize: "12px", color: "#E2E8F0", lineHeight: "1.45", opacity: 0.9 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>

                <div style={{ position: "absolute", bottom: "10px", right: "16px", fontSize: "28px", color: "rgba(255,255,255,0.3)", fontWeight: "bold" }}>
                  ”
                </div>
              </div>

              {/* Bottom White Tier */}
              <div style={{ background: "#FFFFFF", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, borderTop: "2px solid #EA580C" }}>
                <div style={{ fontSize: "11.5px", color: "#475569", fontWeight: "600", maxWidth: "60%", lineHeight: "1.35" }}>
                  {m.role}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: m.logoColor, letterSpacing: "-0.02em" }}>
                    {m.logoText}
                  </div>
                  {m.logoSub && (
                    <div style={{ fontSize: "9px", color: "#94A3B8", fontWeight: "600" }}>
                      {m.logoSub}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

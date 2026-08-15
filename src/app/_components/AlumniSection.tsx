"use client";

const alumniData = [
  {
    name: "Shubham Rane",
    role: "Product Analyst",
    photo: "/crops/alumni_1.png",
    company: "cult.fit",
    companyColor: "#111827",
    before: "Fresher",
    after: "Product Analyst"
  },
  {
    name: "Megha Chouhan",
    role: "Data Analyst",
    photo: "/crops/alumni_2.png",
    company: "ROCKET LEARNING",
    companyColor: "#1D4ED8",
    before: "Research Analyst",
    after: "Data Analyst"
  },
  {
    name: "Mansi Mishra",
    role: "MIS Executive",
    photo: "/crops/alumni_3.png",
    company: "IndiGo",
    companyColor: "#1E3A8A",
    before: "HR Consultant",
    after: "MIS Executive"
  },
  {
    name: "Yash Kumar",
    role: "Product Analyst Intern",
    photo: "/crops/alumni_4.png",
    company: "Spinny",
    companyColor: "#E11D48",
    before: "Fresher",
    after: "Product Analyst Intern"
  }
];

export default function AlumniSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header with Carousel Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
              PLACEMENT STORIES
            </div>
            <div style={{ width: "32px", height: "3px", background: "#6D28D9", borderRadius: "2px", marginBottom: "14px" }}></div>
            
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "36px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "6px" }}>
              TechLearns <span style={{ color: "#6D28D9" }}>Alumni Network</span>
            </h2>
            <p style={{ fontSize: "14.5px", color: "#6B7280" }}>
              From learners to leaders – success stories that inspire.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #DDD6FE", background: "#FFFFFF", color: "#6D28D9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}>
              &lt;
            </button>
            <button style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #DDD6FE", background: "#FFFFFF", color: "#6D28D9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}>
              &gt;
            </button>
          </div>
        </div>

        {/* 4 Alumni Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "22px", marginBottom: "40px" }}>
          {alumniData.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: "#FFFFFF", 
                borderRadius: "20px", 
                overflow: "hidden", 
                border: "1px solid #EDE9FE", 
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Photo */}
              <div style={{ height: "160px", overflow: "hidden", background: "#F1F5F9" }}>
                <img 
                  src={item.photo} 
                  alt={item.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px", textAlign: "center", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <h4 style={{ fontSize: "16.5px", fontWeight: "800", color: "#111827", marginBottom: "2px" }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "12px" }}>
                    {item.role}
                  </div>

                  {/* Company Logo representation */}
                  <div style={{ fontSize: "16px", fontWeight: "800", color: item.companyColor, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                    {item.company}
                  </div>

                  {/* Before / After Badges */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "18px" }}>
                    <div style={{ textAlign: "center" }}>
                      <span style={{ background: "#FEE2E2", color: "#B91C1C", padding: "2px 8px", borderRadius: "4px", fontSize: "9px", fontWeight: "700" }}>Before</span>
                      <div style={{ fontSize: "11px", color: "#374151", fontWeight: "600", marginTop: "4px" }}>{item.before}</div>
                    </div>

                    <span style={{ color: "#7C3AED", fontSize: "12px", fontWeight: "bold" }}>&gt;&gt;&gt;</span>

                    <div style={{ textAlign: "center" }}>
                      <span style={{ background: "#DCFCE7", color: "#15803D", padding: "2px 8px", borderRadius: "4px", fontSize: "9px", fontWeight: "700" }}>After</span>
                      <div style={{ fontSize: "11px", color: "#374151", fontWeight: "600", marginTop: "4px" }}>{item.after}</div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <button style={{ width: "100%", background: "#FFFFFF", border: "1px solid #E2E8F0", padding: "10px", borderRadius: "10px", fontSize: "12px", fontWeight: "700", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer" }}>
                  <span style={{ background: "#0A66C2", color: "#FFFFFF", padding: "1px 5px", borderRadius: "3px", fontSize: "10px", fontWeight: "bold" }}>in</span>
                  Connect on LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Placement Banner */}
        <div style={{ background: "#FAF8FF", border: "1px solid #EDE9FE", borderRadius: "20px", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#6D28D9", flexShrink: 0 }}>
              🏆
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "#1E1B4B" }}>
                Work hard with us, with dedication and commitment, and watch multiple opportunities grab you and <span style={{ color: "#6D28D9", fontWeight: "700" }}>transform your future!</span>
              </p>
            </div>
          </div>

          <button style={{ background: "#5B21B6", color: "#FFFFFF", border: "none", padding: "12px 22px", borderRadius: "10px", fontSize: "13.5px", fontWeight: "700", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            View more Placement Stories →
          </button>
        </div>

      </div>
    </section>
  );
}

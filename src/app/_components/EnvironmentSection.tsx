"use client";

export default function EnvironmentSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            EXPERIENCE TECHLEARNS
          </div>
          <div style={{ width: "32px", height: "3px", background: "#6D28D9", borderRadius: "2px", margin: "0 auto 16px" }}></div>
          
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Where Learning Meets the <span style={{ color: "#6D28D9" }}>Right Environment</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "680px", margin: "0 auto" }}>
            Modern classrooms. Practical labs. Collaborative spaces.<br />
            Everything designed to make learning more focused, interactive and career-oriented.
          </p>
        </div>

        {/* 4 Image Grid Layout with High-Resolution Public Unsplash Images */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr 1.1fr", gap: "20px", alignItems: "stretch" }}>
          
          {/* Left Large Card: Modern Classrooms */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", minHeight: "380px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" 
              alt="Modern Classrooms" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(109, 40, 217, 0.92)", backdropFilter: "blur(6px)", color: "#FFFFFF", padding: "8px 16px", borderRadius: "9999px", fontSize: "12.5px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>💻</span> Modern Classrooms
            </div>
          </div>

          {/* Middle Stacked Column (2 cards) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Top: Hands-on Coding Labs */}
            <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", flex: 1, minHeight: "180px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}>
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
                alt="Hands-on Coding Labs" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(109, 40, 217, 0.92)", backdropFilter: "blur(6px)", color: "#FFFFFF", padding: "6px 14px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span>&lt;/&gt;</span> Hands-on Coding Labs
              </div>
            </div>

            {/* Bottom: Interactive Learning */}
            <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", flex: 1, minHeight: "180px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="Interactive Learning" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(109, 40, 217, 0.92)", backdropFilter: "blur(6px)", color: "#FFFFFF", padding: "6px 14px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span>👥</span> Interactive Learning
              </div>
            </div>

          </div>

          {/* Right Tall Card: Offline Learning Experience */}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", minHeight: "380px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" 
              alt="Offline Learning Experience" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(109, 40, 217, 0.92)", backdropFilter: "blur(6px)", color: "#FFFFFF", padding: "8px 16px", borderRadius: "9999px", fontSize: "12.5px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>🎓</span> Offline Learning Experience
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

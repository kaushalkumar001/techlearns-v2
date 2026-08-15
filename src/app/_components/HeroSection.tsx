"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{ padding: "60px 0 70px", background: "linear-gradient(180deg, #F8F7FF 0%, #FFFFFF 100%)", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "48px", alignItems: "center" }}>
          
          {/* Left Column: Heading & 3 Feature Points */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F3EEFF", border: "1px solid #E4D7FF", padding: "8px 18px", borderRadius: "9999px", color: "#6D28D9", fontSize: "12px", fontWeight: "700", letterSpacing: "0.04em", marginBottom: "20px" }}>
              <span>🎓</span> CORPORATE LEARNING EXPERIENCE
            </div>

            <h1 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "44px", fontWeight: "800", color: "#111827", lineHeight: "1.18", letterSpacing: "-0.02em", marginBottom: "18px" }}>
              Corporate Learning <span style={{ color: "#6D28D9", background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span> that Drives Results
            </h1>

            <p style={{ fontSize: "16px", color: "#4B5563", lineHeight: "1.6", marginBottom: "40px", maxWidth: "520px" }}>
              Empowering teams with industry-relevant skills, expert mentorship and real-world learning.
            </p>

            {/* 3 Bottom Feature Icons */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              
              <div style={{ textAlign: "left" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#6D28D9", marginBottom: "12px" }}>
                  👥
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1F2937", marginBottom: "4px" }}>Expert-Led Training</h4>
                <p style={{ fontSize: "12px", color: "#6B7280", lineHeight: "1.4" }}>Learn from industry professionals</p>
              </div>

              <div style={{ textAlign: "left" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#6D28D9", marginBottom: "12px" }}>
                  💼
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1F2937", marginBottom: "4px" }}>Job-Ready Skills</h4>
                <p style={{ fontSize: "12px", color: "#6B7280", lineHeight: "1.4" }}>Build practical skills that employers value</p>
              </div>

              <div style={{ textAlign: "left" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#6D28D9", marginBottom: "12px" }}>
                  📈
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#1F2937", marginBottom: "4px" }}>Measurable Impact</h4>
                <p style={{ fontSize: "12px", color: "#6B7280", lineHeight: "1.4" }}>Boost productivity and business growth</p>
              </div>

            </div>

          </div>

          {/* Right Column: Rounded White Card with Student */}
          <div style={{ background: "#FFFFFF", borderRadius: "28px", padding: "36px", boxShadow: "0 20px 50px rgba(109, 40, 217, 0.08)", border: "1px solid #EDE9FE", position: "relative", overflow: "hidden" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "20px", alignItems: "center" }}>
              
              <div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "4px" }}>
                  Start Your Journey With
                </div>

                <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#6D28D9", marginBottom: "6px" }}>
                  TechLearns Academy
                </h3>

                <div style={{ width: "36px", height: "3px", background: "#6D28D9", borderRadius: "2px", marginBottom: "18px" }}></div>

                <div style={{ fontSize: "15px", fontWeight: "700", color: "#1F2937", marginBottom: "16px" }}>
                  Full Stack Web Development with <span style={{ color: "#6D28D9" }}>AI</span>
                </div>

                {/* 5 Checkpoints */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "26px" }}>
                  {[
                    "4 Months Program",
                    "Live Instructor-Led Training",
                    "Hands-on Projects",
                    "AI Tools & Modern Technologies",
                    "Certification & Placement Support"
                  ].map((text, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#4B5563", fontWeight: "500" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "50%", border: "1.5px solid #7C3AED", color: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold" }}>✓</span>
                      {text}
                    </div>
                  ))}
                </div>

                <button style={{ background: "#FFFFFF", border: "1.5px solid #6D28D9", color: "#6D28D9", padding: "12px 22px", borderRadius: "12px", fontSize: "13px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", transition: "all 0.2s ease" }}>
                  DOWNLOAD DOSSIER <span style={{ fontSize: "16px" }}>⤓</span>
                </button>
              </div>

              {/* Student Image with Card Frame */}
              <div style={{ position: "relative", textAlign: "center" }}>
                <div style={{ width: "100%", height: "340px", position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(109, 40, 217, 0.12)" }}>
                  <img 
                    src="/images/hero_student.jpg" 
                    alt="TechLearns Student" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

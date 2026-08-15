"use client";

export default function FounderSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            FOUNDER
          </div>
          <div style={{ width: "32px", height: "3px", background: "#6D28D9", borderRadius: "2px", margin: "0 auto 14px" }}></div>
          
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Meet Our <span style={{ color: "#6D28D9" }}>Founder</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Visionary Leader. Tech Entrepreneur. Educationist.
          </p>
        </div>

        {/* 2-Column Founder Feature */}
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "40px", alignItems: "center", marginBottom: "40px" }}>
          
          {/* Left Founder Photo Card */}
          <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 35px rgba(0,0,0,0.06)", border: "1px solid #EDE9FE", background: "#FFFFFF" }}>
            <div style={{ height: "360px", background: "#F1F5F9", overflow: "hidden" }}>
              <img 
                src="/crops/founder_ankur.png" 
                alt="Ankur Gill - Founder & CEO" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <div style={{ background: "#6D28D9", padding: "20px", color: "#FFFFFF", textAlign: "left" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "2px" }}>
                Ankur Gill
              </h3>
              <div style={{ fontSize: "12.5px", color: "#DDD6FE" }}>
                Founder & CEO, TechLearns Academy
              </div>
            </div>
          </div>

          {/* Right Founder Story & 4 Feature Pillars */}
          <div>
            
            {/* Quote */}
            <div style={{ background: "#FAF8FF", borderLeft: "4px solid #6D28D9", padding: "18px 24px", borderRadius: "0 16px 16px 0", marginBottom: "28px" }}>
              <p style={{ fontSize: "14px", color: "#1E1B4B", lineHeight: "1.6", fontStyle: "italic", fontWeight: "500" }}>
                <span style={{ color: "#6D28D9", fontSize: "20px", fontWeight: "bold", marginRight: "6px" }}>“</span>
                My mission is to bridge the gap between learning and real-world success by empowering students with industry-relevant skills, mentorship, and the right opportunities.
                <span style={{ color: "#6D28D9", fontSize: "20px", fontWeight: "bold", marginLeft: "6px" }}>”</span>
              </p>
            </div>

            {/* 4 Feature Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#7C3AED", flexShrink: 0 }}>
                  🏆
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#111827", marginBottom: "2px" }}>
                    Seasoned Entrepreneur
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.4" }}>
                    Successfully built and scaled multiple ventures in technology and digital solutions.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#7C3AED", flexShrink: 0 }}>
                  👤
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#111827", marginBottom: "2px" }}>
                    Mentor & Guide
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.4" }}>
                    Mentored thousands of students and professionals to achieve their career goals.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#7C3AED", flexShrink: 0 }}>
                  💡
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#111827", marginBottom: "2px" }}>
                    Industry Expert
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.4" }}>
                    Deep expertise in Full Stack Development, AI, and emerging technologies.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#7C3AED", flexShrink: 0 }}>
                  🎓
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#111827", marginBottom: "2px" }}>
                    Educationist
                  </h4>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.4" }}>
                    Passionate about transforming education and creating future-ready professionals.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom 4 Metric Pills Card */}
        <div style={{ background: "#FFFFFF", border: "1px solid #EDE9FE", borderRadius: "20px", padding: "20px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", alignItems: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "24px" }}>👥</span>
            <div>
              <div style={{ fontSize: "18px", fontWeight: "900", color: "#1E1B4B" }}>10K+</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Students Mentored</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "24px" }}>💼</span>
            <div>
              <div style={{ fontSize: "18px", fontWeight: "900", color: "#1E1B4B" }}>15+</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Years of Experience</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "24px" }}>🏢</span>
            <div>
              <div style={{ fontSize: "18px", fontWeight: "900", color: "#1E1B4B" }}>5+</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Successful Ventures</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "24px" }}>🎯</span>
            <div>
              <div style={{ fontSize: "18px", fontWeight: "900", color: "#1E1B4B" }}>1 Mission</div>
              <div style={{ fontSize: "12px", color: "#64748B", fontWeight: "600" }}>Empowering Careers</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

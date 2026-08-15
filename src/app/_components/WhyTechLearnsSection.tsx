"use client";

export default function WhyTechLearnsSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#6D28D9", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            WHY TECHLEARNS ACADEMY
          </div>
          <div style={{ width: "32px", height: "3px", background: "#6D28D9", borderRadius: "2px", marginBottom: "16px" }}></div>
          
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "36px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "10px" }}>
            Industry-tailored <span style={{ color: "#6D28D9" }}>learning</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Everything we do is designed to make you job-ready and future-ready.
          </p>
        </div>

        {/* 2-Column Layout: 4 Cards Left, Video Testimonial Right */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "36px", alignItems: "stretch" }}>
          
          {/* 4 Feature Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            
            {/* Card 1 */}
            <div style={{ background: "#FAFAFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#F3EEFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#7C3AED", marginBottom: "16px" }}>
                  📖
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E1B4B", marginBottom: "8px" }}>
                  Industry-oriented curriculum
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#7C3AED", borderRadius: "2px", marginBottom: "12px" }}></div>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.5" }}>
                  An updated curriculum engineered to teach you only what the industry demands.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: "#FAFAFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#2563EB", marginBottom: "16px" }}>
                  ✨
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E1B4B", marginBottom: "8px" }}>
                  AI-driven learning products
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#2563EB", borderRadius: "2px", marginBottom: "12px" }}></div>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.5" }}>
                  AI-based IDE with real-time support and help, AI-based mock interviews, and smart evaluation systems.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: "#FAFAFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#16A34A", marginBottom: "16px" }}>
                  👨‍🏫
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E1B4B", marginBottom: "8px" }}>
                  Experienced Instructors
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#16A34A", borderRadius: "2px", marginBottom: "12px" }}></div>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.5" }}>
                  Courses taught only by people who have already aced it! 1000+ tech professionals to guide you.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{ background: "#FAFAFF", borderRadius: "18px", border: "1px solid #EDE9FE", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#EA580C", marginBottom: "16px" }}>
                  📋
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1E1B4B", marginBottom: "8px" }}>
                  1000+ mock interviews
                </h4>
                <div style={{ width: "24px", height: "3px", background: "#EA580C", borderRadius: "2px", marginBottom: "12px" }}></div>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.5" }}>
                  Practice your skills with unlimited number of mock interviews you can schedule yourself.
                </p>
              </div>
            </div>

          </div>

          {/* Right Video Testimonial Card */}
          <div style={{ background: "#FFFFFF", borderRadius: "24px", border: "1px solid #EDE9FE", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
            
            {/* Video Frame with Play Overlay */}
            <div style={{ position: "relative", width: "100%", height: "280px", background: "#0F172A" }}>
              <img 
                src="/crops/aman_kumar.png" 
                alt="Aman Kumar Testimonial" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div style={{ position: "absolute", top: "18px", right: "18px", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1.5px solid rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "16px", cursor: "pointer" }}>
                ▶
              </div>

              {/* Slider Controls */}
              <div style={{ position: "absolute", bottom: "14px", left: "0", right: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "14px" }}>&lt;</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#A855F7" }}></span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }}></span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }}></span>
                <span style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "14px" }}>&gt;</span>
              </div>
            </div>

            {/* Bottom Testimonial Card Details */}
            <div style={{ padding: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "800", color: "#6D28D9" }}>
                  Aman Kumar
                </h4>
                <span style={{ background: "#0A66C2", color: "#FFFFFF", padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>
                  in
                </span>
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748B", marginBottom: "14px" }}>
                Data Analyst • CTC: 8 LPA
              </div>
              <p style={{ fontSize: "13px", color: "#334155", lineHeight: "1.6" }}>
                <span style={{ color: "#6D28D9", fontSize: "18px", fontWeight: "bold", marginRight: "6px" }}>“</span>
                TechLearns Academy changed my career journey. The training, projects and mock interviews helped me crack the job I always dreamed of.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

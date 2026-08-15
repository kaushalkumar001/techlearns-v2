"use client";

import Link from "next/link";

const stepsData = [
  {
    num: "01",
    icon: "📋",
    iconBg: "#F3EEFF",
    iconColor: "#7C3AED",
    barColor: "#7C3AED",
    title: "Enroll",
    desc: "Choose your program and complete a simple enrollment process."
  },
  {
    num: "02",
    icon: "🎓",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
    barColor: "#16A34A",
    title: "Learn",
    desc: "Attend live classes with industry experts and access materials."
  },
  {
    num: "03",
    icon: "</>",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
    barColor: "#EA580C",
    title: "Practice",
    desc: "Work on real-world projects and hands-on assignments."
  },
  {
    num: "04",
    icon: "🏅",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    barColor: "#2563EB",
    title: "Get Certified",
    desc: "Earn industry-recognized certificates upon completion."
  },
  {
    num: "05",
    icon: "💼",
    iconBg: "#FDF2F8",
    iconColor: "#DB2777",
    barColor: "#DB2777",
    title: "Get Placed",
    desc: "Apply for jobs with our dedicated placement support."
  }
];

export default function StepsSection() {
  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "48px", alignItems: "center" }}>
          
          {/* Left Column: Heading, Subtitle & Public Image Learning Path Card */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F3EEFF", border: "1px solid #E4D7FF", padding: "6px 16px", borderRadius: "9999px", color: "#6D28D9", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.04em", marginBottom: "16px" }}>
              <span>⭐</span> YOUR JOURNEY, OUR COMMITMENT
            </div>

            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "40px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "8px", lineHeight: "1.2" }}>
              Get Job-Ready<br />in <span style={{ color: "#6D28D9" }}>5 Steps</span>
            </h2>

            <div style={{ width: "36px", height: "3px", background: "#6D28D9", borderRadius: "2px", marginBottom: "18px" }}></div>

            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.6", marginBottom: "28px", maxWidth: "420px" }}>
              From enrollment to placement — one guided path, backed by mentors the whole way.
            </p>

            {/* Publicly Available Career Transformation Visual Card */}
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 14px 35px rgba(109, 40, 217, 0.08)", border: "1px solid #EDE9FE", background: "#FAF8FF" }}>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Student Career Transformation Journey" 
                style={{ width: "100%", height: "240px", objectFit: "cover" }} 
              />
              <div style={{ padding: "18px 24px", background: "linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1E1B4B" }}>🎯 100% Guided Learning Pathway</div>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>From Day 1 onboarding to top tier tech offer letter</div>
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#F3EEFF", color: "#6D28D9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "bold" }}>
                  →
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Connected Step Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative" }}>
            
            {/* Timeline dotted line connector */}
            <div style={{ position: "absolute", left: "18px", top: "30px", bottom: "30px", width: "2px", borderLeft: "2px dashed #DDD6FE", zIndex: 0 }}></div>

            {stepsData.map((step, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "18px", 
                  background: "#FFFFFF", 
                  border: "1px solid #EDE9FE", 
                  borderRight: `5px solid ${step.barColor}`,
                  borderRadius: "16px", 
                  padding: "16px 20px", 
                  boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                  position: "relative",
                  zIndex: 1
                }}
              >
                {/* Step Number Badge */}
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#4338CA", color: "#FFFFFF", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>
                  {step.num}
                </div>

                {/* Step Icon */}
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: step.iconBg, color: step.iconColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold", flexShrink: 0 }}>
                  {step.icon}
                </div>

                {/* Step Text */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#1F2937", marginBottom: "3px" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.4" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom Banner */}
        <div style={{ background: "#FAF8FF", border: "1px solid #EDE9FE", borderRadius: "20px", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginTop: "50px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "#4338CA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#FFFFFF", flexShrink: 0 }}>
              👥
            </div>
            <div>
              <h4 style={{ fontSize: "15.5px", fontWeight: "800", color: "#1E1B4B", marginBottom: "2px" }}>
                We&apos;re with you at every step!
              </h4>
              <p style={{ fontSize: "13px", color: "#64748B" }}>
                Learn, grow and achieve with the right guidance and support.
              </p>
            </div>
          </div>

          <Link href="#courses" style={{ background: "#4338CA", color: "#FFFFFF", padding: "12px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 14px rgba(67, 56, 202, 0.3)" }}>
            Explore Programs →
          </Link>
        </div>

      </div>
    </section>
  );
}

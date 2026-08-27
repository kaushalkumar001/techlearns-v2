"use client";

import React from "react";

export default function PartnersDayInLife() {
  const dailySchedule = [
    { time: "09:30 AM", title: "TEAM HUDDLE", desc: "The day begins with priorities, goals and team responsibilities." },
    { time: "10:00 AM", title: "TECH LEARNING", desc: "A new concept is introduced with practical industry relevance." },
    { time: "11:30 AM", title: "HANDS-ON BUILDING", desc: "Students implement the concept through practical development." },
    { time: "01:00 PM", title: "COLLABORATE", desc: "Team members discuss blockers, solutions and architectural approaches." },
    { time: "02:00 PM", title: "PROJECT SPRINT", desc: "Learners work on applications, products or industry-oriented problems." },
    { time: "03:30 PM", title: "CODE / WORK REVIEW", desc: "Mentors or peers review work and suggest optimizations." },
    { time: "04:30 PM", title: "CHALLENGE", desc: "Students face a coding, design, problem-solving or innovation challenge." },
    { time: "05:15 PM", title: "DEMO & PRESENT", desc: "Selected learners explain what they created and what they learned." },
    { time: "05:45 PM", title: "REFLECT & PLAN", desc: "Progress is documented and the next milestone is defined." }
  ];

  const studentGrowthStages = [
    { label: "MONTH 1", title: "“TELL ME WHAT TO DO.”", desc: "The student is learning fundamentals and needs clear direction." },
    { label: "EARLY JOURNEY", title: "“I CAN DO THIS TASK.”", desc: "The student starts applying concepts independently." },
    { label: "DEVELOPING JOURNEY", title: "“I CAN BUILD THIS.”", desc: "Projects start replacing simple classroom assignments." },
    { label: "ADVANCED JOURNEY", title: "“WE CAN BUILD THIS TOGETHER.”", desc: "The learner understands collaboration, sprints, and teamwork." },
    { label: "EXPERIENCE STAGE", title: "“I CAN SOLVE THIS PROBLEM.”", desc: "The student begins thinking beyond step-by-step instructions." },
    { label: "PROFESSIONAL STAGE", title: "“I CAN OWN THIS.”", desc: "The learner manages responsibility, quality, and strict deadlines." },
    { label: "CAREER-READY STAGE", title: "“LET ME SHOW YOU WHAT I CAN DO.”", desc: "Enters interviews with Projects, Evidence, Confidence & Experience." }
  ];

  return (
    <>
      {/* SECTION 05: A GLIMPSE INSIDE THE CEL ENVIRONMENT */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "5px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              05. A DAY IN THE LIFE
            </span>
            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: "900", color: "#0B1F3A", marginTop: "14px", marginBottom: "16px" }}>
              A Glimpse Inside the CEL Environment
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: "1.7" }}>
              This is what learning actually feels like when built around real corporate execution.
            </p>
          </div>

          {/* Daily Schedule Timeline */}
          <div style={{ maxWidth: "860px", margin: "0 auto 48px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {dailySchedule.map((slot, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "900",
                    fontFamily: "monospace",
                    whiteSpace: "nowrap"
                  }}
                >
                  {slot.time}
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0B1F3A", marginBottom: "2px" }}>
                    {slot.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748B", margin: 0 }}>
                    {slot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Philosophy Pillars */}
          <div
            style={{
              background: "linear-gradient(135deg, #F5F0FF 0%, #EDE9FE 100%)",
              border: "1.5px solid #D8B4FE",
              borderRadius: "24px",
              padding: "32px",
              textAlign: "center"
            }}
          >
            <span style={{ color: "#5B2E91", fontSize: "12px", fontWeight: "900", letterSpacing: "0.1em", textTransform: "uppercase" }}>THE DAILY PHILOSOPHY</span>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "16px" }}>
              {["Learn Something.", "Apply Something.", "Build Something.", "Share Something.", "Improve Something."].map((p, i) => (
                <span key={i} style={{ background: "#FFFFFF", color: "#5B2E91", padding: "8px 20px", borderRadius: "9999px", fontSize: "14px", fontWeight: "800", boxShadow: "0 4px 12px rgba(91, 46, 145, 0.1)" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 06: HOW CEL CHANGES A STUDENT OVER TIME */}
      <section style={{ padding: "80px 0", background: "#F8FAFC" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ background: "#F5F0FF", border: "1px solid #E4D7FF", color: "#5B2E91", padding: "5px 16px", borderRadius: "9999px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              06. STUDENT TRANSFORMATION
            </span>
            <h2 style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: "900", color: "#0B1F3A", marginTop: "14px", marginBottom: "16px" }}>
              How CEL Changes a Student Over Time
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: "1.7" }}>
              Growth You Can Feel. Progress You Can See.
            </p>
          </div>

          {/* Growth Stages Vertical Pathway */}
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            {studentGrowthStages.map((stage, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "18px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
                }}
              >
                <span style={{ background: "#5B2E91", color: "#FFFFFF", fontSize: "11px", fontWeight: "900", padding: "6px 14px", borderRadius: "8px", whiteSpace: "nowrap" }}>
                  {stage.label}
                </span>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#0B1F3A", marginBottom: "4px" }}>
                    {stage.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748B", margin: 0, lineHeight: "1.6" }}>
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

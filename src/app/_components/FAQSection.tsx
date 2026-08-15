"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "general", label: "General & About", icon: "ℹ️" },
  { id: "courses", label: "Courses & Curriculum", icon: "🎓" },
  { id: "learning", label: "Learning Experience", icon: "💻" },
  { id: "placement", label: "Placements & Career", icon: "💼" },
  { id: "fees", label: "Fees & Admissions", icon: "👤" },
  { id: "support", label: "Support & Others", icon: "🎧" }
];

const allFaqs = [
  {
    q: "What is TechLearns Academy?",
    a: "TechLearns Academy is a next-generation corporate learning ecosystem providing intensive, hands-on software engineering, Data Science, and AI training with live corporate projects, 1-on-1 mentorship, and guaranteed placement support.",
    cat: "general"
  },
  {
    q: "Who can join TechLearns Academy courses?",
    a: "Our programs are open to college students, fresh graduates, working IT professionals, and non-tech career switchers looking to build production-grade technology skills.",
    cat: "general"
  },
  {
    q: "Do I need any prior coding experience to enroll?",
    a: "No prior coding experience is required! We start from foundational programming principles before progressing to advanced full-stack and machine learning architectures.",
    cat: "general"
  },
  {
    q: "What courses does TechLearns Academy offer?",
    a: "We offer flagship programs in Data Science & Artificial Intelligence, Full Stack Web Development with AI, Cloud & DevOps, and Cybersecurity SOC Operations.",
    cat: "courses"
  },
  {
    q: "What is the duration of the courses?",
    a: "Course durations range from 4 months to 14 months depending on the domain and depth of hands-on capstone engineering.",
    cat: "courses"
  },
  {
    q: "Are the classes online or offline?",
    a: "We provide flexible hybrid options: live interactive online masterclasses as well as offline learning access at our state-of-the-art tech hubs.",
    cat: "learning"
  },
  {
    q: "Will I get a certificate after completing the course?",
    a: "Yes! You receive an industry-recognized course completion certificate alongside your audit-verified Skill Passport detailing your actual codebase contributions.",
    cat: "courses"
  },
  {
    q: "Does TechLearns provide placement assistance?",
    a: "Yes, TechLearns offers 100% lifetime placement assistance with resume reviews, mock technical interviews, and direct referrals to 800+ hiring partners.",
    cat: "placement"
  }
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F5F3FF", border: "1px solid #EDE9FE", padding: "6px 16px", borderRadius: "9999px", color: "#6D28D9", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
            <span>?</span> GOT QUESTIONS?
          </div>

          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#111827", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Frequently Asked <span style={{ color: "#6D28D9" }}>Questions</span>
          </h2>
          <div style={{ width: "36px", height: "3px", background: "#6D28D9", borderRadius: "2px", margin: "0 auto 14px" }}></div>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "600px", margin: "0 auto" }}>
            Find answers to the most common questions about TechLearns Academy, our courses, learning experience, and placements.
          </p>
        </div>

        {/* 2-Column: Left Category Sidebar, Right Accordions */}
        <div style={{ display: "grid", gridTemplateColumns: "0.38fr 0.62fr", gap: "32px", alignItems: "start", marginBottom: "40px" }}>
          
          {/* Left Category Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {categories.map((c) => {
              const isActive = activeTab === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => { setActiveTab(c.id); setOpenIndex(0); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    border: isActive ? "none" : "1px solid #EDE9FE",
                    background: isActive ? "linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "#374151",
                    fontSize: "14px",
                    fontWeight: isActive ? "700" : "500",
                    cursor: "pointer",
                    textAlign: "left",
                    boxShadow: isActive ? "0 8px 20px rgba(109,40,217,0.25)" : "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{c.icon}</span>
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Accordions List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {allFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EDE9FE",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: isOpen ? "0 6px 20px rgba(109, 40, 217, 0.05)" : "none"
                  }}
                >
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    style={{
                      width: "100%",
                      padding: "18px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1E293B",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: "16px", color: isOpen ? "#6D28D9" : "#94A3B8", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}>
                      ⌄
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 22px 18px", fontSize: "13.5px", color: "#64748B", lineHeight: "1.6" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Callout Bar */}
        <div style={{ background: "#FAF8FF", border: "1px solid #EDE9FE", borderRadius: "20px", padding: "18px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#6D28D9", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold" }}>
              ?
            </div>
            <div>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#1E1B4B", marginBottom: "2px" }}>
                Still have questions?
              </h4>
              <p style={{ fontSize: "13px", color: "#64748B" }}>
                We&apos;re here to help you every step of the way.
              </p>
            </div>
          </div>

          <Link href="/contact" style={{ background: "#6D28D9", color: "#FFFFFF", padding: "12px 24px", borderRadius: "10px", fontSize: "13.5px", fontWeight: "700", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 14px rgba(109, 40, 217, 0.3)" }}>
            <span>✈</span> Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}

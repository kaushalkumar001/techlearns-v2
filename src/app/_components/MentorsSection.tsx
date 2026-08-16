"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const mentorsData = [
  {
    name: "Dr. Pavan Duggal",
    desc: "An intellectual & influencer and recognized thought leader in Cyber Law, Technology, Privacy and Policy.",
    role: "Ex Advocate, Supreme Court of India, Expert Authority in Cyberlaw",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    logoText: "PAVAN DUGGAL ASSOCIATES",
    logoSub: "Advocates",
    logoColor: "#8B5CF6"
  },
  {
    name: "CPA Nimisha Chiripal",
    desc: "US CPA, recognized for expertise and data-driven insights. Guides learners with real-world financial perspectives.",
    role: "Senior Manager",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    logoText: "Deloitte.",
    logoSub: "Financial Advisory",
    logoColor: "#8B5CF6"
  },
  {
    name: "Adv. Vikrant Rana",
    desc: "Litigation expert in corporate and regulatory laws. Advisor on legal frameworks and compliance.",
    role: "Managing Partner",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    logoText: "SR LEX FIRM",
    logoSub: "Advocates & Solicitors",
    logoColor: "#8B5CF6"
  },
  {
    name: "Mr. Goutam Bhattacharya",
    desc: "Award-winning leader in GCCs, HR transformation & strategic operations. Helping organizations scale globally with agile teams.",
    role: "CEO - LSSSDC, NASSCOM & Development Council",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    logoText: "LSSSDC",
    logoSub: "Excellence Through Skills",
    logoColor: "#8B5CF6"
  },
  {
    name: "Dr. Amlan Chakraborty",
    desc: "Accomplished academician and researcher specializing in analytics and decision sciences.",
    role: "Ph.D, Expert Professor & Director, University of Calcutta",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    logoText: "UNIVERSITY OF CALCUTTA",
    logoSub: "Est. 1857",
    logoColor: "#8B5CF6"
  },
  {
    name: "CA Arvind Tuli",
    desc: "Finance leader & mentor for startups and learners. Brings practical insights from industry.",
    role: "Educator & Startup Mentor",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80",
    logoText: "unacademy",
    logoSub: "Learning Ecosystem",
    logoColor: "#8B5CF6"
  }
];

export default function MentorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dragContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // Smooth physics spring for smooth, elegant movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    restDelta: 0.001
  });

  // Scroll translation: Cards start at right (+550px) and slide left (-650px) while scrolling
  const x = useTransform(smoothProgress, [0, 1], ["1500px", "-650px"]);

  return (
    <section ref={sectionRef} id="mentors" style={{ padding: "64px 0", background: "#FFFFFF", overflow: "hidden", position: "relative" }}>

      {/* Real Official TechLearns Logo Image dead center in the middle of the section background */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none"
        }}
      >
        <img
          src="/techlearns logo.png"
          alt="TechLearns Corporate Experience Learning"
          style={{
            height: "110px",
            width: "auto",
            objectFit: "contain"
          }}
        />
      </div>

      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>

        {/* Section Header */}
        <div style={{ textAlign: "left", maxWidth: "672px", marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            OUR DISTINGUISHED
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", marginBottom: "16px" }}></div>
          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.01em", margin: 0 }}>
            INDUSTRY <span style={{ color: "#5B2E91" }}>MENTORS</span>
          </h2>
        </div>

      </div>

      {/* Outer Overflow Container on Layer 5 (slides horizontally in front of the background logo) */}
      <div ref={dragContainerRef} style={{ width: "100%", overflow: "hidden", paddingTop: "24px", paddingBottom: "24px", position: "relative", zIndex: 5 }}>

        {/* Layer 1: Scroll-Driven Parallax Motion (translates right to left as user scrolls down) */}
        <motion.div
          style={{
            display: "flex",
            width: "max-content",
            paddingLeft: "calc((100vw - 1280px) / 2 + 24px)",
            x
          }}
        >
          {/* Layer 2: Palm / Mouse Drag Layer (enables interactive click & drag with palm cursor) */}
          <motion.div
            drag="x"
            dragConstraints={{ left: -1400, right: 400 }}
            dragElastic={0.15}
            whileTap={{ cursor: "grabbing" }}
            style={{
              display: "flex",
              gap: "24px",
              cursor: "grab",
              userSelect: "none"
            }}
          >
            {mentorsData.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                style={{
                  minWidth: "350px",
                  maxWidth: "370px",
                  flexShrink: 0,
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(11, 31, 58, 0.06)",
                  border: "1px solid #EDE9FE",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.2s ease"
                }}
              >
                {/* Top Dark Navy Tier strictly using brand color (#0B1F3A) */}
                <div style={{ background: "#0B1F3A", padding: "24px", color: "#FFFFFF", position: "relative", minHeight: "150px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <img
                      src={m.photo}
                      alt={m.name}
                      style={{ width: "80px", height: "96px", borderRadius: "14px", objectFit: "cover", flexShrink: 0, border: "2px solid rgba(139, 92, 246, 0.4)" }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#FFFFFF", marginBottom: "6px", lineHeight: "1.25" }}>
                        {m.name}
                      </h4>
                      <p style={{ fontSize: "12.5px", color: "#CBD5E1", lineHeight: "1.5", margin: 0 }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Quote Mark strictly using #8B5CF6 */}
                  <div style={{ position: "absolute", bottom: "8px", right: "16px", fontSize: "32px", color: "#8B5CF6", opacity: 0.6, fontWeight: "900", fontFamily: "Georgia, serif" }}>
                    ”
                  </div>
                </div>

                {/* Bottom White Tier with Purple Accent Border (#8B5CF6) & Navy Role Text (#0B1F3A) */}
                <div style={{ background: "#FFFFFF", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, borderTop: "2px solid #8B5CF6" }}>
                  <div style={{ fontSize: "12px", color: "#0B1F3A", fontWeight: "700", maxWidth: "60%", lineHeight: "1.4" }}>
                    {m.role}
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "14px", fontWeight: "800", color: m.logoColor, letterSpacing: "-0.02em" }}>
                      {m.logoText}
                    </div>
                    {m.logoSub && (
                      <div style={{ fontSize: "9.5px", color: "#64748B", fontWeight: "600", marginTop: "2px" }}>
                        {m.logoSub}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}

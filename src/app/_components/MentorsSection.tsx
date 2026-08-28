"use client";

import React, { useRef, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Responsive scroll translation range
  const desktopX = useTransform(smoothProgress, [0, 1], ["500px", "-650px"]);
  const mobileX = useTransform(smoothProgress, [0, 1], ["0px", "-750px"]);
  const x = isMobile ? mobileX : desktopX;

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
            height: "clamp(60px, 12vw, 110px)",
            width: "auto",
            objectFit: "contain",
            opacity: 0.5
          }}
        />
      </div>

      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 clamp(16px, 3vw, 24px)", position: "relative", zIndex: 2 }}>

        {/* Section Header */}
        <div style={{ textAlign: "left", maxWidth: "672px", marginBottom: "24px" }}>
          <div style={{ fontSize: "clamp(10.5px, 1.2vw, 12px)", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            OUR DISTINGUISHED
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", marginBottom: "16px" }}></div>
          <h2 className="mentors-header-title">
            INDUSTRY <span style={{ color: "#5B2E91" }}>MENTORS</span>
          </h2>
        </div>

      </div>

      {/* Outer Overflow Container on Layer 5 */}
      <div ref={dragContainerRef} style={{ width: "100%", overflow: "hidden", paddingTop: "24px", paddingBottom: "24px", position: "relative", zIndex: 5 }}>

        {/* Layer 1: Scroll-Driven Parallax Motion */}
        <motion.div
          className="mentors-parallax-track"
          style={{
            display: "flex",
            width: "max-content",
            x
          }}
        >
          {/* Layer 2: Palm / Mouse Drag Layer */}
          <motion.div
            drag="x"
            dragConstraints={{ left: -1400, right: 100 }}
            dragElastic={0.15}
            whileTap={{ cursor: "grabbing" }}
            style={{
              display: "flex",
              gap: "clamp(14px, 2.5vw, 24px)",
              cursor: "grab",
              userSelect: "none"
            }}
          >
            {mentorsData.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="mentor-card"
              >
                {/* Top Dark Navy Tier */}
                <div className="mentor-card-top">
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="mentor-photo"
                    />
                    <div style={{ flex: 1 }}>
                      <h4 className="mentor-name">
                        {m.name}
                      </h4>
                      <p className="mentor-desc">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Quote Mark */}
                  <div className="mentor-quote-mark">
                    ”
                  </div>
                </div>

                {/* Bottom White Tier */}
                <div className="mentor-card-bottom">
                  <div className="mentor-role">
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

      <style jsx global>{`
        /* Fully Responsive CSS Architecture for MentorsSection */

        .mentors-header-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.75rem, 4.2vw, 2.375rem);
          font-weight: 900;
          color: #0B1F3A;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .mentors-parallax-track {
          padding-left: max(24px, calc((100vw - 1280px) / 2 + 24px));
        }

        .mentor-card {
          min-width: clamp(270px, 80vw, 350px);
          max-width: clamp(285px, 85vw, 370px);
          flex-shrink: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(11, 31, 58, 0.06);
          border: 1px solid #EDE9FE;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .mentor-card-top {
          background: #0B1F3A;
          padding: clamp(18px, 3vw, 24px);
          color: #FFFFFF;
          position: relative;
          min-height: 150px;
        }

        .mentor-photo {
          width: clamp(66px, 12vw, 80px);
          height: clamp(80px, 14vw, 96px);
          border-radius: 14px;
          object-fit: cover;
          flex-shrink: 0;
          border: 2px solid rgba(139, 92, 246, 0.4);
        }

        .mentor-name {
          font-size: clamp(15px, 2vw, 17px);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .mentor-desc {
          font-size: clamp(11.5px, 1.3vw, 12.5px);
          color: #CBD5E1;
          line-height: 1.5;
          margin: 0;
        }

        .mentor-quote-mark {
          position: absolute;
          bottom: 8px;
          right: 16px;
          font-size: 32px;
          color: #8B5CF6;
          opacity: 0.6;
          font-weight: 900;
          font-family: Georgia, serif;
        }

        .mentor-card-bottom {
          background: #FFFFFF;
          padding: 16px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
          border-top: 2px solid #8B5CF6;
        }

        .mentor-role {
          font-size: clamp(11px, 1.3vw, 12px);
          color: #0B1F3A;
          font-weight: 700;
          max-width: 60%;
          line-height: 1.4;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
        ---------------------------------------------------- */

        @media (max-width: 767px) {
          .mentors-parallax-track {
            padding-left: 16px;
          }
          .mentor-card-top {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}

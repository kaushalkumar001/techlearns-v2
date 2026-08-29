"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Star,
  Scroll,
  Lightbulb,
  Rocket,
  CheckCircle2,
  Medal,
  Sparkles,
  Building2
} from "lucide-react";

interface AwardItem {
  id: string;
  title: string;
  org: string;
  year: string;
  desc: string;
  photo: string;
  badgeIcon: React.ReactNode;
  category: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

const awardsData: AwardItem[] = [
  {
    id: "award-1",
    title: "World Education Summit",
    org: "Elets Technomedia",
    year: "2024",
    desc: "Recognized for outstanding contribution to education technology and digital transformation in learning.",
    photo: "/images/award_summit_2024.jpg",
    badgeIcon: <Trophy size={20} color="#FFFFFF" />,
    category: "EdTech Innovation"
  },
  {
    id: "award-2",
    title: "Education Leadership Award",
    org: "Elets Technomedia",
    year: "2023",
    desc: "Honored for leadership in advancing quality education through technology and innovation.",
    photo: "/images/award_leadership_2023.jpg",
    badgeIcon: <Award size={20} color="#FFFFFF" />,
    category: "Academic Leadership",
    objectPosition: "center top"
  },
  {
    id: "award-3",
    title: "Indian Education Award",
    org: "Brand Empower",
    year: "2022",
    desc: "Awarded for excellence in education, mentorship and building future-ready learning solutions.",
    photo: "/images/award_indian_2022.jpg",
    badgeIcon: <Star size={20} color="#FFFFFF" />,
    category: "Mentorship Excellence",
    objectFit: "cover",
    objectPosition: "center 20%"
  },
  {
    id: "award-4",
    title: "National Education Excellence Award",
    org: "Education Today",
    year: "2021",
    desc: "Recognized for dedication towards academic excellence and student empowerment.",
    photo: "/images/award_national_2021.jpg",
    badgeIcon: <Scroll size={20} color="#FFFFFF" />,
    category: "Student Empowerment"
  },
  {
    id: "award-5",
    title: "Excellence in Education & Innovation",
    org: "Education Excellence Forum",
    year: "2020",
    desc: "Recognized for driving innovation in education and creating impactful technology-enabled learning experiences.",
    photo: "/images/award_innovation_2020.jpg",
    badgeIcon: <Lightbulb size={20} color="#FFFFFF" />,
    category: "Digital Transformation"
  },
  {
    id: "award-6",
    title: "Emerging Education Leader Award",
    org: "National Education Network",
    year: "2019",
    desc: "Honored for inspiring students and educators through leadership, mentorship and future-focused education initiatives.",
    photo: "/images/award_emerging_leader_2019.png",
    badgeIcon: <Rocket size={20} color="#FFFFFF" />,
    category: "Emerging Leader"
  }
];

export default function AwardsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      style={{
        padding: "clamp(60px, 7vw, 90px) 0 clamp(70px, 8vw, 110px)",
        background: "linear-gradient(180deg, #FAF9FC 0%, #F4F0FB 50%, #FAF9FC 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient background glowing accents */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "320px",
          background: "rgba(122, 66, 190, 0.12)",
          filter: "blur(110px)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "-50px",
          width: "350px",
          height: "350px",
          background: "rgba(91, 46, 145, 0.08)",
          filter: "blur(100px)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 24px)", position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto clamp(32px, 5vw, 50px)" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#EDE9FE",
              border: "1px solid #DDD6FE",
              color: "#5B2E91",
              fontSize: "12px",
              fontWeight: "800",
              padding: "6px 18px",
              borderRadius: "9999px",
              marginBottom: "16px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              boxShadow: "0 2px 8px rgba(91, 46, 145, 0.08)"
            }}
          >
            <Trophy size={14} color="#5B2E91" />
            AWARDS &amp; RECOGNITION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="awards-main-title"
          >
            Celebrating{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B2E91 0%, #7A42BE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Leadership &amp; Excellence
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "56px",
              height: "4px",
              background: "linear-gradient(90deg, #5B2E91 0%, #7A42BE 100%)",
              borderRadius: "2px",
              margin: "0 auto 16px"
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="awards-sub-title"
          >
            Prestigious honors reflecting our commitment to educational innovation, technology-driven learning, and student career transformation.
          </motion.p>
        </div>

        {/* Highlight Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="awards-stats-ribbon"
        >
          <div className="awards-stat-box awards-stat-first">
            <div className="awards-stat-value">6+</div>
            <div className="awards-stat-label">National Awards</div>
          </div>

          <div className="awards-stat-box">
            <div className="awards-stat-value">2019–2024</div>
            <div className="awards-stat-label">Years of Excellence</div>
          </div>

          <div className="awards-stat-box">
            <div className="awards-stat-value">5+</div>
            <div className="awards-stat-label">Top Awarding Bodies</div>
          </div>

          <div className="awards-stat-box">
            <div className="awards-stat-value">100%</div>
            <div className="awards-stat-label">Vetted &amp; Recognized</div>
          </div>
        </motion.div>

        {/* Static Grid of Award Cards */}
        <div className="awards-cards-grid">
          {awardsData.map((award, index) => {
            const isHovered = hoveredId === award.id;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(award.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  border: isHovered ? "1.5px solid #5B2E91" : "1.5px solid #EDE9FE",
                  overflow: "hidden",
                  boxShadow: isHovered
                    ? "0 22px 45px -12px rgba(91, 46, 145, 0.18)"
                    : "0 10px 30px -10px rgba(91, 46, 145, 0.07)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative"
                }}
              >
                {/* Photo Header */}
                <div style={{ position: "relative", height: "220px", background: award.objectFit === "contain" ? "#0F172A" : "#F1F5F9", overflow: "hidden" }}>
                  <img
                    src={award.photo}
                    alt={award.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: award.objectFit || "cover",
                      objectPosition: award.objectPosition || "center",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      transition: "transform 0.5s ease"
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(11, 31, 58, 0.65) 0%, transparent 65%)"
                    }}
                  />
                </div>

                {/* Card Body */}
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    {/* Organization Name */}
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#7A42BE",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <Building2 size={14} color="#7A42BE" />
                      <span>{award.org}</span>
                    </div>

                    {/* Award Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        fontSize: "20px",
                        fontWeight: "800",
                        color: isHovered ? "#5B2E91" : "#0B1F3A",
                        lineHeight: "1.3",
                        marginBottom: "10px",
                        transition: "color 0.2s ease"
                      }}
                    >
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.6", margin: 0 }}>
                      {award.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="awards-footer-banner"
        >
          <div
            style={{
              position: "absolute",
              right: "-20px",
              bottom: "-20px",
              width: "180px",
              height: "180px",
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h4
              style={{
                fontSize: "clamp(16px, 2.2vw, 20px)",
                fontWeight: "800",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-montserrat), sans-serif"
              }}
            >
              <Medal size={24} color="#FDE047" />
              Committed to Educational Excellence &amp; Industry Trust
            </h4>
            <p style={{ fontSize: "clamp(12.5px, 1.4vw, 14px)", color: "#E9D5FF", margin: 0, maxWidth: "650px", lineHeight: "1.5" }}>
              Recognized by leading industry platforms and academic forums for setting benchmark standards in corporate tech learning and career acceleration.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <a
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFFFFF",
                color: "#5B2E91",
                fontWeight: "800",
                fontSize: "14px",
                padding: "12px 26px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease"
              }}
            >
              Learn More About TechLearns
            </a>
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        /* Fully Responsive CSS Architecture for AwardsSection */

        .awards-main-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.85rem, 4.5vw, 2.625rem);
          font-weight: 800;
          color: #0B1F3A;
          letter-spacing: -0.03em;
          line-height: 1.18;
          margin-bottom: 14px;
        }

        .awards-sub-title {
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          color: #64748B;
          font-weight: 500;
          line-height: 1.6;
          margin: 0 auto;
        }

        .awards-stats-ribbon {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1.5px solid #EDE9FE;
          border-radius: 20px;
          padding: 24px 30px;
          margin-bottom: 50px;
          box-shadow: 0 10px 30px -10px rgba(91, 46, 145, 0.06);
        }

        .awards-stat-box {
          text-align: center;
          padding: 8px 12px;
          border-left: 1px solid #F1F5F9;
        }

        .awards-stat-first {
          border-left: none;
        }

        .awards-stat-value {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 900;
          color: #5B2E91;
          font-family: var(--font-montserrat), sans-serif;
        }

        .awards-stat-label {
          font-size: clamp(11.5px, 1.3vw, 13px);
          font-weight: 700;
          color: #475569;
          margin-top: 2px;
        }

        .awards-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .awards-footer-banner {
          margin-top: 60px;
          background: linear-gradient(135deg, #3A1B68 0%, #5B2E91 50%, #2A104E 100%);
          border-radius: 28px;
          padding: 36px 40px;
          color: #FFFFFF;
          box-shadow: 0 20px 50px -10px rgba(58, 27, 104, 0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
        ---------------------------------------------------- */

        /* Laptop (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1024px) {
          .awards-cards-grid {
            gap: 20px;
          }
        }

        /* Tablet Layout (768px to 1023px) */
        @media (max-width: 1023px) and (min-width: 640px) {
          .awards-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .awards-stats-ribbon {
            grid-template-columns: repeat(2, 1fr);
          }
          .awards-stat-box {
            border-left: none;
          }
        }

        /* Mobile Devices (<640px) */
        @media (max-width: 639px) {
          .awards-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .awards-stats-ribbon {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 18px 16px;
          }
          .awards-stat-box {
            border-left: none;
            padding: 4px;
          }
          .awards-footer-banner {
            padding: 24px 20px;
            border-radius: 20px;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Trophy, Award, Star, Scroll, Lightbulb, Rocket } from "lucide-react";

interface AwardItem {
  title: string;
  org: string;
  year: string;
  desc: string;
  photo: string;
  badgeIcon: React.ReactNode;
}

const awardsData: AwardItem[] = [
  {
    title: "World Education Summit",
    org: "Elets Technomedia",
    year: "2024",
    desc: "Recognized for outstanding contribution to education technology and digital transformation in learning.",
    photo: "/images/award_summit_2024.jpg",
    badgeIcon: <Trophy size={20} color="#FFFFFF" />
  },
  {
    title: "Education Leadership Award",
    org: "Elets Technomedia",
    year: "2023",
    desc: "Honored for leadership in advancing quality education through technology and innovation.",
    photo: "/images/award_leadership_2023.jpg",
    badgeIcon: <Award size={20} color="#FFFFFF" />
  },
  {
    title: "Indian Education Award",
    org: "Brand Empower",
    year: "2022",
    desc: "Awarded for excellence in education, mentorship and building future-ready learning solutions.",
    photo: "/images/award_indian_2022.jpg",
    badgeIcon: <Star size={20} color="#FFFFFF" />
  },
  {
    title: "National Education Excellence Award",
    org: "Education Today",
    year: "2021",
    desc: "Recognized for dedication towards academic excellence and student empowerment.",
    photo: "/images/award_national_2021.jpg",
    badgeIcon: <Scroll size={20} color="#FFFFFF" />
  },
  {
    title: "Excellence in Education & Innovation",
    org: "Education Excellence Forum",
    year: "2020",
    desc: "Recognized for driving innovation in education and creating impactful technology-enabled learning experiences.",
    photo: "/images/award_innovation_2020.jpg",
    badgeIcon: <Lightbulb size={20} color="#FFFFFF" />
  },
  {
    title: "Emerging Education Leader Award",
    org: "National Education Network",
    year: "2019",
    desc: "Honored for inspiring students and educators through leadership, mentorship and future-focused education initiatives.",
    photo: "/images/award_emerging_leader_2019.jpg",
    badgeIcon: <Rocket size={20} color="#FFFFFF" />
  }
];

export default function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = awardsData.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const getCardStyle = (index: number) => {
    // Calculate circular offset relative to activeIndex (-2, -1, 0, 1, 2)
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    // 3D Circular Positioning Variables
    let translateX = diff * 260; // horizontal spacing on 3D ring
    let translateZ = -absDiff * 180; // depth position on 3D ring
    let rotateY = diff * -18; // 3D rotation angle
    let scale = Math.max(0.72, 1 - absDiff * 0.15);
    let opacity = 1 - absDiff * 0.35;
    let zIndex = 10 - absDiff;

    if (absDiff > 2) {
      opacity = 0;
      scale = 0.5;
    }

    return {
      transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      pointerEvents: (absDiff === 0 ? "auto" : "none") as React.CSSProperties["pointerEvents"]
    };
  };

  return (
    <section
      style={{
        padding: "80px 0 100px",
        background: "#FAF9FC",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#EDE9FE",
              color: "#5B2E91",
              fontSize: "12px",
              fontWeight: "800",
              padding: "5px 16px",
              borderRadius: "9999px",
              marginBottom: "16px",
              letterSpacing: "0.08em"
            }}
          >
            AWARDS &amp; RECOGNITION
          </div>

          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "44px",
              fontWeight: "800",
              color: "#0B1F3A",
              letterSpacing: "-0.03em",
              lineHeight: "1.15",
              marginBottom: "14px"
            }}
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
          </h2>

          <div style={{ width: "48px", height: "4px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto 16px" }} />

          <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "600px", margin: "0 auto", fontWeight: "500" }}>
            Recognitions that reflect our commitment to innovation, education and meaningful impact.
          </p>
        </div>

        {/* 3D Circular Gallery Stage */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: "relative",
            height: "480px",
            perspective: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px"
          }}
        >
          {awardsData.map((award, idx) => {
            const style = getCardStyle(idx);
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  position: "absolute",
                  width: "360px",
                  background: "#FFFFFF",
                  borderRadius: "28px",
                  border: isActive ? "2px solid #5B2E91" : "1.5px solid #EDE9FE",
                  overflow: "hidden",
                  transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, border-color 0.3s ease",
                  cursor: "pointer",
                  willChange: "transform, opacity",
                  ...style
                }}
              >
                {/* Photo Header */}
                <div style={{ position: "relative", height: "220px", background: "#F1F5F9", overflow: "hidden" }}>
                  <img
                    src={award.photo}
                    alt={award.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(11, 31, 58, 0.6) 0%, transparent 60%)"
                    }}
                  />

                  {/* Badge Icon Circle */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-18px",
                      left: "24px",
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #5B2E91 0%, #7A42BE 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid #FFFFFF"
                    }}
                  >
                    {award.badgeIcon}
                  </div>

                  {/* Year Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "rgba(255, 255, 255, 0.95)",
                      color: "#3A1B68",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: "800",
                      letterSpacing: "0.04em"
                    }}
                  >
                    {award.year}
                  </div>
                </div>

                {/* Text Body */}
                <div style={{ padding: "30px 24px 26px" }}>
                  <div style={{ fontSize: "12px", color: "#7A42BE", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    {award.org}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      fontSize: "19px",
                      fontWeight: "800",
                      color: "#0B1F3A",
                      lineHeight: "1.3",
                      marginBottom: "10px"
                    }}
                  >
                    {award.title}
                  </h3>

                  <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.55", margin: 0 }}>
                    {award.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Circular Gallery Controls & Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Award"
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "#FFFFFF",
              border: "1.5px solid #EDE9FE",
              color: "#3A1B68",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3A1B68";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "#3A1B68";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#3A1B68";
              e.currentTarget.style.borderColor = "#EDE9FE";
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots Indicator Track */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {awardsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === activeIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: idx === activeIndex ? "#5B2E91" : "#CBD5E1",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Award"
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "#FFFFFF",
              border: "1.5px solid #EDE9FE",
              color: "#3A1B68",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3A1B68";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "#3A1B68";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#3A1B68";
              e.currentTarget.style.borderColor = "#EDE9FE";
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}

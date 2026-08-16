"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { programsData } from "../data/programs";

export default function ProgramsSection({ onOpenModal }: { onOpenModal?: (title: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "AI & GenAI",
    "Software Eng",
    "Cloud & DevOps",
    "Cybersecurity",
    "Data & Analytics"
  ];

  const filteredPrograms = activeCategory === "All"
    ? programsData
    : programsData.filter((p) => {
      if (activeCategory === "AI & GenAI") return p.category.includes("AI");
      if (activeCategory === "Software Eng") return p.category.includes("Software");
      if (activeCategory === "Cloud & DevOps") return p.category.includes("Cloud");
      if (activeCategory === "Cybersecurity") return p.category.includes("Security");
      if (activeCategory === "Data & Analytics") return p.category.includes("Data");
      return true;
    });

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="programs" style={{ padding: "80px 0", background: "rgba(248, 250, 252, 0.6)", position: "relative" }}>

      <div className="container" style={{ maxWidth: "1380px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

        {/* Header & Navigation Arrow Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "left", maxWidth: "672px" }}>

            {/* Eyebrow Tag */}
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
              SELECT YOUR CAREER TRACK
            </div>
            <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", marginBottom: "16px" }}></div>

            {/* Main Headline */}
            <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "900", color: "#0B1F3A", letterSpacing: "-0.02em", lineHeight: "1.15", textTransform: "uppercase", margin: 0 }}>
              WHERE TO START <span style={{ color: "#5B2E91" }}>YOUR TECH JOURNEY?</span>
            </h2>

            <p style={{ fontSize: "14px", fontWeight: "600", color: "#64748B", marginTop: "12px", margin: "12px 0 0" }}>
              Choose from our industry-aligned corporate experience tracks designed by senior architects &amp; engineering leads.
            </p>
          </div>

          {/* Carousel Navigation Arrow Controls (matching input_file_0.png) */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <button
              onClick={() => handleScroll("left")}
              className="carousel-arrow-btn"
              aria-label="Scroll left"
            >
              <ChevronLeft style={{ width: "20px", height: "20px", strokeWidth: 2.5 }} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="carousel-arrow-btn"
              aria-label="Scroll right"
            >
              <ChevronRight style={{ width: "20px", height: "20px", strokeWidth: 2.5 }} />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 22px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: activeCategory === cat ? "none" : "1px solid #E2E8F0",
                background: activeCategory === cat ? "#8B5CF6" : "#FFFFFF",
                color: activeCategory === cat ? "#FFFFFF" : "#334155",
                boxShadow: activeCategory === cat ? "0 4px 14px rgba(139, 92, 246, 0.25)" : "none"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Smooth Horizontal Carousel Track with Arrow Navigation */}
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "24px",
            paddingTop: "8px",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {filteredPrograms.map((program) => {
            const tagList = program.tags || program.highlights || [];
            const roleTitle = program.certification || program.role || "Certified Professional";

            return (
              <motion.div
                key={program.id}
                whileHover={{ y: -6 }}
                style={{
                  minWidth: "320px",
                  maxWidth: "340px",
                  flexShrink: 0,
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid rgba(226, 232, 240, 0.9)",
                  padding: "24px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease"
                }}
              >
                <div>
                  {/* Card Top Pill Badge & Duration */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "16px" }}>
                    <span style={{ padding: "4px 12px", borderRadius: "9999px", background: "#F3E8FF", border: "1px solid #E9D5FF", fontSize: "10px", fontWeight: "800", color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {program.badge || program.category}
                    </span>

                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: "700", color: "#64748B" }}>
                      <Clock style={{ width: "14px", height: "14px", color: "#8B5CF6" }} />
                      <span>{program.duration}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#0F1D38", lineHeight: "1.3", marginBottom: "12px" }}>
                    {program.title}
                  </h3>

                  <p style={{ fontSize: "12px", color: "#64748B", fontWeight: "500", lineHeight: "1.6", marginBottom: "16px" }}>
                    {program.description}
                  </p>

                  {/* Program Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "12px", borderTop: "1px solid #F1F5F9", marginBottom: "24px" }}>
                    {tagList.slice(0, 4).map((t, i) => (
                      <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#F8FAFC", color: "#334155", fontWeight: "600", border: "1px solid #E2E8F0" }}>
                        <CheckCircle2 style={{ width: "12px", height: "12px", color: "#8B5CF6", flexShrink: 0 }} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div style={{ paddingTop: "16px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <div style={{ overflow: "hidden" }}>
                    <span style={{ fontSize: "9px", fontWeight: "700", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                      CERTIFICATION
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "#0F1D38", display: "block", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      {roleTitle}
                    </span>
                  </div>

                  {onOpenModal ? (
                    <button
                      onClick={() => onOpenModal(program.title)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "10px 14px",
                        borderRadius: "12px",
                        background: "#8B5CF6",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        fontWeight: "700",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(139, 92, 246, 0.25)",
                        cursor: "pointer",
                        flexShrink: 0
                      }}
                    >
                      <span>Explore</span>
                      <ArrowRight style={{ width: "14px", height: "14px" }} />
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "10px 14px",
                        borderRadius: "12px",
                        background: "#8B5CF6",
                        color: "#FFFFFF",
                        fontSize: "12px",
                        fontWeight: "700",
                        textDecoration: "none",
                        boxShadow: "0 4px 12px rgba(139, 92, 246, 0.25)",
                        flexShrink: 0
                      }}
                    >
                      <span>Explore</span>
                      <ArrowRight style={{ width: "14px", height: "14px" }} />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

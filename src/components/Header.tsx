"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Code,
  BarChart3,
  ShieldCheck,
  Megaphone,
  ArrowRight,
  Star,
  Sparkles,
  ChevronRight,
  Shield,
  Calendar,
  FileText,
  FlaskConical,
  Award,
  Users,
  Code2,
  LogIn,
  CalendarCheck
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll listener fallback for shrinking header elevation
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const coursesList = [
    {
      title: "Full Stack Development",
      tag: "MERN & Next.js",
      duration: "6 Months",
      metaDetail: "Live Projects",
      metaIcon: <FileText size={13} color="#7C3AED" />,
      description: "Build production apps with React, Node.js, Express, MongoDB & System Design.",
      href: "/programs#fullstack",
      iconBoxGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
      icon: <Code size={20} color="#FFFFFF" strokeWidth={2.2} />,
      tagBg: "#F3E8FF",
      tagColor: "#7C3AED",
      metaColor: "#7C3AED"
    },
    {
      title: "Data Analyst",
      tag: "SQL & Python",
      duration: "4 Months",
      metaDetail: "Hands-on Labs",
      metaIcon: <FlaskConical size={13} color="#059669" />,
      description: "Master SQL databases, Python Pandas, PowerBI & AI-powered data analytics.",
      href: "/programs#data-analyst",
      iconBoxGradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
      icon: <BarChart3 size={20} color="#FFFFFF" strokeWidth={2.2} />,
      tagBg: "#ECFDF5",
      tagColor: "#059669",
      metaColor: "#059669"
    },
    {
      title: "Cybersecurity",
      tag: "Ethical Hacking",
      duration: "5 Months",
      metaDetail: "Certified Track",
      metaIcon: <ShieldCheck size={13} color="#2563EB" />,
      description: "Learn network defense, SOC analysis, ethical hacking & cloud security.",
      href: "/programs#cybersecurity",
      iconBoxGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
      icon: <ShieldCheck size={20} color="#FFFFFF" strokeWidth={2.2} />,
      tagBg: "#EFF6FF",
      tagColor: "#2563EB",
      metaColor: "#2563EB"
    },
    {
      title: "Digital Marketing",
      tag: "Growth & SEO",
      duration: "3 Months",
      metaDetail: "Live Campaigns",
      metaIcon: <Users size={13} color="#D97706" />,
      description: "Scale brands with Meta ads, Google Performance Max, SEO & growth strategies.",
      href: "/programs#digital-marketing",
      iconBoxGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      icon: <Megaphone size={20} color="#FFFFFF" strokeWidth={2.2} />,
      tagBg: "#FFFBEB",
      tagColor: "#D97706",
      metaColor: "#D97706"
    }
  ];

  return (
    <header
      className="glass-nav"
      style={{
        padding: "18px 0",
        transition: "all 0.3s ease",
        width: "100%",
        boxShadow: "none",
        position: "relative",
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)"
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/techlearns logo.png"
            alt="TechLearns Academy Logo"
            style={{ height: "32px", width: "auto", objectFit: "contain", transition: "all 0.3s ease" }}
          />
        </Link>

        {/* Desktop Nav Links (Font Color: Black) */}
        <nav style={{ display: "flex", gap: "22px", alignItems: "center" }} className="desktop-only">
          
          {/* About Us */}
          <Link href="/about" className="nav-link" style={{ fontSize: "14px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>
            About Us
          </Link>

          {/* Our Courses Mega Dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: isCoursesOpen ? "#6D28D9" : "#000000",
                padding: "6px 0",
                transition: "color 0.2s ease"
              }}
            >
              <span>Our Courses</span>
              <ChevronDown
                size={15}
                color="#000000"
                style={{
                  transform: isCoursesOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.25s ease"
                }}
              />
            </button>

            {/* Mega Dropdown matching img1 layout perfectly */}
            {isCoursesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-200px",
                  width: "860px",
                  background: "#F8FAFC",
                  border: "1.5px solid rgba(139, 92, 246, 0.2)",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "0 25px 70px rgba(15, 3, 38, 0.18), 0 0 40px rgba(139, 92, 246, 0.1)",
                  backdropFilter: "blur(24px)",
                  zIndex: 1100,
                  display: "grid",
                  gridTemplateColumns: "1.22fr 0.98fr",
                  gap: "22px"
                }}
              >
                {/* Left Column: Top Bar + 4 Course Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  
                  {/* Top Bar matching img1 */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px 4px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#334155", letterSpacing: "0.02em" }}>
                      FEATURED <span style={{ color: "#7C3AED" }}>CAREER TRACKS</span>
                    </div>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 12px",
                        borderRadius: "9999px",
                        background: "rgba(109, 40, 217, 0.08)",
                        border: "1px solid rgba(109, 40, 217, 0.18)"
                      }}
                    >
                      <Shield size={13} color="#7C3AED" />
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#6D28D9" }}>
                        100% Guaranteed Outcome
                      </span>
                    </div>
                  </div>

                  {/* 4 Cards */}
                  {coursesList.map((course) => (
                    <Link
                      key={course.title}
                      href={course.href}
                      onClick={() => setIsCoursesOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "14px 16px",
                        borderRadius: "18px",
                        textDecoration: "none",
                        background: "#FFFFFF",
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        boxShadow: "0 4px 20px rgba(109, 40, 217, 0.05)",
                        transition: "all 0.25s ease",
                        position: "relative"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.4)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(109, 40, 217, 0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                        e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.9)";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(109, 40, 217, 0.05)";
                      }}
                    >
                      {/* Gradient Icon Box */}
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "14px",
                          background: course.iconBoxGradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 4px 12px rgba(109, 40, 217, 0.2)"
                        }}
                      >
                        {course.icon}
                      </div>

                      {/* Content Details */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <span style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em" }}>
                            {course.title}
                          </span>

                          <span
                            style={{
                              fontSize: "10.5px",
                              fontWeight: 700,
                              padding: "3px 10px",
                              borderRadius: "9999px",
                              background: course.tagBg,
                              color: course.tagColor,
                              border: `1px solid ${course.tagColor}30`,
                              whiteSpace: "nowrap"
                            }}
                          >
                            {course.tag}
                          </span>
                        </div>

                        <div style={{ fontSize: "11.5px", color: "#64748B", marginTop: "3px", lineHeight: "1.35" }}>
                          {course.description}
                        </div>

                        {/* Bottom Metadata Row */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px", fontSize: "11px", fontWeight: 700, color: course.metaColor }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <Calendar size={12} color={course.metaColor} />
                            <span>{course.duration}</span>
                          </div>
                          <span style={{ color: "#CBD5E1" }}>•</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            {course.metaIcon}
                            <span>{course.metaDetail}</span>
                          </div>
                        </div>
                      </div>

                      {/* Chevron Right Indicator Arrow */}
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <ChevronRight size={14} color="#94A3B8" />
                      </div>
                    </Link>
                  ))}
                </div>                {/* Right Column: Redesigned Premium Popular Bootcamp Showcase Card */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: "22px",
                    background: "linear-gradient(160deg, #090314 0%, #160833 45%, #260C54 100%)",
                    border: "1.5px solid rgba(139, 92, 246, 0.45)",
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(15, 3, 38, 0.85), 0 0 40px rgba(139, 92, 246, 0.28)"
                  }}
                >
                  {/* Subtle Background Radial Glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, transparent 70%)",
                      pointerEvents: "none",
                      zIndex: 0
                    }}
                  />

                  {/* Top Badge Tag */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      background: "linear-gradient(135deg, rgba(251, 191, 36, 0.18) 0%, rgba(139, 92, 246, 0.22) 100%)",
                      border: "1px solid rgba(251, 191, 36, 0.45)",
                      width: "fit-content",
                      marginBottom: "14px",
                      boxShadow: "0 4px 14px rgba(251, 191, 36, 0.15)"
                    }}
                  >
                    <Star size={13} fill="#FBBF24" color="#FBBF24" />
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#FBBF24", letterSpacing: "0.06em" }}>
                      POPULAR BOOTCAMP
                    </span>
                  </div>

                  {/* Main Title */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ fontSize: "27px", fontWeight: 800, color: "#FFFFFF", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                      JavaScript with
                    </div>
                    <div style={{ fontSize: "27px", fontWeight: 800, color: "#FFFFFF", lineHeight: "1.15", letterSpacing: "-0.02em" }}>
                      Beginner <span style={{ background: "linear-gradient(135deg, #D8B4FE 0%, #A78BFA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DSA</span>
                    </div>

                    <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.78)", marginTop: "8px", lineHeight: "1.45" }}>
                      Master core algorithms, data structures & frontend engineering with top tech mentors.
                    </div>
                  </div>

                  {/* 3 Feature Pills Stack (Left) */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: "16px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "16px",
                      padding: "14px",
                      width: "66%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "10px", background: "rgba(139, 92, 246, 0.25)", border: "1px solid rgba(139, 92, 246, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Users size={14} color="#D8B4FE" />
                      </div>
                      <div>
                        <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#FFFFFF" }}>Expert Mentors</div>
                        <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.65)" }}>Learn from industry experts</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "10px", background: "rgba(139, 92, 246, 0.25)", border: "1px solid rgba(139, 92, 246, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Code2 size={14} color="#D8B4FE" />
                      </div>
                      <div>
                        <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#FFFFFF" }}>Hands-on Projects</div>
                        <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.65)" }}>Build real-world applications</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "10px", background: "rgba(139, 92, 246, 0.25)", border: "1px solid rgba(139, 92, 246, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Award size={14} color="#D8B4FE" />
                      </div>
                      <div>
                        <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#FFFFFF" }}>Placement Support</div>
                        <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.65)" }}>Interview prep & job assistance</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating 3D Purple Code Pedestal (Middle Right) */}
                  <div style={{ position: "absolute", top: "65px", right: "-10px", width: "135px", height: "135px", pointerEvents: "none", zIndex: 1, opacity: 0.9 }}>
                    <svg viewBox="0 0 100 100" fill="none" style={{ width: "100%", height: "100%" }}>
                      <ellipse cx="50" cy="75" rx="35" ry="12" fill="url(#pedestalGradRedesign)" />
                      <path d="M25 60 L75 60 L68 75 L32 75 Z" fill="url(#pedestalSideRedesign)" />
                      <path d="M28 35 L42 48 L28 61" stroke="#A78BFA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M72 35 L58 48 L72 61" stroke="#A78BFA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M46 63 L54 33" stroke="#C084FC" strokeWidth="5" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="pedestalGradRedesign" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7C3AED" />
                          <stop offset="100%" stopColor="#2E1065" />
                        </linearGradient>
                        <linearGradient id="pedestalSideRedesign" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5B2E91" />
                          <stop offset="100%" stopColor="#1E0A3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Cutout Developer Woman Image Overlay (Bottom Right) */}
                  <div style={{ position: "absolute", bottom: "-5px", right: "-5px", width: "148px", height: "170px", pointerEvents: "none", zIndex: 3 }}>
                    <img
                      src="/images/course_woman_purple.png"
                      alt="TechLearns Student"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>

                  {/* Bottom Rating Row & CTA Button */}
                  <div style={{ position: "relative", zIndex: 4, marginTop: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11.5px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
                      <Star size={13} fill="#FBBF24" color="#FBBF24" />
                      <span style={{ color: "#FBBF24" }}>4.9/5 Rating</span>
                      <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 4px" }}>•</span>
                      <Users size={13} color="#D8B4FE" />
                      <span style={{ color: "#E9D5FF" }}>100% Placement</span>
                    </div>

                    {/* Glowing Purple Button */}
                    <Link
                      href="/programs"
                      onClick={() => setIsCoursesOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        width: "100%",
                        padding: "11.5px 18px",
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: "0 8px 24px rgba(139, 92, 246, 0.55)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        transition: "all 0.25s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(139, 92, 246, 0.75)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 92, 246, 0.55)";
                      }}
                    >
                      <span>Explore All Programs</span>
                      <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ArrowRight size={14} color="#FFFFFF" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Explore */}
          <Link href="/partners" className="nav-link" style={{ fontSize: "14px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>
            Explore
          </Link>

          {/* Blogs */}
          <Link href="/blog" className="nav-link" style={{ fontSize: "14px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>
            Blogs
          </Link>

          {/* Contact Us */}
          <Link href="/contact" className="nav-link" style={{ fontSize: "14px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>
            Contact Us
          </Link>

          <div style={{ width: "1px", height: "18px", background: "rgba(0, 0, 0, 0.15)", margin: "0 4px" }}></div>

          {/* Log In Button with Icon */}
          <Link
            href="/skillos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 18px",
              fontSize: "13.5px",
              fontWeight: 700,
              color: "#000000",
              textDecoration: "none",
              borderRadius: "9999px",
              border: "1.5px solid #000000",
              background: "transparent",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <LogIn size={15} color="#000000" strokeWidth={2.2} />
            <span>Log In</span>
          </Link>

          {/* Book Slot CTA Button with Icon */}
          <Link
            href="/contact"
            className="glow-btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "9px 22px",
              fontSize: "13.5px",
              fontWeight: 700,
              whiteSpace: "nowrap",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
              color: "#FFFFFF",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(139, 92, 246, 0.4)",
              border: "none"
            }}
          >
            <CalendarCheck size={15} color="#FFFFFF" strokeWidth={2.2} />
            <span>Book Slot</span>
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="mobile-only mobile-flex" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {/* Burger Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "10px",
              zIndex: 1100
            }}
            aria-label="Toggle Navigation"
          >
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#000000", transition: "0.3s", transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#000000", transition: "0.3s", opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#000000", transition: "0.3s", transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`} style={{ background: "#FFFFFF", backdropFilter: "blur(20px)" }}>
        <Link href="/about" onClick={() => setIsOpen(false)} style={{ fontSize: "17px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>About Us</Link>
        
        <div style={{ width: "100%", padding: "10px 0" }}>
          <div style={{ fontSize: "12px", fontWeight: 800, color: "#6D28D9", textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.05em" }}>Our Courses</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "8px" }}>
            {coursesList.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "15px", fontWeight: 700, color: "#000000", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
              >
                {course.icon}
                <span>{course.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/partners" onClick={() => setIsOpen(false)} style={{ fontSize: "17px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>Explore</Link>
        <Link href="/blog" onClick={() => setIsOpen(false)} style={{ fontSize: "17px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>Blogs</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} style={{ fontSize: "17px", fontWeight: 700, color: "#000000", textDecoration: "none" }}>Contact Us</Link>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", marginTop: "16px" }}>
          <Link
            href="/skillos"
            onClick={() => setIsOpen(false)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#000000",
              borderRadius: "9999px",
              border: "1.5px solid #000000",
              background: "transparent",
              textDecoration: "none"
            }}
          >
            <LogIn size={16} color="#000000" strokeWidth={2.2} />
            <span>Log In</span>
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="glow-btn-primary"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              fontSize: "15px",
              fontWeight: 700,
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
              color: "#FFFFFF",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(139, 92, 246, 0.4)"
            }}
          >
            <CalendarCheck size={16} color="#FFFFFF" strokeWidth={2.2} />
            <span>Book Slot</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

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
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(true);
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

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      icon: <Code size={18} color="#FFFFFF" strokeWidth={2.2} />,
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
      icon: <BarChart3 size={18} color="#FFFFFF" strokeWidth={2.2} />,
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
      icon: <ShieldCheck size={18} color="#FFFFFF" strokeWidth={2.2} />,
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
      icon: <Megaphone size={18} color="#FFFFFF" strokeWidth={2.2} />,
      tagBg: "#FFFBEB",
      tagColor: "#D97706",
      metaColor: "#D97706"
    }
  ];

  return (
    <>
      <header
        className="glass-nav"
        style={{
          padding: "12px 0",
          transition: "all 0.3s ease",
          width: "100%",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.08)" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)"
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(16px, 3vw, 24px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
          }}
        >

          {/* Brand Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/techlearns logo.png"
              alt="TechLearns Academy Logo"
              style={{
                height: "clamp(28px, 4vw, 32px)",
                width: "auto",
                objectFit: "contain",
                transition: "all 0.3s ease"
              }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-only header-desktop-nav">

            {/* About Us */}
            <Link href="/about" className="nav-link header-nav-item">
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
                className="nav-link header-nav-item"
                style={{
                  background: "none",
                  border: "none",
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

              {/* Mega Dropdown */}
              {isCoursesOpen && (
                <div className="header-mega-dropdown">
                  {/* Left Column: Top Bar + 4 Course Cards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                    {/* Top Bar */}
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
                  </div>

                  {/* Right Column: Popular Bootcamp Showcase Card */}
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
                    {/* Background Radial Glow */}
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
                        Master core algorithms, data structures &amp; frontend engineering with top tech mentors.
                      </div>
                    </div>

                    {/* 3 Feature Pills Stack */}
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
                          <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.65)" }}>Interview prep &amp; job assistance</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating 3D Purple Code Pedestal */}
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

                    {/* Cutout Developer Woman Image Overlay */}
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
            <Link href="/partners" className="nav-link header-nav-item">
              Explore CEL
            </Link>

            {/* Blogs */}
            <Link href="/blog" className="nav-link header-nav-item">
              Blogs
            </Link>

            {/* Contact Us */}
            <Link href="/contact" className="nav-link header-nav-item">
              Contact Us
            </Link>

            <div style={{ width: "1px", height: "18px", background: "rgba(0, 0, 0, 0.15)", margin: "0 2px" }}></div>

            {/* Log In Button */}
            <Link
              href="/skillos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "8px 16px",
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

            {/* Book Slot CTA Button */}
            <Link
              href="/contact"
              className="glow-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "9px 20px",
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
                background: isOpen ? "rgba(109, 40, 217, 0.1)" : "rgba(0, 0, 0, 0.05)",
                border: isOpen ? "1px solid #7C3AED" : "1px solid rgba(0, 0, 0, 0.15)",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "10px",
                zIndex: 10001,
                transition: "all 0.2s ease"
              }}
              aria-label="Toggle Navigation"
            >
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: isOpen ? "#7C3AED" : "#000000", transition: "0.3s", transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: isOpen ? "#7C3AED" : "#000000", transition: "0.3s", opacity: isOpen ? 0 : 1 }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: isOpen ? "#7C3AED" : "#000000", transition: "0.3s", transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }}></span>
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>

            {/* Navigation Links Card Stack */}
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link-item"
            >
              <span>About Us</span>
              <ChevronRight size={16} color="#94A3B8" />
            </Link>

            {/* Mobile Collapsible Courses Section */}
            <div className="mobile-courses-container">
              <button
                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  padding: "6px 0 10px",
                  cursor: "pointer"
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#6D28D9", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  OUR CAREER TRACKS
                </div>
                <ChevronDown
                  size={16}
                  color="#6D28D9"
                  style={{
                    transform: isMobileCoursesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease"
                  }}
                />
              </button>

              {isMobileCoursesOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {coursesList.map((course) => (
                    <Link
                      key={course.title}
                      href={course.href}
                      onClick={() => setIsOpen(false)}
                      className="mobile-course-card"
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: course.iconBoxGradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        {course.icon}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
                            {course.title}
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: 700, color: course.tagColor, background: course.tagBg, padding: "2px 8px", borderRadius: "9999px" }}>
                            {course.tag}
                          </span>
                        </div>
                        <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>
                          {course.duration} • {course.metaDetail}
                        </div>
                      </div>

                      <ChevronRight size={15} color="#CBD5E1" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partners"
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link-item"
            >
              <span>Explore CEL</span>
              <ChevronRight size={16} color="#94A3B8" />
            </Link>

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link-item"
            >
              <span>Blogs</span>
              <ChevronRight size={16} color="#94A3B8" />
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link-item"
            >
              <span>Contact Us</span>
              <ChevronRight size={16} color="#94A3B8" />
            </Link>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #F1F5F9" }}>
            <Link
              href="/skillos"
              onClick={() => setIsOpen(false)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "13px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#0F172A",
                borderRadius: "14px",
                border: "1.5px solid #0F172A",
                background: "#FFFFFF",
                textDecoration: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
              }}
            >
              <LogIn size={16} color="#0F172A" strokeWidth={2.2} />
              <span>Log In to SkillOS</span>
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
                padding: "13px",
                fontSize: "15px",
                fontWeight: 700,
                borderRadius: "14px",
                background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                color: "#FFFFFF",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(139, 92, 246, 0.45)"
              }}
            >
              <CalendarCheck size={16} color="#FFFFFF" strokeWidth={2.2} />
              <span>Book Counselling Slot</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Layout Spacer to preserve page flow with fixed header */}
      <div style={{ height: "64px" }} />

      <style jsx global>{`
        /* Responsive Header Enhancements */

        .header-desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.4vw, 20px);
        }

        .header-nav-item {
          font-size: clamp(13px, 1.1vw, 14px);
          font-weight: 700;
          color: #000000;
          text-decoration: none;
          white-space: nowrap;
        }

        .header-mega-dropdown {
          position: absolute;
          top: 100%;
          left: clamp(-180px, -15vw, -60px);
          width: min(860px, 90vw);
          background: #F8FAFC;
          border: 1.5px solid rgba(139, 92, 246, 0.2);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 25px 70px rgba(15, 3, 38, 0.18), 0 0 40px rgba(139, 92, 246, 0.1);
          backdrop-filter: blur(24px);
          z-index: 1100;
          display: grid;
          grid-template-columns: 1.22fr 0.98fr;
          gap: 22px;
        }

        /* ----------------------------------------------------
           MOBILE DRAWER HIGH-VISIBILITY RESPONSIVE OVERRIDES
        ---------------------------------------------------- */

        .mobile-drawer {
          position: fixed !important;
          top: 56px !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: calc(100vh - 56px) !important;
          background: #FFFFFF !important;
          z-index: 9999 !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-start !important;
          align-items: stretch !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translateY(-10px) !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          overflow-y: auto !important;
          -webkit-overflow-scrolling: touch !important;
          padding: 20px 18px 40px !important;
          box-sizing: border-box !important;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25) !important;
        }

        .mobile-drawer.open {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }

        .mobile-nav-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          color: #0F172A;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .mobile-nav-link-item:active {
          background: #F1F5F9;
          border-color: #CBD5E1;
        }

        .mobile-courses-container {
          background: #FAF5FF;
          border: 1px solid #E9D5FF;
          border-radius: 16px;
          padding: 12px 14px;
        }

        .mobile-course-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: #FFFFFF;
          border: 1px solid #F3E8FF;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.04);
        }

        @media (max-width: 1150px) and (min-width: 992px) {
          .header-mega-dropdown {
            grid-template-columns: 1fr;
            width: min(500px, 85vw);
            left: -100px;
          }
        }
      `}</style>
    </>
  );
}

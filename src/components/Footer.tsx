"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [logoSrc, setLogoSrc] = useState("/techlearns logo white.png");

  useEffect(() => {
    const handleThemeChange = () => {
      const isLight = document.body.classList.contains("light-theme");
      setLogoSrc(isLight ? "/techlearns logo.png" : "/techlearns logo white.png");
    };

    handleThemeChange(); // Run initial check
    window.addEventListener("themeChanged", handleThemeChange);
    return () => window.removeEventListener("themeChanged", handleThemeChange);
  }, []);

  return (
    <footer 
      style={{
        background: "linear-gradient(180deg, rgba(11, 31, 58, 0.5) 0%, rgba(44, 10, 113, 0.3) 100%)",
        borderTop: "1px solid rgba(203, 108, 230, 0.15)",
        padding: "80px 0 30px",
        marginTop: "100px",
        color: "#c5c5cf",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", marginBottom: "60px" }}>
          
          {/* About Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img 
                src={logoSrc} 
                alt="TechLearns Academy Logo" 
                style={{ height: "40px", width: "auto", objectFit: "contain", transition: "all 0.3s ease" }}
              />
            </Link>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(255, 255, 255, 0.7)" }}>
              Empowering the next generation of developers, innovators, and technology leaders through practical, industry-ready education. Experience how the corporate world builds products.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              <div>
                <strong style={{ color: "#FFFFFF" }}>Phone:</strong> +123-456-7890
              </div>
              <div>
                <strong style={{ color: "#FFFFFF" }}>Email:</strong> contact@techlearns.com
              </div>
              <div>
                <strong style={{ color: "#FFFFFF" }}>Location:</strong> TechLearns Tower, Cyber Hub, India
              </div>
            </div>
          </div>

          {/* Philosophy / Features */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "25px", fontFamily: "var(--font-headings)" }}>Ecosystem</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <li>
                <Link href="/cel" className="footer-link">Our Pedagogy</Link>
              </li>
              <li>
                <Link href="/skillos" className="footer-link">SkillOS Lab</Link>
              </li>
              <li>
                <Link href="/passport" className="footer-link">Credentials</Link>
              </li>
              <li>
                <Link href="/fsl" className="footer-link">Skill Leagues</Link>
              </li>
            </ul>
          </div>

          {/* Programs Catalog */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "25px", fontFamily: "var(--font-headings)" }}>Programs</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <li>
                <Link href="/programs" className="footer-link">Generative AI Engineering</Link>
              </li>
              <li>
                <Link href="/programs" className="footer-link">Full Stack Development</Link>
              </li>
              <li>
                <Link href="/programs" className="footer-link">Cybersecurity Track</Link>
              </li>
              <li>
                <Link href="/programs" className="footer-link">Cloud Platform Engineering</Link>
              </li>
              <li>
                <Link href="/programs" className="footer-link">Data Analytics &amp; MLOps</Link>
              </li>
            </ul>
          </div>

          {/* Corporate / Community */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "25px", fontFamily: "var(--font-headings)" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <li>
                <Link href="/stories" className="footer-link">Student Outcomes</Link>
              </li>
              <li>
                <Link href="/mentors" className="footer-link">Faculty & Mentors</Link>
              </li>
              <li>
                <Link href="/partners" className="footer-link">Industry Partners</Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">Research &amp; Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "25px", fontFamily: "var(--font-headings)" }}>Newsletter</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "18px", color: "rgba(255, 255, 255, 0.7)" }}>
              Subscribe to get latest updates, curriculum releases, and placement announcements.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(203, 108, 230, 0.2)",
                  color: "#FFFFFF",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  outline: "none"
                }}
              />
              <button type="submit" className="glow-btn-primary" style={{ justifyContent: "center", padding: "12px" }}>
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Banner */}
        <div 
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.5)"
          }}
        >
          <p>© 2026 TechLearns Academy. All rights reserved.</p>
          <p style={{ fontSize: "11px" }}>
            Disclaimer: All placement opportunities are subject to qualifying the TechLearns Entrance Test (TLET) and completing the coursework successfully.
          </p>
        </div>
      </div>
    </footer>
  );
}

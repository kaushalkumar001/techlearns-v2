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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          
          {/* Column 1 — Techlearns */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-headings)" }}>Techlearns</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/cel" className="footer-link">Corporate Experience Learning</Link></li>
              <li><Link href="/skillos" className="footer-link">SkillOS</Link></li>
              <li><Link href="/about" className="footer-link">Trust & Quality Policy</Link></li>
              <li><Link href="/contact" className="footer-link">Careers at Techlearns</Link></li>
            </ul>
          </div>

          {/* Column 2 — Programs */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-headings)" }}>Programs</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><Link href="/programs" className="footer-link">Generative AI & Agentic AI Engineering</Link></li>
              <li><Link href="/programs" className="footer-link">Full-Stack Software Engineering with AI</Link></li>
              <li><Link href="/programs" className="footer-link">Data Analytics + BI + GenAI</Link></li>
              <li><Link href="/programs" className="footer-link">Cybersecurity & SOC Analyst</Link></li>
              <li><Link href="/programs" className="footer-link">Cloud, DevOps & Platform Engineering</Link></li>
              <li><Link href="/programs" className="footer-link">View All Programs</Link></li>
            </ul>
          </div>

          {/* Column 3 — Ecosystem */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-headings)" }}>Ecosystem</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><Link href="/fsl" className="footer-link">Competitions & Future Skills League</Link></li>
              <li><Link href="/passport" className="footer-link">Certifications & Credentials</Link></li>
              <li><Link href="/passport" className="footer-link">Skill Passport</Link></li>
              <li><Link href="/blog" className="footer-link">Skill Report / Blog</Link></li>
            </ul>
          </div>

          {/* Column 4 — Partnerships */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-headings)" }}>Partnerships</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><Link href="/contact" className="footer-link">For Colleges</Link></li>
              <li><Link href="/partners" className="footer-link">For Employers</Link></li>
              <li><Link href="/partners" className="footer-link">Industry Skill Council</Link></li>
              <li><Link href="/partners" className="footer-link">Challenge Bank</Link></li>
            </ul>
          </div>

          {/* Column 5 — Get in Touch */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontSize: "16px", marginBottom: "20px", fontFamily: "var(--font-headings)" }}>Get in Touch</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><Link href="/contact" className="footer-link">Book a Diagnostic</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
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
          <p>© Techlearns. Corporate Experience Learning | Learn. Experience. Build. Lead.</p>
          <p style={{ fontSize: "11px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/about" className="footer-link" style={{ textDecoration: "none" }}>Privacy Policy</Link> · 
            <Link href="/about" className="footer-link" style={{ textDecoration: "none" }}>Terms</Link> · 
            <Link href="/about" className="footer-link" style={{ textDecoration: "none" }}>Refund Policy</Link> · 
            <Link href="/about" className="footer-link" style={{ textDecoration: "none" }}>Claims & Outcomes Disclosure</Link>
          </p>
      </div>
    </div>
  </footer>
  );
}

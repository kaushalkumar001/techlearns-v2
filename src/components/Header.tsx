"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [logoSrc, setLogoSrc] = useState("/techlearns logo white.png");

  useEffect(() => {
    // Read theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    const isLight = savedTheme === "light";
    document.body.classList.toggle("light-theme", isLight);
    setLogoSrc(isLight ? "/techlearns logo.png" : "/techlearns logo white.png");
    
    // Dispatch initial change event
    window.dispatchEvent(new Event("themeChanged"));

    // Scroll listener fallback for shrinking header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    const isLight = newTheme === "light";
    document.body.classList.toggle("light-theme", isLight);
    setLogoSrc(isLight ? "/techlearns logo.png" : "/techlearns logo white.png");
    
    // Notify Footer and other listener components
    window.dispatchEvent(new Event("themeChanged"));
  };

  return (
    <header 
      className={`glass-nav glass-nav-scroll ${
        isScrolled ? "scrolled" : ""
      }`}
      style={{
        padding: isScrolled ? "12px 0" : "20px 0",
        transition: "all 0.3s ease",
        width: "100%",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none"
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src={logoSrc} 
            alt="TechLearns Academy Logo" 
            style={{ height: "32px", width: "auto", objectFit: "contain", transition: "all 0.3s ease" }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }} className="desktop-only">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/programs" className="nav-link">Programs</Link>
          <Link href="/cel" className="nav-link">CEL Philosophy</Link>
          <Link href="/skillos" className="nav-link">SkillOS</Link>
          <Link href="/passport" className="nav-link">Skill Passport</Link>
          <Link href="/fsl" className="nav-link">FSL League</Link>
          <Link href="/stories" className="nav-link">Stories</Link>
          <Link href="/mentors" className="nav-link">Mentors</Link>
          
          {/* Theme Alternator Button */}
          <button 
            onClick={toggleTheme}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: "var(--foreground)",
              borderColor: "var(--border-color)",
              backgroundColor: "var(--card-bg)"
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              // Sun Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          <Link href="/contact" className="glow-btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
            Apply Now
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="mobile-only" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          
          {/* Theme Alternator Mobile Button */}
          <button 
            onClick={toggleTheme}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: "var(--foreground)",
              borderColor: "var(--border-color)",
              backgroundColor: "var(--card-bg)"
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Burger Menu Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "8px",
              zIndex: 1100
            }}
          >
            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "var(--foreground)", transition: "0.3s", transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }}></span>
            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "var(--foreground)", transition: "0.3s", opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "var(--foreground)", transition: "0.3s", transform: isOpen ? "rotate(-45deg) translate(5px, -7px)" : "none" }}></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div 
          className="mobile-drawer"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "var(--background)",
            zIndex: 1050,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <Link href="/" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>Home</Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>Programs</Link>
          <Link href="/cel" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>CEL Philosophy</Link>
          <Link href="/skillos" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>SkillOS</Link>
          <Link href="/passport" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>Skill Passport</Link>
          <Link href="/fsl" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>FSL League</Link>
          <Link href="/stories" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>Stories</Link>
          <Link href="/mentors" onClick={() => setIsOpen(false)} style={{ fontSize: "18px", fontWeight: 600 }}>Mentors</Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="glow-btn-primary" 
            style={{ marginTop: "12px", width: "80%", justifyContent: "center" }}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}

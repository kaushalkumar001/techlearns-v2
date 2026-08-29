"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function BlogsExecutiveBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ width: "100%", marginTop: "0px", position: "relative" }}>

      {/* Extreme Right Bigger Illustration Image (Transparent BG) placed upper to banner */}
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "0px",
          zIndex: 5,
          overflow: "visible",
          pointerEvents: "none"
        }}
      >
        <div className="exec-banner-illustration" style={{ position: "relative" }}>
          <Image
            src="/images/blog_meeting_illustration.png"
            alt="Team Workshop Illustration"
            fill
            sizes="(max-width: 580px) 280px, (max-width: 991px) 420px, 580px"
            style={{ objectFit: "contain", objectPosition: "right bottom" }}
            priority
          />
        </div>
      </div>

      {/* Main Banner Container */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #5B2E91 0%, #3B1B67 100%)",
          padding: "64px 20px 54px",
          textAlign: "center",
          color: "#FFFFFF",
          position: "relative"
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Header Title in Serif */}
          <h2
            className="blog-heading-serif"
            style={{
              fontSize: "clamp(24px, 3.8vw, 34px)",
              fontWeight: 400,
              color: "#FFFFFF",
              marginBottom: "30px",
              letterSpacing: "-0.01em"
            }}
          >
            Level Up Your Tech Skills 🚀
          </h2>

          {/* Form */}
          {subscribed ? (
            <div style={{ padding: "16px", background: "rgba(255, 255, 255, 0.15)", borderRadius: "6px", display: "inline-block" }}>
              <span style={{ fontSize: "16px", fontWeight: 600, color: "#4ADE80" }}>
                ✓ Thank you for subscribing! Your guide is on its way.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="exec-banner-form"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="exec-banner-input"
              />
              <button
                type="submit"
                className="exec-banner-submit-btn"
                onMouseOver={(e) => (e.currentTarget.style.background = "#B45309")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#D97706")}
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          {/* Powered By subtitle */}
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.55)",
              fontStyle: "italic",
              margin: 0
            }}
          >
            Powered By Techlearns
          </p>
        </div>
      </div>

      {/* Connect Sub-Bar directly below */}
      <div
        style={{
          width: "100%",
          background: "#FAF8F5",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          padding: "12px 24px"
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {/* Left side: CONNECT with Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                color: "#64748B",
                letterSpacing: "1.5px",
                textTransform: "uppercase"
              }}
            >
              CONNECT:
            </span>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#334155", display: "inline-flex", transition: "color 0.2s ease" }}
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#334155", display: "inline-flex", transition: "color 0.2s ease" }}
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com/company/techlearnsofficial"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#334155", display: "inline-flex", transition: "color 0.2s ease" }}
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side: TOP button with arrow */}
          <button
            onClick={scrollToTop}
            style={{
              background: "none",
              border: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              cursor: "pointer",
              color: "#64748B",
              padding: "4px 8px"
            }}
          >
            <ArrowUp size={15} />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase"
              }}
            >
              TOP
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

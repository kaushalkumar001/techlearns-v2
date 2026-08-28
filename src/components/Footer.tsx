"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#F6F7F9",
        borderTop: "1px solid #E2E8F0",
        color: "#374151",
        overflow: "hidden"
      }}
    >
      {/* Main footer content */}
      <div className="footer-main-container">
        <div className="footer-grid-layout">
          {/* Column 1 — Logo + Description + Contact */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: "16px" }}>
              <img
                src="/techlearns logo.png"
                alt="Techlearns"
                style={{ height: "36px", objectFit: "contain" }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "13px",
                color: "#4B5563",
                lineHeight: "1.7",
                marginBottom: "20px",
                maxWidth: "300px"
              }}
            >
              India&apos;s Corporate Experience Learning (CEL) ecosystem. Train with
              live work practices, sprint ticket execution, pull request reviews,
              and verified Skill Passports.
            </p>

            {/* Address */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginBottom: "10px"
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B2E91"
                strokeWidth="2"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontSize: "12.5px", color: "#4B5563", lineHeight: "1.6" }}>
                Avior Corporate Park, 425, Lal Bahadur Shastri Marg, Mulund West, Mumbai,
                Maharashtra 400080
              </span>
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px"
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B2E91"
                strokeWidth="2"
                style={{ flexShrink: 0 }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:info@techlearns.in"
                style={{ fontSize: "12.5px", color: "#4B5563", textDecoration: "none" }}
              >
                info@techlearns.in
              </a>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B2E91"
                strokeWidth="2"
                style={{ flexShrink: 0 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 7.28 7.28l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
              </svg>
              <span style={{ fontSize: "12.5px", color: "#4B5563", wordBreak: "break-word" }}>
                +91 76200 92712 / +91 75060 70698
              </span>
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div className="footer-col-programs">
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0B1F3A",
                marginBottom: "16px"
              }}
            >
              PROGRAMS
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              {[
                { label: "Generative AI Engineering", href: "/programs" },
                { label: "Full-Stack Software Eng", href: "/programs" },
                { label: "Cloud & DevOps SRE", href: "/programs" },
                { label: "Cybersecurity & Defense", href: "/programs" },
                { label: "Data Engineering", href: "/programs" },
                { label: "AI Foundations", href: "/programs" }
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{ fontSize: "13px", color: "#4B5563", textDecoration: "none" }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = "#5B2E91")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = "#4B5563")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Ecosystem */}
          <div className="footer-col-ecosystem">
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0B1F3A",
                marginBottom: "16px"
              }}
            >
              ECOSYSTEM
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", margin: 0 }}>
              {[
                { label: "CEL Wheel System", href: "/cel" },
                { label: "5-Step Engineering Pipeline", href: "/cel" },
                { label: "Future Skills League (FSL)", href: "/fsl" },
                { label: "Skill Passport Verification", href: "/passport" },
                { label: "Institutional Tie-ups", href: "/partners" },
                { label: "Entrance Test (TLET)", href: "/contact" }
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{ fontSize: "13px", color: "#4B5563", textDecoration: "none" }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = "#5B2E91")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = "#4B5563")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0B1F3A",
                marginBottom: "16px"
              }}
            >
              CONNECT
            </h4>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/techlearns"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  transition: "all 0.2s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#5B2E91";
                  (e.currentTarget as HTMLElement).style.borderColor = "#5B2E91";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.color = "#0B1F3A";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/techlearns"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  transition: "all 0.2s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#0B1F3A";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0B1F3A";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.color = "#0B1F3A";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@techlearns"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B1F3A",
                  transition: "all 0.2s ease",
                  textDecoration: "none"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#FF0000";
                  (e.currentTarget as HTMLElement).style.borderColor = "#FF0000";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.color = "#0B1F3A";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="footer-cta-btn"
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#4A2478";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#5B2E91";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Book Diagnostic Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div
        style={{
          borderTop: "1px solid #E2E8F0",
          padding: "16px clamp(16px, 3.5vw, 32px)"
        }}
      >
        <div className="footer-bottom-flex">
          <span>© 2026 Techlearns Academy. All rights reserved.</span>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/about" style={{ color: "#6B7280", textDecoration: "none" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "#5B2E91")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "#6B7280")}
            >Privacy Policy</Link>
            <Link href="/about" style={{ color: "#6B7280", textDecoration: "none" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "#5B2E91")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "#6B7280")}
            >Terms of Service</Link>
            <Link href="/about" style={{ color: "#6B7280", textDecoration: "none" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "#5B2E91")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "#6B7280")}
            >Security &amp; Compliance</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Fully Responsive CSS Architecture for Footer */

        .footer-main-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px clamp(16px, 3.5vw, 32px) 36px;
        }

        .footer-grid-layout {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 40px;
          align-items: flex-start;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #5B2E91;
          color: #FFFFFF;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(91, 46, 145, 0.3);
          transition: all 0.2s ease;
        }

        .footer-bottom-flex {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12.5px;
          color: #6B7280;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
        ---------------------------------------------------- */

        /* Laptop (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 900px) {
          .footer-grid-layout {
            gap: 28px;
            grid-template-columns: 1.4fr 1fr 1fr 1fr;
          }
        }

        /* Tablet (640px to 899px) */
        @media (max-width: 899px) and (min-width: 640px) {
          .footer-grid-layout {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        /* Mobile Devices (<640px) */
        @media (max-width: 639px) {
          .footer-grid-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-col-programs,
          .footer-col-ecosystem {
            display: none !important;
          }
          .footer-cta-btn {
            width: 100%;
            white-space: normal;
            box-sizing: border-box;
            text-align: center;
          }
          .footer-bottom-flex {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}

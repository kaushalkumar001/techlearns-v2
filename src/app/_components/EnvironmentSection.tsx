"use client";

import Link from "next/link";

export default function EnvironmentSection() {
  return (
    <section style={{ padding: "36px 0", background: "#F8FAFC", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 24px)" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(28px, 4vw, 48px)" }}>
          <h2 className="env-header-title">
            Where Learning Meets the <span style={{ color: "#5B2E91" }}>Right Environment</span>
          </h2>
          <p className="env-header-sub">
            Modern classrooms. Practical labs. Collaborative spaces.<br className="env-br" />
            Everything designed to make learning more focused, interactive and career-oriented.
          </p>
        </div>

        {/* Bento Cards Layout */}
        <div className="env-main-grid">

          {/* Left Column */}
          <div className="env-column">

            {/* Card 1: Modern Classrooms */}
            <div className="env-card env-card-tall">
              <div className="env-card-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Classrooms"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="env-card-body">
                <h3 className="env-card-title-lg">
                  Modern Classrooms
                </h3>
                <p className="env-card-desc">
                  State-of-the-art tech-enabled classrooms equipped with high-speed fiber internet, dual-monitor setups, and interactive displays for seamless learning.
                </p>
                <Link href="/contact" style={{ fontSize: "13px", fontWeight: "700", color: "#5B2E91", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

            {/* Card 3: Interactive Learning */}
            <div className="env-card env-card-split">
              <div className="env-split-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Interactive Learning"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="env-split-body">
                <h3 className="env-card-title-sm">
                  Interactive Learning
                </h3>
                <p className="env-card-desc-sm">
                  Peer-to-peer collaboration, group coding jams, and 1-on-1 mentor guidance.
                </p>
                <Link href="/contact" style={{ fontSize: "12.5px", fontWeight: "700", color: "#5B2E91", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="env-column">

            {/* Card 2: Hands-on Coding Labs */}
            <div className="env-card env-card-split">
              <div className="env-split-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                  alt="Hands-on Coding Labs"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="env-split-body">
                <h3 className="env-card-title-sm">
                  Hands-on Coding Labs
                </h3>
                <p className="env-card-desc-sm">
                  Real-time cloud dev sandbox environments with pre-configured toolchains and instant AI evaluation.
                </p>
                <Link href="/contact" style={{ fontSize: "12.5px", fontWeight: "700", color: "#5B2E91", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

            {/* Card 4: Offline Learning Experience */}
            <div className="env-card env-card-hero">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                alt="Offline Learning Experience"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(11, 31, 58, 0.9) 100%)" }} />

              <div style={{ position: "relative", zIndex: 2, padding: "clamp(18px, 3vw, 24px)" }}>
                <h3 className="env-card-title-hero">
                  Offline Learning Experience
                </h3>
                <p className="env-card-desc-hero">
                  Immersive in-person learning hubs designed for deep focus, networking, and rapid career advancement.
                </p>
                <Link href="/contact" style={{ fontSize: "13px", fontWeight: "700", color: "#A78BFA", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <span>Read more</span> →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style jsx global>{`
        /* Fully Responsive CSS Architecture for EnvironmentSection */

        .env-header-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(1.75rem, 4.2vw, 2.375rem);
          font-weight: 800;
          color: #0B1F3A;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .env-header-sub {
          font-size: clamp(0.875rem, 1.5vw, 0.9375rem);
          color: #64748B;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .env-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 28px;
          align-items: stretch;
        }

        .env-column {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .env-card {
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #F1F5F9;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .env-card-tall {
          display: flex;
          flex-direction: column;
        }

        .env-card-img-wrap {
          width: 100%;
          height: 230px;
          overflow: hidden;
        }

        .env-card-body {
          padding: 24px;
        }

        .env-card-title-lg {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(18px, 2.2vw, 20px);
          font-weight: 800;
          color: #0B1F3A;
          margin-bottom: 8px;
        }

        .env-card-desc {
          font-size: clamp(12.5px, 1.4vw, 13.5px);
          color: #64748B;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .env-card-split {
          display: flex;
          min-height: 155px;
        }

        .env-split-img-wrap {
          width: 40%;
          height: 100%;
          min-height: 155px;
          overflow: hidden;
        }

        .env-split-body {
          width: 60%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .env-card-title-sm {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(15.5px, 2vw, 17px);
          font-weight: 800;
          color: #0B1F3A;
          margin-bottom: 6px;
        }

        .env-card-desc-sm {
          font-size: clamp(11.5px, 1.3vw, 12.5px);
          color: #64748B;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .env-card-hero {
          position: relative;
          flex: 1;
          min-height: 260px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: flex-end;
        }

        .env-card-title-hero {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(18px, 2.2vw, 20px);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .env-card-desc-hero {
          font-size: clamp(12px, 1.4vw, 13px);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin-bottom: 12px;
          max-width: 420px;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
        ---------------------------------------------------- */

        /* Laptop (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1024px) {
          .env-main-grid {
            gap: 20px;
          }
          .env-column {
            gap: 20px;
          }
        }

        /* Tablet & Mobile Layout (<1024px) */
        @media (max-width: 1023px) {
          .env-main-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .env-column {
            gap: 24px;
          }
        }

        /* Mobile Devices (<640px) */
        @media (max-width: 639px) {
          .env-br {
            display: none;
          }
          .env-card-split {
            flex-direction: column;
            min-height: auto;
          }
          .env-split-img-wrap {
            width: 100%;
            height: 180px;
            min-height: auto;
          }
          .env-split-body {
            width: 100%;
            padding: 18px;
          }
          .env-card-body {
            padding: 18px;
          }
          .env-card-img-wrap {
            height: 190px;
          }
          .env-card-hero {
            min-height: 230px;
          }
        }

        /* Small Mobile Devices (<= 480px) */
        @media (max-width: 480px) {
          .env-card {
            border-radius: 18px;
          }
          .env-card-body, .env-split-body {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}

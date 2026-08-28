"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const smoothEasing = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "What is finance analytics and how can it help my business?",
    a: "Finance analytics helps you understand your financial data better, so you can make smarter decisions, spot trends, and improve your business strategy."
  },
  {
    q: "How do I start using your finance analytics platform?",
    a: "You can start by creating an account, connecting your data sources, and following our intuitive onboarding guide to set up your first live dashboard in minutes."
  },
  {
    q: "How do I start using your finance analytics platform?",
    a: "Our customer success team provides 24/7 dedicated support and guided walkthroughs to ensure seamless integration with your existing accounting tools."
  },
  {
    q: "How do I start using your finance analytics platform?",
    a: "We offer flexible enterprise plans, automated data sync pipelines, and custom reporting templates tailored specifically for your operational workflows."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: "48px 0 60px", background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 24px)" }}>

        {/* 2-Column Layout */}
        <div className="faq-grid-layout">

          {/* Left Column: Eyebrow + Headline + Still have a questions card */}
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

            {/* Top Eyebrow Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#F3EEFE",
                border: "1px solid #E7DEFA",
                padding: "4px 14px",
                borderRadius: "9999px",
                marginBottom: "24px",
                width: "fit-content"
              }}
            >
              {/* Purple concentric circle icon */}
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "2.5px solid #7C3AED",
                  background: "#FFFFFF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#7C3AED"
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#7C3AED",
                  letterSpacing: "0.02em"
                }}
              >
                Dataly best SaaS analytics
              </span>
            </div>

            {/* Main Title */}
            <h2 className="faq-main-title">
              Frequently asked<br className="faq-br" />
              questions
            </h2>

            {/* Bottom "Still have a questions?" Box */}
            <div className="faq-question-box">
              <h3
                style={{
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  fontWeight: "800",
                  color: "#111827",
                  margin: "0 0 10px 0",
                  fontFamily: "var(--font-montserrat), sans-serif",
                  letterSpacing: "-0.01em"
                }}
              >
                Still have a questions?
              </h3>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6B7280",
                  lineHeight: "1.55",
                  margin: "0 0 24px 0"
                }}
              >
                Can&apos;t find the answer to your question? Send us an email and we&apos;ll get back to you as soon as possible!
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#7C3AED",
                  color: "#FFFFFF",
                  fontSize: "12.5px",
                  fontWeight: "700",
                  padding: "11px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.25)",
                  transition: "all 0.2s ease"
                }}
              >
                Send email
              </Link>
            </div>

          </div>

          {/* Right Column: Accordion Cards Stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="faq-accordion-card"
                >
                  {/* Question Row */}
                  <div
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                      cursor: "pointer",
                      userSelect: "none"
                    }}
                  >
                    <span className="faq-question-text">
                      {faq.q}
                    </span>

                    {/* Small White Toggle Button Box */}
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                        background: "#FFFFFF",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#7C3AED",
                        flexShrink: 0,
                        fontSize: "9px"
                      }}
                    >
                      {isOpen ? "▲" : "▼"}
                    </div>
                  </div>

                  {/* Answer Section */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: smoothEasing }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#6B7280",
                            lineHeight: "1.6",
                            margin: "12px 0 0 0"
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style jsx global>{`
        /* Fully Responsive CSS Architecture for FAQSection */

        .faq-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 56px;
          align-items: start;
        }

        .faq-main-title {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(2rem, 4.5vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 0 0 48px 0;
        }

        .faq-question-box {
          background: linear-gradient(135deg, #F3EEFE 0%, #FAF8FF 60%, #F5F0FE 100%);
          border: 1px solid #EBE3FA;
          border-radius: 24px;
          padding: 32px 28px;
          max-width: 380px;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.03);
        }

        .faq-accordion-card {
          background: #F4F5F9;
          border: 1px solid #ECEEF5;
          border-radius: 18px;
          padding: 22px 26px;
          transition: all 0.2s ease;
        }

        .faq-question-text {
          font-size: clamp(14px, 1.6vw, 15px);
          font-weight: 700;
          color: #1F2937;
          line-height: 1.4;
        }

        /* ----------------------------------------------------
           RESPONSIVE BREAKPOINTS
        ---------------------------------------------------- */

        /* Laptop (1024px to 1279px) */
        @media (max-width: 1279px) and (min-width: 1024px) {
          .faq-grid-layout {
            gap: 36px;
          }
        }

        /* Tablet & Mobile Layout (<1024px) */
        @media (max-width: 1023px) {
          .faq-grid-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .faq-main-title {
            margin-bottom: 24px;
          }
          .faq-question-box {
            max-width: 100%;
            margin-bottom: 8px;
          }
          .faq-br {
            display: none;
          }
        }

        /* Mobile Devices (<= 480px) */
        @media (max-width: 480px) {
          .faq-accordion-card {
            padding: 16px 18px;
            border-radius: 14px;
          }
          .faq-question-box {
            padding: 22px 18px;
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
}

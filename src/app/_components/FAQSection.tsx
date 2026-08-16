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
    <section id="faq" style={{ padding: "80px 0 100px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px" }}>

        {/* 2-Column Layout matching reference image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "56px",
            alignItems: "start"
          }}
          className="faq-grid-layout"
        >

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
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "44px",
                fontWeight: "800",
                color: "#111827",
                lineHeight: "1.12",
                letterSpacing: "-0.03em",
                margin: "0 0 48px 0"
              }}
            >
              Frequently asked<br />
              questions
            </h2>

            {/* Bottom "Still have a questions?" Box */}
            <div
              style={{
                background: "linear-gradient(135deg, #F3EEFE 0%, #FAF8FF 60%, #F5F0FE 100%)",
                border: "1px solid #EBE3FA",
                borderRadius: "24px",
                padding: "32px 28px",
                maxWidth: "380px",
                boxShadow: "0 4px 16px rgba(124, 58, 237, 0.03)"
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
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
                  style={{
                    background: "#F4F5F9",
                    border: "1px solid #ECEEF5",
                    borderRadius: "18px",
                    padding: "22px 26px",
                    transition: "all 0.2s ease"
                  }}
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
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#1F2937",
                        lineHeight: "1.4"
                      }}
                    >
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
    </section>
  );
}

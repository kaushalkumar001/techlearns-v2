"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ background: "#FFFFFF", color: "#0B1F3A", fontFamily: "var(--font-sans), sans-serif", overflowX: "hidden" }}>
      <Header />

      <main>
        {/* ============================================================ */}
        {/* 1. HERO BREADCRUMB HEADER */}
        {/* ============================================================ */}
        <section
          style={{
            background: "linear-gradient(180deg, #FAF8FE 0%, #FFFFFF 100%)",
            padding: "60px 20px 48px",
            textAlign: "center",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)"
          }}
        >
          <div className="container" style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "clamp(36px, 4.5vw, 54px)",
                fontWeight: "900",
                color: "#0B1F3A",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
                lineHeight: "1.1"
              }}
            >
              Contact
            </h1>

            {/* Breadcrumb */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#64748B"
              }}
            >
              <Link href="/" style={{ color: "#5B2E91", textDecoration: "none" }}>
                Home
              </Link>
              <span>&gt;</span>
              <span style={{ color: "#0B1F3A" }}>Contact</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. FULL-WIDTH MAP BANNER SECTION */}
        {/* ============================================================ */}
        <section style={{ width: "100%", height: "400px", position: "relative", background: "#E2E8F0", overflow: "hidden" }}>
          <iframe
            title="TechLearns Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.75123456789!2d77.6200!3d12.9350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e0b000000%3A0x123456789abcdef!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) saturate(0.95)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* ============================================================ */}
        {/* 3. GET IN TOUCH & SENT A MESSAGE SECTION */}
        {/* ============================================================ */}
        <section style={{ padding: "80px 0 100px", background: "#FFFFFF" }}>
          <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.3fr",
                gap: "56px",
                alignItems: "start"
              }}
              className="contact-split-grid"
            >
              {/* LEFT COLUMN: GET IN TOUCH INFO CARDS */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                
                {/* Eyebrow */}
                <div style={{ display: "inline-flex", flexDirection: "column", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#5B2E91",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "6px"
                    }}
                  >
                    / Contact Us
                  </span>
                  <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px" }} />
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: "var(--font-headings), sans-serif",
                    fontSize: "clamp(30px, 3.8vw, 42px)",
                    fontWeight: "900",
                    color: "#0B1F3A",
                    letterSpacing: "-0.02em",
                    lineHeight: "1.15",
                    marginBottom: "16px"
                  }}
                >
                  Get In Touch
                </h2>

                {/* Supporting description */}
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#64748B",
                    lineHeight: "1.7",
                    marginBottom: "36px",
                    maxWidth: "480px"
                  }}
                >
                  A creative tech learning ecosystem. We bridge the experience gap between education and employment with real-world sprints, live mentorship, and verifiable project telemetry.
                </p>

                {/* 3 Info Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  
                  {/* Card 1: Phone Number */}
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                      transition: "transform 0.25s ease, boxShadow 0.25s ease"
                    }}
                    className="contact-info-card"
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "#FEF3C7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Phone size={22} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        Phone Number
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: "900", color: "#0B1F3A" }}>
                        +91 98765 43210
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Address */}
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                      transition: "transform 0.25s ease, boxShadow 0.25s ease"
                    }}
                    className="contact-info-card"
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "#FEF3C7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <MapPin size={22} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        Address
                      </div>
                      <div style={{ fontSize: "15px", fontWeight: "900", color: "#0B1F3A", lineHeight: "1.4" }}>
                        TechLearns Academy, Koramangala, Bengaluru, India
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Enter Email */}
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                      transition: "transform 0.25s ease, boxShadow 0.25s ease"
                    }}
                    className="contact-info-card"
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "#FEF3C7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Mail size={22} color="#D97706" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: "800", color: "#64748B", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                        Enter Email
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: "900", color: "#0B1F3A" }}>
                        admissions@techlearns.com
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* RIGHT COLUMN: SENT A MESSAGE FORM CARD */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "24px",
                  padding: "44px 40px",
                  boxShadow: "0 10px 30px rgba(91, 46, 145, 0.06)"
                }}
                className="contact-form-card"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-headings), sans-serif",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: "900",
                    color: "#0B1F3A",
                    letterSpacing: "-0.01em",
                    marginBottom: "28px"
                  }}
                >
                  Sent A Message
                </h3>

                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "#F0FDF4",
                        border: "2px solid #10B981",
                        color: "#10B981",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px"
                      }}
                    >
                      <CheckCircle2 size={36} color="#10B981" />
                    </div>
                    <h4 style={{ fontSize: "20px", fontWeight: "800", color: "#0B1F3A", marginBottom: "8px" }}>
                      Message Received!
                    </h4>
                    <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "1.6", maxWidth: "360px", margin: "0 auto 24px" }}>
                      Thank you for reaching out. A TechLearns admissions representative will connect with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      style={{
                        background: "#5B2E91",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "12px 28px",
                        borderRadius: "9999px",
                        fontSize: "13.5px",
                        fontWeight: "700",
                        cursor: "pointer"
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    
                    {/* Row 1: Your Name & Phone */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="contact-form-row">
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "13px", fontWeight: "800", color: "#0B1F3A" }}>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            height: "50px",
                            padding: "0 16px",
                            borderRadius: "12px",
                            border: "1px solid #E2E8F0",
                            background: "#FAF8FE",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none"
                          }}
                        />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "13px", fontWeight: "800", color: "#0B1F3A" }}>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{
                            height: "50px",
                            padding: "0 16px",
                            borderRadius: "12px",
                            border: "1px solid #E2E8F0",
                            background: "#FAF8FE",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none"
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Property / Inquiry Type */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="contact-form-row">
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "13px", fontWeight: "800", color: "#0B1F3A" }}>Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            height: "50px",
                            padding: "0 16px",
                            borderRadius: "12px",
                            border: "1px solid #E2E8F0",
                            background: "#FAF8FE",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none"
                          }}
                        />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label style={{ fontSize: "13px", fontWeight: "800", color: "#0B1F3A" }}>Inquiry Type</label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          style={{
                            height: "50px",
                            padding: "0 16px",
                            borderRadius: "12px",
                            border: "1px solid #E2E8F0",
                            background: "#FAF8FE",
                            fontSize: "14px",
                            color: formData.inquiryType ? "#0B1F3A" : "#94A3B8",
                            outline: "none"
                          }}
                        >
                          <option value="">Choose type</option>
                          <option value="TLET Admissions">TLET Entrance Test / Admissions</option>
                          <option value="Corporate Partnership">Corporate Partnership</option>
                          <option value="Campus Integration">College / Institution Integration</option>
                          <option value="General Support">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <label style={{ fontSize: "13px", fontWeight: "800", color: "#0B1F3A" }}>Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        style={{
                          padding: "14px 16px",
                          borderRadius: "16px",
                          border: "1px solid #E2E8F0",
                          background: "#FAF8FE",
                          fontSize: "14px",
                          color: "#0B1F3A",
                          outline: "none",
                          resize: "vertical"
                        }}
                      />
                    </div>

                    {/* Primary Submit Button matching img (View More -> / Submit) */}
                    <div style={{ paddingTop: "8px" }}>
                      <button
                        type="submit"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                          color: "#FFFFFF",
                          padding: "16px 42px",
                          borderRadius: "9999px",
                          fontSize: "14px",
                          fontWeight: "900",
                          letterSpacing: "0.04em",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 10px 25px rgba(91, 46, 145, 0.35)",
                          transition: "all 0.25s ease"
                        }}
                        className="contact-submit-btn"
                      >
                        <span>View More</span>
                        <ArrowRight size={16} color="#FFFFFF" />
                      </button>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

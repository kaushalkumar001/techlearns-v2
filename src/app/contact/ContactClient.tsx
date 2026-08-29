"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail, Clock, CheckCircle2, ChevronDown, Send, Sparkles, User, MessageSquare } from "lucide-react";

export default function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
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
    <div style={{ background: "#FFFFFF", color: "#0B1F3A", fontFamily: "var(--font-sans), sans-serif" }}>
      <Header />

      <main style={{ paddingTop: "28px" }}>
        {/* ============================================================ */}
        {/* 1. HERO BANNER WITH ANIMATED HEADINGS */}
        {/* ============================================================ */}
        <section
          style={{
            position: "relative",
            background: "linear-gradient(180deg, rgba(15, 7, 32, 0.55) 0%, rgba(45, 18, 85, 0.65) 100%), url('/images/contact/contactbg.JPG') center/cover no-repeat",
            padding: "90px 20px 120px",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          {/* Background image pattern overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.12,
              backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px"
            }}
          />

          <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
            
            {/* Eyebrow Tag (Centered Top Pill) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "20px" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#5B2E91",
                  color: "#FFFFFF",
                  padding: "6px 20px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  boxShadow: "0 4px 14px rgba(91, 46, 145, 0.4)"
                }}
              >
                <span>Let’s Connect</span>
              </div>
            </motion.div>

            {/* Line 1: Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="contact-hero-title"
              style={{
                fontFamily: "var(--font-headings), sans-serif",
                fontSize: "clamp(28px, 3.8vw, 46px)",
                fontWeight: "900",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
                lineHeight: "1.2"
              }}
            >
              Have a question, idea, or opportunity?
            </motion.h1>

            {/* Line 2: Subtitle (Smaller font) */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                fontWeight: "400",
                color: "#D8B4FE",
                lineHeight: "1.5",
                maxWidth: "680px",
                margin: "0 auto"
              }}
            >
              Reach out to the TechLearns team — we’d love to hear from you.
            </motion.p>

          </div>

          {/* Red/Purple Inverted Chevron Accent Line & Slant Edge */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40px",
              background: "#FFFFFF",
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              zIndex: 3
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "4px",
              left: 0,
              right: 0,
              height: "44px",
              background: "#5B2E91",
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              zIndex: 2
            }}
          />
        </section>

        {/* ============================================================ */}
        {/* 2. SPLIT SECTION: 3 INFO CARDS (LEFT) & FORM CARD (RIGHT) */}
        {/* ============================================================ */}
        <section style={{ padding: "80px 0 60px", background: "#FFFFFF" }}>
          <div className="container" style={{ maxWidth: "1240px", width: "100%", margin: "0 auto", padding: "0 24px" }}>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "360px 1fr",
                gap: "48px",
                alignItems: "start"
              }}
              className="contact-split-grid"
            >
              
              {/* LEFT COLUMN: 3 VERTICAL CONTACT INFO CARDS WITH HOVER ANIMATIONS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                {/* CARD 1: Visit a Office */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(91, 46, 145, 0.12)", transition: { duration: 0.25 } }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "16px",
                    padding: "32px 28px 24px",
                    position: "relative",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)"
                  }}
                  className="contact-info-card"
                >
                  {/* Top Ribbon Badge Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "24px",
                      background: "#5B2E91",
                      color: "#FFFFFF",
                      padding: "8px 14px",
                      borderRadius: "8px 8px 8px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(91, 46, 145, 0.3)"
                    }}
                  >
                    <MapPin size={18} color="#FFFFFF" />
                  </motion.div>

                  <h3
                    style={{
                      fontFamily: "var(--font-headings), sans-serif",
                      fontSize: "18px",
                      fontWeight: "900",
                      color: "#0B1F3A",
                      marginBottom: "10px",
                      marginTop: "4px"
                    }}
                  >
                    Visit a Office
                  </h3>
                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6", margin: 0 }}>
                    JRQC+76 Orbit Signature Walk, Sales Office, 1, VIP Rd, Zirakpur, Punjab 140603
                  </p>
                </motion.div>

                {/* CARD 2: Send Email (DARK PURPLE HIGHLIGHT CARD) */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(11, 31, 58, 0.25)", transition: { duration: 0.25 } }}
                  style={{
                    background: "linear-gradient(135deg, #0B1F3A 0%, #1E0A3C 60%, #3B1B68 100%)",
                    color: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "32px 28px 24px",
                    position: "relative",
                    boxShadow: "0 10px 30px rgba(11, 31, 58, 0.15)"
                  }}
                  className="contact-info-card"
                >
                  {/* Top Ribbon Badge Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "24px",
                      background: "#7E3AF2",
                      color: "#FFFFFF",
                      padding: "8px 14px",
                      borderRadius: "8px 8px 8px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(126, 58, 242, 0.4)"
                    }}
                  >
                    <Mail size={18} color="#FFFFFF" />
                  </motion.div>

                  <h3
                    style={{
                      fontFamily: "var(--font-headings), sans-serif",
                      fontSize: "18px",
                      fontWeight: "900",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                      marginTop: "4px"
                    }}
                  >
                    Send Email
                  </h3>
                  <div style={{ fontSize: "13px", color: "#E2E8F0", lineHeight: "1.6" }}>
                    <div>Admissions: admissions@techlearns.com</div>
                    <div style={{ color: "#D8B4FE", marginTop: "4px" }}>Support: support@techlearns.com</div>
                  </div>
                </motion.div>

                {/* CARD 3: Make a Call */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(91, 46, 145, 0.12)", transition: { duration: 0.25 } }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "16px",
                    padding: "32px 28px 24px",
                    position: "relative",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)"
                  }}
                  className="contact-info-card"
                >
                  {/* Top Ribbon Badge Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "24px",
                      background: "#5B2E91",
                      color: "#FFFFFF",
                      padding: "8px 14px",
                      borderRadius: "8px 8px 8px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(91, 46, 145, 0.3)"
                    }}
                  >
                    <Phone size={18} color="#FFFFFF" />
                  </motion.div>

                  <h3
                    style={{
                      fontFamily: "var(--font-headings), sans-serif",
                      fontSize: "18px",
                      fontWeight: "900",
                      color: "#0B1F3A",
                      marginBottom: "10px",
                      marginTop: "4px"
                    }}
                  >
                    Make a Call
                  </h3>
                  <div style={{ fontSize: "13px", color: "#64748B", lineHeight: "1.6" }}>
                    <div>Admissions: +91 98765 43210</div>
                    <div>Corporate: +91 98765 43211</div>
                  </div>
                </motion.div>

              </div>

              {/* RIGHT COLUMN: ULTRA-PREMIUM "DROP YOUR MESSAGE" FORM CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  background: "linear-gradient(150deg, #FFFFFF 0%, #FAF8FE 60%, #F5ECFF 100%)",
                  border: "1px solid rgba(91, 46, 145, 0.15)",
                  borderRadius: "28px",
                  padding: "48px 44px",
                  boxShadow: "0 24px 60px rgba(91, 46, 145, 0.08), 0 4px 20px rgba(11, 31, 58, 0.03)",
                  position: "relative",
                  overflow: "hidden"
                }}
                className="contact-form-card"
              >
                {/* Top Glowing Accent Bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #5B2E91 0%, #7E3AF2 50%, #D8B4FE 100%)"
                  }}
                />

                {/* Eyebrow Badge */}
                <div style={{ marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      background: "rgba(126, 58, 242, 0.08)",
                      border: "1px solid rgba(126, 58, 242, 0.18)",
                      color: "#7E3AF2",
                      padding: "4px 14px",
                      borderRadius: "9999px",
                      fontSize: "11px",
                      fontWeight: "800",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <MessageSquare size={12} color="#7E3AF2" />
                    Send An Inquiry
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-headings), sans-serif",
                    fontSize: "clamp(26px, 3.2vw, 36px)",
                    fontWeight: "900",
                    color: "#0B1F3A",
                    letterSpacing: "-0.02em",
                    marginBottom: "8px"
                  }}
                >
                  Drop Your Message
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748B",
                    lineHeight: "1.6",
                    marginBottom: "32px"
                  }}
                >
                  Please fill out the form and provide details of your request, we will reply back.
                </p>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ textAlign: "center", padding: "40px 20px" }}
                  >
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
                      Thank you for contacting TechLearns. An admissions representative will connect with you shortly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setFormSubmitted(false)}
                      style={{
                        background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "12px 28px",
                        borderRadius: "10px",
                        fontSize: "13.5px",
                        fontWeight: "700",
                        cursor: "pointer",
                        boxShadow: "0 6px 18px rgba(91, 46, 145, 0.3)"
                      }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    
                    {/* Row 1: Name & Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="contact-form-row">
                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: "100%",
                            height: "52px",
                            padding: "0 16px 0 44px",
                            borderRadius: "12px",
                            border: "1.5px solid #E2E8F0",
                            background: "#FFFFFF",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                            transition: "all 0.25s ease"
                          }}
                        />
                        <User size={18} color="#94A3B8" style={{ position: "absolute", left: "16px", top: "17px", pointerEvents: "none" }} />
                      </div>

                      <div style={{ position: "relative" }}>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: "100%",
                            height: "52px",
                            padding: "0 16px 0 44px",
                            borderRadius: "12px",
                            border: "1.5px solid #E2E8F0",
                            background: "#FFFFFF",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                            transition: "all 0.25s ease"
                          }}
                        />
                        <Mail size={18} color="#94A3B8" style={{ position: "absolute", left: "16px", top: "17px", pointerEvents: "none" }} />
                      </div>
                    </div>

                    {/* Row 2: Phone & Address */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="contact-form-row">
                      <div style={{ position: "relative" }}>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: "100%",
                            height: "52px",
                            padding: "0 16px 0 44px",
                            borderRadius: "12px",
                            border: "1.5px solid #E2E8F0",
                            background: "#FFFFFF",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                            transition: "all 0.25s ease"
                          }}
                        />
                        <Phone size={18} color="#94A3B8" style={{ position: "absolute", left: "16px", top: "17px", pointerEvents: "none" }} />
                      </div>

                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            height: "52px",
                            padding: "0 16px 0 44px",
                            borderRadius: "12px",
                            border: "1.5px solid #E2E8F0",
                            background: "#FFFFFF",
                            fontSize: "14px",
                            color: "#0B1F3A",
                            outline: "none",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                            transition: "all 0.25s ease"
                          }}
                        />
                        <MapPin size={18} color="#94A3B8" style={{ position: "absolute", left: "16px", top: "17px", pointerEvents: "none" }} />
                      </div>
                    </div>

                    {/* Row 3: Service Dropdown */}
                    <div style={{ position: "relative" }}>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          height: "52px",
                          padding: "0 40px 0 16px",
                          borderRadius: "12px",
                          border: "1.5px solid #E2E8F0",
                          background: "#FFFFFF",
                          fontSize: "14px",
                          color: formData.service ? "#0B1F3A" : "#94A3B8",
                          outline: "none",
                          appearance: "none",
                          cursor: "pointer",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                          transition: "all 0.25s ease"
                        }}
                      >
                        <option value="">Service</option>
                        <option value="TLET Admissions">TLET Entrance &amp; Admissions</option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                        <option value="Campus Integration">College &amp; Campus Integration</option>
                        <option value="General Support">General Support</option>
                      </select>
                      <ChevronDown size={18} color="#94A3B8" style={{ position: "absolute", right: "16px", top: "17px", pointerEvents: "none" }} />
                    </div>

                    {/* Row 4: Message Textarea */}
                    <div style={{ position: "relative" }}>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: "100%",
                          padding: "16px 16px 16px 44px",
                          borderRadius: "12px",
                          border: "1.5px solid #E2E8F0",
                          background: "#FFFFFF",
                          fontSize: "14px",
                          color: "#0B1F3A",
                          outline: "none",
                          resize: "vertical",
                          minHeight: "120px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                          transition: "all 0.25s ease"
                        }}
                      />
                      <MessageSquare size={18} color="#94A3B8" style={{ position: "absolute", left: "16px", top: "18px", pointerEvents: "none" }} />
                    </div>

                    {/* Submit Button */}
                    <div style={{ paddingTop: "6px" }}>
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 16px 36px rgba(91, 46, 145, 0.35)" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                          width: "100%",
                          background: "linear-gradient(135deg, #5B2E91 0%, #7E3AF2 100%)",
                          color: "#FFFFFF",
                          padding: "17px",
                          borderRadius: "12px",
                          fontSize: "15px",
                          fontWeight: "800",
                          letterSpacing: "0.02em",
                          border: "none",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          boxShadow: "0 10px 25px rgba(91, 46, 145, 0.25)",
                          transition: "all 0.25s ease"
                        }}
                        className="contact-submit-btn"
                      >
                        <Send size={17} color="#FFFFFF" />
                        <span>Send A Message</span>
                      </motion.button>
                    </div>

                  </form>
                )}

              </motion.div>

            </div>

            {/* ============================================================ */}
            {/* 3. WORKING HOURS & SOCIAL MEDIA BAR WITH ANIMATIONS */}
            {/* ============================================================ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                marginTop: "60px",
                paddingTop: "24px",
                borderTop: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "24px"
              }}
              className="contact-bottom-bar"
            >
              {/* Working Hours Left */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1.5px solid #E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5B2E91"
                  }}
                >
                  <Clock size={20} color="#5B2E91" />
                </div>
                <div>
                  <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "14px", fontWeight: "900", color: "#0B1F3A", marginRight: "8px" }}>
                        Mon - Friday
                      </span>
                      <span style={{ fontSize: "13px", color: "#64748B" }}>
                        9:00 am to 6:45 pm
                      </span>
                    </div>
                    <div>
                      <span style={{ fontSize: "14px", fontWeight: "900", color: "#0B1F3A", marginRight: "8px" }}>
                        Saturday
                      </span>
                      <span style={{ fontSize: "13px", color: "#64748B" }}>
                        10:30 am to 4:35 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Right */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "15px", fontWeight: "900", color: "#0B1F3A" }}>
                  Social Media :
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <motion.a
                    whileHover={{ scale: 1.15, background: "#5B2E91", color: "#FFFFFF", rotate: 6 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#0B1F3A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.15, background: "#5B2E91", color: "#FFFFFF", rotate: -6 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#0B1F3A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/></svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.15, background: "#5B2E91", color: "#FFFFFF", rotate: 6 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#0B1F3A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.15, background: "#5B2E91", color: "#FFFFFF", rotate: -6 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "#F1F5F9",
                      color: "#0B1F3A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </motion.a>
                </div>
              </div>

            </motion.div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. FULL-WIDTH INTERACTIVE MAP SECTION AT BOTTOM */}
        {/* ============================================================ */}
        <section className="contact-map-section" style={{ width: "100%", height: "420px", position: "relative", background: "#E2E8F0", overflow: "hidden" }}>
          <iframe
            title="TechLearns Location Map"
            src="https://maps.google.com/maps?q=Orbit%20Signature%20Walk,%20Sales%20Office,%201,%20VIP%20Rd,%20Zirakpur,%20Punjab%20140603&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "contrast(1.05) saturate(0.95)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

      </main>

      <Footer />
    </div>
  );
}

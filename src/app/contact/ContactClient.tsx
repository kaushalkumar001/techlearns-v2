"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Generative AI Engineering",
    year: "2026",
    experience: "Student",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container" style={{ maxWidth: "680px" }}>
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>ADMISSIONS GATEWAY</span>
            <h1 style={{ fontSize: "40px", color: "var(--foreground)", marginTop: "8px" }}>Get In Touch</h1>
            <p style={{ color: "var(--foreground-muted)", margin: "12px auto 0", fontSize: "15px" }}>
              Submit your TLET candidate registration parameters below. Start your corporate software engineering experience.
            </p>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: "40px", marginBottom: "60px" }}>
            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.15)", border: "2px solid #27C93F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px" }}>✓</div>
                <h2 style={{ fontSize: "22px", color: "var(--foreground)" }}>Admissions Intake Saved</h2>
                <p style={{ fontSize: "14px", color: "var(--foreground-muted)", maxWidth: "400px" }}>
                  Thank you for submitting. Our technical counseling team will send the TLET test link and preparatory materials via email in 24 hours.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="glow-btn-secondary" style={{ marginTop: "10px" }}>
                  Submit New Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>FULL NAME</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required 
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>HIGHEST GRADUATION YEAR</label>
                    <select 
                      name="year" 
                      value={formData.year} 
                      onChange={handleInputChange}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    >
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="Other">Earlier</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>TARGET LEARNING TRACK</label>
                    <select 
                      name="track" 
                      value={formData.track} 
                      onChange={handleInputChange}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    >
                      <option>Generative AI Engineering</option>
                      <option>AI-Enabled Full Stack</option>
                      <option>Cloud Platform &amp; DevOps</option>
                      <option>Cybersecurity &amp; Networks</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>CURRENT EXPERIENCE LEVEL</label>
                    <select 
                      name="experience" 
                      value={formData.experience} 
                      onChange={handleInputChange}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    >
                      <option value="Student">Fresher (Student)</option>
                      <option value="1yr">1-2 Years Experience</option>
                      <option value="3yr">3+ Years Experience</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>ADDITIONAL MESSAGE (OPTIONAL)</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    rows={4}
                    style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                  />
                </div>

                <button type="submit" className="glow-btn-primary" style={{ justifyContent: "center", padding: "14px", marginTop: "10px" }}>
                  Submit Intake Registration
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

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
    userType: "Student",
    interest: "Book a Free Career Diagnostic",
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
        <div className="container" style={{ maxWidth: "800px" }}>
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              CONTACT &amp; ENQUIRY
            </span>
            <h1 className="fade-in-up" style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px", fontWeight: 800 }}>
              Ready to stop learning in theory?
            </h1>
            <p className="fade-in-up" style={{ color: "var(--foreground-muted)", margin: "12px auto 0", fontSize: "16px", maxWidth: "600px", lineHeight: "1.6" }}>
              Talk to a program advisor, take a free diagnostic, or explore SkillOS.
            </p>
          </div>

          <div className="grid-split" style={{ gap: "40px", marginBottom: "60px" }}>
            {/* Form */}
            <div className="glass-card" style={{ padding: "30px", background: "var(--card-bg)" }}>
              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "40px 0", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.15)", border: "2px solid #27C93F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px" }}>✓</div>
                  <h2 style={{ fontSize: "20px", color: "var(--foreground)" }}>Request Received</h2>
                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", maxWidth: "300px" }}>
                    Thank you. A program advisor or representative will follow up via email in 24 hours.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="glow-btn-secondary" style={{ marginTop: "10px" }}>
                    Submit New Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>I AM A:</label>
                    <select 
                      name="userType" 
                      value={formData.userType} 
                      onChange={handleInputChange}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    >
                      <option value="Student">Student / Fresher</option>
                      <option value="Professional">Working Professional</option>
                      <option value="College">College / Institution Partner</option>
                      <option value="Employer">Employer / Recruiter</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>AREA OF INTEREST</label>
                    <select 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleInputChange}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    >
                      <option>Book a Free Career Diagnostic</option>
                      <option>Request a Techlearns-in-Campus Proposal</option>
                      <option>Join the Advisory Council / Submit a Brief</option>
                      <option>Contact the Techlearns Team</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--foreground-muted)" }}>MESSAGE (OPTIONAL)</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      rows={3}
                      style={{ padding: "10px 14px", borderRadius: "6px", fontSize: "13px" }}
                    />
                  </div>

                  <button type="submit" className="glow-btn-primary" style={{ justifyContent: "center", padding: "12px", marginTop: "8px" }}>
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Quick Info Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="glass-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "15px", color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>👤 Individuals</h3>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)", margin: 0, lineHeight: "1.4" }}>
                  Schedule your free aptitude vectors diagnostic to maps target career roles.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "15px", color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>🏫 Colleges</h3>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)", margin: 0, lineHeight: "1.4" }}>
                  Integrate weekly coding practice and Future Skills League qualifiers directly inside your institution.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "15px", color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>💼 Employers</h3>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)", margin: 0, lineHeight: "1.4" }}>
                  Join the council or contribute real problems to the challenge briefs repository.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "15px", color: "#FFFFFF", fontWeight: 700, marginBottom: "8px" }}>📡 Partnerships</h3>
                <p style={{ fontSize: "13px", color: "var(--foreground-muted)", margin: 0, lineHeight: "1.4" }}>
                  Get in touch for content distribution or general business queries.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

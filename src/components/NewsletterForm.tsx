"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.15)", border: "1px solid #27C93F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#27C93F" }}>✓</div>
        <span style={{ fontSize: "14px", color: "var(--foreground)", fontWeight: 600 }}>Subscription Received!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", maxWidth: "500px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
      <input 
        type="email" 
        placeholder="Your email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid var(--border-color)",
          color: "#FFFFFF",
          padding: "12px 18px",
          borderRadius: "6px",
          fontSize: "14px",
          outline: "none",
          flex: "1",
          minWidth: "250px"
        }}
      />
      <button type="submit" className="glow-btn-primary" style={{ padding: "12px 24px" }}>
        Subscribe
      </button>
    </form>
  );
}

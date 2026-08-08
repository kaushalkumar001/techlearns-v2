import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Future Skills League (FSL) Tournaments",
  description: "Join monthly national buildathons, CTFs, and datathons. Push standings on the leaderboard to fast-track hiring.",
  alternates: {
    canonical: "https://techlearns.com/fsl"
  },
  openGraph: {
    title: "Future Skills League (FSL) Tournaments | TechLearns Academy",
    description: "Join monthly national buildathons, CTFs, and datathons. Push standings on the leaderboard to fast-track hiring.",
    url: "https://techlearns.com/fsl"
  }
};

const leagueTiers = [
  { rank: "Grandmaster", score: "2800+ Points", color: "#CB6CE6", desc: "Top 2% of candidates. Exceptional system design and deployment skills under time pressure." },
  { rank: "Master", score: "2400 - 2799 Points", color: "#8C52FF", desc: "Top 8% of candidates. Proficient code architectures, clean PR history, and reliable operations." },
  { rank: "Expert", score: "2000 - 2399 Points", color: "#7237BC", desc: "Top 20% of candidates. Capable full-stack features delivery, prompt engineering workflow." },
  { rank: "Specialist", score: "1600 - 1999 Points", color: "var(--foreground)", desc: "Consistent logical progress, qualified basic unit-test diagnostics." }
];

const upcomingEvents = [
  { name: "FSL AI Buildathon 2026", date: "August 20-22, 2026", type: "Multi-Agent System Orchestrator Challenge", award: "₹5 Lakh Prize Pool" },
  { name: "National DevOps CTF Sprints", date: "September 05, 2026", type: "Infrastructure-as-Code Setup & Scaling", award: "Placement Fasttrack Tickets" },
  { name: "Distributed Datathon Finals", date: "September 18-20, 2026", type: "Real-time Ad-Tech Data Stream Analytics", award: "₹3 Lakh Prize Pool" }
];

export default function FSLPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>NATIONAL TOURNAMENTS</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Future Skills League (FSL)</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Compete in monthly hackathons, algorithmic optimization sprints, and security capture-the-flags to push your name up the league ranks.
            </p>
          </div>

          {/* Grid: Tiers & Upcoming Events */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "50px", marginBottom: "80px", alignItems: "start" }}>
            
            {/* Tiers List */}
            <div>
              <h2 style={{ fontSize: "28px", color: "var(--foreground)", marginBottom: "30px" }}>FSL League Standing Tiers</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {leagueTiers.map((tier, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", alignItems: "center" }}>
                      <strong style={{ fontSize: "18px", color: tier.color }}>{tier.rank}</strong>
                      <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "4px", fontFamily: "monospace" }}>{tier.score}</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5" }}>{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sprints */}
            <div>
              <h2 style={{ fontSize: "28px", color: "var(--foreground)", marginBottom: "30px" }}>Upcoming League Sprints</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {upcomingEvents.map((evt, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: "24px", borderLeft: "4px solid var(--secondary-magenta)" }}>
                    <span style={{ fontSize: "11px", color: "var(--foreground-muted-extra)", fontFamily: "monospace", display: "block", marginBottom: "4px" }}>{evt.date}</span>
                    <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginBottom: "6px" }}>{evt.name}</h3>
                    <p style={{ fontSize: "13px", color: "var(--foreground-muted)", marginBottom: "12px" }}>{evt.type}</p>
                    <strong style={{ fontSize: "13px", color: "#27C93F" }}>Award: {evt.award}</strong>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Rules Banner */}
          <div className="glass-card" style={{ padding: "50px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.02)" }}>
            <h3 style={{ fontSize: "24px", color: "var(--foreground)", marginBottom: "12px" }}>Ready to test your code metrics?</h3>
            <p style={{ color: "var(--foreground-muted)", marginBottom: "30px", fontSize: "14px" }}>Admissions registration gives you automatic access to preparatory FSL sandbox trials.</p>
            <Link href="/contact" className="glow-btn-primary">
              Enroll in Admissions Track
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

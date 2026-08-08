import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Candidate Transition Stories",
  description: "Explore verified transition milestones of our candidates from static tutorial learners to core engineers.",
  alternates: {
    canonical: "https://techlearns.com/stories"
  },
  openGraph: {
    title: "Candidate Transition Stories | TechLearns Academy",
    description: "Explore verified transition milestones of our candidates from static tutorial learners to core engineers.",
    url: "https://techlearns.com/stories"
  }
};

const stories = [
  {
    name: "Rohan Das",
    role: "Cloud Engineer at AWS",
    before: "Struggling engineer watching recorded programming videos. Had no proof of actual cloud deployments.",
    milestones: [
      { name: "TLET Qualification", detail: "Scored 88% on logical diagnostics, claimed initial admissions ticket." },
      { name: "Sprint Milestones", detail: "Shipped 10 cloud system tickets. Configured multi-region Kubernetes clusters." },
      { name: "FSL standing", detail: "Ranked 3rd in national DevOps CTF sprints, scoring 2750 league points." },
      { name: "Recruiter Fasttrack", detail: "Skill Passport audited by AWS manager, verifying Terraform deployment history." }
    ],
    offer: "Joined AWS Cloud Team at ₹28 LPA package",
    color: "#FF9900"
  },
  {
    name: "Nikita Kapoor",
    role: "AI Engineer at Microsoft",
    before: "Non-CS graduate. Found code syntax tutorials complex and had no verifiable portfolio project.",
    milestones: [
      { name: "TLET Qualification", detail: "Qualified entrance diagnostics with 84%, showing high logical aptitude." },
      { name: "Sprint Milestones", detail: "Completed 12 AI tickets. Configured document parser using open source LLMs." },
      { name: "FSL standing", detail: "Won the national FSL AI Buildathon 2025 with an autonomous multi-agent system." },
      { name: "Recruiter Fasttrack", detail: "Skill Passport verified by Microsoft hiring panel. Bypassed initial resume checks." }
    ],
    offer: "Joined Microsoft AI Group at ₹34 LPA package",
    color: "#0078D7"
  }
];

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>CANDIDATE TRANSITIONS</span>
            <h1 style={{ fontSize: "44px", color: "var(--foreground)", marginTop: "8px" }}>Success Stories</h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "600px", margin: "12px auto 0", fontSize: "16px" }}>
              Explore the detailed milestones, FSL standings, and verified projects that powered real career transformations.
            </p>
          </div>

          {/* Stories List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "60px", marginBottom: "60px" }}>
            {stories.map((s, idx) => (
              <div key={idx} className="glass-card fade-in-up" style={{ padding: "40px", borderColor: "var(--border-color)", animationDelay: `${idx * 0.1}s` }}>
                
                {/* Intro */}
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "20px", marginBottom: "30px", alignItems: "center" }}>
                  <div>
                    <h2 style={{ fontSize: "24px", color: "var(--foreground)", marginBottom: "4px" }}>{s.name}</h2>
                    <span style={{ fontSize: "13px", color: s.color, fontWeight: 700 }}>{s.role}</span>
                  </div>
                  <strong style={{ fontSize: "18px", color: "#27C93F" }}>{s.offer}</strong>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "40px", alignItems: "start" }}>
                  {/* Left Column: Before */}
                  <div className="glass-card" style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderLeft: "4px solid #FF5F56" }}>
                    <h4 style={{ fontSize: "14px", color: "var(--foreground)", marginBottom: "8px" }}>THE CHALLENGE BEFORE</h4>
                    <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.6" }}>{s.before}</p>
                  </div>

                  {/* Right Column: Milestones */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h4 style={{ fontSize: "14px", color: "var(--foreground)", marginBottom: "4px", fontFamily: "monospace" }}>VERIFIED MILESTONE PATHWAY</h4>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderLeft: "2px dashed var(--border-color)", paddingLeft: "20px", marginLeft: "10px" }}>
                      {s.milestones.map((m, i) => (
                        <div key={i} style={{ position: "relative" }}>
                          {/* Bullet circle */}
                          <div style={{ position: "absolute", left: "-27px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: s.color }}></div>
                          <strong style={{ fontSize: "14px", color: "var(--foreground)", display: "block", marginBottom: "2px" }}>{m.name}</strong>
                          <p style={{ fontSize: "13px", color: "var(--foreground-muted)" }}>{m.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

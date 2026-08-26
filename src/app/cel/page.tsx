import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Corporate Experience Learning? | Techlearns Methodology",
  description: "A structured system where you repeatedly learn, practise, build, collaborate, present, compete and get assessed — through the actual working rituals of modern technology teams.",
  alternates: { canonical: "https://techlearns.com/cel" },
  openGraph: {
    title: "Corporate Experience Learning (CEL) | Techlearns",
    description: "A structured system where you repeatedly learn, practise, build, collaborate, present, compete and get assessed — through the actual working rituals of modern technology teams.",
    url: "https://techlearns.com/cel"
  }
};

const celStages = [
  { num: "01", name: "Assess", desc: "Diagnostic assessment, career intent, baseline capability and role fit. You start by knowing exactly where you are and where you're going." },
  { num: "02", name: "Learn", desc: "Live instruction, guided self-learning, concise concept modules. Theory is kept tight — never more than needed before you practise." },
  { num: "03", name: "Practise", desc: "Daily labs, coding, SQL, cloud, security, quizzes, cases, AI-assisted drills. Repetition with feedback, not repetition for its own sake." },
  { num: "04", name: "Build", desc: "Mini-projects, team projects, live briefs, capstone products. You ship something at every stage — not just at the end." },
  { num: "05", name: "Operate", desc: "Stand-ups, sprint planning, tickets, reviews, documentation, QA, demos, retrospectives. You run the engineering workflow, not just the code." },
  { num: "06", name: "Experience", desc: "Expert talks, industry visits, job shadowing, mentor reviews, internships. Real exposure, scheduled as curriculum milestones." },
  { num: "07", name: "Compete", desc: "Hackathons, buildathons, datathons, CTFs, architecture challenges, demo days. Performance under pressure, in front of real audiences." },
  { num: "08", name: "Validate & Launch", desc: "Skill Passport, external credential prep, mock hiring, recruiter showcase. You graduate with evidence, not just a certificate." }
];

const rituals = [
  { moment: "Daily / Weekly", what: "Stand-up updates, blockers, task planning" },
  { moment: "Sprint Start", what: "Backlog, requirements, role allocation, acceptance criteria" },
  { moment: "Build Cycle", what: "Version control, branch discipline, documentation, peer review, QA" },
  { moment: "Review Gate", what: "Mentor/code/design/data review against clear rubrics" },
  { moment: "Demo Day", what: "Present your product or insight to a technical + business audience" },
  { moment: "Retrospective", what: "What worked, what failed, root cause, improvement commitment" },
  { moment: "Incident Simulation", what: "Debug, recover, communicate and document under time pressure" },
  { moment: "Stakeholder Review", what: "Explain trade-offs, cost, risk and business value" }
];

const guarantees = [
  "3+ portfolio-grade mini-builds and 1 major capstone",
  "1+ team project with defined roles, deadlines and peer review",
  "1+ competition or challenge under time pressure",
  "2+ direct industry interactions beyond ordinary lectures",
  "1+ formal presentation to an external/cross-functional jury",
  "1 external credential pathway where relevant",
  "A final evidence review of what you can show, explain and defend"
];

export default function CELPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section style={{ padding: "24px 0 80px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Methodology</span>
            <h1 style={{ fontSize: "48px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", lineHeight: "1.15" }}>
              Corporate Experience Learning:<br />
              <span style={{ color: "#CB6CE6" }}>our proprietary operating model</span>
            </h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "680px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
              A structured system where you repeatedly learn, practise, build, collaborate, present, compete and get assessed — through the actual working rituals of modern technology teams.
            </p>
          </div>
        </section>

        {/* 8-Stage Flywheel */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", fontWeight: 800 }}>The 8-Stage CEL Flywheel</h2>
              <p style={{ color: "var(--foreground-muted)", marginTop: "12px", maxWidth: "580px", margin: "12px auto 0" }}>
                You never spend too long in "learn" mode without moving into practice, production, review or public demonstration. The cycle repeats throughout the program.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {celStages.map((s, i) => (
                <div key={i} className="glass-card fade-in-up" style={{ padding: "30px", borderTop: `3px solid ${i % 2 === 0 ? "#CB6CE6" : "rgba(203,108,230,0.4)"}`, animationDelay: `${i * 0.07}s` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", background: "rgba(203,108,230,0.1)", padding: "3px 8px", borderRadius: "4px" }}>STAGE {s.num}</span>
                  </div>
                  <h3 style={{ fontSize: "20px", color: "var(--foreground)", marginBottom: "10px", fontWeight: 700 }}>{s.name}</h3>
                  <p style={{ fontSize: "14px", color: "var(--foreground-muted)", lineHeight: "1.65" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30-50-20 Mix */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", fontWeight: 800 }}>The 30-50-20 Learning Mix</h2>
              <p style={{ color: "var(--foreground-muted)", marginTop: "12px" }}>An intentional design ratio — theory never dominates.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              {[
                { pct: "30%", label: "Guided Concepts & Demonstrations", color: "#CB6CE6" },
                { pct: "50%", label: "Applied Practice & Projects", color: "#5B2D91" },
                { pct: "20%", label: "Exposure, Competitions, Reviews & Career Evidence", color: "#2C0A71" }
              ].map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: "40px 28px", textAlign: "center", borderBottom: `4px solid ${item.color}` }}>
                  <h3 style={{ fontSize: "56px", fontWeight: 900, color: item.color, margin: "0 0 12px" }}>{item.pct}</h3>
                  <p style={{ fontSize: "15px", color: "var(--foreground)", fontWeight: 600 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Rituals Table */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", fontWeight: 800 }}>Corporate Rituals You'll Practise</h2>
              <p style={{ color: "var(--foreground-muted)", marginTop: "12px" }}>These aren't simulations of work. They are the work.</p>
            </div>
            <div className="glass-card" style={{ overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(91, 45, 145, 0.15)" }}>
                    <th style={{ padding: "18px 24px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#CB6CE6", letterSpacing: "0.05em" }}>MOMENT</th>
                    <th style={{ padding: "18px 24px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#CB6CE6", letterSpacing: "0.05em" }}>WHAT YOU DO</th>
                  </tr>
                </thead>
                <tbody>
                  {rituals.map((r, i) => (
                    <tr key={i} style={{ borderTop: "1px solid var(--border-color)" }}>
                      <td style={{ padding: "16px 24px", fontWeight: 600, color: "var(--foreground)", fontSize: "14px", whiteSpace: "nowrap" }}>{r.moment}</td>
                      <td style={{ padding: "16px 24px", color: "var(--foreground-muted)", fontSize: "14px", lineHeight: "1.5" }}>{r.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="grid-2col" style={{ gap: "60px", alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: "36px", color: "var(--foreground)", fontWeight: 800, marginBottom: "20px" }}>What Every Flagship Program Guarantees</h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.7" }}>
                  These are structural commitments — not aspirational outcomes. Every program is designed to guarantee these milestones before graduation.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "36px" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {guarantees.map((g, i) => (
                    <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--foreground-muted)", lineHeight: "1.5" }}>
                      <span style={{ color: "#27C93F", flexShrink: 0, fontWeight: 700, marginTop: "1px" }}>✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.03)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px" }}>See the Learner Journey →</h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "520px", margin: "0 auto 36px", fontSize: "16px" }}>
                Eleven phases. One connected system. A journey built around evidence, not attendance.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/programs" className="glow-btn-primary">Explore Programs</Link>
                <Link href="/contact" className="glow-btn-secondary">Book a Free Diagnostic</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

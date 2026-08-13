import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Techlearns | A Next-Generation Corporate Experience Learning Ecosystem",
  description: "Techlearns exists to bridge the gap between learning technology and experiencing how technology is actually built, applied and delivered.",
  alternates: { canonical: "https://techlearns.com/about" },
  openGraph: {
    title: "About Techlearns | Corporate Experience Learning Ecosystem",
    description: "Techlearns exists to bridge the gap between learning technology and experiencing how technology is actually built, applied and delivered.",
    url: "https://techlearns.com/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px" }}>

        {/* Hero */}
        <section style={{ padding: "0 0 100px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "#CB6CE6", fontSize: "12px", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>About Techlearns</span>
            <h1 style={{ fontSize: "52px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", lineHeight: "1.15" }}>
              We're not another institute<br />
              <span style={{ color: "#CB6CE6" }}>selling classes.</span>
            </h1>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "660px", margin: "0 auto", fontSize: "18px", lineHeight: "1.75" }}>
              Techlearns exists to bridge the gap between learning technology and experiencing how technology is actually built, applied and delivered.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="grid-2col" style={{ gap: "48px" }}>
              <div className="glass-card" style={{ padding: "40px", borderTop: "3px solid #CB6CE6" }}>
                <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>OUR VISION</span>
                <h2 style={{ fontSize: "24px", color: "var(--foreground)", marginTop: "12px", marginBottom: "16px", fontWeight: 800 }}>A nationally trusted CEL ecosystem</h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.75" }}>
                  To become a nationally trusted next-generation Corporate Experience Learning ecosystem that enables learners from every background to build future-ready technological capability through real corporate experience, measurable practice and continuous access to opportunity.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "40px", borderTop: "3px solid #5B2D91" }}>
                <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em" }}>OUR MISSION</span>
                <h2 style={{ fontSize: "24px", color: "var(--foreground)", marginTop: "12px", marginBottom: "16px", fontWeight: 800 }}>Bridge learning and doing</h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "15px", lineHeight: "1.75" }}>
                  We bridge the gap between learning technology and experiencing how technology is built, applied and delivered — by combining current curriculum, expert mentorship, corporate operating practices, live projects, industry exposure, competitions, verified skill evidence and credible external certification pathways in one integrated online + offline ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category */}
        <section style={{ padding: "80px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Category</span>
            <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800 }}>
              A next-generation Corporate Experience<br />Learning ecosystem
            </h2>
            <p style={{ color: "var(--foreground-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "17px", lineHeight: "1.75" }}>
              Delivered through an integrated online + offline model — combining real work rituals, live projects, industry exposure, competitions and verified credentials in one system.
            </p>
          </div>
        </section>

        {/* Manifesto */}
        <section style={{ padding: "80px 0", background: "rgba(91, 45, 145, 0.04)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Manifesto</span>
              <div className="glass-card" style={{ padding: "52px 48px", marginTop: "32px", border: "1px dashed rgba(203,108,230,0.4)" }}>
                <p style={{ fontSize: "19px", color: "var(--foreground)", lineHeight: "2", fontStyle: "italic" }}>
                  We believe talent is everywhere, but meaningful exposure is not. We believe a learner should experience the discipline of real work before the first job. We believe skills become valuable when they are practised, challenged, reviewed and proven. We believe technology should make learning measurable without making it impersonal. And we believe India can build a generation that does not merely hold certificates — it can build, solve, communicate, compete and lead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="grid-2col" style={{ gap: "60px", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: "12px", color: "#CB6CE6", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Positioning</span>
                <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginTop: "12px", marginBottom: "20px", fontWeight: 800, lineHeight: "1.25" }}>
                  Designed for learners who don't want to stop at knowing technology
                </h2>
                <p style={{ color: "var(--foreground-muted)", fontSize: "16px", lineHeight: "1.8" }}>
                  Through Corporate Experience Learning, every learner experiences how technology is planned, built, reviewed, applied and delivered. The journey integrates skills, practice, projects, teamwork, industry exposure, competitions, credential pathways and career evidence. The result is demonstrated capability — not just a course-completion certificate.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "40px" }}>
                <p style={{ fontSize: "28px", fontWeight: 800, color: "var(--foreground)", lineHeight: "1.4", margin: 0 }}>
                  Where learning technology becomes corporate experience —{" "}
                  <span style={{ color: "#CB6CE6" }}>and experience becomes capability.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "60px 0 100px" }}>
          <div className="container">
            <div className="glass-card" style={{ padding: "60px 40px", textAlign: "center", border: "1px dashed var(--secondary-magenta)", background: "rgba(203, 108, 230, 0.03)" }}>
              <h2 style={{ fontSize: "36px", color: "var(--foreground)", marginBottom: "16px" }}>Ready to experience how it works?</h2>
              <p style={{ color: "var(--foreground-muted)", maxWidth: "480px", margin: "0 auto 36px", fontSize: "16px" }}>
                Take a free diagnostic or explore our flagship programs.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/programs" className="glow-btn-primary">Explore Programs</Link>
                <Link href="/cel" className="glow-btn-secondary">See How CEL Works</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

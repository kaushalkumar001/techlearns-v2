"use client";

const awardsData = [
  {
    title: "World Education Summit",
    org: "Elets Technomedia",
    year: "2024",
    desc: "Recognized for outstanding contribution to education technology and digital transformation in learning.",
    photo: "/images/award_summit_2024.jpg",
    icon: "🏆"
  },
  {
    title: "Education Leadership Award",
    org: "Elets Technomedia",
    year: "2023",
    desc: "Honored for leadership in advancing quality education through technology and innovation.",
    photo: "/images/award_leadership_2023.jpg",
    icon: "🏅"
  },
  {
    title: "Indian Education Award",
    org: "Brand Empower",
    year: "2022",
    desc: "Awarded for excellence in education, mentorship and building future-ready learning solutions.",
    photo: "/images/award_indian_2022.jpg",
    icon: "⭐"
  },
  {
    title: "National Education Excellence Award",
    org: "Education Today",
    year: "2021",
    desc: "Recognized for dedication towards academic excellence and student empowerment.",
    photo: "/images/award_national_2021.jpg",
    icon: "📜"
  },
  {
    title: "Excellence in Education & Innovation Award",
    org: "Education Excellence Forum",
    year: "2020",
    desc: "Recognized for driving innovation in education and creating impactful technology-enabled learning experiences.",
    photo: "/images/award_innovation_2020.jpg",
    icon: "💡"
  },
  {
    title: "Emerging Education Leader Award",
    org: "National Education Network",
    year: "2019",
    desc: "Honored for inspiring students and educators through leadership, mentorship and future-focused education initiatives.",
    photo: "/images/award_emerging_leader_2019.jpg",
    icon: "🚀"
  }
];

export default function AwardsSection() {
  return (
    <section style={{ padding: "48px 0", background: "#FFFFFF" }}>
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#5B2E91", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
            AWARDS & RECOGNITION
          </div>
          <div style={{ width: "32px", height: "3px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto 16px" }}></div>

          <h2 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: "38px", fontWeight: "800", color: "#0B1F3A", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Celebrating <span style={{ color: "#5B2E91" }}>Leadership & Excellence</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280" }}>
            Recognitions that reflect our commitment to innovation, education and meaningful impact.
          </p>
        </div>

        {/* 4 Award Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "22px", marginBottom: "40px" }}>
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #EDE9FE",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", height: "190px", background: "#F1F5F9" }}>
                <img
                  src={award.photo}
                  alt={award.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Floating Award Icon Circle */}
                <div style={{ position: "absolute", bottom: "-16px", left: "16px", width: "36px", height: "36px", borderRadius: "50%", background: "#6D28D9", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", boxShadow: "0 4px 10px rgba(109,40,217,0.3)" }}>
                  {award.icon}
                </div>

                {/* Year Pill */}
                <div style={{ position: "absolute", bottom: "10px", right: "12px", background: "rgba(255,255,255,0.9)", color: "#6D28D9", padding: "2px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "800" }}>
                  {award.year}
                </div>
              </div>

              {/* Text Body */}
              <div style={{ padding: "28px 20px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h4 style={{ fontSize: "15.5px", fontWeight: "800", color: "#111827", marginBottom: "2px" }}>
                    {award.title}
                  </h4>
                  <div style={{ fontSize: "12px", color: "#6D28D9", fontWeight: "600", marginBottom: "12px" }}>
                    {award.org}
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.5" }}>
                    {award.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

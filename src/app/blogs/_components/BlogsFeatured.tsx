"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const mainFeaturedArticle = {
  title: "Navigating the Shift to AI-Native Software Engineering: A Guide for Tech Leaders",
  date: "Aug, 26 2026",
  categories: ["🔥 Trending", "🧠 AI & GenAI", "💼 Career & Interviews"],
  summary: "A practical guide for software engineering leads on transitioning traditional web teams to LLM workflows, automated code verification pipelines, and verifiable candidate skill passports.",
  image: "/images/blog/featured_main.jpg",
  slug: "ai-native-software-engineering-guide"
};

const secondaryFeaturedArticles = [
  {
    title: "Orchestrating Autonomous AI Agents: Multi-Agent Systems in Production...",
    date: "Dec, 26 2026",
    categories: ["🧠 AI & GenAI", "💻 Web Development"],
    summary: "Explore how top tech teams build prompt workflows, RAG vector indexing, and multi-agent coordination for enterprise applications...",
    image: "/images/blog/featured_sub1.jpg",
    slug: "autonomous-ai-agent-orchestration"
  },
  {
    title: "How to Build a Verifiable GitHub & System Architecture Portfolio...",
    date: "Dec, 26 2026",
    categories: ["💼 Career & Interviews", "📊 DSA & Coding"],
    summary: "Learn the telemetry metrics, test assertions, agile commit logs, and system design diagrams FAANG recruiters look for...",
    image: "/images/blog/featured_sub2.jpg",
    slug: "verifiable-portfolio-faang-hiring"
  }
];

export default function BlogsFeatured() {
  return (
    <section style={{ paddingTop: "0px", paddingBottom: "70px" }}>
      <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Featured 2-Column Layout */}
        <div className="blog-top-featured-grid">

          {/* Left Column: Main Featured Article */}
          <div className="fade-in-up" style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", width: "100%", height: "clamp(220px, 32vw, 360px)", borderRadius: "20px", overflow: "hidden", marginBottom: "20px" }}>
              <Image
                src={mainFeaturedArticle.image}
                alt={mainFeaturedArticle.title}
                fill
                sizes="(max-width: 991px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <span style={{ fontSize: "13px", color: "#94A3B8", marginBottom: "10px", fontWeight: 400 }}>
              {mainFeaturedArticle.date}
            </span>

            <h2 style={{ fontSize: "clamp(18px, 2.2vw, 22px)", fontWeight: 700, color: "var(--foreground)", lineHeight: "1.35", marginBottom: "12px", letterSpacing: "-0.01em" }}>
              {mainFeaturedArticle.title}
            </h2>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
              {mainFeaturedArticle.categories.map((cat, idx) => (
                <span key={idx} className="blog-category-pill">
                  {cat}
                </span>
              ))}
            </div>

            <p style={{ fontSize: "clamp(13.5px, 1.3vw, 14px)", color: "var(--foreground-muted)", lineHeight: "1.6", marginBottom: "20px" }}>
              {mainFeaturedArticle.summary}
            </p>

            <div>
              <Link href={`/blog/${mainFeaturedArticle.slug}`} className="blog-learn-more" style={{ fontSize: "14px", fontWeight: 700 }}>
                Learn more →
              </Link>
            </div>
          </div>

          {/* Right Column: 2 Stacked Secondary Featured Articles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {secondaryFeaturedArticles.map((art, idx) => (
              <div key={idx} className="blog-secondary-item fade-in-up" style={{ animationDelay: `${(idx + 1) * 0.15}s` }}>
                <div style={{ position: "relative", width: "100%", height: "clamp(160px, 24vw, 200px)", borderRadius: "20px", overflow: "hidden" }}>
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 991px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "2px" }}>
                  <span style={{ fontSize: "12.5px", color: "#94A3B8", marginBottom: "8px", fontWeight: 400 }}>
                    {art.date}
                  </span>

                  <h3 style={{ fontSize: "clamp(16px, 1.8vw, 18px)", fontWeight: 700, color: "var(--foreground)", lineHeight: "1.35", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                    {art.title}
                  </h3>

                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
                    {art.categories.map((cat, cIdx) => (
                      <span key={cIdx} className="blog-category-pill">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize: "13px", color: "var(--foreground-muted)", lineHeight: "1.5", marginBottom: "14px" }}>
                    {art.summary}
                  </p>

                  <div>
                    <Link href={`/blog/${art.slug}`} className="blog-learn-more" style={{ fontSize: "13.5px", fontWeight: 700 }}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

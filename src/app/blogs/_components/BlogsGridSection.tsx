"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";

interface Article {
  id: number;
  title: string;
  meta: string;
  summary: string;
  image: string;
  category: string;
  slug: string;
}

const categoryBanners = [
  { name: "🔥 Trending", img: "/images/blog/card_1.jpg" },
  { name: "💻 Web Development", img: "/images/blog/card_2.jpg" },
  { name: "🧠 AI & GenAI", img: "/images/blog/card_3.jpg" },
  { name: "📊 DSA & Coding", img: "/images/blog/card_4.jpg" },
  { name: "💼 Career & Interviews", img: "/images/blog/grid_5.jpg" }
];

const allMainArticles: Article[] = [
  {
    id: 1,
    title: "Top 10 Tech Hiring Signals & High-Growth Career Trends for 2026",
    meta: "🔥 TRENDING - DEC 24, 2026",
    category: "🔥 Trending",
    summary: "Explore how engineering leads use automated code verification pipelines, candidate Git history, and live system design assessments to evaluate candidate readiness.",
    image: "/images/blog/card_1.jpg",
    slug: "top-hiring-trends-2026"
  },
  {
    id: 2,
    title: "Full-Stack Edge Computing Performance & Sub-Second TTFB Optimization",
    meta: "💻 WEB DEVELOPMENT - DEC 21, 2026",
    category: "💻 Web Development",
    summary: "How leading web engineering teams leverage edge runtimes, React Server Components, and streaming hydration to achieve instant page loads.",
    image: "/images/blog/card_2.jpg",
    slug: "edge-computing-performance"
  },
  {
    id: 3,
    title: "Prompt Engineering & Retrieval-Augmented Generation (RAG) at Scale",
    meta: "🧠 AI & GENAI - DEC 18, 2026",
    category: "🧠 AI & GenAI",
    summary: "Implementing enterprise RAG workflows, vector database indexing, semantic search pipelines, and continuous LLM evaluation.",
    image: "/images/blog/card_3.jpg",
    slug: "prompt-engineering-rag-scale"
  },
  {
    id: 4,
    title: "Mastering Data Structures & Algorithmic Problem Solving for FAANG",
    meta: "📊 DSA & CODING - DEC 14, 2026",
    category: "📊 DSA & Coding",
    summary: "Proven design patterns, space-time complexity analysis, and optimal algorithmic strategies for cracking high-frequency coding interviews.",
    image: "/images/blog/card_4.jpg",
    slug: "mastering-dsa-faang"
  },
  {
    id: 5,
    title: "The Transition from Senior Engineer to Tech Lead: Lessons & Strategy",
    meta: "💼 CAREER & INTERVIEWS - DEC 10, 2026",
    category: "💼 Career & Interviews",
    summary: "Navigating technical decision-making, mentoring junior developers, stakeholder communication, and project estimation under deadline.",
    image: "/images/blog/grid_5.jpg",
    slug: "transition-to-tech-lead"
  },
  {
    id: 6,
    title: "The Rise of Verifiable Skill Passports in Modern Tech Recruitment",
    meta: "🔥 TRENDING - DEC 06, 2026",
    category: "🔥 Trending",
    summary: "Why static resume certificates are losing ground to transparent project telemetry logs, pull request reviews, and verified skill badges.",
    image: "/images/blog/grid_6.jpg",
    slug: "verifiable-skill-passports"
  },
  {
    id: 7,
    title: "Orchestrating Autonomous AI Agents: Multi-Agent Systems in Production",
    meta: "🧠 AI & GENAI - NOV 30, 2026",
    category: "🧠 AI & GenAI",
    summary: "Traditional full-stack engineers are transitioning to LLM engineering. Learn core prompt workflows, RAG systems, and multi-agent frameworks.",
    image: "/images/blog/featured_sub1.jpg",
    slug: "autonomous-ai-agents-production"
  },
  {
    id: 8,
    title: "Building Resilient Microservices with Distributed System Architecture",
    meta: "💻 WEB DEVELOPMENT - NOV 26, 2026",
    category: "💻 Web Development",
    summary: "Explore architectural patterns, event-driven streaming with Kafka, and fault-tolerant strategies required for enterprise cloud platforms.",
    image: "/images/blog/featured_sub2.jpg",
    slug: "resilient-microservices-architecture"
  },
  {
    id: 9,
    title: "Dynamic Programming & Graph Traversal Interview Mastery Guide",
    meta: "📊 DSA & CODING - NOV 22, 2026",
    category: "📊 DSA & Coding",
    summary: "Step-by-step breakdown of graph algorithms (BFS, DFS, Dijkstra), tree traversals, and dynamic programming memoization.",
    image: "/images/blog/card_1.jpg",
    slug: "dp-graph-interview-guide"
  },
  {
    id: 10,
    title: "Cracking System Design Interviews: Scalable Web Applications",
    meta: "💼 CAREER & INTERVIEWS - NOV 18, 2026",
    category: "💼 Career & Interviews",
    summary: "How to structure system design responses for load balancing, database sharding, caching strategies, and CDN distribution.",
    image: "/images/blog/card_2.jpg",
    slug: "cracking-system-design-interviews"
  },
  {
    id: 11,
    title: "Modern Web Security & Zero-Trust Architecture for Cloud Apps",
    meta: "💻 WEB DEVELOPMENT - NOV 14, 2026",
    category: "💻 Web Development",
    summary: "Implementing robust authentication, OAuth2/OIDC, encrypted API communication, and continuous security scanning.",
    image: "/images/blog/card_3.jpg",
    slug: "zero-trust-cloud-security"
  },
  {
    id: 12,
    title: "Fine-Tuning Open Source LLMs for Domain-Specific AI Products",
    meta: "🧠 AI & GENAI - NOV 10, 2026",
    category: "🧠 AI & GenAI",
    summary: "Practical guide to LoRA, QLoRA, parameter-efficient fine-tuning, and dataset curation for domain-adapted LLMs.",
    image: "/images/blog/card_4.jpg",
    slug: "fine-tuning-llms-guide"
  },
  {
    id: 13,
    title: "The Future of Full-Stack Engineering: AI-Powered Developer Workflows",
    meta: "🔥 TRENDING - NOV 05, 2026",
    category: "🔥 Trending",
    summary: "How generative AI coding tools, automated test generation, and intelligent IDE extensions are multiplying developer productivity.",
    image: "/images/blog/grid_5.jpg",
    slug: "ai-powered-developer-workflows"
  },
  {
    id: 14,
    title: "Tree Structures, Tries, and Binary Heap Algorithms for High Performance",
    meta: "📊 DSA & CODING - OCT 30, 2026",
    category: "📊 DSA & Coding",
    summary: "Deep dive into advanced data structures: Trie prefix trees, Heap priority queues, and Segment Trees for fast range queries.",
    image: "/images/blog/grid_6.jpg",
    slug: "advanced-trees-heaps-guide"
  }
];

export default function BlogsGridSection() {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // Filter logic
  const filteredArticles = allMainArticles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.meta.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory
      ? art.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoadingMore(false);
    }, 350);
  };

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
      setVisibleCount(6);
    }
  };

  return (
    <section style={{ paddingTop: "20px", paddingBottom: "40px" }}>
      <div className="container" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 24px" }}>
        <div className="blog-layout-wrapper">

          {/* LEFT SIDEBAR (Sticky) */}
          <aside className="blog-sidebar-sticky" style={{ display: "flex", flexDirection: "column" }}>

            {/* 1. Search Box */}
            <div className="blog-sidebar-section">
              <div className="blog-search-box">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={16} style={{ color: "var(--foreground-muted)", cursor: "pointer" }} />
              </div>
            </div>

            {/* 2. Categories Banners */}
            <div className="blog-sidebar-section">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h3 className="blog-sidebar-title" style={{ margin: 0 }}>Categories</h3>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    style={{ background: "none", border: "none", color: "var(--primary-purple)", fontSize: "12px", cursor: "pointer", fontWeight: 600 }}
                  >
                    Clear Filter
                  </button>
                )}
              </div>
              <div>
                {categoryBanners.map((cat, idx) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <div
                      key={idx}
                      className="blog-category-banner"
                      onClick={() => handleCategoryClick(cat.name)}
                      style={{
                        outline: isSelected ? "2px solid var(--primary-purple)" : "none",
                        transform: isSelected ? "scale(1.02)" : "none"
                      }}
                    >
                      <Image src={cat.img} alt={cat.name} fill style={{ objectFit: "cover" }} />
                      <div className="blog-category-banner-overlay" style={{ background: isSelected ? "rgba(91, 45, 145, 0.65)" : "rgba(0, 0, 0, 0.45)" }} />
                      <span className="blog-category-banner-text">{cat.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Top Posts List */}
            <div className="blog-sidebar-section">
              <h3 className="blog-sidebar-title">Top Posts</h3>
              <div className="blog-top-posts-card">
                {[
                  {
                    num: 1,
                    title: "Orchestrating Autonomous AI Agents: Multi-Agent Systems in Production",
                    meta: "🧠 AI & GENAI - DEC 26, 2026"
                  },
                  {
                    num: 2,
                    title: "Mastering Distributed System Architecture & Microservices in 2026",
                    meta: "💻 WEB DEVELOPMENT - DEC 20, 2026"
                  },
                  {
                    num: 3,
                    title: "How to Build a Verifiable GitHub Portfolio for Top Tech Hiring",
                    meta: "💼 CAREER & INTERVIEWS - DEC 15, 2026"
                  },
                  {
                    num: 4,
                    title: "Graph Algorithms & Dynamic Programming Interview Mastery Guide",
                    meta: "📊 DSA & CODING - DEC 10, 2026"
                  },
                  {
                    num: 5,
                    title: "Top 10 Tech Hiring Signals & Salary Benchmarks for Developers",
                    meta: "🔥 TRENDING - DEC 05, 2026"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="blog-top-post-row">
                    <span className="blog-top-post-num">{item.num}</span>
                    <div>
                      <h4 className="blog-top-post-title">{item.title}</h4>
                      <span className="blog-top-post-meta">{item.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Instagram Showcase Grid */}
            <div className="blog-sidebar-section">
              <h3 className="blog-sidebar-title">Instagram</h3>
              <div className="blog-instagram-grid">
                {[
                  "/images/blog/card_1.jpg",
                  "/images/blog/card_2.jpg",
                  "/images/blog/card_3.jpg",
                  "/images/blog/card_4.jpg",
                  "/images/blog/grid_5.jpg",
                  "/images/blog/grid_6.jpg"
                ].map((img, idx) => (
                  <div key={idx} className="blog-instagram-item">
                    <Image src={img} alt="Instagram Showcase" fill style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>

          </aside>

          {/* RIGHT MAIN CONTENT (2-COLUMN GRID) */}
          <div style={{ display: "flex", flexDirection: "column" }}>

            {displayedArticles.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", background: "rgba(248, 250, 252, 0.5)", borderRadius: "12px", border: "1px dashed var(--border-color)" }}>
                <p style={{ fontSize: "16px", color: "var(--foreground-muted)", margin: 0 }}>
                  No articles found matching your criteria.
                </p>
                {(searchQuery || selectedCategory) && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    style={{ marginTop: "14px", background: "var(--primary-purple)", color: "#FFF", border: "none", padding: "8px 18px", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="blog-main-grid">
                {displayedArticles.map((art) => (
                  <div key={art.id} className="blog-simple-card fade-in-up" style={{ display: "flex", flexDirection: "column" }}>
                    <div className="blog-simple-card-img-wrapper">
                      <Image src={art.image} alt={art.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <span className="blog-simple-card-meta">{art.meta}</span>
                    <h3 className="blog-simple-card-title">{art.title}</h3>
                    <p className="blog-simple-card-excerpt" style={{ marginBottom: "14px" }}>{art.summary}</p>

                    <div style={{ marginTop: "auto" }}>
                      <Link href={`/blog/${art.slug}`} className="blog-learn-more" style={{ fontSize: "13.5px", fontWeight: 700 }}>
                        Learn more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "24px", position: "relative", zIndex: 10, pointerEvents: "auto" }}>
                <button
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="blog-load-more-btn"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", position: "relative", zIndex: 10, pointerEvents: "auto" }}
                >
                  {isLoadingMore ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}

            {!hasMore && displayedArticles.length > 0 && (
              <div style={{ textAlign: "center", marginTop: "40px", fontSize: "13.5px", color: "var(--foreground-muted-extra)", fontStyle: "italic" }}>
                You have reached the end of the articles.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

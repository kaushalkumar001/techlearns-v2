"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogsHero from "./_components/BlogsHero";
import BlogsGridSection from "./_components/BlogsGridSection";
import BlogsExecutiveBanner from "./_components/BlogsExecutiveBanner";
import BlogsFeatured from "./_components/BlogsFeatured";

export default function BlogsClient() {
  return (
    <div style={{ background: "#FFFFFF", color: "#0B1F3A", fontFamily: "var(--font-sans), sans-serif" }}>
      <Header />
      
      <main style={{ paddingBottom: "0" }}>
        <BlogsHero />
        <BlogsFeatured />
        <BlogsGridSection />
        <BlogsExecutiveBanner />
      </main>

      <Footer />
    </div>
  );
}

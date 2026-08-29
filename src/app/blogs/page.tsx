import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Techlearns Skill Report | Insights on AI, Careers & Future Skills",
  description: "A running read on what's changing in AI, data, cloud, cybersecurity — and what it means for your career.",
  alternates: {
    canonical: "https://techlearns.com/blogs"
  },
  openGraph: {
    title: "Techlearns Skill Report | Insights on AI, Careers & Future Skills",
    description: "A running read on what's changing in AI, data, cloud, cybersecurity — and what it means for your career.",
    url: "https://techlearns.com/blogs"
  }
};

export default function BlogsPage() {
  return <BlogsClient />;
}

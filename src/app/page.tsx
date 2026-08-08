import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "TechLearns Academy | India's 1st Pre-Hired Tech Academy",
  description: "India's corporate experience learning ecosystem. Claim backlog sprint tickets, push Git commits, get code reviews, and verify your Skill Passport.",
  alternates: {
    canonical: "https://techlearns.com"
  },
  openGraph: {
    title: "TechLearns Academy | India's 1st Pre-Hired Tech Academy",
    description: "India's corporate experience learning ecosystem. Claim backlog sprint tickets, push Git commits, get code reviews, and verify your Skill Passport.",
    url: "https://techlearns.com",
    type: "website",
  }
};

export default function Page() {
  return <HomeClient />;
}

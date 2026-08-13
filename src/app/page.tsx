import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Techlearns | Corporate Experience Learning Ecosystem for AI, Data, Cloud & Cybersecurity",
  description: "Techlearns is a next-generation Corporate Experience Learning ecosystem. Learn technology, experience how industry builds, work on live projects, compete, and graduate with a verified Skill Passport — not just a certificate.",
  alternates: {
    canonical: "https://techlearns.com"
  },
  openGraph: {
    title: "Learning technology isn't enough. Experience how it's built.",
    description: "Techlearns is a next-generation Corporate Experience Learning ecosystem. Learn technology, experience how industry builds, work on live projects, compete, and graduate with a verified Skill Passport — not just a certificate.",
    url: "https://techlearns.com",
    type: "website",
  }
};

export default function Page() {
  return <HomeClient />;
}

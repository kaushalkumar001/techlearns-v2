import type { Metadata } from "next";
import SkillOSClient from "./SkillOSClient";

export const metadata: Metadata = {
  title: "SkillOS Developer Workspace",
  description: "Experience the unified learning OS. Practice algorithms, claim backlog tickets, review telemetry analytics, and deploy cloud codebases.",
  alternates: {
    canonical: "https://techlearns.com/skillos"
  },
  openGraph: {
    title: "SkillOS Developer Workspace | TechLearns Academy",
    description: "Experience the unified learning OS. Practice algorithms, claim backlog tickets, review telemetry analytics, and deploy cloud codebases.",
    url: "https://techlearns.com/skillos",
  }
};

export default function Page() {
  return <SkillOSClient />;
}

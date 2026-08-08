import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const metadata: Metadata = {
  title: "Industry Partners & Corporate Hiring",
  description: "Direct hire pre-vetted tech talent. Filter portfolios by checked commit history and mentor audit reviews.",
  alternates: {
    canonical: "https://techlearns.com/partners"
  },
  openGraph: {
    title: "Industry Partners & Corporate Hiring | TechLearns Academy",
    description: "Direct hire pre-vetted tech talent. Filter portfolios by checked commit history and mentor audit reviews.",
    url: "https://techlearns.com/partners",
  }
};

export default function Page() {
  return <PartnersClient />;
}

import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "TechLearns Academy | The Modern Technical University for Software Engineers",
  description: "Earn verified engineering credentials, build production-grade systems, and master advanced architectures under the guidance of top-tier industry educators.",
  alternates: {
    canonical: "https://techlearns.com"
  },
  openGraph: {
    title: "TechLearns Academy | The Modern Technical University for Software Engineers",
    description: "Earn verified engineering credentials, build production-grade systems, and master advanced architectures under the guidance of top-tier industry educators.",
    url: "https://techlearns.com",
    type: "website",
  }
};

export default function Page() {
  return <HomeClient />;
}

import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Admissions Intake",
  description: "Register for the TechLearns Entrance Test (TLET) and start your corporate experience journey.",
  alternates: {
    canonical: "https://techlearns.com/contact"
  },
  openGraph: {
    title: "Contact Admissions Intake | TechLearns Academy",
    description: "Register for the TechLearns Entrance Test (TLET) and start your corporate experience journey.",
    url: "https://techlearns.com/contact",
  }
};

export default function Page() {
  return <ContactClient />;
}

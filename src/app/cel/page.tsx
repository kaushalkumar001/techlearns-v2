import type { Metadata } from "next";
import PartnersClient from "@/app/partners/PartnersClient";

export const metadata: Metadata = {
  title: "Corporate Experience Learning (CEL™) | Techlearns",
  description: "Don't prepare for corporate life someday. Start experiencing it today. CEL transforms technical learning into an immersive professional environment.",
  alternates: { canonical: "https://techlearns.com/cel" },
  openGraph: {
    title: "Corporate Experience Learning (CEL™) | Techlearns",
    description: "Don't prepare for corporate life someday. Start experiencing it today. CEL transforms technical learning into an immersive professional environment.",
    url: "https://techlearns.com/cel"
  }
};

export default function CELPage() {
  return <PartnersClient />;
}

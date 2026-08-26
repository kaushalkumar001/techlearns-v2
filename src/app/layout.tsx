import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techlearns.com"),
  title: {
    default: "TechLearns Academy | Pre-Hired Technology Programs",
    template: "%s | TechLearns Academy"
  },
  description: "India's corporate experience learning ecosystem. Claim sprint tickets, push Git commits, get Pull Request reviews, and verify your Skill Passport. Get hired first, then trained.",
  keywords: [
    "Corporate Experience Learning",
    "Skill Passport",
    "SkillOS",
    "Software Engineering Academy",
    "Pre-placement Offer PPO",
    "Generative AI Program",
    "AWS DevOps Sprints",
    "Full Stack Coding Bootcamps",
    "Future Skills League",
    "TLET Entrance Test"
  ],
  authors: [{ name: "TechLearns Editorial Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techlearns.com",
    title: "TechLearns Academy | Pre-Hired Technology Programs",
    description: "India's corporate experience learning ecosystem. Claim sprint tickets, push Git commits, get Pull Request reviews, and verify your Skill Passport.",
    siteName: "TechLearns Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechLearns Academy | Pre-Hired Technology Programs",
    description: "India's corporate experience learning ecosystem. Claim sprint tickets, push Git commits, get Pull Request reviews, and verify your Skill Passport.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(plusJakartaSans.variable, plusJakartaSans.className, "font-sans", geist.variable)}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}

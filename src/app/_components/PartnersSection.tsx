"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight, Clock, Layers } from "lucide-react";

// Official vector brand logo mapper for all ecosystem partner companies
const PartnerLogo = ({ name, size = 18 }: { name: string; size?: number }) => {
  const cleanName = name.trim().toLowerCase();

  if (cleanName.includes("microsoft")) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", width: `${size}px`, height: `${size}px`, flexShrink: 0 }}>
        <div style={{ background: "#F25022", borderRadius: "1px" }} />
        <div style={{ background: "#7FBA00", borderRadius: "1px" }} />
        <div style={{ background: "#00A4EF", borderRadius: "1px" }} />
        <div style={{ background: "#FFB900", borderRadius: "1px" }} />
      </div>
    );
  }

  if (cleanName.includes("google")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.26v3.15C3.25 21.3 7.31 24 12 24z" />
        <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.26C.46 8.2.01 10.03.01 12c0 1.97.45 3.8 1.25 5.39l4.02-3.15z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.26 6.61l4.02 3.15c.95-2.85 3.6-4.96 6.72-4.96z" />
      </svg>
    );
  }

  if (cleanName.includes("aws") || cleanName.includes("amazon")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M6.7 15.5c-2.3 0-3.7-1.3-3.7-3.2 0-2.3 2.1-3.4 5.3-3.4h2v-.5c0-1.1-.7-1.7-2-1.7-1.1 0-2.1.3-2.9.9l-.6-1.3c1.1-.8 2.5-1.1 3.9-1.1 2.4 0 3.8 1.1 3.8 3.2v4.8h-1.6v-1c-.8.8-2 1.3-3.2 1.3zm.4-1.4c1.2 0 2.2-.6 2.6-1.5v-1.1h-1.8c-2 0-3.3.6-3.3 1.9 0 1 .8 1.7 2.5 1.7zm9.6 1.4c-1.3 0-2.3-.5-2.9-1.4v1.2h-1.6V5.2h1.7v3.5c.6-.9 1.6-1.4 2.8-1.4 2.3 0 3.9 1.8 3.9 4.1 0 2.3-1.6 4.1-3.9 4.1zm-.3-1.4c1.4 0 2.4-1.1 2.4-2.7 0-1.6-1-2.7-2.4-2.7-1.4 0-2.4 1.1-2.4 2.7 0 1.6 1 2.7 2.4 2.7z" fill="#FF9900" />
        <path d="M3.5 17.5c4.5 2 10.5 2 15.5-1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (cleanName.includes("github")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFFFFF" style={{ flexShrink: 0 }}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }

  if (cleanName.includes("leetcode")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFA116" style={{ flexShrink: 0 }}>
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.178 1.823.645l2.697 2.607c.504.48 1.308.48 1.812 0a1.27 1.27 0 000-1.812l-2.697-2.607c-1.026-1.026-2.42-1.428-3.935-1.428s-2.909.402-3.935 1.428l-4.319 4.38c-1.026 1.026-1.536 2.404-1.536 3.919 0 1.515.51 2.893 1.536 3.919l4.332 4.363c1.026 1.026 2.42 1.428 3.935 1.428s2.909-.402 3.935-1.428l2.697-2.607c.504-.48.504-1.332 0-1.812-.504-.48-1.308-.48-1.812 0z" />
        <path d="M10.826 13.626h8.835c.704 0 1.275-.57 1.275-1.275s-.571-1.275-1.275-1.275h-8.835c-.704 0-1.275.57-1.275 1.275s.571 1.275 1.275 1.275z" />
      </svg>
    );
  }

  if (cleanName.includes("salesforce")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#00A1E0" style={{ flexShrink: 0 }}>
        <path d="M10.1 6.3a5.5 5.5 0 018.6 3.3 4.2 4.2 0 012.3 7.9H4.8A4.8 4.8 0 013.9 8a5.5 5.5 0 016.2-1.7z" />
      </svg>
    );
  }

  if (cleanName.includes("oracle")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#C74634" style={{ flexShrink: 0 }}>
        <path d="M16.4 5H7.6C3.4 5 0 8.1 0 12s3.4 7 7.6 7h8.8c4.2 0 7.6-3.1 7.6-7s-3.4-7-7.6-7zm-1.1 10.9H8.7c-2.4 0-4.3-1.7-4.3-3.9s1.9-3.9 4.3-3.9h6.6c2.4 0 4.3 1.7 4.3 3.9s-1.9 3.9-4.3 3.9z" />
      </svg>
    );
  }

  if (cleanName.includes("cisco")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#00BCEB" style={{ flexShrink: 0 }}>
        <path d="M3 13v3m3-6v9m3-12v12m3-15v15m3-15v15m3-12v12m3-6v9m3-3v3" stroke="#00BCEB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (cleanName.includes("nvidia")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#76B900" style={{ flexShrink: 0 }}>
        <path d="M8.8 8.1c.3 0 1.2.1 1.9.5 1.5.8 2.2 2.3 2.2 4 0 2.2-1.7 4-4 4H5v-8.5h3.8zm0 6.6c1.2 0 2.2-.9 2.2-2.1 0-1.1-.9-2.1-2.2-2.1H7v4.2h1.8zM14.5 4c-4.4 0-8.8 1.8-11.9 5.1L5 11c2.4-2.5 5.8-3.9 9.5-3.9 6.5 0 11.5 4.5 11.5 10.3h-2.8c0-4.4-3.9-7.8-8.7-7.8-3.1 0-6 1.4-7.8 3.6l-2.2-1.8C6.9 8.8 10.5 7.2 14.5 7.2c7.8 0 14 5.3 14 12.2H24c0-5.4-4.2-9.6-9.5-9.6z" />
      </svg>
    );
  }

  if (cleanName.includes("sap")) {
    return (
      <div style={{ background: "#008FD3", color: "#FFFFFF", fontWeight: "900", fontSize: `${size * 0.55}px`, padding: "2px 5px", borderRadius: "3px", flexShrink: 0 }}>
        SAP
      </div>
    );
  }

  if (cleanName.includes("red hat")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#EE0000" style={{ flexShrink: 0 }}>
        <path d="M19.5 15.6c.8 0 2.2-.2 2.8-.7.4-.3.6-.8.6-1.3 0-1.5-1.9-2.3-4.5-2.8-2.6-.5-5.9-.7-8.2-.7-2.3 0-4.3.4-5.2 1-.7.4-1 1-1 1.7 0 .6.3 1.2 1 1.6 1.2.7 3.3.9 5.4.9.4 0 .9 0 1.3-.1 1.1.9 2.5 1.5 4.3 1.5 2.1 0 3.6-.8 3.6-1.1zm-1.8-.7c-.8.5-2.1.8-3.4.8-1.5 0-2.7-.4-3.5-1.1 1.7 0 3.8.1 5.3.4 1.1.2 1.6.5 1.6.9-.2-.3-.1 0 0 0z" />
      </svg>
    );
  }

  if (cleanName.includes("hackerrank")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#2EC4B6" style={{ flexShrink: 0 }}>
        <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 16.5H8V7.5h2.5v3.8h3V7.5H16v9h-2.5v-3.7h-3v3.7z" />
      </svg>
    );
  }

  if (cleanName.includes("ibm")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#052FAD" style={{ flexShrink: 0 }}>
        <path d="M2 5h4v1.8H2zm0 3.6h4v1.8H2zm0 3.6h4v1.8H2zm0 3.6h4V19H2zm7-10.8h5.5v1.8H9zm0 3.6h5.5v1.8H9zm0 3.6h5.5v1.8H9zm0 3.6h5.5V19H9zm9.5-10.8H22v1.8h-3.5zm0 3.6H22v1.8h-3.5zm0 3.6H22v1.8h-3.5zm0 3.6H22V19h-3.5z" />
      </svg>
    );
  }

  if (cleanName.includes("atlassian")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#0052CC" style={{ flexShrink: 0 }}>
        <path d="M7.7 14.8l4.3-8.6c.3-.6 1.1-.6 1.4 0l4.3 8.6c.5.9-.2 2.2-1.3 2.2H9c-1.1 0-1.8-1.3-1.3-2.2z" />
      </svg>
    );
  }

  // STEP 5 LOGOS
  if (cleanName.includes("smart india") || cleanName.includes("sih")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (cleanName.includes("unstop")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" fill="#1C4ED8" />
        <path d="M8 12l3 3 5-6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (cleanName.includes("devfolio")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#3770FF" style={{ flexShrink: 0 }}>
        <path d="M6 3h6a6 6 0 016 6v6a6 6 0 01-6 6H6V3zm3 4v10h3a3 3 0 003-3V10a3 3 0 00-3-3H9z" />
      </svg>
    );
  }

  if (cleanName.includes("hackerearth")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#3282B8" style={{ flexShrink: 0 }}>
        <path d="M4 4h4v6h8V4h4v16h-4v-6H8v6H4V4z" />
      </svg>
    );
  }

  if (cleanName.includes("kaggle")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#20BEFF" style={{ flexShrink: 0 }}>
        <path d="M18.8 20l-5.6-7.1 5.2-6.9h-3.4l-3.7 5.1V6H8v14h3.3v-4.8l1.4-1.8 3.4 6.6h2.7z" />
      </svg>
    );
  }

  // STEP 6 LOGOS
  if (cleanName.includes("nsdc")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#15803D" />
        <path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (cleanName.includes("skill india")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="9" stroke="#E11D48" strokeWidth="2" />
        <path d="M12 7v10M7 12h10" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (cleanName.includes("futureskills") || cleanName.includes("nasscom")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#0284C7" style={{ flexShrink: 0 }}>
        <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
      </svg>
    );
  }

  // STEP 7 LOGOS
  if (cleanName.includes("startup")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c2.4-2.4 4.5-4.8 6-7.5l-1.5-1.5c-2.7 1.5-5.1 3.6-7.5 6z" fill="#F97316" />
        <path d="M12 15l-3-3m7-7l3 3" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (cleanName.includes("technology") || cleanName.includes("company")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#3B82F6" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (cleanName.includes("gcc")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" stroke="#8B5CF6" strokeWidth="1.8" />
      </svg>
    );
  }

  if (cleanName.includes("msme")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (cleanName.includes("mentor")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#EC4899" strokeWidth="2" />
        <circle cx="9" cy="7" r="4" stroke="#EC4899" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#EC4899" strokeWidth="2" />
      </svg>
    );
  }

  // Fallback badge with clean vector icon & initials
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: `${size * 0.55}px`,
        padding: "2px 6px",
        borderRadius: "4px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }}
    >
      {name.substring(0, 3).toUpperCase()}
    </div>
  );
};

// Ecosystem Categories preserving exact original content, titles, descriptions, and partners
const ecosystemCategories = [
  {
    step: 1,
    tag: "technology & cloud",
    title: "Technology & Cloud Infrastructure",
    description:
      "In today's rapidly evolving digital landscape, organizations must deploy scalable cloud architecture, automated pipelines, and enterprise-grade cloud tools.",
    partners: ["AWS", "Microsoft", "Google Cloud", "Oracle", "IBM", "Cisco", "NVIDIA"],
    topTabs: ["AWS", "Microsoft", "Google Cloud"],
    sideTabs: ["Cloud Native", "DevOps"],
    cardGradient: "linear-gradient(135deg, #0e0720 0%, #1c0a3d 50%, #3a1b68 100%)",
    glowColor: "rgba(91, 46, 145, 0.4)",
    stackedCards: [
      { company: "AWS Cloud", sub: "Cloud Native Architecture", time: "60 mins" },
      { company: "Microsoft Azure", sub: "Enterprise DevOps Pipeline", time: "45 mins" },
      { company: "Google Cloud", role: "Software Developer- 2", time: "30 mins", cta: "Attempt Cloud Mock" }
    ]
  },
  {
    step: 2,
    tag: "developer ecosystem",
    title: "Developer Ecosystem & Engineering Platforms",
    description:
      "Accelerate software development methodologies, modern code repositories, algorithms, and continuous competitive practice for high-impact tech roles.",
    partners: ["GitHub", "LeetCode", "HackerRank", "CodeChef", "Kaggle"],
    topTabs: ["GitHub", "LeetCode", "HackerRank"],
    sideTabs: ["Git Ops", "Algorithms"],
    cardGradient: "linear-gradient(135deg, #07192C 0%, #0F3256 50%, #17548A 100%)",
    glowColor: "rgba(23, 84, 138, 0.4)",
    stackedCards: [
      { company: "GitHub Enterprise", sub: "GitOps & CI/CD Workflows", time: "45 mins" },
      { company: "LeetCode Premium", sub: "Algorithms & DS Practice", time: "30 mins" },
      { company: "HackerRank Lead", role: "Full Stack Engineer- 2", time: "45 mins", cta: "Solve Coding Sprint" }
    ]
  },
  {
    step: 3,
    tag: "enterprise technologies",
    title: "Enterprise Systems & Automation Technologies",
    description:
      "Master enterprise ERPs, CRM platforms, workflow automation, and IT service management tools trusted by Fortune 500 enterprises and GCC hubs.",
    partners: ["SAP", "Salesforce", "ServiceNow", "UiPath", "Atlassian"],
    topTabs: ["SAP", "Salesforce", "ServiceNow"],
    sideTabs: ["ERP Core", "Automation"],
    cardGradient: "linear-gradient(135deg, #1C0924 0%, #3B124B 50%, #631C7D 100%)",
    glowColor: "rgba(99, 28, 125, 0.4)",
    stackedCards: [
      { company: "Salesforce CRM", sub: "Cloud Workflow Automation", time: "50 mins" },
      { company: "ServiceNow ITSM", sub: "Enterprise Service Hub", time: "35 mins" },
      { company: "SAP Labs Core", role: "Enterprise ERP Architect", time: "40 mins", cta: "Explore SAP Systems" }
    ]
  },
  {
    step: 4,
    tag: "certification pathways",
    title: "Global Certification & Skill Pathways",
    description:
      "Validate deep technical expertise through globally recognized certification curricula aligned with industry standards and top hiring requirements.",
    partners: ["AWS", "Microsoft", "Cisco", "Oracle", "Red Hat", "CompTIA"],
    topTabs: ["AWS Cert", "Azure", "CCNA"],
    sideTabs: ["Red Hat", "CompTIA"],
    cardGradient: "linear-gradient(135deg, #240E07 0%, #4D1D0D 50%, #823014 100%)",
    glowColor: "rgba(130, 48, 20, 0.4)",
    stackedCards: [
      { company: "Cisco Networking", sub: "CCNA Enterprise Track", time: "60 mins" },
      { company: "Oracle OCI Cloud", sub: "Certified Cloud Architect", time: "45 mins" },
      { company: "Red Hat Linux", role: "RHCA Systems Architect", time: "40 mins", cta: "Verify Certification" }
    ]
  },
  {
    step: 5,
    tag: "innovation & competitions",
    title: "Innovation, Hackathons & Competitions",
    description:
      "Engage in corporate problem-solving, national hackathons, and real-world sprint competitions to build portfolio-grade engineering solutions.",
    partners: ["Smart India Hackathon", "Unstop", "Devfolio", "HackerEarth", "Kaggle"],
    topTabs: ["SIH 2026", "Devfolio", "Unstop"],
    sideTabs: ["Hackathons", "Sprints"],
    cardGradient: "linear-gradient(135deg, #261005 0%, #522007 50%, #8A360A 100%)",
    glowColor: "rgba(138, 54, 10, 0.4)",
    stackedCards: [
      { company: "Smart India Hackathon", sub: "National Corporate Sprint", time: "Statewide" },
      { company: "Unstop Challenge", sub: "AI & Web3 Hackathon", time: "Live Now" },
      { company: "Devfolio Sprints", role: "Hackathon Champion- 1", time: "30 mins", cta: "Join National Hackathon" }
    ]
  },
  {
    step: 6,
    tag: "national skilling ecosystem",
    title: "National Skilling & Digital Ecosystem",
    description:
      "Driving large-scale career transformation through government-backed national skilling programs, digital frameworks, and IT council standards.",
    partners: ["NSDC", "Skill India", "FutureSkills Prime", "nasscom"],
    topTabs: ["NSDC", "Skill India", "nasscom"],
    sideTabs: ["National Standard", "Accredited"],
    cardGradient: "linear-gradient(135deg, #051A18 0%, #0A3D38 50%, #116B62 100%)",
    glowColor: "rgba(17, 107, 98, 0.4)",
    stackedCards: [
      { company: "NSDC India", sub: "Government Accredited Track", time: "Certified" },
      { company: "Skill India Mission", sub: "National Digital Council", time: "Verified" },
      { company: "nasscom FutureSkills", role: "IT Council Skilled Professional", time: "45 mins", cta: "Explore Skilling Framework" }
    ]
  },
  {
    step: 7,
    tag: "industry experience network",
    title: "Industry Experience & Mentorship Network",
    description:
      "Direct immersion with technology startups, GCC innovation centers, enterprise hiring managers, and 1-on-1 corporate tech leaders.",
    partners: ["Startups", "Technology Companies", "GCCs", "MSMEs", "Corporate Mentors"],
    topTabs: ["Startups", "GCC Hubs", "Mentors"],
    sideTabs: ["1-on-1 Mentors", "GCC Placement"],
    cardGradient: "linear-gradient(135deg, #1F1708 0%, #45320E 50%, #755515 100%)",
    glowColor: "rgba(117, 85, 21, 0.4)",
    stackedCards: [
      { company: "Tech Startups Hub", sub: "Founders & CTO Mentorship", time: "1-on-1" },
      { company: "GCC Innovation Hubs", sub: "Fortune 500 GCC Immersion", time: "Placement" },
      { company: "Corporate Leaders", role: "Senior Engineering Mentor", time: "30 mins", cta: "Book 1-on-1 Mentorship" }
    ]
  }
];

// Infinite loop array padded with 2 clone slides on both sides:
// Index 0: Step 6 clone
// Index 1: Step 7 clone (peeks on the left before Step 1!)
// Index 2..8: Real Step 1 to Step 7
// Index 9: Step 1 clone (peeks on the right after Step 7!)
// Index 10: Step 2 clone
const infiniteSlides = [
  { ...ecosystemCategories[5], cloneKey: "clone-prev-6" },
  { ...ecosystemCategories[6], cloneKey: "clone-prev-7" },
  ...ecosystemCategories.map(c => ({ ...c, cloneKey: `orig-${c.step}` })),
  { ...ecosystemCategories[0], cloneKey: "clone-next-1" },
  { ...ecosystemCategories[1], cloneKey: "clone-next-2" }
];

export default function PartnersSection() {
  // Real active index 2 corresponds to Step 1 (index 2..8 -> Step 1..7)
  const [trackIndex, setTrackIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto transition timer (5 seconds)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [trackIndex, isHovered]);

  // Seamless boundary wrap timer
  useEffect(() => {
    if (trackIndex > 8) {
      // Over Step 7 -> Step 1 clone (index 9)
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setTrackIndex(2);
      }, 550);
      return () => clearTimeout(timeout);
    }
    if (trackIndex < 2) {
      // Before Step 1 -> Step 7 clone (index 1)
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setTrackIndex(8);
      }, 550);
      return () => clearTimeout(timeout);
    }
  }, [trackIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTrackIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTrackIndex(prev => prev - 1);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Active step calculation for pagination dots (1 to 7)
  const getActiveStep = () => {
    if (trackIndex < 2) return 7;
    if (trackIndex > 8) return 1;
    return trackIndex - 1;
  };
  const activeStep = getActiveStep();

  return (
    <section
      id="ecosystem"
      style={{
        padding: "70px 0 80px",
        background: "#FAF9FC",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ width: "100%", margin: "0 auto", position: "relative" }}>

        {/* Top Header Section with container padding */}
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "40px" }}
          >
            {/* Eyebrow Tag */}
            <div
              style={{
                fontSize: "12.5px",
                fontWeight: "700",
                color: "#5B2E91",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Layers size={15} color="#5B2E91" />
              <span>INSIGHTS &amp; INTELLIGENCE • THE TECHLEARNS ECOSYSTEM</span>
            </div>

            {/* Main Title */}
            <h2
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontSize: "48px",
                fontWeight: "800",
                color: "#3A1B68",
                lineHeight: "1.12",
                letterSpacing: "-0.03em",
                marginBottom: "16px"
              }}
            >
              The Techlearns Ecosystem
            </h2>

            {/* Subtitle Paragraph */}
            <p
              style={{
                fontSize: "16px",
                color: "#64748B",
                lineHeight: "1.65",
                maxWidth: "680px",
                marginBottom: "28px",
                fontWeight: "400"
              }}
            >
              A connected ecosystem that empowers learners, developers and professionals to learn, grow and build the future.
            </p>

            {/* Action Buttons Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#3A1B68",
                  color: "#FFFFFF",
                  padding: "13px 32px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: "800",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 8px 24px rgba(58, 27, 104, 0.25)"
                }}
              >
                <span>READ MORE</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </motion.a>

              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  border: "1.5px solid #CBD5E1",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
              >
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3A1B68" }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Bleed Infinite Horizontal Sliding Track Window (ZERO side padding so cards peek edge-to-edge) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            padding: "12px 0 20px"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sliding Track */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{
              x: `calc(50% - (var(--card-width) / 2) - ${trackIndex} * (var(--card-width) + var(--card-gap)))`
            }}
            transition={
              isTransitioning
                ? { duration: 0.55, ease: [0.25, 1, 0.5, 1] }
                : { duration: 0 }
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--card-gap)",
              cursor: "grab",
              willChange: "transform"
            }}
            whileTap={{ cursor: "grabbing" }}
            className="carousel-track"
          >
            {infiniteSlides.map((cat, idx) => {
              const isActive = idx === trackIndex;

              return (
                <div
                  key={`${cat.cloneKey}-${idx}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTrackIndex(idx);
                  }}
                  style={{
                    width: "var(--card-width)",
                    height: "var(--card-height)",
                    flexShrink: 0,
                    borderRadius: "24px",
                    background: cat.cardGradient,
                    boxShadow: isActive
                      ? `0 24px 60px -12px ${cat.glowColor}, 0 6px 24px rgba(0,0,0,0.25)`
                      : "0 10px 30px rgba(0,0,0,0.15)",
                    padding: "44px 48px",
                    position: "relative",
                    overflow: "hidden",
                    border: isActive
                      ? "1px solid rgba(255, 255, 255, 0.16)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    opacity: isActive ? 1 : 0.78,
                    filter: isActive ? "none" : "brightness(0.75)",
                    transition: "opacity 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease",
                    boxSizing: "border-box"
                  }}
                  className="carousel-slide-card"
                >
                  {/* Subtle Ambient Light Glow */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-25%",
                      right: "5%",
                      width: "360px",
                      height: "360px",
                      borderRadius: "50%",
                      background: cat.glowColor,
                      filter: "blur(90px)",
                      pointerEvents: "none"
                    }}
                  />

                  {/* 2-Column Exact Layout Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.15fr 0.85fr",
                      gap: "40px",
                      alignItems: "center",
                      height: "100%",
                      position: "relative",
                      zIndex: 2
                    }}
                    className="card-content-grid"
                  >
                    {/* Left Column: Eyebrow, Title, Description, White Pill CTA & Partner Tags */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      {/* Eyebrow Tag */}
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "800",
                          color: "#EDE9FE",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "10px"
                        }}
                      >
                        Step 0{cat.step} • {cat.tag}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                          fontSize: "34px",
                          fontWeight: "800",
                          color: "#FFFFFF",
                          lineHeight: "1.2",
                          letterSpacing: "-0.02em",
                          marginBottom: "14px"
                        }}
                      >
                        {cat.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "14.5px",
                          color: "rgba(226, 232, 240, 0.85)",
                          lineHeight: "1.6",
                          marginBottom: "24px",
                          maxWidth: "480px",
                          fontWeight: "400"
                        }}
                      >
                        {cat.description}
                      </p>

                      {/* White Pill CTA Button */}
                      <div style={{ marginBottom: "22px" }}>
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          style={{
                            background: "#FFFFFF",
                            color: "#3A1B68",
                            padding: "12px 26px",
                            borderRadius: "9999px",
                            fontSize: "13.5px",
                            fontWeight: "800",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                            transition: "all 0.2s ease"
                          }}
                        >
                          <span>Explore {cat.topTabs[0]} Track</span>
                          <ArrowUpRight size={17} color="#3A1B68" strokeWidth={2.5} />
                        </motion.a>
                      </div>

                      {/* Partner Technology Pills with Original Vector Logos */}
                      <div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 8px" }}>
                          {cat.partners.map((partner) => (
                            <span
                              key={partner}
                              style={{
                                background: "rgba(255, 255, 255, 0.12)",
                                border: "1px solid rgba(255, 255, 255, 0.18)",
                                color: "#FFFFFF",
                                padding: "4px 11px",
                                borderRadius: "8px",
                                fontSize: "11.5px",
                                fontWeight: "700",
                                backdropFilter: "blur(4px)",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px"
                              }}
                            >
                              <PartnerLogo name={partner} size={15} />
                              <span>{partner}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Cascading Layered Glass Cards (Positioned at Extreme Right of Main Div) */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "270px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end"
                      }}
                      className="stacked-cards-container"
                    >
                      {/* Card 1 (Top Back Card: Microsoft - width 300px, extreme right) */}
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "-48px",
                          width: "300px",
                          height: "100px",
                          borderRadius: "16px 0 0 16px",
                          background: "linear-gradient(135deg, rgba(32, 16, 68, 0.95) 0%, rgba(18, 9, 42, 0.98) 100%)",
                          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.2px, transparent 1.2px)",
                          backgroundSize: "10px 10px",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                          borderRight: "none",
                          padding: "12px 22px 12px 18px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                          zIndex: 1
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <PartnerLogo name={cat.partners[0]} size={22} />
                            <span style={{ color: "#FFFFFF", fontWeight: "700", fontSize: "15px" }}>
                              {cat.stackedCards[0].company}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.75)", fontSize: "12px", fontWeight: "600" }}>
                            <Clock size={12} />
                            <span>{cat.stackedCards[0].time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 (Middle Card: Meta - width 335px, extends further left, extreme right) */}
                      <div
                        style={{
                          position: "absolute",
                          top: "36px",
                          right: "-48px",
                          width: "335px",
                          height: "100px",
                          borderRadius: "16px 0 0 16px",
                          background: "linear-gradient(135deg, rgba(36, 18, 76, 0.95) 0%, rgba(20, 10, 48, 0.98) 100%)",
                          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.2px, transparent 1.2px)",
                          backgroundSize: "10px 10px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRight: "none",
                          padding: "12px 22px 12px 18px",
                          boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                          zIndex: 2
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <PartnerLogo name={cat.partners[1] || cat.partners[0]} size={22} />
                            <span style={{ color: "#FFFFFF", fontWeight: "700", fontSize: "15px" }}>
                              {cat.stackedCards[1].company}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.75)", fontSize: "12px", fontWeight: "600" }}>
                            <Clock size={12} />
                            <span>{cat.stackedCards[1].time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 (Front Card: Google - width 370px, extends furthest left, extreme right) */}
                      <div
                        style={{
                          position: "absolute",
                          top: "72px",
                          right: "-48px",
                          width: "370px",
                          borderRadius: "18px 0 0 18px",
                          background: "linear-gradient(135deg, rgba(42, 20, 88, 0.98) 0%, rgba(24, 11, 54, 0.99) 100%)",
                          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.18) 1.2px, transparent 1.2px)",
                          backgroundSize: "10px 10px",
                          border: "1.5px solid rgba(255, 255, 255, 0.24)",
                          borderRight: "none",
                          padding: "16px 24px 16px 20px",
                          boxShadow: "0 20px 45px rgba(0,0,0,0.55)",
                          zIndex: 3
                        }}
                      >
                        {/* Header Row */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px", paddingRight: "16px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <PartnerLogo name={cat.partners[2] || cat.partners[0]} size={28} />
                            <span style={{ color: "#FFFFFF", fontWeight: "800", fontSize: "16px" }}>
                              {cat.stackedCards[2].company}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.85)", fontSize: "12.5px", fontWeight: "600" }}>
                            <Clock size={13} />
                            <span>{cat.stackedCards[2].time}</span>
                          </div>
                        </div>

                        {/* Role Title */}
                        <div style={{ color: "#FFFFFF", fontWeight: "700", fontSize: "15px", marginBottom: "16px", lineHeight: "1.3" }}>
                          {cat.stackedCards[2].role}
                        </div>

                        {/* Solid Black Action Button */}
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "11px",
                            background: "#000000",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            color: "#FFFFFF",
                            fontSize: "13px",
                            fontWeight: "700",
                            textAlign: "center",
                            textDecoration: "none",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.5)"
                          }}
                        >
                          {cat.stackedCards[2].cta}
                        </motion.a>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Newton School Navigation Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "20px"
          }}
        >
          {/* Left Arrow Button */}
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid #CBD5E1",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              color: "#3A1B68"
            }}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Pagination Indicators (7 Dots with Active Pill) */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {ecosystemCategories.map((cat) => {
              const isActive = cat.step === activeStep;
              return (
                <motion.button
                  key={cat.step}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTrackIndex(cat.step + 1);
                  }}
                  animate={{
                    width: isActive ? 28 : 8,
                    backgroundColor: isActive ? "#5B2E91" : "#CBD5E1"
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    height: "8px",
                    borderRadius: "9999px",
                    border: "none",
                    padding: 0,
                    cursor: "pointer"
                  }}
                  aria-label={`Go to step ${cat.step}`}
                />
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1.5px solid #CBD5E1",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              color: "#3A1B68"
            }}
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

      </div>

      <style jsx global>{`
        :root {
          --card-width: 1080px;
          --card-height: 380px;
          --card-gap: 24px;
        }

        @media (max-width: 1200px) {
          :root {
            --card-width: 86vw;
            --card-height: 400px;
            --card-gap: 20px;
          }
        }

        @media (max-width: 1024px) {
          :root {
            --card-width: 90vw;
            --card-height: auto;
            --card-gap: 16px;
          }
          .carousel-slide-card {
            padding: 32px 28px !important;
          }
          .card-content-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .stacked-cards-container {
            align-items: center !important;
          }
          .stacked-cards-container > div {
            margin-right: 0 !important;
            width: 100% !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}

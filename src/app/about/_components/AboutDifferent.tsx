"use client";

import React from "react";
import {
  Layers,
  Award,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Bot,
  BarChart3,
  Network,
  Users
} from "lucide-react";
import Link from "next/link";
import { ScrollStack } from "./ScrollStack";

interface ServiceData {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  benefits: string[];
  ctaText: string;
  ctaHref: string;
  icon: React.ReactNode;
  isHighlight?: boolean;
  bg: string;
  border: string;
  badgeBg: string;
  badgeColor: string;
  titleColor: string;
  descColor: string;
  visualType: "code" | "lab" | "ai" | "passport" | "analytics" | "mentor";
}

export default function AboutDifferent() {
  const services: ServiceData[] = [
    {
      num: "01",
      tag: "CEL METHODOLOGY",
      title: "EXPERIENCE-LED LEARNING",
      subtitle: "Bridging Academic Theory with Real Work Discipline",
      desc: "Learning becomes exponentially more powerful when concepts are directly connected with live projects, corporate challenges, professional team workflows, and production applications.",
      benefits: [
        "Real-world production engineering environments",
        "Rigorous code reviews & industry git workflows",
        "Team-based sprint execution & problem solving"
      ],
      ctaText: "Explore CEL Methodology",
      ctaHref: "/cel",
      icon: <Layers size={22} color="#8B5CF6" />,
      bg: "linear-gradient(135deg, #FFFFFF 0%, #FAF8FE 100%)",
      border: "1.5px solid #EDE9FE",
      badgeBg: "#F5F0FF",
      badgeColor: "#5B2E91",
      titleColor: "#0B1F3A",
      descColor: "#475569",
      visualType: "code"
    },
    {
      num: "02",
      tag: "WORKPLACE STANDARDS",
      title: "INDUSTRY-ALIGNED SKILLS",
      subtitle: "Continuously Evolving with Modern Corporate Expectations",
      desc: "Our learning ecosystem is updated continuously to reflect changing engineering frameworks, corporate tools, technical roles, and high-impact capabilities shaping top digital companies.",
      benefits: [
        "Full-Stack, Cloud & DevOps modern tech stacks",
        "Employer-mapped capability frameworks",
        "Regular curriculum updates with hiring partners"
      ],
      ctaText: "Explore Skills Matrix",
      ctaHref: "/programs",
      icon: <Award size={22} color="#06B6D4" />,
      bg: "linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)",
      border: "1.5px solid #E0F2FE",
      badgeBg: "#ECFEFF",
      badgeColor: "#0891B2",
      titleColor: "#0B1F3A",
      descColor: "#475569",
      visualType: "lab"
    },
    {
      num: "03",
      tag: "EMERGING TECH",
      title: "AI-NATIVE THINKING",
      subtitle: "Integrating Artificial Intelligence Across Every Pathway",
      desc: "AI is not treated merely as an isolated subject. We encourage learners to understand how modern AI models enhance how they learn, architect, build, automate, analyse, and solve complex problems.",
      benefits: [
        "LLM integration & Agentic AI engineering",
        "AI-assisted automated testing & debugging",
        "Productivity augmentation for modern developers"
      ],
      ctaText: "Explore AI Initiatives",
      ctaHref: "/cel",
      icon: <Cpu size={22} color="#A855F7" />,
      bg: "linear-gradient(135deg, #FFFFFF 0%, #F5F3FF 100%)",
      border: "1.5px solid #DDD6FE",
      badgeBg: "#F3E8FF",
      badgeColor: "#7C3AED",
      titleColor: "#0B1F3A",
      descColor: "#475569",
      visualType: "ai"
    },
    {
      num: "04",
      tag: "FLAGSHIP PRINCIPLE",
      title: "ONE SKILL. ONE PROOF.",
      subtitle: "Verifiable Capability Over Certificates",
      desc: "That fundamental philosophy sits at the heart of Techlearns. We believe true professional capability should be visible, measurable, and demonstrably proven before employment.",
      benefits: [
        "Verifiable digital Skill Passport credentials",
        "Public portfolio repositories & live demos",
        "Employer direct verification portal"
      ],
      ctaText: "Explore Proof Philosophy",
      ctaHref: "/passport",
      icon: <Sparkles size={22} color="#FDE68A" />,
      isHighlight: true,
      bg: "linear-gradient(135deg, #0B1F3A 0%, #160B2E 50%, #3A1B68 100%)",
      border: "1.5px solid rgba(139, 92, 246, 0.4)",
      badgeBg: "rgba(255, 255, 255, 0.12)",
      badgeColor: "#FDE68A",
      titleColor: "#FFFFFF",
      descColor: "rgba(255, 255, 255, 0.9)",
      visualType: "passport"
    },
    {
      num: "05",
      tag: "VERIFIED MILESTONES",
      title: "PROOF-DRIVEN GROWTH",
      subtitle: "Measurable Milestones & Portfolio Evidence",
      desc: "Real-world projects, live repositories, hackathons, peer code reviews, and corporate assessments create vastly stronger proof of capability than traditional course certificates alone.",
      benefits: [
        "Multi-milestone project evaluation framework",
        "Live corporate hackathons & innovation sprints",
        "Comprehensive capability scorecard"
      ],
      ctaText: "View Assessment Model",
      ctaHref: "/cel",
      icon: <ShieldCheck size={22} color="#10B981" />,
      bg: "linear-gradient(135deg, #FFFFFF 0%, #ECFDF5 100%)",
      border: "1.5px solid #D1FAE5",
      badgeBg: "#D1FAE5",
      badgeColor: "#059669",
      titleColor: "#0B1F3A",
      descColor: "#475569",
      visualType: "analytics"
    },
    {
      num: "06",
      tag: "CAREER ECOSYSTEM",
      title: "VERIFIED SKILL PASSPORT",
      subtitle: "Lifetime Support & Corporate Placement Network",
      desc: "Verifiable digital skill credentials combined with 1-on-1 industry mentorship and corporate hiring network support create clear, direct pathways from learning to high-impact technology careers.",
      benefits: [
        "1-on-1 mentorship with senior industry leaders",
        "Direct hiring referrals across 50+ partners",
        "Lifetime placement assistance & career support"
      ],
      ctaText: "Explore Skill Passport",
      ctaHref: "/passport",
      icon: <GraduationCap size={22} color="#3B82F6" />,
      bg: "linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 100%)",
      border: "1.5px solid #DBEAFE",
      badgeBg: "#DBEAFE",
      badgeColor: "#2563EB",
      titleColor: "#0B1F3A",
      descColor: "#475569",
      visualType: "mentor"
    }
  ];

  return (
    <section
      id="services"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #FAF8FE 0%, #F5F0FF 50%, #FAF8FE 100%)",
        padding: "90px 0 120px",
        overflow: "visible"
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ marginBottom: "14px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(91, 46, 145, 0.1)",
                border: "1px solid rgba(91, 46, 145, 0.2)",
                padding: "6px 20px",
                borderRadius: "9999px",
                color: "#5B2E91",
                fontSize: "12px",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#5B2E91", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>
                ⚙️
              </span>
              <span>02. WHAT MAKES TECHLEARNS DIFFERENT</span>
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-headings), sans-serif",
              fontSize: "clamp(34px, 4.2vw, 50px)",
              fontWeight: "900",
              color: "#0B1F3A",
              lineHeight: "1.15",
              letterSpacing: "-0.025em",
              marginBottom: "18px"
            }}
          >
            Designed Around Capability.<br />
            <span style={{ color: "#8B5CF6" }}>Not Course Completion.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "600px", margin: "0 auto", fontWeight: "400", lineHeight: "1.65" }}>
            Scroll down to explore our 6 core services built for verifiable capability, corporate exposure, and career readiness.
          </p>
        </div>

        {/* React Bits ScrollStack Interaction */}
        <ScrollStack itemScale={0.035} itemStackDistance={28} stackPosition={100}>
          {services.map((item) => (
            <ServiceStackCard key={item.num} card={item} />
          ))}
        </ScrollStack>

      </div>
    </section>
  );
}

// Sub-component: Individual Service Stack Card
function ServiceStackCard({ card }: { card: ServiceData }) {
  return (
    <div
      style={{
        background: card.bg,
        border: card.border,
        borderRadius: "36px",
        padding: "44px 48px",
        boxShadow: card.isHighlight
          ? "0 30px 70px rgba(11, 31, 58, 0.35)"
          : "0 25px 60px rgba(91, 46, 145, 0.08)",
        minHeight: "440px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "48px",
          alignItems: "center",
          width: "100%"
        }}
        className="grid-2col"
      >
        
        {/* Left Side: Number, Category, Title, Description, Benefits, CTA */}
        <div>
          
          {/* Number & Category Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "14px",
                fontWeight: "900",
                color: card.isHighlight ? "#D8B4FE" : "#8B5CF6",
                background: card.badgeBg,
                padding: "4px 12px",
                borderRadius: "8px"
              }}
            >
              {card.num}
            </span>
            <span
              style={{
                fontSize: "11.5px",
                fontWeight: "900",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: card.badgeColor,
                background: card.badgeBg,
                padding: "4px 14px",
                borderRadius: "9999px"
              }}
            >
              {card.tag}
            </span>
          </div>

          {/* Service Title */}
          <h3
            style={{
              fontFamily: "var(--font-headings), sans-serif",
              fontSize: "clamp(24px, 2.5vw, 32px)",
              fontWeight: "900",
              color: card.titleColor,
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              marginBottom: "8px"
            }}
          >
            {card.title}
          </h3>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: card.isHighlight ? "#D8B4FE" : "#5B2E91",
              marginBottom: "16px"
            }}
          >
            {card.subtitle}
          </div>

          {/* Short Description */}
          <p
            style={{
              fontSize: "14px",
              color: card.descColor,
              lineHeight: "1.65",
              marginBottom: "24px",
              fontWeight: "400"
            }}
          >
            {card.desc}
          </p>

          {/* 3 Key Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
            {card.benefits.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2
                  size={16}
                  color={card.isHighlight ? "#D8B4FE" : "#8B5CF6"}
                  style={{ flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: card.isHighlight ? "#E2E8F0" : "#334155"
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <Link
            href={card.ctaHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: card.isHighlight ? "#FFFFFF" : "#5B2E91",
              color: card.isHighlight ? "#5B2E91" : "#FFFFFF",
              padding: "12px 30px",
              borderRadius: "9999px",
              fontSize: "13.5px",
              fontWeight: "800",
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              transition: "all 0.2s ease"
            }}
          >
            <span>{card.ctaText}</span>
            <ArrowRight size={15} color={card.isHighlight ? "#5B2E91" : "#FFFFFF"} />
          </Link>

        </div>

        {/* Right Side: Visually Rich Interactive Stage (ServiceVisual) */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ServiceVisual visualType={card.visualType} isHighlight={card.isHighlight} />
        </div>

      </div>
    </div>
  );
}

// Sub-component: Visually Rich Stage for each card
function ServiceVisual({
  visualType,
  isHighlight
}: {
  visualType: string;
  isHighlight?: boolean;
}) {
  switch (visualType) {
    case "code":
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "280px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #0B1F3A 0%, #160B2E 100%)",
            padding: "20px",
            boxShadow: "0 20px 45px rgba(11, 31, 58, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            overflow: "hidden"
          }}
        >
          {/* Mock Code Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "10px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981" }} />
            </div>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#8B5CF6" }}>cel_production.ts</span>
          </div>

          {/* Code Snippet */}
          <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "12px", color: "#E2E8F0", lineHeight: "1.7" }}>
            <code>
              <span style={{ color: "#F472B6" }}>export async function</span> <span style={{ color: "#38BDF8" }}>executeProject</span>() &#123;<br />
              &nbsp;&nbsp;<span style={{ color: "#F472B6" }}>const</span> repo = <span style={{ color: "#FDE68A" }}>&quot;techlearns/cel-app&quot;</span>;<br />
              &nbsp;&nbsp;<span style={{ color: "#F472B6" }}>const</span> status = <span style={{ color: "#34D399" }}>&quot;VERIFIED_PRODUCTION&quot;</span>;<br />
              &nbsp;&nbsp;<span style={{ color: "#A78BFA" }}>return</span> &#123; proofScore: <span style={{ color: "#F472B6" }}>98.4</span> &#125;;<br />
              &#125;
            </code>
          </pre>

          {/* Floating UI Glass Badge */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              background: "rgba(139, 92, 246, 0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "10px 16px",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
            }}
          >
            <Code2 size={16} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", color: "#F3E8FF" }}>PROJECT STATUS</div>
              <div style={{ fontSize: "12px", fontWeight: "900" }}>Live Sprint Active</div>
            </div>
          </div>
        </div>
      );

    case "lab":
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "280px",
            borderRadius: "24px",
            background: "#0B1F3A",
            boxShadow: "0 20px 45px rgba(11, 31, 58, 0.22)",
            border: "4px solid #FFFFFF",
            overflow: "hidden"
          }}
        >
          <img
            src="/crops/lab_modern.png"
            alt="Corporate Tech Lab"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              background: "rgba(11, 31, 58, 0.85)",
              backdropFilter: "blur(10px)",
              borderRadius: "14px",
              padding: "10px 14px",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            <div style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", color: "#06B6D4" }}>TECHLEARNS LABS</div>
            <div style={{ fontSize: "12px", fontWeight: "800" }}>Corporate Practice Stage</div>
          </div>
        </div>
      );

    case "ai":
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "280px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #1E1035 0%, #0B1F3A 100%)",
            padding: "24px",
            boxShadow: "0 20px 45px rgba(124, 58, 237, 0.25)",
            border: "1.5px solid rgba(168, 85, 247, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "12px", background: "rgba(168, 85, 247, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bot size={20} color="#C084FC" />
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "#FFFFFF" }}>AI Agentic Pipeline</div>
              <div style={{ fontSize: "10px", color: "#C084FC" }}>Automated Code &amp; System Optimization</div>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "16px", padding: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#34D399", marginBottom: "4px" }}>✓ LLM Test Suite Passed</div>
            <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#38BDF8" }}>✓ Multi-Agent Refactoring Active</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#E2E8F0" }}>AI Efficiency Boost</span>
            <span style={{ fontSize: "14px", fontWeight: "900", color: "#C084FC" }}>3.4x Faster</span>
          </div>
        </div>
      );

    case "passport":
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "280px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #160B2E 0%, #0B1F3A 100%)",
            padding: "24px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
            border: "1.5px solid rgba(253, 230, 138, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.1em", color: "#FDE68A", textTransform: "uppercase" }}>TECHLEARNS PASSPORT</span>
            <Sparkles size={18} color="#FDE68A" />
          </div>

          <div>
            <div style={{ fontSize: "20px", fontWeight: "900", color: "#FFFFFF", marginBottom: "4px" }}>✓ VERIFIED SKILL PASSPORT</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>Official Corporate Capability Credential</div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "14px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "9px", color: "#D8B4FE", fontWeight: "800", textTransform: "uppercase" }}>HOLDER ID</div>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "#FFFFFF" }}>TL-2026-FELLOW</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "9px", color: "#D8B4FE", fontWeight: "800", textTransform: "uppercase" }}>STATUS</div>
              <div style={{ fontSize: "12px", fontWeight: "800", color: "#34D399" }}>ACTIVE VERIFIED</div>
            </div>
          </div>
        </div>
      );

    case "analytics":
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "280px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #0B1F3A 0%, #064E3B 100%)",
            padding: "24px",
            boxShadow: "0 20px 45px rgba(16, 185, 129, 0.2)",
            border: "1.5px solid rgba(16, 185, 129, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BarChart3 size={20} color="#34D399" />
              <span style={{ fontSize: "12px", fontWeight: "900", color: "#FFFFFF" }}>Growth Analytics</span>
            </div>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#34D399", background: "rgba(52, 211, 153, 0.15)", padding: "2px 8px", borderRadius: "6px" }}>98.4% Score</span>
          </div>

          {/* Metric Bar Chart Visual */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "110px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
            <div style={{ width: "20%", height: "40%", background: "rgba(52, 211, 153, 0.3)", borderRadius: "6px 6px 0 0" }} />
            <div style={{ width: "20%", height: "60%", background: "rgba(52, 211, 153, 0.5)", borderRadius: "6px 6px 0 0" }} />
            <div style={{ width: "20%", height: "80%", background: "rgba(52, 211, 153, 0.75)", borderRadius: "6px 6px 0 0" }} />
            <div style={{ width: "20%", height: "100%", background: "#34D399", borderRadius: "6px 6px 0 0" }} />
            <div style={{ width: "20%", height: "90%", background: "#10B981", borderRadius: "6px 6px 0 0" }} />
          </div>

          <div style={{ fontSize: "12px", fontWeight: "700", color: "#E2E8F0" }}>
            ✓ Multi-Milestone Capability Progression
          </div>
        </div>
      );

    case "mentor":
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "280px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #0B1F3A 0%, #1E3A8A 100%)",
            padding: "24px",
            boxShadow: "0 20px 45px rgba(59, 130, 246, 0.22)",
            border: "1.5px solid rgba(59, 130, 246, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Network size={20} color="#60A5FA" />
            <span style={{ fontSize: "12px", fontWeight: "900", color: "#FFFFFF" }}>Corporate Placement Network</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(255,255,255,0.08)", padding: "12px", borderRadius: "16px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Users size={20} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "900", color: "#FFFFFF" }}>50+ Industry Mentors</div>
              <div style={{ fontSize: "11px", color: "#93C5FD" }}>1-on-1 Guidance &amp; Referrals</div>
            </div>
          </div>

          <div style={{ fontSize: "12px", fontWeight: "800", color: "#60A5FA" }}>
            ⚡ Direct Placement Pathways to Partner Corporations
          </div>
        </div>
      );

    default:
      return null;
  }
}

"use client";

import React from "react";
import { Cpu, Building2, GraduationCap, Lightbulb, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutAdvisoryBoard() {
  const domains = [
    {
      title: "TECHNOLOGY & AI",
      desc: "Technology leaders helping us stay aligned with emerging technologies, modern engineering practices and AI-driven transformation.",
      icon: <Cpu className="h-6 w-6 text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "INDUSTRY & CORPORATE LEADERSHIP",
      desc: "Professionals providing insights into changing workplace expectations, talent requirements and organisational practices.",
      icon: <Building2 className="h-6 w-6 text-sky-600" />,
      bg: "bg-sky-50"
    },
    {
      title: "ACADEMIA & EDUCATION",
      desc: "Academic leaders contributing perspectives on learner development, curriculum innovation and industry-academia integration.",
      icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
      bg: "bg-emerald-50"
    },
    {
      title: "ENTREPRENEURSHIP & INNOVATION",
      desc: "Founders and ecosystem leaders encouraging product thinking, innovation and entrepreneurial capability.",
      icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
      bg: "bg-amber-50"
    },
    {
      title: "TALENT & EMPLOYABILITY",
      desc: "HR, talent acquisition and workforce leaders helping align learner development with evolving hiring expectations.",
      icon: <Users className="h-6 w-6 text-pink-600" />,
      bg: "bg-pink-50"
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-2.5 font-mono text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
            ADVISORY BOARD
          </div>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl md:text-5xl">
            Guided by Experience.<br />
            <span className="text-[#5B2E91]">Shaped by Industry.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Building future-ready talent requires perspectives beyond the classroom. The <strong className="font-bold text-[#0B1F3A]">Techlearns Advisory Board</strong> brings together experienced professionals and leaders from complementary domains to provide strategic direction as the ecosystem evolves.
          </p>
        </div>

        {/* 5 Domains Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div
              key={d.title}
              className="flex flex-col justify-between rounded-2xl border border-purple-100 bg-[#FAF9FE] p-7 shadow-xs transition-all duration-200 hover:shadow-md"
            >
              <div>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${d.bg}`}>
                  {d.icon}
                </div>
                <h3 className="mb-2.5 text-xs font-black uppercase tracking-wider text-[#0B1F3A]">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#1E0A3C] p-8 md:p-10 text-white shadow-xl shadow-[#0B1F3A]/10">
          <div className="max-w-2xl">
            <div className="mb-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-300">
              COMPLEMENTARY PERSPECTIVES
            </div>
            <div className="text-lg font-extrabold leading-snug text-white sm:text-xl md:text-2xl">
              “Techlearns remains connected to where the world of work is going—not where it has been.”
            </div>
          </div>

          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 rounded-xl bg-[#5B2E91] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#5B2E91]/30 transition-all duration-200 hover:bg-purple-800"
          >
            <span>Meet Our Advisory Board</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Eye, Rocket, Network } from "lucide-react";

export default function AboutVisionMission() {
  const graduateOutcomes = [
    "Skills",
    "Experience",
    "Portfolio",
    "Professional Confidence",
    "Industry Exposure",
    "Continuous Adaptability"
  ];

  const ecosystemNodes = [
    "Learners",
    "Mentors",
    "Universities",
    "Technology Platforms",
    "Industry Experts",
    "Companies",
    "Innovation Communities",
    "Recruiters"
  ];

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-2.5 font-mono text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
            OUR VISION &amp; MISSION
          </div>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl md:text-5xl">
            Creating a New Standard<br />
            <span className="text-[#5B2E91]">for Technology Learning</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Our vision is to build <strong className="font-bold text-[#0B1F3A]">Techlearns into a globally recognised Corporate Experience Learning ecosystem</strong> connecting education, emerging technologies and industry.
          </p>
        </div>

        {/* 2-Column Split: Vision & Mission */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Vision Box */}
          <div className="flex flex-col justify-between rounded-3xl border border-purple-100 border-t-4 border-t-[#5B2E91] bg-[#FAFAFE] p-8 md:p-10 shadow-sm">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                  <Eye className="h-4.5 w-4.5 text-[#5B2E91]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#5B2E91]">
                  OUR VISION
                </span>
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-[#0B1F3A] md:text-2xl">
                Graduating with Real Capability
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
                We envision a future where learners graduate not only with theoretical knowledge, but with a complete evidence stack built for professional impact.
              </p>

              <div className="mb-3 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                LEARNERS GRADUATE WITH:
              </div>

              <div className="flex flex-wrap gap-2">
                {graduateOutcomes.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-purple-200 bg-white px-3 py-1.5 text-xs font-bold text-[#5B2E91]"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Box */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#1E0A3C] p-8 md:p-10 text-white shadow-xl shadow-[#0B1F3A]/10">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />

            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <Rocket className="h-4.5 w-4.5 text-purple-300" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-purple-300">
                  OUR MISSION
                </span>
              </div>

              <h3 className="mb-4 text-xl font-extrabold text-white md:text-2xl">
                Empowering Digital Economy Leaders
              </h3>

              <p className="text-base font-medium leading-relaxed text-slate-200 md:text-lg">
                “To empower learners with technology capabilities, professional experiences and career confidence required to thrive in a continuously evolving digital economy.”
              </p>
            </div>

            <div className="mt-7 border-t border-white/10 pt-5 text-xs text-slate-300">
              ⚡ Building real career confidence from Day 1.
            </div>
          </div>

        </div>

        {/* Connected Ecosystem Matrix Box */}
        <div className="rounded-3xl border-2 border-dashed border-purple-200 bg-[#F8F5FD] p-8 text-center md:p-10">
          <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
            <Network className="h-4 w-4 text-[#5B2E91]" />
            <span>INTERCONNECTED ECOSYSTEM MATRIX</span>
          </div>
          <h4 className="mb-4 text-base font-extrabold text-[#0B1F3A] sm:text-lg">
            Our ambition is to create an interconnected ecosystem bringing together:
          </h4>

          <div className="mx-auto mb-4 flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {ecosystemNodes.map((node, i) => (
              <React.Fragment key={node}>
                <span className="rounded-xl border border-purple-100 bg-white px-3.5 py-1.5 text-sm font-bold text-[#0B1F3A] shadow-xs">
                  {node}
                </span>
                {i < ecosystemNodes.length - 1 && (
                  <span className="font-black text-purple-600">×</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-sm font-bold text-[#5B2E91]">
            Together, creating stronger pathways from learning to professional impact.
          </div>
        </div>

      </div>
    </section>
  );
}

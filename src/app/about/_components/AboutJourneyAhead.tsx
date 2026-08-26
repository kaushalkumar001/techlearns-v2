"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutJourneyAhead() {
  const journeyNodes = [
    "Technology Programs",
    "Corporate Experience Learning",
    "AI-Enabled Learning",
    "Industry Mentorship",
    "Innovation Challenges",
    "Professional Communities",
    "Techlearns for Campus",
    "Centres of Excellence",
    "Corporate Partnerships",
    "Talent & Career Opportunities"
  ];

  return (
    <section className="relative bg-[#FAF9FC] py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-2.5 font-mono text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
            06. THE JOURNEY AHEAD
          </div>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl md:text-5xl">
            Building More Than<br />
            <span className="text-[#5B2E91]">a Learning Platform</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Techlearns is being built as an evolving ecosystem. Our journey will progressively connect:
          </p>
        </div>

        {/* 10 Journey Nodes Grid */}
        <div className="mb-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {journeyNodes.map((node, idx) => (
            <div
              key={node}
              className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-4.5 shadow-xs transition-all duration-200 hover:shadow-sm"
            >
              <div className="rounded-md bg-purple-100 px-2 py-0.5 font-mono text-xs font-black text-[#5B2E91]">
                0{idx + 1}
              </div>
              <span className="text-sm font-bold text-[#0B1F3A]">
                {node}
              </span>
            </div>
          ))}
        </div>

        {/* Evolving Statement Box */}
        <div className="mb-12 rounded-3xl border border-purple-100 bg-white p-8 text-center md:p-10 shadow-sm">
          <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-purple-100/80 bg-[#FAFAFE] p-4">
              <div className="text-sm font-bold text-[#0B1F3A]">
                As technologies change,
              </div>
              <div className="mt-1 text-xs font-semibold text-[#5B2E91]">
                our programs will evolve.
              </div>
            </div>

            <div className="rounded-xl border border-purple-100/80 bg-[#FAFAFE] p-4">
              <div className="text-sm font-bold text-[#0B1F3A]">
                As industry expectations change,
              </div>
              <div className="mt-1 text-xs font-semibold text-[#5B2E91]">
                our experiences will evolve.
              </div>
            </div>

            <div className="rounded-xl border border-purple-100/80 bg-[#FAFAFE] p-4">
              <div className="text-sm font-bold text-[#0B1F3A]">
                As our learners grow,
              </div>
              <div className="mt-1 text-xs font-semibold text-[#5B2E91]">
                Techlearns will grow with them.
              </div>
            </div>
          </div>

          <p className="text-sm font-normal italic text-slate-500">
            Because preparing people for the future cannot be achieved with a static learning model.
          </p>
        </div>

        {/* Grand CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#160B2E] to-[#3A1B68] p-10 text-center text-white shadow-2xl shadow-[#0B1F3A]/20 md:p-14">
          {/* Light Glow */}
          <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-purple-500/30 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-widest text-purple-300">
              THE FUTURE OF TECHNOLOGY LEARNING
            </div>

            <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              We Are Building for<br />
              <span className="bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent">
                What Comes Next.
              </span>
            </h3>

            <div className="mb-8 text-sm font-bold text-slate-200">
              TECHLEARNS • Corporate Experience Learning Ecosystem<br />
              <span className="mt-1.5 inline-block text-xs tracking-wider text-amber-200">
                Learn. Experience. Build. Compete. Prove. Lead.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/cel"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-600/40 transition-all duration-200 hover:shadow-xl"
              >
                <span>Explore CEL</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-[#0B1F3A] shadow-md transition-all duration-200 hover:bg-slate-100"
              >
                <span>Explore Programs</span>
              </Link>

              <Link
                href="/partners"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20"
              >
                <span>Techlearns for Campus</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

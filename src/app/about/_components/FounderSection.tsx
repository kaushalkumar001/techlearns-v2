"use client";

import React from "react";
import { ArrowUpRight, Quote } from "lucide-react";

export default function FounderSection() {
  const founderPillars = [
    { icon: "🎓", title: "Educator" },
    { icon: "💼", title: "Industry Professional" },
    { icon: "👤", title: "Mentor" },
    { icon: "📚", title: "Author" },
    { icon: "🏛️", title: "Institution Builder" },
  ];

  return (
    <section id="founder" className="relative bg-[#FAF9FC] py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section Tag */}
        <div className="mb-10 text-center">
          <div className="mb-2 font-mono text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
            04. MEET THE FOUNDER
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#0B1F3A] sm:text-4xl md:text-5xl">
            Guided by Vision &amp; Experience
          </h2>
        </div>

        {/* Main Hero Card matching uploaded reference & TechLearns color theme */}
        <div className="relative min-h-[540px] overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-[#F8F5FD] via-[#F1ECFA] to-[#E9E1F7] shadow-xl shadow-purple-950/5 grid grid-cols-1 md:grid-cols-12 items-stretch">

          {/* Left Column: Typography, Bio, Quotes, Belief */}
          <div className="z-10 flex flex-col justify-center p-8 md:p-12 md:col-span-7">

            {/* Founder Title & Name */}
            <div className="mb-4">
              <div className="mb-1 text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
                FOUNDER, TECHLEARNS
              </div>
              <h3 className="text-3xl font-black leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl">
                Prof. Ankur Gill
              </h3>
            </div>

            {/* Sub-Pills */}
            <div className="mb-5 flex flex-wrap gap-2">
              {["Educator", "Industry Professional", "Mentor", "Author", "Institution Builder"].map((item) => (
                <span key={item} className="rounded-md bg-purple-100 px-2.5 py-1 text-xs font-extrabold text-[#5B2E91]">
                  {item}
                </span>
              ))}
            </div>

            {/* Main Bio Paragraph */}
            <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base font-normal">
              Techlearns is founded by <strong className="font-bold text-[#0B1F3A]">Prof. Ankur Gill</strong>, an education and industry professional with more than a decade of experience spanning academic operations, student development, employability, corporate relations, admissions, technology initiatives and industry-academia engagement.
            </p>

            {/* Observation Quote Box */}
            <div className="relative mb-5 rounded-xl border-l-4 border-[#5B2E91] bg-[#5B2E91]/10 p-4">
              <Quote className="absolute right-3 top-3 h-5 w-5 text-[#5B2E91]/30" />
              <p className="text-sm font-bold italic leading-snug text-[#0B1F3A]">
                “Students do not need only more courses. They need environments that allow them to experience how professionals learn, think, build and perform.”
              </p>
            </div>

            {/* Founder's Belief Callout */}
            <div className="mb-6 rounded-2xl bg-[#0B1F3A] p-5 text-white shadow-md">
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-300">
                THE FOUNDER&apos;S BELIEF
              </div>
              <div className="text-sm font-bold leading-normal text-white">
                “The real outcome of education is not what a learner knows—it is what the learner becomes capable of doing with that knowledge.”
              </div>
            </div>

            {/* Action Link Button */}
            <div>
              <a
                href="#founder"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7A42BE] to-[#5B2E91] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#5B2E91]/30 transition-all duration-200 hover:shadow-xl"
              >
                <span>Know More About Our Founder</span>
                <ArrowUpRight className="h-4 w-4 text-white" />
              </a>
            </div>

          </div>

          {/* Right Column: Founder Photo */}
          <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden md:col-span-5 md:min-h-[500px]">
            <img
              src="/crops/founder_ankur.png"
              alt="Prof. Ankur Gill - Founder, Techlearns"
              className="z-0 h-full w-full object-cover object-top"
            />

            {/* Glass Badge */}
            <div className="absolute bottom-6 right-5 z-20 max-w-[320px] rounded-2xl border border-purple-200/25 bg-[#0B1F3A]/90 p-4.5 text-white backdrop-blur-md shadow-2xl shadow-[#0B1F3A]/30">
              <div className="mb-0.5 text-xs font-extrabold uppercase tracking-wider text-purple-300">
                Founder &amp; CEO
              </div>
              <div className="mb-1 text-base font-extrabold text-white">
                Prof. Ankur Gill
              </div>
              <div className="text-xs leading-normal text-slate-200">
                10+ Years Experience in Academic Operations, Employability &amp; Corporate Relations.
              </div>
            </div>

          </div>

        </div>

        {/* 5 Founder Pillars Strip */}
        <div className="mt-9 flex flex-wrap items-center justify-between gap-5 px-3">
          {founderPillars.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-base font-extrabold text-[#0B1F3A]"
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

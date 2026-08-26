"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPositioning() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">

        <div className="mb-16 grid grid-cols-1 gap-10 items-center md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
              OUR POSITIONING
            </div>
            <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl">
              Designed for learners who don&apos;t want to stop at knowing technology
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Through Corporate Experience Learning, every learner experiences how technology is planned, built, reviewed, applied and delivered. The journey integrates skills, practice, projects, teamwork, industry exposure, competitions, credential pathways and career evidence. The result is demonstrated capability — not just a course-completion certificate.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#5B2E91] p-8 md:p-10 text-white shadow-xl shadow-[#5B2E91]/20 md:col-span-5">
            <p className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
              Where learning technology becomes corporate experience —{" "}
              <span className="text-purple-200">and experience becomes capability.</span>
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl border border-purple-100 bg-[#FAF8FF] p-8 text-center md:p-12">
          <h3 className="mb-2.5 text-2xl font-extrabold text-[#0B1F3A] sm:text-3xl">
            Ready to experience how it works?
          </h3>
          <p className="mx-auto mb-7 max-w-lg text-base text-slate-600">
            Take a free diagnostic or explore our flagship programs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#courses"
              className="inline-flex items-center gap-2 rounded-xl bg-[#5B2E91] px-7 py-3.5 text-sm font-extrabold text-white shadow-md shadow-[#5B2E91]/30 transition-all duration-200 hover:bg-purple-800"
            >
              <span>Explore Programs</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </Link>
            <Link
              href="/cel"
              className="inline-flex items-center gap-2 rounded-xl border border-[#5B2E91] bg-white px-7 py-3.5 text-sm font-extrabold text-[#5B2E91] transition-all duration-200 hover:bg-purple-50"
            >
              <span>See How CEL Works</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

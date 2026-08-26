"use client";

import React from "react";
import { Scroll } from "lucide-react";

export default function AboutManifesto() {
  return (
    <section className="relative border-y border-purple-100 bg-[#FAF8FF] py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6 text-center">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#5B2E91]">
          <Scroll className="h-3.5 w-3.5 text-[#5B2E91]" />
          <span>OUR MANIFESTO</span>
        </div>

        <div className="rounded-3xl border-2 border-dashed border-purple-200 bg-white p-8 md:p-12 shadow-sm shadow-purple-950/5">
          <p className="text-base font-medium italic leading-relaxed text-slate-800 sm:text-lg md:text-xl">
            &ldquo;We believe talent is everywhere, but meaningful exposure is not. We believe a learner should experience the discipline of real work before the first job. We believe skills become valuable when they are practised, challenged, reviewed and proven. We believe technology should make learning measurable without making it impersonal. And we believe India can build a generation that does not merely hold certificates — it can build, solve, communicate, compete, and lead.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  const checklist = [
    "Experience-Led Learning",
    "Industry-Aligned Skills",
    "AI-Native Thinking",
    "Proof-Driven Growth",
    "Verified Skill Passport",
    "1-on-1 Corporate Mentorship",
  ];

  return (
    <section className="relative bg-[#FAF8FE] py-8 sm:py-10 lg:py-12 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      
      {/* Right Side Solid Purple Background Block (1/3 of width for 2:1 white to purple ratio on desktop) */}
      <div className="absolute top-0 right-0 w-[33.33%] h-[650px] bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] z-[1] hidden lg:block">
        {/* Geometric Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(#FFFFFF 1.2px, transparent 1.2px)",
            backgroundSize: "20px 20px"
          }}
        />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Hero Split Grid (67% Left Column / 33% Right Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-11 items-center min-h-[360px]">

          {/* Left Column: Eyebrow, Title, Paragraph, Buttons */}
          <div>

            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-3"
            >
              <span className="inline-flex items-center gap-2 bg-[#F5F0FF] border border-[#E4D7FF] px-4 py-1.5 rounded-full text-[#5B2E91] text-[12px] font-extrabold tracking-wider uppercase">
                <span className="w-3.5 h-3.5 rounded-full bg-[#5B2E91] text-white inline-flex items-center justify-center text-[8px]">
                  ⦿
                </span>
                <span>ABOUT TECHLEARNS</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-headings text-[32px] sm:text-[42px] lg:text-[56px] font-black text-[#180C2E] leading-[1.12] tracking-[-0.025em] mb-3.5"
            >
              Building Talent for<br />
              <span className="text-[#8B5CF6]">the Way the World Works</span>
            </motion.h1>

            {/* Paragraph Subtitle 1 (Italic emphasis) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[14.5px] sm:text-[15.5px] text-[#0B1F3A] leading-relaxed max-w-[580px] mb-3 font-semibold italic"
            >
              Techlearns is a next-generation Corporate Experience Learning company built to transform how technology talent learns, experiences and prepares for the professional world.
            </motion.p>

            {/* Paragraph Subtitle 2 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[13px] sm:text-[14px] text-slate-500 leading-relaxed max-w-[580px] mb-5 font-normal"
            >
              We believe the future of learning is not about consuming more content—it is about developing the ability to <strong className="text-[#0B1F3A] font-bold">apply knowledge, solve problems, work professionally and demonstrate capability.</strong> Through our <strong className="text-[#5B2E91] font-bold">Corporate Experience Learning (CEL)</strong> philosophy, Techlearns brings together technology learning, AI, practical exposure, industry engagement and career readiness within one connected ecosystem.
            </motion.p>

            {/* 2 Capsule Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href="/cel"
                className="inline-flex items-center justify-center bg-[#8B5CF6] text-white px-8 py-3 rounded-full text-[13.5px] font-extrabold no-underline shadow-[0_10px_24px_rgba(139,92,246,0.35)] hover:bg-[#7C3AED] transition-all"
              >
                Explore CEL
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-white text-[#7C3AED] border border-[#7C3AED]/15 px-8 py-3 rounded-full text-[13.5px] font-extrabold no-underline shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:bg-purple-50 transition-all"
              >
                Explore Programs
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Clean Cutout Student Image with Thinking Speech Box */}
          <div className="flex justify-center items-end relative h-full mt-6 lg:mt-0">
            
            {/* Thinking / Speech Box Above Girl */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute -top-4 sm:-top-6 lg:-top-4 left-1/2 lg:left-[22%] -translate-x-1/2 lg:-translate-x-[45%] w-[190px] sm:w-[210px] h-[105px] sm:h-[115px] z-25 flex items-center justify-center text-center"
            >
              {/* Solid White Speech Bubble Graphic Background */}
              <img
                src="/crops/speech_bubble_white_fill.png"
                alt="Thinking Box"
                className="absolute inset-0 w-full h-full object-fill drop-shadow-[0_12px_25px_rgba(0,0,0,0.16)]"
              />

              {/* Speech Bubble Bold Text Overlay */}
              <div className="relative z-10 px-4 pt-2 pb-5 sm:pb-6 text-[11px] sm:text-[12px] font-black text-[#0B1F3A] leading-[1.35] italic tracking-tight">
                “I can build it.<br />
                I can solve it.<br />
                I can prove it.”
              </div>
            </motion.div>

            <img
              src="/crops/hero_student_clean_cutout.png"
              alt="TechLearns Fellow"
              className="h-[340px] sm:h-[410px] max-h-[410px] w-auto object-contain mb-0 z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
            />
          </div>

        </div>

        {/* Overlapping Floating Dual Cards Row (2:1 White to Purple ratio on Desktop, Stack on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-7 mt-4 lg:mt-0"
        >

          {/* Left Purple Floating Card */}
          <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-[24px] p-7 sm:p-9 text-white shadow-[0_20px_45px_rgba(139,92,246,0.28)] flex flex-col justify-between">
            <div>
              <h3 className="font-headings text-[18px] sm:text-[20px] font-extrabold text-white mb-2">
                Always Update Every Day
              </h3>
              <p className="text-[13px] text-white/90 leading-relaxed mb-6 font-normal">
                We believe the future of learning is not about consuming more content—it is about developing the ability to <strong className="text-[#FDE68A] font-bold">apply knowledge, solve problems, work professionally and demonstrate capability.</strong>
              </p>
            </div>

            {/* Form Input Bar with White Pill Button */}
            <div className="flex items-center bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/30">
              <input
                type="text"
                readOnly
                value="fellow@techlearns.com"
                className="w-full bg-transparent border-none outline-none px-4 py-1.5 text-[12.5px] font-semibold text-white"
              />
              <Link
                href="/cel"
                className="bg-white text-[#7C3AED] px-6 py-2 rounded-full text-[12.5px] font-extrabold no-underline whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-purple-50 transition-all"
              >
                Request
              </Link>
            </div>
          </div>

          {/* Right White Floating Card (Expanded 2x width space on Desktop) */}
          <div className="bg-white border border-slate-200 rounded-[24px] p-7 sm:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-[1.1fr_1.9fr] gap-6 sm:gap-9 items-center">

            {/* Left Column Checklist */}
            <div className="md:border-r md:border-slate-100 md:pr-7 flex flex-col gap-2.5">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#8B5CF6] shrink-0" />
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column Statement */}
            <div className="flex flex-col">
              <h4 className="font-headings text-[18px] sm:text-[20px] font-extrabold text-slate-900 mb-2">
                How Can We Help You?
              </h4>
              <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed mb-5 font-normal">
                Through our <strong className="text-[#5B2E91] font-bold">Corporate Experience Learning (CEL)</strong> philosophy, Techlearns brings together technology learning, AI, practical exposure, industry engagement and career readiness within one connected ecosystem.
              </p>
              <Link
                href="/cel"
                className="inline-flex items-center gap-2 text-[13.5px] font-extrabold text-[#7C3AED] no-underline hover:text-[#5B2E91] transition-colors"
              >
                <span>Read More</span>
                <ArrowRight size={15} className="text-[#7C3AED]" />
              </Link>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

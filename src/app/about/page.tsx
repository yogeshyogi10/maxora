"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Shield, Heart, Eye, Target, Compass } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

export default function AboutPage() {
  const values = [
    {
      title: "Artisanal Code Quality",
      desc: "We do not believe in boilerplate. Every file is organized, typed with TypeScript, and performance-audited.",
      icon: Target
    },
    {
      title: "Total Transparency",
      desc: "Our contracts have fixed timelines and flat pricing. We report progress transparently at every sprint stage.",
      icon: Shield
    },
    {
      title: "Aesthetic Rigor",
      desc: "Every border glow, custom cursor, scroll interaction, and font spacing is tailored to exude premium luxury.",
      icon: Compass
    },
    {
      title: "Sustainable Scalability",
      desc: "We write components that grow with you. Adding features, page routes, or custom databases is always frictionless.",
      icon: Heart
    }
  ];

  const milestones = [
    { year: "Early 2025", title: "The Freelance Spark", desc: "Began the journey as an independent developer, mastering web fundamentals and modern frameworks." },
    { year: "Mid 2025", title: "First Client Successes", desc: "Delivered high-performance websites for local businesses, establishing a track record for speed and reliability." },
    { year: "Early 2026", title: "Elevating the Aesthetic", desc: "Shifted focus towards luxury web design, integrating Next.js and advanced animations for premium brands." },
    { year: "Late 2026", title: "Maxora Tech Solutions", desc: "Officially launched as a specialized freelance agency in Coimbatore, ready to scale operations globally." }
  ];

  return (
    <div className="py-12 md:py-20 relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

      {/* Banner */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B3FF]" />
          <span className="text-[10px] uppercase tracking-widest text-[#D9B3FF] font-semibold">Behind The Code</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-normal font-display text-white leading-tight">
          Engineering the Future of <br />
          <span className="text-gradient-primary">Digital Prestige</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-4">
          We bridge the gap between premium design aesthetics and high-performance server engineering.
        </p>
      </div>

      {/* Core Mission Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="flex flex-col gap-6">
          <span className="text-[#D9B3FF] font-semibold text-xs uppercase tracking-widest">Our Philosophy</span>
          <h2 className="text-2xl md:text-3xl font-normal text-white font-display">
            Speed is a Status Symbol. <br />Design is a Differentiator.
          </h2>
          <p className="text-white/70 text-sm font-light leading-relaxed">
            At Maxora, we believe a brand's website is their primary digital real estate. Simple template solutions dilute authority. We construct bespoke digital assets from scratch using high-speed rendering frameworks, customized server layouts, and elegant animations.
          </p>
          <p className="text-white/70 text-sm font-light leading-relaxed">
            Whether we are writing a custom headless WooCommerce configuration or organizing social media layouts, we deliver performance that ranks and design that converts.
          </p>

          <div className="flex gap-4 mt-2">
            <CustomButton href="/contact" variant="primary" size="md">
              Collaborate With Us
            </CustomButton>
          </div>
        </div>

        {/* Brand values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-2xl border border-glass bg-white/[0.01] flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#B03DFF]/10 flex items-center justify-center border border-[#B03DFF]/20 text-[#D9B3FF]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-white font-normal text-sm tracking-tight">{v.title}</h3>
                <p className="text-white/50 text-xs font-light leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 border-t border-white/5 mb-16">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Our Track Record</span>
          <h2 className="text-2xl md:text-3xl font-normal text-white font-display mt-2">Interactive Milestones</h2>
        </div>

        <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 flex flex-col gap-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#050014] border border-[#B03DFF] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D9B3FF] animate-pulse" />
              </div>
              <span className="text-[#D9B3FF] font-normal text-lg font-display">{m.year}</span>
              <h3 className="text-white font-normal text-base md:text-lg mt-1">{m.title}</h3>
              <p className="text-white/60 text-xs md:text-sm font-light mt-1.5 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projectsData } from "@/lib/data";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Startups", "Retail Brands", "Restaurants", "Healthcare", "Education", "E-Commerce", "Real Estate", "Professional Services"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.industry.toLowerCase().includes(filter.toLowerCase()) || p.name.toLowerCase().includes(filter.toLowerCase()) || p.description.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="py-12 md:py-20 relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B3FF]" />
          <span className="text-[10px] uppercase tracking-widest text-[#D9B3FF] font-semibold">Our Showcase</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-normal font-display text-white leading-tight">
          Let's Engineer <br />
          <span className="text-gradient-primary">Deployments</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-4">
          Let's discuss how we can engineer a high-speed website, custom software build, or conversion-focused advertising framework to scale your operations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-white/5 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
              filter === cat 
                ? "bg-[#B03DFF] text-white shadow-[0_0_12px_rgba(176,61,255,0.25)]" 
                : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-glass rounded-3xl bg-white/[0.01]">
          <p className="text-white/50 text-sm font-light">No projects found in this category. Let's start one together!</p>
        </div>
      )}

    </div>
  );
}

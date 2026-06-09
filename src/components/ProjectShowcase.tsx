"use client";

import React from "react";
import { Project } from "@/lib/data";
import Card3D from "./ui/Card3D";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <Card3D className="p-6 flex flex-col justify-between group h-full">
      <div className="flex flex-col gap-5">
        {/* CSS Laptop Mockup Frame */}
        <div className="relative w-full aspect-[16/10] bg-[#0d0724] rounded-xl p-2.5 border border-white/5 shadow-2xl select-none overflow-hidden">
          
          {/* Glossy Reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 z-10 pointer-events-none" />
          
          {/* Laptop Screen */}
          <div 
            className="w-full h-full rounded-lg overflow-hidden relative border border-white/10 flex flex-col justify-between p-4" 
            style={{ background: project.image }}
          >
            {/* Shadow gradients for screen depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

            {/* Screen Header mock */}
            <div className="relative flex justify-between items-center z-20">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[8px] tracking-widest uppercase font-semibold text-white/50 bg-black/30 px-2 py-0.5 rounded-full border border-white/5">
                {project.industry}
              </span>
            </div>

            {/* Screen Core Mock content overlay */}
            <div className="relative z-20 flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                <span className="text-white font-extrabold text-xs">M</span>
              </div>
              <h4 className="text-white font-extrabold text-sm tracking-tight leading-tight">
                {project.name}
              </h4>
              <p className="text-[9px] text-[#D9B3FF] font-medium tracking-wide">
                {project.result}
              </p>
            </div>
            
            {/* Visual representation layout lines */}
            <div className="absolute inset-0 flex flex-col gap-2 p-6 justify-center items-end opacity-20 pointer-events-none">
              <div className="w-1/2 h-2 bg-white rounded" />
              <div className="w-2/3 h-1.5 bg-white rounded" />
              <div className="w-1/3 h-1.5 bg-white rounded" />
            </div>
          </div>

          {/* Laptop Bottom Bezel Joint */}
          <div className="absolute bottom-0 left-0 w-full h-[8px] bg-zinc-800 rounded-b-xl border-t border-zinc-700" />
        </div>

        {/* Project Meta Info */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-[#D9B3FF] font-semibold">
              {project.industry}
            </span>
            <span className="text-[9px] font-bold bg-[#B03DFF]/15 border border-[#B03DFF]/25 text-[#D9B3FF] px-2 py-0.5 rounded-full">
              {project.result}
            </span>
          </div>
          <h3 className="text-white font-extrabold text-lg group-hover:text-[#D9B3FF] transition-colors duration-300 leading-snug">
            {project.name}
          </h3>
          <p className="text-white/60 text-xs font-light line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 mt-5">
        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-1">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="text-[9px] text-white/50 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md font-light"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card3D>
  );
}

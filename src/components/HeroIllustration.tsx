"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";

export default function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none z-10">
      {/* Soft background aura */}
      <div className="absolute w-[280px] h-[280px] bg-[#B03DFF]/15 rounded-full filter blur-[50px]" />

      {/* Futuristic Vector Geometry */}
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full relative z-10 filter drop-shadow-[0_12px_35px_rgba(176,61,255,0.25)]"
      >
        {/* Hologram Base Grid Circles */}
        <ellipse cx="100" cy="155" rx="75" ry="24" fill="none" stroke="rgba(217, 179, 255, 0.12)" strokeWidth="1" />
        <ellipse cx="100" cy="155" rx="55" ry="18" fill="none" stroke="rgba(217, 179, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="100" cy="155" rx="35" ry="11" fill="none" stroke="rgba(217, 179, 255, 0.25)" strokeWidth="1.2" />
        
        {/* Rising glowing connection lines */}
        <line x1="55" y1="155" x2="55" y2="95" stroke="url(#lineFade)" strokeWidth="0.8" strokeDasharray="2 3" className="animate-[dash_6s_linear_infinite]" />
        <line x1="145" y1="155" x2="145" y2="75" stroke="url(#lineFade)" strokeWidth="0.8" strokeDasharray="2 3" className="animate-[dash_5s_linear_infinite]" />
        <line x1="100" y1="155" x2="100" y2="105" stroke="url(#lineFade)" strokeWidth="1" strokeDasharray="1 4" className="animate-[dash_4s_linear_infinite]" />

        {/* Floating Web Dev Component Card (Left) */}
        <g 
          transform="translate(18, 90)" 
          className="animate-bounce" 
          style={{ animationDuration: "5s" }}
        >
          {/* Glass Card base */}
          <rect width="64" height="42" rx="6" fill="rgba(8, 2, 28, 0.85)" stroke="rgba(176, 61, 255, 0.4)" strokeWidth="1" />
          {/* Small chrome bar */}
          <line x1="6" y1="7" x2="22" y2="7" stroke="#D9B3FF" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="56" cy="7" r="1.5" fill="#B03DFF" />
          
          {/* Code line templates */}
          <line x1="8" y1="18" x2="48" y2="18" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="8" y1="25" x2="38" y2="25" stroke="#B03DFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="8" y1="32" x2="52" y2="32" stroke="#D9B3FF" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* Floating Analytics Growth Dashboard (Right) */}
        <g 
          transform="translate(120, 100)" 
          className="animate-bounce" 
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        >
          {/* Glass Card base */}
          <rect width="60" height="44" rx="6" fill="rgba(8, 2, 28, 0.85)" stroke="rgba(217, 179, 255, 0.3)" strokeWidth="1" />
          
          {/* Micro chart bars */}
          <rect x="8" y="24" width="6" height="12" fill="#660F56" rx="1.5" />
          <rect x="18" y="18" width="6" height="18" fill="#B03DFF" rx="1.5" />
          <rect x="28" y="10" width="6" height="26" fill="#D9B3FF" rx="1.5" />
          <rect x="38" y="14" width="6" height="22" fill="#ffffff" rx="1.5" />
          
          {/* Trending green growth curve */}
          <path d="M 6,32 L 18,22 L 28,12 L 38,15 L 48,7" fill="none" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="48" cy="7" r="2.2" fill="#25D366" />
        </g>

        {/* Floating Orb nodes */}
        <circle cx="160" cy="45" r="4.5" fill="#D9B3FF" className="animate-pulse" />
        <circle cx="42" cy="52" r="3.5" fill="#B03DFF" className="animate-pulse" />
        <circle cx="178" cy="115" r="2.5" fill="#660F56" className="animate-pulse" />

        <defs>
          <linearGradient id="lineFade" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#050014" stopOpacity="0" />
            <stop offset="50%" stopColor="#B03DFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D9B3FF" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* 3D WebGL Canvas Layer (Replaces the static 2D vector prism) */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20 pointer-events-none">
        <div className="w-[280px] h-[280px] mt-[-30px]">
          <ThreeCanvas />
        </div>
      </div>
      
      {/* Scope styles for animation offset */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
}

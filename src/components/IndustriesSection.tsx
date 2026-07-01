"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IndustriesSection({ industryIcons }: { industryIcons: any[] }) {
  return (
    <section className="py-32 relative z-10 bg-[#050014] overflow-hidden border-y border-white/[0.02]">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#660F56]/10 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADING */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9B3FF]/80 font-medium block mb-3">
            Targeted Domain Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-normal text-white font-display tracking-tight">
            Industries We Specialize In
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {industryIcons.map((ind, index) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" },
                  visible: { 
                    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="p-6 md:p-8 rounded-[2rem] border border-white/[0.03] bg-[#070312]/60 backdrop-blur-md flex flex-col items-center justify-center text-center gap-4 transition-all duration-700 hover:border-[#B03DFF]/40 hover:bg-[#B03DFF]/10 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(176,61,255,0.15)] group relative overflow-hidden cursor-pointer"
              >
                {/* Subtle shine on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[#B03DFF]/20 group-hover:border-[#B03DFF]/40 transition-all duration-500 shadow-lg relative z-10">
                  <IconComp className="w-5 h-5 md:w-6 md:h-6 text-[#D9B3FF] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(217,179,255,1)] transition-all duration-500" />
                </div>
                <span className="text-sm md:text-base font-normal text-white/70 tracking-wide group-hover:text-white transition-colors duration-500 relative z-10">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

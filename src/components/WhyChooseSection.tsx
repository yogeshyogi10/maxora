"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Smartphone, Clock, Headphones, Zap, TrendingUp, Award, Code2 } from "lucide-react";
import { whyChooseData } from "@/lib/data";

const chooseIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Code2, Search, Smartphone, Clock, Headphones, Zap, TrendingUp, Award
};

export default function WhyChooseSection() {
  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      className="py-32 relative z-10 bg-[#050014] overflow-hidden"
    >
      {/* Ambient Cinematic Luxury Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#660F56]/10 via-[#B03DFF]/5 to-[#D9B3FF]/10 rounded-[100%] blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADING WRAPPER */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          
          {/* Small Label */}
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#D9B3FF]/80 font-medium font-display block mb-2"
          >
            Proven Standards
          </motion.span>
          
          {/* Main Heading "Stand-up" wrapper */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleY: 0.9, y: 40 },
              visible: { 
                opacity: 1, 
                scaleY: 1, 
                y: 0, 
                transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
              }
            }}
            style={{ transformOrigin: "bottom center" }}
            className="mt-4 flex flex-wrap justify-center w-full"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal text-white font-display flex flex-col md:flex-row gap-2 md:gap-4 py-2 text-center">
              {/* Left Split */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -50, filter: "blur(20px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
                }}
                className="inline-block tracking-tight"
              >
                Why Ambitious
              </motion.span>
              
              {/* Right Split */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: 50, filter: "blur(20px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
                }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D9B3FF] tracking-tight"
              >
                Brands Choose Us
              </motion.span>
            </h2>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.0 } }
            }}
            className="text-white/50 text-sm font-light mt-8 max-w-lg leading-relaxed"
          >
            We design and code to the highest technical benchmarks to support enterprise operations.
          </motion.p>
        </div>

        {/* CARDS */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyChooseData.map((item, idx) => {
            const IconComp = chooseIcons[item.iconName] || Code2;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(15px)" },
                  visible: { 
                    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
                    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="p-8 rounded-[2rem] border border-white/[0.03] bg-[#070312]/80 backdrop-blur-xl hover:-translate-y-2 hover:bg-[#B03DFF]/10 hover:border-[#D9B3FF]/30 hover:shadow-[0_0_40px_rgba(176,61,255,0.2)] transition-all duration-700 flex flex-col gap-5 group cursor-pointer relative overflow-hidden"
              >
                {/* Luxury inner card shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[#B03DFF]/20 group-hover:border-[#B03DFF]/40 transition-all duration-500 shadow-lg">
                  <IconComp className="w-5 h-5 text-[#D9B3FF] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(217,179,255,1)] transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-white font-normal text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D9B3FF] transition-all duration-500">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-loose font-light mt-3 group-hover:text-white/60 transition-colors duration-500">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}

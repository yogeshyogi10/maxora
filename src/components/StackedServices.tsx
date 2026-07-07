"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Code2, Globe, ShoppingBag, Palette, Megaphone, Share2, Layers } from "lucide-react";
import Card3D from "@/components/ui/Card3D";
import { servicesData } from "@/lib/data";

const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Code2: Code2,
  Globe: Globe,
  ShoppingBag: ShoppingBag,
  Palette: Palette,
  Megaphone: Megaphone,
  Share2: Share2,
  Layers: Layers
};

const StackedCard = ({ cat, idx, progress, totalCards }: { cat: any, idx: number, progress: any, totalCards: number }) => {
  const IconComp = serviceIcons[cat.iconName] || Code2;
  
  const targetScale = 1 - ((totalCards - idx) * 0.05);
  const scale = useTransform(progress, [idx / totalCards, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-10">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(${idx * 30}px)` 
        }} 
        className="w-full max-w-5xl px-6 relative"
      >
        <Card3D className="p-6 md:p-8 flex flex-col gap-4 h-[580px] md:h-[550px] shadow-2xl !bg-[#0A051E] border-t border-white/20" onClick={() => {}} role="button">
           {/* Header */}
           <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#660F56] to-[#B03DFF] flex items-center justify-center border border-white/10 shadow-lg">
               <IconComp className="w-7 h-7 text-white" />
             </div>
             <h3 className="text-white font-normal text-2xl leading-tight tracking-tight font-display">
               {cat.title}
             </h3>
           </div>
           
           <p className="text-white/60 text-sm leading-relaxed font-light">
             {cat.description}
           </p>
           
           {/* Sub-services list */}
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4 border-t border-white/5 pt-6">
             {cat.services.map((sub: string, sidx: number) => (
               <li key={sidx} className="flex items-start gap-3 text-sm text-white/70 font-light">
                 <CheckCircle2 className="w-5 h-5 text-[#B03DFF] flex-shrink-0" />
                 <span>{sub}</span>
               </li>
             ))}
           </ul>
        </Card3D>
      </motion.div>
    </div>
  );
};

export default function StackedServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative z-10 bg-[#050014]/50 border-t border-white/5 pb-24">
      <div className="pt-24 pb-4 text-center max-w-2xl mx-auto px-6 relative z-20">
        <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Bespoke Offerings</span>
        <h2 className="text-3xl md:text-4xl font-normal text-white mt-2 font-display">Enterprise Web Design & Digital Marketing Services</h2>
        <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mt-3">
          We deliver premium digital assets and engineering pipelines tailored to elevate corporate growth.
        </p>
      </div>

      <div className="relative w-full z-20">
        {servicesData.map((cat, idx) => (
          <StackedCard 
            key={cat.id} 
            cat={cat} 
            idx={idx} 
            progress={scrollYProgress} 
            totalCards={servicesData.length} 
          />
        ))}
      </div>

      {/* Floating Background Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform" }} className="absolute top-[20%] left-[5%] md:left-[10%]">
            <Code2 className="w-16 h-16 md:w-24 md:h-24 text-white/5 transform -rotate-12" />
          </motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform" }} className="absolute top-[60%] left-[8%] md:left-[15%]">
            <Share2 className="w-20 h-20 md:w-32 md:h-32 text-white/5 transform rotate-12" />
          </motion.div>
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform" }} className="absolute top-[30%] right-[5%] md:right-[10%]">
            <Palette className="w-24 h-24 md:w-36 md:h-36 text-white/5 transform rotate-6" />
          </motion.div>
          <motion.div animate={{ y: [0, 25, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform" }} className="absolute bottom-[20%] right-[8%] md:right-[15%]">
            <Megaphone className="w-16 h-16 md:w-28 md:h-28 text-white/5 transform -rotate-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

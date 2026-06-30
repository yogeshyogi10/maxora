"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";

export default function StorytellingProblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [50, 0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [0.9, 1, 1.1]);

  // Text 2
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [50, 0, -50]);
  const scale2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0.9, 1, 1.1]);

  // Text 3
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [50, 0, -50]);
  const scale3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0.9, 1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#050014] z-20">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B03DFF]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Text 1 */}
        <motion.div style={{ opacity: opacity1, y: y1, scale: scale1 }} className="absolute text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal text-white/80 font-display leading-tight tracking-tight">
            Most digital agencies <br className="hidden md:block" />build websites.
          </h2>
        </motion.div>

        {/* Text 2 */}
        <motion.div style={{ opacity: opacity2, y: y2, scale: scale2 }} className="absolute text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal text-white font-display leading-tight tracking-tight">
            We build <br className="md:hidden" /><span className="text-[#D9B3FF]">enterprise growth engines.</span>
          </h2>
        </motion.div>

        {/* Text 3 */}
        <motion.div style={{ opacity: opacity3, y: y3, scale: scale3 }} className="absolute flex flex-col items-center gap-8 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal text-white font-display leading-tight tracking-tight">
            Because in today's digital landscape, <br />
            <span className="text-shine-animated">looking good isn't enough.</span>
          </h2>
          <CustomButton href="/about" variant="primary" size="lg">
            Discover Our Why
          </CustomButton>
        </motion.div>

      </div>
    </section>
  );
}

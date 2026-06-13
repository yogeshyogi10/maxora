"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const duration = 2500;
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress > 100 ? 100 : currentProgress);

      if (currentProgress > 25 && currentProgress < 60) {
        setLoadingText("LOADING ASSETS...");
      } else if (currentProgress >= 60 && currentProgress < 90) {
        setLoadingText("ESTABLISHING CONNECTION...");
      } else if (currentProgress >= 90) {
        setLoadingText("SYSTEM READY.");
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 500);
        }, 400); // Hold at 100% for a tiny bit before fading out
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050014] flex flex-col items-center justify-center font-mono"
        >
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-24 md:w-96 md:h-32 mb-12"
          >
            {/* Glossy/Glow background effect behind the logo */}
            <div className="absolute inset-0 bg-[#B03DFF] blur-[80px] opacity-20 animate-pulse rounded-full" />
            
            <Image
              src="/logo.png"
              alt="Maxora Logo"
              fill
              priority
              className="object-contain filter drop-shadow-[0_0_15px_rgba(176,61,255,0.4)]"
            />
          </motion.div>

          {/* Game Style Loading Bar */}
          <div className="w-64 md:w-80 flex flex-col items-center gap-3">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D9B3FF] to-[#B03DFF] shadow-[0_0_10px_#B03DFF]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            
            <div className="flex justify-between w-full text-[10px] md:text-xs text-[#D9B3FF] tracking-widest uppercase">
              <span className="opacity-80">{loadingText}</span>
              <span className="font-bold">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

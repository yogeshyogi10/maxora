"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag'> {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "", ...rest }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map coordinate range [-0.5, 0.5] to tilt rotation angle [-7, 7] degrees
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 25, stiffness: 250 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 250 });

  // Map coordinate range to glare spot percentage [0, 100]
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { damping: 25, stiffness: 250 });
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { damping: 25, stiffness: 250 });

  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle 250px at ${gx}% ${gy}%, rgba(217, 179, 255, 0.15) 0%, transparent 100%)`
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Coordinates relative to card center, scaled to [-0.5, 0.5]
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      {...rest as any}

      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
      className={`relative h-full w-full rounded-2xl border-glass bg-liquid-glass vibranium-border overflow-hidden ${className}`}
    >
      {/* Dynamic Glare Overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-overlay z-10 transition-opacity duration-300"
        style={{
          background: glareBg,
          opacity: isHovered ? 0.8 : 0,
        }}
      />
      <div 
        style={{ transform: "translateZ(15px)" }} 
        className="h-full w-full z-20 relative"
      >
        {children}
      </div>
    </motion.div>
  );
}

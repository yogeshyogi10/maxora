"use client";

import { useEffect, useState } from "react";

export default function AuroraBg() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050014]">
      {/* Ambient Radial Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full aurora-glow-1 opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-15%] right-[-10%] w-[65vw] h-[65vw] rounded-full aurora-glow-2 opacity-60 animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[35%] left-[25%] w-[45vw] h-[45vw] rounded-full aurora-glow-3 opacity-40 animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300 opacity-40 mix-blend-screen"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          background: "radial-gradient(circle, rgba(176, 61, 255, 0.08) 0%, rgba(102, 15, 86, 0.03) 50%, transparent 100%)",
        }}
      />
      
      {/* Ambient Grid overlay to enhance structure */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

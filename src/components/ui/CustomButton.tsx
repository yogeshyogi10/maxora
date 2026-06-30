"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}



export default function CustomButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-500 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#B03DFF]/50 cursor-pointer select-none z-10 group tracking-wider";

  const variants = {
    primary:
      "bg-gradient-to-b from-[#1a103c] to-[#0a0520] text-white border border-white/20 hover:border-white/50 shadow-lg hover:shadow-2xl backdrop-blur-md",
    secondary:
      "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md shadow-sm",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5 backdrop-blur-sm",
    ghost: "text-white/80 hover:text-white bg-transparent hover:bg-white/10 border border-transparent",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs tracking-wider",
    md: "px-7 py-3 text-sm tracking-wide",
    lg: "px-9 py-4 text-base tracking-wide font-semibold",
  };

  const buttonContent = (
    <>
      {/* Intense Shining Sweep Effect (Double layer for extra gloss) */}
      <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-0">
        <span className="absolute top-0 -left-[150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out" />
        <span className="absolute top-0 -left-[150%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out delay-100" />
      </span>

      {/* Static Glossy Top Edge Highlight */}
      <span className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Static Glossy Bottom Edge Glow (Subtle) */}
      <span className="absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
      
      <span className="relative flex items-center gap-2 z-20">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {buttonContent}
    </button>
  );
}

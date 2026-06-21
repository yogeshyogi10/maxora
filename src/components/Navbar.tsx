"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CustomButton from "./ui/CustomButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync scroll lock with mobile drawer open state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-glass border-b border-white/10 py-4"
          : "bg-transparent py-12"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <img
            src="/logo-icon.png"
            alt="Maxora"
            className="shrink-0 w-auto h-14 object-contain -mt-1 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(176,61,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(176,61,255,0.7)]"
          />
          <div className="flex flex-col text-left">
            <span className="text-white font-normal text-xl tracking-wider font-display leading-none group-hover:text-[#D9B3FF] transition-colors duration-300">
              MAXORA
            </span>
            <span className="text-white/60 text-[9px] uppercase tracking-[0.25em] font-light mt-1 leading-none group-hover:text-white transition-colors duration-300">
              TECH SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 relative py-1 ${isActive
                    ? "text-[#D9B3FF]"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#B03DFF] to-[#D9B3FF]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <CustomButton href="/contact" size="sm" variant="outline">
            Book Free Consultation <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CustomButton>
        </div>

        {/* Mobile Menu Action */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-[#D9B3FF] focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050014]/98 backdrop-blur-lg z-40 lg:hidden flex flex-col justify-center px-8">
          <nav className="flex flex-col gap-6 text-xl uppercase tracking-widest font-semibold mb-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${isActive ? "text-[#D9B3FF]" : "text-white/60 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div>
            <CustomButton
              href="/contact"
              size="lg"
              variant="primary"
              className="w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Free Consultation <ArrowUpRight className="w-4 h-4 ml-1" />
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
}

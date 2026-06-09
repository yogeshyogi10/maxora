"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass bg-[#050014] relative z-10 pt-20 pb-10 overflow-hidden">
      {/* Background glow node */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full aurora-glow-3 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Company Intro */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo-icon.png"
              alt="Maxora"
              className="shrink-0 w-auto h-16 object-contain -mt-1 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(176,61,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(176,61,255,0.7)]"
            />
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-2xl tracking-wider font-display leading-none group-hover:text-[#D9B3FF] transition-colors duration-300">
                MAXORA
              </span>
              <span className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-light mt-1 leading-none group-hover:text-white transition-colors duration-300">
                TECH SOLUTIONS
              </span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed font-light">
            Maxora Tech Solutions is a world-class luxury digital agency, crafting custom website developments, WordPress sites, premium Shopify stores, and digital marketing ecosystems.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D9B3FF] transition-colors p-2.5 bg-white/5 rounded-full border border-white/5 hover:bg-[#B03DFF]/10 hover:border-[#B03DFF]/20" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D9B3FF] transition-colors p-2.5 bg-white/5 rounded-full border border-white/5 hover:bg-[#B03DFF]/10 hover:border-[#B03DFF]/20" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D9B3FF] transition-colors p-2.5 bg-white/5 rounded-full border border-white/5 hover:bg-[#B03DFF]/10 hover:border-[#B03DFF]/20" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D9B3FF] transition-colors p-2.5 bg-white/5 rounded-full border border-white/5 hover:bg-[#B03DFF]/10 hover:border-[#B03DFF]/20" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6 border-l-2 border-[#B03DFF] pl-3">Services</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60 font-light">
            <li><Link href="/services" className="hover:text-white transition-colors">Custom Development</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">WordPress Setup</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Shopify Development</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">UI/UX Design Hub</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Branding Guidelines</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">SEO & PPC Marketing</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6 border-l-2 border-[#B03DFF] pl-3">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60 font-light">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio Showcase</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Insights Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Contact info & Newsletter */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 border-l-2 border-[#B03DFF] pl-3">Contact</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60 font-light">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B03DFF] flex-shrink-0" />
                <a href="mailto:hello@maxoratech.com" className="hover:text-white transition-colors break-all">hello@maxoratech.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B03DFF] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B03DFF] flex-shrink-0 mt-0.5" />
                <span>Mumbai Corporate Offices, India</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-3">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business email..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 p-1.5 bg-[#B03DFF] hover:bg-[#D9B3FF] text-white hover:text-black rounded-full transition-all duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-[#D9B3FF] mt-2 animate-pulse font-light">Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
        <p>© {currentYear} Maxora Tech Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

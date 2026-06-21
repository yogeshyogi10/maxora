"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Globe, 
  ShoppingBag, 
  Palette, 
  Megaphone, 
  Share2, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";
import { servicesData } from "@/lib/data";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const activeCategory = servicesData.find(c => c.id === activeTab) || servicesData[0];

  const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Code2: Code2,
    Globe: Globe,
    ShoppingBag: ShoppingBag,
    Palette: Palette,
    Megaphone: Megaphone,
    Share2: Share2,
    Layers: Layers
  };

  return (
    <div className="py-12 md:py-20 relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B3FF]" />
          <span className="text-[10px] uppercase tracking-widest text-[#D9B3FF] font-semibold">Our Capabilities</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-normal font-display text-white leading-tight">
          Bespoke Technical <br />
          <span className="text-gradient-primary">Capabilities</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-4">
          We combine code optimization with branding expertise to secure measurable growth for modern enterprises.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 border-b border-white/5 pb-8">
        {servicesData.map((cat) => {
          const Icon = serviceIcons[cat.iconName] || Code2;
          const isSelected = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected 
                  ? "bg-[#B03DFF] text-white shadow-[0_0_15px_rgba(176,61,255,0.25)]" 
                  : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* active service info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
        
        {/* Info Left */}
        <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl border border-glass bg-[#0d0724]/40 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#660F56] to-[#B03DFF] flex items-center justify-center border border-white/10 shadow-lg">
                {React.createElement(serviceIcons[activeCategory.iconName] || Code2, { className: "w-6 h-6 text-white" })}
              </div>
              <h2 className="text-white font-normal text-2xl md:text-3xl font-display">{activeCategory.title}</h2>
            </div>
            
            <p className="text-white/75 text-sm md:text-base leading-relaxed font-light">
              {activeCategory.description}
            </p>

            <hr className="border-white/5" />

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-normal text-xs uppercase tracking-widest text-[#D9B3FF]">Includes Standard Deliverables:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCategory.services.map((serv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/70 font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#B03DFF] mt-0.5 flex-shrink-0" />
                    <span>{serv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <CustomButton href="/contact" variant="primary" size="md">
              Book Project Scope <ArrowRight className="w-4 h-4 ml-1" />
            </CustomButton>
          </div>
        </div>

        {/* Workflow Info Right */}
        <div className="lg:col-span-5 p-8 rounded-3xl border border-glass bg-white/[0.01] flex flex-col gap-8 justify-center">
          <span className="text-[#D9B3FF] font-semibold text-xs uppercase tracking-widest">Target Outcomes</span>
          
          <div className="flex flex-col gap-6">
            {[
              { title: "Optimized Performance", desc: "We target a sub-second page rendering speed, boosting conversion retention." },
              { title: "Conversion Optimization", desc: "Interface layouts mapped to user decision funnels to maximize bookings." },
              { title: "Search Engine Readiness", desc: "Automated inclusion of semantic tags, schemas, and metadata keywords." }
            ].map((out, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#B03DFF]/15 border border-[#B03DFF]/25 flex items-center justify-center text-xs font-bold text-[#D9B3FF] flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-white font-normal text-sm">{out.title}</h4>
                  <p className="text-white/50 text-xs font-light mt-1 leading-relaxed">{out.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

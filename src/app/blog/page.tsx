"use client";

import React from "react";
import { Sparkles, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Card3D from "@/components/ui/Card3D";
import { blogData } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20 relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B3FF]" />
          <span className="text-[10px] uppercase tracking-widest text-[#D9B3FF] font-semibold">Insights & Guides</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-normal font-display text-white leading-tight">
          Maxora Tech <br />
          <span className="text-gradient-primary">Insights Blog</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-4">
          Read guides on frontend performance optimization, luxury web styling workflows, and high-ROI advertising tactics.
        </p>
      </div>

      {/* Blog Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <div key={post.id}>
            <Card3D className="p-6 flex flex-col justify-between h-full group">
              <div className="flex flex-col gap-4">
                
                {/* Visual cover represent gradient */}
                <div 
                  className="w-full aspect-[16/9] rounded-xl overflow-hidden relative border border-white/10" 
                  style={{ background: post.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-white font-bold bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
                    {post.category}
                  </span>
                </div>

                {/* Article Info details */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-4 text-[10px] text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B03DFF]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B03DFF]" /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-normal text-base md:text-lg group-hover:text-[#D9B3FF] transition-colors leading-snug mt-1 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between">
                <span className="text-[10px] text-white/40">By Maxora Team</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-[#D9B3FF] group-hover:text-white transition-colors"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Card3D>
          </div>
        ))}
      </div>
      
    </div>
  );
}

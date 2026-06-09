import { blogData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
      
      {/* Back to listings */}
      <Link 
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-12"
      >
        <ChevronLeft className="w-4 h-4 animate-[pulse_2s_infinite]" /> Back to Blog
      </Link>

      {/* Cover Banner */}
      <div 
        className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/10 mb-12 shadow-2xl flex flex-col justify-end min-h-[300px]"
        style={{ background: post.image }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="relative z-10 flex flex-col gap-4 text-left">
          <span className="text-[9px] uppercase tracking-widest text-white font-bold bg-[#B03DFF]/30 px-3 py-1 rounded-full border border-white/10 w-fit">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold font-display text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[10px] text-white/70 font-light">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D9B3FF]" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D9B3FF]" /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Article Body */}
      <article className="max-w-3xl mx-auto mb-16 text-white/80 font-light leading-relaxed">
        <p className="text-sm md:text-base mb-6">
          {post.content}
        </p>
        
        <h3 className="text-white font-extrabold text-lg md:text-xl font-display mt-8 mb-4">
          Visual Aesthetics Met With Engineering Rigor
        </h3>
        
        <p className="text-xs md:text-sm mb-6 text-white/60">
          In luxury digital solutions, visual elegance should never compromise execution speeds. High bounce rates are frequently linked to unoptimized media loads, blocking JavaScript threads, and lack of component caching. Our senior engineers combine Tailwind utility spacing with Next.js dynamic routing structures to ensure client sites load instantly and capture engagement.
        </p>

        <p className="text-xs md:text-sm text-white/60">
          We recommend establishing structured layouts, standardizing component spacing, and testing interactive systems against high load margins before project deployment.
        </p>
      </article>

      <hr className="border-white/5 mb-12" />

      {/* Bottom Consulting Callout */}
      <div className="p-8 md:p-10 rounded-2xl border border-glass bg-gradient-to-r from-[#17011d] to-[#07011f] text-center flex flex-col items-center gap-4">
        <h3 className="text-white font-extrabold text-xl font-display">Integrate Premium Engineering Today</h3>
        <p className="text-white/60 text-xs font-light max-w-md leading-relaxed">
          Book a briefing sprint with our developers to review your system, customize storefront features, or execute digital campaigns.
        </p>
        <CustomButton href="/contact" variant="primary" size="md">
          Consult Our Team <ArrowRight className="w-4 h-4 ml-1" />
        </CustomButton>
      </div>

    </div>
  );
}

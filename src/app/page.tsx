"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Rocket,
  ShoppingBag,
  Utensils,
  HeartPulse,
  GraduationCap,
  Laptop,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Code2,
  Globe,
  Palette,
  Megaphone,
  Share2,
  Layers,
  Search,
  Zap,
  Clock,
  Headphones,
  TrendingUp,
  Award,
  Smartphone
} from "lucide-react";

import HeroIllustration from "@/components/HeroIllustration";
import CustomButton from "@/components/ui/CustomButton";
import dynamic from "next/dynamic";

const Card3D = dynamic(() => import("@/components/ui/Card3D"), { ssr: true });
const AnimatedCounter = dynamic(() => import("@/components/ui/AnimatedCounter"), { ssr: false });
const ProjectShowcase = dynamic(() => import("@/components/ProjectShowcase"), { ssr: true });
const Accordion = dynamic(() => import("@/components/ui/Accordion"), { ssr: true });
const StackedServices = dynamic(() => import("@/components/StackedServices"), { ssr: true });
const StorytellingProblem = dynamic(() => import("@/components/StorytellingProblem"), { ssr: true });
const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"), { ssr: true });
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"), { ssr: true });


import {
  servicesData,
  projectsData,
  whyChooseData,
  pricingPlans,
  webDevPricingPlans,
  faqData
} from "@/lib/data";

const testimonials = [
  {
    id: "t1",
    name: "Hari Vignesh",
    role: "Founder",
    company: "Cresendra",
    rating: 5,
    review: "Maxora transformed our digital presence completely. The new website has double our reservations and loading speed is instantaneous. Elite service!",
    avatar: "AS"
  },
  {
    id: "t2",
    name: "Arun Dev",
    role: "Senior Digital Marketer",
    company: "Infratech",
    rating: 4,
    review: "Enterprise design quality, clean TypeScript architecture, and top-tier animations. They operate at the highest level of professionalism.",
    avatar: "VM"
  },
  {
    id: "t3",
    name: "Aadhithya",
    role: "Operational Manager",
    company: "Akhil Restaurant",
    rating: 5,
    review: "Our Shopify conversion rate went from 1.8% to 4.2% in weeks after launch. Their conversion-driven layouts are scientifically designed.",
    avatar: "NG"
  }
];



// --- CINEMATIC TIMELINE STEP (Entrance Reveal) ---
const CinematicTimelineStep = ({ step, idx }: any) => {
  const isEven = idx % 2 === 0;
  
  // Slide in from left for even, right for odd, just like the about section's x-axis reveal
  const xOffset = isEven ? -40 : 40;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1 }}
      className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Glowing Timeline Connector Node */}
      <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#050014] border border-[#B03DFF]/50 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(176,61,255,0.4)]">
        <motion.div
          className="w-2 h-2 rounded-full bg-white"
          whileInView={{ scale: [1, 1.5, 1] }}
          viewport={{ once: false }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Step Card */}
      <div className="w-full md:w-[45%] pl-10 md:pl-0">
        <Card3D className="p-7 md:p-10 bg-[#070312]/90 backdrop-blur-xl border border-white/5 hover:border-[#D9B3FF]/30 transition-all duration-700 shadow-2xl relative overflow-hidden group">
          {/* Subtle luxury shine overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#D9B3FF]/80 mb-2 block">
            Phase 0{idx + 1}
          </span>
          <h3 className="text-white font-normal text-2xl mt-1.5 mb-4 font-display tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D9B3FF] transition-all duration-500">
            {step.title}
          </h3>
          <p className="text-white/50 text-sm font-light leading-loose group-hover:text-white/70 transition-colors duration-500">
            {step.desc}
          </p>
        </Card3D>
      </div>
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll hooks for Hero parallax
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 120]);
  const illustrationY = useTransform(scrollY, [0, 600], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  // Scroll hooks for Timeline Progress Line
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"]
  });
  const scaleY = useSpring(timelineProgress, { stiffness: 90, damping: 25 });

  // Testimonial Carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Form states
  const [auditName, setAuditName] = useState("");
  const [auditEmail, setAuditEmail] = useState("");
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactBusiness, setContactBusiness] = useState("Startup");
  const [contactBudget, setContactBudget] = useState("₹20,000 - ₹50,000");
  const [contactDesc, setContactDesc] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const processSteps = [
    { title: "Discovery", desc: "Deep dive into your target audience, goals, brand voice, and tech stack parameters." },
    { title: "Strategy", desc: "Drafting structural sitemaps, system architectures, and conversion-focused customer flows." },
    { title: "Design", desc: "Crafting modern luxury wireframes, custom typography grids, and bespoke visual animations." },
    { title: "Development", desc: "Writing clean, SEO-optimized, pixel-perfect code in Next.js, WordPress, or Shopify." },
    { title: "Testing", desc: "Conducting rigorous cross-browser testing, mobile speed audits, and security configuration scans." },
    { title: "Launch", desc: "Deploying production-ready applications onto lightning-fast servers and domain registries." },
    { title: "Growth & Support", desc: "Configuring SEO reports, managing weekly backups, and implementing lead-generation adjustments." }
  ];

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (auditName.trim() && auditEmail.trim()) {
      try {
        const formData = new FormData();
        formData.append("access_key", "bb6a4b1d-9b24-4ea9-964a-6fbc1b9b99c4");
        formData.append("subject", "New Free Audit Request from Maxora Website");
        formData.append("Name", auditName);
        formData.append("Email", auditEmail);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setAuditSubmitted(true);
          confetti({
            particleCount: 100,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#B03DFF", "#D9B3FF"]
          });

          setTimeout(() => {
            setAuditSubmitted(false);
            setAuditName("");
            setAuditEmail("");
          }, 5000);
        } else {
          alert("Failed to submit request. Please try again.");
        }
      } catch (err) {
        alert("An error occurred. Please check your internet connection.");
      }
    } else {
      alert("Please provide both your name and email.");
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!contactName.trim() || !contactEmail.trim() || !contactPhone.trim()) {
      setFormError("Please fill out all required fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", "bb6a4b1d-9b24-4ea9-964a-6fbc1b9b99c4");
      formData.append("subject", "New Inquiry from Maxora Home Page");
      formData.append("Name", contactName);
      formData.append("Email", contactEmail);
      formData.append("Phone", contactPhone);
      if (contactDesc.trim()) {
        formData.append("Project Details", contactDesc);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setContactSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#B03DFF", "#D9B3FF", "#660F56", "#25D366"]
        });

        setTimeout(() => {
          setContactSubmitted(false);
          setContactName("");
          setContactEmail("");
          setContactPhone("");
          setContactDesc("");
        }, 6000);
      } else {
        setFormError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setFormError("An error occurred. Please check your connection.");
    }
  };

  // Map icon strings for industries
  const industryIcons = [
    { name: "Startups", icon: Rocket },
    { name: "Retail Brands", icon: ShoppingBag },
    { name: "Restaurants", icon: Utensils },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Education", icon: GraduationCap },
    { name: "E-Commerce", icon: Laptop },
    { name: "Real Estate", icon: Building2 },
    { name: "Professional Services", icon: Briefcase }
  ];

  const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Code2: Code2,
    Globe: Globe,
    ShoppingBag: ShoppingBag,
    Palette: Palette,
    Megaphone: Megaphone,
    Share2: Share2,
    Layers: Layers
  };

  const chooseIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Code2: Code2,
    Search: Search,
    Smartphone: Smartphone,
    Clock: Clock,
    Headphones: Headphones,
    Zap: Zap,
    TrendingUp: TrendingUp,
    Award: Award
  };

  // Framer Motion viewport reveal presets
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  } as const;

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  } as const;

  return (
    <div className="relative">

      {/* 1. HERO SECTION (Scroll Parallax Enabled) */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center pt-8 md:pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">

          {/* Left Text */}
          <motion.div
            style={{ y: textY, opacity: heroOpacity }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-[#D9B3FF] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Luxury Digital Craftsmanship</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight font-display leading-tight text-white">
              Engineered for Growth. <br />
              Designed for <br />
              <span className="text-shine-animated">Luxury.</span>
            </h1>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl font-light">
              We are a luxury web design and digital marketing agency specializing in Custom Next.js Web Development, high-converting Shopify Stores, WordPress Solutions, and enterprise UI/UX Design. Partner with top developers in India to drive exponential growth.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <CustomButton href="#contact" variant="primary" size="lg">
                Get Free Consultation
              </CustomButton>
              <CustomButton href="/portfolio" variant="secondary" size="lg">
                View Our Work
              </CustomButton>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-white/5 pt-8">
              {[
                { number: 6, suffix: "+", label: "Projects Delivered" },
                { number: 10, suffix: "+", label: "Happy Clients" },
                { number: 99.9, suffix: "%", label: "Satisfaction Rate" },
                { number: 1, suffix: "+", label: "Years Experience" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                >
                  <span className="text-3xl md:text-4xl font-normal font-display text-white">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-white/55 font-light mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Graphics */}
          <motion.div
            style={{ y: illustrationY, opacity: heroOpacity }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </section>

            {/* 1.5 STORYTELLING PROBLEM */}
      <StorytellingProblem />

{/* 3. ABOUT SECTION (Entrance Reveal) */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Our Mission & Values</span>
            <h2 className="text-3xl md:text-4xl font-normal text-white font-display leading-tight">
              Transforming Brands with Custom <br />Web Development & Digital Marketing
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              At Maxora, our mission is to help brands launch and grow online through professionally crafted websites, compelling visual designs, and result-driven digital strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-2xl border border-glass bg-[#0d0724]/20">
                <h4 className="text-white font-normal text-sm uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-white/60 text-xs font-light leading-relaxed">
              >
                <div className="w-8 h-8 rounded-full bg-[#B03DFF]/10 flex items-center justify-center text-xs font-bold text-[#D9B3FF] border border-[#B03DFF]/20">
                  {i + 1}
                </div>
                <h4 className="text-white font-normal text-sm mt-2">{v.value}</h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. SERVICES SECTION (Stacked Sticky Scroll) */}
      <StackedServices />

      {/* 6. FEATURED PROJECTS SECTION (Grid Reveal) */}
      <section id="portfolio" className="py-24 border-t border-white/5 bg-[#050014]/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Creative Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-normal text-white mt-2 font-display">High-Caliber Case Studies</h2>
            </div>
            <CustomButton href="/portfolio" variant="outline" size="md">
              View All Works <ArrowRight className="w-4 h-4 ml-1" />
            </CustomButton>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.slice(0, 6).map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectShowcase project={project} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. PROCESS SECTION (Dynamic Scrollytelling Alternating Timeline) */}
      <section ref={timelineRef} className="py-24 relative z-10 overflow-hidden bg-[#050014]/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Operational Sprints</span>
            <p className="text-white/60 text-xs md:text-sm font-light mt-3">
              We align design precision with clean sprint guidelines to secure success.
            </p>
          </div>

          <div className="relative">
            {/* The Scroll-Linked Timeline Progress Line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-[#660F56] via-[#B03DFF] to-[#D9B3FF] origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* Timeline Alternating Steps */}
            <div className="flex flex-col gap-16 md:gap-24">
              {processSteps.map((step, idx) => (
                <CinematicTimelineStep 
                  key={idx} 
                  step={step} 
                  idx={idx} 
                  timelineProgress={timelineProgress} 
                  totalSteps={processSteps.length} 
                />
              ))}
            </div>

          </div>

        </div>
      </section>

            {/* 7. WHY CHOOSE MAXORA (Cinematic Reveal) */}
      <WhyChooseSection />

            {/* 2. TRUSTED INDUSTRIES SECTION (Cinematic) */}
      <IndustriesSection industryIcons={industryIcons} />

      {/* 9. TESTIMONIAL SECTION */}
      <section className="py-24 relative z-10 bg-[#050014]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-normal text-white mt-2 font-display">Client Endorsements</h2>
          </div>

          {/* Testimonial slider wrapper */}
          <div className="relative p-8 md:p-12 rounded-3xl border border-glass bg-[#0d0724]/40 overflow-hidden">
            <div className="absolute top-6 left-8 text-8xl font-serif text-[#B03DFF]/10 pointer-events-none">“</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 text-center md:text-left relative z-10"
              >
                <p className="text-white/85 text-base md:text-xl font-light italic leading-relaxed">
                  {testimonials[currentTestimonial].review}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4 border-t border-white/5 pt-6">
                  {/* User info */}
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#660F56] to-[#B03DFF] flex items-center justify-center text-sm font-bold text-white border border-white/20">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-normal text-sm">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-white/50 text-xs font-light">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>

                  {/* Stars & Buttons */}
                  <div className="flex items-center gap-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        suppressHydrationWarning={true}
                        onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                        className="p-2 border border-glass bg-white/5 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
                        aria-label="Previous Review"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        suppressHydrationWarning={true}
                        onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                        className="p-2 border border-glass bg-white/5 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
                        aria-label="Next Review"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 11. LEAD MAGNET SECTION */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 md:p-12 border border-glass bg-gradient-to-r from-[#17011d] to-[#07011f] overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Ambient glows inside banner */}
            <div className="absolute inset-0 bg-[#B03DFF]/5 filter blur-[35px]" />
            <div className="absolute -right-10 top-0 w-44 h-44 bg-[#660F56]/30 rounded-full filter blur-[40px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3 max-w-xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Complimentary Value Analysis</span>
              <h3 className="text-2xl md:text-3xl font-normal text-white font-display leading-tight">
                Get a Free Technical SEO & Website Audit Worth ₹5,000
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                Discover exact speed friction, mobile responsiveness flaws, core web vitals, and hidden SEO optimization opportunities on your site. Detailed performance audit complete in 24 hours.
              </p>
            </div>

            {/* Input capture */}
            <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {!auditSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleAuditSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-medium">Your Name</label>
                      <input
                        suppressHydrationWarning
                        type="text"
                        required
                        placeholder="John Doe"
                        value={auditName}
                        onChange={(e) => setAuditName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-medium">Your Email</label>
                      <input
                        suppressHydrationWarning
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={auditEmail}
                        onChange={(e) => setAuditEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] transition-all"
                      />
                    </div>
                    <button
                      suppressHydrationWarning
                      type="submit"
                      className="w-full bg-[#B03DFF] hover:bg-[#D9B3FF] text-white hover:text-black font-semibold text-xs py-3 rounded-full uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
                    >
                      Claim Free Audit
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 flex flex-col items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-25D366/20">
                      <CheckCircle2 className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <h4 className="text-white font-normal text-base">Audit Claimed!</h4>
                    <p className="text-white/60 text-xs font-light leading-relaxed max-w-[280px]">
                      Check your inbox at <span className="font-semibold text-white">{auditEmail}</span>. Our technical analyst will contact you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICE QUOTE SECTION */}
      <section className="py-24 relative z-10 px-4 md:px-0">
        <div className="max-w-4xl mx-auto px-8 py-16 lg:px-12 text-center relative rounded-[2rem] border border-[#B03DFF]/40 bg-gradient-to-br from-[#1a0b2e] to-[#050014] shadow-[0_0_80px_-15px_rgba(176,61,255,0.4)] overflow-hidden">
          <div className="absolute inset-0 bg-[#B03DFF]/10 filter blur-[60px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9B3FF]/10 rounded-full filter blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold relative z-10">Custom Pricing</span>
          <h2 className="text-3xl md:text-5xl font-normal text-white mt-4 font-display relative z-10">Get a Custom Quote</h2>
          <p className="text-white/80 text-sm md:text-base font-light mt-6 mb-10 leading-relaxed max-w-2xl mx-auto relative z-10">
            Every project is unique. We provide tailored solutions to match your specific business goals and technical requirements. Drop us a message with your project details, and our team will get back to you with a comprehensive quote.
          </p>
          <div className="relative z-10">
            <CustomButton href="#contact" variant="primary" size="lg">
              Request a Quote
            </CustomButton>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 border-t border-white/5 relative z-10 bg-[#050014]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-normal font-display">Common Queries</span>
            <h2 className="text-3xl md:text-4xl font-normal text-white mt-2 font-display">Frequently Asked Questions</h2>
          </div>

          <Accordion items={faqData} />

        </div>
      </section>

      {/* 12. CONTACT SECTION */}
      <section id="contact" className="py-24 border-t border-white/5 relative z-10 bg-[#050014]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Consultation Desk</span>
            <h2 className="text-3xl md:text-4xl font-normal text-white font-display leading-tight">
              Ready to Spark <br />Digital Innovation?
            </h2>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Have questions about pricing, scopes, or technical fits? Complete the consultation form and receive your scope brief in under 12 hours.
            </p>

            <hr className="border-white/5 my-2" />

            {/* Guarantee badges */}
            <div className="flex flex-col gap-3">
              {[
                "100% Confidential Project Analysis",
                "Complimentary Initial Visual Scope Briefing",
                "Fixed Contracts with Strict Delivery Timelines"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white/65 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#B03DFF]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-glass rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">

            <AnimatePresence mode="wait">
              {!contactSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleContactSubmit}
                  className="flex flex-col gap-5"
                >
                  {formError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-semibold">Your Name *</label>
                      <input
                        suppressHydrationWarning
                        type="text"
                        placeholder="John Doe"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-semibold">Your Email *</label>
                      <input
                        suppressHydrationWarning
                        type="email"
                        placeholder="john@company.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-semibold">Phone Number *</label>
                      <input
                        suppressHydrationWarning
                        type="tel"
                        placeholder="+91 99441 63807"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-semibold">Business Type</label>
                      <select
                        suppressHydrationWarning
                        value={contactBusiness}
                        onChange={(e) => setContactBusiness(e.target.value)}
                        className="w-full bg-[#050014] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#B03DFF] cursor-pointer"
                      >
                        <option value="Startup">Startup / Local business</option>
                        <option value="Retail">Retail / Restaurant</option>
                        <option value="Healthcare">Healthcare / Professional</option>
                        <option value="E-Commerce">E-Commerce Brand</option>
                        <option value="Enterprise">Enterprise Group</option>
                      </select>
                    </div>
                  </div>



                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 font-semibold">Project Scope & Details</label>
                    <textarea
                      suppressHydrationWarning
                      rows={4}
                      placeholder="Please summarize page structures, requirements, specific design choices, reference links..."
                      value={contactDesc}
                      onChange={(e) => setContactDesc(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] resize-none"
                    />
                  </div>

                  <button
                    suppressHydrationWarning
                    type="submit"
                    className="w-full bg-[#B03DFF] hover:bg-[#D9B3FF] text-white hover:text-black font-semibold text-xs py-3.5 rounded-full uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Submit Booking Form
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                    <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="text-white font-normal text-xl font-display">Booking Complete!</h3>
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-[360px]">
                    Hi <span className="font-semibold text-white">{contactName}</span>, your project inquiry has been queued. Our strategist will email you at <span className="font-semibold text-white">{contactEmail}</span> inside 12 hours.
                  </p>
                  <hr className="border-white/5 w-1/3 my-2" />
                  <p className="text-[10px] text-[#D9B3FF] animate-pulse uppercase tracking-wider">Thanks for choosing Maxora Tech Solutions.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

    </div>
  );
}

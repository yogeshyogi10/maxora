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
import Card3D from "@/components/ui/Card3D";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ProjectShowcase from "@/components/ProjectShowcase";
import Accordion from "@/components/ui/Accordion";
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

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditName.trim() && auditEmail.trim()) {
      setAuditSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#B03DFF", "#D9B3FF", "#660F56"]
      });
      setTimeout(() => {
        setAuditSubmitted(false);
        setAuditName("");
        setAuditEmail("");
      }, 6000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!contactName.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!contactEmail.trim() || !contactEmail.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!contactPhone.trim() || contactPhone.length < 8) {
      setFormError("Please enter a valid phone number.");
      return;
    }

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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-tight text-white">
              Crafting Digital <br />
              <span className="text-shine-animated">Experiences</span> <br />
              That Drive Growth.
            </h1>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl font-light">
              Custom Websites, Shopify Stores, WordPress Solutions, UI/UX Design, Digital Marketing, Social Media Management, Poster Design & Digital Branding.
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
                  <span className="text-3xl md:text-4xl font-extrabold font-display text-white">
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

      {/* 2. TRUSTED INDUSTRIES SECTION (Stagger Reveal) */}
      <section className="py-20 border-y border-white/5 bg-[#050014]/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Targeted Domain Expertise</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 font-display">Industries We Specialize In</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {industryIcons.map((ind, index) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-5 rounded-2xl border border-glass bg-white/[0.02] flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:border-[#B03DFF]/30 hover:bg-[#B03DFF]/5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[#B03DFF]/20 group-hover:border-[#B03DFF]/30 transition-all duration-300">
                    <IconComp className="w-5 h-5 text-[#D9B3FF] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">{ind.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
              Transforming Ideas <br />Into Digital Success
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              At Maxora, our mission is to help brands launch and grow online through professionally crafted websites, compelling visual designs, and result-driven digital strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-2xl border border-glass bg-[#0d0724]/20">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  We aim to provide end-to-end solutions — from website development to social media management and SEO — enabling our clients to build credibility, attract customers, and scale their business in the digital world.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-glass bg-[#0d0724]/20">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Our Vision</h4>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  To empower individuals and businesses to establish a strong digital presence by making online growth simple, accessible, and impactful for everyone.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values grid with Stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {[
              { value: "Integrity First", desc: "Transparent timelines and clear flat contracts." },
              { value: "Excellence Driven", desc: "Rigorous checks targeting perfect performance." },
              { value: "High Innovation", desc: "Deploying latest Next.js 15 & React 19 standards." },
              { value: "Client Obsessed", desc: "Dedicated support sprints and active iterations." }
            ].map((v, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-glass bg-white/[0.01] flex flex-col gap-2 hover:border-[#B03DFF]/20 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#B03DFF]/10 flex items-center justify-center text-xs font-bold text-[#D9B3FF] border border-[#B03DFF]/20">
                  {i + 1}
                </div>
                <h4 className="text-white font-bold text-sm mt-2">{v.value}</h4>
                <p className="text-white/50 text-xs font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. SERVICES SECTION (Grid Reveal) */}
      <section className="py-24 border-t border-white/5 bg-[#050014]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Bespoke Offerings</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">Specialized Digital Capabilities</h2>
            <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mt-3">
              We deliver premium digital assets and engineering pipelines tailored to elevate corporate growth.
            </p>
          </div>

          {/* Service Cards Grid with Stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {servicesData.map((cat, idx) => {
              const IconComp = serviceIcons[cat.iconName] || Code2;
              return (
                <motion.div key={cat.id} variants={fadeInUp}>
                  <Card3D className="p-6 flex flex-col gap-5 h-full" onClick={() => { }} role="button">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#660F56] to-[#B03DFF] flex items-center justify-center border border-white/10 shadow-lg">
                        <IconComp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg leading-tight tracking-tight">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="text-white/60 text-xs leading-relaxed font-light">
                      {cat.description}
                    </p>

                    {/* Sub-services list */}
                    <ul className="flex flex-col gap-2.5 mt-2 border-t border-white/5 pt-4">
                      {cat.services.map((sub, sidx) => (
                        <li key={sidx} className="flex items-start gap-2 text-xs text-white/70 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B03DFF] mt-0.5 flex-shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </Card3D>
                </motion.div>
              );
            })}
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
              {processSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 55 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                    className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${isEven ? "md:flex-row-reverse" : ""
                      }`}
                  >
                    {/* Glowing Timeline Connector Node */}
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#050014] border border-[#B03DFF] flex items-center justify-center -translate-x-1/2 z-20">
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full bg-[#D9B3FF]"
                        whileInView={{ scale: [1, 1.35, 1] }}
                        viewport={{ once: false }}
                        transition={{ repeat: Infinity, duration: 2.2 }}
                      />
                    </div>

                    {/* Step Card */}
                    <div className="w-full md:w-[45%] pl-10 md:pl-0">
                      <Card3D className="p-6 md:p-8 bg-glass-card border border-glass hover:border-[#B03DFF]/30 transition-all duration-300">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-[#D9B3FF]">
                          Phase 0{idx + 1}
                        </span>
                        <h3 className="text-white font-extrabold text-xl mt-1.5 mb-3 font-display">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </Card3D>
                    </div>

                    {/* Dummy spacer to align columns in flex rows */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS SECTION (Grid Reveal) */}
      <section id="portfolio" className="py-24 border-t border-white/5 bg-[#050014]/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Creative Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">High-Caliber Case Studies</h2>
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

      {/* 7. WHY CHOOSE MAXORA (Grid Reveal) */}
      <section className="py-24 relative z-10 bg-[#050014]/65">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium font-display">Proven Standards</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">Why Ambitious Brands Choose Us</h2>
            <p className="text-white/60 text-xs md:text-sm font-light mt-3">
              We design and code to the highest technical benchmarks to support enterprise operations.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseData.map((item, idx) => {
              const IconComp = chooseIcons[item.iconName] || Code2;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl border border-glass bg-white/[0.01] hover:bg-[#B03DFF]/5 hover:border-[#B03DFF]/30 transition-all duration-500 flex flex-col gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[#B03DFF]/20 group-hover:border-[#B03DFF]/35 transition-all duration-300">
                    <IconComp className="w-5 h-5 text-[#D9B3FF] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-white font-bold text-base mt-2 group-hover:text-[#D9B3FF] transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed font-light">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* 8. PRICING SECTION (Grid Reveal) */}
      <section className="py-24 border-y border-white/5 bg-[#050014]/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Transparent Pricing</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">Plans Fit For Your Ambition</h2>
            <p className="text-white/60 text-xs md:text-sm font-light mt-3">
              No hidden fees, flat rates, and clear contract limits.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`relative rounded-3xl p-6 flex flex-col justify-between border transition-all duration-500 ${plan.isPopular
                  ? "border-[#B03DFF] bg-[#B03DFF]/5 shadow-[0_0_30px_rgba(176,61,255,0.15)] md:scale-105"
                  : "border-glass bg-white/[0.01] hover:border-[#B03DFF]/20"
                  }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B03DFF] text-white text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full border border-white/20 shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-white font-extrabold text-lg mt-2">{plan.name}</h3>
                  <p className="text-white/50 text-xs mt-1.5 font-light min-h-[40px] leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-extrabold font-display text-white">{plan.price}</span>
                    {plan.price !== "Custom Quote" && <span className="text-white/40 text-xs font-light"> onwards</span>}
                  </div>

                  <hr className="border-white/5 my-4" />

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5">
                    {plan.features.map((feat, fidx) => {
                      const isHeader = ["🎨", "📱", "📈", "🤝", "⚙️", "⏱️", "🛠️"].some(emoji => feat.startsWith(emoji));
                      return isHeader ? (
                        <li key={fidx} className={`text-[13px] font-bold text-white mt-2 mb-0.5 ${fidx !== 0 ? 'border-t border-white/5 pt-3' : ''}`}>
                          {feat}
                        </li>
                      ) : (
                        <li key={fidx} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B3FF] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-8">
                  <CustomButton
                    href="#contact"
                    variant={plan.isPopular ? "primary" : "outline"}
                    className="w-full text-center text-xs py-3"
                  >
                    {plan.ctaText}
                  </CustomButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 8b. WEBSITE DEVELOPMENT PRICING SECTION (Grid Reveal) */}
      <section className="py-24 border-b border-white/5 bg-[#050014]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Website Development Pricing</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">Dedicated Web Solutions</h2>
            <p className="text-white/60 text-xs md:text-sm font-light mt-3">
              From landing pages to complex corporate systems.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {webDevPricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`relative rounded-3xl p-6 flex flex-col justify-between border transition-all duration-500 ${plan.isPopular
                  ? "border-[#B03DFF] bg-[#B03DFF]/5 shadow-[0_0_30px_rgba(176,61,255,0.15)] md:scale-105"
                  : "border-glass bg-white/[0.01] hover:border-[#B03DFF]/20"
                  }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B03DFF] text-white text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full border border-white/20 shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-white font-extrabold text-lg mt-2">{plan.name}</h3>
                  <p className="text-white/50 text-xs mt-1.5 font-light min-h-[40px] leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-extrabold font-display text-white">{plan.price}</span>
                    {plan.price !== "Custom Quote" && <span className="text-white/40 text-xs font-light"> onwards</span>}
                  </div>

                  <hr className="border-white/5 my-4" />

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5">
                    {plan.features.map((feat, fidx) => {
                      const isHeader = ["🎨", "📱", "📈", "🤝", "⚙️", "⏱️", "🛠️"].some(emoji => feat.startsWith(emoji));
                      return isHeader ? (
                        <li key={fidx} className={`text-[13px] font-bold text-white mt-2 mb-0.5 ${fidx !== 0 ? 'border-t border-white/5 pt-3' : ''}`}>
                          {feat}
                        </li>
                      ) : (
                        <li key={fidx} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B3FF] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-8">
                  <CustomButton
                    href="#contact"
                    variant={plan.isPopular ? "primary" : "outline"}
                    className="w-full text-center text-xs py-3"
                  >
                    {plan.ctaText}
                  </CustomButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 9. TESTIMONIAL SECTION */}
      <section className="py-24 relative z-10 bg-[#050014]/60">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">Client Endorsements</h2>
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
                      <h4 className="text-white font-bold text-sm">{testimonials[currentTestimonial].name}</h4>
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

      {/* 10. FAQ SECTION */}
      <section className="py-24 border-t border-white/5 relative z-10 bg-[#050014]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold font-display">Common Queries</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-display">Frequently Asked Questions</h2>
          </div>

          <Accordion items={faqData} />

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
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display leading-tight">
                Get a Free Website Audit Worth ₹5,000
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                Discover exact speed friction, broken links, mobile responsiveness flaws, and hidden SEO optimization opportunities on your site. Complete in 24 hours.
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
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={auditEmail}
                        onChange={(e) => setAuditEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] transition-all"
                      />
                    </div>
                    <button
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
                    <h4 className="text-white font-bold text-base">Audit Claimed!</h4>
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

      {/* 12. CONTACT SECTION */}
      <section id="contact" className="py-24 border-t border-white/5 relative z-10 bg-[#050014]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-widest text-[#D9B3FF] font-semibold">Consultation Desk</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
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
                      rows={4}
                      placeholder="Please summarize page structures, requirements, specific design choices, reference links..."
                      value={contactDesc}
                      onChange={(e) => setContactDesc(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] resize-none"
                    />
                  </div>

                  <button
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
                  <h3 className="text-white font-extrabold text-xl font-display">Booking Complete!</h3>
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

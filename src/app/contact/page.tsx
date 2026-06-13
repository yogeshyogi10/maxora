"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("Startup");
  const [budget, setBudget] = useState("₹20,000 - ₹50,000");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#B03DFF", "#D9B3FF", "#660F56", "#25D366"]
    });

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
    }, 6000);
  };

  return (
    <div className="py-12 md:py-20 relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B3FF]" />
          <span className="text-[10px] uppercase tracking-widest text-[#D9B3FF] font-semibold">Consultation Suite</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white leading-tight">
          Let's Engineer <br />
          <span className="text-gradient-primary">Digital Prestige</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-4">
          Connect with our brand strategists and senior developers to map out your digital requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-8">
        
        {/* Contact Info Sidebar (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="p-8 rounded-3xl border border-glass bg-[#0d0724]/40 flex flex-col gap-6">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#B03DFF] pl-3">Agency Details</h3>
            
            <ul className="flex flex-col gap-5 text-sm text-white/70 font-light">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B03DFF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/45 block">General Inquiries</span>
                  <a href="mailto:maxoratechsolutions@gmail.com" className="hover:text-white transition-colors">maxoratechsolutions@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B03DFF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/45 block">Direct Helpline</span>
                  <a href="tel:+919944163807" className="hover:text-white transition-colors">+91 99441 63807</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B03DFF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/45 block">Corporate Office</span>
                  <span>Coimbatore,Tamilnadu,India</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B03DFF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/45 block">Office Hours</span>
                  <span>Monday - Saturday | 10:00 AM - 7:00 PM</span>
                </div>
              </li>
            </ul>

            <hr className="border-white/5" />

            {/* Social channels */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-wider text-white/45 block">Follow Channels</span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full border border-white/5 hover:border-[#B03DFF]/30 hover:bg-[#B03DFF]/10 text-white/60 hover:text-[#D9B3FF] transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full border border-white/5 hover:border-[#B03DFF]/30 hover:bg-[#B03DFF]/10 text-white/60 hover:text-[#D9B3FF] transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel (Right) */}
        <div className="lg:col-span-7 bg-[#0d0724]/20 border border-glass rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="flex flex-col gap-6"
              >
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-bold">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-bold">Your Email *</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-bold">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 99441 63807"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-bold">Business Segment</label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-[#050014] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#B03DFF] cursor-pointer"
                    >
                      <option value="Startup">Startup / Local brand</option>
                      <option value="Retail">Retail / Restaurant</option>
                      <option value="Healthcare">Healthcare / Biotech</option>
                      <option value="E-Commerce">E-Commerce Storefront</option>
                      <option value="Enterprise">Enterprise Portfolio</option>
                    </select>
                  </div>
                </div>



                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-bold">Project Details</label>
                  <textarea
                    rows={5}
                    placeholder="Briefly state page goals, content ready parameters, reference domains..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#B03DFF] focus:ring-1 focus:ring-[#B03DFF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B03DFF] hover:bg-[#D9B3FF] text-white hover:text-black font-semibold text-xs py-3.5 rounded-full uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center gap-4 animate-[pulse_3s_infinite]"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                  <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-white font-extrabold text-xl font-display">Inquiry Registered!</h3>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-[340px]">
                  Hi <span className="font-semibold text-white">{name}</span>, your request has been logged. Our technology strategists will contact you at <span className="font-semibold text-white">{email}</span> inside 12 hours.
                </p>
                <hr className="border-white/5 w-1/3 my-2" />
                <p className="text-[10px] text-[#D9B3FF] uppercase tracking-wider font-light">Thanks for choosing Maxora Tech Solutions.</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan/5 to-blue-500/5 blur-3xl rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl flex flex-col items-center text-center">
        
        {/* Early Access Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C8E0]/30 bg-[#00C8E0]/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-xs font-semibold text-cyan uppercase tracking-wider">
            Now Accepting Early Access
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] md:text-xs font-medium text-muted tracking-[0.3em] uppercase mb-6"
        >
          The Right AI. Every Time.
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl md:text-8xl leading-[1.1] text-foreground mb-8"
        >
          One Prompt.<br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#00C8E0] to-[#1A5FD4]">Infinite</span> Intelligence.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Orrin AI automatically detects your task, selects the best model from the world&apos;s leading AI systems, and delivers perfect output — with full transparency.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <WaitlistForm />
        </motion.div>

      </div>
    </section>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";

export const ExplanationCard = () => {
  return (
    <section id="features" className="py-32 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
              </svg>
              <span className="text-xs font-bold tracking-widest text-cyan uppercase">
                Hero Feature
              </span>
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl mb-8">
              The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">Explanation Card</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every response comes with a transparent breakdown — what task Orrin detected, which model it chose, why it chose it, and what it cost. No black boxes. Ever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Subtle glow behind the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-transparent blur-[80px] -z-10" />

            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-bold tracking-widest text-cyan uppercase">Explanation</span>
                <span className="text-xs text-white/30 font-mono">#a1f9</span>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Task detected</span>
                  <span className="font-semibold text-white">Long-form creative writing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Model selected</span>
                  <span className="font-semibold text-white">Claude Opus 4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Reason</span>
                  <span className="font-semibold text-white">Best nuance & narrative quality</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Speed</span>
                  <span className="font-semibold text-white">2.3s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Cost</span>
                  <span className="font-semibold text-white">$0.018</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

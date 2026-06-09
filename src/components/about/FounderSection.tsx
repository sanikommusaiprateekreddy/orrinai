"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const founders = [
  {
    name: "Sai Prateek",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/saiprateekreddy-sanikommu-1142a73b4/",
    desc: "Driving the vision for a transparent and intelligent orchestration layer across the world's best AI models.",
  },
  {
    name: "Atmakur Akhil",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/atmakurakhil/",
    desc: "Engineering the core architecture to ensure seamless routing, speed, and reliability at scale.",
  },
];

export const FounderSection = () => {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-bold tracking-[0.3em] text-cyan uppercase mb-6"
          >
            FOUNDERS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl mb-6"
          >
            Meet the Team Behind Orrin AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground max-w-2xl text-center leading-relaxed"
          >
            Building the future of intelligent AI orchestration with simplicity, transparency, and premium user experience at the core.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-border p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan/30 flex flex-col"
            >
              {/* Subtle ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/0 via-transparent to-transparent opacity-0 group-hover:from-cyan/5 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />

              <div className="flex justify-end items-start mb-8 relative z-10">
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full text-foreground/50 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-1">{founder.name}</h3>
                <p className="text-sm font-medium tracking-wide text-cyan uppercase mb-6">
                  {founder.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";

const models = [
  { name: "GPT-4o", provider: "OpenAI", desc: "Best for complex reasoning and speed." },
  { name: "Claude Opus 4", provider: "Anthropic", desc: "Best for deep analysis and narrative writing." },
  { name: "Claude Sonnet 4", provider: "Anthropic", desc: "Excellent balance of speed and intelligence." },
  { name: "Llama 3 70B", provider: "Meta", desc: "Fast open-source alternative for standard tasks." },
];

export const ModelsSection = () => {
  return (
    <section id="models" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mb-4"
          >
            Access the World&apos;s Best Models
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            No need for multiple subscriptions. Orrin routes your prompt to the perfect model instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <GlowCard className="h-full bg-white flex flex-col items-center text-center">
                <span className="text-xs font-bold text-cyan tracking-widest uppercase mb-3 block">
                  {model.provider}
                </span>
                <h3 className="text-xl font-semibold mb-3">{model.name}</h3>
                <p className="text-muted-foreground text-sm">{model.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

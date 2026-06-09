"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Scale } from "lucide-react";

const features = [
  {
    title: "Smart Model Routing",
    desc: "Scores every model on quality, speed and cost for each task. Routes automatically. No settings to learn.",
    icon: <Brain className="w-5 h-5 text-cyan-600" />,
  },
  {
    title: "Prompt Optimizer",
    desc: "Raw input rewritten into a structured prompt automatically. You type casually. The model receives perfection.",
    icon: <Sparkles className="w-5 h-5 text-cyan-600" />,
  },
  {
    title: "Compare Mode",
    desc: "Side-by-side outputs from two models simultaneously. Pick the best result.",
    icon: <Scale className="w-5 h-5 text-cyan-600" />,
  },
];

export const AdvancedFeatures = () => {
  return (
    <section className="py-32 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mb-4"
          >
            Built for Perfection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Every feature is designed to eliminate friction and maximize output quality.
          </motion.p>
        </div>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-white border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

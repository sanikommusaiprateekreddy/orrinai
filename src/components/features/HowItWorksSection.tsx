"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";

const steps = [
  {
    title: "1. You Type Anything",
    desc: "Enter a prompt, upload a document, or ask a complex question. No need to select a model beforehand.",
  },
  {
    title: "2. Orrin Analyzes & Routes",
    desc: "Our engine evaluates the nuance, complexity, and type of your task to instantly select the perfect AI.",
  },
  {
    title: "3. You Get the Best Output",
    desc: "Receive the highest quality response possible, optimized for speed and cost, with full transparency.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mb-4"
          >
            Intelligence, Automated.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A seamless workflow designed to give you the perfect result, every single time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
            >
              <GlowCard className="h-full group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

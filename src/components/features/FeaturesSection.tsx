"use client";
import React from "react";
import { ExplanationCard } from "./ExplanationCard";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <div className="flex flex-col">
      <ExplanationCard />
      
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl mb-6"
          >
            Total Control, Zero Complexity.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
          >
            Need an answer instantly? Or need a deeply researched essay? Switch modes on the fly. Orrin adapts to your priorities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

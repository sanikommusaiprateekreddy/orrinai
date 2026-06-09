"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const modes = ["Fast", "Budget", "Quality", "Auto"];

export const ModeToggle = () => {
  const [activeMode, setActiveMode] = useState("Auto");

  return (
    <div className="flex items-center p-1.5 bg-secondary/50 backdrop-blur-md border border-border rounded-full w-max mx-auto shadow-sm">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => setActiveMode(mode)}
          className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeMode === mode ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
          }`}
        >
          {activeMode === mode && (
            <motion.div
              layoutId="mode-pill"
              className="absolute inset-0 bg-background shadow-sm border border-border/50 rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{mode}</span>
        </button>
      ))}
    </div>
  );
};

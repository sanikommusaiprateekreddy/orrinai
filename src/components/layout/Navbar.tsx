"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-border/50 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo SVG is horizontal, adjust dimensions to fit */}
          <Image
            src="/logo.svg"
            alt="Orrin AI Logo"
            width={120}
            height={50}
            className="w-auto h-8"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link href="#how-it-works" className="hover:text-cyan transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="hover:text-cyan transition-colors">
            Features
          </Link>
          <Link href="#models" className="hover:text-cyan transition-colors">
            Models
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior: 'smooth'})}>
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

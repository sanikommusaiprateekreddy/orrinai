"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Orrin AI Logo"
            width={100}
            height={40}
            className="w-auto h-6 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        
        <div className="text-sm text-muted-foreground flex gap-6">
          <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Orrin AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

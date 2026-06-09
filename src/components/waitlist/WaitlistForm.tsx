"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";

export const WaitlistForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!name.trim() || !email.trim()) {
      setError("Please fill out both name and email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const { error: dbError } = await supabase
        .from("Waitlist")
        .insert([{ name: name.trim(), email: email.trim() }]);

      if (dbError) {
        console.error("Supabase Error:", dbError);
        
        // Handle duplicate email (Postgres unique constraint violation error code 23505)
        if (dbError.code === "23505" || dbError.message.toLowerCase().includes("duplicate")) {
          setError("This email is already on the waitlist!");
        } else {
          // Display the actual error for debugging
          setError(`Error: ${dbError.message || dbError.details || "Failed to insert"}`);
        }
        return;
      }

      setSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-background border border-border rounded-2xl max-w-md w-full mx-auto animate-in fade-in zoom-in duration-500">
        <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">You&apos;re on the list!</h3>
        <p className="text-muted-foreground text-center text-sm">
          We&apos;ll notify you as soon as Orrin AI is ready for you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Your name"
        required
        disabled={loading}
        className="bg-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Your email"
        required
        disabled={loading}
        className="bg-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      {error && (
        <p className="text-sm text-red-500 font-medium text-center animate-in fade-in">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full bg-[#0D0D0D] text-white hover:bg-black/90 group"
      >
        {loading ? "Joining..." : "Get Early Access"}
        {!loading && (
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        )}
      </Button>
    </form>
  );
};

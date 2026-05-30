"use client";

import { motion } from "framer-motion";
import { DNARibbon } from "@/components/3d/DNARibbon";
import { Play } from "lucide-react";

// Floating element component
const FloatingElement = ({ delay, duration, x, y }: { delay: number; duration: number; x: number; y: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ delay, duration: 0.8 }}
    className="absolute w-2 h-2 rounded-full bg-accent/30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
    }}
  >
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="w-full h-full"
    />
  </motion.div>
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating elements background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={i * 0.1}
            duration={4 + (i % 2)}
            x={10 + (i % 3) * 20}
            y={20 + (i % 5) * 15}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <FloatingElement
            key={`right-${i}`}
            delay={i * 0.1}
            duration={4 + (i % 2)}
            x={70 + (i % 3) * 10}
            y={30 + (i % 5) * 12}
          />
        ))}
      </div>

      <DNARibbon />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20 backdrop-blur-sm shadow-[0_0_15px_rgba(255,91,138,0.2)]">
            TinyVitals — Track. Grow. Protect.
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Every Child's <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-secondary to-accent bg-[length:200%_auto] animate-gradient">Health Story.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 font-medium mb-8">
            Organized. Protected. Intelligent.
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Track growth, vaccinations, symptoms, milestones, and medical records — all in one AI-powered health companion for modern parents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://apps.apple.com/us/app/tinyvitals-track-grow-protect/id6759552466"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
          >
            Download on App Store
          </a>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-background border border-border text-foreground font-medium hover:bg-foreground/5 active:scale-95 transition-all flex items-center justify-center gap-2 group">
            <Play size={18} className="text-accent group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
}

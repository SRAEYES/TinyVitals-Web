"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stories = [
  {
    title: "Track Growth",
    description: "Monitor height, weight, and development milestones with interactive charts aligned with WHO standards.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Stay Vaccinated",
    description: "Never miss a dose. Smart reminders based on WHO and IAP guidelines keep your child protected.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Capture Symptoms",
    description: "Log symptoms visually to create doctor-ready reports instantly.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Store Medical Records",
    description: "A secure vault for PDFs, prescriptions, and lab reports, accessible anytime, anywhere.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Understand with AI",
    description: "Apple Intelligence inspired summaries transform complex medical jargon into instant understanding.",
    color: "from-accent/20 to-secondary/20"
  }
];

export function ScrollStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-background h-[500vh]">
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        
        {/* Left Side: Dynamic Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 h-1/2 lg:h-full relative z-10">
          <div className="relative w-full max-w-lg">
            {stories.map((story, index) => {
              const start = index / stories.length;
              const end = (index + 1) / stories.length;
              
              // Create strictly monotonically increasing offset arrays within 0-1 range
              const opacityOffsets = [
                Math.max(0, start - 0.05),
                start,
                end,
                Math.min(1, end + 0.05)
              ];
              
              // Calculate opacity and y position based on scroll progress
              const opacity = useTransform(
                scrollYProgress,
                opacityOffsets,
                [0, 1, 1, 0]
              );
              const y = useTransform(
                scrollYProgress,
                opacityOffsets,
                [50, 0, 0, -50]
              );

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    {story.title}
                  </h2>
                  <p className="text-xl text-foreground/70 leading-relaxed">
                    {story.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Parallax App UI representation */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center relative bg-card/30 lg:bg-transparent backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-border/50">
          <div className="relative w-64 h-[500px] md:w-80 md:h-[600px] rounded-[3rem] border-8 border-foreground/10 overflow-hidden shadow-2xl bg-card">
            {/* Phone Screen Notch */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
              <div className="w-1/3 h-full bg-foreground/10 rounded-b-xl backdrop-blur-md" />
            </div>

            {stories.map((story, index) => {
              const start = index / stories.length;
              const end = (index + 1) / stories.length;
              
              // Create strictly monotonically increasing offset arrays within 0-1 range
              const offsets = [
                Math.max(0, start - 0.1),
                start,
                end,
                Math.min(1, end + 0.1)
              ];
              
              const y = useTransform(
                scrollYProgress,
                offsets,
                [100, 0, 0, -100]
              );
              
              const scale = useTransform(
                scrollYProgress,
                offsets,
                [0.9, 1, 1, 0.9]
              );
              
              const opacity = useTransform(
                scrollYProgress,
                offsets,
                [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={`screen-${index}`}
                  style={{ opacity, y, scale }}
                  className={`absolute inset-0 bg-linear-to-br ${story.color} p-6 pt-16 flex flex-col gap-4`}
                >
                  {/* Abstract UI Elements */}
                  <div className="w-full h-32 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 shadow-sm" />
                  <div className="flex gap-4">
                    <div className="w-1/2 h-24 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 shadow-sm" />
                    <div className="w-1/2 h-24 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 shadow-sm" />
                  </div>
                  <div className="w-full h-48 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 shadow-sm mt-auto" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

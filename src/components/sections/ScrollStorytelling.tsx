"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    title: "Track Growth",
    description: "Monitor height, weight, and development milestones with interactive charts aligned with WHO standards.",
    image: "/Home.jpeg"
  },
  {
    title: "Stay Vaccinated",
    description: "Never miss a dose. Smart reminders based on WHO and IAP guidelines keep your child protected.",
    image: "/Vaccination.jpeg"
  },
  {
    title: "Capture Symptoms",
    description: "Log symptoms visually to create doctor-ready reports instantly.",
    image: "/Symptomps.jpeg"
  },
  {
    title: "Store Medical Records",
    description: "A secure vault for PDFs, prescriptions, and lab reports, accessible anytime, anywhere.",
    image: "/Record.jpeg"
  }
];

export function ScrollStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-background h-[500vh] py-20">
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        
        {/* Left Side: Dynamic Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 h-1/2 lg:h-full relative z-10">
          <div className="relative w-full max-w-lg h-96">
            {stories.map((story, index) => {
              const itemHeight = 1 / stories.length;
              const scrollStart = index * itemHeight;
              const scrollEnd = (index + 1) * itemHeight;

              const opacity = useTransform(
                scrollYProgress,
                [scrollStart - 0.1, scrollStart, scrollEnd, scrollEnd + 0.1],
                [0, 1, 1, 0]
              );
              
              const y = useTransform(
                scrollYProgress,
                [scrollStart - 0.1, scrollStart, scrollEnd, scrollEnd + 0.1],
                [40, 0, 0, -40]
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
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {story.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: App Screenshots */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center relative">
          <div className="relative w-72 h-[540px] md:w-80 md:h-[600px] rounded-[3rem] border-8 border-foreground/20 overflow-hidden shadow-2xl bg-card flex-shrink-0">
            {/* Phone Screen Notch */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
              <div className="w-40 h-full bg-foreground rounded-b-3xl" />
            </div>

            {stories.map((story, index) => {
              const itemHeight = 1 / stories.length;
              const scrollStart = index * itemHeight;
              const scrollEnd = (index + 1) * itemHeight;

              const opacity = useTransform(
                scrollYProgress,
                [scrollStart - 0.1, scrollStart, scrollEnd, scrollEnd + 0.1],
                [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={`screen-${index}`}
                  style={{ opacity }}
                  className="absolute inset-0"
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 320px"
                    priority={index === 0}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

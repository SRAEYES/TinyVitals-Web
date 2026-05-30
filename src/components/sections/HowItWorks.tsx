"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { number: "01", title: "Create Child Profile", description: "Start by setting up your child's profile with basic information and health details." },
  { number: "02", title: "Track Growth", description: "Log height and weight regularly to track development against WHO standards." },
  { number: "03", title: "Manage Vaccinations", description: "View personalized vaccination schedules and receive smart reminders." },
  { number: "04", title: "Log Symptoms", description: "Record symptoms visually and build a comprehensive health timeline." },
  { number: "05", title: "Store Records", description: "Securely upload and organize medical documents in one place." },
  { number: "06", title: "Get AI Insights", description: "Receive intelligent summaries and actionable health recommendations." },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70">
            Six simple steps to complete child health management.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-accent/30 via-secondary/30 to-accent/30 hidden lg:block transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className={`flex gap-8 items-start lg:items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? "lg:text-right" : ""}`}>
                  <div className="inline-block">
                    <div className="text-accent font-bold text-xl mb-2">{step.number}</div>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-foreground/70 max-w-sm">{step.description}</p>
                  </div>
                </div>

                {/* Circle Node */}
                <div className="relative">
                  <motion.div
                    animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center shadow-[0_0_20px_rgba(255,91,138,0.3)]"
                  >
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

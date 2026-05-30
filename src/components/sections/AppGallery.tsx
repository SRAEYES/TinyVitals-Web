"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const appScreens = [
  { title: "Growth Tracking", subtitle: "Interactive charts and milestones" },
  { title: "Vaccination Manager", subtitle: "Smart scheduling and reminders" },
  { title: "Symptom Logger", subtitle: "Visual tracking and reports" },
  { title: "Medical Records", subtitle: "Secure cloud vault" },
  { title: "AI Summaries", subtitle: "Instant health insights" },
  { title: "Multi-Child", subtitle: "Manage all children in one app" },
];

export function AppGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            App Gallery
          </h2>
          <p className="text-lg text-foreground/70">
            Explore the beautiful interface of TinyVitals. Available on iPhone and iPad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appScreens.map((screen, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/30 transition-colors bg-gradient-to-br from-accent/10 to-secondary/10 shadow-xl">
                {/* Phone Frame */}
                <div className="absolute inset-6 rounded-2xl bg-card border-2 border-foreground/10 overflow-hidden shadow-inner">
                  <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50 bg-foreground/5">
                    <div className="w-1/3 h-full bg-foreground/20 rounded-b-lg" />
                  </div>
                  
                  <div className="absolute inset-0 pt-8 flex flex-col items-center justify-center space-y-4 p-4 overflow-hidden">
                    <div className="w-full h-20 rounded-xl bg-gradient-to-r from-accent/20 to-secondary/20 animate-pulse" />
                    <div className="space-y-3 w-full">
                      <div className="h-3 bg-foreground/10 rounded-full w-3/4 animate-pulse" />
                      <div className="h-3 bg-foreground/10 rounded-full w-full animate-pulse" />
                      <div className="h-3 bg-foreground/10 rounded-full w-2/3 animate-pulse" />
                    </div>
                    <div className="w-full h-24 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20 mt-4 animate-pulse" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{screen.title}</h3>
                <p className="text-foreground/60 text-sm">{screen.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <a
            href="https://apps.apple.com/us/app/tinyvitals-track-grow-protect/id6759552466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,91,138,0.3)]"
          >
            Download on App Store
          </a>
        </motion.div>
      </div>
    </section>
  );
}

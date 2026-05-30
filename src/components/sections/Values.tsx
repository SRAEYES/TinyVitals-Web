"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lock, Accessibility, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Building the future of pediatric healthcare through cutting-edge technology and AI.",
    accentColor: "text-accent"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Privacy",
    description: "Designed with security first. Your child's data is sacred and always protected.",
    accentColor: "text-secondary"
  },
  {
    icon: <Accessibility className="w-8 h-8" />,
    title: "Accessibility",
    description: "Simple for every parent. Intuitive design that works for everyone.",
    accentColor: "text-accent"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Reliability",
    description: "Never miss what matters. Consistent, dependable service you can trust.",
    accentColor: "text-secondary"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Care",
    description: "Built with families in mind. Every feature designed for real-world parenting.",
    accentColor: "text-accent"
  },
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Our Values
          </h2>
          <p className="text-lg text-foreground/70">
            What drives everything we build at TinyVitals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-card/50 border border-border/50 h-full overflow-hidden hover:bg-card hover:border-border transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full ${value.accentColor} flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

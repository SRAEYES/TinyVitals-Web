"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lock, Accessibility, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Building the future of pediatric healthcare through cutting-edge technology and AI.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Privacy",
    description: "Designed with security first. Your child's data is sacred and always protected.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Accessibility className="w-8 h-8" />,
    title: "Accessibility",
    description: "Simple for every parent. Intuitive design that works for everyone.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Reliability",
    description: "Never miss what matters. Consistent, dependable service you can trust.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Care",
    description: "Built with families in mind. Every feature designed for real-world parenting.",
    color: "from-red-500 to-pink-500"
  },
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative z-10">
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
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-10 rounded-3xl bg-card border border-border/50 h-full overflow-hidden hover:border-accent/30 transition-colors">
                <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-linear-to-br from-white/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${value.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

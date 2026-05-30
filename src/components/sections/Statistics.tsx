"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 24, suffix: "/7", label: "Always Available" },
  { value: 256, suffix: "-bit", label: "Encryption Standard" },
  { value: 100, suffix: "%", label: "HIPAA Compliant" },
  { value: 50, suffix: "ms", label: "Average Response Time" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

export function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors h-full">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {isInView ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <>0{stat.suffix}</>
                  )}
                </div>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

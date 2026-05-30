"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "TinyVitals has completely changed how I manage my kids' health. Everything is organized in one place.",
    author: "Sarah M.",
    role: "Parent of 2",
  },
  {
    quote: "The vaccination reminders are lifesaving. I never miss an appointment anymore.",
    author: "James P.",
    role: "Parent of 3",
  },
  {
    quote: "As a pediatrician, I love that parents can bring their complete health records to appointments.",
    author: "Dr. Emily R.",
    role: "Pediatrician",
  },
  {
    quote: "The AI summaries help me understand medical reports without feeling lost. Highly recommended!",
    author: "Michelle K.",
    role: "Parent of 1",
  },
  {
    quote: "Finally, a health app designed with real parents in mind. It's intuitive and beautiful.",
    author: "David L.",
    role: "Parent of 2",
  },
  {
    quote: "Security and privacy are top-notch. I trust TinyVitals with my children's most sensitive data.",
    author: "Lisa T.",
    role: "Parent of 1",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current.querySelector("[data-testimonials-container]");
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      if (isAutoPlay) {
        scrollPos += 1;
        container.scrollLeft = scrollPos;

        if (scrollPos >= container.scrollWidth - container.clientWidth) {
          scrollPos = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => setIsAutoPlay(false);
    const handleMouseLeave = () => setIsAutoPlay(true);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isAutoPlay]);

  return (
    <section ref={ref} className="py-32 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Loved by Parents Everywhere
          </h2>
          <p className="text-lg text-foreground/70">
            Real feedback from the families who trust TinyVitals every day.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-20 pointer-events-none" />

        <div
          data-testimonials-container
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-96"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border/50 h-full hover:border-accent/30 transition-colors group">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-lg leading-relaxed mb-8 text-foreground/90">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border/50 pt-6">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div[data-testimonials-container]::-webkit-scrollbar {
          display: none;
        }
        div[data-testimonials-container] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

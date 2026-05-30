"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const appScreens = [
  { title: "Growth Tracking", subtitle: "Interactive charts and milestones", image: "/tracker.jpeg" },
  { title: "Vaccination Manager", subtitle: "Smart scheduling and reminders", image: "/Vaccination.jpeg" },
  { title: "Symptom Logger", subtitle: "Visual tracking and reports", image: "/Symptomps.jpeg" },
  { title: "Medical Records", subtitle: "Secure cloud vault", image: "/Record.jpeg" },
  { title: "Milestones", subtitle: "Developmental tracking", image: "/milestones.jpeg" },
  { title: "Multi-Child", subtitle: "Manage all children in one app", image: "/multiChildProfile.jpeg" },
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
            Explore the beautiful interface of TinyVitals. Available on iPhone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appScreens.map((screen, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -15 }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all bg-card shadow-xl">
                {/* Phone Frame Background */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-secondary/5" />
                
                {/* Actual App Screenshot */}
                <Image
                  src={screen.image}
                  alt={screen.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100%, 400px"
                />

                {/* Phone Frame Decorative Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                  <div className="w-1/3 h-full bg-foreground rounded-b-2xl" />
                </div>
                
                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent flex items-end p-6"
                >
                  <div className="text-white">
                    <h3 className="text-lg font-semibold mb-1">{screen.title}</h3>
                    <p className="text-white/80 text-sm">{screen.subtitle}</p>
                  </div>
                </motion.div>
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

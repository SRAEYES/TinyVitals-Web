"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LineChart, Syringe, Activity, FileText, Brain, Mic, Users } from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-6 h-6 text-accent" />,
    title: "Growth Tracking",
    description: "Interactive growth charts for height, weight, and development.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    icon: <Syringe className="w-6 h-6 text-secondary" />,
    title: "Vaccination Management",
    description: "WHO + IAP aligned schedules. Smart reminders so you never miss a vaccine.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: <Activity className="w-6 h-6 text-success" />,
    title: "Symptom Timeline",
    description: "Visual symptom tracking to generate doctor-ready reports instantly.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-500" />,
    title: "Medical Records Vault",
    description: "Secure storage for PDFs, prescriptions, and lab reports.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    title: "AI Medical Summaries",
    description: "Apple Intelligence inspired summaries for instant understanding.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: <Mic className="w-6 h-6 text-orange-500" />,
    title: "Siri Integration",
    description: "\"Hey Siri, check my child's vaccines.\" Voice-first healthcare.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-500" />,
    title: "Multi Child Management",
    description: "Effortlessly manage profiles for multiple children from a single account.",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
];

export function FeatureShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-32 bg-background relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need. <br />
            <span className="text-foreground/50">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-foreground/70">
            A comprehensive suite of tools designed to give parents complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 p-8 flex flex-col justify-between group hover:border-accent/30 transition-colors ${feature.colSpan}`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm md:text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

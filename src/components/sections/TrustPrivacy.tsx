"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Cloud, Shield, Users, Zap, Eye } from "lucide-react";

const trustFeatures = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Privacy First",
    description: "Your child's data is encrypted end-to-end with industry-leading security standards."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Secure Cloud Storage",
    description: "SOC 2 compliant infrastructure ensures your data is always safe and accessible."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Encrypted Records",
    description: "All medical records are encrypted at rest and in transit with military-grade protocols."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI Summaries",
    description: "Privacy-focused summaries generated locally without exposing sensitive data."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Role Based Access",
    description: "Control who can access what with granular permission settings for family members."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Secure Authentication",
    description: "Biometric and multi-factor authentication keep your account protected."
  },
];

export function TrustPrivacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Your Child's Data <br />
            <span className="text-foreground/50">Belongs To You</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Built on Apple-level security principles. Your privacy is our top priority, not a feature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors h-full">
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm"
        >
          <p className="text-center text-foreground/80">
            <span className="font-semibold text-accent">HIPAA Compliant • GDPR Certified • SOC 2 Type II</span>
            <br />
            <span className="text-sm text-foreground/60 mt-2 block">
              TinyVitals adheres to the highest standards of healthcare data protection and privacy regulations.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

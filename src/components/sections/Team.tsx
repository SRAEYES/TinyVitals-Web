"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const team = [
  {
    role: "iOS Architecture Lead",
    description: "Building the foundation for a responsive, scalable pediatric health platform.",
    initials: "IA",
    socials: [
      { icon: "GH", href: "#", label: "GitHub" },
      { icon: "LI", href: "#", label: "LinkedIn" },
      { icon: "TW", href: "#", label: "Twitter" },
    ]
  },
  {
    role: "Backend & Infrastructure",
    description: "Ensuring secure, encrypted, and reliable data handling for child health records.",
    initials: "BI",
    socials: [
      { icon: "GH", href: "#", label: "GitHub" },
      { icon: "LI", href: "#", label: "LinkedIn" },
      { icon: "TW", href: "#", label: "Twitter" },
    ]
  },
  {
    role: "UI/UX & Quality Assurance",
    description: "Crafting delightful experiences that parents and healthcare providers love.",
    initials: "UX",
    socials: [
      { icon: "GH", href: "#", label: "GitHub" },
      { icon: "LI", href: "#", label: "LinkedIn" },
      { icon: "TW", href: "#", label: "Twitter" },
    ]
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Meet The Team
          </h2>
          <p className="text-lg text-foreground/70">
            Dedicated to building the future of pediatric healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-colors h-full">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {member.initials}
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-semibold mb-3">{member.role}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{member.description}</p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    {member.socials.map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-background/50 border border-border/50 flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 transition-colors text-xs font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Activity } from "lucide-react";

export function Navigation() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-md border-b border-white/10 shadow-sm" />
      
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-accent to-secondary flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,91,138,0.5)] group-hover:shadow-[0_0_25px_rgba(255,91,138,0.8)] transition-shadow duration-300">
            <Activity size={18} />
          </div>
          <span className="font-bold text-xl tracking-tight">TinyVitals</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="text-foreground/80 hover:text-accent transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-foreground/80 hover:text-accent transition-colors">How it Works</Link>
          <Link href="#privacy" className="text-foreground/80 hover:text-accent transition-colors">Privacy</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://apps.apple.com/us/app/tinyvitals-track-grow-protect/id6759552466"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-foreground text-background font-medium hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            Download App
          </a>
        </div>

        <button className="md:hidden relative z-10 text-foreground p-2">
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}

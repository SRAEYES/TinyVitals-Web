"use client";

import { HealthSphere } from "@/components/3d/HealthSphere";

export function HealthSphereSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      <HealthSphere />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Your Child's <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent">
            Complete Health Story
          </span>
        </h2>
        <p className="text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed">
          Watch your child's health data transform into meaningful insights with our advanced 3D visualization system.
        </p>
      </div>
    </section>
  );
}

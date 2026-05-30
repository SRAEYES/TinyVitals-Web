"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DNAParticles() {
  const ref = useRef<THREE.Points>(null!);
  
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const t = i / particlesCount;
      const angle = t * Math.PI * 20; // 10 turns
      const radius = 2;
      const x = Math.cos(angle) * radius;
      const y = (t - 0.5) * 20; // Spread vertically
      const z = Math.sin(angle) * radius;
      
      // Add some noise
      pos[i * 3] = x + (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 1] = y + (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.5;
    }
    return pos;
  }, [particlesCount]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF5B8A"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function DNARibbon() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={['#050505', 10, 25]} />
        <ambientLight intensity={0.5} />
        <DNAParticles />
      </Canvas>
      
      {/* Fallback gradient for when WebGL is loading or fails */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />
    </div>
  );
}

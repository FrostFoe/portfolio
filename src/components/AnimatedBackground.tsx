'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import type * as THREE from 'three';

function Starfield() {
  const starsRef = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (starsRef.current) {
      // Add a slow, constant rotation
      starsRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={150}
      depth={50}
      count={5000}
      factor={5}
      saturation={0}
      fade // For appearing/disappearing effect
      speed={1.5} // Controls the twinkling speed
    />
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Starfield />
      </Canvas>
    </div>
  );
}

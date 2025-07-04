'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Points, BufferGeometry, NormalBufferAttributes } from 'three';

function Starfield() {
  const starsRef = useRef<Points<BufferGeometry<NormalBufferAttributes>>>(null!);

  useFrame((_state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={3000}
      factor={5}
      saturation={0}
      fade
      speed={1.5}
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

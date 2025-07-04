'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingPyramid() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <coneGeometry args={[1, 1.5, 4]} />
      <meshStandardMaterial 
        color={'#ffffff'} 
        emissive={'hsl(212 96% 47%)'}
        emissiveIntensity={0.4}
        metalness={0.9} 
        roughness={0.1}
      />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Stars radius={150} depth={50} count={7000} factor={5} saturation={0} fade speed={1.5} />
        <RotatingPyramid />
      </Canvas>
    </div>
  );
}

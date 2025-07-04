'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <Stars radius={150} depth={50} count={7000} factor={5} saturation={0} fade speed={1.5} />
          <RotatingPyramid />
        </Canvas>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black tracking-tighter uppercase"
          style={{ textShadow: '0 0 25px hsla(212, 96%, 47%, 0.7)' }}
        >
          A New Era of Style
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 backdrop-blur-sm bg-black/20 p-4 rounded-xl"
        >
          Explore the future of fashion with our groundbreaking 3D-inspired collection.
          Unleash your style with unparalleled visual depth and motion.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base font-medium py-6 px-8 rounded-full shadow-lg shadow-primary/50 transform hover:scale-105 transition-transform duration-300">
            Explore Collection
          </Button>
          <Button size="lg" variant="outline" className="text-base font-medium py-6 px-8 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

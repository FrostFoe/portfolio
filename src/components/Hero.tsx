'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center py-20 lg:py-32"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
      >
        A New Era of Style
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-xl mx-auto text-lg text-gray-400"
      >
        Discover the latest trends and refresh your wardrobe with our curated
        collection of modern essentials.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-base font-medium py-6 px-8">
          Explore Collection
        </Button>
        <Button size="lg" variant="outline" className="text-base font-medium py-6 px-8">
          Learn More
        </Button>
      </motion.div>
    </motion.section>
  );
}

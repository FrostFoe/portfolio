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
    <div className="relative flex items-center justify-center w-full text-center px-6 py-32 sm:py-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase"
          style={{ textShadow: '0 0 25px hsla(217.2, 91.2%, 59.8%, 0.7)' }}
        >
          Stunning Web Templates
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg text-gray-300 backdrop-blur-sm p-4 rounded-xl"
        >
          Elevate your online presence with professionally designed, fully responsive templates built with the latest web technologies.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base font-medium py-6 px-8 rounded-full shadow-lg shadow-primary/50 transform hover:scale-105 transition-transform duration-300">
            Browse Templates
          </Button>
          <Button size="lg" variant="outline" className="text-base font-medium py-6 px-8 rounded-full border-2 border-white bg-transparent hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

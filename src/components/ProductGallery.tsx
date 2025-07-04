'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageInfo {
  src: string;
  alt: string;
  hint: string;
}

interface ProductGalleryProps {
  images: ImageInfo[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative aspect-square w-full rounded-lg border border-neutral-800 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            data-ai-hint={images[activeIndex].hint}
            fill
            className="object-cover"
            priority={activeIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
            <div className="absolute top-1/2 left-4 right-4 flex justify-between -translate-y-1/2">
                <button onClick={handlePrev} className="p-2 rounded-full bg-secondary/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-secondary/75 transition-colors">
                    <ChevronLeft className="h-6 w-6"/>
                </button>
                <button onClick={handleNext} className="p-2 rounded-full bg-secondary/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-secondary/75 transition-colors">
                    <ChevronRight className="h-6 w-6"/>
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 w-2 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </>
      )}
    </div>
  );
}

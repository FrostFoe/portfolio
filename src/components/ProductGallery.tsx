'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full bg-black rounded-lg border border-neutral-800 overflow-hidden">
        {images.map((image, index) => (
            <Image
            key={image.src + index}
            src={image.src}
            alt={image.alt}
            data-ai-hint={image.hint}
            fill
            className={cn(
                'object-cover transition-opacity duration-300',
                index === activeIndex ? 'opacity-100' : 'opacity-0'
            )}
            priority={index === 0}
            />
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center bg-black/70 rounded-full backdrop-blur-sm">
            <button onClick={handlePrev} className="p-3 text-white/80 hover:text-white transition-colors">
                <ChevronLeft size={20}/>
            </button>
            <div className="w-px h-5 bg-neutral-600"></div>
            <button onClick={handleNext} className="p-3 text-white/80 hover:text-white transition-colors">
                <ChevronRight size={20}/>
            </button>
        </div>
      </div>

      <div className="flex gap-3 justify-start overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={image.src + index + '-thumb'}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-colors",
              activeIndex === index ? 'border-primary' : 'border-neutral-800 hover:border-neutral-700'
            )}
          >
            <Image 
                src={image.src} 
                alt={image.alt} 
                data-ai-hint={image.hint} 
                width={80} 
                height={80} 
                className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}

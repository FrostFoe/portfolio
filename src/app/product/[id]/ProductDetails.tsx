'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductGallery from '@/components/ProductGallery';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/products';

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);

  const mainVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const isFree = product.price === '0.00';

  const CtaButton = (
    <Button size="lg" className="bg-primary hover:bg-primary/90 w-full text-base font-medium py-6">
        {isFree ? (
          <Download className="mr-2 h-5 w-5" />
        ) : (
          <Plus className="mr-2 h-5 w-5" />
        )}
        {isFree ? 'Get Now' : 'Add To Cart'}
    </Button>
  );

  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-start"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <ProductGallery images={product.images} />
      </motion.div>
      
      <motion.div className="flex flex-col gap-8" variants={itemVariants}>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.title}</h1>
          <div className="rounded-full bg-primary text-primary-foreground font-semibold text-sm py-2 px-4 w-fit">
            <span>${product.price} USD</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-sm font-medium tracking-wide text-gray-400 mb-3">COLOR</h2>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant="outline"
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-normal h-auto',
                    'border-neutral-800 hover:border-white transition-colors',
                    {
                      'border-white ring-1 ring-white': selectedColor === color,
                    }
                  )}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-wide text-gray-400 mb-3">SIZE</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-normal h-auto w-14',
                    'border-neutral-800 hover:border-white transition-colors',
                    {
                      'border-white ring-1 ring-white': selectedSize === size,
                    }
                  )}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-400 leading-relaxed text-sm">{product.content}</p>

        {product.ctaUrl ? (
          <Link href={product.ctaUrl} target="_blank" rel="noopener noreferrer">
            {CtaButton}
          </Link>
        ) : (
          CtaButton
        )}
      </motion.div>
    </motion.div>
  );
}

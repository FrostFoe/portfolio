'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product, PricingOption } from '@/lib/products';

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedOption, setSelectedOption] = useState<PricingOption>(product.pricingOptions[0]);

  const mainVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const isFree = selectedOption.price === '0.00';

  const CtaButton = (
    <Button size="lg" className="bg-primary hover:bg-primary/90 w-full text-base font-medium py-6">
        {isFree ? (
          <Download className="mr-2 h-5 w-5" />
        ) : (
          <Plus className="mr-2 h-5 w-5" />
        )}
        {isFree ? 'এখনই নিন' : 'কার্টে যোগ করুন'}
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
        <div className="sticky top-24">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:hidden">{product.title}</h1>
          <div className="rounded-full bg-primary text-primary-foreground font-semibold text-sm py-2 px-4 w-fit mb-4 lg:hidden">
            <span>৳{selectedOption.price}</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="flex flex-col gap-8" variants={itemVariants}>
        <div className="hidden lg:block">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.title}</h1>
          <div className="rounded-full bg-primary text-primary-foreground font-semibold text-sm py-2 px-4 w-fit">
            <span>৳{selectedOption.price}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-sm font-medium tracking-wide text-gray-400 mb-3">পরিষেবার ধরণ</h2>
            <div className="flex flex-col gap-2">
              {product.pricingOptions.map((option) => (
                <Button
                  key={option.name}
                  variant="outline"
                  onClick={() => setSelectedOption(option)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-base font-normal h-auto justify-between',
                    'border-neutral-800 hover:border-white transition-colors',
                    {
                      'border-white ring-2 ring-white': selectedOption.name === option.name,
                    }
                  )}
                >
                  <span>{option.name}</span>
                  <span className="font-semibold">৳{option.price}</span>
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

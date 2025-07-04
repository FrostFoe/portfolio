
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product, PricingOption } from '@/lib/products';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const hasPricingOptions = Array.isArray(product.pricingOptions) && product.pricingOptions.length > 0;

  // This function safely determines the initial selected option
  const getInitialOption = (): PricingOption | null => {
    if (hasPricingOptions) {
      // If there are pricing options, use the first one as default
      return product.pricingOptions[0];
    }
    // Otherwise, if there is a base price, create a default option for it
    if (typeof product.price !== 'undefined' && product.price !== null) {
      return { name: 'Standard License', price: product.price };
    }
    // If no price is available at all (which validation should prevent), return null
    return null;
  };
  
  const [selectedOption, setSelectedOption] = useState<PricingOption | null>(getInitialOption());

  const handleAddToCart = () => {
    if (product && selectedOption) {
      addToCart(product, selectedOption);
    } else if (hasPricingOptions && !selectedOption) {
       toast({
            variant: 'destructive',
            title: 'অনুগ্রহ করে একটি প্যাকেজ নির্বাচন করুন।',
            description: 'আপনি কার্টে যোগ করার আগে একটি প্যাকেজ বাছাই করতে হবে।',
        })
    }
  };

  const mainVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <div className="lg:sticky lg:top-24">
      <motion.div
        className="flex flex-col gap-8"
        variants={mainVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">{product.title}</h1>
          {selectedOption && (
            <div className="rounded-full bg-primary text-primary-foreground font-semibold text-xl py-2 px-5 w-fit shadow-md shadow-primary/20">
              <span>৳{selectedOption.price}</span>
            </div>
          )}
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-base">
          {product.content}
        </motion.p>
        
        {hasPricingOptions && (
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-gray-400">প্যাকেজ বাছাই করুন</h2>
            <div className="flex flex-col gap-3">
              {product.pricingOptions.map((option) => (
                <Button
                  key={option.name}
                  variant="outline"
                  onClick={() => setSelectedOption(option)}
                  className={cn(
                    'h-auto justify-between rounded-lg border-2 px-6 py-4 text-base font-normal transition-all duration-300',
                    'border-neutral-800 bg-neutral-900/50 hover:border-primary',
                    {
                      'border-primary ring-2 ring-primary/50 bg-primary/10 text-white': selectedOption?.name === option.name,
                    }
                  )}
                >
                  <span>{option.name}</span>
                  <span className="font-semibold">৳{option.price}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {selectedOption?.price === '0' ? (
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full text-base font-medium py-6 rounded-lg shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
              <Link href={product.redirectUrl ?? '#'} target="_blank" rel="noopener noreferrer">
                Get Now
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full text-base font-medium py-6 rounded-lg shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
              <Link href={product.redirectUrl ?? '#'} target="_blank" rel="noopener noreferrer">
                Buy Now
              </Link>
            </Button>
          )}
          <Button
            size="lg"
            variant="outline"
            className="w-full text-base font-medium py-6 rounded-lg hover:scale-105 transition-transform"
            onClick={handleAddToCart}
            disabled={!selectedOption}
          >
            <Plus className="mr-2 h-5 w-5" />
            Add To Cart
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

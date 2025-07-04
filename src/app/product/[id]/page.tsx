'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import RelatedProducts from '@/components/RelatedProducts';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

// This is mock data. In a real application, you would fetch this based on the `params.id`.
const product = {
  id: 'acme-circles-t-shirt',
  name: 'Acme Circles T-Shirt',
  price: '20.00',
  description: '60% combed ringspun cotton/40% polyester jersey tee.',
  images: [
    { src: 'https://placehold.co/1000x1000.png', alt: 'Acme Circles T-Shirt Black', hint: 't-shirt black circles' },
    { src: 'https://placehold.co/1000x1000.png', alt: 'Acme Circles T-Shirt White', hint: 't-shirt white circles' },
    { src: 'https://placehold.co/1000x1000.png', alt: 'Acme Circles T-Shirt Blue', hint: 't-shirt blue circles' },
  ],
  colors: ['Black', 'White', 'Blue'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

  const mainVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-6 py-20">
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
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
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

              <p className="text-gray-400 leading-relaxed text-sm">{product.description}</p>

              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full text-base font-medium py-6">
                  <PlusIcon className="mr-2 h-5 w-5" /> Add To Cart
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}

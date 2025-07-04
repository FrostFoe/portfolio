'use client';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/products';

interface AnimatedProductGridProps {
    products: Product[];
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function AnimatedProductGrid({ products }: AnimatedProductGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={itemVariants} className={product.className}>
          <ProductCard
            id={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            imageHint={product.imageHint}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

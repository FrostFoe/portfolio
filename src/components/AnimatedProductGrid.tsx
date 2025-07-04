'use client';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  imageSrc: string;
  title: string;
  price: string;
  imageHint: string;
  className?: string;
}

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
      className="grid auto-rows-[25rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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

'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price: string;
  imageHint: string;
}

const ProductCard = ({
  id,
  imageSrc,
  title,
  price,
  imageHint,
}: ProductCardProps) => {
  return (
    <motion.div
      className="h-full"
      whileHover="hover"
      initial="initial"
      animate="initial"
      style={{ perspective: 1000 }}
    >
      <Link
        href={`/product/${id}`}
        className="group h-full block"
      >
        <motion.article 
          className="relative w-full h-full overflow-hidden rounded-2xl border border-neutral-800 group-hover:border-primary/80 transition-colors duration-300 shadow-2xl hover:shadow-primary/30"
          variants={{
            initial: { transform: 'rotateY(0deg) rotateX(0deg)', scale: 1 },
            hover: { 
              transform: 'rotateY(10deg) rotateX(5deg) translateZ(20px)', 
              scale: 1.05,
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          >
            <div style={{ transform: 'translateZ(40px)' }}>
                 <Image
                    src={imageSrc}
                    alt={title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    data-ai-hint={imageHint}
                />
            </div>
         
          <div className="absolute bottom-0 left-0 right-0 p-6" style={{ transform: 'translateZ(50px)' }}>
             <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">{title}</h3>
                </div>
                <div className="rounded-full bg-primary text-primary-foreground font-bold text-sm py-2 px-5 shadow-lg">
                  <span>${price}</span>
                </div>
              </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

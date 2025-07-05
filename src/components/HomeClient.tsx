'use client';


import type { Product } from '@/lib/products';
import AnimatedProductGrid from './AnimatedProductGrid';


interface HomeClientProps {
  products: Product[];
}

export default function HomeClient({ products }: HomeClientProps) {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
          ফিচার্ড টেমপ্লেট
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          প্রতিটি টেমপ্লেট আধুনিক ওয়েবের জন্য নির্ভুলতার সাথে তৈরি।
        </p>
      </div>

      {products.length > 0 ? (
        <AnimatedProductGrid products={products} />
      ) : (
        <div className="text-center py-16 flex flex-col items-center">
          <p className="text-2xl font-bold text-gray-300">
            কোনো টেমপ্লেট পাওয়া যায়নি।
          </p>
        </div>
      )}
    </div>
  );
}



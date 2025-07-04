'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Product } from '@/lib/products';
import AnimatedProductGrid from './AnimatedProductGrid';
import { SearchX } from 'lucide-react';

interface HomeClientProps {
  products: Product[];
}

export default function HomeClient({ products }: HomeClientProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      const newFilteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(lowercasedQuery) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery)))
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <div>
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
            {searchQuery ? `"${searchQuery}" এর জন্য ফলাফল` : 'ফিচার্ড টেমপ্লেট'}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            {searchQuery 
              ? `${filteredProducts.length} টি টেমপ্লেট পাওয়া গেছে।`
              : 'প্রতিটি টেমপ্লেট আধুনিক ওয়েবের জন্য নির্ভুলতার সাথে তৈরি।'}
          </p>
        </div>
        {filteredProducts.length > 0 ? (
          <AnimatedProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-16 flex flex-col items-center">
            <SearchX className="h-24 w-24 text-gray-600 mb-6" />
            <p className="text-2xl font-bold text-gray-300">দুঃখিত, কোনো টেমপ্লেট খুঁজে পাওয়া যায়নি।</p>
            <p className="text-gray-500 mt-2">অন্য কোনো কীওয়ার্ড দিয়ে চেষ্টা করুন।</p>
          </div>
        )}
      </div>
    </div>
  );
}

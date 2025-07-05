'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Product } from '@/lib/products';
import AnimatedProductGrid from './AnimatedProductGrid';
import { SearchX } from 'lucide-react';

interface SearchClientProps {
  products: Product[];
}

export default function SearchClient({ products }: SearchClientProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('q') ?? '';
    if (searchQuery.trim()) {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      const newFilteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        (product.tags?.some(tag => tag.toLowerCase().includes(lowercasedQuery)) ?? false)
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams, products]);

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
          {searchParams.get('q')
            ? `"${searchParams.get('q')}" এর জন্য ফলাফল`
            : 'সব টেমপ্লেট'}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          {searchParams.get('q')
            ? `${filteredProducts.length} টি টেমপ্লেট পাওয়া গেছে।`
            : 'ব্রাউজ করুন'}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <AnimatedProductGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-16 flex flex-col items-center">
          <SearchX className="h-24 w-24 text-gray-600 mb-6" />
          <p className="text-2xl font-bold text-gray-300">
            দুঃখিত, কোনো টেমপ্লেট খুঁজে পাওয়া যায়নি।
          </p>
          <p className="text-gray-500 mt-2">অন্য কোনো কীওয়ার্ড দিয়ে চেষ্টা করুন।</p>
        </div>
      )}
    </div>
  );
}

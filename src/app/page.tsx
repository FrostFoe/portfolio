import { Suspense } from 'react';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
import Hero from '@/components/Hero';
import { getProducts } from '@/lib/products';
import HomeClient from '@/components/HomeClient';
import { Skeleton } from '@/components/ui/skeleton';

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[250px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Loading() {
  return (
    <div>
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-1/2 mx-auto mb-4" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>
        <ProductGridSkeleton />
      </div>
    </div>
  );
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <DynamicNavbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<Loading />}>
          {/* This is the client component that uses searchParams */}
          <HomeClient products={products} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

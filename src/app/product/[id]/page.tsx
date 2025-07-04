import { getProductData } from '@/lib/products';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RelatedProducts from '@/components/RelatedProducts';
import ProductDetails from './ProductDetails';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ProductDetails product={product} />
        </div>
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}

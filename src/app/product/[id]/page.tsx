
import { getProductData, getProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RelatedProducts from '@/components/RelatedProducts';
import ProductDetails from './ProductDetails';
import ProductGallery from '@/components/ProductGallery';

export default async function ProductPage({ params }: { params: { id:string } }) {
  const product = await getProductData(params.id);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts.filter((p) => p.id !== params.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-start">
            <ProductGallery images={product.images} />
            <ProductDetails product={product} />
        </div>
        <RelatedProducts products={relatedProducts} title="সম্পর্কিত টেমপ্লেট" />
      </main>
      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedProductGrid from "@/components/AnimatedProductGrid";
import Hero from "@/components/Hero";
import { getProducts } from "@/lib/products";

export default function Home() {
  const products = getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div>
          <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                Featured Templates
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                Each template is crafted with precision for the modern web.
              </p>
            </div>
            <AnimatedProductGrid products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

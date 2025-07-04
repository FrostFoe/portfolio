import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Circles T-Shirt",
      price: "20.00",
      imageHint: "t-shirt black",
    },
    {
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Drawstring Bag",
      price: "12.00",
      imageHint: "drawstring bag",
    },
    {
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Cup",
      price: "15.00",
      imageHint: "black cup",
    },
    {
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Mug",
      price: "15.00",
      imageHint: "black mug",
    },
    {
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Hoodie",
      price: "50.00",
      imageHint: "black hoodie",
    },
    {
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Baby Onesie",
      price: "10.00",
      imageHint: "baby onesie",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="mt-8 mb-12 px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                imageSrc={product.imageSrc}
                title={product.title}
                price={product.price}
                imageHint={product.imageHint}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

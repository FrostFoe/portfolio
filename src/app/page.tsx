import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ProductCarouselNav from "@/components/ProductCarouselNav";

export default function Home() {
  const products = [
    {
      id: "acme-circles-t-shirt",
      imageSrc: "https://placehold.co/1200x1200.png",
      title: "Acme Circles T-Shirt",
      price: "20.00",
      imageHint: "t-shirt black",
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      id: "acme-drawstring-bag",
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Drawstring Bag",
      price: "12.00",
      imageHint: "drawstring bag",
    },
    {
      id: "acme-cup",
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Cup",
      price: "15.00",
      imageHint: "white cup",
    },
    {
      id: "acme-mug",
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Mug",
      price: "15.00",
      imageHint: "black mug cork",
    },
    {
      id: "acme-hoodie",
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Hoodie",
      price: "50.00",
      imageHint: "black hoodie",
    },
    {
      id: "acme-baby-onesie",
      imageSrc: "https://placehold.co/600x600.png",
      title: "Acme Baby Onesie",
      price: "10.00",
      imageHint: "baby onesie",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="mt-8 mb-12 px-6 max-w-7xl mx-auto">
          <div className="grid auto-rows-[25rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                price={product.price}
                imageHint={product.imageHint}
                className={product.className}
              />
            ))}
          </div>
        </div>
        <ProductCarouselNav />
      </main>
      <Footer />
    </div>
  );
}

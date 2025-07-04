'use client';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const relatedProducts = [
  {
    id: "acme-t-shirt",
    imageSrc: "https://placehold.co/600x600.png",
    title: "Acme T-Shirt",
    price: "20.00",
    imageHint: "t-shirt person",
  },
  {
    id: "acme-prism-t-shirt",
    imageSrc: "https://placehold.co/600x600.png",
    title: "Acme Prism T-Shirt",
    price: "25.00",
    imageHint: "t-shirt prism",
  },
  {
    id: "acme-baby-cap",
    imageSrc: "https://placehold.co/600x600.png",
    title: "Acme Baby Cap",
    price: "10.00",
    imageHint: "baby cap",
  },
  {
    id: "acme-cap",
    imageSrc: "https://placehold.co/600x600.png",
    title: "Acme Cap",
    price: "20.00",
    imageHint: "baseball cap",
  },
  {
    id: "acme-baby-onesie",
    imageSrc: "https://placehold.co/600x600.png",
    title: "Acme Baby Onesie",
    price: "10.00",
    imageHint: "baby onesie",
  },
  {
    id: "acme-hoodie",
    imageSrc: "https://placehold.co/600x600.png",
    title: "Acme Hoodie",
    price: "50.00",
    imageHint: "black hoodie",
    },
];

export default function RelatedProducts() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-20">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <Carousel opts={{ align: "start", loop: false }}>
        <CarouselContent className="-ml-4">
          {relatedProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="h-[350px]">
                    <ProductCard
                        id={product.id}
                        imageSrc={product.imageSrc}
                        title={product.title}
                        price={product.price}
                        imageHint={product.imageHint}
                    />
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

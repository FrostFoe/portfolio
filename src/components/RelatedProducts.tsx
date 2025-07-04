'use client';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/products";

export default function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 mb-20">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <Carousel opts={{ align: "start", loop: false }}>
        <CarouselContent className="-ml-4">
          {products.map((product) => (
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

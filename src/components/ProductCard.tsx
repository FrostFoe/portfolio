import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price: string;
  imageHint: string;
  className?: string;
}

const ProductCard = ({
  id,
  imageSrc,
  title,
  price,
  imageHint,
  className,
}: ProductCardProps) => {
  return (
    <Link
      href={`/product/${id}`}
      className={cn("group h-full", className)}
    >
      <article className="relative w-full h-full overflow-hidden rounded-lg border border-transparent bg-black group-hover:border-primary/80 transition-colors duration-300">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={800}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint={imageHint}
          priority
        />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="rounded-full border border-white/10 bg-black/60 backdrop-blur-md py-1.5 px-4">
            <h3 className="text-white font-medium text-sm">{title}</h3>
          </div>
          <div className="rounded-full bg-primary text-primary-foreground font-bold text-sm py-1.5 px-4">
            <span>${price} USD</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;

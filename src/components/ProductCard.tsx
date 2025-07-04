import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  imageHint: string;
}

const ProductCard = ({
  imageSrc,
  title,
  price,
  imageHint,
}: ProductCardProps) => {
  return (
    <Link href="#" className="group">
      <article className="relative bg-card rounded-lg overflow-hidden shadow-xl transition-transform duration-300 ease-in-out group-hover:scale-105">
        <div className="w-full h-64 bg-card">
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={600}
            className="w-full h-full object-contain p-6"
            data-ai-hint={imageHint}
          />
        </div>
        <div className="p-4 pt-2">
          <h3 className="text-card-foreground font-semibold">{title}</h3>
        </div>
        <span className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold text-sm rounded-full py-1 px-3">
          {price} USD
        </span>
      </article>
    </Link>
  );
};

export default ProductCard;

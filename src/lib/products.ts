import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const productsDirectory = path.join(process.cwd(), 'src/content/products');

export type PricingOption = {
  name: string;
  price: string;
};

export type Product = {
  id: string;
  title:string;
  price: string;
  imageSrc: string;
  imageHint: string;
  className?: string;
  images: { src: string; alt: string; hint: string }[];
  pricingOptions: PricingOption[];
  content: string;
  ctaUrl?: string;
  [key: string]: any;
};

const productFileNames = [
  'landing-page.mdx',
  'portfolio-starter.mdx',
  'ecommerce-kit.mdx',
];

export function getProducts(): Product[] {
  const allProductsData = productFileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(productsDirectory, fileName);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      id,
      ...data,
    } as Product;
  }).filter((product): product is Product => product !== null);

  return allProductsData;
}

export function getProductData(id: string): Product | null {
  const fullPath = path.join(productsDirectory, `${id}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
  
    return {
      id,
      ...data,
      content,
    } as Product;

  } catch (err) {
    return null;
  }
}

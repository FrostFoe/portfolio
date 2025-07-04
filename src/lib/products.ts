
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
  published?: boolean;
  [key: string]: any;
};

export async function getProducts(): Promise<Product[]> {
  if (!fs.existsSync(productsDirectory)) {
    return [];
  }
  
  const productFileNames = fs.readdirSync(productsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'));

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
  }).filter((product): product is Product => {
      if (!product || product.published !== true) return false;
      if (!product.title || !product.imageSrc) return false;
      
      const hasPrice = typeof product.price !== 'undefined';
      const hasPricingOptions = Array.isArray(product.pricingOptions) && product.pricingOptions.length > 0;
      
      return hasPrice || hasPricingOptions;
  });

  return allProductsData;
}

export async function getProductData(id: string): Promise<Product | null> {
  const fullPath = path.join(productsDirectory, `${id}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
  
    // Validate that essential data exists to prevent render errors
    if (!data.title || !data.imageSrc || !Array.isArray(data.images) || data.images.length === 0) {
      console.error(`Validation failed: Product with id '${id}' is missing essential data.`);
      return null;
    }

    const hasPrice = typeof data.price !== 'undefined' && data.price !== null;
    const hasPricingOptions = Array.isArray(data.pricingOptions) && data.pricingOptions.length > 0;

    if (!hasPrice && !hasPricingOptions) {
        console.error(`Validation failed: Product with id '${id}' is missing price information.`);
        return null;
    }

    return {
      id,
      ...data,
      content,
    } as Product;

  } catch (err) {
    return null;
  }
}

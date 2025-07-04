import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const productsDirectory = path.join(process.cwd(), 'src/content/products');

export type Product = {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  imageHint: string;
  className?: string;
  images: { src: string; alt: string; hint: string }[];
  colors: string[];
  sizes: string[];
  content: string;
  [key: string]: any;
};

export function getProducts(): Product[] {
  const fileNames = fs.readdirSync(productsDirectory);
  const allProductsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      id,
      ...data,
    } as Product;
  });
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

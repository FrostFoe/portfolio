import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import dynamic from 'next/dynamic';
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />,
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "এ্যাকমি স্টোর পুনঃকল্পিত",
  description: "Next.js এবং Tailwind CSS দিয়ে তৈরি একটি আধুনিক, দ্রুত এবং প্রতিক্রিয়াশীল ই-কমার্স স্টোর।",
   openGraph: {
    title: "এ্যাকমি স্টোর পুনঃকল্পিত",
    description: "ভবিষ্যতের জন্য ডিজাইন করা পণ্যগুলি আবিষ্কার করুন।",
    type: 'website',
    locale: 'bn_BD',
    siteName: 'এ্যাকমি স্টোর',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'এ্যাকমি স্টোর পুনঃকল্পিত',
    description: 'Next.js এবং Tailwind CSS দিয়ে তৈরি একটি আধুনিক, দ্রুত এবং প্রতিক্রিয়াশীল ই-কমার্স স্টোর।',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="dark">
      <body className={`${hindSiliguri.className} text-foreground antialiased`}>
        <AnimatedBackground />
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

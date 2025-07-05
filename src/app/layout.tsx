import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import dynamic from 'next/dynamic';
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/hooks/use-cart";
import "./globals.css";

import ClientAnimatedBackground from '@/components/ClientAnimatedBackground';

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ফ্রস্টফো - আধুনিক ওয়েব টেমপ্লেট",
  description: "নেক্সট.জেএস এবং টেইলউইন্ড সিএসএস দিয়ে তৈরি উচ্চ-মানের, প্রতিক্রিয়াশীল এবং কাস্টমাইজযোগ্য ওয়েব টেমপ্লেট।",
   openGraph: {
    title: "ফ্রস্টফো - আধুনিক ওয়েব টেমপ্লেট",
    description: "আধুনিক ওয়েবের জন্য ডিজাইন করা অত্যাশ্চর্য টেমপ্লেটগুলো আবিষ্কার করুন।",
    type: 'website',
    locale: 'bn_BD',
    siteName: 'ফ্রস্টফো',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ফ্রস্টফো - আধুনিক ওয়েব টেমপ্লেট',
    description: 'নেক্সট.জেএস এবং টেইলউইন্ড সিএসএস দিয়ে তৈরি উচ্চ-মানের, প্রতিক্রিয়াশীল এবং কাস্টমাইজযোগ্য ওয়েব টেমপ্লেট।',
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
        <CartProvider>
          <ClientAnimatedBackground />
          <div className="relative z-0">
            {children}
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

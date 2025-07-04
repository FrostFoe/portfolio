import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />,
});

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FrostFoe - Modern Web Templates",
  description: "High-quality, responsive, and customizable web templates built with Next.js and Tailwind CSS.",
   openGraph: {
    title: "FrostFoe - Modern Web Templates",
    description: "Discover stunning templates designed for the modern web.",
    type: 'website',
    locale: 'en_US',
    siteName: 'FrostFoe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrostFoe - Modern Web Templates',
    description: 'High-quality, responsive, and customizable web templates built with Next.js and Tailwind CSS.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-foreground antialiased`}>
        <AnimatedBackground />
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

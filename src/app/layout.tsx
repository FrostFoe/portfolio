import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "এ্যাকমি স্টোর পুনঃকল্পিত",
  description: "Next.js এবং Tailwind CSS দিয়ে তৈরি একটি ই-কমার্স স্টোর।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="dark">
      <body className="text-foreground font-body antialiased">
        <AnimatedBackground />
        <div className="relative z-0">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
import Footer from '@/components/Footer';

export default function CartPage() {
  return (
    <Suspense fallback={<p>Loading cart...</p>}>
      <CartPageContent />
    </Suspense>
  );
}

function CartPageContent() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <DynamicNavbar />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
          <ShoppingCart className="h-24 w-24 text-gray-500 mb-6" />
          <h1 className="text-4xl font-bold mb-2">আপনার কার্ট খালি</h1>
          <p className="text-gray-400 mb-8">মনে হচ্ছে আপনি এখনো কিছু যোগ করেননি।</p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">কেনাকাটা চালিয়ে যান</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DynamicNavbar />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">আপনার শপিং কার্ট</h1>
          <p className="mt-4 text-lg text-gray-400">
            আপনার অর্ডারের বিবরণ পর্যালোচনা করুন এবং চূড়ান্ত করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            {items.map(item => (
              <Card key={`${item.product.id}-${item.selectedOption.name}`} className="flex items-center gap-6 p-4 bg-neutral-900/50 border-neutral-800">
                <div className="relative w-24 h-24 rounded-md overflow-hidden bg-neutral-800 shrink-0">
                  <Image
                    src={item.product.imageSrc}
                    alt={item.product.title}
                    data-ai-hint={item.product.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.product.title}</h3>
                  <p className="text-sm text-gray-400">{item.selectedOption.name}</p>
                  <p className="text-primary font-bold mt-1">৳{item.selectedOption.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-neutral-700 rounded-md">
                    <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => updateQuantity(item.product.id, item.selectedOption.name, item.quantity - 1)} disabled={item.quantity <= 1}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-semibold">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => updateQuantity(item.product.id, item.selectedOption.name, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-destructive" onClick={() => removeFromCart(item.product.id, item.selectedOption.name)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                <CardTitle>অর্ডার সারাংশ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>সাবটোটাল</span>
                  <span>৳{totalPrice.toLocaleString('bn-BD')}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>ডেলিভারি ফি</span>
                  <span className='text-primary'>ফ্রি</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-neutral-700 pt-4 mt-4">
                  <span>মোট</span>
                  <span>৳{totalPrice.toLocaleString('bn-BD')}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button size="lg" className="w-full">চেকআউট করতে এগিয়ে যান</Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>কার্ট খালি করুন</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

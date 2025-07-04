"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const navLinks = ["সব", "পোর্টফোলিও", "ই-কমার্স"];

  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSearchQuery(searchParams.get('q') || '');
    }
  }, [searchParams]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const formattedQuery = searchQuery.trim();
    if (formattedQuery) {
        router.push(`/search?q=${encodeURIComponent(formattedQuery)}`);
    } else {
        router.push('/search');
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-lg z-50 h-16 border-b border-neutral-800">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full max-w-7xl mx-auto px-6">
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
            <Logo />
            <span className="font-semibold text-white hidden sm:block">ফ্রস্টফো</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 justify-self-center">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 justify-self-end">
             <form onSubmit={handleSearch} className="hidden lg:block relative w-64">
                <input
                    type="search"
                    placeholder="ট্যাগ বা নাম দিয়ে খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-neutral-900 border-neutral-800 text-gray-300 placeholder-gray-500 rounded-md py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3" aria-label="Search">
                    <Search className="h-4 w-4 text-gray-500" />
                </button>
            </form>

            <Link href="/cart" aria-label="Open cart" className="hidden lg:block relative">
              <ShoppingCart className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              className="lg:hidden text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full bg-black/90 backdrop-blur-xl z-40 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 p-8">
               <nav className="flex flex-col items-center gap-6">
                 {navLinks.map((link) => (
                   <Link
                     key={link}
                     href={`/#${link.toLowerCase()}`}
                     className="text-gray-300 hover:text-white transition-colors text-lg"
                     onClick={toggleMenu}
                   >
                     {link}
                   </Link>
                 ))}
               </nav>
               <form onSubmit={handleSearch} className="relative w-full max-w-sm">
                 <input
                   type="search"
                   placeholder="ট্যাগ বা নাম দিয়ে খুঁজুন..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="bg-neutral-800 border-neutral-700 text-gray-300 placeholder-gray-500 rounded-md py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                 />
                 <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3" aria-label="Search">
                   <Search className="h-4 w-4 text-gray-500" />
                 </button>
               </form>
               <Link href="/cart" aria-label="Open cart" className="relative flex items-center gap-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
                 <ShoppingCart className="h-6 w-6" />
                 <span>কার্ট</span>
                 {itemCount > 0 && (
                  <span className="absolute -top-2 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {itemCount}
                  </span>
                 )}
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

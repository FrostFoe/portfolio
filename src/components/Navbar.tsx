"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["All", "Portfolio", "E-commerce"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-lg z-50 h-16 border-b border-neutral-800">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
            <Logo />
            <span className="font-semibold text-white hidden sm:block">FrostFoe</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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

          <div className="flex items-center gap-4">
            <div className="hidden lg:block relative w-64">
              <input
                type="search"
                placeholder="Search templates..."
                className="bg-neutral-900 border-neutral-800 text-gray-300 placeholder-gray-500 rounded-md py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
            </div>

            <button aria-label="Open cart" className="hidden lg:block">
              <ShoppingCart className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </button>
            
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
               <div className="relative w-full max-w-sm">
                 <input
                   type="search"
                   placeholder="Search templates..."
                   className="bg-neutral-800 border-neutral-700 text-gray-300 placeholder-gray-500 rounded-md py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                 />
                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                   <Search className="h-4 w-4 text-gray-500" />
                 </div>
               </div>
               <button aria-label="Open cart" className="flex items-center gap-2 text-gray-300 hover:text-white">
                 <ShoppingCart className="h-6 w-6" />
                 <span>Cart</span>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

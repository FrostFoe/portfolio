"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const navLinks = ["All", "Shirts", "Stickers"];

  return (
    <header className="fixed top-0 w-full bg-black z-50 shadow-sm h-16">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
        <div className="flex items-center">
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center ml-6 space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/#${link.toLowerCase()}`}
                className="text-gray-200 hover:text-white hover:underline font-medium text-sm"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products…"
              className="bg-gray-800 text-gray-200 placeholder-gray-500 rounded-lg py-2 pl-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button aria-label="Open cart">
            <ShoppingBag className="h-6 w-6 text-gray-200 hover:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

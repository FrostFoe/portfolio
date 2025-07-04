"use client";

import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Navbar = () => {
  const navLinks = ["All", "Shirts", "Stickers"];

  return (
    <header className="fixed top-0 w-full backdrop-blur-lg z-50 h-16 border-b border-neutral-800">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-semibold text-white hidden sm:block">ACME</span>
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
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block relative w-64">
            <input
              type="search"
              placeholder="Search for products..."
              className="bg-neutral-900 border-neutral-800 text-gray-300 placeholder-gray-500 rounded-md py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
            </div>
          </div>

          <button aria-label="Open cart">
            <ShoppingCartIcon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

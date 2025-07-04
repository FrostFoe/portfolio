'use client';

import { useState, useEffect } from 'react';
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="border-t border-neutral-800 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-4">
                 <Link href="/" aria-label="Homepage" className="flex items-center gap-2">
                    <Logo />
                    <span className="font-semibold text-white text-lg">ACME</span>
                </Link>
                <p className="text-sm text-neutral-500">A new era of style.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">Shop</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">All</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">Shirts</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">Stickers</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">Accessories</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">About</h3>
                <ul className="space-y-3">
                  {footerLinks.slice(1).map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="block hover:text-white text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Social</h3>
                 <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white text-sm transition-colors">X / Twitter</a></li>
                  <li><a href="#" className="hover:text-white text-sm transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white text-sm transition-colors">Facebook</a></li>
                </ul>
              </div>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>&copy; {year || '...'} ACME, Inc. All rights reserved.</p>
          <p>Designed in California.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

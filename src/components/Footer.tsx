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
    { name: "হোম", href: "/" },
    { name: "সম্পর্কে", href: "#" },
    { name: "শর্তাবলী", href: "#" },
    { name: "গোপনীয়তা নীতি", href: "#" },
  ];

  return (
    <footer className="border-t border-neutral-800 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-4">
                 <Link href="/" aria-label="Homepage" className="flex items-center gap-2">
                    <Logo />
                    <span className="font-semibold text-white text-lg">এ্যাকমি</span>
                </Link>
                <p className="text-sm text-neutral-500">স্টাইলের এক নতুন যুগ।</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">কেনাকাটা</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">সব</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">শার্ট</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">স্টিকার</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">এক্সেসরিজ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">সম্পর্কে</h3>
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
                <h3 className="font-semibold text-white mb-4">সামাজিক</h3>
                 <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white text-sm transition-colors">এক্স / টুইটার</a></li>
                  <li><a href="#" className="hover:text-white text-sm transition-colors">ইন্সটাগ্রাম</a></li>
                  <li><a href="#" className="hover:text-white text-sm transition-colors">ফেসবুক</a></li>
                </ul>
              </div>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>&copy; {year || '...'} এ্যাকমি, Inc. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>ক্যালিফোর্নিয়ায় ডিজাইন করা হয়েছে।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import { useState, useEffect } from 'react';
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const footerLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "#" },
    { name: "পরিষেবার শর্তাবলী", href: "#" },
    { name: "গোপনীয়তা নীতি", href: "#" },
  ];

  return (
    <footer className="border-t border-neutral-800 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-4">
                 <Link href="/" aria-label="Homepage" className="flex items-center gap-2">
                    <Logo />
                    <span className="font-semibold text-white text-lg">ফ্রস্টফো</span>
                </Link>
                <p className="text-sm text-neutral-500">আধুনিক ওয়েবের জন্য ডিজাইন।</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">টেমপ্লেট</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">সব</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">পোর্টফোলিও</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">ই-কমার্স</Link></li>
                  <li><Link href="#" className="hover:text-white text-sm transition-colors">ল্যান্ডিং পেজ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">আমাদের সম্পর্কে</h3>
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
                  <li><a href="#" className="hover:text-white text-sm transition-colors">ইনস্টাগ্রাম</a></li>
                  <li><a href="#" className="hover:text-white text-sm transition-colors">ফেসবুক</a></li>
                </ul>
              </div>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>&copy; {isClient ? new Date().getFullYear() : '...'} ফ্রস্টফো, Inc. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>ক্যালিফোর্নিয়ায় ডিজাইন করা হয়েছে।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

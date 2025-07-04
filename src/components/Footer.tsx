import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    "Home",
    "About",
    "Terms & Conditions",
    "Shipping & Return Policy",
    "Privacy Policy",
    "FAQ",
  ];

  return (
    <footer className="bg-neutral-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                 <Link href="/" aria-label="Homepage" className="flex items-center gap-2 mb-6">
                    <Logo />
                    <span className="font-semibold text-white">ACME STORE</span>
                </Link>
                <nav>
                    <ul className="space-y-3">
                    {footerLinks.map((name) => (
                        <li key={name}>
                        <Link href="#" className="block hover:text-white text-sm transition-colors">
                            {name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
            <div className="lg:col-span-2 flex lg:justify-end items-start">
                <a href="#" target="_blank" rel="noopener noreferrer" className="border border-gray-700 bg-black text-white px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-neutral-800 transition-colors h-fit">
                    <svg height="14" viewBox="0 0 75 65" fill="white"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
                    <span>Deploy</span>
                </a>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap text-gray-500">
            <p>&copy; 2023-2025 ACME, Inc. All rights reserved.</p>
            <div className="h-4 w-px bg-neutral-700 hidden sm:block"></div>
            <Link href="#" className="hover:text-white transition-colors">View the source</Link>
          </div>
          <p className="text-gray-500">Created by <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">▲ Vercel</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

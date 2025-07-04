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
    <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>
          <nav className="mt-6 space-y-2">
            {footerLinks.map((name) => (
              <Link
                key={name}
                href="#"
                className="block hover:underline text-sm"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex sm:justify-end items-end">
          <div className="flex items-center">
            <button className="bg-gray-800 text-gray-200 font-mono text-sm px-3 py-2 rounded hover:bg-gray-700 transition-colors">
              ▲ Deploy
            </button>
            <p className="ml-4 text-xs text-gray-500">Created by ▲ Vercel</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Acme Store Reimagined. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

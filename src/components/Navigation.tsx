"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/headphones", label: "Headphones" },
    { href: "/speakers", label: "Speakers" },
    { href: "/earphones", label: "Earphones" },
  ];

  const linkBaseStyle =
    "uppercase text-sm font-medium tracking-wider transition-colors";

  return (
    <header className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-20 border-b border-gray-600">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl sm:text-3xl font-bold">
              audiophile
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBaseStyle} ${
                  pathname === link.href
                    ? "text-[#D87D4A] font-semibold"
                    : "text-gray-300 hover:text-[#D87D4A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black absolute top-full left-0 right-0 shadow-lg z-40">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBaseStyle} block ${
                  pathname === link.href
                    ? "text-[#D87D4A] font-semibold"
                    : "hover:text-[#D87D4A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

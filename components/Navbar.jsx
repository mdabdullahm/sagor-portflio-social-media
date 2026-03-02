"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Menu, X, ArrowRight } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#76153C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/navlogo.png" alt="SAGAR" className="w-16 h-24 object-contain"/>
            <p className="text-2xl font-black bg-gradient-to-r from-[#76153C] to-black bg-clip-text text-transparent tracking-tighter uppercase">
              SAGOR
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-bold text-sm uppercase tracking-wide ${
                    isActive(link.href) ? "text-[#76153C]" : "text-gray-500 hover:text-[#76153C]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Single CTA Button: Get Started */}
            <div className="border-l border-gray-200 pl-6">
              <Link
                href="/contact"
                className="bg-[#76153C] text-white px-7 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 active:scale-95 flex items-center gap-2"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#76153C] p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#76153C] p-4 space-y-3 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-bold transition-all ${
                isActive(link.href) ? "bg-[#76153C]/10 text-[#76153C]" : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="w-full text-center bg-[#76153C] text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg block"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
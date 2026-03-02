"use client";

import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              SOCIAL<span className="text-[#76153C]">FLOW</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering brands through data-driven digital marketing strategies. Your growth is my mission, and ROI is my language. Let's scale together.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: <Facebook size={18} />, link: "#" },
                { icon: <Linkedin size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Twitter size={18} />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#76153C] transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#76153C] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {["Home", "About Me", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "")}`} 
                    className="text-gray-400 hover:text-[#76153C] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <ArrowRight size={14} className="text-[#76153C]" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              My Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#76153C] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {["Paid Advertising", "Social Media Management", "Search Engine Optimization", "TikTok & Reels Marketing", "Marketing Strategy", "Data Analytics"].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-gray-400 hover:text-[#76153C] transition-all duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Subscribe
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#76153C] rounded-full"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-6">Get the latest marketing tips and trends in your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:border-[#76153C] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#76153C] p-2.5 rounded-lg hover:opacity-90 transition-all">
                <Send size={18} className="text-white" />
              </button>
            </form>
            <div className="mt-8 space-y-3">
               <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone size={16} className="text-[#76153C]" /> +880 1788-819781
               </div>
               <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail size={16} className="text-[#76153C]" /> hello@yourbrand.com
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs">
          <p>© {currentYear} SocialFlow Marketing. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
          <p>
            Designed with <span className="text-[#76153C]">♥</span> for Success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
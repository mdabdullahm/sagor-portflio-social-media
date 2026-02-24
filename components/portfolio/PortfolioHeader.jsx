"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Briefcase, Sparkles } from "lucide-react";

const PortfolioHeader = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#76153C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#76153C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest">
          <Link href="/" className="text-gray-400 hover:text-[#76153C] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-[#76153C]">Portfolio</span>
        </nav>

        {/* Page Title */}
        <div className="inline-flex items-center gap-2 bg-[#76153C]/10 text-[#76153C] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter mb-6">
          <Sparkles size={14} /> My Success Stories
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
          Showcasing <span className="text-[#76153C]">Real Results</span> <br /> 
          For Real Brands
        </h1>

        {/* Short Intro */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Explore a collection of data-driven campaigns, social media growth, and creative strategies 
          that helped businesses scale and dominate their niche.
        </p>

        {/* Stats Preview in Header */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-gray-200 mt-10">
          <div className="text-center">
            <p className="text-3xl font-black text-[#76153C]">150+</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-[#76153C]">50k+</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Ad Spend Managed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-[#76153C]">99%</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;
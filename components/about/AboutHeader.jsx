"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutHeader = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#76153C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#76153C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center gap-2 mb-6 text-sm font-semibold tracking-wide uppercase">
          <Link href="/" className="text-gray-500 hover:text-[#76153C] transition-colors">
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-[#76153C]">About Me</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          Get to Know the <br /> 
          <span className="text-[#76153C]">Person Behind the Strategy</span>
        </h1>

        {/* Short Intro */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          I am a passionate digital marketer dedicated to helping businesses grow their online presence 
          through data-driven strategies and creative storytelling.
        </p>

        {/* Simple Decorative Line */}
        <div className="mt-10 flex justify-center">
          <div className="w-24 h-1.5 bg-[#76153C] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
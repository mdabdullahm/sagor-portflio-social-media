"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Star, Heart, Users } from "lucide-react";

const TestimonialsHeader = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-[500px] h-[500px] bg-[#76153C] rounded-full blur-[120px] -mr-64 -mt-64"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-5">
        <div className="w-[300px] h-[300px] bg-[#76153C] rounded-full blur-[80px] -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest">
          <Link href="/" className="text-gray-400 hover:text-[#76153C] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-[#76153C]">Testimonials</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#76153C]/10 text-[#76153C] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
          <Heart size={14} fill="currentColor" /> Trust is Everything
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
          Don't Take My <span className="text-[#76153C]">Word For It.</span> <br /> 
          Hear From My Clients
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
          Discover why 150+ brands trust me to manage their digital growth. 
          Real stories from business owners who achieved exceptional results.
        </p>

        {/* Trust Indicators / Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#76153C] text-[#76153C]" />
              ))}
            </div>
            <p className="text-sm font-bold text-gray-900 uppercase tracking-tighter">5.0 Average Rating</p>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
              <Users size={24} className="text-[#76153C]" />
            </div>
            <div className="text-left">
              <p className="text-xl font-black text-gray-900 leading-none">150+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHeader;
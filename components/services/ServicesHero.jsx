"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles, Megaphone, BarChart2 } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <div className="w-[500px] h-[500px] bg-[#76153C] rounded-full blur-[120px] -mr-64 -mt-64"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <div className="w-[300px] h-[300px] bg-[#76153C] rounded-full blur-[80px] -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-sm font-bold uppercase tracking-widest">
              <Link href="/" className="text-gray-400 hover:text-[#76153C] transition-colors">Home</Link>
              <ChevronRight size={14} className="text-gray-300" />
              <span className="text-[#76153C]">Services</span>
            </nav>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Empowering Your Brand <br /> 
              With <span className="text-[#76153C]">Strategic Marketing</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I provide data-driven marketing solutions designed to increase your visibility, 
              engage your audience, and maximize your ROI across all digital platforms.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-[#76153C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 active:scale-95">
                Explore Services
              </button>
              <Link href="#contact" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#76153C] hover:text-[#76153C] transition-all active:scale-95">
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Graphic */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Floating Feature Card 1 */}
              <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex flex-col items-center text-center mt-12 animate-bounce-slow">
                <div className="w-12 h-12 bg-[#76153C]/10 text-[#76153C] rounded-xl flex items-center justify-center mb-4">
                  <Megaphone size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Ad Campaigns</h3>
                <p className="text-xs text-gray-500 mt-1">High Conversion</p>
              </div>

              {/* Floating Feature Card 2 */}
              <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center text-center mb-12">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart2 size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Analytics</h3>
                <p className="text-xs text-gray-500 mt-1">Real-time Insights</p>
              </div>

              {/* Floating Feature Card 3 (Full width below) */}
              <div className="col-span-2 bg-[#76153C] p-6 rounded-3xl shadow-2xl flex items-center justify-between group">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Total Brand Growth</p>
                    <p className="text-2xl font-black">+250%</p>
                  </div>
                </div>
                <div className="text-white/40 group-hover:text-white transition-colors">
                  <ChevronRight size={32} />
                </div>
              </div>
            </div>

            {/* Background Circle Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-[#76153C]/20 rounded-full -z-0 animate-spin-slow"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
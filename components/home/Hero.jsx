"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-40 lg:pb-32">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-[#76153C] rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* বাম পাশ: কন্টেন্ট */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h4 className="text-[#76153C] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Professional Digital Marketer
            </h4>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              I help scale your <br /> 
              <span className="text-[#76153C]">brand</span> through digital marketing
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm <span className="text-[#76153C] font-bold">Sagor</span> a digital marketing expert. With the right strategy and content, I can increase your business's engagement and sales by several folds.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#76153C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 active:scale-95"
              >
                Get started today <ArrowRight size={20} />
              </Link>
              
              <Link
                href="#portfolio"
                className="flex items-center justify-center gap-2 border-2 border-[#76153C] text-[#76153C] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#76153C]/5 transition-all active:scale-95"
              >
                 See my work
              </Link>
            </div>
          </div>

          {/* ডান পাশ: মার্কেটারের ছবি (তোমার ছবি) */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* ছবির পেছনে ব্র্যান্ড কালারের একটি শেপ */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#76153C]/10 rounded-3xl -z-10"></div>
              
              {/* তোমার প্রফেশনাল ছবি এখানে বসাবে */}
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/heroimg.jpg" 
                  alt="Digital Marketer Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* ফ্লোটিং ব্যাজ ১ */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Experience</p>
                    <p className="text-lg font-black text-[#76153C]">5+ Years</p>
                  </div>
                </div>
              </div>

              {/* ফ্লোটিং ব্যাজ ২ */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-gray-900 font-bold">100+ Projects Done ✅</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
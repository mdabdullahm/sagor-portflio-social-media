"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-32">
      {/* Background Decor - কালার আপডেট করা হয়েছে */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-72 h-72 bg-[#76153C] rounded-full blur-3xl -mr-20 -mt-20"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Grow Your <span className="text-[#76153C]">Social Presence</span> with Confidence
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We offer you modern social media management solutions. Reach your brand to millions of people easily.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Primary CTA - সরাসরি কালার কোড ব্যবহার করা হয়েছে */}
              <Link
                href="/get-started"
                className="flex items-center justify-center gap-2 bg-[#76153C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 active:scale-95"
              >
                Get Started Now <ArrowRight size={20} />
              </Link>
              
              {/* Secondary CTA - বর্ডার এবং টেক্সট কালার আপডেট */}
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 border-2 border-[#76153C] text-[#76153C] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#76153C]/5 transition-all active:scale-95"
              >
                <PlayCircle size={20} /> Watch Demo
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p>Join <span className="font-bold text-gray-900">2,000+</span> happy users worldwide</p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                  alt="Social Media Growth"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Growth</p>
                    <p className="text-xl font-black text-gray-900">+145%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - সরাসরি কালার কোড ব্যবহার করা হয়েছে */}
              <div className="absolute -top-6 -right-6 bg-[#76153C] p-4 rounded-2xl shadow-xl z-20 hidden sm:block">
                <p className="text-white font-medium text-sm">New Engagement 🔥</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
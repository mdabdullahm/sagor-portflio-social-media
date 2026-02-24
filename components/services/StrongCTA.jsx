"use client";

import React from "react";
import { MessageCircle, Calendar, ArrowRight, Zap } from "lucide-react";

const StrongCTA = () => {
  const whatsappNumber = "8801788819781";

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-full mx-auto">
        {/* মেইন ডার্ক কার্ড */}
        <div className="relative bg-[#76153C] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#76153C]/40">
          
          {/* ব্যাকগ্রাউন্ড ডেকোরেশন (Blur Circles) */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-48 -mt-48"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/20 rounded-full blur-[80px] -mr-40 -mb-40"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-20 gap-12">
            
            {/* বাম পাশ: কন্টেন্ট */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold mb-6 border border-white/20">
                <Zap size={16} className="text-yellow-400 fill-yellow-400" />
                Limited Slots Available for This Month
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight">
                Don't Leave Your Business <br /> 
                <span className="opacity-70">Growth to Chance.</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Get a <strong>Free 15-Minute Strategy Audit</strong> for your brand. 
                Let's identify the gaps in your current marketing and fix them together.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* WhatsApp Primary Action */}
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hello! I want to claim my Free 15-Minute Strategy Audit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#76153C] px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95"
                >
                  <MessageCircle size={24} /> Book Free Audit
                </a>

                {/* Secondary Action */}
                <a 
                  href="#contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold text-lg group"
                >
                  View Case Studies 
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            {/* ডান পাশ: একটি বিশেষ অফার কার্ড (Visual) */}
            <div className="lg:w-1/3 w-full">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">What you'll get:</h4>
                <ul className="space-y-4">
                  {[
                    "Ad Account Health Check",
                    "Competitor Gap Analysis",
                    "Custom Growth Roadmap",
                    "Budget Optimization Tips"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                      <div className="w-5 h-5 bg-white text-[#76153C] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-8 h-8 rounded-full border-2 border-[#76153C]" alt="user" />
                    ))}
                  </div>
                  <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest leading-tight">
                    Join 150+ Brands <br /> Already Scaled
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StrongCTA;
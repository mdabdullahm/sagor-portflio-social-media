"use client";

import React from "react";
import { Send, PhoneCall } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        {/* Main Container - Brand Color #76153C */}
        <div className="bg-[#76153C] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-[#76153C]/30">
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Scale Your Brand <br /> 
              <span className="opacity-90">to the Next Level?</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
              Don't wait for tomorrow. Let's discuss your project today. Get a free consultation and a customized social media growth plan tailored for your business.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* White Button - Get Started */}
              <a 
                href="#contact"
                className="w-full sm:w-auto bg-white text-[#76153C] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Send size={20} /> Get Started Today
              </a>

              {/* Outline Button - Call Us */}
              <a 
                href="tel:+1234567890"
                className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <PhoneCall size={20} /> Call Us Now
              </a>
            </div>

            {/* Trust Line */}
            <p className="mt-8 text-white/60 text-sm font-medium tracking-wide">
              * No hidden charges. Your first strategy session is 100% free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
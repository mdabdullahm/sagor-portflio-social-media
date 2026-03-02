"use client";

import React from "react";
import { Award, ShieldCheck, Globe, Star } from "lucide-react";

const TrustBadges = () => {
  // আপনি এখানে আসল ব্র্যান্ডের নাম বা লোগো বসাতে পারেন
  const brands = [
    { name: "TechVibe", industry: "Gadgets" },
    { name: "GlowBeauty", industry: "Cosmetics" },
    { name: "StyleLoft", industry: "Fashion" },
    { name: "FoodieGo", industry: "Delivery" },
    { name: "EcoShop", industry: "E-commerce" },
    { name: "UrbanWear", industry: "Apparel" },
  ];

  const certifications = [
    { title: "Meta Certified", authority: "Media Buying Professional", icon: <Award size={24} /> },
    { title: "Google Ads Expert", authority: "Search & Display Specialist", icon: <Globe size={24} /> },
    { title: "TikTok Marketing", authority: "Official Ad Specialist", icon: <Star size={24} /> },
  ];

  return (
    <section className="py-20 bg-gray-50/50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Brand Logos Grid */}
          <div>
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              Partners in Growth
            </h4>
            <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
              Trusted by Forward-Thinking <span className="text-[#76153C]">Global Brands</span>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:border-[#76153C]/20 hover:shadow-xl transition-all duration-500 group"
                >
                  <p className="text-xl font-black text-gray-400 group-hover:text-[#76153C] transition-colors tracking-tighter">
                    {brand.name}
                  </p>
                  <p className="text-[10px] font-bold text-gray-300 uppercase mt-1 tracking-widest">
                    {brand.industry}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Certifications */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#76153C]/5 rounded-bl-[100px]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#76153C] text-white rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Expertise Verified</h3>
              </div>

              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-gray-50 text-[#76153C] border border-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#76153C] group-hover:text-white transition-all duration-300 shadow-sm">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        Authorized {cert.authority} for high-performance campaigns.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-xs text-gray-400 font-bold uppercase tracking-widest italic">
                * All statistics and certifications are updated for 2024-25.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
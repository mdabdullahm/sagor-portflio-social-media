"use client";

import React from "react";
import { Star, Quote, TrendingUp, CheckCircle } from "lucide-react";

const ScrollingTestimonials = () => {
  const allReviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CEO, GlowBeauty",
      image: "https://i.pravatar.cc/150?u=1",
      result: "600% ROI",
      text: "Their ad strategies are world-class. Our sales tripled in the first quarter!",
    },
    {
      id: 2,
      name: "Mark Thompson",
      role: "Founder, TechVibe",
      image: "https://i.pravatar.cc/150?u=2",
      result: "+100k Followers",
      text: "Went viral on TikTok multiple times. Creativity and data analysis at its best.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Head, FoodieGo",
      image: "https://i.pravatar.cc/150?u=3",
      result: "45% Lower CPA",
      text: "Reduced our ad spend while increasing lead quality. Highly data-driven!",
    },
    {
      id: 4,
      name: "David K.",
      role: "Owner, RealState",
      image: "https://i.pravatar.cc/150?u=4",
      result: "120+ Monthly Leads",
      text: "Consistently delivering high-quality inquiries for our premium properties.",
    },
    {
      id: 5,
      name: "Sophia Lee",
      role: "Director, LuxeFashion",
      image: "https://i.pravatar.cc/150?u=5",
      result: "3x Revenue",
      text: "The best ROI-focused marketer I have ever worked with. Truly professional.",
    },
    {
      id: 6,
      name: "Alex Miller",
      role: "SaaS Founder",
      image: "https://i.pravatar.cc/150?u=6",
      result: "2M+ Impressions",
      text: "Our brand awareness reached new heights thanks to the omnichannel strategy.",
    },
    {
      id: 7,
      name: "Jessica W.",
      role: "E-com Specialist",
      image: "https://i.pravatar.cc/150?u=7",
      result: "8.5x ROAS",
      text: "Scale our Meta ads like magic. The ROAS we achieved was unbelievable.",
    }
  ];

  // Infinite loop এর জন্য অ্যারেকে ডাবল করা হয়েছে
  const scrollingReviews = [...allReviews, ...allReviews];

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 mb-16 text-center">
        <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
          Success Stories
        </h4>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
          What My <span className="text-[#76153C]">Global Clients</span> Say
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Left & Right Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="animate-marquee flex gap-8 py-10">
          {scrollingReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[420px] shrink-0 bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#76153C]/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Header: Stars & Quote */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#76153C] text-[#76153C]" />
                  ))}
                </div>
                <Quote size={40} className="text-[#76153C]/10 group-hover:text-[#76153C]/20 transition-colors" fill="currentColor" />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-8 h-20 overflow-hidden italic">
                "{review.text}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 bg-[#76153C]/5 text-[#76153C] px-3 py-1.5 rounded-lg text-[10px] font-black uppercase mb-8 border border-[#76153C]/10">
                <TrendingUp size={12} /> {review.result}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#76153C]/20 p-0.5">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    {review.role} <CheckCircle size={10} className="text-blue-500" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingTestimonials;
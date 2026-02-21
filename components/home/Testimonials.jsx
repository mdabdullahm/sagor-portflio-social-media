"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "আরিফুর রহমান",
      role: "CEO, TechBD",
      comment: "তাদের সোশ্যাল মিডিয়া স্ট্র্যাটেজি আমাদের ব্যবসার সেলস প্রায় ৪০% বাড়িয়ে দিয়েছে। তাদের কাজের মান সত্যিই অসাধারণ!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "তানজিলা আক্তার",
      role: "Founder, StyleHub",
      comment: "আমার পেজের কন্টেন্ট ডিজাইন নিয়ে আমি খুব চিন্তিত ছিলাম। কিন্তু এই টিমের গ্রাফিক্স ডিজাইন আমার ব্র্যান্ডের চেহারা বদলে দিয়েছে।",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "কামরুল হাসান",
      role: "Marketing Manager",
      comment: "খুবই প্রফেশনাল টিম। তারা সময়মতো ডেলিভারি দেয় এবং প্রতিটি রিপোর্ট খুব সুন্দরভাবে বুঝিয়ে দেয়। আমি তাদের সার্ভিস নিতে রিকমেন্ড করি।",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=3",
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#76153C]/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* হেডার অংশ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            ক্লায়েন্ট রিভিউ
          </h4>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            আমাদের কাস্টমাররা <br /> 
            <span className="text-[#76153C]">যা বলছেন</span>
          </h2>
          <p className="text-gray-600 text-lg">
            আমরা কাজের মানে বিশ্বাসী। আমাদের ওপর আস্থা রাখার জন্য আমরা আমাদের ক্লায়েন্টদের প্রতি কৃতজ্ঞ।
          </p>
        </div>

        {/* টেস্টিনিমোনিয়াল গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative"
            >
              {/* কোট আইকন */}
              <div className="absolute top-6 right-8 text-[#76153C]/10">
                <Quote size={60} fill="currentColor" />
              </div>

              {/* রেটিং স্টারস */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#76153C] text-[#76153C]" />
                ))}
              </div>

              {/* কমেন্ট */}
              <p className="text-gray-700 leading-relaxed mb-8 italic relative z-10">
                "{review.comment}"
              </p>

              {/* ইউজার প্রোফাইল */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#76153C]/20 p-1">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* নিচে একটি ছোট ট্রাস্ট মেসেজ */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 font-medium">
            বিশ্বজুড়ে <span className="text-[#76153C] font-bold">৫০০+</span> সফল ব্যবসার সঙ্গী আমরা।
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Arifur Rahman",
      role: "CEO, TechBD",
      comment: "Their social media strategy has increased our sales by almost 40%. The quality of work is truly exceptional!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Tanzila Akhter",
      role: "Founder, StyleHub",
      comment: "I was very worried about the content design of my page. But this team changed the look of my brand.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Kamrul Hasan",
      role: "Marketing Manager",
      comment: "Very professional team. They deliver on time and explain every report. I highly recommend.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Sayem Ahmed",
      role: "Founder, EcoShop",
      comment: "Their ad campaign management has significantly reduced our customer acquisition costs. Thank you!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      role: "Director, Foodie",
      comment: "Awesome graphics and video content! Our Soul Video Engage has been viewed 3 times more than before.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=5",
    },
  ];

  // লুপ ঠিক রাখার জন্য অ্যারেকে ডাবল করে দিচ্ছি
  const doubleReviews = [...reviews, ...reviews];

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 mb-16 text-center">
        <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
          Client Reviews
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          What Our <span className="text-[#76153C]">Customers Said</span>
        </h2>
      </div>

      {/* স্লাইডিং কন্টেইনার */}
      <div className="relative">
        <div className="animate-scroll flex gap-8">
          {doubleReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#76153C]/20 transition-all duration-300"
            >
              {/* রেটিং এবং কোট */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#76153C] text-[#76153C]" />
                  ))}
                </div>
                <Quote size={40} className="text-[#76153C]/10" fill="currentColor" />
              </div>

              {/* কমেন্ট */}
              <p className="text-gray-700 leading-relaxed mb-8 h-20 overflow-hidden text-ellipsis">
                "{review.comment}"
              </p>

              {/* প্রোফাইল */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-[#76153C]/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* দুই পাশে হালকা শ্যাডো যাতে স্লাইডিং স্মুথ মনে হয় */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;
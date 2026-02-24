"use client";

import React from "react";
import { ArrowUpRight, BarChart3, Target, Zap } from "lucide-react";

const FeaturedCaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: "E-commerce Sales Explosion",
      client: "StyleLoft Fashion",
      category: "Paid Advertising",
      metric: "450% ROI",
      desc: "Implemented a full-funnel Meta Ads strategy that scaled their monthly revenue from $5k to $25k in just 3 months.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      color: "bg-blue-50"
    },
    {
      id: 2,
      title: "Viral Organic Growth",
      client: "TechVibe Gadgets",
      category: "TikTok & Reels",
      metric: "2M+ Views",
      desc: "Created a trend-focused short-form video strategy that gained 50k+ followers organically without spending on ads.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
      color: "bg-purple-50"
    },
    {
      id: 3,
      title: "Local Business Lead Gen",
      client: "DentalCare Clinic",
      category: "Google Ads",
      metric: "120+ Leads/Mo",
      desc: "Optimized local SEO and Google Search Ads to consistently deliver high-quality patient inquiries at a $12 CPL.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
      color: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
              Case Studies
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Deep Dive into My <br /> 
              <span className="text-[#76153C]">Success Stories</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-xs md:text-right">
            Real data, real growth, and proven strategies implemented for diverse niches.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-20">
          {cases.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 1 === 0.5 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="flex-1 w-full group relative">
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Result Badge Overlay */}
                <div className="absolute -bottom-6 -right-6 md:right-10 bg-[#76153C] text-white p-6 rounded-3xl shadow-2xl border-4 border-white animate-bounce-slow">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Result Achieved</p>
                  <p className="text-3xl font-black">{item.metric}</p>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#76153C]/5 text-[#76153C] text-xs font-black uppercase mb-6">
                  <Zap size={14} fill="currentColor" /> {item.category}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-[#76153C] font-bold mb-6 italic">Client: {item.client}</p>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {item.desc}
                </p>

                {/* Key Points Summary */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <Target className="text-[#76153C] mb-2" size={20} />
                    <p className="text-xs font-bold text-gray-400 uppercase">Challenge</p>
                    <p className="text-sm font-bold text-gray-800">Low Conversion</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <BarChart3 className="text-[#76153C] mb-2" size={20} />
                    <p className="text-xs font-bold text-gray-400 uppercase">Solution</p>
                    <p className="text-sm font-bold text-gray-800">Full Funnel Ads</p>
                  </div>
                </div>

                <button className="flex items-center gap-3 text-lg font-black text-gray-900 group">
                  <span className="border-b-4 border-[#76153C] group-hover:pb-1 transition-all">View Full Case Study</span>
                  <ArrowUpRight size={24} className="text-[#76153C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
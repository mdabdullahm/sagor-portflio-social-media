"use client";

import React from "react";
import { TrendingUp, TrendingDown, ArrowRight, CheckCircle2 } from "lucide-react";

const BeforeAfter = () => {
  const results = [
    {
      id: 1,
      brand: "Fashion Hub BD",
      metric: "Monthly Sales",
      beforeValue: "$1,200",
      afterValue: "$8,500",
      growth: "+600%",
      tags: ["Meta Ads", "Sales Funnel"],
    },
    {
      id: 2,
      brand: "TechZone Gadgets",
      metric: "Organic Reach",
      beforeValue: "5.2k",
      afterValue: "145k",
      growth: "+2,600%",
      tags: ["Reels Strategy", "SEO"],
    },
    {
      id: 3,
      brand: "FreshBites Cafe",
      metric: "Customer Leads",
      beforeValue: "12 / mo",
      afterValue: "95 / mo",
      growth: "+690%",
      tags: ["Google Ads", "Lead Gen"],
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Transformation
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Proof of <span className="text-[#76153C]">Transformation</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Compare the results from before I took over to where these brands are now. Data doesn't lie.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {results.map((item) => (
            <div 
              key={item.id} 
              className="relative p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Client Name & Metric */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-1">{item.brand}</h3>
                <p className="text-[#76153C] font-bold text-sm uppercase tracking-widest italic">{item.metric}</p>
              </div>

              {/* Before vs After Visual */}
              <div className="space-y-6 mb-10">
                {/* Before */}
                <div className="bg-white p-5 rounded-2xl border-l-4 border-gray-300 shadow-sm opacity-60 group-hover:opacity-80 transition-opacity">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Before Strategy</p>
                      <p className="text-2xl font-bold text-gray-500">{item.beforeValue}</p>
                    </div>
                    <TrendingDown className="text-gray-300" size={24} />
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-center -my-4 relative z-10">
                  <div className="bg-[#76153C] text-white p-2 rounded-full shadow-lg">
                    <ArrowRight size={20} />
                  </div>
                </div>

                {/* After - Your Brand Color */}
                <div className="bg-white p-5 rounded-2xl border-l-4 border-[#76153C] shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
                  {/* Background Highlight */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#76153C]/5 rounded-bl-full"></div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <p className="text-[10px] font-bold text-[#76153C] uppercase tracking-wider">After Strategy</p>
                      <p className="text-3xl font-black text-gray-900">{item.afterValue}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <TrendingUp className="text-[#76153C] mb-1" size={28} />
                      <span className="text-[#76153C] font-black text-xs">{item.growth}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-[10px] font-black text-gray-500 uppercase">
                    <CheckCircle2 size={12} className="text-[#76153C]" /> {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic font-medium">
            * These results were achieved within 3-6 months of implementing customized digital strategies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;
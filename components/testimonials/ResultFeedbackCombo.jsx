"use client";

import React from "react";
import { TrendingUp, CheckCircle, Quote, Star, ArrowRight } from "lucide-react";

const ResultFeedbackCombo = () => {
  const caseResults = [
    {
      id: 1,
      brand: "Urban Wear Co.",
      metric: "8.4x ROAS",
      before: "$2,500 Sales",
      after: "$21,000 Sales",
      growth: "+740%",
      clientName: "John Anderson",
      role: "E-commerce Manager",
      feedback: "The level of technical expertise and creative strategy provided was beyond our expectations. Our return on ad spend skyrocketed within the first 60 days of the campaign.",
      image: "https://i.pravatar.cc/150?u=john",
    },
    {
      id: 2,
      brand: "Vitality Supplements",
      metric: "450+ Monthly Leads",
      before: "85 Leads",
      after: "480 Leads",
      growth: "+460%",
      clientName: "Sarah Miller",
      role: "Founder & CEO",
      feedback: "We were struggling with high lead costs. After the funnel optimization, not only did our lead volume increase, but the cost per lead dropped significantly.",
      image: "https://i.pravatar.cc/150?u=sarah2",
    }
  ];

  return (
    <section className="py-15 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Impact & Evidence
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Proven Results Meets <br /> 
            <span className="text-[#76153C]">Client Praise</span>
          </h2>
          <p className="text-gray-600 text-lg">
            See exactly how I transformed these brands and what the business owners had to say about the journey.
          </p>
        </div>

        {/* Combo List */}
        <div className="space-y-32">
          {caseResults.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Left Side: Result Card (Data Visualization) */}
              <div className="flex-1 w-full relative">
                <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
                   {/* Background Decorative Text */}
                   <div className="absolute top-10 right-10 text-8xl font-black text-[#76153C]/5 select-none uppercase">
                      Data
                   </div>

                   <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
                      <TrendingUp size={24} className="text-[#76153C]" /> {item.brand} Growth
                   </h3>

                   {/* Before/After Stats */}
                   <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                         <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Starting Phase</p>
                         <p className="text-2xl font-bold text-gray-400 line-through">{item.before}</p>
                      </div>
                      <div className="p-6 bg-[#76153C] rounded-3xl shadow-xl shadow-[#76153C]/20 border border-[#76153C] transform scale-105">
                         <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-2">Current Status</p>
                         <p className="text-2xl font-black text-white">{item.after}</p>
                      </div>
                   </div>

                   {/* High Impact Metric */}
                   <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-[#76153C]/20 text-center">
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Key Performance Indicator</p>
                      <h4 className="text-5xl font-black text-[#76153C]">{item.metric}</h4>
                      <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-black">
                         {item.growth} Growth Rate
                      </div>
                   </div>
                </div>

                {/* Floating Circle Decoration */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#76153C]/5 rounded-full blur-2xl"></div>
              </div>

              {/* Right Side: Feedback Content */}
              <div className="flex-1">
                <div className="bg-white relative">
                   <Quote size={60} className="text-[#76153C]/10 absolute -top-10 -left-6" fill="currentColor" />
                   
                   <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#76153C] text-[#76153C]" />
                      ))}
                   </div>

                   <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-8">
                     "{item.feedback}"
                   </p>

                   {/* Client Profile */}
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#76153C] p-1 shadow-lg">
                         <img src={item.image} alt={item.clientName} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div>
                         <h4 className="text-xl font-black text-gray-900">{item.clientName}</h4>
                         <p className="text-gray-500 font-bold flex items-center gap-1">
                            {item.role} <CheckCircle size={14} className="text-blue-500" />
                         </p>
                      </div>
                   </div>

                   <a 
                    href="#cta" 
                    className="inline-flex items-center gap-2 text-[#76153C] font-black text-lg group"
                   >
                     Get Similar Results <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                   </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultFeedbackCombo;
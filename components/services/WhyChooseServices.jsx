"use client";

import React from "react";
import { ShieldCheck, Zap, BarChart3, HeartHandshake, Eye, Sparkles } from "lucide-react";

const WhyChooseServices = () => {
  const reasons = [
    {
      title: "Data-Driven Decisions",
      desc: "I don't rely on guesswork. Every strategy is backed by deep market research and real-time data analysis.",
      icon: <BarChart3 size={24} />,
    },
    {
      title: "Focus on ROI",
      desc: "My primary goal is to ensure that every dollar you spend on marketing brings back maximum profit to your business.",
      icon: <Zap size={24} />,
    },
    {
      title: "Full Transparency",
      desc: "You will have 100% visibility into your ad accounts and spend. No hidden fees, just honest results.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Customized for Your Brand",
      desc: "I create bespoke marketing funnels that match your specific brand voice and business objectives.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Omnichannel Presence",
      desc: "I help your brand stay consistent across Facebook, Instagram, Google, and TikTok for a seamless customer journey.",
      icon: <Eye size={24} />,
    },
    {
      title: "Ongoing Optimization",
      desc: "The digital world changes fast. I constantly tweak and optimize your campaigns to keep them performing at their best.",
      icon: <HeartHandshake size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              The Advantage
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Why My Services Get <br /> 
              <span className="text-[#76153C]">Better Results</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              In a crowded digital space, you need more than just "posts." You need a strategic partner who understands the psychology of buyers and the technicality of algorithms.
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                  <span className="text-[#76153C] font-bold text-xl">5+</span>
                </div>
                <p className="text-sm font-bold text-gray-700 uppercase tracking-tighter">Years of <br /> Expertise</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                  <span className="text-[#76153C] font-bold text-xl">150+</span>
                </div>
                <p className="text-sm font-bold text-gray-700 uppercase tracking-tighter">Brands <br /> Scaled</p>
              </div>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#76153C]/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#76153C]/5 text-[#76153C] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#76153C] group-hover:text-white transition-all">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#76153C] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseServices;
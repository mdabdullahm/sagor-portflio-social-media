"use client";

import React from "react";
import { DollarSign, Facebook, Instagram, Search, Music2, AlertCircle, CheckCircle2 } from "lucide-react";

const AdBudget = () => {
  const platformBudgets = [
    {
      platform: "Meta Ads (FB/IG)",
      minBudget: "$5 - $10 / Day",
      recommendation: "Best for local awareness and initial testing phases.",
      icon: <Facebook size={24} />,
      color: "blue"
    },
    {
      platform: "Google Search Ads",
      minBudget: "$10 - $20 / Day",
      recommendation: "Needed to compete for high-intent keywords effectively.",
      icon: <Search size={24} />,
      color: "orange"
    },
    {
      platform: "TikTok Ads",
      minBudget: "$20 / Day",
      recommendation: "Platform minimum for campaigns to trigger the algorithm.",
      icon: <Music2 size={24} />,
      color: "black"
    }
  ];

  return (
    <section className="py-15 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Investment Guide
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            What is the Minimum <span className="text-[#76153C]">Ad Budget?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            There is no fixed price, but to see meaningful data and ROI, here is a breakdown of recommended starting budgets per platform.
          </p>
        </div>

        {/* Platform Budget Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {platformBudgets.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#76153C]/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#76153C] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{item.platform}</h3>
              <div className="inline-block bg-[#76153C]/10 text-[#76153C] px-4 py-1.5 rounded-lg text-lg font-black mb-4">
                {item.minBudget}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.recommendation}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Dive Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-xl">
          <div>
            <div className="flex items-center gap-3 text-[#76153C] mb-6">
              <AlertCircle size={32} />
              <h3 className="text-2xl font-black">Understanding the "Testing" Phase</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              In the first 7-10 days, the platform algorithms are in the <strong>"Learning Phase."</strong> During this time, the system is finding out who is most likely to click or buy. 
              Small budgets take longer to exit this phase, while a healthy budget allows us to find winning audiences faster.
            </p>
            <ul className="space-y-4">
              {[
                "Testing requires at least $50-$100 per campaign.",
                "High-ticket products need higher daily budgets.",
                "Budget can be scaled once we hit a winning ROAS.",
                "Service fees are separate from Ad Spend."
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <CheckCircle2 size={18} className="text-[#76153C]" /> {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Visual Calculator Style Box */}
            <div className="bg-gray-900 p-8 rounded-[2rem] text-white shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="font-bold opacity-60">Estimated Monthly Plan</span>
                <DollarSign size={20} className="text-[#76153C]" />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Daily Ad Spend</span>
                  <span className="font-black">$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Days in a Month</span>
                  <span className="font-black">30 Days</span>
                </div>
                <div className="flex justify-between text-[#76153C] pt-4 border-t border-white/10">
                  <span className="font-black text-lg">Total Monthly Spend</span>
                  <span className="font-black text-2xl">$300.00</span>
                </div>
              </div>
              <a 
                href={`https://wa.me/8801788819781?text=Hello! I want to discuss a budget plan for my business.`}
                target="_blank"
                className="block w-full text-center bg-[#76153C] text-white py-4 rounded-xl font-bold mt-10 hover:opacity-90 transition-all"
              >
                Get Custom Budget Plan
              </a>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#76153C]/10 rounded-[2rem] -z-0"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdBudget;
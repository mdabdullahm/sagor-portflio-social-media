"use client";

import React from "react";
import { CheckCircle, ShieldCheck, Zap, HeartHandshake, BarChart, Globe } from "lucide-react";

const WhyWorkWithMe = () => {
  const benefits = [
    {
      title: "ROI-Focused Approach",
      desc: "I don't just chase likes and followers; I focus on strategies that drive actual sales and revenue for your business.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Customized Strategies",
      desc: "Every business is unique. I create personalized marketing plans tailored specifically to your brand goals.",
      icon: <Zap size={24} />,
    },
    {
      title: "100% Transparency",
      desc: "No hidden fluff. You get clear, honest communication and detailed monthly reports on every penny spent.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Latest Tech & Trends",
      desc: "I stay ahead of the curve, utilizing the latest AI tools and platform algorithms to give you a competitive edge.",
      icon: <Globe size={24} />,
    },
    {
      title: "Long-term Partnership",
      desc: "I work as an extension of your team, caring about your brand’s success as much as you do.",
      icon: <HeartHandshake size={24} />,
    },
    {
      title: "Verified Results",
      desc: "Proven track record of scaling brands across various niches with sustainable and organic growth.",
      icon: <CheckCircle size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Your Success, My Mission
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            What Sets Me <span className="text-[#76153C]">Apart?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Beyond just managing ads, I provide a comprehensive growth ecosystem for your brand to thrive in the digital age.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#76153C]/20 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#76153C]/5 text-[#76153C] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#76153C] transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-4 group-hover:border-[#76153C]/30 transition-all">
                "{benefit.desc}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Small CTA */}
        <div className="mt-16 bg-white border border-gray-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i+20}`} 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="client"
                />
              ))}
            </div>
            <p className="text-gray-700 font-medium">Join 50+ businesses already growing with me.</p>
          </div>
          <button className="text-[#76153C] font-bold underline underline-offset-4 hover:opacity-70 transition-all">
            Read Success Stories
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithMe;
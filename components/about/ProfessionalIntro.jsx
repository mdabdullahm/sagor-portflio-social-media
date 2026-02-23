"use client";

import React from "react";
import { Briefcase, Target, TrendingUp, Download } from "lucide-react";

const ProfessionalIntro = () => {
  const coreValues = [
    {
      icon: <Target size={24} />,
      title: "Goal Oriented",
      desc: "I focus on ROI-driven strategies that align with your business objectives."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Data-Driven",
      desc: "Every campaign I run is backed by deep market research and analytics."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Industry Expert",
      desc: "Years of experience managing diverse brands in the social media landscape."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Professional Portrait */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              {/* Replace this URL with your actual professional photo */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-r-8 border-[#76153C]">
                <img 
                  src="/about.jpeg" 
                  alt="Professional Marketer"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Decorative Badge */}
              <div className="absolute -top-8 -right-8 bg-[#76153C] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-black italic">"Results</p>
                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Matter Most"</p>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#76153C]/5 rounded-full blur-3xl -z-0"></div>
          </div>

          {/* Right Side: Professional Content */}
          <div className="flex-1">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              My Professional Mission
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Crafting Strategies that <span className="text-[#76153C]">Connect & Convert</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Hello! I'm Sagor a dedicated Digital Marketer with a passion for helping brands navigate the ever-evolving social media landscape. I don't just post content; I build digital ecosystems that drive engagement and boost revenue.
            </p>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              My journey started with a simple fascination for how people interact online. Today, I use that curiosity combined with advanced analytics to help businesses like yours stand out in a crowded market.
            </p>

            {/* Core Values List */}
            <div className="space-y-6 mb-12">
              {coreValues.map((value, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-[#76153C]/10 text-[#76153C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#76153C] group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV / Contact Action */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#76153C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 flex items-center gap-2">
                <Download size={20} /> Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfessionalIntro;
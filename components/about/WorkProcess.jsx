"use client";

import React from "react";
import { Search, PenTool, Rocket, BarChart4, PieChart } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Research",
      desc: "I start by understanding your brand, goals, and target audience to build a solid foundation.",
      icon: <Search size={24} />,
    },
    {
      id: "02",
      title: "Strategy Development",
      desc: "Creating a customized marketing roadmap including platform selection and campaign planning.",
      icon: <PieChart size={24} />,
    },
    {
      id: "03",
      title: "Creative Execution",
      desc: "Developing high-quality content and setting up ads across social media platforms.",
      icon: <PenTool size={24} />,
    },
    {
      id: "04",
      title: "Launch & Monitor",
      desc: "Your campaigns go live! I continuously monitor performance to ensure everything is on track.",
      icon: <Rocket size={24} />,
    },
    {
      id: "05",
      title: "Optimize & Report",
      desc: "Analyzing data to maximize ROI and providing detailed reports on your business growth.",
      icon: <BarChart4 size={24} />,
    },
  ];

  return (
    <section className="py-15 bg-gray-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            How I Work
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            My Proven <span className="text-[#76153C]">Working Process</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A transparent and results-driven workflow designed to take your brand from zero to hero.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Step Number & Icon Box */}
                <div className="relative mb-8">
                  {/* Step Number */}
                  <span className="absolute -top-4 -right-4 bg-white border border-gray-100 text-[#76153C] text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                    {step.id}
                  </span>
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 bg-white border-4 border-gray-50 text-[#76153C] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#76153C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA within Process */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 font-medium bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Ready to start your first campaign?
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
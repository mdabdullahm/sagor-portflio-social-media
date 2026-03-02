"use client";

import React from "react";
import { FileText, BarChart, PieChart, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const MonthlyReports = () => {
  const reportFeatures = [
    {
      title: "Key Metrics Tracking",
      desc: "Detailed analysis of Sales, Leads, CTR, and ROAS to measure success.",
      icon: <BarChart size={20} />
    },
    {
      title: "Platform Breakdown",
      desc: "Individual performance data for Facebook, Instagram, Google, and TikTok.",
      icon: <PieChart size={20} />
    },
    {
      title: "Future Strategy",
      desc: "Actionable insights and a roadmap for the upcoming month's growth.",
      icon: <Calendar size={20} />
    },
    {
      title: "Live Strategy Call",
      desc: "A 30-minute monthly meeting to discuss results and new opportunities.",
      icon: <FileText size={20} />
    }
  ];

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text Content */}
          <div className="flex-1">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              Transparency
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Detailed Monthly <br /> 
              <span className="text-[#76153C]">Performance Reports</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Yes, transparency is at the core of my service. I provide comprehensive monthly (and weekly) reports so you know exactly how your budget is being spent and what results we are achieving.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {reportFeatures.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-[#76153C]/10 text-[#76153C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#76153C] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 font-black text-[#76153C] group">
              View a Sample Report <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side: Visual Mockup */}
          <div className="flex-1 relative w-full">
            <div className="relative z-10 bg-gray-50 p-6 md:p-10 rounded-[3rem] border border-gray-100 shadow-2xl">
              {/* Fake Report Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] font-black text-[#76153C] uppercase tracking-widest">Monthly Growth Report</p>
                  <h3 className="text-xl font-black text-gray-900">Campaign Insights</h3>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                  Active
                </div>
              </div>

              {/* Progress Bars Mockup */}
              <div className="space-y-6">
                {[
                  { label: "Return on Ad Spend (ROAS)", value: "85%", color: "bg-[#76153C]" },
                  { label: "Conversion Rate", value: "72%", color: "bg-gray-800" },
                  { label: "Audience Engagement", value: "90%", color: "bg-blue-500" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`${stat.color} h-full transition-all duration-1000`} style={{ width: stat.value }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600 font-bold text-xs uppercase">
                  <CheckCircle size={16} className="text-green-500" /> 100% Accurate Data
                </div>
                <div className="text-[10px] font-black text-gray-400">Powered by Google Analytics</div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#76153C]/5 rounded-full blur-3xl -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MonthlyReports;
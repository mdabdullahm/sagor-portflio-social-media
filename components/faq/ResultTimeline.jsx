"use client";

import React from "react";
import { Clock, Zap, BarChart3, Rocket, CheckCircle2 } from "lucide-react";

const ResultTimeline = () => {
  const timelineSteps = [
    {
      period: "Month 1",
      title: "Foundation & Setup",
      desc: "Deep market research, pixel/API setup, auditing previous campaigns, and launching initial testing ads.",
      expectation: "Data collection & initial testing",
      icon: <Clock size={24} />,
    },
    {
      period: "Month 2",
      title: "Optimization Phase",
      desc: "Scaling winning creatives, removing losers, and optimizing the funnel to lower your CPA (Cost Per Acquisition).",
      expectation: "Decreased costs & increased reach",
      icon: <BarChart3 size={24} />,
    },
    {
      period: "Month 3",
      title: "Sustainable Growth",
      desc: "Your ad account is now seasoned. We focus on retargeting and scaling budgets to drive consistent revenue.",
      expectation: "Noticeable ROI & Brand Authority",
      icon: <Zap size={24} />,
    },
    {
      period: "Month 4+",
      title: "Dominating the Market",
      desc: "Expanding to new platforms and audiences. At this stage, your business is growing on autopilot with peak efficiency.",
      expectation: "Significant Profit & Long-term Scaling",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Expectations
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            How Long Does It <br /> 
            Take to See <span className="text-[#76153C]">Results?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Digital marketing is a marathon, not a sprint. Here is a realistic roadmap of what you can expect when working with me.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

          {timelineSteps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              {/* Month Circle */}
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex flex-col items-center justify-center mb-8 mx-auto shadow-lg group-hover:border-[#76153C] group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500">
                <span className="text-xs font-black uppercase tracking-tighter opacity-70">Phase</span>
                <span className="text-xl font-black">{index + 1}</span>
              </div>

              {/* Content Card */}
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 group-hover:bg-white group-hover:shadow-2xl group-hover:border-[#76153C]/20 transition-all duration-500 h-full">
                <div className="flex items-center gap-2 text-[#76153C] mb-4 font-black text-xs uppercase tracking-widest">
                  {step.icon} {step.period}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
                
                {/* Result Expectation Badge */}
                <div className="flex items-start gap-2 pt-4 border-t border-gray-200">
                  <CheckCircle2 size={16} className="text-[#76153C] mt-0.5 shrink-0" />
                  <p className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">
                    <span className="text-[#76153C]">Expect:</span> {step.expectation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Advice / Note */}
        <div className="mt-20 bg-[#76153C] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-[#76153C]/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Why wait 3 months for peak results?</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Platforms like Meta and Google need an "Initial Learning Phase" to understand your audience. 
                The longer we run ads, the smarter the algorithm gets, leading to cheaper leads and higher profit.
              </p>
            </div>
            <a 
              href={`https://wa.me/8801788819781?text=Hello! I want to discuss a 3-month growth plan for my business.`}
              target="_blank"
              className="bg-white text-[#76153C] px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
            >
              Consult a 3-Month Plan
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultTimeline;
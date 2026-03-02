"use client";

import React from "react";
import { PhoneCall, ClipboardCheck, ShieldCheck, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Free Strategy Audit",
      desc: "We start with a 15-minute discovery call to discuss your goals and audit your current marketing setup.",
      icon: <PhoneCall size={24} />,
    },
    {
      id: "02",
      title: "Custom Proposal",
      desc: "I'll create a tailored marketing roadmap and budget plan specifically designed for your business needs.",
      icon: <ClipboardCheck size={24} />,
    },
    {
      id: "03",
      title: "Onboarding & Access",
      desc: "Once we agree, we sign the contract, and you provide me with the necessary access to your ad accounts.",
      icon: <ShieldCheck size={24} />,
    },
    {
      id: "04",
      title: "Campaign Execution",
      desc: "I set up the tracking, design the creatives, and launch your high-performance campaigns.",
      icon: <Rocket size={24} />,
    },
    {
      id: "05",
      title: "Scale & Growth",
      desc: "We monitor data daily, optimize results, and scale budgets to maximize your revenue.",
      icon: <TrendingUp size={24} />,
    }
  ];

  return (
    <section className="py-15 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Onboarding
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Ready to Start? Here is <br /> 
            <span className="text-[#76153C]">The Workflow</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A simple 5-step process to transform your digital presence and achieve your business goals.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group text-center lg:text-left">
              {/* Step Number & Icon */}
              <div className="flex flex-col items-center lg:items-start mb-8">
                <div className="w-20 h-20 bg-white border-4 border-gray-50 text-[#76153C] rounded-full flex items-center justify-center shadow-xl group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-1/2 translate-x-10 lg:translate-x-0 lg:right-auto lg:left-14 bg-[#76153C] text-white text-[10px] font-black px-2 py-1 rounded-md shadow-md">
                  STEP {step.id}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-[#76153C] transition-colors leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>
              
              {/* Desktop Arrow Indicator */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1.5rem)] text-gray-200 transition-colors group-hover:text-[#76153C]">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-24 bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
          <div className="flex-1 text-center lg:text-left">
             <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Taking the First Step is Always Free.</h3>
             <p className="text-gray-500 font-medium">Book your 15-minute strategy audit today and let's find out how we can scale your brand.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
             <a 
              href={`https://wa.me/8801788819781?text=Hello! I want to book a Free Strategy Audit.`}
              target="_blank"
              className="bg-[#76153C] text-white px-10 py-5 rounded-2xl font-black text-lg hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 active:scale-95 flex items-center gap-3"
             >
               Book Free Audit <ArrowRight size={20} />
             </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GettingStarted;
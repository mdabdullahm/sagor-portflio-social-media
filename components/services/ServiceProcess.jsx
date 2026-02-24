"use client";

import React from "react";
import { 
  ClipboardList, 
  Lightbulb, 
  Settings, 
  Rocket, 
  BarChart 
} from "lucide-react";

const ServiceProcess = () => {
  const steps = [
    {
      title: "Deep Consultation",
      desc: "We start with a detailed meeting to understand your business goals, target audience, and current challenges.",
      icon: <ClipboardList size={28} />,
    },
    {
      title: "Strategic Blueprint",
      desc: "I create a customized roadmap for your brand, choosing the best platforms and campaign types for maximum ROI.",
      icon: <Lightbulb size={28} />,
    },
    {
      title: "Setup & Execution",
      desc: "Setting up ad accounts, tracking pixels, and designing high-quality creatives to launch your campaigns.",
      icon: <Settings size={28} />,
    },
    {
      title: "Continuous Monitoring",
      desc: "Campaigns are monitored 24/7. I make real-time adjustments to ensure the best performance and lowest costs.",
      icon: <Rocket size={28} />,
    },
    {
      title: "Reporting & Scaling",
      desc: "You get detailed reports on growth. Once we find winning strategies, we scale them to skyrocket your revenue.",
      icon: <BarChart size={28} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            The Roadmap
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Our Campaign <span className="text-[#76153C]">Lifecycle</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A seamless and transparent journey from the first meeting to seeing your business grow.
          </p>
        </div>

        {/* Vertical/Horizontal Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Step Icon with Number */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white border-2 border-gray-100 text-[#76153C] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500 group-hover:scale-110 relative z-10">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#76153C] text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#76153C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>

                {/* Animated Arrow (Desktop Only - except for last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-1.5rem)] text-gray-200 group-hover:text-[#76153C] transition-colors">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path d="M1 10H38M38 10L30 2M38 10L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;
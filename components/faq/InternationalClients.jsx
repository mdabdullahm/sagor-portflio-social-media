"use client";

import React from "react";
import { Globe, Clock, CreditCard, Languages, CheckCircle2, ArrowRight } from "lucide-react";

const InternationalClients = () => {
  const globalFeatures = [
    {
      title: "Timezone Flexibility",
      desc: "I adjust my schedule to match your local business hours for seamless communication.",
      icon: <Clock size={20} />
    },
    {
      title: "Global Payments",
      desc: "Easy payment options through Payoneer, Wise, Stripe, or Direct Wire Transfer.",
      icon: <CreditCard size={20} />
    },
    {
      title: "Market Adaptability",
      desc: "I create strategies that resonate with cultural trends in the US, UK, Canada, and beyond.",
      icon: <Languages size={20} />
    }
  ];

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              Global Reach
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Working with Brands <br /> 
              <span className="text-[#76153C]">Across the Globe.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Yes! 80% of my clients are international. I have successfully managed campaigns for businesses in the USA, UK, UAE, and Australia. I understand the nuances of global markets and am fully equipped to handle cross-border collaborations.
            </p>

            <div className="space-y-6 mb-12">
              {globalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-gray-50 text-[#76153C] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#76153C] group-hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-[#76153C] uppercase tracking-widest">
              <CheckCircle2 size={18} /> Verified Global Experience
            </div>
          </div>

          {/* Right Side: Global Visual Graphic */}
          <div className="flex-1 relative w-full">
            <div className="relative z-10 p-8 md:p-12 bg-[#76153C] rounded-[3rem] shadow-2xl shadow-[#76153C]/30 text-white overflow-hidden">
              {/* Background Map Graphic (Decorative) */}
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                 <Globe size={400} />
              </div>

              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6">Current Client <br /> Locations:</h3>
                
                <ul className="space-y-4 mb-10">
                  {["United States & Canada", "United Kingdom & Europe", "Australia & New Zealand", "Middle East (UAE, Qatar)"].map((location, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-lg">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {location}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 font-black text-white group border-b-2 border-white/20 pb-2 hover:border-white transition-all">
                  Book a Global Strategy Call <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* Background Blob Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#76153C]/10 rounded-full blur-3xl -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InternationalClients;
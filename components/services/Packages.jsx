"use client";

import React from "react";
import { Check, Target, Smartphone, Layers, Music2, Search, TrendingUp } from "lucide-react";

const Packages = () => {
  const servicePackages = [
    {
      title: "Strategy Pack",
      serviceName: "Digital Marketing Strategy",
      price: "199",
      icon: <Target size={24} />,
      features: [
        "Full Business Audit",
        "Competitor Research",
        "Weekly Content Plan",
        "Platform Roadmap"
      ]
    },
    {
      title: "Ads Master",
      serviceName: "Paid Advertising",
      price: "399",
      icon: <Smartphone size={24} />,
      features: [
        "Meta & Google Ads",
        "Pixel & API Setup",
        "Ad Creative Design",
        "Budget Optimization"
      ]
    },
    {
      title: "Social Pro",
      serviceName: "Social Media Management",
      price: "249",
      icon: <Layers size={24} />,
      features: [
        "12 Custom Posts / Mo",
        "Community Engagement",
        "Profile Optimization",
        "Story Updates"
      ]
    },
    {
      title: "Viral Growth",
      serviceName: "TikTok & Reels Marketing",
      price: "299",
      icon: <Music2 size={24} />,
      features: [
        "8 Viral Video Scripts",
        "Trend Analysis",
        "Engagement Strategy",
        "Video SEO Hooks"
      ]
    },
    {
      title: "Search Rank",
      serviceName: "SEO & Website Growth",
      price: "349",
      icon: <Search size={24} />,
      features: [
        "Technical SEO Audit",
        "On-page Optimization",
        "Monthly Backlinks",
        "Site Speed Advice"
      ]
    },
    {
      title: "Insight Plus",
      serviceName: "Data Analytics",
      price: "149",
      icon: <TrendingUp size={24} />,
      features: [
        "Conversion Tracking",
        "Monthly ROI Report",
        "Funnel Analysis",
        "Growth Consulting"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Service Packages
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Specialized <span className="text-[#76153C]">Pricing Plans</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the specific service you need. Transparent pricing with no hidden costs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#76153C]/30 hover:shadow-2xl hover:shadow-[#76153C]/10 transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#76153C] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#76153C]/20 group-hover:scale-110 transition-transform">
                  {pkg.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{pkg.title}</h3>
                  <p className="text-[10px] text-[#76153C] font-bold uppercase tracking-widest">{pkg.serviceName}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-black text-gray-900">${pkg.price}</span>
                <span className="text-gray-500 font-medium"> / start</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <Check size={18} className="text-[#76153C] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full py-4 bg-white border-2 border-[#76153C] text-[#76153C] rounded-xl font-bold hover:bg-[#76153C] hover:text-white transition-all duration-300 active:scale-95 shadow-sm">
                Order This Service
              </button>
            </div>
          ))}
        </div>

        {/* Bundle Message */}
        <div className="mt-16 bg-[#76153C]/5 border border-[#76153C]/10 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Need a Complete Marketing Bundle?</h3>
          <p className="text-gray-600 mb-6">Combine 3 or more services and get a 20% discount on total billing.</p>
          <a href="#contact" className="text-[#76153C] font-black underline underline-offset-8 hover:opacity-70 transition-all">
            Get a Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default Packages;
"use client";

import React from "react";
import { 
  Target, 
  TrendingUp, 
  Layers, 
  Smartphone, 
  Search, 
  Music2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const MainServices = () => {
  const detailedServices = [
    {
      title: "Digital Marketing Strategy",
      desc: "Comprehensive marketing blueprints tailored to your business goals. I analyze your niche and competitors to build a roadmap that works.",
      icon: <Target size={32} />,
      points: [
        "Platform-specific strategy (FB, IG, YT)",
        "Monthly & Weekly campaign planning",
        "Audience persona development",
        "Competitor gap analysis"
      ]
    },
    {
      title: "Paid Advertising (Meta & Google)",
      desc: "Stop wasting budget on ads that don't convert. I manage high-ROI campaigns that target the right people at the right time.",
      icon: <Smartphone size={32} />,
      points: [
        "Advanced Pixel & API setup",
        "A/B testing for creative & copy",
        "Retargeting & Lookalike audiences",
        "Low CPA & High ROAS focus"
      ]
    },
    {
      title: "Social Media Management",
      desc: "Building a brand is more than just posting. I manage your social presence to build community and trust with your audience.",
      icon: <Layers size={32} />,
      points: [
        "Content calendar management",
        "Community engagement & replies",
        "Brand voice & aesthetic consistency",
        "Growth-focused organic strategies"
      ]
    },
    {
      title: "TikTok & Reels Marketing",
      desc: "Short-form video is the king of reach. I help you leverage trends and viral content strategies to dominate TikTok and Instagram Reels.",
      icon: <Music2 size={32} />,
      points: [
        "Viral trend identification",
        "Short-form video scripting",
        "Hook-driven video strategies",
        "Engagement-driven editing style"
      ]
    },
    {
      title: "SEO & Website Growth",
      desc: "I optimize your digital home to ensure it ranks high on search engines and converts visitors into loyal customers.",
      icon: <Search size={32} />,
      points: [
        "Technical & On-page SEO",
        "Keyword research & implementation",
        "Landing page optimization",
        "Website speed & UX audit"
      ]
    },
    {
      title: "Data Analytics & Reporting",
      desc: "Numbers don't lie. I provide transparent, in-depth analysis of your campaign performance so you always know your ROI.",
      icon: <TrendingUp size={32} />,
      points: [
        "Real-time performance tracking",
        "Monthly data-driven insights",
        "Conversion funnel analysis",
        "Clear & actionable growth reports"
      ]
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            What I Offer
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Premium Solutions for <br /> 
            <span className="text-[#76153C]">Growth-Hungry Brands</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#76153C] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#76153C]/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Icon Box */}
                <div className="w-16 h-16 shrink-0 bg-[#76153C] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#76153C]/20 group-hover:rotate-12 transition-transform duration-500">
                  {service.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#76153C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#76153C]" />
                        <span className="text-sm font-semibold text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <button className="flex items-center gap-2 font-bold text-[#76153C] group/btn">
                    Inquire About This Service 
                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MainServices;
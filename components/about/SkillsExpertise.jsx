"use client";

import React from "react";
import { 
  Target, 
  BarChart3, 
  Search, 
  PenTool, 
  Music2, // TikTok এর জন্য আইকন হিসেবে Music2 ব্যবহার করছি
  Smartphone,
  CheckCircle2
} from "lucide-react";

const SkillsExpertise = () => {
  const mainSkills = [
    {
      title: "Digital Marketing Strategy",
      // আপনার দেওয়া পয়েন্টগুলো এখানে প্রফেশনাল ইংলিশে দেওয়া হয়েছে
      desc: "Creating & implementing ROI-driven strategies across Facebook, Instagram, Google, and YouTube. Specialized in monthly & weekly campaign planning.",
      icon: <Target size={30} />,
    },
    {
      title: "Paid Advertising",
      desc: "Expertise in Meta Ads, Google Ads, and LinkedIn Ads with a focus on high-conversion funnels and low CPA.",
      icon: <Smartphone size={30} />,
    },
    {
      title: "Data Analytics",
      desc: "Interpreting complex data to optimize live campaigns and providing detailed growth reports for decision making.",
      icon: <BarChart3 size={30} />,
    },
    {
      title: "SEO Optimization",
      desc: "Improving organic visibility and ranking on major search engines to drive sustainable long-term traffic.",
      icon: <Search size={30} />,
    },
    {
      title: "Content Marketing",
      desc: "Crafting compelling brand stories and viral copy that resonates with your target audience and builds community.",
      icon: <PenTool size={30} />,
    },
    {
      title: "TikTok Marketing", // ইমেইল এর বদলে TikTok
      desc: "Leveraging TikTok trends and short-form video strategies to drive brand virality and reach younger demographics.",
      icon: <Music2 size={30} />,
    },
  ];

  const tools = [
    "Meta Ads Manager", "Google Analytics", "SEMRush", "TikTok Ads", 
    "Canva Pro", "WordPress", "Buffer", "Ahrefs", "CapCut"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
              Expertise
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              My Professional <br /> 
              <span className="text-[#76153C]">Skill Set</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-md">
            I blend strategic planning with creative execution to deliver exceptional results in the digital landscape.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainSkills.map((skill, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#76153C]/20 hover:shadow-2xl hover:shadow-[#76153C]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white text-[#76153C] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#76153C] group-hover:text-white transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#76153C] transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Stack - আপনার ব্র্যান্ড কালার #76153C */}
        <div className="bg-[#76153C] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-[#76153C]/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tools & Tech Stack
              </h3>
              <p className="text-white/70">
                The cutting-edge platforms I use to ensure your brand's growth.
              </p>
            </div>
            
            <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-start gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white hover:text-[#76153C] transition-all cursor-default flex items-center gap-2"
                >
                  <CheckCircle2 size={16} />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsExpertise;
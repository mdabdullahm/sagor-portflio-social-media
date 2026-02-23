"use client";

import React from "react";
import { 
  Target, 
  BarChart3, 
  Search, 
  PenTool, 
  Mail, 
  Smartphone,
  CheckCircle2
} from "lucide-react";

const SkillsExpertise = () => {
  const mainSkills = [
    {
      title: "Social Media Strategy",
      desc: "Developing data-driven plans to increase brand awareness and engagement.",
      icon: <Target size={30} />,
    },
    {
      title: "Paid Advertising",
      desc: "Expertise in Meta Ads, Google Ads, and LinkedIn Ads with high ROI.",
      icon: <Smartphone size={30} />,
    },
    {
      title: "Data Analytics",
      desc: "Interpreting complex data to optimize campaigns and improve performance.",
      icon: <BarChart3 size={30} />,
    },
    {
      title: "Search Engine Optimization",
      desc: "Improving organic visibility and ranking on major search engines.",
      icon: <Search size={30} />,
    },
    {
      title: "Content Marketing",
      desc: "Crafting compelling stories and copy that resonate with the audience.",
      icon: <PenTool size={30} />,
    },
    {
      title: "Email Automation",
      desc: "Setting up high-converting email funnels and personalized sequences.",
      icon: <Mail size={30} />,
    },
  ];

  const tools = [
    "Meta Ads Manager", "Google Analytics", "SEMRush", "Canva Pro", 
    "Mailchimp", "WordPress", "Buffer", "Hootsuite", "Ahrefs"
  ];

  return (
    <section className="py-20 bg-white">
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
            I combine creativity with technical knowledge to deliver exceptional results in the digital space.
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

        {/* Tools & Technologies Stack */}
        <div className="bg-[#76153C] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tools & Tech Stack
              </h3>
              <p className="text-white/70">
                The platforms and software I use daily to drive growth for my clients.
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
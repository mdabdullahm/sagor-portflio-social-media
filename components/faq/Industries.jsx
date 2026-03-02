"use client";

import React from "react";
import { 
  ShoppingBag, 
  Home, 
  Cpu, 
  HeartPulse, 
  GraduationCap, 
  Sparkles,
  Search
} from "lucide-react";

const Industries = () => {
  const industryList = [
    {
      title: "E-commerce & Fashion",
      desc: "Helping online stores scale their revenue through high-ROAS Meta and Google ads.",
      icon: <ShoppingBag size={28} />
    },
    {
      title: "Real Estate",
      desc: "Lead generation strategies to find high-intent buyers and investors for property projects.",
      icon: <Home size={28} />
    },
    {
      title: "Technology & SaaS",
      desc: "Driving user acquisition and brand awareness for software companies and tech startups.",
      icon: <Cpu size={28} />
    },
    {
      title: "Health & Wellness",
      desc: "Marketing funnels for gyms, clinics, and wellness brands to attract local customers.",
      icon: <HeartPulse size={28} />
    },
    {
      title: "Education & Coaching",
      desc: "Scaling online courses and coaching programs through targeted lead magnets and ad funnels.",
      icon: <GraduationCap size={28} />
    },
    {
      title: "Beauty & Lifestyle",
      desc: "Aesthetic-driven social media management and influencer marketing for lifestyle brands.",
      icon: <Sparkles size={28} />
    }
  ];

  return (
    <section className="py-15 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Niches & Expertise
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Industries I <span className="text-[#76153C]">Specialize In</span>
          </h2>
          <p className="text-gray-600 text-lg">
            I have extensive experience working with diverse sectors, helping them dominate their specific market niches.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industryList.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#76153C]/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#76153C]/5 text-[#76153C] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#76153C] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Industry Callout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-white border border-dashed border-[#76153C]/30 rounded-3xl">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#76153C] text-white rounded-full flex items-center justify-center shadow-lg">
                 <Search size={20} />
              </div>
              <p className="text-gray-900 font-bold">Don't see your industry here?</p>
           </div>
           <p className="text-gray-500">I'm always open to exploring new niches. Let's see if we are a good fit!</p>
           <a 
            href="#contact" 
            className="text-[#76153C] font-black underline underline-offset-8 hover:opacity-70 transition-all"
           >
             Check Compatibility
           </a>
        </div>

      </div>
    </section>
  );
};

export default Industries;
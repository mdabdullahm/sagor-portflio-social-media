"use client";

import React from "react";
import { ExternalLink, BarChart, ShieldCheck, Zap } from "lucide-react";

const CampaignScreenshots = () => {
  const screenshots = [
    {
      id: 1,
      platform: "Meta Ads Manager",
      title: "High ROAS E-commerce Campaign",
      metric: "8.5x ROAS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      desc: "Managed $5,000 spend resulting in $42,500 sales for a luxury jewelry brand."
    },
    {
      id: 2,
      platform: "Google Analytics",
      title: "Organic Traffic Growth",
      metric: "+120% Traffic",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      desc: "Consistent 6-month SEO strategy leading to double the organic sessions."
    },
    {
      id: 3,
      platform: "TikTok Ads",
      title: "Viral Lead Generation",
      metric: "$0.80 Per Lead",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
      desc: "Targeted short-form video ads driving high-quality leads for a SaaS startup."
    }
  ];

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Dashboard Proof
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Real Campaign <span className="text-[#76153C]">Dashboards</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Direct screenshots from live accounts showing the scale and efficiency of my marketing efforts.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {screenshots.map((item) => (
            <div key={item.id} className="group">
              {/* Mockup Frame Style */}
              <div className="relative rounded-2xl overflow-hidden border-[6px] border-white shadow-xl bg-white transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                {/* Platform Header */}
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    {item.platform}
                  </span>
                </div>

                {/* Screenshot Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Zoom/Link Overlay */}
                  <div className="absolute inset-0 bg-[#76153C]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-3 bg-white text-[#76153C] rounded-full shadow-lg">
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    <span className="bg-[#76153C]/10 text-[#76153C] text-[10px] font-black px-2 py-1 rounded-md uppercase">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  {/* Verification Tag */}
                  <div className="flex items-center gap-2 text-[#76153C] font-bold text-xs border-t border-gray-100 pt-4">
                    <ShieldCheck size={16} />
                    Verified Performance Data
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Small Call to Action */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-white border border-dashed border-[#76153C]/30 rounded-3xl">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#76153C] text-white rounded-full flex items-center justify-center">
                <BarChart size={20} />
             </div>
             <p className="text-gray-700 font-bold">Want to see more live account proofs?</p>
          </div>
          <a 
             href={`https://wa.me/8801788819781?text=Hello! I want to see more campaign performance proofs.`}
             target="_blank"
             className="flex items-center gap-2 bg-[#76153C] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
          >
             Request Live Demo <Zap size={16} fill="currentColor" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default CampaignScreenshots;
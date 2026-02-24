"use client";

import React, { useState } from "react";
import { Monitor, Smartphone, Zap, LayoutGrid, PlayCircle } from "lucide-react";

const AdCreativeShowcase = () => {
  const [filter, setFilter] = useState("All");

  const creatives = [
    {
      id: 1,
      title: "Summer Collection - FB Feed",
      category: "Social Media",
      type: "Image",
      image: "https://i.ibb.co.com/prnNT93x/2230852.png",
      metric: "CTR: 3.2%"
    },
    {
      id: 2,
      title: "Gadget Unboxing - Reels",
      category: "Video Ads",
      type: "Video",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
      metric: "Avg Watch: 15s"
    },
    {
      id: 3,
      title: "Real Estate - Google Display",
      category: "Display Ads",
      type: "Banner",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
      metric: "Reach: 1M+"
    },
    {
      id: 4,
      title: "Food Delivery - Story Ads",
      category: "Social Media",
      type: "Vertical",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
      metric: "CPA: $0.45"
    },
    {
      id: 5,
      title: "Tech Webinar - YouTube Pre-roll",
      category: "Video Ads",
      type: "Video",
      image: "https://i.ibb.co.com/RkkwfXJ7/Artboard-1.png",
      metric: "View Rate: 45%"
    },
    {
      id: 6,
      title: "Fashion Brand - Carousel Ads",
      category: "Social Media",
      type: "Image",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
      metric: "ROAS: 6.5x"
    }
  ];

  const categories = ["All", "Social Media", "Video Ads", "Display Ads"];

  const filteredItems = filter === "All" 
    ? creatives 
    : creatives.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Creative Portfolio
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            High-Converting <br /> 
            <span className="text-[#76153C]">Ad Creatives</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            A showcase of visually stunning and psychologically driven ad designs that stop the scroll and drive clicks.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                  ? "bg-[#76153C] text-white shadow-lg shadow-[#76153C]/30" 
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#76153C] hover:text-[#76153C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Creatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with Type Badge */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Play Button Overlay for Videos */}
                {item.type === "Video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                    <PlayCircle className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" size={60} />
                  </div>
                )}

                {/* Metric Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                  <p className="text-[10px] font-black text-[#76153C] uppercase tracking-wider flex items-center gap-1">
                    <Zap size={10} fill="currentColor" /> {item.metric}
                  </p>
                </div>
              </div>

              {/* Info Bottom */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <div className="text-[#76153C]/40">
                    {item.category === "Social Media" ? <Smartphone size={16} /> : <Monitor size={16} />}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#76153C] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium italic">
            * All creatives are optimized for psychological hooks and brand consistency.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AdCreativeShowcase;
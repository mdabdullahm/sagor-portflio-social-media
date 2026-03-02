"use client";

import React from "react";
import { PenTool, Video, Image as ImageIcon, Sparkles, CheckCircle2 } from "lucide-react";

const AdCreatives = () => {
  const creativeServices = [
    {
      title: "Ad Copywriting",
      desc: "Writing psychological hooks and persuasive calls to action that drive clicks.",
      icon: <PenTool size={20} />
    },
    {
      title: "Graphic Design",
      desc: "Creating scroll-stopping images and carousels that match your brand identity.",
      icon: <ImageIcon size={20} />
    },
    {
      title: "Video Scripts",
      desc: "Developing high-retention scripts for TikTok, Reels, and YouTube ads.",
      icon: <Video size={20} />
    }
  ];

  return (
    <section className="py-15 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Creative Showreel / Visuals */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Image 1 - Vertical Story Style */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop" 
                  alt="Story Ad Creative"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase">Vertical Ads</p>
                </div>
              </div>

              {/* Image 2 - Feed Style */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl translate-y-12 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
                  alt="Feed Ad Creative"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#76153C]/60 to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase">Feed Carousels</p>
                </div>
              </div>

              {/* Decorative Sparkle Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl z-20 border-4 border-[#76153C]">
                <Sparkles size={32} className="text-[#76153C] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 order-1 lg:order-2">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              Creative Support
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              I Create to <span className="text-[#76153C]">Convert,</span> <br /> 
              Not Just to Look Pretty.
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Yes! I handle the creative side as well. A great strategy fails without a great "Creative." I ensure your ads stop the scroll and turn viewers into buyers through hook-driven design and copy.
            </p>

            <div className="space-y-6 mb-12">
              {creativeServices.map((service, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#76153C]/10 text-[#76153C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#76153C] group-hover:text-white transition-all duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <CheckCircle2 className="text-green-500" size={24} />
              <p className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                High CTR Guaranteed <span className="text-gray-300 mx-2">|</span> Psychological Hooks
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdCreatives;
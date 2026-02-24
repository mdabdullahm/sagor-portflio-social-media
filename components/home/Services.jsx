"use client";

import React, { useState } from "react";
import { 
  BarChart3, 
  PenTool, 
  Users, 
  Target, 
  Megaphone, 
  LineChart,
  X // পপআপ বন্ধ করার জন্য আইকন
} from "lucide-react";

const Services = () => {
  // কোন সার্ভিসটি সিলেক্ট করা হয়েছে তা রাখার জন্য স্টেট
  const [selectedService, setSelectedService] = useState(null);

  const allServices = [
    {
      id: 1,
      title: "Social Strategy",
      shortDesc: "We create effective social media plans for your brand.",
      longDesc: "The foundation of a successful brand is the right strategy. We analyze your business goals, find out who your audience is, and create a complete roadmap to keep you ahead of your competitors. This will increase your brand's reach and engagement several times over.",
      icon: <BarChart3 size={32} />,
    },
    {
      id: 2,
      title: "Content Creation",
      shortDesc: "Attractive graphics videos, and copywriting that will grab the audience's attention.",
      longDesc: "In today's era, content is king. Our creative team designs high-quality social media posts, video editing, and custom graphics for you. We create content that is not only beautiful, but also helps generate direct sales.",
      icon: <PenTool size={32} />,
    },
    {
      id: 3,
      title: "Community Management",
      shortDesc: "Building relationships by replying to comments and messages on your page.",
      longDesc: "When your customers want to contact you it's important to respond quickly. We monitor your social media pages 24/7 respond to comments and build a trusted relationship with customers. This helps build your brand's reputation.",
      icon: <Users size={32} />,
    },
    {
      id: 4,
      title: "Paid Advertising",
      shortDesc: "Reaching customers through Facebook Instagram, and Google Ads.",
      longDesc: "Along with organic reach, paid ads are essential for businesses today. We manage ad campaigns on Facebook and Instagram, ensuring maximum use of your budget. Through accurate targeting, we reach your services to real buyers.",
      icon: <Target size={32} />,
    },
    {
      id: 5,
      title: "Influencer Marketing",
      shortDesc: "Increasing brand credibility through popular influencers.",
      longDesc: "People trust people more than advertisements. We find popular influencers in your niche and promote your product or service through them. This quickly builds trust in your brand in people's minds.",
      icon: <Megaphone size={32} />,
    },
    {
      id: 6,
      title: "Data Analytics",
      shortDesc: "Detailed analysis of monthly work results and growth reports.",
      longDesc: "We don't work blindly. After each campaign, we analyze the data—how many people saw it, how many clicked it, and how many converted to customers. We provide you with these reports every month so you can see the progress of your business with your own eyes.",
      icon: <LineChart size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Our Services
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            We are for your business. <br /> 
            <span className="text-[#76153C]">Best Solution</span> I provide
          </h2>
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#76153C]/30 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-white text-[#76153C] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#76153C] group-hover:text-white transition-all">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-2">
                {service.shortDesc}
              </p>

              {/* বিস্তারিত পড়ুন বাটন */}
              <button 
                onClick={() => setSelectedService(service)}
                className="text-[#76153C] font-bold flex items-center gap-2 group/btn cursor-pointer"
              >
                Read more 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* ----------------- পপআপ (Modal) কোড ----------------- */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* ব্যাকগ্রাউন্ড ব্লার ওভারলে */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            ></div>

            {/* মেইন পপআপ বক্স */}
            <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              {/* পপআপ হেডার ও ক্লোজ বাটন */}
              <div className="flex justify-between items-start p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#76153C]/10 text-[#76153C] rounded-xl">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              {/* পপআপ কন্টেন্ট */}
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {selectedService.longDesc}
                </p>
                
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full bg-[#76153C] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  Okay, close.
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
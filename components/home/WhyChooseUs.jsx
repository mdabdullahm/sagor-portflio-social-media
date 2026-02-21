"use client";

import React from "react";
import { ShieldCheck, Zap, HeartHandshake, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experienced expert team",
      desc: "We have skilled social media managers and content creators who have been working in this sector for a long time.",
      icon: <Award className="text-white" size={24} />,
    },
    {
      title: "Fast results and growth",
      desc: "We don't just do the work, we guarantee to increase your page's followers and engagement within a specified time frame.।",
      icon: <Zap className="text-white" size={24} />,
    },
    {
      title: "Security and privacy",
      desc: "The security of your social media accounts is our top priority. We operate with 100% integrity.",
      icon: <ShieldCheck className="text-white" size={24} />,
    },
    {
      title: "Dedicated support",
      desc: "Our support team is available 24/7 for any issues or needs. We believe in customer relationships.",
      icon: <HeartHandshake className="text-white" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* বাম পাশ: ইমেজ এবং স্ট্যাটাস */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Why Choose Us" 
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
              
              {/* ফ্লোটিং সাকসেস কার্ড */}
              <div className="absolute -bottom-6 -left-6 md:left-10 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#76153C] animate-bounce-slow">
                <p className="text-3xl font-black text-[#76153C]">99%</p>
                <p className="text-sm text-gray-600 font-bold uppercase tracking-tighter">Success rate</p>
              </div>
            </div>
            
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#76153C]/5 rounded-full blur-3xl -z-0"></div>
          </div>

          {/* ডান পাশ: কন্টেন্ট */}
          <div className="flex-1">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              Our specialty
            </h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Why for your business? <br /> 
              <span className="text-[#76153C]">Do we need it?</span>
            </h2>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-5 group">
                  {/* আইকন বক্স */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#76153C] rounded-xl flex items-center justify-center shadow-lg shadow-[#76153C]/30 group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  
                  {/* টেক্সট */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#76153C] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA বাটন */}
            <div className="mt-12">
              <button className="bg-[#76153C] text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-[#76153C]/20 active:scale-95">
                Get a free consultation.
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
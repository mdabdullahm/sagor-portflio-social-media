"use client";

import React from "react";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

const AchievementsStats = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: "150+",
      icon: <Briefcase size={28} />,
      desc: "Successful campaigns delivered."
    },
    {
      label: "Client Satisfaction",
      value: "99%",
      icon: <Users size={28} />,
      desc: "Happy clients worldwide."
    },
    {
      label: "Ad Spend Managed",
      value: "$50K+",
      icon: <Target size={28} />, // আপনি Target বা Dollar আইকন দিতে পারেন
      desc: "Managed with high ROI."
    },
    {
      label: "Campaign Growth",
      value: "300%",
      icon: <TrendingUp size={28} />,
      desc: "Average engagement boost."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* মেইন কন্টেইনার - আপনার ব্র্যান্ড কালার ব্যাকগ্রাউন্ড হিসেবে */}
        <div className="bg-[#76153C] rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-[#76153C]/30 relative overflow-hidden">
          
          {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* আইকন বক্স */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#76153C] transition-all duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                
                {/* বড় সংখ্যা */}
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </h3>
                
                {/* লেবেল */}
                <p className="text-white font-bold text-lg mb-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                
                {/* ছোট বর্ণনা */}
                <p className="text-white/60 text-sm italic">
                  {stat.desc}
                </p>

                {/* ডিভাইডার (শুধুমাত্র লার্জ স্ক্রিনে এবং শেষ আইটেম বাদে) */}
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* নিচের ছোট একটি ট্রাস্ট টেক্সট */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
            <Award className="text-[#76153C]" size={20} />
            Recognized for Excellence in Digital Marketing & Strategy
          </p>
        </div>

      </div>
    </section>
  );
};

// Target আইকন ইমপোর্ট করা হয়নি তাই এখানে ছোট একটি ফিক্স
const Target = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

export default AchievementsStats;
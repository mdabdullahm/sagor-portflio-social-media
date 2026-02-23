"use client";

import React from "react";
import { Calendar, Star, Rocket, Trophy } from "lucide-react";

const MyStory = () => {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      desc: "Started my journey with a curiosity for digital trends and social media algorithms.",
      icon: <Star size={20} />,
    },
    {
      year: "2020",
      title: "Leveling Up",
      desc: "Managed my first big brand and achieved 300% growth in organic engagement within 6 months.",
      icon: <Rocket size={20} />,
    },
    {
      year: "2022",
      title: "Full-Stack Marketer",
      desc: "Mastered Paid Ads, Content Strategy, and Data Analytics to provide 360-degree solutions.",
      icon: <Trophy size={20} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Story Content */}
          <div className="flex-1">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-4">
              My Journey
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              A Story of Passion, <br /> 
              <span className="text-[#76153C]">Data & Creativity</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6 mb-10">
              <p>
                My path into digital marketing wasn't accidental. It started with a fascination for how a simple piece of content could spark conversations across the globe. I spent nights deconstructing viral campaigns to understand the "Why" behind them.
              </p>
              <p>
                Over the years, I've transformed that curiosity into a structured methodology. I believe that marketing is a perfect blend of psychology and numbers. Today, I use this approach to help brands find their unique voice in a noisy digital world.
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {milestones.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Dot icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#76153C] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {item.icon}
                  </div>
                  {/* Card content */}
                  <div className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <time className="font-bold text-[#76153C]">{item.year}</time>
                    </div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Creative Visual */}
          <div className="flex-1 relative w-full">
            <div className="relative group">
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#76153C]/10 rounded-full blur-3xl group-hover:bg-[#76153C]/20 transition-all duration-500"></div>
              
              {/* Image with brand-style frame */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-2 border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
                  alt="My Workspace/Life"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#76153C] to-transparent">
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold opacity-80">Available for Projects</p>
                      <p className="text-xl font-bold">Currently in Dhaka, BD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyStory;
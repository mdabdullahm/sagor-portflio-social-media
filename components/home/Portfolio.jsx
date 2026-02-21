"use client";

import React, { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";

const Portfolio = () => {
  // ক্যাটাগরি ফিল্টার করার জন্য স্টেট (ঐচ্ছিক কিন্তু সুন্দর দেখায়)
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Fashion Brand Campaign",
      category: "Social Media",
      img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Tech Gadget Launch",
      category: "Ad Campaigns",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Restaurant Branding",
      category: "Graphics",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "E-commerce Growth",
      category: "Social Media",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Real Estate Marketing",
      category: "Ad Campaigns",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Corporate Identity",
      category: "Graphics",
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const categories = ["All", "Social Media", "Ad Campaigns", "Graphics"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার অংশ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
              Our work (Portfolio)
            </h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Some of our successes<br /> 
              <span className="text-[#76153C]">Project sample</span>
            </h2>
          </div>

          {/* ফিল্টার বাটনসমূহ */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === cat 
                  ? "bg-[#76153C] text-white shadow-lg shadow-[#76153C]/30" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* পোর্টফোলিও গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl bg-gray-200 aspect-[4/3] cursor-pointer"
            >
              {/* প্রজেক্ট ইমেজ */}
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* ওভারলে (হোভার করলে আসবে) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#76153C]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white/80 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
                
                <div className="mt-4 flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#76153C] hover:bg-gray-100 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#76153C] hover:bg-gray-100 transition-colors">
                    <Plus size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* নিচের CTA বাটন */}
        <div className="mt-16 text-center">
          <button className="border-2 border-[#76153C] text-[#76153C] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#76153C] hover:text-white transition-all shadow-lg active:scale-95">
            View all projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
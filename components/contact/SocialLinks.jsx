"use client";

import React from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Music2, // TikTok এর জন্য
  ArrowUpRight 
} from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "Facebook",
      handle: "@yourusername",
      link: "https://facebook.com/yourprofile",
      icon: <Facebook size={24} />,
      followers: "5k+ Followers"
    },
    {
      name: "Instagram",
      handle: "@your.ig.handle",
      link: "https://instagram.com/yourprofile",
      icon: <Instagram size={24} />,
      followers: "10k+ Followers"
    },
    {
      name: "LinkedIn",
      handle: "in/yourname",
      link: "https://linkedin.com/in/yourprofile",
      icon: <Linkedin size={24} />,
      followers: "500+ Connections"
    },
    {
      name: "TikTok",
      handle: "@your.tiktok",
      link: "https://tiktok.com/@yourprofile",
      icon: <Music2 size={24} />,
      followers: "20k+ Views/Mo"
    },
    {
      name: "YouTube",
      handle: "Your Channel Name",
      link: "https://youtube.com/yourchannel",
      icon: <Youtube size={24} />,
      followers: "2k+ Subscribers"
    },
    {
      name: "Twitter / X",
      handle: "@your_x_handle",
      link: "https://twitter.com/yourprofile",
      icon: <Twitter size={24} />,
      followers: "1k+ Followers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Stay Connected
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Follow My <span className="text-[#76153C]">Digital Journey</span>
          </h2>
          <p className="text-gray-600 text-lg">
            I share daily marketing tips, case studies, and insights across all major platforms. 
            Join my community today!
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#76153C]/30 transition-all duration-500 flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                {/* Icon Box */}
                <div className="w-14 h-14 bg-[#76153C]/5 text-[#76153C] rounded-2xl flex items-center justify-center group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500">
                  {social.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-black text-gray-900 leading-tight">
                    {social.name}
                  </h3>
                  <p className="text-xs text-[#76153C] font-bold mt-0.5">
                    {social.followers}
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-1">
                    {social.handle}
                  </p>
                </div>
              </div>

              {/* Arrow Link */}
              <div className="w-10 h-10 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center group-hover:bg-[#76153C]/10 group-hover:text-[#76153C] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gray-100">
            <div className="bg-white px-6 py-2 rounded-full shadow-sm">
              <p className="text-sm font-bold text-gray-500">
                Join <span className="text-[#76153C]">40,000+</span> marketers following my weekly updates!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialLinks;
"use client";

import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const DirectContact = () => {
  const contactMethods = [
    {
      title: "Email Me",
      value: "hello@yourbrand.com",
      link: "mailto:hello@yourbrand.com",
      icon: <Mail size={24} />,
      desc: "For project inquiries and collaborations."
    },
    {
      title: "WhatsApp / Call",
      value: "+880 1788-819781",
      link: "https://wa.me/8801788819781",
      icon: <Phone size={24} />,
      desc: "Available for quick chats and support."
    },
    {
      title: "Office Location",
      value: "Mirpur DOHS, Dhaka",
      link: "https://maps.google.com",
      icon: <MapPin size={24} />,
      desc: "Visit me for a cup of coffee and strategy."
    }
  ];

  const socials = [
    { name: "Facebook", link: "#", icon: <Facebook size={20} /> },
    { name: "LinkedIn", link: "#", icon: <Linkedin size={20} /> },
    { name: "Instagram", link: "#", icon: <Instagram size={20} /> }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Quick Reach
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Direct <span className="text-[#76153C]">Channels</span>
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a 
              href={method.link} 
              key={index} 
              target="_blank"
              className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#76153C]/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white text-[#76153C] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#76153C] group-hover:text-white transition-all duration-500">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#76153C] transition-colors">{method.title}</h3>
              <p className="text-sm text-gray-400 mb-6 font-medium">{method.desc}</p>
              <div className="flex items-center justify-between text-gray-900 font-black tracking-tight">
                {method.value}
                <ArrowUpRight size={20} className="text-[#76153C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Social Connect Banner */}
        <div className="bg-[#76153C] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-[#76153C]/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Connect on Social Media</h3>
              <p className="text-white/60">Follow me for daily marketing tips and case studies.</p>
            </div>
            
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#76153C] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DirectContact;
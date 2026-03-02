"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Mail, MessageSquare, Clock } from "lucide-react";

const ContactHeader = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#76153C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#76153C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest">
          <Link href="/" className="text-gray-400 hover:text-[#76153C] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-[#76153C]">Contact Me</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#76153C]/10 text-[#76153C] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
          <MessageSquare size={14} fill="currentColor" /> Let's Talk Strategy
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
          Ready to Scale? <br /> 
          <span className="text-[#76153C]">Get In Touch Today</span>
        </h1>

        {/* Short Intro */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
          Have a project in mind or just want to say hi? I'm always open to discussing new 
          projects, creative ideas, or opportunities to be part of your brand's growth.
        </p>

        {/* Contact Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-[#76153C] text-white rounded-xl flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
              <p className="text-sm font-black text-gray-900">hello@yourbrand.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-[#76153C] text-white rounded-xl flex items-center justify-center shrink-0">
              <MessageSquare size={24} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
              <p className="text-sm font-black text-gray-900">+880 1788-819781</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-[#76153C] text-white rounded-xl flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Response Time</p>
              <p className="text-sm font-black text-gray-900">Within 24 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
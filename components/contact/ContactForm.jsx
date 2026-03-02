"use client";

import React, { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // এখানে আপনার ফর্ম সাবমিশন লজিক থাকবে
    setTimeout(() => setStatus("Message Sent Successfully!"), 2000);
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* বাম পাশ: কন্টাক্ট ইনফো ও টেক্সট */}
            <div className="lg:w-1/3 bg-[#76153C] p-10 md:p-16 text-white relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Let's Build Something Great</h3>
                <p className="text-white/80 mb-12 leading-relaxed">
                  Ready to take your brand to the next level? Fill out the form, and I'll get back to you within 24 hours to discuss your project.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase opacity-60">Email Me</p>
                      <p className="font-bold">hello@yourbrand.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase opacity-60">Call / WhatsApp</p>
                      <p className="font-bold">+880 1788-819781</p>
                    </div>
                  </div>
                </div>

                {/* Social Proof in Form */}
                <div className="mt-20 pt-10 border-t border-white/10">
                  <p className="text-sm font-medium opacity-80 italic">
                    "Helping businesses achieve real ROI through data-driven marketing."
                  </p>
                </div>
              </div>
            </div>

            {/* ডান পাশ: আসল ফর্ম */}
            <div className="lg:w-2/3 p-10 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#76153C] focus:ring-4 focus:ring-[#76153C]/5 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#76153C] focus:ring-4 focus:ring-[#76153C]/5 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div className="relative">
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="tel" 
                        placeholder="+880 1xxx-xxxxxx"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#76153C] focus:ring-4 focus:ring-[#76153C]/5 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="relative">
                    <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Select Service</label>
                    <div className="relative">
                      <select 
                        className="w-full pl-4 pr-10 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#76153C] focus:ring-4 focus:ring-[#76153C]/5 outline-none transition-all font-medium appearance-none"
                      >
                        <option>Social Media Strategy</option>
                        <option>Paid Advertising</option>
                        <option>TikTok & Reels Marketing</option>
                        <option>SEO & Web Growth</option>
                        <option>Other Services</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-widest">Your Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-gray-400" size={18} />
                    <textarea 
                      rows="5"
                      placeholder="Tell me about your project goals..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#76153C] focus:ring-4 focus:ring-[#76153C]/5 outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#76153C] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#76153C]/20 hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <Send size={20} /> {status || "Send My Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
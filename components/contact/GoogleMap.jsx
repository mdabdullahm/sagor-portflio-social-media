"use client";

import React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";

const GoogleMap = () => {
  // মিরপুর ডিওএইচএস এর একটি ডামি গুগল ম্যাপ এমবেড লিঙ্ক
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.764516335198!2d90.35824905187315!3d23.805141974751765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c11736932a39%3A0x8979fc9c3a37887e!2sMirpur%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";

  return (
    <section className="py-15 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
            Location
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Find Me <span className="text-[#76153C]">In Person</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you want to meet for a strategy session or just have a cup of coffee, 
            my office doors are always open for creative discussions.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 h-[500px] group">
          
          {/* Real Google Map Iframe */}
          <iframe 
            src={mapUrl}
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Address Card - Brand Color Theme */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto md:w-96 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 z-10 transition-transform group-hover:-translate-y-2 duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#76153C] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#76153C]/30">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 leading-tight">Mirpur DOHS</h3>
                <p className="text-xs font-bold text-[#76153C] uppercase tracking-widest">Main Strategy Hub</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-500 text-sm leading-relaxed">
                Road 10, House 12, Avenue 2, <br />
                Mirpur DOHS, Dhaka 1216, Bangladesh
              </p>
              
              <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                <Clock size={16} className="text-[#76153C]" />
                Mon - Fri: 10:00 AM - 6:00 PM
              </div>
            </div>

            {/* Direction Button */}
            <a 
              href="https://maps.app.goo.gl/yYvS6R7Bw8N5x8J89" // আপনার আসল গুগল ম্যাপ লিঙ্ক এখানে দিন
              target="_blank"
              className="w-full bg-[#76153C] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-[#76153C]/10"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GoogleMap;
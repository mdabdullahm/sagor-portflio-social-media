"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const AboutPreview = () => {
  const features = [
    "Smart Social Media Strategy",
    "Experienced content creator team",
    "24/7 Customer Support",
    "Real-time data analytics"
  ];

  return (
    <section className="py-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* বাম পাশ: ইমেজ এবং স্ট্যাট কার্ড */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative">
              {/* মেইন ইমেজ */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Team Working"
                  className="w-full h-auto"
                />
              </div>

              {/* এক্সপেরিয়েন্স কার্ড - ব্র্যান্ড কালারে */}
              <div className="absolute -bottom-10 -right-10 bg-[#76153C] p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="text-center text-white">
                  <p className="text-4xl font-bold">5+</p>
                  <p className="text-sm opacity-90 uppercase tracking-wider">Years of experience</p>
                </div>
              </div>

              {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#76153C]/20 rounded-2xl -z-0"></div>
            </div>
          </div>

          {/* ডান পাশ: কন্টেন্ট */}
          <div className="flex-1 order-1 lg:order-2">
            <h4 className="text-[#76153C] font-bold tracking-widest uppercase text-sm mb-3">
              Learn about us
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              We don't just provide services we also provide <span className="text-[#76153C]">Ensure success</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nowadays social video is not just about posting it is a medium to grow your brand We take your business from ordinary to extraordinary with the right strategy and creative ideas.
            </p>

            {/* ফিচারের লিস্ট */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#76153C]" size={22} />
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* বাটন */}
            <Link
              href="/about"
              className="inline-block bg-[#76153C] text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg active:scale-95"
            >
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What specific marketing services do you provide?",
      answer: "I offer a complete range of digital marketing services including Social Media Strategy, Meta & Google Ads management, TikTok/Reels marketing, SEO, and Data Analytics. I specialize in ROI-driven campaigns tailored to your business goals."
    },
    {
      question: "How long does it take to see actual results?",
      answer: "While some results like increased engagement can be seen within the first 2 weeks, significant growth and ROI typically take 3 to 6 months. Marketing is a long-term investment, and consistency is key to scaling."
    },
    {
      question: "Do you work with small businesses or startups?",
      answer: "Absolutely! I love helping startups and small businesses build their digital foundation from scratch. I have customized packages designed to fit different budget levels while ensuring high-quality results."
    },
    {
      question: "How do we get started with a project?",
      answer: "The process starts with a Free Strategy Audit. You can fill out the contact form or message me on WhatsApp. After analyzing your brand, I’ll provide a customized roadmap and we can start the execution phase."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both service-specific packages and customized monthly retainers. My pricing is transparent and based on the scope of work. You can check the 'Packages' section on the Services page for detailed pricing."
    },
    {
      question: "Will I get regular reports on my campaign performance?",
      answer: "Yes, transparency is my priority. Depending on your package, you will receive weekly or monthly detailed reports covering all key metrics like ROAS, Reach, Conversion Rate, and overall growth insights."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#76153C]/10 text-[#76153C] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <HelpCircle size={14} /> Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Frequently Asked <span className="text-[#76153C]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about working with me and growing your brand.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-3xl transition-all duration-300 ${
                activeIndex === index 
                ? "border-[#76153C] bg-[#76153C]/5 shadow-xl shadow-[#76153C]/5" 
                : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${
                  activeIndex === index ? "text-[#76153C]" : "text-gray-900"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 p-1 rounded-full transition-all ${
                  activeIndex === index ? "bg-[#76153C] text-white rotate-180" : "bg-gray-200 text-gray-500"
                }`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              {/* Answer with Animation */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed border-t border-[#76153C]/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Still have more questions? 
            <a href="#contact-form" className="text-[#76153C] font-black ml-2 underline underline-offset-4">
              Ask me directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
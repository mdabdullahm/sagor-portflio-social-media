import AdBudget from "@/components/faq/AdBudget";
import AdCreatives from "@/components/faq/AdCreatives";
import GettingStarted from "@/components/faq/GettingStarted";
import Industries from "@/components/faq/Industries";
import InternationalClients from "@/components/faq/InternationalClients";
import MonthlyReports from "@/components/faq/MonthlyReports";
import ResultTimeline from "@/components/faq/ResultTimeline"; // New Timeline Section

export default function FAQPage() {
  return (
    <main>
      
      {/* FAQ Header */}
      <div className="pt-20">
        <section className="py-20 bg-gray-50 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900">Your Questions, <span className="text-[#76153C]">Answered</span></h1>
            <p className="mt-4 text-gray-600">Everything you need to know about scaling your digital presence.</p>
        </section>
      </div>
      <ResultTimeline /> 
      <AdBudget/>
      <MonthlyReports/>
      <AdCreatives/>
      <InternationalClients/>
      <Industries/>
      <GettingStarted/>
      
    </main>
  );
}
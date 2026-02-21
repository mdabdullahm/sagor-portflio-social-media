import AboutPreview from "@/components/home/AboutPreview";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

 export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutPreview/>
      <Services/>
      <WhyChooseUs/>
      <Portfolio/>
      <Testimonials/>
    </main>
  );
}

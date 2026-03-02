import CTA from "@/components/home/CTA";
import ResultFeedbackCombo from "@/components/testimonials/ResultFeedbackCombo";
import ScrollingTestimonials from "@/components/testimonials/ScrollingTestimonials";
import TestimonialsHeader from "@/components/testimonials/TestimonialsHeader"; // Import it
import TrustBadges from "@/components/testimonials/TrustBadges";

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHeader />
      <ScrollingTestimonials/>
      <ResultFeedbackCombo/>
      <TrustBadges/>
      <CTA />
    </main>
  );
}
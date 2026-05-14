import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestinations />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </div>
  );
}

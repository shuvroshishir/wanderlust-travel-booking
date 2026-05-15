import Banner from "@/components/home/Banner";
import CTASection from "@/components/home/CTASection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";

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

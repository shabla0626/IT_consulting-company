import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import FeaturedWork from "@/components/home/FeaturedWork";
import Industries from "@/components/home/Industries";
import WhyUs from "@/components/home/WhyUs";
import CareersCTA from "@/components/home/CareersCTA";
import Insights from "@/components/home/Insights";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <FeaturedWork />
      <Industries />
      <WhyUs />
      <CareersCTA />
      <Insights />
      <ContactCTA />
    </main>
  );
}
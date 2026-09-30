import Benefits from "@/components/careers/Benefits";
import CareersCTA from "@/components/careers/CareersCTA";
import CareersHero from "@/components/careers/CareersHero";
import Culture from "@/components/careers/Culture";
import FeaturedRoles from "@/components/careers/FeaturedRoles";
import GrowthDevelopment from "@/components/careers/GrowthDevelopment";
import HiringProcess from "@/components/careers/HiringProcess";
import Teams from "@/components/careers/Teams";
import WhyJoinUs from "@/components/careers/WhyJoinUs";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoinUs />
      <Teams />
      <Culture />
      <Benefits />
      <GrowthDevelopment />
      <HiringProcess />
      <FeaturedRoles />
      <CareersCTA />
    </main>
  );
}
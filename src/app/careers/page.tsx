import CareersHero from "@/components/careers/CareersHero";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import Teams from "@/components/careers/Teams";
import Culture from "@/components/careers/Culture";
import Benefits from "@/components/careers/Benefits";
import GrowthDevelopment from "@/components/careers/GrowthDevelopment";
import HiringProcess from "@/components/careers/HiringProcess";
import FeaturedRoles from "@/components/careers/FeaturedRoles";
import CareersCTA from "@/components/careers/CareersCTA";

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
import IndustriesCTA from "@/components/industries/IndustriesCTA";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryPerspective from "@/components/industries/IndustryPerspective";
import IndustryShowcase from "@/components/industries/IndustryShowcase";

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustryShowcase />
      <IndustryPerspective />
      <IndustriesCTA />
    </main>
  );
}
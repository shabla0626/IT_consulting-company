import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryShowcase from "@/components/industries/IndustryShowcase";
import IndustryPerspective from "@/components/industries/IndustryPerspective";
import IndustriesCTA from "@/components/industries/IndustriesCTA";

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
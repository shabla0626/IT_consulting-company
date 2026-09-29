import WorkHero from "@/components/work/WorkHero";
import CaseStudyShowcase from "@/components/work/CaseStudyShowcase";
import ImpactApproach from "@/components/work/ImpactApproach";
import EngagementAreas from "@/components/work/EngagementAreas";
import WorkIndustries from "@/components/work/WorkIndustries";
import DeliveryPrinciples from "@/components/work/DeliveryPrinciples";
import WorkCTA from "@/components/work/WorkCTA";

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <CaseStudyShowcase />
      <ImpactApproach />
      <EngagementAreas />
      <WorkIndustries />
      <DeliveryPrinciples />
      <WorkCTA />
    </main>
  );
}
import CaseStudyShowcase from "@/components/work/CaseStudyShowcase";
import DeliveryPrinciples from "@/components/work/DeliveryPrinciples";
import EngagementAreas from "@/components/work/EngagementAreas";
import ImpactApproach from "@/components/work/ImpactApproach";
import WorkCTA from "@/components/work/WorkCTA";
import WorkHero from "@/components/work/WorkHero";
import WorkIndustries from "@/components/work/WorkIndustries";

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
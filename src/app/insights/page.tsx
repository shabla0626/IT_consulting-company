import FeaturedInsights from "@/components/insights/FeaturedInsights";
import InsightsCTA from "@/components/insights/InsightsCTA";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsPerspective from "@/components/insights/InsightsPerspective";
import InsightTopics from "@/components/insights/InsightTopics";

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      <FeaturedInsights />
      <InsightTopics />
      <InsightsPerspective />
      <InsightsCTA />
    </main>
  );
}
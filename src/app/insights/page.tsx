import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedInsights from "@/components/insights/FeaturedInsights";
import InsightTopics from "@/components/insights/InsightTopics";
import InsightsPerspective from "@/components/insights/InsightsPerspective";
import InsightsCTA from "@/components/insights/InsightsCTA";

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
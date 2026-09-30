import type { Metadata } from "next";

import FeaturedInsights from "@/components/insights/FeaturedInsights";
import InsightsCTA from "@/components/insights/InsightsCTA";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsPerspective from "@/components/insights/InsightsPerspective";
import InsightTopics from "@/components/insights/InsightTopics";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology Insights & Perspectives";

const pageDescription =
  "Explore perspectives on software engineering, AI and data, cloud and DevOps, cybersecurity, technology strategy, and modern digital delivery.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/insights",
  },

  openGraph: {
    type: "website",
    url: "/insights",
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

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
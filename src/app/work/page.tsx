import type { Metadata } from "next";

import CaseStudyShowcase from "@/components/work/CaseStudyShowcase";
import DeliveryPrinciples from "@/components/work/DeliveryPrinciples";
import EngagementAreas from "@/components/work/EngagementAreas";
import ImpactApproach from "@/components/work/ImpactApproach";
import WorkCTA from "@/components/work/WorkCTA";
import WorkHero from "@/components/work/WorkHero";
import WorkIndustries from "@/components/work/WorkIndustries";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology Consulting Work & Delivery";

const pageDescription =
  "Explore how our technology consulting work approaches software engineering, AI and data, cloud and DevOps, cybersecurity, delivery, and industry technology challenges.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    type: "website",
    url: "/work",
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
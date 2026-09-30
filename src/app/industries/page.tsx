import type { Metadata } from "next";

import IndustriesCTA from "@/components/industries/IndustriesCTA";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryPerspective from "@/components/industries/IndustryPerspective";
import IndustryShowcase from "@/components/industries/IndustryShowcase";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology Consulting by Industry";

const pageDescription =
  "Explore technology consulting approaches across industries, combining software engineering, AI and data, cloud and DevOps, cybersecurity, and technology strategy.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    type: "website",
    url: "/industries",
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
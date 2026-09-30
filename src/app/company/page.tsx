import type { Metadata } from "next";

import CareersBridge from "@/components/company/CareersBridge";
import CompanyCTA from "@/components/company/CompanyCTA";
import CompanyHero from "@/components/company/CompanyHero";
import HowWeWork from "@/components/company/HowWeWork";
import WhatWeBelieve from "@/components/company/WhatWeBelieve";
import WhoWeAre from "@/components/company/WhoWeAre";
import WhyClientsWorkWithUs from "@/components/company/WhyClientsWorkWithUs";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "About Our Technology Consulting Company";

const pageDescription =
  "Learn how our technology consulting team approaches software engineering, AI and data, cloud and DevOps, cybersecurity, collaboration, and long-term technology delivery.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/company",
  },

  openGraph: {
    type: "website",
    url: "/company",
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

export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <WhoWeAre />
      <HowWeWork />
      <WhatWeBelieve />
      <WhyClientsWorkWithUs />
      <CareersBridge />
      <CompanyCTA />
    </main>
  );
}
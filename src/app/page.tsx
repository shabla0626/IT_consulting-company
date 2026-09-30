import type { Metadata } from "next";

import Capabilities from "@/components/home/Capabilities";
import CareersCTA from "@/components/home/CareersCTA";
import ContactCTA from "@/components/home/ContactCTA";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Insights from "@/components/home/Insights";
import WhyUs from "@/components/home/WhyUs";

import { siteConfig } from "@/lib/site";

const pageTitle =
  "Technology Consulting for Software, AI, Cloud & Security";

const pageDescription =
  "Technology consulting for software engineering, AI and data, cloud and DevOps, cybersecurity, and broader technology transformation challenges.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <FeaturedWork />
      <Industries />
      <WhyUs />
      <CareersCTA />
      <Insights />
      <ContactCTA />
    </main>
  );
}